// enjoy-common-support@0.0.13/dist/index.js
loader.define("enjoy-common-support@0.0.13", "dist/index.js", "", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// dist/index.js
		function(__inner_require__, exports, module){
			var _Ajax = __inner_require__(1 /*dist/tools/Ajax.js*/);
			
			var _Ajax2 = _interopRequireDefault(_Ajax);
			
			var _events = __inner_require__(2 /*dist/tools/events.js*/);
			
			var _events2 = _interopRequireDefault(_events);
			
			var _Service = __inner_require__(3 /*dist/tools/Service.js*/);
			
			var _Service2 = _interopRequireDefault(_Service);
			
			var _Promise = __inner_require__(4 /*dist/tools/Promise.js*/);
			
			var _Promise2 = _interopRequireDefault(_Promise);
			
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			
			module.exports = {
				ajax: _Ajax2.default,
				events: _events2.default,
				Service: _Service2.default,
				Promise: _Promise2.default
			};
		},
		// dist/tools/Ajax.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			
			exports.default = function (url, options) {
				options = options || {};
			
				return new Promise(function (resolve, reject) {
					var _this = this;
			
					fetch(url, {
						method: (options.method || "GET").toUpperCase(),
						params: JSON.stringify(options.params || {})
					}).then(function () {
						var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(response) {
							var data;
							return regeneratorRuntime.wrap(function _callee$(_context) {
								while (1) {
									switch (_context.prev = _context.next) {
										case 0:
											if (!response.ok) {
												_context.next = 7;
												break;
											}
			
											_context.next = 3;
											return response.json();
			
										case 3:
											data = _context.sent;
			
											resolve(data);
											_context.next = 8;
											break;
			
										case 7:
											reject({});
			
										case 8:
										case "end":
											return _context.stop();
									}
								}
							}, _callee, _this);
						}));
			
						return function (_x) {
							return ref.apply(this, arguments);
						};
					}()).catch(function (error) {
						reject(error);
					});
			
					// fetch(url, {
					// 	method: 'POST',
					// 	headers: {
					// 		'Accept': 'application/json',
					// 		'Content-Type': 'application/json'
					// 	},
					// 	body: JSON.stringify({params:this.refs.form.getValues()})
					// })
					// //.then((response)=>response.text())
					// .then((responseText)=>{
					// 	resolve(responseText);
					// }).catch((error)=>{
					// 	reject(error);
					// });
				});
			};
			
			function _asyncToGenerator(fn) {
				return function () {
					var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
						function step(key, arg) {
							try {
								var info = gen[key](arg);var value = info.value;
							} catch (error) {
								reject(error);return;
							}if (info.done) {
								resolve(value);
							} else {
								return Promise.resolve(value).then(function (value) {
									return step("next", value);
								}, function (err) {
									return step("throw", err);
								});
							}
						}return step("next");
					});
				};
			}
		},
		// dist/tools/events.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			
			exports.default = function () {
				for (var _len = arguments.length, events = Array(_len), _key = 0; _key < _len; _key++) {
					events[_key] = arguments[_key];
				}
			
				return function (TargetClass) {
					var prototype = void 0;
					var name = void 0;
			
					if (TargetClass.prototype) {
						prototype = TargetClass.prototype;
						name = "类 " + TargetClass.name + " ";
					} else {
						prototype = TargetClass;
						name = "对象 ";
					}
			
					events.forEach(function (eventName) {
						var flags = {
							// 记忆性，事件先触发，后面添加的监听立即执行最后一次触发，比如ready的场景
							memory: false,
							// 事件只能被触发一次
							once: false,
							// 事件异步触发
							async: false
						};
			
						if (eventName instanceof Array) {
							eventName[1].split(" ").forEach(function (key) {
								flags[key] = true;
							});
			
							eventName = eventName[0];
						} else if (typeof eventName !== "string") {
							return;
						}
			
						var eventNameSuffix = eventName.replace(/(^[a-z]|\-[a-z])/g, function (char) {
							return char.replace("-", "").toUpperCase();
						});
			
						// 绑定事件
						// isOnce: 该监听只监听一次
						function bindEvent(listener, isOnce) {
							var _this = this;
			
							if (!this._events) {
								this._events = {};
							}
			
							if (!this._events[eventName]) {
								this._events[eventName] = [];
							}
			
							var eventHandler = {
								listener: listener,
								once: !!isOnce
							};
			
							this._events[eventName].push(eventHandler);
			
							if (this._event_memory && this._event_memory[eventName]) {
								// 加入此事件有记忆特性，并且已经触发过，则立即执行该监听
								if (flags.async) {
									requestAnimationFrame(function () {
										listener.apply(_this, _this._event_memory[eventName].params);
									});
								} else {
									listener.apply(this, this._event_memory[eventName].params);
								}
			
								// 如果已执行，并且该事件有只执行一次的特性，则移除该监听
								if (flags.once || isOnce) {
									this._events[eventName].splice(this._events[eventName].indexOf(eventHandler), 1);
								}
							}
			
							return this;
						}
			
						if (!prototype["on" + eventNameSuffix]) {
							prototype["on" + eventNameSuffix] = bindEvent;
						} else {
							console.warn(name + "中已存在 " + ("on" + eventNameSuffix) + " 方法，" + eventName + " 事件修饰器可能将无法正常工作");
						}
			
						if (!prototype["once" + eventNameSuffix]) {
							prototype["once" + eventNameSuffix] = function (listener) {
								bindEvent.call(this, listener, true);
							};
						} else {
							console.warn(name + "中已存在 " + ("once" + eventNameSuffix) + " 方法，" + eventName + " 事件修饰器可能将无法正常工作");
						}
			
						if (!prototype["off" + eventNameSuffix]) {
							prototype["off" + eventNameSuffix] = function (listener) {
								if (!this._events) {
									return;
								}
			
								if (!this._events[eventName]) {
									return;
								}
			
								this._events[eventName] = this._events[eventName].filter(function (item) {
									return item.listener !== listener;
								});
							};
						} else {
							console.warn(name + "中已存在 " + ("off" + eventNameSuffix) + " 方法，" + eventName + " 事件修饰器可能将无法正常工作");
						}
			
						if (!prototype["fire" + eventNameSuffix]) {
							// 触发事件
							prototype["fire" + eventNameSuffix] = function () {
								var _this2 = this;
			
								for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
									params[_key2] = arguments[_key2];
								}
			
								// 如果该事件有记忆特性，则记录此次执行的信息
								if (flags.memory) {
									if (!this._event_memory) {
										this._event_memory = {};
									}
			
									this._event_memory[eventName] = {
										params: params
									};
								}
			
								if (!this._events) {
									return this;
								}
			
								var listeners = this._events[eventName];
			
								if (listeners) {
									var fireEvent = function fireEvent() {
										listeners.forEach(function (eventHandler) {
											eventHandler.listener.apply(_this2, params);
										});
			
										// 如果该事件有只执行一次的特性，则移除所有监听
										if (flags.once) {
											_this2._events[eventName] = [];
											// 触发一次后如果再次触发，则输出警告信息
											_this2["fire" + eventNameSuffix] = function () {
												console.warn(name + "的" + eventName + "事件只能被触发一次");
											};
										} else {
											_this2._events[eventName] = _this2._events[eventName].filter(function (eventHandler) {
												return !eventHandler.once;
											});
										}
									};
			
									if (flags.async) {
										requestAnimationFrame(fireEvent);
									} else {
										fireEvent();
									}
								}
			
								return this;
							};
						} else {
							console.warn(name + "中已存在 " + ("fire" + eventNameSuffix) + " 方法，" + eventName + " 事件修饰器可能将无法正常工作");
						}
					});
			
					return TargetClass;
				};
			};
		},
		// dist/tools/Service.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			
			var _Ajax = __inner_require__(1 /*dist/tools/Ajax.js*/);
			
			var _Ajax2 = _interopRequireDefault(_Ajax);
			
			var _Promise = __inner_require__(4 /*dist/tools/Promise.js*/);
			
			var _Promise2 = _interopRequireDefault(_Promise);
			
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}
			
			function _asyncToGenerator(fn) {
				return function () {
					var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
						function step(key, arg) {
							try {
								var info = gen[key](arg);var value = info.value;
							} catch (error) {
								reject(error);return;
							}if (info.done) {
								resolve(value);
							} else {
								return Promise.resolve(value).then(function (value) {
									return step("next", value);
								}, function (err) {
									return step("throw", err);
								});
							}
						}return step("next");
					});
				};
			}
			
			var caches = {};
			
			var Service = function Service(options) {
				return function () {
					for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
						params[_key] = arguments[_key];
					}
			
					return (0, _Promise2.default)(function (resolve, reject) {
						// 如果有缓存，则返回缓存数据
						var cacheKey = void 0;
						if (options.cache === true) {
							cacheKey = JSON.stringify(params);
							var data = void 0;
							if (data = caches[cacheKey]) {
								resolve(data);
								return;
							}
						}
			
						if (typeof options === "function") {
							try {
								var result = options.apply(undefined, params);
								if (options.cache === true) {
									caches[cacheKey] = result;
								}
								resolve(result);
							} catch (e) {
								reject(e);
							}
						} else {
							_asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
								var _this = this;
			
								var _data, _result;
			
								return regeneratorRuntime.wrap(function _callee2$(_context2) {
									while (1) {
										switch (_context2.prev = _context2.next) {
											case 0:
												_context2.prev = 0;
												_data = void 0;
			
												if (!options.mockData) {
													_context2.next = 13;
													break;
												}
			
												_result = options.mockData();
			
												if (!(_result instanceof Promise)) {
													_context2.next = 10;
													break;
												}
			
												_context2.next = 7;
												return _result;
			
											case 7:
												_data = _context2.sent;
												_context2.next = 11;
												break;
			
											case 10:
												_data = _result;
			
											case 11:
												_context2.next = 14;
												break;
			
											case 13:
												return _context2.delegateYield(regeneratorRuntime.mark(function _callee() {
													var url, paramHash;
													return regeneratorRuntime.wrap(function _callee$(_context) {
														while (1) {
															switch (_context.prev = _context.next) {
																case 0:
																	url = options.url;
																	paramHash = {};
			
																	if (options.params) {
																		options.params.forEach(function (param, index) {
																			paramHash[param] = params[index];
																		});
			
																		url = url.replace(/\$\{([^\{\}]+)\}/g, function (all, key) {
																			return typeof paramHash[key] === "undefined" ? "" : paramHash[key];
																		});
																	}
			
																	_context.next = 5;
																	return Service.ajax(url, {
																		method: options.method,
																		params: paramHash
																	});
			
																case 5:
																	_data = _context.sent;
			
																case 6:
																case "end":
																	return _context.stop();
															}
														}
													}, _callee, _this);
												})(), "t0", 14);
			
											case 14:
			
												if (options.dataTransform) {
													_data = options.dataTransform(_data);
												}
			
												if (options.cache === true) {
													caches[cacheKey] = _data;
												}
			
												resolve(_data);
												_context2.next = 22;
												break;
			
											case 19:
												_context2.prev = 19;
												_context2.t1 = _context2["catch"](0);
			
												reject(_context2.t1);
			
											case 22:
											case "end":
												return _context2.stop();
										}
									}
								}, _callee2, this, [[0, 19]]);
							}))();
						}
					}, options.timeout || 30000);
				};
			};
			
			// 便于后续替换ajax模块
			Service.ajax = _Ajax2.default;
			
			exports.default = Service;
		},
		// dist/tools/Promise.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			
			exports.default = function (fn, timeout) {
				return new Promise(function (resolve, reject) {
					var timeoutHandler = void 0;
					if (timeout) {
						timeoutHandler = setTimeout(function () {
							reject({
								message: "TIME_OUT"
							});
						}, timeout);
					}
			
					fn(function () {
						if (timeoutHandler) {
							clearTimeout(timeoutHandler);
						}
						resolve.apply(undefined, arguments);
					}, function () {
						if (timeoutHandler) {
							clearTimeout(timeoutHandler);
						}
						reject.apply(undefined, arguments);
					});
				});
			};
		}
	];
});