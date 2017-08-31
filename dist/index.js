"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

let start = (() => {
	var _ref = _asyncToGenerator(function* (config, packageJson, packageName, isInner) {
		if (lock[packageName]) {
			// 如果这个包正在打包，则稍后重试
			yield new Promise(function (resolve) {
				setTimeout(_asyncToGenerator(function* () {
					yield start(config, packageJson, packageName, isInner);
					resolve();
				}), 100);
			});
			return;
		} else {
			lock[packageName] = true;
		}

		// 打包信息
		// 为了在插件中可以操作关键信息
		// 打包执行过程中的所有关键信息都需要放到bundleInfo中
		// 并且后续所有对关键信息的使用，也都需要从bundleInfo中取
		var bundleInfo = yield _asyncToGenerator(function* () {
			return {
				projectPath: config.root,
				packagePath: _path2.default.join(config.root, config.relativePath || ""),
				entryRules: config.entries,
				// 打完包的文件夹名
				packageName: packageName,
				// 输出根目录
				outputRoot: config.output,
				// 当前项目输出目录
				output: _path2.default.join(config.output, packageName),
				packageJson: packageJson,
				config: config,
				// 是否对文件做内聚
				isCohesion: config.isCohesion === false ? false : true,
				// 是否是打包入口模块
				isEntryProject: !isInner,
				// 后缀查找顺序
				extensions: config.extensions || ["", ".js", "/index.js"],
				// 插件
				plugin: (0, _plugin2.default)(config.plugins),
				// 客户字段，用来传递插件内自定义的一些数据
				customerInfo: {},
				// 添加临时信息
				createTemp: function createTemp(obj) {
					var tempBundleInfo = {};

					Object.keys(bundleInfo).forEach(function (name) {
						Object.defineProperty(tempBundleInfo, name, {
							get: function get() {
								return bundleInfo[name];
							},
							set: function set(value) {
								bundleInfo[name] = value;
							}
						});
					});

					Object.keys(obj).forEach(function (name) {
						tempBundleInfo[name] = obj[name];
					});

					return tempBundleInfo;
				}
			};
		})();

		// 加载器
		bundleInfo.loader = yield (0, _loader2.default)(config.loaders, bundleInfo);

		// 删除之前打包内容
		_rimraf2.default.sync(bundleInfo.output);

		yield bundleInfo.plugin.task("start", bundleInfo);

		// 根据入口规则，解析出所有入口文件
		bundleInfo.entries = yield (0, _readEntries2.default)(bundleInfo.packagePath, bundleInfo.entryRules);

		yield bundleInfo.plugin.task("parse-entries", bundleInfo);

		// 加载入口能访问到的所有文件进缓存

		var _ref4 = yield (0, _loadFiles2.default)(bundleInfo.entries, bundleInfo.extensions, bundleInfo.loader, bundleInfo.config, bundleInfo),
		    loadCache = _ref4.loadCache,
		    extensionFileHash = _ref4.extensionFileHash;

		// 所有文件缓存


		bundleInfo.loadCache = loadCache;
		// 文件添加后缀后的真实路径与省略后缀路径的对应关系
		bundleInfo.extensionFileHash = extensionFileHash;

		yield bundleInfo.plugin.task("loader-complete", bundleInfo);

		// 需要单独打包的文件列表
		bundleInfo.singleFiles = bundleInfo.isCohesion ? (0, _findAllSingleFiles2.default)(bundleInfo.entries, bundleInfo.loadCache) : Object.keys(bundleInfo.loadCache);

		yield bundleInfo.plugin.task("parse-single", bundleInfo);

		// 单独打包文件的md5值
		bundleInfo.md5Hash = {};
		// 单独打包的文件依赖的模块列表
		bundleInfo.depsHash = {};
		// 单独打包文件的尺寸
		bundleInfo.sizeHash = {};
		// 将每个需要单独打包的文件打包生成
		yield Promise.all(bundleInfo.singleFiles.map((() => {
			var _ref5 = _asyncToGenerator(function* (file) {
				yield bundleInfo.plugin.task("before-bundle", Object.assign({}, bundleInfo, {
					bundleFile: file
				}));
				// 打包独立文件

				var _ref6 = yield (0, _index2.default)(file, bundleInfo),
				    relativeFile = _ref6.relativeFile,
				    md5 = _ref6.md5,
				    size = _ref6.size,
				    deps = _ref6.deps,
				    asyncDeps = _ref6.asyncDeps;

				bundleInfo.md5Hash[relativeFile] = md5;
				bundleInfo.depsHash[relativeFile] = {
					sync: deps,
					async: asyncDeps
				};
				bundleInfo.sizeHash[relativeFile] = size;

				yield bundleInfo.plugin.task("after-bundle", Object.assign({}, bundleInfo, {
					bundleFile: file,
					relativeFile: relativeFile
				}));
			});

			return function (_x5) {
				return _ref5.apply(this, arguments);
			};
		})()));

		yield bundleInfo.plugin.task("bundle-complete", bundleInfo);

		var tasks = [];

		// 打包依赖
		if (bundleInfo.config.isBundleDeps !== false) {
			let depsProjects = {};
			let currentProjectName = bundleInfo.packageJson.name;
			for (let key in bundleInfo.depsHash) {
				[].concat(bundleInfo.depsHash[key].sync, bundleInfo.depsHash[key].async).forEach(function (file) {
					file = file.split("@");

					let projectName = file[0];

					let path = file[1];
					path = path.slice(path.indexOf("/") + 1);

					if (projectName !== currentProjectName) {
						if (depsProjects[projectName]) {
							if (depsProjects[projectName].indexOf(path) === -1) {
								depsProjects[projectName].push(path);
							}
						} else {
							depsProjects[projectName] = [path];
						}
					}
				});
			}

			let ignoreProjects = bundleInfo.config.ignoreProjects || [];

			tasks = Object.keys(depsProjects).filter(function (projectName) {
				return ignoreProjects.indexOf(projectName) === -1;
			}).map((() => {
				var _ref7 = _asyncToGenerator(function* (projectName) {
					var depProjectPath = _nodePearls2.default.findNodeModules(bundleInfo.projectPath, projectName);
					if (depProjectPath) {
						yield main(_extends({}, bundleInfo.config, {
							root: depProjectPath,
							versionRule: (0, _projectDeps2.default)(bundleInfo.packageJson)[projectName],
							entries: depsProjects[projectName],
							relativePath: ""
						}), {
							isInner: true
						});
					} else {
						_cliConsole2.default.warn(`从${bundleInfo.projectPath}找不到依赖的模块${projectName}`);
					}
				});

				return function (_x6) {
					return _ref7.apply(this, arguments);
				};
			})());
		}

		tasks.push(_asyncToGenerator(function* () {
			// 创建入口文件依赖信息文件
			yield (0, _index4.default)(bundleInfo);
			lock[bundleInfo.packageName] = false;
		})());

		yield Promise.all(tasks);

		_cliConsole2.default.success(`${bundleInfo.packageJson.name}打包完成`);
	});

	return function start(_x, _x2, _x3, _x4) {
		return _ref.apply(this, arguments);
	};
})();

/**
 * @param {object} config - 打包配置信息
 * @param {object} [_innerConfig] - 内部递归调用传参
 * @returns {Promise}
 */


let main = (() => {
	var _ref9 = _asyncToGenerator(function* (config, _innerConfig) {
		// 检测打包版本并获取项目描述文件
		var packageJson = (0, _checkPackage2.default)(config.root, config.versionRule);

		if (!packageJson) {
			return;
		}

		// 如果没有指定打包的版本规则，则设置默认版本规则
		if (!config.versionRule) {
			config.versionRule = `${packageJson.version}`;
		}

		// 解析版本规则
		var version = (0, _parseVersion2.default)(config.versionRule, packageJson.version);

		// 输出目录
		config.output = config.output || _path2.default.join(process.env.HOME || __dirname, ".enjoy-bundle-temp");

		var packageName = packageJson.name + "@" + version;

		if (config.entries) {
			if (!(config.entries instanceof Array)) {
				config.entries = [config.entries];
			}
		} else {
			config.entries = [];
		}

		// 依赖分析器
		if (!config.depsAnalyzer) {
			config.depsAnalyzer = _depsAnalyzer2.default;
		}

		_innerConfig = _innerConfig || {};

		if (!_innerConfig.isInner || (config.entries = bundleCache.check(config.output, packageName, packageJson.version, config.entries))) {
			bundleCache.update(config.output, packageName, packageJson.version, config.entries);
			// 开始打包
			yield start(config, packageJson, packageName, _innerConfig.isInner);
		}
	});

	return function main(_x7, _x8) {
		return _ref9.apply(this, arguments);
	};
})();

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _cliConsole = require("cli-console");

var _cliConsole2 = _interopRequireDefault(_cliConsole);

var _nodePearls = require("node-pearls");

var _nodePearls2 = _interopRequireDefault(_nodePearls);

var _loader = require("./loader");

var _loader2 = _interopRequireDefault(_loader);

var _plugin = require("./plugin");

var _plugin2 = _interopRequireDefault(_plugin);

var _parseVersion = require("./src/parse-version");

var _parseVersion2 = _interopRequireDefault(_parseVersion);

var _checkPackage = require("./src/check-package");

var _checkPackage2 = _interopRequireDefault(_checkPackage);

var _readEntries = require("./util/read-entries");

var _readEntries2 = _interopRequireDefault(_readEntries);

var _loadFiles = require("./src/load-files");

var _loadFiles2 = _interopRequireDefault(_loadFiles);

var _findAllSingleFiles = require("./src/find-all-single-files");

var _findAllSingleFiles2 = _interopRequireDefault(_findAllSingleFiles);

var _index = require("./src/bundle-single/index");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("./src/create-bundle-info/index");

var _index4 = _interopRequireDefault(_index3);

var _projectDeps = require("./src/project-deps");

var _projectDeps2 = _interopRequireDefault(_projectDeps);

var _bundleCache = require("./src/bundle-cache");

var bundleCache = _interopRequireWildcard(_bundleCache);

var _semver = require("semver");

var _semver2 = _interopRequireDefault(_semver);

var _rimraf = require("rimraf");

var _rimraf2 = _interopRequireDefault(_rimraf);

var _depsAnalyzer = require("./util/deps-analyzer");

var _depsAnalyzer2 = _interopRequireDefault(_depsAnalyzer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var lock = {};

;

module.exports = main;