"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _nodePearls = require("node-pearls");

var _nodePearls2 = _interopRequireDefault(_nodePearls);

var _cliConsole = require("cli-console");

var _cliConsole2 = _interopRequireDefault(_cliConsole);

var _convertSourceMap = require("convert-source-map");

var _convertSourceMap2 = _interopRequireDefault(_convertSourceMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (() => {
	var _ref = _asyncToGenerator(function* (configLoaders, bundleInfo) {
		var hooks = [];
		if (bundleInfo.config.loaderHooks && bundleInfo.config.loaderHooks.file) {
			hooks = bundleInfo.config.loaderHooks.file;
		}
		var plugin = bundleInfo.plugin;
		// 当前可使用的所有加载器
		// 用户自定义的加载器优先级高于默认加载器
		var loaders = (configLoaders || []).reverse();

		loaders.forEach(function (loader) {
			// 将单个loader转换为数组
			if (!(loader.loader instanceof Array)) {
				loader.loader = [loader.loader];
			}
		});

		bundleInfo.loaders = loaders;
		yield plugin.task("init-loader", bundleInfo);

		return (() => {
			var _ref2 = _asyncToGenerator(function* (file, options) {
				options = options || {};
				// 查找可处理file文件的第一个加载器配置
				var loader = loaders.find(function (loader) {
					return loader.test.test(file);
				});

				if (!loader) {
					_cliConsole2.default.error(`没有找到可以处理文件${file}的loader`);
					return "";
				}

				var loadFile = (() => {
					var _ref3 = _asyncToGenerator(function* (content) {
						if (options.raw) {
							return content;
						}

						var tempBundleInfo = bundleInfo.createTemp({
							file: file,
							content: content,
							useLoaders: loader.loader
						});
						yield plugin.task("before-loader", tempBundleInfo);
						file = tempBundleInfo.file;
						content = tempBundleInfo.content;
						loader.loader = tempBundleInfo.useLoaders;

						return yield new Promise(function (resolve) {
							// 进入管道模式顺序调用loader
							_nodePearls2.default.pipe(loader.loader.map(function (loader) {
								return function (content) {
									var callback = this.async();

									_asyncToGenerator(function* () {
										var params;
										// 带参数的loader
										if (typeof loader === "object") {
											params = loader.params;
											loader = loader.loader;
										}
										// 如果模块需要的不是原始数据，则一律转换为字符串
										if (!loader.raw && typeof content !== "string") {
											content = content.toString("utf8");

											if (process.env.SM) {
												let tempBundleInfo = bundleInfo.createTemp({
													file: file,
													content: content
												});
												yield plugin.task("before-inject-source-map", tempBundleInfo);
												file = tempBundleInfo.file;
												content = tempBundleInfo.content;

												// 生成最初的sourcemap
												let relativeRoot = bundleInfo.customerInfo.originalProjectPath || bundleInfo.projectPath;
												relativeRoot = relativeRoot.substring(0, relativeRoot.lastIndexOf(_path2.default.sep));
												let relativeFile = file.replace(relativeRoot, "");
												content += "\n" + _convertSourceMap2.default.fromObject({
													version: 3,
													file: relativeFile,
													sourceRoot: "",
													sources: [relativeFile],
													names: [],
													mappings: "AAAA",
													sourcesContent: [content]
												}).toComment({
													// css文件使用多行注释
													multiline: /\.css$/.test(file)
												});

												tempBundleInfo = bundleInfo.createTemp({
													file: file,
													content: content
												});
												yield plugin.task("after-inject-source-map", tempBundleInfo);
												file = tempBundleInfo.file;
												content = tempBundleInfo.content;
											}
										}

										var isSync = true;

										var result = "";
										try {
											result = loader.call(_extends({}, bundleInfo, {
												file: file,
												params: params || {},
												async: function async() {
													isSync = false;

													return function (result) {
														callback(result);
													};
												}
											}), content);
										} catch (e) {
											_cliConsole2.default.error(`[${loader.$name}] loader file ${file} error`);
											_cliConsole2.default.log(e);

											if (!isSync) {
												callback("");
											}
										}

										if (isSync) {
											callback(result);
										}
									})();
								};
							})).start(content).end((() => {
								var _ref5 = _asyncToGenerator(function* (_content) {
									var tempBundleInfo = bundleInfo.createTemp({
										file: file,
										originalContent: content,
										content: _content,
										useLoaders: loader.loader
									});
									yield plugin.task("after-loader", tempBundleInfo);
									file = tempBundleInfo.file;
									content = tempBundleInfo.originalContent;
									_content = tempBundleInfo.content;
									loader.loader = tempBundleInfo.useLoaders;
									resolve(_content);
								});

								return function (_x6) {
									return _ref5.apply(this, arguments);
								};
							})());
						});
					});

					return function loadFile(_x5) {
						return _ref3.apply(this, arguments);
					};
				})();

				var content = "";
				if (_fs2.default.existsSync(file)) {
					let hook = hooks.find(function (hook) {
						return typeof hook.test === "string" ? file.indexOf(hook.test) !== -1 : hook.test.test(file);
					});
					if (hook) {
						if (typeof hook.content === "function") {
							// 如果hook.content是一个函数，则采用依赖注入的方式传递参数
							let args;
							if (hook.params) {
								args = hook.params;
							} else {
								args = hook.content.toString().match(/^function\s*([^\(]+)?\(([^\)]*)\)/);
								if (args && (args = args[2].trim())) {
									args = args[1].split(",").map(function (item) {
										return item.trim();
									});
								} else {
									args = [];
								}
							}

							args = args.map(function (item) {
								switch (item) {
									case "file":
										return file;
									case "content":
										if (hook.raw) {
											return _fs2.default.readFileSync(file);
										} else {
											return _fs2.default.readFileSync(file).toString("utf8");
										}
								}
								return null;
							});

							content = yield loadFile(hook.content.apply(hook, args));
						} else {
							content = yield loadFile(hook.content);
						}
					} else {
						content = yield new Promise(function (resolve, reject) {
							_fs2.default.readFile(file, null, (() => {
								var _ref6 = _asyncToGenerator(function* (err, content) {
									if (err) {
										reject(err);
										return;
									}

									resolve((yield loadFile(content)));
								});

								return function (_x7, _x8) {
									return _ref6.apply(this, arguments);
								};
							})());
						});
					}
				} else {
					if (/^\.(png|jpg|jpeg|gif)$/.test(_path2.default.extname(file))) {
						_cliConsole2.default.warn(`找不到文件${file}`);
					} else {
						_cliConsole2.default.error(`找不到文件${file}`);
					}
				}

				return content;
			});

			return function (_x3, _x4) {
				return _ref2.apply(this, arguments);
			};
		})();
	});

	return function (_x, _x2) {
		return _ref.apply(this, arguments);
	};
})();