import fs from "fs";
import path from "path";
import console from "./util/console";
import Loader from "./loaders/index";
import Plugin from "./plugins/index";
import asyncList from "./util/async-list";
import parseVersion from "./src/parse-version";
import checkPackage from "./src/check-package";
import readEntries from "./util/read-entries";
import loadFiles from "./src/load-files";
import findAllSingleFiles from "./src/find-all-single-files";
import bundleSingle from "./src/bundle-single/index";
import createBundleInfo from "./src/create-bundle-info/index";
import createImageSprite from "./src/create-image-sprite/index";
import findNodeModules from "./util/find-node-modules";
import projectDeps from "./src/project-deps";
import semver from "semver";
import mkdirs from "./util/mkdirs";

async function start(projectPath, output, packageJson, config, version, callback){
	// 打完包的文件夹名
	const packageName = packageJson.name + "@" + version;

	// 打包入口
	var entries = config.entry || ["*.js", "!(node_modules)/**/[!_]*.js"];
	if(!(entries instanceof Array)){
		entries = [entries];
	}
	// 是否提取公共
	const isExtractedCommon = !!config.entry;
	// 输出目录
	const projectOutput = path.join(output, packageName);
	// 后缀查找顺序
	const extensions = config.extensions || ["", ".js", "/index.js"];
	// 项目信息，提供给插件使用
	var projectInfo = {
		path: projectPath,
		entries: entries,
		output: projectOutput,
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

			var imageSpriteModId = await createImageSprite(loader.base64Images, projectOutput, packageName);

			// 需要单独打包的文件列表
			var singleFiles = isExtractedCommon ? findAllSingleFiles(entries, loadCache) : entries;

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
						output: projectOutput,
						packageJson: packageJson,
						plugin: plugin,
						projectInfo
					}, singleFiles, loadCache, extensionFileHash, isExtractedCommon, async function(relativeFile, version, deps){
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

				let depsProjects = [];
				let currentProjectName = packageJson.name;
				for(let key in depsHash){
					depsHash[key].forEach(file => {
						let projectName = file.split("@")[0];
						if(projectName !== currentProjectName && depsProjects.indexOf(projectName) === -1){
							depsProjects.push(projectName);
						}
					});
				}

				depsProjects = depsProjects.map(projectName => {
					return function(callback){
						var depProjectPath = findNodeModules(projectPath, projectName);
						if(depProjectPath){
							main(depProjectPath, projectDeps(packageJson)[projectName], output, callback, true);
						}else{
							callback();
						}
					};
				});

				depsProjects.push(function(callback){
					// 创建入口文件依赖、版本信息等文件
					createBundleInfo(depsHash, versionHash, projectOutput, packageName, imageSpriteModId, projectInfo, plugin, callback);
				});

				asyncList(depsProjects).complete(function(){
					console.success(`${packageJson.name}打包完成`);
					callback && callback();
				});
			});
		});
	});
}

function hasPackaged(output, modId, version){
	if(!fs.existsSync(path.resolve(output, ".package-list.json"))){
		return false;
	}else{
		let lastVersion = require(path.resolve(output, ".package-list.json"))[modId];
		return lastVersion && !semver.gt(lastVersion, version);
	}
}

function updatePackageInfo(output, modId, version){
	var file = path.resolve(output, ".package-list.json");
	var hash;
	if(fs.existsSync(file)){
		hash = require(file);
	}else{
		hash = {};
	}
	hash[modId] = version;
	mkdirs.sync(path.dirname(file));
	fs.writeFileSync(file, JSON.stringify(hash));
}

/**
 * 打包一个项目
 * @param {string} projectPath - 项目根目录
 * @param {string} [version="^packageJson.version"] - 需要打包的版本规则
 */
export default function main(projectPath, version, output, callback, isInner){
	const packageJson = checkPackage(projectPath, version);

	if(!packageJson){
		callback && callback();
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

	// 输出目录
	output = config.output || output || path.join(process.env.HOME, ".ipack");

	if(isInner && hasPackaged(output, packageJson.name + "@" + version, packageJson.version)){
		callback && callback();
	}else{
		updatePackageInfo(output, packageJson.name + "@" + version, packageJson.version);
		// 开始打包
		start(projectPath, output, packageJson, config, version, callback);
	}
};