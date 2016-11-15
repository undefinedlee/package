__d("react-native@0.37/Libraries/Core/InitializeCore.js", ["react-native@0.37/Libraries/Utilities/defineLazyObjectProperty.js", "react-native@0.37/Libraries/Performance/Systrace.js", "react-native@0.37/Libraries/Core/ErrorUtils.js", "react-native@0.37/Libraries/Core/Timers/JSTimers.js", "react-native@0.37/Libraries/Alert/Alert.js", "regenerator-runtime@0.9/runtime.js", "react-native@0.37/Libraries/vendor/core/Map.js", "react-native@0.37/Libraries/vendor/core/Set.js", "react-native@0.37/Libraries/EventEmitter/RCTDeviceEventEmitter.js", "react-native@0.37/Libraries/EventEmitter/RCTNativeAppEventEmitter.js", "react-native@0.37/Libraries/BatchedBridge/NativeModules.js", "react-native@0.37/Libraries/Core/Devtools/parseErrorStack.js", "react-native@0.37/Libraries/Utilities/stringifySafe.js", "react-native@0.37/Libraries/BatchedBridge/BatchedBridge.js", "fbjs@0.8/lib/invariant.js", "fbjs@0.8/lib/Promise.native.js", "event-target-shim@1/lib/event-target.js", "base64-js@1/index.js", "fbjs@0.8/lib/warning.js", "react-native@0.37/Libraries/EventEmitter/NativeEventEmitter.js", "whatwg-fetch@1/fetch.js", "react-native@0.37/Libraries/Utilities/Platform.ios.js", "react-native@0.37/Libraries/Utilities/logError.js", "fbjs@0.8/lib/performanceNow.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

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
			global.process.env.NODE_ENV = 'production';
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
			return __inner_require__(4 /*Libraries/Network/XMLHttpRequest.js*/);
		});
		defineProperty(global, 'FormData', function () {
			return __inner_require__(6 /*Libraries/Network/FormData.js*/);
		});

		defineProperty(global, 'fetch', function () {
			return __inner_require__(7 /*Libraries/Network/fetch.js*/).fetch;
		});
		defineProperty(global, 'Headers', function () {
			return __inner_require__(7 /*Libraries/Network/fetch.js*/).Headers;
		});
		defineProperty(global, 'Request', function () {
			return __inner_require__(7 /*Libraries/Network/fetch.js*/).Request;
		});
		defineProperty(global, 'Response', function () {
			return __inner_require__(7 /*Libraries/Network/fetch.js*/).Response;
		});
		defineProperty(global, 'WebSocket', function () {
			return __inner_require__(8 /*Libraries/WebSocket/WebSocket.js*/);
		});

		var navigator = global.navigator;
		if (navigator === undefined) {
			global.navigator = navigator = {};
		}
		navigator.product = 'ReactNative';
		defineProperty(navigator, 'geolocation', function () {
			return __inner_require__(10 /*Libraries/Geolocation/Geolocation.js*/);
		});

		defineProperty(global, 'Map', function () {
			return require('react-native@0.37/Libraries/vendor/core/Map.js');
		}, true);
		defineProperty(global, 'Set', function () {
			return require('react-native@0.37/Libraries/vendor/core/Set.js');
		}, true);

		require('react-native@0.37/Libraries/EventEmitter/RCTDeviceEventEmitter.js');
		require('react-native@0.37/Libraries/EventEmitter/RCTNativeAppEventEmitter.js');
		__inner_require__(11 /*Libraries/Utilities/PerformanceLogger.js*/);
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

		module.exports = Promise;
	}, // Libraries/Network/XMLHttpRequest.js
	function (__inner_require__, exports, module) {
		var RCTNetworking = __inner_require__(5 /*Libraries/Network/RCTNetworking.ios.js*/);

		var EventTarget = require('event-target-shim@1/lib/event-target.js');
		var base64 = require('base64-js@1/index.js');
		var invariant = require('fbjs@0.8/lib/invariant.js');
		var warning = require('fbjs@0.8/lib/warning.js');

		var UNSENT = 0;
		var OPENED = 1;
		var HEADERS_RECEIVED = 2;
		var LOADING = 3;
		var DONE = 4;

		var SUPPORTED_RESPONSE_TYPES = {
			arraybuffer: typeof global.ArrayBuffer === 'function',
			blob: typeof global.Blob === 'function',
			document: false,
			json: true,
			text: true,
			'': true };

		var REQUEST_EVENTS = ['abort', 'error', 'load', 'loadstart', 'progress', 'timeout', 'loadend'];

		var XHR_EVENTS = REQUEST_EVENTS.concat('readystatechange');var XMLHttpRequestEventTarget = function (_EventTarget) {
			babelHelpers.inherits(XMLHttpRequestEventTarget, _EventTarget);function XMLHttpRequestEventTarget() {
				babelHelpers.classCallCheck(this, XMLHttpRequestEventTarget);return babelHelpers.possibleConstructorReturn(this, (XMLHttpRequestEventTarget.__proto__ || Object.getPrototypeOf(XMLHttpRequestEventTarget)).apply(this, arguments));
			}return XMLHttpRequestEventTarget;
		}(EventTarget.apply(undefined, REQUEST_EVENTS));var XMLHttpRequest = function (_EventTarget2) {
			babelHelpers.inherits(XMLHttpRequest, _EventTarget2);

			function XMLHttpRequest() {
				babelHelpers.classCallCheck(this, XMLHttpRequest);var _this2 = babelHelpers.possibleConstructorReturn(this, (XMLHttpRequest.__proto__ || Object.getPrototypeOf(XMLHttpRequest)).call(this));_this2.UNSENT = UNSENT;_this2.OPENED = OPENED;_this2.HEADERS_RECEIVED = HEADERS_RECEIVED;_this2.LOADING = LOADING;_this2.DONE = DONE;_this2.readyState = UNSENT;_this2.status = 0;_this2.timeout = 0;_this2.upload = new XMLHttpRequestEventTarget();_this2._aborted = false;_this2._hasError = false;_this2._method = null;_this2._response = '';_this2._url = null;_this2._timedOut = false;_this2._trackingName = 'unknown';_this2._incrementalEvents = false;

				_this2._reset();return _this2;
			}babelHelpers.createClass(XMLHttpRequest, [{ key: '_reset', value: function _reset() {
					this.readyState = this.UNSENT;
					this.responseHeaders = undefined;
					this.status = 0;
					delete this.responseURL;

					this._requestId = null;

					this._cachedResponse = undefined;
					this._hasError = false;
					this._headers = {};
					this._response = '';
					this._responseType = '';
					this._sent = false;
					this._lowerCaseResponseHeaders = {};

					this._clearSubscriptions();
					this._timedOut = false;
				} }, { key: '__didCreateRequest', value: function __didCreateRequest(requestId) {
					this._requestId = requestId;
				} }, { key: '__didUploadProgress', value: function __didUploadProgress(requestId, progress, total) {
					if (requestId === this._requestId) {
						this.upload.dispatchEvent({
							type: 'progress',
							lengthComputable: true,
							loaded: progress,
							total: total });
					}
				} }, { key: '__didReceiveResponse', value: function __didReceiveResponse(requestId, status, responseHeaders, responseURL) {
					if (requestId === this._requestId) {
						this.status = status;
						this.setResponseHeaders(responseHeaders);
						this.setReadyState(this.HEADERS_RECEIVED);
						if (responseURL || responseURL === '') {
							this.responseURL = responseURL;
						} else {
							delete this.responseURL;
						}
					}
				} }, { key: '__didReceiveData', value: function __didReceiveData(requestId, response) {
					if (requestId !== this._requestId) {
						return;
					}
					this._response = response;
					this._cachedResponse = undefined;
					this.setReadyState(this.LOADING);
				} }, { key: '__didReceiveIncrementalData', value: function __didReceiveIncrementalData(requestId, responseText, progress, total) {
					if (requestId !== this._requestId) {
						return;
					}
					if (!this._response) {
						this._response = responseText;
					} else {
						this._response += responseText;
					}
					this.setReadyState(this.LOADING);
					this.__didReceiveDataProgress(requestId, progress, total);
				} }, { key: '__didReceiveDataProgress', value: function __didReceiveDataProgress(requestId, loaded, total) {
					if (requestId !== this._requestId) {
						return;
					}
					this.dispatchEvent({
						type: 'progress',
						lengthComputable: total >= 0,
						loaded: loaded,
						total: total });
				} }, { key: '__didCompleteResponse', value: function __didCompleteResponse(requestId, error, timeOutError) {
					if (requestId === this._requestId) {
						if (error) {
							if (this._responseType === '' || this._responseType === 'text') {
								this._response = error;
							}
							this._hasError = true;
							if (timeOutError) {
								this._timedOut = true;
							}
						}
						this._clearSubscriptions();
						this._requestId = null;
						this.setReadyState(this.DONE);
					}
				} }, { key: '_clearSubscriptions', value: function _clearSubscriptions() {
					(this._subscriptions || []).forEach(function (sub) {
						sub.remove();
					});
					this._subscriptions = [];
				} }, { key: 'getAllResponseHeaders', value: function getAllResponseHeaders() {
					if (!this.responseHeaders) {

						return null;
					}
					var headers = this.responseHeaders || {};
					return Object.keys(headers).map(function (headerName) {
						return headerName + ': ' + headers[headerName];
					}).join('\r\n');
				} }, { key: 'getResponseHeader', value: function getResponseHeader(header) {
					var value = this._lowerCaseResponseHeaders[header.toLowerCase()];
					return value !== undefined ? value : null;
				} }, { key: 'setRequestHeader', value: function setRequestHeader(header, value) {
					if (this.readyState !== this.OPENED) {
						throw new Error('Request has not been opened');
					}
					this._headers[header.toLowerCase()] = value;
				} }, { key: 'setTrackingName', value: function setTrackingName(trackingName) {
					this._trackingName = trackingName;
					return this;
				} }, { key: 'open', value: function open(method, url, async) {

					if (this.readyState !== this.UNSENT) {
						throw new Error('Cannot open, already sending');
					}
					if (async !== undefined && !async) {

						throw new Error('Synchronous http requests are not supported');
					}
					if (!url) {
						throw new Error('Cannot load an empty url');
					}
					this._method = method.toUpperCase();
					this._url = url;
					this._aborted = false;
					this.setReadyState(this.OPENED);
				} }, { key: 'send', value: function send(data) {
					var _this3 = this;
					if (this.readyState !== this.OPENED) {
						throw new Error('Request has not been opened');
					}
					if (this._sent) {
						throw new Error('Request has already been sent');
					}
					this._sent = true;
					var incrementalEvents = this._incrementalEvents || !!this.onreadystatechange || !!this.onprogress;

					this._subscriptions.push(RCTNetworking.addListener('didSendNetworkData', function (args) {
						return _this3.__didUploadProgress.apply(_this3, babelHelpers.toConsumableArray(args));
					}));

					this._subscriptions.push(RCTNetworking.addListener('didReceiveNetworkResponse', function (args) {
						return _this3.__didReceiveResponse.apply(_this3, babelHelpers.toConsumableArray(args));
					}));

					this._subscriptions.push(RCTNetworking.addListener('didReceiveNetworkData', function (args) {
						return _this3.__didReceiveData.apply(_this3, babelHelpers.toConsumableArray(args));
					}));

					this._subscriptions.push(RCTNetworking.addListener('didReceiveNetworkIncrementalData', function (args) {
						return _this3.__didReceiveIncrementalData.apply(_this3, babelHelpers.toConsumableArray(args));
					}));

					this._subscriptions.push(RCTNetworking.addListener('didReceiveNetworkDataProgress', function (args) {
						return _this3.__didReceiveDataProgress.apply(_this3, babelHelpers.toConsumableArray(args));
					}));

					this._subscriptions.push(RCTNetworking.addListener('didCompleteNetworkResponse', function (args) {
						return _this3.__didCompleteResponse.apply(_this3, babelHelpers.toConsumableArray(args));
					}));

					var nativeResponseType = 'text';
					if (this._responseType === 'arraybuffer' || this._responseType === 'blob') {
						nativeResponseType = 'base64';
					}

					invariant(this._method, 'Request method needs to be defined.');
					invariant(this._url, 'Request URL needs to be defined.');
					RCTNetworking.sendRequest(this._method, this._trackingName, this._url, this._headers, data, nativeResponseType, incrementalEvents, this.timeout, this.__didCreateRequest.bind(this));
				} }, { key: 'abort', value: function abort() {
					this._aborted = true;
					if (this._requestId) {
						RCTNetworking.abortRequest(this._requestId);
					}

					if (!(this.readyState === this.UNSENT || this.readyState === this.OPENED && !this._sent || this.readyState === this.DONE)) {
						this._reset();
						this.setReadyState(this.DONE);
					}

					this._reset();
				} }, { key: 'setResponseHeaders', value: function setResponseHeaders(responseHeaders) {
					this.responseHeaders = responseHeaders || null;
					var headers = responseHeaders || {};
					this._lowerCaseResponseHeaders = Object.keys(headers).reduce(function (lcaseHeaders, headerName) {
						lcaseHeaders[headerName.toLowerCase()] = headers[headerName];
						return lcaseHeaders;
					}, {});
				} }, { key: 'setReadyState', value: function setReadyState(newState) {
					this.readyState = newState;
					this.dispatchEvent({ type: 'readystatechange' });
					if (newState === this.DONE) {
						if (this._aborted) {
							this.dispatchEvent({ type: 'abort' });
						} else if (this._hasError) {
							if (this._timedOut) {
								this.dispatchEvent({ type: 'timeout' });
							} else {
								this.dispatchEvent({ type: 'error' });
							}
						} else {
							this.dispatchEvent({ type: 'load' });
						}
						this.dispatchEvent({ type: 'loadend' });
					}
				} }, { key: 'addEventListener', value: function addEventListener(type, listener) {

					if (type === 'readystatechange' || type === 'progress') {
						this._incrementalEvents = true;
					}
					babelHelpers.get(XMLHttpRequest.prototype.__proto__ || Object.getPrototypeOf(XMLHttpRequest.prototype), 'addEventListener', this).call(this, type, listener);
				} }, { key: 'responseType', get: function get() {
					return this._responseType;
				}, set: function set(responseType) {
					if (this._sent) {
						throw new Error('Failed to set the \'responseType\' property on \'XMLHttpRequest\': The ' + 'response type cannot be set after the request has been sent.');
					}if (!SUPPORTED_RESPONSE_TYPES.hasOwnProperty(responseType)) {
						warning(false, 'The provided value \'' + responseType + '\' is not a valid \'responseType\'.');return;
					}invariant(SUPPORTED_RESPONSE_TYPES[responseType] || responseType === 'document', 'The provided value \'' + responseType + '\' is unsupported in this environment.');this._responseType = responseType;
				} }, { key: 'responseText', get: function get() {
					if (this._responseType !== '' && this._responseType !== 'text') {
						throw new Error("The 'responseText' property is only available if 'responseType' " + ('is set to \'\' or \'text\', but it is \'' + this._responseType + '\'.'));
					}if (this.readyState < LOADING) {
						return '';
					}return this._response;
				} }, { key: 'response', get: function get() {
					var responseType = this.responseType;if (responseType === '' || responseType === 'text') {
						return this.readyState < LOADING || this._hasError ? '' : this._response;
					}if (this.readyState !== DONE) {
						return null;
					}if (this._cachedResponse !== undefined) {
						return this._cachedResponse;
					}switch (responseType) {case 'document':
							this._cachedResponse = null;break;case 'arraybuffer':
							this._cachedResponse = base64.toByteArray(this._response).buffer;break;case 'blob':
							this._cachedResponse = new global.Blob([base64.toByteArray(this._response).buffer], { type: this.getResponseHeader('content-type') || '' });break;case 'json':
							try {
								this._cachedResponse = JSON.parse(this._response);
							} catch (_) {
								this._cachedResponse = null;
							}break;default:
							this._cachedResponse = null;}return this._cachedResponse;
				} }]);return XMLHttpRequest;
		}(EventTarget.apply(undefined, babelHelpers.toConsumableArray(XHR_EVENTS)));XMLHttpRequest.UNSENT = UNSENT;XMLHttpRequest.OPENED = OPENED;XMLHttpRequest.HEADERS_RECEIVED = HEADERS_RECEIVED;XMLHttpRequest.LOADING = LOADING;XMLHttpRequest.DONE = DONE;

		module.exports = XMLHttpRequest;
	}, // Libraries/Network/RCTNetworking.ios.js
	function (__inner_require__, exports, module) {
		var FormData = __inner_require__(6 /*Libraries/Network/FormData.js*/);
		var NativeEventEmitter = require('react-native@0.37/Libraries/EventEmitter/NativeEventEmitter.js');
		var RCTNetworkingNative = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js').Networking;var RCTNetworking = function (_NativeEventEmitter) {
			babelHelpers.inherits(RCTNetworking, _NativeEventEmitter);

			function RCTNetworking() {
				babelHelpers.classCallCheck(this, RCTNetworking);return babelHelpers.possibleConstructorReturn(this, (RCTNetworking.__proto__ || Object.getPrototypeOf(RCTNetworking)).call(this, RCTNetworkingNative));
			}babelHelpers.createClass(RCTNetworking, [{ key: 'sendRequest', value: function sendRequest(method, trackingName, url, headers, data, responseType, incrementalUpdates, timeout, callback) {
					var body = typeof data === 'string' ? { string: data } : data instanceof FormData ? { formData: data.getParts() } : data;
					RCTNetworkingNative.sendRequest({
						method: method,
						url: url,
						data: babelHelpers.extends({}, body, { trackingName: trackingName }),
						headers: headers,
						responseType: responseType,
						incrementalUpdates: incrementalUpdates,
						timeout: timeout }, callback);
				} }, { key: 'abortRequest', value: function abortRequest(requestId) {
					RCTNetworkingNative.abortRequest(requestId);
				} }, { key: 'clearCookies', value: function clearCookies(callback) {
					RCTNetworkingNative.clearCookies(callback);
				} }]);return RCTNetworking;
		}(NativeEventEmitter);

		module.exports = new RCTNetworking();
	}, // Libraries/Network/FormData.js
	function (__inner_require__, exports, module) {
		var FormData = function () {

			function FormData() {
				babelHelpers.classCallCheck(this, FormData);
				this._parts = [];
			}babelHelpers.createClass(FormData, [{ key: 'append', value: function append(key, value) {

					this._parts.push([key, value]);
				} }, { key: 'getParts', value: function getParts() {
					return this._parts.map(function (_ref) {
						var _ref2 = babelHelpers.slicedToArray(_ref, 2),
						    name = _ref2[0],
						    value = _ref2[1];
						var contentDisposition = 'form-data; name="' + name + '"';

						var headers = { 'content-disposition': contentDisposition };

						if (typeof value === 'object') {
							if (typeof value.name === 'string') {
								headers['content-disposition'] += '; filename="' + value.name + '"';
							}
							if (typeof value.type === 'string') {
								headers['content-type'] = value.type;
							}
							return babelHelpers.extends({}, value, { headers: headers, fieldName: name });
						}

						return { string: String(value), headers: headers, fieldName: name };
					});
				} }]);return FormData;
		}();

		module.exports = FormData;
	}, // Libraries/Network/fetch.js
	function (__inner_require__, exports, module) {
		require('whatwg-fetch@1/fetch.js');

		module.exports = { fetch: fetch, Headers: Headers, Request: Request, Response: Response };
	}, // Libraries/WebSocket/WebSocket.js
	function (__inner_require__, exports, module) {
		var NativeEventEmitter = require('react-native@0.37/Libraries/EventEmitter/NativeEventEmitter.js');
		var Platform = require('react-native@0.37/Libraries/Utilities/Platform.ios.js');
		var RCTWebSocketModule = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js').WebSocketModule;
		var WebSocketEvent = __inner_require__(9 /*Libraries/WebSocket/WebSocketEvent.js*/);

		var EventTarget = require('event-target-shim@1/lib/event-target.js');
		var base64 = require('base64-js@1/index.js');

		var CONNECTING = 0;
		var OPEN = 1;
		var CLOSING = 2;
		var CLOSED = 3;

		var CLOSE_NORMAL = 1000;

		var WEBSOCKET_EVENTS = ['close', 'error', 'message', 'open'];

		var nextWebSocketId = 0;var WebSocket = function (_EventTarget) {
			babelHelpers.inherits(WebSocket, _EventTarget);

			function WebSocket(url, protocols, options) {
				babelHelpers.classCallCheck(this, WebSocket);var _this = babelHelpers.possibleConstructorReturn(this, (WebSocket.__proto__ || Object.getPrototypeOf(WebSocket)).call(this));_this.CONNECTING = CONNECTING;_this.OPEN = OPEN;_this.CLOSING = CLOSING;_this.CLOSED = CLOSED;_this.readyState = CONNECTING;

				if (typeof protocols === 'string') {
					protocols = [protocols];
				}

				if (!Array.isArray(protocols)) {
					protocols = null;
				}

				_this._eventEmitter = new NativeEventEmitter(RCTWebSocketModule);
				_this._socketId = nextWebSocketId++;
				RCTWebSocketModule.connect(url, protocols, options, _this._socketId);
				_this._registerEvents();return _this;
			}babelHelpers.createClass(WebSocket, [{ key: 'close', value: function close(code, reason) {
					if (this.readyState === this.CLOSING || this.readyState === this.CLOSED) {
						return;
					}

					this.readyState = this.CLOSING;
					this._close(code, reason);
				} }, { key: 'send', value: function send(data) {
					if (this.readyState === this.CONNECTING) {
						throw new Error('INVALID_STATE_ERR');
					}

					if (typeof data === 'string') {
						RCTWebSocketModule.send(data, this._socketId);
						return;
					}

					if (ArrayBuffer.isView(data)) {

						data = data.buffer;
					}
					if (data instanceof ArrayBuffer) {
						data = base64.fromByteArray(new Uint8Array(data));
						RCTWebSocketModule.sendBinary(data, this._socketId);
						return;
					}

					throw new Error('Unsupported data type');
				} }, { key: 'ping', value: function ping() {
					if (this.readyState === this.CONNECTING) {
						throw new Error('INVALID_STATE_ERR');
					}

					RCTWebSocketModule.ping(this._socketId);
				} }, { key: '_close', value: function _close(code, reason) {
					if (Platform.OS === 'android') {

						var statusCode = typeof code === 'number' ? code : CLOSE_NORMAL;
						var closeReason = typeof reason === 'string' ? reason : '';
						RCTWebSocketModule.close(statusCode, closeReason, this._socketId);
					} else {
						RCTWebSocketModule.close(this._socketId);
					}
				} }, { key: '_unregisterEvents', value: function _unregisterEvents() {
					this._subscriptions.forEach(function (e) {
						return e.remove();
					});
					this._subscriptions = [];
				} }, { key: '_registerEvents', value: function _registerEvents() {
					var _this2 = this;
					this._subscriptions = [this._eventEmitter.addListener('websocketMessage', function (ev) {
						if (ev.id !== _this2._socketId) {
							return;
						}
						_this2.dispatchEvent(new WebSocketEvent('message', {
							data: ev.type === 'binary' ? base64.toByteArray(ev.data).buffer : ev.data }));
					}), this._eventEmitter.addListener('websocketOpen', function (ev) {
						if (ev.id !== _this2._socketId) {
							return;
						}
						_this2.readyState = _this2.OPEN;
						_this2.dispatchEvent(new WebSocketEvent('open'));
					}), this._eventEmitter.addListener('websocketClosed', function (ev) {
						if (ev.id !== _this2._socketId) {
							return;
						}
						_this2.readyState = _this2.CLOSED;
						_this2.dispatchEvent(new WebSocketEvent('close', {
							code: ev.code,
							reason: ev.reason }));

						_this2._unregisterEvents();
						_this2.close();
					}), this._eventEmitter.addListener('websocketFailed', function (ev) {
						if (ev.id !== _this2._socketId) {
							return;
						}
						_this2.readyState = _this2.CLOSED;
						_this2.dispatchEvent(new WebSocketEvent('error', {
							message: ev.message }));

						_this2.dispatchEvent(new WebSocketEvent('close', {
							message: ev.message }));

						_this2._unregisterEvents();
						_this2.close();
					})];
				} }]);return WebSocket;
		}(EventTarget.apply(undefined, WEBSOCKET_EVENTS));WebSocket.CONNECTING = CONNECTING;WebSocket.OPEN = OPEN;WebSocket.CLOSING = CLOSING;WebSocket.CLOSED = CLOSED;

		module.exports = WebSocket;
	}, // Libraries/WebSocket/WebSocketEvent.js
	function (__inner_require__, exports, module) {
		var WebSocketEvent = function WebSocketEvent(type, eventInitDict) {
			babelHelpers.classCallCheck(this, WebSocketEvent);
			this.type = type.toString();
			babelHelpers.extends(this, eventInitDict);
		};

		module.exports = WebSocketEvent;
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
	}, // Libraries/Utilities/PerformanceLogger.js
	function (__inner_require__, exports, module) {
		var BatchedBridge = require('react-native@0.37/Libraries/BatchedBridge/BatchedBridge.js');
		var performanceNow = global.nativePerformanceNow || require('fbjs@0.8/lib/performanceNow.js');

		var timespans = {};
		var extras = {};

		var PerformanceLogger = {
			addTimespan: function addTimespan(key, lengthInMs, description) {
				if (timespans[key]) {
					return;
				}

				timespans[key] = {
					description: description,
					totalTime: lengthInMs };
			},

			startTimespan: function startTimespan(key, description) {
				if (timespans[key]) {
					return;
				}

				timespans[key] = {
					description: description,
					startTime: performanceNow() };
			},

			stopTimespan: function stopTimespan(key) {
				if (!timespans[key] || !timespans[key].startTime) {
					return;
				}
				if (timespans[key].endTime) {
					return;
				}

				timespans[key].endTime = performanceNow();
				timespans[key].totalTime = timespans[key].endTime - timespans[key].startTime;
			},

			clear: function clear() {
				timespans = {};
				extras = {};
			},

			clearExceptTimespans: function clearExceptTimespans(keys) {
				timespans = Object.keys(timespans).reduce(function (previous, key) {
					if (keys.indexOf(key) !== -1) {
						previous[key] = timespans[key];
					}
					return previous;
				}, {});
				extras = {};
			},

			getTimespans: function getTimespans() {
				return timespans;
			},

			hasTimespan: function hasTimespan(key) {
				return !!timespans[key];
			},

			logTimespans: function logTimespans() {
				for (var key in timespans) {
					if (timespans[key].totalTime) {
						console.log(key + ': ' + timespans[key].totalTime + 'ms');
					}
				}
			},

			addTimespans: function addTimespans(newTimespans, labels) {
				for (var i = 0, l = newTimespans.length; i < l; i += 2) {
					var label = labels[i / 2];
					PerformanceLogger.addTimespan(label, newTimespans[i + 1] - newTimespans[i], label);
				}
			},

			setExtra: function setExtra(key, value) {
				if (extras[key]) {
					return;
				}
				extras[key] = value;
			},

			getExtras: function getExtras() {
				return extras;
			} };

		BatchedBridge.registerCallableModule('PerformanceLogger', PerformanceLogger);

		module.exports = PerformanceLogger;
	}];
});