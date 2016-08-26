import fs from "fs";
import path from "path";
import semver from "semver";
import console from "./util/console";
import md5 from "./util/md5";
import Loader from "./loader/index";
import asyncList from "./util/async-list";
import parseVersion from "./package/parse-version";
import checkPackage from "./package/check-package";
import readEntries from "./util/read-entries";
import loadFiles from "./package/load-files";
import findAllSingleFiles from "./package/find-all-single-files";
import bundleSingle from "./package/bundle-single/index";
import tpl from "./util/tpl";
// 客户端版本文件模板
const versionTpl = fs.readFileSync(path.resolve(__dirname, "version-tpl.js"), {
				encoding: "utf8"
			});

/**
 * 打包一个项目
 * @param {string} projectPath - 项目根目录
 * @param {string} [version="^packageJson.version"] - 需要打包的版本规则
 */
export default function main(projectPath, version){
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

	const packageName = packageJson.name + "@" + version;

	// 打包入口
	const entries = config.entry || [packageJson.main || "index.js"];
	// 输出目录
	const output = path.join(config.output || path.join(process.env.HOME, ".ipack"), packageName);
	// 后缀查找顺序
	const extensions = config.extensions || ["", ".js", "/index.js"];
	// 加载器
	const loader = Loader(projectPath, config.loaders);

	// 解析出所有入口文件
	readEntries(projectPath, entries, function(entries){
		// 加载入口能访问到的所有文件进缓存
		loadFiles(entries, extensions, loader, function(loadCache, extensionFileHash){
			// 需要单独打包的文件列表
			var singleFiles = findAllSingleFiles(entries, loadCache);
			// 单独打包的文件依赖的模块列表
			var depsHash = {};
			// 单独打包的文件的md5版本号
			var versionHash = {};

			asyncList(singleFiles.map(file => {
				return function(callback){
					// 打包独立文件
					bundleSingle(file, {
						projectPath: projectPath,
						packageName: packageName,
						output: output,
						packageJson: packageJson
					}, singleFiles, loadCache, extensionFileHash, function(relativeFile, fileMd5, deps){
						versionHash[relativeFile] = fileMd5;
						if(deps.length){
							depsHash[relativeFile] = deps;
						}
						callback();
					});
				}
			})).complete(function(){
				asyncList([function(callback){
					// 生成依赖关系文件
					var code = JSON.stringify(depsHash, null, "	");
					var codeMd5 = md5(code);
					fs.writeFile(path.join(output, "deps." + codeMd5 + ".json"), code, function(err){
						if(err){
							console.error("生成依赖关系表失败");
						}
						callback({
							name: "deps.js",
							version: codeMd5
						});
					});
				}, function(callback){
					// 生成客户端版本文件
					var code = tpl(versionTpl, {
						modName: packageJson.name,
						modVersion: version,
						versions: JSON.stringify(versionHash, null, "	")
					});
					var codeMd5 = md5(code);
					fs.writeFile(path.join(output, "version." + codeMd5 + ".js"), code, function(err){
						if(err){
							console.error("生成客户端版本文件失败");
						}
						callback({
							name: "version.js",
							version: codeMd5
						});
					});
				}, function(callback){
					// 生成服务端版本文件
					var code = JSON.stringify(versionHash, null, "	");
					var codeMd5 = md5(code);
					fs.writeFile(path.join(output, "version." + codeMd5 + ".json"), code, function(err){
						if(err){
							console.error("生成服务端版本文件失败");
						}
						callback({
							name: "version.json",
							version: codeMd5
						});
					});
				}]).complete(function(...files){
					// 此文件中记录最新一版的deps.js、version.js、version.json的版本
					var newestVersion = {};
					files.forEach(file => {
						newestVersion[file.name] = file.version;
					});

					fs.writeFile(path.join(output, "version.json"), JSON.stringify(newestVersion, null, "	"), function(err){
						if(err){
							console.error("生成版本最新记录文件失败");
						}
						console.success("打包完成");
					});
				});
			});
		});
	});
};