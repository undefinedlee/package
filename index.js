import fs from "fs";
import path from "path";
import glob from "glob";
import semver from "semver";
import console from "./util/console";
import md5 from "./util/md5";
import readJson from "./util/read-json";
import Loader from "./loader/index";
import jsDeps from "./util/js-deps";
import asyncList from "./util/async-list";
import mkdirs from "./util/mkdirs";
import findNodeModules from "./util/find-node-modules";
import tpl from "./util/tpl";
const innerModTpl = fs.readFileSync(path.resolve(__dirname, "inner-mod-tpl.js"), {
				encoding: "utf8"
			});
const singleModTpl = fs.readFileSync(path.resolve(__dirname, "single-mod-tpl.js"), {
				encoding: "utf8"
			});
const versionTpl = fs.readFileSync(path.resolve(__dirname, "version-tpl.js"), {
				encoding: "utf8"
			});

/**
 * 将版本规则解析为固定的打包版本号
 * @param {string} version - 版本规则
 * @param {string} packageVersion - 当前安装项目的版本
 * @description
 		目前支持的版本规则如下（参见语义化版本semver）：
 			1.2.3			-	指定版本，模块打包后为 name/1.2.3/...
 			波浪线~			-	自动升级版本，例如 ~1.2.3 模块打包后为 name/1.2/...
 			补注号^(默认)		-	自动升级版本，例如 ^1.2.3 模块打包后为 name/1/...
 			x范围			-	自动升级版本，例如 1.2.x 模块打包后为 name/1.2/...
 			其他规则			-	转换为当前安装项目的版本，不自动升级
 */
function parseVersion(version, packageVersion){
	if(/^\d+\.\d+\.\d+$/.test(version)){
		return version;
	}else if(/^\~\d+(\.\d+){0,2}$/.test(version)){
		return version.replace(/^\~/, "").split(".").slice(0, 2).join(".");
	}else if(/^\^\d+(\.\d+){0,2}$/.test(version)){
		version = version.replace(/^\^/, "").split(".");
		return version.slice(0, version.findIndex(item=>item!=0) + 1).join(".");
	}else if(/^\d+(\.\d+)?\.x$/.test(version)){
		return version.replace(/\.x$/, "");
	}else{
		console.warn(`版本规则${version}暂时不支持，转换为指定版本${packageVersion}进行打包`);
		return packageVersion;
	}
}

const LoadStatus = {
	loading: 1,
	complete: 2
};

const PACKAGE_PREFIX = "__PACKAGE__:";
const CHECK_PACKAGE = /^__PACKAGE__\:/;
// 替换开头的分隔符
var prefixSepReg = new RegExp("^\\" + path.sep);

// 获取count个TAB键
function getTab(count){
	return new Array(count + 1).join("	");
}

/**
 * 打包一个项目
 * @param {string} projectPath - 项目根目录
 * @param {string} [version="^packageJson.version"] - 需要打包的版本规则
 */
export default function main(projectPath, version){
	// 项目配置
	const packageJson = readJson.sync(path.resolve(projectPath, "package.json"));
	if(!packageJson){
		console.error(`在${projectPath}目录下找不到package.json文件`);
		return;
	}

	// 检测版本号
	if(version){
		// 如果当前安装的项目版本不是需要的版本，则退出打包
		if(!semver.satisfies(packageJson.version, version)){
			console.error(`当前安装的项目${packageJson.name}的版本为${packageJson.version}，与打包需要的版本${version}不匹配`);
			return;
		}
	}else{
		// 如果没有指定版本规则，则设置默认版本规则
		version = `^${packageJson.version}`;
	}

	// 由于1.0.0以下的版本属于非稳定版本，所以打包时会有警告提示
	if(semver.lt(packageJson.version, "1.0.0")){
		console.warn(`项目${packageJson.name}当前的版本为${packageJson.version}，属于非稳定版本，请谨慎使用`);
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

	// 打包入口
	const entries = config.entry || [packageJson.main || "index.js"];
	// 输出目录
	const output = config.output || path.join(process.env.HOME, ".ipack");
	// 后缀查找顺序
	const extensions = config.extensions || ["", ".js", "/index.js"];
	// 加载器列表
	const loader = Loader(projectPath, config.loaders);
	// 依赖项目
	const dependencies = Object.assign(
							{},
							packageJson.dependencies,
							packageJson.devDependencies,
							packageJson.optionalDependencies,
							packageJson.peerDependencies
						);

	// 转换对外依赖路径，增加版本号
	var outerDepCache = {};
	var modVersionCache = {};
	var packageJsonCache = {};

	function getPackageJson(modName){
		return packageJsonCache[modName] || (function(){
			let modPath = findNodeModules(projectPath, modName);
			if(!modPath){
				console.error(`从路径${projectPath}找不到模块${modName}`);
			}else{
				let packageJson = readJson.sync(path.resolve(modPath, "package.json"));
				if(!packageJson){
					console.error(`在${modPath}目录下找不到package.json文件`);
				}

				return packageJsonCache[modName] = packageJson;
			}

			return packageJsonCache[modName] = {};
		})();
	}

	function parseOuterDep(outerUrl){
		return outerDepCache[outerUrl] || (function(){
			var url = outerUrl.split("/");
			var modName = url.shift();
			url = url.join("/");
			var version = modVersionCache[modName] || (function(){
				var version = dependencies[modName];
				version = parseVersion(version, "");
				// 对于无法解析的依赖规则，则使用当前安装的模块的版本
				// 暂时使用简单查找，其中有一个问题
				// 当查找路径中存在当前模块的多个版本时，如果第一个找到的版本不是当前需要的版本，则会有问题
				if(!version){
					let packageJson = getPackageJson(modName);

					version = packageJson.version;
				}
				return modVersionCache[modName] = version;
			})();

			url = url || (function(){
				let packageJson = getPackageJson(modName);
				return packageJson.main || "index.js";
			})();

			if(!/\.js$/.test(url)){
				url += ".js";
			}

			return outerDepCache[outerUrl] = [modName + "@" + version].concat(url).join("/");
		})();
	}

	asyncList(entries.map(entry => {
		return function(callback){
			glob(entry, {
				cwd: projectPath
			}, function(err, files){
				if(err){
					throw err;
				}

				callback(files.map(file => path.join(projectPath, file)));
			});
		};
	})).complete(function(...params){
		var entries = [];
		params.forEach(files => {
			entries = entries.concat(files || []);
		});

		var loadCache = {};

		var extensionFileHash = {};

		(function load(files, depChain, callback){
			asyncList(files.map((file, index) => {
				return function(callback){
					var existsFile = false;
					for(let ext of extensions){
						if(fs.existsSync(file + ext) && fs.statSync(file + ext).isFile()){
							if(ext){
								files[index] = extensionFileHash[file] = file = file + ext;
							}
							existsFile = true;
							break;
						}
					}

					if(!existsFile){
						console.error(`文件${file}不存在`);
						callback();
					}

					if(loadCache[file]){
						loadCache[file].depChains.push(depChain);
						callback();
						return;
					}

					var mod = loadCache[file] = {
						status: LoadStatus.loading,
						depChains: [depChain]
					};

					loader(file, function(content){
						var innerDeps = [];
						var outerDeps = [];
						var fileDir = path.dirname(file);
						jsDeps(content).forEach(function(item){
							if(/^\.{1,2}\//.test(item)){
								innerDeps.push(path.resolve(fileDir, item));
							}else{
								outerDeps.push(item);
							}
						});

						mod.content = content;
						mod.innerDeps = innerDeps;
						mod.outerDeps = outerDeps;
						mod.status = LoadStatus.complete;

						load(innerDeps, [].concat(depChain, file), callback);
					});
				};
			})).complete(callback);
		})(entries, [], function(){
			// 需要单独打包的文件列表
			var singleFiles = [].concat(entries);
			
			// 查找需要单独打包的文件
			function findSingleFile(){
				var hasNewSingleFile = false;
				for(let file in loadCache){
					if(singleFiles.indexOf(file) === -1){
						let nearestDeps = {};
						// 遍历当前文件的被依赖链列表，找出所有最短依赖
						loadCache[file].depChains.forEach(depChain => {
							for(let i = depChain.length - 1; i >= 0; i --){
								let file = depChain[i];
								if(singleFiles.indexOf(file) !== -1){
									nearestDeps[file] = true;
									break;
								}
							}
						});

						// 如果没两个以上单独打包的文件依赖，则此文件也单独打包
						if(Object.keys(nearestDeps).length > 1){
							singleFiles.push(file);
							hasNewSingleFile = true;
						}
					}
				}

				return hasNewSingleFile;
			}

			// 重复遍历直到所有需要单独打包的文件被找出
			var hasNewSingleFile;
			do{
				hasNewSingleFile = findSingleFile();
			}while(hasNewSingleFile);

			var depsHash = {};
			var versionHash = {};

			asyncList(singleFiles.map(file => {
				return function(callback){
					let mods = [];
					(function parseDeps(file){
						mods.push(file);

						let mod = loadCache[file];

						mod.innerDeps.forEach(file => {
							// 检测mods中是否存在，是为了避免循环依赖
							if(singleFiles.indexOf(file) === -1 && mods.indexOf(file) === -1){
								parseDeps(file);
							}
						});
					})(file);

					var deps = [];
					mods = mods.map(mod => {
						let modDir = path.dirname(mod);
						return tpl(innerModTpl, {
							file: mod.replace(projectPath, "").replace(prefixSepReg, ""),
							content: jsDeps.transDeps(loadCache[mod].content, function(depPath){
								if(/^\.{1,2}\//.test(depPath)){
									depPath = path.resolve(modDir, depPath);
									depPath = extensionFileHash[depPath] || depPath;

									if(singleFiles.indexOf(depPath) === -1){
										return {
											requireName: "__inner_require__",
											modId: mods.indexOf(depPath)
										};
									}else{
										let modId = path.join(packageJson.name + "@" + version, depPath.replace(projectPath, ""));
										if(deps.indexOf(modId) === -1){
											deps.push(modId);
										}
										return {
											modId: modId
										};
									}
								}else{
									let modId = parseOuterDep(depPath);
									if(deps.indexOf(modId) === -1){
										deps.push(modId);
									}
									return {
										modId: modId
									};
								}
							}).split("\n").join("\n" + getTab(3))
						});
					});

					mods = mods.join(",\n");
					var fileMd5 = md5(mods);
					file = file.replace(projectPath, "").replace(prefixSepReg, "");

					versionHash[file] = fileMd5;
					if(deps.length){
						depsHash[file] = deps;
					}

					var code = tpl(singleModTpl, {
						file: path.join(packageJson.name + "@" + version, file),
						modId: path.join(packageJson.name + "@" + version, fileMd5),
						mods: mods
					});

					var writeFile = path.join(output, packageJson.name + "@" + version, fileMd5 + ".js");
					mkdirs(path.dirname(writeFile), function(){
						fs.writeFile(writeFile, code, function(err){
							if(err){
								console.error(`文件${writeFile}写入失败`);
							}
							callback();
						});
					});
				}
			})).complete(function(){
				asyncList([function(callback){
					fs.writeFile(path.join(output, packageJson.name + "@" + version, "deps.json"), JSON.stringify(depsHash, null, "	"), function(err){
						if(err){
							console.error();
						}
						callback();
					});
				}, function(callback){
					var code = tpl(versionTpl, {
						modName: packageJson.name,
						modVersion: version,
						versions: JSON.stringify(versionHash, null, "	")
					});
					fs.writeFile(path.join(output, packageJson.name + "@" + version, "version.js"), code, function(err){
						if(err){
							console.error();
						}
						callback();
					});
				}, function(callback){
					fs.writeFile(path.join(output, packageJson.name + "@" + version, "version.json"), JSON.stringify(versionHash, null, "	"), function(err){
						if(err){
							console.error();
						}
						callback();
					});
				}]).complete(function(){
					console.success("打包完成");
				});
			});
		});
	});
};