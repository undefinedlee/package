loader.define("react-native@0.33/Libraries/JavaScriptAppEngine/Initialization/InitializeJavaScriptAppEngine.js", ["regenerator-runtime@0.9/runtime.js", "react-native@0.33/Libraries/Utilities/Systrace.js", "react-native@0.33/Libraries/Utilities/ErrorUtils.js", "react-native@0.33/Libraries/JavaScriptAppEngine/System/JSTimers/JSTimers.js", "react-native@0.33/Libraries/Utilities/Alert.js", "react-native@0.33/Libraries/Network/XMLHttpRequest.js", "react-native@0.33/Libraries/Network/FormData.js", "react-native@0.33/Libraries/Fetch/fetch.js", "react-native@0.33/Libraries/WebSocket/WebSocket.js", "react-native@0.33/Libraries/vendor/core/Map.js", "react-native@0.33/Libraries/vendor/core/Set.js", "react-transform-hmr@1/lib/index.js", "react-native@0.33/Libraries/EventEmitter/RCTDeviceEventEmitter.js", "react-native@0.33/Libraries/EventEmitter/RCTNativeAppEventEmitter.js", "react-native@0.33/Libraries/Utilities/PerformanceLogger.js", "react-native@0.33/Libraries/JavaScriptAppEngine/Initialization/parseErrorStack.js", "react-native@0.33/Libraries/JavaScriptAppEngine/Initialization/symbolicateStackTrace.js", "react-native@0.33/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js", "react-native@0.33/Libraries/Utilities/stringifySafe.js", "react-native@0.33/Libraries/BatchedBridge/BatchedBridge.js", "react-native@0.33/__fbjs__/lib/invariant.js", "promise@7/setimmediate/rejection-tracking.js", "promise@7/setimmediate/es6-extensions.js", "promise@7/setimmediate/done.js", "react-native@0.33/Libraries/EventEmitter/NativeEventEmitter.js", "react-native@0.33/Libraries/Utilities/logError.js", "react-native@0.33/__fbjs__/lib/warning.js", "react-native@0.33/Libraries/Utilities/Platform.ios.js", "react-native@0.33/Libraries/StyleSheet/flattenStyle.js", "react-native@0.33/__react__/lib/ReactNativeComponentTree.js", "react-native@0.33/__react__/lib/ReactNativeMount.js", "react-native@0.33/__react__/lib/ReactReconciler.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/JavaScriptAppEngine/Initialization/InitializeJavaScriptAppEngine.js
	function (__inner_require__, exports, module) {
		require('regenerator-runtime@0.9/runtime.js');

		if (global.GLOBAL === undefined) {
			global.GLOBAL = global;
		}

		if (global.window === undefined) {
			global.window = global;
		}

		function setUpProcess() {
			global.process = global.process || {};
			global.process.env = global.process.env || {};
			if (!global.process.env.NODE_ENV) {
				global.process.env.NODE_ENV = __DEV__ ? 'development' : 'production';
			}
		}

		function setUpProfile() {
			var Systrace = require('react-native@0.33/Libraries/Utilities/Systrace.js');
			Systrace.setEnabled(global.__RCTProfileIsProfiling || false);
		}

		function setUpConsole() {

			var ExceptionsManager = __inner_require__(1 /*Libraries/JavaScriptAppEngine/Initialization/ExceptionsManager.js*/);
			ExceptionsManager.installConsoleErrorReporter();

			if (__DEV__) {
				__inner_require__(2 /*Libraries/Utilities/RCTLog.js*/);
			}
		}

		function defineProperty(object, name, newValue) {
			var descriptor = Object.getOwnPropertyDescriptor(object, name);
			if (descriptor) {
				var backupName = 'original' + name[0].toUpperCase() + name.substr(1);
				Object.defineProperty(object, backupName, babelHelpers.extends({}, descriptor, {
					value: object[name] }));
			}var _ref = descriptor || {},
			    enumerable = _ref.enumerable,
			    writable = _ref.writable,
			    configurable = _ref.configurable;
			if (!descriptor || configurable) {
				Object.defineProperty(object, name, {
					configurable: true,
					enumerable: enumerable !== false,
					writable: writable !== false,
					value: newValue });
			}
		}

		function defineLazyProperty(object, name, getNewValue) {
			var defineLazyObjectProperty = __inner_require__(3 /*Libraries/Utilities/defineLazyObjectProperty.js*/);

			var descriptor = getPropertyDescriptor(object, name);
			if (descriptor) {
				var backupName = 'original' + name[0].toUpperCase() + name.substr(1);
				Object.defineProperty(object, backupName, descriptor);
			}var _ref2 = descriptor || {},
			    configurable = _ref2.configurable;
			if (!descriptor || configurable) {
				defineLazyObjectProperty(object, name, {
					get: getNewValue,
					enumerable: descriptor ? descriptor.enumerable !== false : true,
					writable: descriptor ? descriptor.writable !== false : true });
			}
		}

		function setUpErrorHandler() {
			if (global.__fbDisableExceptionsManager) {
				return;
			}

			function handleError(e, isFatal) {
				try {
					__inner_require__(1 /*Libraries/JavaScriptAppEngine/Initialization/ExceptionsManager.js*/).handleException(e, isFatal);
				} catch (ee) {

					console.log('Failed to print error: ', ee.message);

					throw e;
				}
			}

			var ErrorUtils = require('react-native@0.33/Libraries/Utilities/ErrorUtils.js');
			ErrorUtils.setGlobalHandler(handleError);
		}

		function setUpTimers() {
			var defineLazyTimer = function defineLazyTimer(name) {
				defineLazyProperty(global, name, function () {
					return require('react-native@0.33/Libraries/JavaScriptAppEngine/System/JSTimers/JSTimers.js')[name];
				});
			};
			defineLazyTimer('setTimeout');
			defineLazyTimer('setInterval');
			defineLazyTimer('setImmediate');
			defineLazyTimer('clearTimeout');
			defineLazyTimer('clearInterval');
			defineLazyTimer('clearImmediate');
			defineLazyTimer('requestAnimationFrame');
			defineLazyTimer('cancelAnimationFrame');
			defineLazyTimer('requestIdleCallback');
			defineLazyTimer('cancelIdleCallback');
		}

		function setUpAlert() {
			if (!global.alert) {
				global.alert = function (text) {

					require('react-native@0.33/Libraries/Utilities/Alert.js').alert('Alert', '' + text);
				};
			}
		}

		function setUpPromise() {

			defineLazyProperty(global, 'Promise', function () {
				return __inner_require__(4 /*Libraries/Promise.js*/);
			});
		}

		function setUpXHR() {

			defineLazyProperty(global, 'XMLHttpRequest', function () {
				return require('react-native@0.33/Libraries/Network/XMLHttpRequest.js');
			});
			defineLazyProperty(global, 'FormData', function () {
				return require('react-native@0.33/Libraries/Network/FormData.js');
			});

			defineLazyProperty(global, 'fetch', function () {
				return require('react-native@0.33/Libraries/Fetch/fetch.js').fetch;
			});
			defineLazyProperty(global, 'Headers', function () {
				return require('react-native@0.33/Libraries/Fetch/fetch.js').Headers;
			});
			defineLazyProperty(global, 'Request', function () {
				return require('react-native@0.33/Libraries/Fetch/fetch.js').Request;
			});
			defineLazyProperty(global, 'Response', function () {
				return require('react-native@0.33/Libraries/Fetch/fetch.js').Response;
			});

			defineLazyProperty(global, 'WebSocket', function () {
				return require('react-native@0.33/Libraries/WebSocket/WebSocket.js');
			});
		}

		function setUpGeolocation() {
			if (global.navigator === undefined) {
				Object.defineProperty(global, 'navigator', {
					configurable: true,
					enumerable: true,
					writable: true,
					value: {} });
			}var _global = global,
			    navigator = _global.navigator;
			Object.defineProperty(navigator, 'product', { value: 'ReactNative' });
			defineLazyProperty(navigator, 'geolocation', function () {
				return __inner_require__(6 /*Libraries/Geolocation/Geolocation.js*/);
			});
		}

		function setUpCollections() {

			defineProperty(global, 'Map', require('react-native@0.33/Libraries/vendor/core/Map.js'));
			defineProperty(global, 'Set', require('react-native@0.33/Libraries/vendor/core/Set.js'));
		}

		function setUpDevTools() {
			if (__DEV__) {

				if (!window.document) {
					var setupDevtools = __inner_require__(7 /*Libraries/Devtools/setupDevtools.js*/);
					setupDevtools();
				}

				__inner_require__(8 /*Libraries/DebugComponentHierarchy/RCTDebugComponentOwnership.js*/);
				require('react-transform-hmr@1/lib/index.js');
			}
		}

		function getPropertyDescriptor(object, name) {
			while (object) {
				var descriptor = Object.getOwnPropertyDescriptor(object, name);
				if (descriptor) {
					return descriptor;
				}
				object = Object.getPrototypeOf(object);
			}
		}

		setUpProcess();
		setUpProfile();
		setUpConsole();
		setUpTimers();
		setUpAlert();
		setUpPromise();
		setUpErrorHandler();
		setUpXHR();
		setUpGeolocation();
		setUpCollections();
		setUpDevTools();

		require('react-native@0.33/Libraries/EventEmitter/RCTDeviceEventEmitter.js');
		require('react-native@0.33/Libraries/EventEmitter/RCTNativeAppEventEmitter.js');
		require('react-native@0.33/Libraries/Utilities/PerformanceLogger.js');
	}, // Libraries/JavaScriptAppEngine/Initialization/ExceptionsManager.js
	function (__inner_require__, exports, module) {
		var exceptionID = 0;

		function reportException(e, isFatal) {
			var parseErrorStack = require('react-native@0.33/Libraries/JavaScriptAppEngine/Initialization/parseErrorStack.js');
			var symbolicateStackTrace = require('react-native@0.33/Libraries/JavaScriptAppEngine/Initialization/symbolicateStackTrace.js');
			var RCTExceptionsManager = require('react-native@0.33/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').ExceptionsManager;

			var currentExceptionID = ++exceptionID;
			if (RCTExceptionsManager) {
				var stack = parseErrorStack(e);
				if (isFatal) {
					RCTExceptionsManager.reportFatalException(e.message, stack, currentExceptionID);
				} else {
					RCTExceptionsManager.reportSoftException(e.message, stack, currentExceptionID);
				}
				if (__DEV__) {
					symbolicateStackTrace(stack).then(function (prettyStack) {
						if (prettyStack) {
							RCTExceptionsManager.updateExceptionMessage(e.message, prettyStack, currentExceptionID);
						} else {
							throw new Error('The stack is null');
						}
					}).catch(function (error) {
						return console.warn('Unable to symbolicate stack trace: ' + error.message);
					});
				}
			}
		}

		function handleException(e, isFatal) {

			if (!e.message) {
				e = new Error(e);
			}

			(console._errorOriginal || console.error)(e.message);
			reportException(e, isFatal);
		}

		function installConsoleErrorReporter() {

			if (console._errorOriginal) {
				return;
			}

			console._errorOriginal = console.error.bind(console);
			console.error = function reactConsoleError() {

				console._errorOriginal.apply(null, arguments);
				if (!console.reportErrorsAsExceptions) {
					return;
				}

				if (arguments[0] && arguments[0].stack) {
					reportException(arguments[0], false);
				} else {
					var stringifySafe = require('react-native@0.33/Libraries/Utilities/stringifySafe.js');
					var str = Array.prototype.map.call(arguments, stringifySafe).join(', ');
					if (str.slice(0, 10) === '"Warning: ') {

						return;
					}
					var error = new Error('console.error: ' + str);
					error.framesToPop = 1;
					reportException(error, false);
				}
			};
			if (console.reportErrorsAsExceptions === undefined) {

				console.reportErrorsAsExceptions = true;
			}
		}

		module.exports = { handleException: handleException, installConsoleErrorReporter: installConsoleErrorReporter };
	}, // Libraries/Utilities/RCTLog.js
	function (__inner_require__, exports, module) {
		var BatchedBridge = require('react-native@0.33/Libraries/BatchedBridge/BatchedBridge.js');

		var invariant = require('react-native@0.33/__fbjs__/lib/invariant.js');

		var levelsMap = {
			log: 'log',
			info: 'info',
			warn: 'warn',
			error: 'error',
			fatal: 'error' };var RCTLog = function () {
			function RCTLog() {
				babelHelpers.classCallCheck(this, RCTLog);
			}babelHelpers.createClass(RCTLog, null, [{ key: 'logIfNoNativeHook', value: function logIfNoNativeHook() {
					var args = Array.prototype.slice.call(arguments);
					var level = args.shift();
					var logFn = levelsMap[level];
					invariant(logFn, 'Level "' + level + '" not one of ' + Object.keys(levelsMap));

					if (typeof global.nativeLoggingHook === 'undefined') {

						console[logFn].apply(console, args);
					}
					return true;
				} }]);return RCTLog;
		}();

		BatchedBridge.registerCallableModule('RCTLog', RCTLog);

		module.exports = RCTLog;
	}, // Libraries/Utilities/defineLazyObjectProperty.js
	function (__inner_require__, exports, module) {
		function defineLazyObjectProperty(object, name, descriptor) {
			var get = descriptor.get;
			var enumerable = descriptor.enumerable !== false;
			var writable = descriptor.writable !== false;

			var value = void 0;
			var valueSet = false;
			function getValue() {

				if (!valueSet) {
					setValue(get());
				}
				return value;
			}
			function setValue(newValue) {
				value = newValue;
				valueSet = true;
				Object.defineProperty(object, name, {
					value: newValue,
					configurable: true,
					enumerable: enumerable,
					writable: writable });
			}

			Object.defineProperty(object, name, {
				get: getValue,
				set: setValue,
				configurable: true,
				enumerable: enumerable });
		}

		module.exports = defineLazyObjectProperty;
	}, // Libraries/Promise.js
	function (__inner_require__, exports, module) {
		var Promise = __inner_require__(5 /*__fbjs__/lib/Promise.native.js*/);

		if (__DEV__) {
			require('promise@7/setimmediate/rejection-tracking.js').enable({
				allRejections: true,
				onUnhandled: function onUnhandled(id) {
					var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var _error$message = error.message,
					    message = _error$message === undefined ? null : _error$message,
					    _error$stack = error.stack,
					    stack = _error$stack === undefined ? null : _error$stack;
					var warning = 'Possible Unhandled Promise Rejection (id: ' + id + '):\n' + (message == null ? '' : message + '\n') + (stack == null ? '' : stack);
					console.warn(warning);
				},
				onHandled: function onHandled(id) {
					var warning = 'Promise Rejection Handled (id: ' + id + ')\n' + 'This means you can ignore any previous messages of the form ' + ('"Possible Unhandled Promise Rejection (id: ' + id + '):"');
					console.warn(warning);
				} });
		}

		module.exports = Promise;
	}, // __fbjs__/lib/Promise.native.js
	function (__inner_require__, exports, module) {
		var Promise = require('promise@7/setimmediate/es6-extensions.js');
		require('promise@7/setimmediate/done.js');

		Promise.prototype['finally'] = function (onSettled) {
			return this.then(onSettled, onSettled);
		};

		module.exports = Promise;
	}, // Libraries/Geolocation/Geolocation.js
	function (__inner_require__, exports, module) {
		var NativeEventEmitter = require('react-native@0.33/Libraries/EventEmitter/NativeEventEmitter.js');
		var RCTLocationObserver = require('react-native@0.33/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').LocationObserver;

		var invariant = require('react-native@0.33/__fbjs__/lib/invariant.js');
		var logError = require('react-native@0.33/Libraries/Utilities/logError.js');
		var warning = require('react-native@0.33/__fbjs__/lib/warning.js');

		var LocationEventEmitter = new NativeEventEmitter(RCTLocationObserver);

		var subscriptions = [];
		var updatesEnabled = false;

		var Geolocation = {

			getCurrentPosition: function getCurrentPosition(geo_success, geo_error, geo_options) {
				invariant(typeof geo_success === 'function', 'Must provide a valid geo_success callback.');

				RCTLocationObserver.getCurrentPosition(geo_options || {}, geo_success, geo_error || logError);
			},

			watchPosition: function watchPosition(success, error, options) {
				if (!updatesEnabled) {
					RCTLocationObserver.startObserving(options || {});
					updatesEnabled = true;
				}
				var watchID = subscriptions.length;
				subscriptions.push([LocationEventEmitter.addListener('geolocationDidChange', success), error ? LocationEventEmitter.addListener('geolocationError', error) : null]);

				return watchID;
			},

			clearWatch: function clearWatch(watchID) {
				var sub = subscriptions[watchID];
				if (!sub) {

					return;
				}

				sub[0].remove();

				var sub1 = sub[1];sub1 && sub1.remove();
				subscriptions[watchID] = undefined;
				var noWatchers = true;
				for (var ii = 0; ii < subscriptions.length; ii++) {
					if (subscriptions[ii]) {
						noWatchers = false;
					}
				}
				if (noWatchers) {
					Geolocation.stopObserving();
				}
			},

			stopObserving: function stopObserving() {
				if (updatesEnabled) {
					RCTLocationObserver.stopObserving();
					updatesEnabled = false;
					for (var ii = 0; ii < subscriptions.length; ii++) {
						var sub = subscriptions[ii];
						if (sub) {
							warning('Called stopObserving with existing subscriptions.');
							sub[0].remove();

							var sub1 = sub[1];sub1 && sub1.remove();
						}
					}
					subscriptions = [];
				}
			} };

		module.exports = Geolocation;
	}, // Libraries/Devtools/setupDevtools.js
	function (__inner_require__, exports, module) {
		var Platform = require('react-native@0.33/Libraries/Utilities/Platform.ios.js');
		var NativeModules = require('react-native@0.33/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js');

		function setupDevtools() {
			var messageListeners = [];
			var closeListeners = [];
			var hostname = 'localhost';
			if (Platform.OS === 'android' && NativeModules.AndroidConstants) {
				hostname = NativeModules.AndroidConstants.ServerHost.split(':')[0];
			}
			var ws = new window.WebSocket('ws://' + hostname + ':8097/devtools');

			var FOR_BACKEND = {
				resolveRNStyle: require('react-native@0.33/Libraries/StyleSheet/flattenStyle.js'),
				wall: {
					listen: function listen(fn) {
						messageListeners.push(fn);
					},
					onClose: function onClose(fn) {
						closeListeners.push(fn);
					},
					send: function send(data) {
						ws.send(JSON.stringify(data));
					} } };

			ws.onclose = handleClose;
			ws.onerror = handleClose;
			ws.onopen = function () {
				tryToConnect();
			};

			var hasClosed = false;
			function handleClose() {
				if (!hasClosed) {
					hasClosed = true;
					setTimeout(setupDevtools, 2000);
					closeListeners.forEach(function (fn) {
						return fn();
					});
				}
			}

			function tryToConnect() {
				ws.send('attach:agent');
				var _interval = setInterval(function () {
					return ws.send('attach:agent');
				}, 500);
				ws.onmessage = function (evt) {
					if (evt.data.indexOf('eval:') === 0) {
						clearInterval(_interval);
						initialize(evt.data.slice('eval:'.length));
					}
				};
			}

			function initialize(text) {
				try {

					eval(text);
				} catch (e) {
					console.error('Failed to eval: ' + e.message);
					return;
				}

				var ReactNativeComponentTree = require('react-native@0.33/__react__/lib/ReactNativeComponentTree.js');
				window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
					ComponentTree: {
						getClosestInstanceFromNode: function getClosestInstanceFromNode(node) {
							return ReactNativeComponentTree.getClosestInstanceFromNode(node);
						},
						getNodeFromInstance: function getNodeFromInstance(inst) {

							while (inst._renderedComponent) {
								inst = inst._renderedComponent;
							}
							if (inst) {
								return ReactNativeComponentTree.getNodeFromInstance(inst);
							} else {
								return null;
							}
						} },

					Mount: require('react-native@0.33/__react__/lib/ReactNativeMount.js'),
					Reconciler: require('react-native@0.33/__react__/lib/ReactReconciler.js') });

				ws.onmessage = handleMessage;
			}

			function handleMessage(evt) {

				var data;
				try {
					data = JSON.parse(evt.data);
				} catch (e) {
					return console.error('failed to parse json: ' + evt.data);
				}

				if (data.$close || data.$error) {
					closeListeners.forEach(function (fn) {
						return fn();
					});
					window.__REACT_DEVTOOLS_GLOBAL_HOOK__.emit('shutdown');
					tryToConnect();
					return;
				}
				if (data.$open) {
					return;
				}
				messageListeners.forEach(function (fn) {
					try {
						fn(data);
					} catch (e) {

						console.log(data);
						throw e;
					}
				});
			}
		}

		module.exports = setupDevtools;
	}, // Libraries/DebugComponentHierarchy/RCTDebugComponentOwnership.js
	function (__inner_require__, exports, module) {
		var BatchedBridge = require('react-native@0.33/Libraries/BatchedBridge/BatchedBridge.js');

		var RCTDebugComponentOwnership = {

			getOwnerHierarchy: function getOwnerHierarchy(requestID, tag) {

				throw new Error('This seems to be unused. Will disable until it is needed again.');
			} };

		BatchedBridge.registerCallableModule('RCTDebugComponentOwnership', RCTDebugComponentOwnership);

		module.exports = RCTDebugComponentOwnership;
	}];
});