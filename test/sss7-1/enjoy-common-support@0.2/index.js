__d("enjoy-common-support@0.2/index.js", [], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// index.js
		function(__inner_require__, exports, module){
			var _Ajax = __inner_require__(1 /*tools/Ajax.js*/);
			
			var _Ajax2 = babelHelpers.interopRequireDefault(_Ajax);
			
			var _events = __inner_require__(2 /*tools/events.js*/);
			
			var _events2 = babelHelpers.interopRequireDefault(_events);
			
			var _Service = __inner_require__(3 /*tools/Service.js*/);
			
			var _Service2 = babelHelpers.interopRequireDefault(_Service);
			
			var _Promise = __inner_require__(4 /*tools/Promise.js*/);
			
			var _Promise2 = babelHelpers.interopRequireDefault(_Promise);
			
			module.exports = {
				ajax: _Ajax2.default,
				events: _events2.default,
				Service: _Service2.default,
				Promise: _Promise2.default
			};
		},		// tools/Ajax.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			
			exports.default = function (url, options) {
				options = options || {};
				var method = (options.method || "GET").toUpperCase();
				var params = options.params || {};
			
				return new Promise(function (resolve, reject) {
					var _this = this;
			
					if (method === "GET") {
						url += (url.indexOf("?") === -1 ? "?" : "&") + JsonToQueryString(options.params);
					}
			
					fetch(url, {
						method: method,
						headers: options.headers || function () {}(),
						body: method === "GET" ? Undefined : JsonToQueryString(options.params),
						credentials: options.credentials || 'include'
					}).then(function () {
						var _ref = babelHelpers.asyncToGenerator(regeneratorRuntime.mark(function _callee(response) {
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
							return _ref.apply(this, arguments);
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
			
			var Undefined = function () {}();
			
			function JsonToQueryString(json) {
				var queryString = [];
			
				for (var name in json) {
					queryString.push([name, json[name]].join("="));
				}
			
				return queryString.join("&");
			}
		},		// tools/events.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
				return setTimeout(callback, 1);
			};
			
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
		},		// tools/Service.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			
			var _Ajax = __inner_require__(1 /*tools/Ajax.js*/);
			
			var _Ajax2 = babelHelpers.interopRequireDefault(_Ajax);
			
			var _Promise = __inner_require__(4 /*tools/Promise.js*/);
			
			var _Promise2 = babelHelpers.interopRequireDefault(_Promise);
			
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
							babelHelpers.asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
								var _this = this;
			
								return regeneratorRuntime.wrap(function _callee2$(_context2) {
									while (1) {
										switch (_context2.prev = _context2.next) {
											case 0:
												_context2.prev = 0;
												return _context2.delegateYield(regeneratorRuntime.mark(function _callee() {
													var data, paramHash, _result, url;
			
													return regeneratorRuntime.wrap(function _callee$(_context) {
														while (1) {
															switch (_context.prev = _context.next) {
																case 0:
																	data = void 0;
																	paramHash = {};
			
																	if (options.params) {
																		options.params.forEach(function (param, index) {
																			paramHash[param] = params[index];
																		});
																	}
			
																	if (!options.mockData) {
																		_context.next = 14;
																		break;
																	}
			
																	_result = options.mockData(paramHash);
			
																	if (!(_result instanceof Promise)) {
																		_context.next = 11;
																		break;
																	}
			
																	_context.next = 8;
																	return _result;
			
																case 8:
																	data = _context.sent;
																	_context.next = 12;
																	break;
			
																case 11:
																	data = _result;
			
																case 12:
																	_context.next = 19;
																	break;
			
																case 14:
																	url = options.url;
			
																	url = url.replace(/\$\{([^\{\}]+)\}/g, function (all, key) {
																		return typeof paramHash[key] === "undefined" ? "" : paramHash[key];
																	});
			
																	_context.next = 18;
																	return Service.ajax(url, {
																		method: options.method,
																		params: paramHash,
																		headers: options.headers
																	});
			
																case 18:
																	data = _context.sent;
			
																case 19:
			
																	if (options.dataTransform) {
																		data = options.dataTransform(data, paramHash);
																	}
			
																	if (options.cache === true) {
																		caches[cacheKey] = data;
																	}
			
																	resolve(data);
			
																case 22:
																case "end":
																	return _context.stop();
															}
														}
													}, _callee, _this);
												})(), "t0", 2);
			
											case 2:
												_context2.next = 7;
												break;
			
											case 4:
												_context2.prev = 4;
												_context2.t1 = _context2["catch"](0);
			
												reject(_context2.t1);
			
											case 7:
											case "end":
												return _context2.stop();
										}
									}
								}, _callee2, this, [[0, 4]]);
							}))();
						}
					}, options.timeout || 30000);
				};
			};
			
			// 便于后续替换ajax模块
			Service.ajax = _Ajax2.default;
			
			exports.default = Service;
		},		// tools/Promise.js
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