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

var lock = {};

async function start(projectPath, output, packageJson, config, version, callback){
	// 打完包的文件夹名
	const packageName = packageJson.name + "@" + version;

	if(lock[packageName]){
		setTimeout(function(){
			start(projectPath, output, packageJson, config, version, callback);
		}, 100);
		return;
	}else{
		lock[packageName] = true;
	}

	var packagePath = config.relativePath ? path.join(projectPath, config.relativePath) : projectPath;

	// 打包入口
	// var entries = config.entry || ["*.js", "!(node_modules)/**/[!_]*.js"];
	var entries = config.entry || "**/[!_]*.js";
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
		packagePath: packagePath,
		entries: entries,
		output: projectOutput,
		extensions: extensions,
		packageJson: packageJson,
		version: version,
		config: config
	};
	// 插件列表
	const plugin = Plugin(config.plugins);
	// 加载器
	const loader = await Loader(config.loaders, projectInfo, plugin);

	projectInfo.loader = loader;

	await plugin.task("start", projectInfo);
	// 解析出所有入口文件
	readEntries(packagePath, entries, async function(entries){
		await plugin.task("parse-entries", Object.assign(projectInfo, {
			entries: entries
		}));

		// 加载入口能访问到的所有文件进缓存
		loadFiles(entries, extensions, loader, config, async function(loadCache, extensionFileHash){
			await plugin.task("loader-complete", Object.assign(projectInfo, {
				loadCache: loadCache,
				extensionFileHash: extensionFileHash
			}));

			var imageSpriteModId = await createImageSprite(loader.base64Images, projectOutput, packageName, config.useVersion, projectInfo, plugin);

			await plugin.task("before-parse-single", Object.assign(projectInfo, {
				entries: entries
			}));

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
						packagePath: packagePath,
						output: projectOutput,
						packageJson: packageJson,
						plugin: plugin,
						useVersion: config.useVersion,
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

				let depsProjects = {};
				let currentProjectName = packageJson.name;
				for(let key in depsHash){
					depsHash[key].forEach(file => {
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

				var tasks = Object.keys(depsProjects).map(projectName => {
					return function(callback){
						var depProjectPath = findNodeModules(projectPath, projectName);
						if(depProjectPath){
							main(depProjectPath, projectDeps(packageJson)[projectName], output, callback, {
								isInner: true,
								entries: depsProjects[projectName]
							});
						}else{
							console.warn(`从${projectPath}找不到依赖的模块${projectName}`);
							callback();
						}
					};
				});

				if(config.useVersion){
					tasks.push(function(callback){
						// 创建入口文件依赖、版本信息等文件
						createBundleInfo(depsHash, versionHash, projectOutput, packageName, imageSpriteModId, projectInfo, plugin, function(){
							lock[packageName] = false;
							callback();
						});
					});
				}else{
					lock[packageName] = false;
				}

				asyncList(tasks).complete(function(){
					console.success(`${packageJson.name}打包完成`);
					callback && callback();
				});
			});
		});
	});
}

function hasPackaged(output, modId, version, entries){
	if(!fs.existsSync(path.resolve(output, ".package-list.json"))){
		return false;
	}else{
		let lastVersion = require(path.resolve(output, ".package-list.json"))[modId];
		if(lastVersion){
			if(typeof lastVersion === "string"){
				return !semver.gt(lastVersion, version);
			}else{
				return !semver.gt(lastVersion.version, version) && (!entries || entries.every(function(entry){
					return lastVersion.entries.indexOf(entry) !== -1;
				}));
			}
		}else{
			return false;
		}
	}
}

function updatePackageInfo(output, modId, version, entries){
	var file = path.resolve(output, ".package-list.json");
	var hash;
	if(fs.existsSync(file)){
		hash = require(file);
	}else{
		hash = {};
	}

	if(entries){
		let mod = hash[modId];
		if(mod){
			mod.entries.forEach(function(entry){
				if(entries.indexOf(entry) === -1){
					entries.push(entry);
				}
			});
		}
		hash[modId] = {
			version: version,
			entries: entries
		};
	}else{
		hash[modId] = version;
	}

	mkdirs.sync(path.dirname(file));
	fs.writeFileSync(file, JSON.stringify(hash));
}

/**
 * 打包一个项目
 * @param {string} projectPath - 项目根目录
 * @param {string} [version="^packageJson.version"] - 需要打包的版本规则
 */
var plugins = [];
var presets;
var extensions;
var useVersion;
export default function main(projectPath, version, output, callback, options){
	options = options || {};

	var packageJson = checkPackage(projectPath, version, options.isInner);

	if(!packageJson){
		if(!options.isInner){
			packageJson = options.packageJson || {};
			// ["name", "version", "dependencies", "devDependencies", "optionalDependencies", "peerDependencies"].forEach(function(key){
			// 	if(options[key]){
			// 		packageJson[key] = options[key];
			// 	}
			// });

			if(!packageJson.name){
				packageJson.name = "project-name";
			}
			if(!packageJson.version){
				packageJson.version = "0.0.1";
			}
		}else{
			callback && callback();
			return;
		}
	}

	// 如果没有指定打包的版本规则，则设置默认版本规则
	if(!version){
		version = `^${packageJson.version}`;
	}

	// 解析版本规则
	version = parseVersion(version, packageJson.version);

	// 打包配置
	var config;
	var hasConfig;

	if(options.config){
		config = options.config;
		hasConfig = true;
	}else{
		let configPath = path.resolve(projectPath, "pack.config.js");
		if(fs.existsSync(configPath)){
			config = require(configPath);
			hasConfig = true;
		}else{
			if(packageJson.name === "react"){
				if(!options.entries){
					options.entries = [];
				}

				[ "lib/ReactDOM.js", "react.js" ].forEach(function(item){
					if(options.entries.indexOf(item) === -1){
						options.entries.push(item);
					}
				});
			}else if(packageJson.name === "react-native"){
				// react-native模块入口在react-native打包插件里设置
				options.entries = [];
			}

			config = {
				entry: options.entries
			};
			hasConfig = false;
		}
	}

	if(options.isInner){
		config.plugins = plugins;
		config.useVersion = useVersion;
		config.presets = presets;
		if(!config.extensions){
			config.extensions = extensions;
		}
	}else{
		plugins = config.plugins;
		presets = config.presets;
		extensions = config.extensions;
		useVersion = config.useVersion = config.useVersion === false ? false : true;
	}

	// 输出目录
	output = config.output || output || path.join(process.env.HOME, ".ipack");

	if(options.isInner && hasPackaged(output, packageJson.name + "@" + version, packageJson.version, options.entries)){
		callback && callback();
	}else{
		// 只有配置了config的项目，才会更新打包版本
		// 因为对于没有配置config的项目，无法判断入口有哪些，所以不能进行完全打包
		if(hasConfig){
			updatePackageInfo(output, packageJson.name + "@" + version, packageJson.version);
		}else{
			updatePackageInfo(output, packageJson.name + "@" + version, packageJson.version, options.entries);
		}
		// 开始打包
		start(projectPath, output, packageJson, config, version, callback);
	}
};