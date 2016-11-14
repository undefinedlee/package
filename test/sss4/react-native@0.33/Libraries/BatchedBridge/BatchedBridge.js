loader.define("react-native@0.33/Libraries/BatchedBridge/BatchedBridge.js", ["react-native@0.33/Libraries/Utilities/Systrace.js", "react-native@0.33/Libraries/JavaScriptAppEngine/System/JSTimers/JSTimersExecution.js", "react-native@0.33/Libraries/Utilities/ErrorUtils.js", "react-native@0.33/__fbjs__/lib/invariant.js", "react-native@0.33/__fbjs__/lib/keyMirror.js", "react-native@0.33/Libraries/Utilities/stringifySafe.js", "react-native@0.33/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js", "react-native@0.33/Libraries/Utilities/Platform.ios.js", "react-native@0.33/Libraries/WebSocket/WebSocket.js", "react-native@0.33/Libraries/StyleSheet/processColor.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/BatchedBridge/BatchedBridge.js
	function (__inner_require__, exports, module) {
		var MessageQueue = __inner_require__(1 /*Libraries/Utilities/MessageQueue.js*/);

		var serializeNativeParams = typeof global.__fbBatchedBridgeSerializeNativeParams !== 'undefined';

		var BatchedBridge = new MessageQueue(function () {
			return global.__fbBatchedBridgeConfig;
		}, serializeNativeParams);

		var Systrace = require('react-native@0.33/Libraries/Utilities/Systrace.js');
		var JSTimersExecution = require('react-native@0.33/Libraries/JavaScriptAppEngine/System/JSTimers/JSTimersExecution.js');

		BatchedBridge.registerCallableModule('Systrace', Systrace);
		BatchedBridge.registerCallableModule('JSTimersExecution', JSTimersExecution);
		BatchedBridge.registerCallableModule('HeapCapture', __inner_require__(2 /*Libraries/Utilities/HeapCapture.js*/));
		BatchedBridge.registerCallableModule('SamplingProfiler', __inner_require__(3 /*Libraries/Utilities/SamplingProfiler.js*/));

		if (__DEV__) {
			BatchedBridge.registerCallableModule('HMRClient', __inner_require__(4 /*Libraries/Utilities/HMRClient.js*/));
		}

		Object.defineProperty(global, '__fbBatchedBridge', {
			configurable: true,
			value: BatchedBridge });

		module.exports = BatchedBridge;
	}, // Libraries/Utilities/MessageQueue.js
	function (__inner_require__, exports, module) {
		var Systrace = require('react-native@0.33/Libraries/Utilities/Systrace.js');
		var ErrorUtils = require('react-native@0.33/Libraries/Utilities/ErrorUtils.js');
		var JSTimersExecution = require('react-native@0.33/Libraries/JavaScriptAppEngine/System/JSTimers/JSTimersExecution.js');

		var invariant = require('react-native@0.33/__fbjs__/lib/invariant.js');
		var keyMirror = require('react-native@0.33/__fbjs__/lib/keyMirror.js');
		var stringifySafe = require('react-native@0.33/Libraries/Utilities/stringifySafe.js');

		var MODULE_IDS = 0;
		var METHOD_IDS = 1;
		var PARAMS = 2;
		var MIN_TIME_BETWEEN_FLUSHES_MS = 5;

		var TO_NATIVE = 1;
		var TO_JS = 0;

		var TRACE_TAG_REACT_APPS = 1 << 17;

		var MethodTypes = keyMirror({
			remote: null,
			remoteAsync: null,
			syncHook: null });

		var guard = function guard(fn) {
			try {
				fn();
			} catch (error) {
				ErrorUtils.reportFatalError(error);
			}
		};var MessageQueue = function () {
			function MessageQueue(configProvider, serializeNativeParams) {
				var _this = this;babelHelpers.classCallCheck(this, MessageQueue);
				this._callableModules = {};
				this._queue = [[], [], [], 0];
				this._callbacks = [];
				this._callbackID = 0;
				this._callID = 0;
				this._lastFlush = 0;
				this._eventLoopStartTime = new Date().getTime();
				this._serializeNativeParams = serializeNativeParams;

				if (__DEV__) {
					this._debugInfo = {};
					this._remoteModuleTable = {};
					this._remoteMethodTable = {};
				}

				['invokeCallbackAndReturnFlushedQueue', 'callFunctionReturnFlushedQueue', 'callFunction', 'flushedQueue'].forEach(function (fn) {
					return _this[fn] = _this[fn].bind(_this);
				});

				lazyProperty(this, 'RemoteModules', function () {
					var _configProvider = configProvider(),
					    remoteModuleConfig = _configProvider.remoteModuleConfig;
					var modulesConfig = _this._genModulesConfig(remoteModuleConfig);
					var modules = _this._genModules(modulesConfig);

					if (__DEV__) {
						_this._genLookupTables(modulesConfig, _this._remoteModuleTable, _this._remoteMethodTable);
					}

					return modules;
				});
			}babelHelpers.createClass(MessageQueue, [{ key: 'callFunctionReturnFlushedQueue', value: function callFunctionReturnFlushedQueue(module, method, args) {
					var _this2 = this;
					guard(function () {
						_this2.__callFunction(module, method, args);
						_this2.__callImmediates();
					});

					return this.flushedQueue();
				} }, { key: 'callFunction', value: function callFunction(module, method, args) {
					var _this3 = this;
					var result = void 0;
					guard(function () {
						result = _this3.__callFunction(module, method, args);
						_this3.__callImmediates();
					});

					return result;
				} }, { key: 'invokeCallbackAndReturnFlushedQueue', value: function invokeCallbackAndReturnFlushedQueue(cbID, args) {
					var _this4 = this;
					guard(function () {
						_this4.__invokeCallback(cbID, args);
						_this4.__callImmediates();
					});

					return this.flushedQueue();
				} }, { key: 'flushedQueue', value: function flushedQueue() {
					this.__callImmediates();

					var queue = this._queue;
					this._queue = [[], [], [], this._callID];
					return queue[0].length ? queue : null;
				} }, { key: 'processModuleConfig', value: function processModuleConfig(config, moduleID) {
					var info = this._genModule(config, moduleID);
					this.RemoteModules[info.name] = info.module;
					if (__DEV__) {
						this._genLookup(config, moduleID, this._remoteModuleTable, this._remoteMethodTable);
					}
					return info.module;
				} }, { key: 'getEventLoopRunningTime', value: function getEventLoopRunningTime() {
					return new Date().getTime() - this._eventLoopStartTime;
				} }, { key: '__callImmediates', value: function __callImmediates() {
					Systrace.beginEvent('JSTimersExecution.callImmediates()');
					guard(function () {
						return JSTimersExecution.callImmediates();
					});
					Systrace.endEvent();
				} }, { key: '__nativeCall', value: function __nativeCall(module, method, params, onFail, onSucc) {
					if (onFail || onSucc) {
						if (__DEV__) {

							this._callbackID > 1 << 5 && (this._debugInfo[this._callbackID >> 5] = null);
							this._debugInfo[this._callbackID >> 1] = [module, method];
						}
						onFail && params.push(this._callbackID);
						this._callbacks[this._callbackID++] = onFail;
						onSucc && params.push(this._callbackID);
						this._callbacks[this._callbackID++] = onSucc;
					}
					var preparedParams = this._serializeNativeParams ? JSON.stringify(params) : params;

					if (__DEV__) {
						global.nativeTraceBeginAsyncFlow && global.nativeTraceBeginAsyncFlow(TRACE_TAG_REACT_APPS, 'native', this._callID);
					}
					this._callID++;

					this._queue[MODULE_IDS].push(module);
					this._queue[METHOD_IDS].push(method);
					this._queue[PARAMS].push(preparedParams);

					var now = new Date().getTime();
					if (global.nativeFlushQueueImmediate && now - this._lastFlush >= MIN_TIME_BETWEEN_FLUSHES_MS) {
						global.nativeFlushQueueImmediate(this._queue);
						this._queue = [[], [], [], this._callID];
						this._lastFlush = now;
					}
					Systrace.counterEvent('pending_js_to_native_queue', this._queue[0].length);
					if (__DEV__ && this.__spy && isFinite(module)) {
						this.__spy({ type: TO_NATIVE,
							module: this._remoteModuleTable[module],
							method: this._remoteMethodTable[module][method],
							args: params });
					}
				} }, { key: '__callFunction', value: function __callFunction(module, method, args) {
					this._lastFlush = new Date().getTime();
					this._eventLoopStartTime = this._lastFlush;
					Systrace.beginEvent(module + '.' + method + '()');
					if (__DEV__ && this.__spy) {
						this.__spy({ type: TO_JS, module: module, method: method, args: args });
					}
					var moduleMethods = this._callableModules[module];
					invariant(!!moduleMethods, 'Module %s is not a registered callable module (calling %s)', module, method);

					invariant(!!moduleMethods[method], 'Method %s does not exist on module %s', method, module);

					var result = moduleMethods[method].apply(moduleMethods, args);
					Systrace.endEvent();
					return result;
				} }, { key: '__invokeCallback', value: function __invokeCallback(cbID, args) {
					this._lastFlush = new Date().getTime();
					this._eventLoopStartTime = this._lastFlush;
					var callback = this._callbacks[cbID];

					if (__DEV__) {
						var debug = this._debugInfo[cbID >> 1];
						var _module = debug && this._remoteModuleTable[debug[0]];
						var method = debug && this._remoteMethodTable[debug[0]][debug[1]];
						if (!callback) {
							var errorMessage = 'Callback with id ' + cbID + ': ' + _module + '.' + method + '() not found';
							if (method) {
								errorMessage = 'The callback ' + method + '() exists in module ' + _module + ', ' + 'but only one callback may be registered to a function in a native module.';
							}
							invariant(callback, errorMessage);
						}
						var profileName = debug ? '<callback for ' + _module + '.' + method + '>' : cbID;
						if (callback && this.__spy && __DEV__) {
							this.__spy({ type: TO_JS, module: null, method: profileName, args: args });
						}
						Systrace.beginEvent('MessageQueue.invokeCallback(' + profileName + ', ' + stringifySafe(args) + ')');
					} else {
						if (!callback) {
							return;
						}
					}

					this._callbacks[cbID & ~1] = null;
					this._callbacks[cbID | 1] = null;
					callback.apply(null, args);

					if (__DEV__) {
						Systrace.endEvent();
					}
				} }, { key: '_genModulesConfig', value: function _genModulesConfig(modules) {
					if (Array.isArray(modules)) {
						return modules;
					} else {
						var moduleArray = [];
						var moduleNames = Object.keys(modules);
						for (var i = 0, l = moduleNames.length; i < l; i++) {
							var moduleName = moduleNames[i];
							var moduleConfig = modules[moduleName];
							var _module2 = [moduleName];
							if (moduleConfig.constants) {
								_module2.push(moduleConfig.constants);
							}
							var methodsConfig = moduleConfig.methods;
							if (methodsConfig) {
								var methods = [];
								var asyncMethods = [];
								var syncHooks = [];
								var methodNames = Object.keys(methodsConfig);
								for (var j = 0, ll = methodNames.length; j < ll; j++) {
									var methodName = methodNames[j];
									var methodConfig = methodsConfig[methodName];
									methods[methodConfig.methodID] = methodName;
									if (methodConfig.type === MethodTypes.remoteAsync) {
										asyncMethods.push(methodConfig.methodID);
									} else if (methodConfig.type === MethodTypes.syncHook) {
										syncHooks.push(methodConfig.methodID);
									}
								}
								if (methods.length) {
									_module2.push(methods);
									_module2.push(asyncMethods);
									_module2.push(syncHooks);
								}
							}
							moduleArray[moduleConfig.moduleID] = _module2;
						}
						return moduleArray;
					}
				} }, { key: '_genLookupTables', value: function _genLookupTables(modulesConfig, moduleTable, methodTable) {
					var _this5 = this;
					modulesConfig.forEach(function (config, moduleID) {
						_this5._genLookup(config, moduleID, moduleTable, methodTable);
					});
				} }, { key: '_genLookup', value: function _genLookup(config, moduleID, moduleTable, methodTable) {
					if (!config) {
						return;
					}

					var moduleName = void 0,
					    methods = void 0;
					if (moduleHasConstants(config)) {
						var _config = babelHelpers.slicedToArray(config, 3);moduleName = _config[0];methods = _config[2];
					} else {
						var _config2 = babelHelpers.slicedToArray(config, 2);moduleName = _config2[0];methods = _config2[1];
					}

					moduleTable[moduleID] = moduleName;
					methodTable[moduleID] = babelHelpers.extends({}, methods);
				} }, { key: '_genModules', value: function _genModules(remoteModules) {
					var _this6 = this;
					var modules = {};

					remoteModules.forEach(function (config, moduleID) {
						var info = _this6._genModule(config, moduleID);
						if (info) {
							modules[info.name] = info.module;
						}
					});

					return modules;
				} }, { key: '_genModule', value: function _genModule(config, moduleID) {
					var _this7 = this;
					if (!config) {
						return null;
					}

					var moduleName = void 0,
					    constants = void 0,
					    methods = void 0,
					    asyncMethods = void 0,
					    syncHooks = void 0;
					if (moduleHasConstants(config)) {
						var _config3 = babelHelpers.slicedToArray(config, 5);moduleName = _config3[0];constants = _config3[1];methods = _config3[2];asyncMethods = _config3[3];syncHooks = _config3[4];
					} else {
						var _config4 = babelHelpers.slicedToArray(config, 4);moduleName = _config4[0];methods = _config4[1];asyncMethods = _config4[2];syncHooks = _config4[3];
					}

					var module = {};
					methods && methods.forEach(function (methodName, methodID) {
						var isAsync = asyncMethods && arrayContains(asyncMethods, methodID);
						var isSyncHook = syncHooks && arrayContains(syncHooks, methodID);
						invariant(!isAsync || !isSyncHook, 'Cannot have a method that is both async and a sync hook');
						var methodType = isAsync ? MethodTypes.remoteAsync : isSyncHook ? MethodTypes.syncHook : MethodTypes.remote;
						module[methodName] = _this7._genMethod(moduleID, methodID, methodType);
					});
					babelHelpers.extends(module, constants);

					if (!constants && !methods && !asyncMethods) {
						module.moduleID = moduleID;
					}

					return { name: moduleName, module: module };
				} }, { key: '_genMethod', value: function _genMethod(module, method, type) {
					var fn = null;
					var self = this;
					if (type === MethodTypes.remoteAsync) {
						fn = function fn() {
							for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
								args[_key] = arguments[_key];
							}
							return new Promise(function (resolve, reject) {
								self.__nativeCall(module, method, args, function (data) {
									resolve(data);
								}, function (errorData) {
									var error = createErrorFromErrorData(errorData);
									reject(error);
								});
							});
						};
					} else if (type === MethodTypes.syncHook) {
						return function () {
							for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
								args[_key2] = arguments[_key2];
							}
							return global.nativeCallSyncHook(module, method, args);
						};
					} else {
						fn = function fn() {
							for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
								args[_key3] = arguments[_key3];
							}
							var lastArg = args.length > 0 ? args[args.length - 1] : null;
							var secondLastArg = args.length > 1 ? args[args.length - 2] : null;
							var hasSuccCB = typeof lastArg === 'function';
							var hasErrorCB = typeof secondLastArg === 'function';
							hasErrorCB && invariant(hasSuccCB, 'Cannot have a non-function arg after a function arg.');

							var numCBs = hasSuccCB + hasErrorCB;
							var onSucc = hasSuccCB ? lastArg : null;
							var onFail = hasErrorCB ? secondLastArg : null;
							args = args.slice(0, args.length - numCBs);
							return self.__nativeCall(module, method, args, onFail, onSucc);
						};
					}
					fn.type = type;
					return fn;
				} }, { key: 'registerCallableModule', value: function registerCallableModule(name, methods) {
					this._callableModules[name] = methods;
				} }], [{ key: 'spy', value: function spy(spyOrToggle) {
					if (spyOrToggle === true) {
						MessageQueue.prototype.__spy = function (info) {
							console.log((info.type == TO_JS ? 'N->JS' : 'JS->N') + ' : ' + ('' + (info.module ? info.module + '.' : '') + info.method) + ('(' + JSON.stringify(info.args) + ')'));
						};
					} else if (spyOrToggle === false) {
						MessageQueue.prototype.__spy = null;
					} else {
						MessageQueue.prototype.__spy = spyOrToggle;
					}
				} }]);return MessageQueue;
		}();

		function moduleHasConstants(moduleArray) {
			return !Array.isArray(moduleArray[1]);
		}

		function arrayContains(array, value) {
			return array.indexOf(value) !== -1;
		}

		function createErrorFromErrorData(errorData) {
			var message = errorData.message,
			    extraErrorInfo = babelHelpers.objectWithoutProperties(errorData, ['message']);
			var error = new Error(message);
			error.framesToPop = 1;
			return babelHelpers.extends(error, extraErrorInfo);
		}

		function lazyProperty(target, name, f) {
			Object.defineProperty(target, name, {
				configurable: true,
				enumerable: true,
				get: function get() {
					var value = f();
					Object.defineProperty(target, name, {
						configurable: true,
						enumerable: true,
						writeable: true,
						value: value });

					return value;
				} });
		}

		module.exports = MessageQueue;
	}, // Libraries/Utilities/HeapCapture.js
	function (__inner_require__, exports, module) {
		var HeapCapture = {
			captureHeap: function captureHeap(path) {
				var error = null;
				try {
					global.nativeCaptureHeap(path);
					console.log('HeapCapture.captureHeap succeeded: ' + path);
				} catch (e) {
					console.log('HeapCapture.captureHeap error: ' + e.toString());
					error = e.toString();
				}
				require('react-native@0.33/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').JSCHeapCapture.captureComplete(path, error);
			} };

		module.exports = HeapCapture;
	}, // Libraries/Utilities/SamplingProfiler.js
	function (__inner_require__, exports, module) {
		var SamplingProfiler = {
			poke: function poke(token) {
				var error = null;
				var result = null;
				try {
					result = global.pokeSamplingProfiler();
					if (result === null) {
						console.log('The JSC Sampling Profiler has started');
					} else {
						console.log('The JSC Sampling Profiler has stopped');
					}
				} catch (e) {
					console.log('Error occured when restarting Sampling Profiler: ' + e.toString());
					error = e.toString();
				}
				require('react-native@0.33/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').JSCSamplingProfiler.operationComplete(token, result, error);
			} };

		module.exports = SamplingProfiler;
	}, // Libraries/Utilities/HMRClient.js
	function (__inner_require__, exports, module) {
		var Platform = require('react-native@0.33/Libraries/Utilities/Platform.ios.js');
		var invariant = require('react-native@0.33/__fbjs__/lib/invariant.js');

		var HMRClient = {
			enable: function enable(platform, bundleEntry, host, port) {
				invariant(platform, 'Missing required parameter `platform`');
				invariant(bundleEntry, 'Missing required paramenter `bundleEntry`');
				invariant(host, 'Missing required paramenter `host`');

				var WebSocket = require('react-native@0.33/Libraries/WebSocket/WebSocket.js');

				var wsHostPort = port !== null && port !== '' ? host + ':' + port : host;

				var wsUrl = 'ws://' + wsHostPort + '/hot?' + ('platform=' + platform + '&') + ('bundleEntry=' + bundleEntry.replace('.bundle', '.js'));

				var activeWS = new WebSocket(wsUrl);
				activeWS.onerror = function (e) {
					var error = 'Hot loading isn\'t working because it cannot connect to the development server.\n\nTry the following to fix the issue:\n- Ensure that the packager server is running and available on the same network';

					if (Platform.OS === 'ios') {
						error += '\n- Ensure that the Packager server URL is correctly set in AppDelegate';
					} else {
						error += '\n- Ensure that your device/emulator is connected to your machine and has USB debugging enabled - run \'adb devices\' to see a list of connected devices\n- If you\'re on a physical device connected to the same machine, run \'adb reverse tcp:8081 tcp:8081\' to forward requests from your device\n- If your device is on the same Wi-Fi network, set \'Debug server host & port for device\' in \'Dev settings\' to your machine\'s IP address and the port of the local dev server - e.g. 10.0.1.1:8081';
					}

					error += '\n\nURL: ' + host + ':' + port + '\n\nError: ' + e.message;

					throw new Error(error);
				};
				activeWS.onmessage = function (_ref) {
					var data = _ref.data;

					var HMRLoadingView = __inner_require__(5 /*Libraries/Utilities/HMRLoadingView.ios.js*/);

					data = JSON.parse(data);

					switch (data.type) {
						case 'update-start':
							{
								HMRLoadingView.showMessage('Hot Loading...');
								break;
							}
						case 'update':
							{
								var _ret = function () {
									var _data$body = data.body,
									    modules = _data$body.modules,
									    sourceMappingURLs = _data$body.sourceMappingURLs,
									    sourceURLs = _data$body.sourceURLs,
									    inverseDependencies = _data$body.inverseDependencies;

									if (Platform.OS === 'ios') {
										var RCTRedBox = require('react-native@0.33/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').RedBox;
										RCTRedBox && RCTRedBox.dismiss && RCTRedBox.dismiss();
									} else {
										var RCTExceptionsManager = require('react-native@0.33/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').ExceptionsManager;
										RCTExceptionsManager && RCTExceptionsManager.dismissRedbox && RCTExceptionsManager.dismissRedbox();
									}

									modules.forEach(function (_ref2, i) {
										var id = _ref2.id,
										    code = _ref2.code;
										code = code + '\n\n' + sourceMappingURLs[i];

										var injectFunction = typeof global.nativeInjectHMRUpdate === 'function' ? global.nativeInjectHMRUpdate : eval;

										code = ['__accept(', id + ',', 'function(global,require,module,exports){', '' + code, '\n},', '' + JSON.stringify(inverseDependencies), ');'].join('');

										injectFunction(code, sourceURLs[i]);
									});

									HMRLoadingView.hide();
									return 'break';
								}();if (_ret === 'break') break;
							}
						case 'update-done':
							{
								HMRLoadingView.hide();
								break;
							}
						case 'error':
							{
								HMRLoadingView.hide();
								throw new Error(data.body.type + ' ' + data.body.description);
							}
						default:
							{
								throw new Error('Unexpected message: ' + data);
							}}
				};
			} };

		module.exports = HMRClient;
	}, // Libraries/Utilities/HMRLoadingView.ios.js
	function (__inner_require__, exports, module) {
		var processColor = require('react-native@0.33/Libraries/StyleSheet/processColor.js');var _require = require('react-native@0.33/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js'),
		    DevLoadingView = _require.DevLoadingView;var HMRLoadingView = function () {
			function HMRLoadingView() {
				babelHelpers.classCallCheck(this, HMRLoadingView);
			}babelHelpers.createClass(HMRLoadingView, null, [{ key: 'showMessage', value: function showMessage(message) {
					DevLoadingView.showMessage(message, processColor('#000000'), processColor('#aaaaaa'));
				} }, { key: 'hide', value: function hide() {
					DevLoadingView.hide();
				} }]);return HMRLoadingView;
		}();

		module.exports = HMRLoadingView;
	}];
});