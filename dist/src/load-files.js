"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _cliConsole = require("cli-console");

var _cliConsole2 = _interopRequireDefault(_cliConsole);

var _glob = require("glob");

var _glob2 = _interopRequireDefault(_glob);

var _nodePearls = require("node-pearls");

var _nodePearls2 = _interopRequireDefault(_nodePearls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const LoadStatus = {
	loading: 1,
	complete: 2
};

exports.default = (() => {
	var _ref = _asyncToGenerator(function* (entries, extensions, loader, config, bundleInfo) {
		var loadCache = {};
		var extensionFileHash = {};

		yield function load(items, depChain) {
			return Promise.all(items.map((() => {
				var _ref2 = _asyncToGenerator(function* (item, index) {
					var isAsync = item.isAsync,
					    file = item.value;


					var existsFile = false;
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;

					try {
						for (var _iterator = extensions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							let ext = _step.value;

							if (_fs2.default.existsSync(file + ext) && _fs2.default.statSync(file + ext).isFile()) {
								if (ext) {
									// 这里之所以要重新设置item.value
									// 是因为这里的items是上一层依赖文件的innerDeps
									// 这里需要同步修改
									item.value = extensionFileHash[file] = file = file + ext;
								}
								existsFile = true;
								break;
							}
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}

					if (!existsFile) {
						// 这里放个插件点
						// 用户可以自定义一些路径查找、补全规则
						let tempBundleInfo = bundleInfo.createTemp({
							file
						});
						let _files = yield bundleInfo.plugin.task("dep-no-found", tempBundleInfo);

						if (_files && _files.length) {
							// 这里的原因与上面的innerDeps一样
							_files.forEach(function (file, _index) {
								if (_index === 0) {
									item.value = file;
								} else {
									items.push({
										isAsync,
										value: file
									});
								}

								// 异步加载的模块单独打包
								if (isAsync && entries.indexOf(file) === -1) {
									entries.push(file);
								}
							});
							extensionFileHash[file] = _files;
							yield load(_files, depChain);
						} else {
							_cliConsole2.default.error(`文件${file}不存在`);
							if (depChain.length) {
								_cliConsole2.default.log(`被文件${depChain[depChain.length - 1]}依赖`);
							}
						}
						return;
					} else if (isAsync && entries.indexOf(item.value) === -1) {
						// 异步加载的模块单独打包
						entries.push(item.value);
					}

					if (loadCache[file]) {
						loadCache[file].depChains.push(depChain);
						return;
					}

					var mod = loadCache[file] = {
						status: LoadStatus.loading,
						depChains: [depChain]
					};

					var content = yield loader(file);

					// 如果有预设信息，则移除在预设信息条件下不会执行到的条件分支
					if (config.presets) {
						content = _nodePearls2.default.removeInvalid(content, config.presets);
					}

					var innerDeps = [];
					var outerDeps = [];
					var fileDir = _path2.default.dirname(file);
					config.depsAnalyzer.find(content).forEach(function (item) {
						var isAsync = item.isAsync,
						    value = item.value;


						if (/^\.{1,2}\//.test(value)) {
							if (/\.[a-z]+$/.test(value)) {
								// 如果依赖路径带文件类型后缀，则进行多匹配尝试
								// 主要用在运行时动态加载一批文件中的某个文件
								// 例如，pic文件夹下有很多图片，但是具体使用某个文件，需要运行时才能决定
								// 这时候，就需要通过require("./pic/*.png")通配的方式，把pic下的图片全部打包进来
								// 运行时再动态决定使用哪一个
								try {
									// 处理相对路径
									let prefix = value.match(/^(\.{1,2}\/)+/)[0];
									value = value.replace(/^(\.{1,2}\/)+/, "");
									let relativePath = _path2.default.resolve(fileDir, prefix);

									// 使用glob语法进行多匹配查找
									let files = {};
									_glob2.default.sync(value, {
										cwd: relativePath
									}).forEach(function (file) {
										file = _path2.default.join(relativePath, file);
										files[file] = true;
									});
									files = Object.keys(files);

									if (files.length === 1) {
										// 如果结果只有一个文件，则说明不是多匹配
										// 这样判断其实不严谨，例如./pic/*.png，但是pic下确实只有一个png文件
										// 这样其实是期望是多匹配，但是匹配结果只有一个
										extensionFileHash[_path2.default.join(relativePath, value)] = files[0];
										innerDeps.push({
											isAsync,
											value: files[0]
										});
									} else if (files.length > 1) {
										// 如果有多个结果，则说明是多匹配
										extensionFileHash[_path2.default.join(relativePath, value)] = files;
										innerDeps = innerDeps.concat(files.map(file => ({
											isAsync,
											value: file
										})));
									} else {
										// 如果没匹配到结果，则抛到下一步进行补全后缀再次匹配
										innerDeps.push({
											isAsync,
											value: _path2.default.join(relativePath, value)
										});
									}
								} catch (e) {
									_cliConsole2.default.error(e);
								}
							} else {
								innerDeps.push({
									isAsync,
									value: _path2.default.resolve(fileDir, value)
								});
							}
						} else {
							outerDeps.push({
								isAsync,
								value
							});
						}
					});

					mod.content = content;
					mod.innerDeps = innerDeps;
					mod.outerDeps = outerDeps;
					mod.status = LoadStatus.complete;

					yield load(innerDeps, [].concat(depChain, file));
				});

				return function (_x6, _x7) {
					return _ref2.apply(this, arguments);
				};
			})()));
		}(entries.map(function (file, index) {
			return {
				isAsync: false,
				get value() {
					return entries[index];
				},
				set value(value) {
					entries[index] = value;
				}
			};
		}), []);

		return {
			loadCache,
			extensionFileHash
		};
	});

	return function (_x, _x2, _x3, _x4, _x5) {
		return _ref.apply(this, arguments);
	};
})();