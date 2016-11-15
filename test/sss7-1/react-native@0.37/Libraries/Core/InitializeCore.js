__d("react-native@0.37/Libraries/Core/InitializeCore.js", ["react-native@0.37/Libraries/Utilities/defineLazyObjectProperty.js", "react-native@0.37/Libraries/Performance/Systrace.js", "react-native@0.37/Libraries/Core/ErrorUtils.js", "react-native@0.37/Libraries/Core/Timers/JSTimers.js", "react-native@0.37/Libraries/Alert/Alert.js", "regenerator-runtime@0.9/runtime.js", "react-native@0.37/Libraries/Network/XMLHttpRequest.js", "react-native@0.37/Libraries/Network/FormData.js", "react-native@0.37/Libraries/Network/fetch.js", "react-native@0.37/Libraries/WebSocket/WebSocket.js", "react-native@0.37/Libraries/vendor/core/Map.js", "react-native@0.37/Libraries/vendor/core/Set.js", "react-transform-hmr@1/lib/index.js", "react-native@0.37/Libraries/EventEmitter/RCTDeviceEventEmitter.js", "react-native@0.37/Libraries/EventEmitter/RCTNativeAppEventEmitter.js", "react-native@0.37/Libraries/Utilities/PerformanceLogger.js", "react-native@0.37/Libraries/BatchedBridge/NativeModules.js", "react-native@0.37/Libraries/Core/Devtools/parseErrorStack.js", "react-native@0.37/Libraries/Core/Devtools/symbolicateStackTrace.js", "react-native@0.37/Libraries/Utilities/stringifySafe.js", "react-native@0.37/Libraries/BatchedBridge/BatchedBridge.js", "fbjs@0.8/lib/invariant.js", "fbjs@0.8/lib/Promise.native.js", "promise@7/setimmediate/rejection-tracking.js", "react-native@0.37/Libraries/EventEmitter/NativeEventEmitter.js", "react-native@0.37/Libraries/Utilities/logError.js", "fbjs@0.8/lib/warning.js", "react-native@0.37/Libraries/Utilities/Platform.ios.js", "react-native@0.37/Libraries/StyleSheet/flattenStyle.js", "react@15.3/lib/ReactNativeComponentTree.js", "react@15.3/lib/ReactNativeMount.js", "react@15.3/lib/ReactReconciler.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Core/InitializeCore.js
	function (__inner_require__, exports, module) {
		if (global.GLOBAL === undefined) {
			global.GLOBAL = global;
		}

		if (global.window === undefined) {
			global.window = global;
		}

		var defineLazyObjectProperty = require('react-native@0.37/Libraries/Utilities/defineLazyObjectProperty.js');

		function defineProperty(object, name, getValue, eager) {
			var descriptor = Object.getOwnPropertyDescriptor(object, name);
			if (descriptor) {
				var backupName = 'original' + name[0].toUpperCase() + name.substr(1);
				Object.defineProperty(object, backupName, babelHelpers.extends({}, descriptor, {
					value: object[name] }));
			}var _ref = descriptor || {},
			    enumerable = _ref.enumerable,
			    writable = _ref.writable,
			    configurable = _ref.configurable;
			if (descriptor && !configurable) {
				console.error('Failed to set polyfill. ' + name + ' is not configurable.');
				return;
			}

			if (eager === true) {
				Object.defineProperty(object, name, {
					configurable: true,
					enumerable: enumerable !== false,
					writable: writable !== false,
					value: getValue() });
			} else {
				defineLazyObjectProperty(object, name, {
					get: getValue,
					enumerable: enumerable !== false,
					writable: writable !== false });
			}
		}

		global.process = global.process || {};
		global.process.env = global.process.env || {};
		if (!global.process.env.NODE_ENV) {
			global.process.env.NODE_ENV = __DEV__ ? 'development' : 'production';
		}

		var Systrace = require('react-native@0.37/Libraries/Performance/Systrace.js');
		Systrace.setEnabled(global.__RCTProfileIsProfiling || false);

		var ExceptionsManager = __inner_require__(1 /*Libraries/Core/ExceptionsManager.js*/);
		ExceptionsManager.installConsoleErrorReporter();

		__inner_require__(2 /*Libraries/Utilities/RCTLog.js*/);

		if (!global.__fbDisableExceptionsManager) {
			(function () {
				function handleError(e, isFatal) {
					try {
						ExceptionsManager.handleException(e, isFatal);
					} catch (ee) {

						console.log('Failed to print error: ', ee.message);

						throw e;
					}
				}

				var ErrorUtils = require('react-native@0.37/Libraries/Core/ErrorUtils.js');
				ErrorUtils.setGlobalHandler(handleError);
			})();
		}

		var defineLazyTimer = function defineLazyTimer(name) {
			defineProperty(global, name, function () {
				return require('react-native@0.37/Libraries/Core/Timers/JSTimers.js')[name];
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

		if (!global.alert) {
			global.alert = function (text) {

				require('react-native@0.37/Libraries/Alert/Alert.js').alert('Alert', '' + text);
			};
		}

		defineProperty(global, 'Promise', function () {
			return __inner_require__(3 /*Libraries/Promise.js*/);
		});

		defineProperty(global, 'regeneratorRuntime', function () {

			delete global.regeneratorRuntime;
			require('regenerator-runtime@0.9/runtime.js');
			return global.regeneratorRuntime;
		});

		defineProperty(global, 'XMLHttpRequest', function () {
			return require('react-native@0.37/Libraries/Network/XMLHttpRequest.js');
		});
		defineProperty(global, 'FormData', function () {
			return require('react-native@0.37/Libraries/Network/FormData.js');
		});

		defineProperty(global, 'fetch', function () {
			return require('react-native@0.37/Libraries/Network/fetch.js').fetch;
		});
		defineProperty(global, 'Headers', function () {
			return require('react-native@0.37/Libraries/Network/fetch.js').Headers;
		});
		defineProperty(global, 'Request', function () {
			return require('react-native@0.37/Libraries/Network/fetch.js').Request;
		});
		defineProperty(global, 'Response', function () {
			return require('react-native@0.37/Libraries/Network/fetch.js').Response;
		});
		defineProperty(global, 'WebSocket', function () {
			return require('react-native@0.37/Libraries/WebSocket/WebSocket.js');
		});

		var navigator = global.navigator;
		if (navigator === undefined) {
			global.navigator = navigator = {};
		}
		navigator.product = 'ReactNative';
		defineProperty(navigator, 'geolocation', function () {
			return __inner_require__(4 /*Libraries/Geolocation/Geolocation.js*/);
		});

		defineProperty(global, 'Map', function () {
			return require('react-native@0.37/Libraries/vendor/core/Map.js');
		}, true);
		defineProperty(global, 'Set', function () {
			return require('react-native@0.37/Libraries/vendor/core/Set.js');
		}, true);

		if (__DEV__) {

			if (!window.document) {
				var setupDevtools = __inner_require__(5 /*Libraries/Core/Devtools/setupDevtools.js*/);
				setupDevtools();
			}

			__inner_require__(6 /*Libraries/DebugComponentHierarchy/RCTDebugComponentOwnership.js*/);
			require('react-transform-hmr@1/lib/index.js');
		}

		require('react-native@0.37/Libraries/EventEmitter/RCTDeviceEventEmitter.js');
		require('react-native@0.37/Libraries/EventEmitter/RCTNativeAppEventEmitter.js');
		require('react-native@0.37/Libraries/Utilities/PerformanceLogger.js');
	}, // Libraries/Core/ExceptionsManager.js
	function (__inner_require__, exports, module) {
		var exceptionID = 0;
		function reportException(e, isFatal) {
			var _require = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js'),
			    ExceptionsManager = _require.ExceptionsManager;
			if (ExceptionsManager) {
				(function () {
					var parseErrorStack = require('react-native@0.37/Libraries/Core/Devtools/parseErrorStack.js');
					var stack = parseErrorStack(e);
					var currentExceptionID = ++exceptionID;
					if (isFatal) {
						ExceptionsManager.reportFatalException(e.message, stack, currentExceptionID);
					} else {
						ExceptionsManager.reportSoftException(e.message, stack, currentExceptionID);
					}
					if (__DEV__) {
						var symbolicateStackTrace = require('react-native@0.37/Libraries/Core/Devtools/symbolicateStackTrace.js');
						symbolicateStackTrace(stack).then(function (prettyStack) {
							if (prettyStack) {
								ExceptionsManager.updateExceptionMessage(e.message, prettyStack, currentExceptionID);
							} else {
								throw new Error('The stack is null');
							}
						}).catch(function (error) {
							return console.warn('Unable to symbolicate stack trace: ' + error.message);
						});
					}
				})();
			}
		}

		function handleException(e, isFatal) {

			if (!e.message) {
				e = new Error(e);
			}
			if (console._errorOriginal) {
				console._errorOriginal(e.message);
			} else {
				console.error(e.message);
			}
			reportException(e, isFatal);
		}

		function reactConsoleErrorHandler() {
			console._errorOriginal.apply(console, arguments);
			if (!console.reportErrorsAsExceptions) {
				return;
			}

			if (arguments[0] && arguments[0].stack) {
				reportException(arguments[0], false);
			} else {
				var stringifySafe = require('react-native@0.37/Libraries/Utilities/stringifySafe.js');
				var str = Array.prototype.map.call(arguments, stringifySafe).join(', ');
				if (str.slice(0, 10) === '"Warning: ') {

					return;
				}
				var error = new Error('console.error: ' + str);
				error.framesToPop = 1;
				reportException(error, false);
			}
		}

		function installConsoleErrorReporter() {

			if (console._errorOriginal) {
				return;
			}

			console._errorOriginal = console.error.bind(console);
			console.error = reactConsoleErrorHandler;
			if (console.reportErrorsAsExceptions === undefined) {

				console.reportErrorsAsExceptions = true;
			}
		}

		module.exports = { handleException: handleException, installConsoleErrorReporter: installConsoleErrorReporter };
	}, // Libraries/Utilities/RCTLog.js
	function (__inner_require__, exports, module) {
		var BatchedBridge = require('react-native@0.37/Libraries/BatchedBridge/BatchedBridge.js');

		var invariant = require('fbjs@0.8/lib/invariant.js');

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
	}, // Libraries/Promise.js
	function (__inner_require__, exports, module) {
		var Promise = require('fbjs@0.8/lib/Promise.native.js');

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
	}, // Libraries/Geolocation/Geolocation.js
	function (__inner_require__, exports, module) {
		var NativeEventEmitter = require('react-native@0.37/Libraries/EventEmitter/NativeEventEmitter.js');
		var RCTLocationObserver = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js').LocationObserver;

		var invariant = require('fbjs@0.8/lib/invariant.js');
		var logError = require('react-native@0.37/Libraries/Utilities/logError.js');
		var warning = require('fbjs@0.8/lib/warning.js');

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
	}, // Libraries/Core/Devtools/setupDevtools.js
	function (__inner_require__, exports, module) {
		var NativeModules = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js');
		var Platform = require('react-native@0.37/Libraries/Utilities/Platform.ios.js');

		function setupDevtools() {
			var messageListeners = [];
			var closeListeners = [];
			var hostname = 'localhost';
			if (Platform.OS === 'android' && NativeModules.AndroidConstants) {
				hostname = NativeModules.AndroidConstants.ServerHost.split(':')[0];
			}
			var ws = new window.WebSocket('ws://' + hostname + ':8097/devtools');

			var FOR_BACKEND = {
				resolveRNStyle: require('react-native@0.37/Libraries/StyleSheet/flattenStyle.js'),
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

				var ReactNativeComponentTree = require('react@15.3/lib/ReactNativeComponentTree.js');
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

					Mount: require('react@15.3/lib/ReactNativeMount.js'),
					Reconciler: require('react@15.3/lib/ReactReconciler.js') });

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
		var BatchedBridge = require('react-native@0.37/Libraries/BatchedBridge/BatchedBridge.js');

		var RCTDebugComponentOwnership = {

			getOwnerHierarchy: function getOwnerHierarchy(requestID, tag) {

				throw new Error('This seems to be unused. Will disable until it is needed again.');
			} };

		BatchedBridge.registerCallableModule('RCTDebugComponentOwnership', RCTDebugComponentOwnership);

		module.exports = RCTDebugComponentOwnership;
	}];
});