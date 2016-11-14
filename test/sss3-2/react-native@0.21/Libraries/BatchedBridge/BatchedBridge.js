loader.define("react-native@0.21/Libraries/BatchedBridge/BatchedBridge.js", ["react-native@0.21/Libraries/Utilities/Systrace.js", "react-native@0.21/Libraries/JavaScriptAppEngine/System/JSTimers/JSTimersExecution.js", "react-native@0.21/Libraries/Utilities/HMRClient.js", "react-native@0.21/Libraries/Utilities/ErrorUtils.js", "react-native@0.21/Libraries/Utilities/Platform.ios.js", "react-native@0.21/Users/lifan/work-test/sss3/rn/node_modules/fbjs/lib/invariant.js", "react-native@0.21/Users/lifan/work-test/sss3/rn/node_modules/fbjs/lib/keyMirror.js", "react-native@0.21/Libraries/Utilities/stringifySafe.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/BatchedBridge/BatchedBridge.js
	function (__inner_require__, exports, module) {
		var MessageQueue = __inner_require__(1 /*Libraries/Utilities/MessageQueue.js*/);

		var BatchedBridge = new MessageQueue(__fbBatchedBridgeConfig.remoteModuleConfig, __fbBatchedBridgeConfig.localModulesConfig);

		var Systrace = require('react-native@0.21/Libraries/Utilities/Systrace.js');
		var JSTimersExecution = require('react-native@0.21/Libraries/JavaScriptAppEngine/System/JSTimers/JSTimersExecution.js');

		BatchedBridge.registerCallableModule('Systrace', Systrace);
		BatchedBridge.registerCallableModule('JSTimersExecution', JSTimersExecution);

		if (__DEV__) {
			BatchedBridge.registerCallableModule('HMRClient', require('react-native@0.21/Libraries/Utilities/HMRClient.js'));
		}

		Object.defineProperty(global, '__fbBatchedBridge', { value: BatchedBridge });

		module.exports = BatchedBridge;
	}, // Libraries/Utilities/MessageQueue.js
	function (__inner_require__, exports, module) {
		var Systrace = require('react-native@0.21/Libraries/Utilities/Systrace.js');
		var ErrorUtils = require('react-native@0.21/Libraries/Utilities/ErrorUtils.js');
		var JSTimersExecution = require('react-native@0.21/Libraries/JavaScriptAppEngine/System/JSTimers/JSTimersExecution.js');
		var Platform = require('react-native@0.21/Libraries/Utilities/Platform.ios.js');

		var invariant = require('react-native@0.21/Users/lifan/work-test/sss3/rn/node_modules/fbjs/lib/invariant.js');
		var keyMirror = require('react-native@0.21/Users/lifan/work-test/sss3/rn/node_modules/fbjs/lib/keyMirror.js');
		var stringifySafe = require('react-native@0.21/Libraries/Utilities/stringifySafe.js');

		var MODULE_IDS = 0;
		var METHOD_IDS = 1;
		var PARAMS = 2;
		var CALL_IDS = 3;
		var MIN_TIME_BETWEEN_FLUSHES_MS = 5;

		var TRACE_TAG_REACT_APPS = 1 << 17;

		var SPY_MODE = false;

		var MethodTypes = keyMirror({
			remote: null,
			remoteAsync: null });

		var guard = function guard(fn) {
			try {
				fn();
			} catch (error) {
				ErrorUtils.reportFatalError(error);
			}
		};var MessageQueue = function () {

			function MessageQueue(remoteModules, localModules) {
				var _this = this;babelHelpers.classCallCheck(this, MessageQueue);
				this.RemoteModules = {};

				this._callableModules = {};
				this._queue = [[], [], [], 0];
				this._moduleTable = {};
				this._methodTable = {};
				this._callbacks = [];
				this._callbackID = 0;
				this._callID = 0;
				this._lastFlush = 0;
				this._eventLoopStartTime = new Date().getTime();

				['invokeCallbackAndReturnFlushedQueue', 'callFunctionReturnFlushedQueue', 'flushedQueue'].forEach(function (fn) {
					return _this[fn] = _this[fn].bind(_this);
				});

				var modulesConfig = this._genModulesConfig(remoteModules);
				this._genModules(modulesConfig);
				localModules && this._genLookupTables(this._genModulesConfig(localModules), this._moduleTable, this._methodTable);

				this._debugInfo = {};
				this._remoteModuleTable = {};
				this._remoteMethodTable = {};
				this._genLookupTables(modulesConfig, this._remoteModuleTable, this._remoteMethodTable);
			}babelHelpers.createClass(MessageQueue, [{ key: 'callFunctionReturnFlushedQueue', value: function callFunctionReturnFlushedQueue(module, method, args) {
					var _this2 = this;
					guard(function () {
						_this2.__callFunction(module, method, args);
						_this2.__callImmediates();
					});

					return this.flushedQueue();
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
				} }, { key: 'processModuleConfig', value: function processModuleConfig(config, moduleID) {
					var module = this._genModule(config, moduleID);
					this._genLookup(config, moduleID, this._remoteModuleTable, this._remoteMethodTable);
					return module;
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

						this._callbackID > 1 << 5 && (this._debugInfo[this._callbackID >> 5] = null);

						this._debugInfo[this._callbackID >> 1] = [module, method];
						onFail && params.push(this._callbackID);
						this._callbacks[this._callbackID++] = onFail;
						onSucc && params.push(this._callbackID);
						this._callbacks[this._callbackID++] = onSucc;
					}

					global.nativeTraceBeginAsyncFlow && global.nativeTraceBeginAsyncFlow(TRACE_TAG_REACT_APPS, 'native', this._callID);
					this._callID++;

					this._queue[MODULE_IDS].push(module);
					this._queue[METHOD_IDS].push(method);
					this._queue[PARAMS].push(params);

					var now = new Date().getTime();
					if (global.nativeFlushQueueImmediate && now - this._lastFlush >= MIN_TIME_BETWEEN_FLUSHES_MS) {
						global.nativeFlushQueueImmediate(this._queue);
						this._queue = [[], [], [], this._callID];
						this._lastFlush = now;
					}
					Systrace.counterEvent('pending_js_to_native_queue', this._queue[0].length);
					if (__DEV__ && SPY_MODE && isFinite(module)) {
						console.log('JS->N : ' + this._remoteModuleTable[module] + '.' + this._remoteMethodTable[module][method] + '(' + JSON.stringify(params) + ')');
					}
				} }, { key: '__callFunction', value: function __callFunction(module, method, args) {
					this._lastFlush = new Date().getTime();
					this._eventLoopStartTime = this._lastFlush;
					if (isFinite(module)) {
						method = this._methodTable[module][method];
						module = this._moduleTable[module];
					}
					Systrace.beginEvent(module + '.' + method + '()');
					if (__DEV__ && SPY_MODE) {
						console.log('N->JS : ' + module + '.' + method + '(' + JSON.stringify(args) + ')');
					}
					var moduleMethods = this._callableModules[module];
					invariant(!!moduleMethods, 'Module %s is not a registered callable module.', module);

					moduleMethods[method].apply(moduleMethods, args);
					Systrace.endEvent();
				} }, { key: '__invokeCallback', value: function __invokeCallback(cbID, args) {
					this._lastFlush = new Date().getTime();
					this._eventLoopStartTime = this._lastFlush;
					var callback = this._callbacks[cbID];
					var debug = this._debugInfo[cbID >> 1];
					var module = debug && this._remoteModuleTable[debug[0]];
					var method = debug && this._remoteMethodTable[debug[0]][debug[1]];
					invariant(callback, 'Callback with id ' + cbID + ': ' + module + '.' + method + '() not found');

					var profileName = debug ? '<callback for ' + module + '.' + method + '>' : cbID;
					if (callback && SPY_MODE && __DEV__) {
						console.log('N->JS : ' + profileName + '(' + JSON.stringify(args) + ')');
					}
					Systrace.beginEvent('MessageQueue.invokeCallback(' + profileName + ', ' + stringifySafe(args) + ')');
					this._callbacks[cbID & ~1] = null;
					this._callbacks[cbID | 1] = null;
					callback.apply(null, args);
					Systrace.endEvent();
				} }, { key: '_genModulesConfig', value: function _genModulesConfig(modules) {
					if (Array.isArray(modules)) {
						return modules;
					} else {
						var moduleArray = [];
						var moduleNames = Object.keys(modules);
						for (var i = 0, l = moduleNames.length; i < l; i++) {
							var moduleName = moduleNames[i];
							var moduleConfig = modules[moduleName];
							var _module = [moduleName];
							if (moduleConfig.constants) {
								_module.push(moduleConfig.constants);
							}
							var methodsConfig = moduleConfig.methods;
							if (methodsConfig) {
								var methods = [];
								var asyncMethods = [];
								var methodNames = Object.keys(methodsConfig);
								for (var j = 0, ll = methodNames.length; j < ll; j++) {
									var methodName = methodNames[j];
									var methodConfig = methodsConfig[methodName];
									methods[methodConfig.methodID] = methodName;
									if (methodConfig.type === MethodTypes.remoteAsync) {
										asyncMethods.push(methodConfig.methodID);
									}
								}
								if (methods.length) {
									_module.push(methods);
									if (asyncMethods.length) {
										_module.push(asyncMethods);
									}
								}
							}
							moduleArray[moduleConfig.moduleID] = _module;
						}
						return moduleArray;
					}
				} }, { key: '_genLookupTables', value: function _genLookupTables(modulesConfig, moduleTable, methodTable) {
					var _this4 = this;
					modulesConfig.forEach(function (config, moduleID) {
						_this4._genLookup(config, moduleID, moduleTable, methodTable);
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
					var _this5 = this;
					remoteModules.forEach(function (config, moduleID) {
						_this5._genModule(config, moduleID);
					});
				} }, { key: '_genModule', value: function _genModule(config, moduleID) {
					var _this6 = this;
					if (!config) {
						return;
					}

					var moduleName = void 0,
					    constants = void 0,
					    methods = void 0,
					    asyncMethods = void 0;
					if (moduleHasConstants(config)) {
						var _config3 = babelHelpers.slicedToArray(config, 4);moduleName = _config3[0];constants = _config3[1];methods = _config3[2];asyncMethods = _config3[3];
					} else {
						var _config4 = babelHelpers.slicedToArray(config, 3);moduleName = _config4[0];methods = _config4[1];asyncMethods = _config4[2];
					}

					var module = {};
					methods && methods.forEach(function (methodName, methodID) {
						var methodType = asyncMethods && arrayContains(asyncMethods, methodID) ? MethodTypes.remoteAsync : MethodTypes.remote;
						module[methodName] = _this6._genMethod(moduleID, methodID, methodType);
					});
					babelHelpers.extends(module, constants);

					if (!constants && !methods && !asyncMethods) {
						module.moduleID = moduleID;
					}

					this.RemoteModules[moduleName] = module;
					return module;
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
					} else {
						fn = function fn() {
							for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
								args[_key2] = arguments[_key2];
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

		module.exports = MessageQueue;
	}];
});