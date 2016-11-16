__d("react-native@0.37/Libraries/BatchedBridge/BatchedBridge.js", ["react-native@0.37/Libraries/Performance/Systrace.js", "react-native@0.37/Libraries/Core/Timers/JSTimersExecution.js", "react-native@0.37/Libraries/Core/ErrorUtils.js", "react-native@0.37/Libraries/Utilities/deepFreezeAndThrowOnMutationInDev.js", "fbjs@0.8/lib/invariant.js", "react-native@0.37/Libraries/Utilities/stringifySafe.js", "react-native@0.37/Libraries/BatchedBridge/NativeModules.js", "react-native@0.37/Libraries/Utilities/Platform.ios.js", "react-native@0.37/Libraries/WebSocket/WebSocket.js", "react-native@0.37/Libraries/StyleSheet/processColor.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/BatchedBridge/BatchedBridge.js
	function (__inner_require__, exports, module) {
		var MessageQueue = __inner_require__(1 /*Libraries/BatchedBridge/MessageQueue.js*/);
		var BatchedBridge = new MessageQueue();

		BatchedBridge.registerCallableModule('Systrace', require('react-native@0.37/Libraries/Performance/Systrace.js'));
		BatchedBridge.registerCallableModule('JSTimersExecution', require('react-native@0.37/Libraries/Core/Timers/JSTimersExecution.js'));
		BatchedBridge.registerCallableModule('HeapCapture', __inner_require__(2 /*Libraries/Utilities/HeapCapture.js*/));
		BatchedBridge.registerCallableModule('SamplingProfiler', __inner_require__(3 /*Libraries/Performance/SamplingProfiler.js*/));

		if (__DEV__) {
			BatchedBridge.registerCallableModule('HMRClient', __inner_require__(4 /*Libraries/Utilities/HMRClient.js*/));
		}

		Object.defineProperty(global, '__fbBatchedBridge', {
			configurable: true,
			value: BatchedBridge });

		module.exports = BatchedBridge;
	}, // Libraries/BatchedBridge/MessageQueue.js
	function (__inner_require__, exports, module) {
		var ErrorUtils = require('react-native@0.37/Libraries/Core/ErrorUtils.js');
		var JSTimersExecution = require('react-native@0.37/Libraries/Core/Timers/JSTimersExecution.js');
		var Systrace = require('react-native@0.37/Libraries/Performance/Systrace.js');

		var deepFreezeAndThrowOnMutationInDev = require('react-native@0.37/Libraries/Utilities/deepFreezeAndThrowOnMutationInDev.js');
		var invariant = require('fbjs@0.8/lib/invariant.js');
		var stringifySafe = require('react-native@0.37/Libraries/Utilities/stringifySafe.js');

		var TO_JS = 0;
		var TO_NATIVE = 1;

		var MODULE_IDS = 0;
		var METHOD_IDS = 1;
		var PARAMS = 2;
		var MIN_TIME_BETWEEN_FLUSHES_MS = 5;

		var TRACE_TAG_REACT_APPS = 1 << 17;

		var DEBUG_INFO_LIMIT = 32;

		var guard = function guard(fn) {
			try {
				fn();
			} catch (error) {
				ErrorUtils.reportFatalError(error);
			}
		};var MessageQueue = function () {

			function MessageQueue() {
				babelHelpers.classCallCheck(this, MessageQueue);
				this._callableModules = {};
				this._queue = [[], [], [], 0];
				this._callbacks = [];
				this._callbackID = 0;
				this._callID = 0;
				this._lastFlush = 0;
				this._eventLoopStartTime = new Date().getTime();

				if (__DEV__) {
					this._debugInfo = {};
					this._remoteModuleTable = {};
					this._remoteMethodTable = {};
				}

				this.callFunctionReturnFlushedQueue = this.callFunctionReturnFlushedQueue.bind(this);
				this.callFunctionReturnResultAndFlushedQueue = this.callFunctionReturnResultAndFlushedQueue.bind(this);
				this.flushedQueue = this.flushedQueue.bind(this);
				this.invokeCallbackAndReturnFlushedQueue = this.invokeCallbackAndReturnFlushedQueue.bind(this);
			}babelHelpers.createClass(MessageQueue, [{ key: 'callFunctionReturnFlushedQueue', value: function callFunctionReturnFlushedQueue(module, method, args) {
					var _this = this;
					guard(function () {
						_this.__callFunction(module, method, args);
						_this.__callImmediates();
					});

					return this.flushedQueue();
				} }, { key: 'callFunctionReturnResultAndFlushedQueue', value: function callFunctionReturnResultAndFlushedQueue(module, method, args) {
					var _this2 = this;
					var result = void 0;
					guard(function () {
						result = _this2.__callFunction(module, method, args);
						_this2.__callImmediates();
					});

					return [result, this.flushedQueue()];
				} }, { key: 'invokeCallbackAndReturnFlushedQueue', value: function invokeCallbackAndReturnFlushedQueue(cbID, args) {
					var _this3 = this;
					guard(function () {
						_this3.__invokeCallback(cbID, args);
						_this3.__callImmediates();
					});

					return this.flushedQueue();
				} }, { key: 'flushedQueue', value: function flushedQueue() {
					this.__callImmediates();

					var queue = this._queue;
					this._queue = [[], [], [], this._callID];
					return queue[0].length ? queue : null;
				} }, { key: 'getEventLoopRunningTime', value: function getEventLoopRunningTime() {
					return new Date().getTime() - this._eventLoopStartTime;
				} }, { key: 'registerCallableModule', value: function registerCallableModule(name, module) {
					this._callableModules[name] = module;
				} }, { key: 'enqueueNativeCall', value: function enqueueNativeCall(moduleID, methodID, params, onFail, onSucc) {
					if (onFail || onSucc) {
						if (__DEV__) {
							var callId = this._callbackID >> 1;
							this._debugInfo[callId] = [moduleID, methodID];
							if (callId > DEBUG_INFO_LIMIT) {
								delete this._debugInfo[callId - DEBUG_INFO_LIMIT];
							}
						}
						onFail && params.push(this._callbackID);
						this._callbacks[this._callbackID++] = onFail;
						onSucc && params.push(this._callbackID);
						this._callbacks[this._callbackID++] = onSucc;
					}

					if (__DEV__) {
						global.nativeTraceBeginAsyncFlow && global.nativeTraceBeginAsyncFlow(TRACE_TAG_REACT_APPS, 'native', this._callID);
					}
					this._callID++;

					this._queue[MODULE_IDS].push(moduleID);
					this._queue[METHOD_IDS].push(methodID);

					if (__DEV__) {

						JSON.stringify(params);

						deepFreezeAndThrowOnMutationInDev(params);
					}
					this._queue[PARAMS].push(params);

					var now = new Date().getTime();
					if (global.nativeFlushQueueImmediate && now - this._lastFlush >= MIN_TIME_BETWEEN_FLUSHES_MS) {
						global.nativeFlushQueueImmediate(this._queue);
						this._queue = [[], [], [], this._callID];
						this._lastFlush = now;
					}
					Systrace.counterEvent('pending_js_to_native_queue', this._queue[0].length);
					if (__DEV__ && this.__spy && isFinite(moduleID)) {
						this.__spy({ type: TO_NATIVE,
							module: this._remoteModuleTable[moduleID],
							method: this._remoteMethodTable[moduleID][methodID],
							args: params });
					}
				} }, { key: 'createDebugLookup', value: function createDebugLookup(moduleID, name, methods) {
					if (__DEV__) {
						this._remoteModuleTable[moduleID] = name;
						this._remoteMethodTable[moduleID] = methods;
					}
				} }, { key: '__callImmediates', value: function __callImmediates() {
					Systrace.beginEvent('JSTimersExecution.callImmediates()');
					guard(function () {
						return JSTimersExecution.callImmediates();
					});
					Systrace.endEvent();
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
						var _method = debug && this._remoteMethodTable[debug[0]][debug[1]];
						if (!callback) {
							var errorMessage = 'Callback with id ' + cbID + ': ' + _module + '.' + _method + '() not found';
							if (_method) {
								errorMessage = 'The callback ' + _method + '() exists in module ' + _module + ', ' + 'but only one callback may be registered to a function in a native module.';
							}
							invariant(callback, errorMessage);
						}
						var profileName = debug ? '<callback for ' + _module + '.' + _method + '>' : cbID;
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
				} }], [{ key: 'spy', value: function spy(spyOrToggle) {
					if (spyOrToggle === true) {
						MessageQueue.prototype.__spy = function (info) {
							console.log((info.type === TO_JS ? 'N->JS' : 'JS->N') + ' : ' + ('' + (info.module ? info.module + '.' : '') + info.method) + ('(' + JSON.stringify(info.args) + ')'));
						};
					} else if (spyOrToggle === false) {
						MessageQueue.prototype.__spy = null;
					} else {
						MessageQueue.prototype.__spy = spyOrToggle;
					}
				} }]);return MessageQueue;
		}();

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
				require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js').JSCHeapCapture.captureComplete(path, error);
			} };

		module.exports = HeapCapture;
	}, // Libraries/Performance/SamplingProfiler.js
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
				require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js').JSCSamplingProfiler.operationComplete(token, result, error);
			} };

		module.exports = SamplingProfiler;
	}, // Libraries/Utilities/HMRClient.js
	function (__inner_require__, exports, module) {
		var Platform = require('react-native@0.37/Libraries/Utilities/Platform.ios.js');
		var invariant = require('fbjs@0.8/lib/invariant.js');

		var HMRClient = {
			enable: function enable(platform, bundleEntry, host, port) {
				invariant(platform, 'Missing required parameter `platform`');
				invariant(bundleEntry, 'Missing required paramenter `bundleEntry`');
				invariant(host, 'Missing required paramenter `host`');

				var WebSocket = require('react-native@0.37/Libraries/WebSocket/WebSocket.js');

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
										var RCTRedBox = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js').RedBox;
										RCTRedBox && RCTRedBox.dismiss && RCTRedBox.dismiss();
									} else {
										var RCTExceptionsManager = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js').ExceptionsManager;
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
		var processColor = require('react-native@0.37/Libraries/StyleSheet/processColor.js');var _require = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js'),
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