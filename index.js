import fs from "fs";
import path from "path";
import console from "./util/console";
import Loader from "./loaders/index";
import Plugin from "./plugins/index";
import asyncList from "./util/async-list";
import parseVersion from "./package/parse-version";
import checkPackage from "./package/check-package";
import readEntries from "./util/read-entries";
import loadFiles from "./package/load-files";
import findAllSingleFiles from "./package/find-all-single-files";
import bundleSingle from "./package/bundle-single/index";
import createBundleInfo from "./package/create-bundle-info/index";
import createImageSprite from "./package/create-image-sprite/index";

/**
 * 打包一个项目
 * @param {string} projectPath - 项目根目录
 * @param {string} [version="^packageJson.version"] - 需要打包的版本规则
 */
export default async function main(projectPath, version){
	const packageJson = checkPackage(projectPath, version);

	if(!packageJson){
		return;
	}

	// 如果没有指定打包的版本规则，则设置默认版本规则
	if(!version){
		version = `^${packageJson.version}`;
	}

	// 解析版本规则
	version = parseVersion(version, packageJson.version);

	// 打包配置
	const configPath = path.resolve(projectPath, "pack.config.js");
	var config;
	if(fs.existsSync(configPath)){
		config = require(configPath);
	}else{
		config = {};
	}

	// 打完包的文件夹名
	const packageName = packageJson.name + "@" + version;

	// 打包入口
	const entries = config.entry || [packageJson.main || "index.js"];
	// 输出目录
	const output = path.join(config.output || path.join(process.env.HOME, ".ipack"), packageName);
	// 后缀查找顺序
	const extensions = config.extensions || ["", ".js", "/index.js"];
	// 项目信息，提供给插件使用
	var projectInfo = {
		path: projectPath,
		entries: entries,
		output: output,
		extensions: extensions,
		packageJson: packageJson,
		version: version
	};
	// 插件列表
	const plugin = Plugin(config.plugins);
	// 加载器
	const loader = await Loader(config.loaders, projectInfo, plugin);

	projectInfo.loader = loader;

	await plugin.task("start", projectInfo);
	// 解析出所有入口文件
	readEntries(projectPath, entries, async function(entries){
		await plugin.task("parse-entries", Object.assign(projectInfo, {
			entries: entries
		}));

		// 加载入口能访问到的所有文件进缓存
		loadFiles(entries, extensions, loader, async function(loadCache, extensionFileHash){
			await plugin.task("loader-complete", Object.assign(projectInfo, {
				loadCache: loadCache,
				extensionFileHash: extensionFileHash
			}));

			var imageSpriteModId = await createImageSprite(loader.base64Images, output, packageName);

			// 需要单独打包的文件列表
			var singleFiles = findAllSingleFiles(entries, loadCache);

			await plugin.task("parse-single", Object.assign(projectInfo, {
				singleFiles: singleFiles
			}));

			// 单独打包的文件依赖的模块列表
			var depsHash = {};
			// 单独打包的文件的md5版本号
			var versionHash = {};

			// 将每个需要单独打包的文件打包生成
			asyncList(singleFiles.map(file => {
				return async function(callback){
					await plugin.task("before-bundle", Object.assign({}, projectInfo, {
						bundleFile: file
					}));
					// 打包独立文件
					bundleSingle(file, {
						projectPath: projectPath,
						packageName: packageName,
						output: output,
						packageJson: packageJson,
						plugin: plugin,
						projectInfo
					}, singleFiles, loadCache, extensionFileHash, async function(relativeFile, version, deps){
						versionHash[relativeFile] = version;
						if(deps.length){
							depsHash[relativeFile] = deps;
						}

						await plugin.task("after-bundle", Object.assign({}, projectInfo, {
							bundleFile: file,
							relativeFile: relativeFile,
							bundleVersion: version,
							bundleDeps: deps
						}));

						callback();
					});
				}
			})).complete(async function(){
				await plugin.task("bundle-complete", Object.assign(projectInfo, {
					depsHash: depsHash,
					versionHash: versionHash
				}));

				// 创建入口文件依赖、版本信息等文件
				createBundleInfo(depsHash, versionHash, output, packageName, imageSpriteModId, projectInfo, plugin, function(){
					console.success("打包完成");
				});
			});
		});
	});
};