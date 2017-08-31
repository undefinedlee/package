import fs from "fs";
import path from "path";
import console from "cli-console";
import utils from "node-pearls";
import Loader from "./loader";
import Plugin from "./plugin";
import parseVersion from "./src/parse-version";
import checkPackage from "./src/check-package";
import readEntries from "./util/read-entries";
import loadFiles from "./src/load-files";
import findAllSingleFiles from "./src/find-all-single-files";
import bundleSingle from "./src/bundle-single/index";
import createBundleInfo from "./src/create-bundle-info/index";
import projectDeps from "./src/project-deps";
import * as bundleCache from "./src/bundle-cache";
import semver from "semver";
import rimraf from "rimraf";
import depsAnalyzer from "./util/deps-analyzer";

var lock = {};

async function start(config, packageJson, packageName, isInner){
	if(lock[packageName]){
		// 如果这个包正在打包，则稍后重试
		await new Promise(function(resolve){
			setTimeout(async function(){
				await start(config, packageJson, packageName, isInner);
				resolve();
			}, 100);
		});
		return;
	}else{
		lock[packageName] = true;
	}

	// 打包信息
	// 为了在插件中可以操作关键信息
	// 打包执行过程中的所有关键信息都需要放到bundleInfo中
	// 并且后续所有对关键信息的使用，也都需要从bundleInfo中取
	var bundleInfo = await (async function(){
		return {
			projectPath: config.root,
			packagePath: path.join(config.root, config.relativePath || ""),
			entryRules: config.entries,
			// 打完包的文件夹名
			packageName: packageName,
			// 输出根目录
			outputRoot: config.output,
			// 当前项目输出目录
			output: path.join(config.output, packageName),
			packageJson: packageJson,
			config: config,
			// 是否对文件做内聚
			isCohesion: config.isCohesion === false ? false : true,
			// 是否是打包入口模块
			isEntryProject: !isInner,
			// 后缀查找顺序
			extensions: config.extensions || ["", ".js", "/index.js"],
			// 插件
			plugin: Plugin(config.plugins),
			// 客户字段，用来传递插件内自定义的一些数据
			customerInfo: {},
			// 添加临时信息
			createTemp: function(obj){
				var tempBundleInfo = {};

				Object.keys(bundleInfo).forEach(function(name){
					Object.defineProperty(tempBundleInfo, name, {
						get: function(){
							return bundleInfo[name];
						},
						set: function(value){
							bundleInfo[name] = value;
						}
					});
				});

				Object.keys(obj).forEach(function(name){
					tempBundleInfo[name] = obj[name];
				});

				return tempBundleInfo;
			}
		};
	})();

	// 加载器
	bundleInfo.loader = await Loader(config.loaders, bundleInfo);

	// 删除之前打包内容
	rimraf.sync(bundleInfo.output);

	await bundleInfo.plugin.task("start", bundleInfo);

	// 根据入口规则，解析出所有入口文件
	bundleInfo.entries = await readEntries(
		bundleInfo.packagePath,
		bundleInfo.entryRules
	);

	await bundleInfo.plugin.task("parse-entries", bundleInfo);

	// 加载入口能访问到的所有文件进缓存
	var {
		loadCache,
		extensionFileHash
	} = await loadFiles(
		bundleInfo.entries,
		bundleInfo.extensions,
		bundleInfo.loader,
		bundleInfo.config,
		bundleInfo
	);
	
	// 所有文件缓存
	bundleInfo.loadCache = loadCache;
	// 文件添加后缀后的真实路径与省略后缀路径的对应关系
	bundleInfo.extensionFileHash = extensionFileHash;

	await bundleInfo.plugin.task("loader-complete", bundleInfo);

	// 需要单独打包的文件列表
	bundleInfo.singleFiles = bundleInfo.isCohesion
								? findAllSingleFiles(
									bundleInfo.entries,
									bundleInfo.loadCache
								)
								: Object.keys(bundleInfo.loadCache);

	await bundleInfo.plugin.task("parse-single", bundleInfo);

	// 单独打包文件的md5值
	bundleInfo.md5Hash = {};
	// 单独打包的文件依赖的模块列表
	bundleInfo.depsHash = {};
	// 单独打包文件的尺寸
	bundleInfo.sizeHash = {};
	// 将每个需要单独打包的文件打包生成
	await Promise.all(bundleInfo.singleFiles.map(async file => {
		await bundleInfo.plugin.task("before-bundle", Object.assign({}, bundleInfo, {
			bundleFile: file
		}));
		// 打包独立文件
		var {
			relativeFile,
			md5,
			size,
			deps,
			asyncDeps
		} = await bundleSingle(file, bundleInfo);
		
		bundleInfo.md5Hash[relativeFile] = md5;
		bundleInfo.depsHash[relativeFile] = {
			sync: deps,
			async: asyncDeps
		};
		bundleInfo.sizeHash[relativeFile] = size;

		await bundleInfo.plugin.task("after-bundle", Object.assign({}, bundleInfo, {
			bundleFile: file,
			relativeFile: relativeFile
		}));
	}));

	await bundleInfo.plugin.task("bundle-complete", bundleInfo);

	var tasks = [];

	// 打包依赖
	if(bundleInfo.config.isBundleDeps !== false){
		let depsProjects = {};
		let currentProjectName = bundleInfo.packageJson.name;
		for(let key in bundleInfo.depsHash){
			[].concat(
				bundleInfo.depsHash[key].sync,
				bundleInfo.depsHash[key].async
			).forEach(file => {
				file = file.split("@");

				let projectName = file[0];

				let path = file[1];
				path = path.slice(path.indexOf("/") + 1);

				if(projectName !== currentProjectName){
					if(depsProjects[projectName]){
						if(depsProjects[projectName].indexOf(path) === -1){
							depsProjects[projectName].push(path);
						}
					}else{
						depsProjects[projectName] = [path];
					}
				}
			});
		}

		let ignoreProjects = bundleInfo.config.ignoreProjects || [];

		tasks = Object.keys(depsProjects)
					.filter(projectName => ignoreProjects.indexOf(projectName) === -1)
					.map(async projectName => {
						var depProjectPath = utils.findNodeModules(bundleInfo.projectPath, projectName);
						if(depProjectPath){
							await main({
								...bundleInfo.config,
								root: depProjectPath,
								versionRule: projectDeps(bundleInfo.packageJson)[projectName],
								entries: depsProjects[projectName],
								relativePath: ""
							},{
								isInner: true
							});
						}else{
							console.warn(`从${bundleInfo.projectPath}找不到依赖的模块${projectName}`);
						}
					});
	}

	tasks.push((async function(){
		// 创建入口文件依赖信息文件
		await createBundleInfo(bundleInfo);
		lock[bundleInfo.packageName] = false;
	})());

	await Promise.all(tasks);
	
	console.success(`${bundleInfo.packageJson.name}打包完成`);
}

/**
 * @param {object} config - 打包配置信息
 * @param {object} [_innerConfig] - 内部递归调用传参
 * @returns {Promise}
 */
async function main(config, _innerConfig){
	// 检测打包版本并获取项目描述文件
	var packageJson = checkPackage(config.root, config.versionRule);

	if(!packageJson){
		return;
	}

	// 如果没有指定打包的版本规则，则设置默认版本规则
	if(!config.versionRule){
		config.versionRule = `${packageJson.version}`;
	}

	// 解析版本规则
	var version = parseVersion(config.versionRule, packageJson.version);

	// 输出目录
	config.output = config.output || path.join(process.env.HOME || __dirname, ".enjoy-bundle-temp");

	var packageName = packageJson.name + "@" + version;

	if(config.entries){
		if(!(config.entries instanceof Array)){
			config.entries = [config.entries];
		}
	}else{
		config.entries = [];
	}

	// 依赖分析器
	if(!config.depsAnalyzer){
		config.depsAnalyzer = depsAnalyzer;
	}

	_innerConfig = _innerConfig || {};

	if(!_innerConfig.isInner || (config.entries = bundleCache.check(config.output, packageName, packageJson.version, config.entries))){
		bundleCache.update(config.output, packageName, packageJson.version, config.entries);
		// 开始打包
		await start(config, packageJson, packageName, _innerConfig.isInner);
	}
};

module.exports = main;