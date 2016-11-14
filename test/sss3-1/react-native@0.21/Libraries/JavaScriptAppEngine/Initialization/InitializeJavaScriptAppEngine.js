loader.define("react-native@0.21/Libraries/JavaScriptAppEngine/Initialization/InitializeJavaScriptAppEngine.js", ["regenerator@0.8/runtime.js", "react-native@0.21/Libraries/Utilities/ErrorUtils.js", "react-native@0.21/Libraries/JavaScriptAppEngine/System/JSTimers/JSTimers.js", "react-native@0.21/Libraries/Utilities/Alert.js", "react-native@0.21/Libraries/Promise.js", "react-native@0.21/Libraries/vendor/core/Map.js", "react-native@0.21/Libraries/vendor/core/Set.js", "react-native@0.21/Libraries/WebSocket/WebSocket.js", "react-native@0.21/Libraries/Utilities/Systrace.js", "react-native@0.21/Libraries/Utilities/Platform.ios.js", "react-native@0.21/Libraries/Device/RCTDeviceEventEmitter.js", "react-native@0.21/Libraries/Utilities/PerformanceLogger.js", "react-transform-hmr@1/lib/index.js", "react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js", "react-native@0.21/Libraries/JavaScriptAppEngine/Initialization/SourceMapsCache.js", "react-native@0.21/Libraries/Utilities/stringifySafe.js", "stacktrace-parser@0.1/index.js", "react-native@0.21/__fbjs__/lib/invariant.js", "react-native@0.21/Libraries/Utilities/logError.js", "react-native@0.21/__fbjs__/lib/warning.js", "react-native@0.21/Libraries/StyleSheet/flattenStyle.js", "react-native@0.21/__react__/lib/ReactCurrentOwner.js", "react-native@0.21/__react__/lib/ReactInstanceHandles.js", "react-native@0.21/Libraries/ReactNative/ReactNativeMount.js", "react-native@0.21/__react__/lib/ReactReconciler.js", "react-native@0.21/Libraries/ReactNative/ReactNativeTextComponent.js", "react-native@0.21/Libraries/BatchedBridge/BatchedBridge.js", "react-native@0.21/Libraries/Inspector/InspectorUtils.js", "react-native@0.21/Libraries/ReactNative/ReactNativeTagHandles.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/JavaScriptAppEngine/Initialization/InitializeJavaScriptAppEngine.js
	function (__inner_require__, exports, module) {
		require('regenerator@0.8/runtime.js');

		if (typeof GLOBAL === 'undefined') {
			global.GLOBAL = this;
		}

		if (typeof window === 'undefined') {
			global.window = GLOBAL;
		}

		function setUpConsole() {

			var ExceptionsManager = __inner_require__(1 /*Libraries/JavaScriptAppEngine/Initialization/ExceptionsManager.js*/);
			ExceptionsManager.installConsoleErrorReporter();
		}

		function polyfillGlobal(name, newValue) {
			var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : GLOBAL;
			var descriptor = Object.getOwnPropertyDescriptor(scope, name) || {

				writable: true };

			if (scope[name] !== undefined) {
				var backupName = 'original' + name[0].toUpperCase() + name.substr(1);
				Object.defineProperty(scope, backupName, babelHelpers.extends({}, descriptor, { value: scope[name] }));
			}

			Object.defineProperty(scope, name, babelHelpers.extends({}, descriptor, { value: newValue }));
		}

		function polyfillIfNeeded(name, polyfill) {
			var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : GLOBAL;var descriptor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
			if (scope[name] === undefined) {
				Object.defineProperty(scope, name, babelHelpers.extends({}, descriptor, { value: polyfill }));
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
				}
			}

			var ErrorUtils = require('react-native@0.21/Libraries/Utilities/ErrorUtils.js');
			ErrorUtils.setGlobalHandler(handleError);
		}

		function setUpTimers() {
			var JSTimers = require('react-native@0.21/Libraries/JavaScriptAppEngine/System/JSTimers/JSTimers.js');
			GLOBAL.setTimeout = JSTimers.setTimeout;
			GLOBAL.setInterval = JSTimers.setInterval;
			GLOBAL.setImmediate = JSTimers.setImmediate;
			GLOBAL.clearTimeout = JSTimers.clearTimeout;
			GLOBAL.clearInterval = JSTimers.clearInterval;
			GLOBAL.clearImmediate = JSTimers.clearImmediate;
			GLOBAL.cancelAnimationFrame = JSTimers.clearInterval;
			GLOBAL.requestAnimationFrame = function (cb) {

				return JSTimers.requestAnimationFrame(cb);
			};
		}

		function setUpAlert() {
			if (!GLOBAL.alert) {
				GLOBAL.alert = function (text) {

					require('react-native@0.21/Libraries/Utilities/Alert.js').alert('Alert', '' + text);
				};
			}
		}

		function setUpPromise() {

			GLOBAL.Promise = require('react-native@0.21/Libraries/Promise.js');
		}

		function setUpXHR() {

			polyfillGlobal('XMLHttpRequest', __inner_require__(3 /*Libraries/Network/XMLHttpRequest.ios.js*/));
			polyfillGlobal('FormData', __inner_require__(4 /*Libraries/Network/FormData.js*/));

			var fetchPolyfill = __inner_require__(7 /*Libraries/Fetch/fetch.js*/);
			polyfillGlobal('fetch', fetchPolyfill.fetch);
			polyfillGlobal('Headers', fetchPolyfill.Headers);
			polyfillGlobal('Request', fetchPolyfill.Request);
			polyfillGlobal('Response', fetchPolyfill.Response);
		}

		function setUpGeolocation() {
			polyfillIfNeeded('navigator', {}, GLOBAL, {
				writable: true,
				enumerable: true,
				configurable: true });

			polyfillGlobal('geolocation', __inner_require__(8 /*Libraries/Geolocation/Geolocation.js*/), GLOBAL.navigator);
		}

		function setUpMapAndSet() {
			polyfillGlobal('Map', require('react-native@0.21/Libraries/vendor/core/Map.js'));
			polyfillGlobal('Set', require('react-native@0.21/Libraries/vendor/core/Set.js'));
		}

		function setUpProduct() {
			Object.defineProperty(GLOBAL.navigator, 'product', { value: 'ReactNative' });
		}

		function setUpWebSockets() {
			polyfillGlobal('WebSocket', require('react-native@0.21/Libraries/WebSocket/WebSocket.js'));
		}

		function setUpProfile() {
			if (__DEV__) {
				var Systrace = require('react-native@0.21/Libraries/Utilities/Systrace.js');
				Systrace.swizzleReactPerf();
			}
		}

		function setUpProcessEnv() {
			GLOBAL.process = GLOBAL.process || {};
			GLOBAL.process.env = GLOBAL.process.env || {};
			if (!GLOBAL.process.env.NODE_ENV) {
				GLOBAL.process.env.NODE_ENV = __DEV__ ? 'development' : 'production';
			}
		}

		function setUpNumber() {
			polyfillIfNeeded('EPSILON', Math.pow(2, -52), Number);
			polyfillIfNeeded('MAX_SAFE_INTEGER', Math.pow(2, 53) - 1, Number);
			polyfillIfNeeded('MIN_SAFE_INTEGER', -(Math.pow(2, 53) - 1), Number);
		}

		function setUpDevTools() {

			if (__DEV__) {
				if (!window.document && require('react-native@0.21/Libraries/Utilities/Platform.ios.js').OS === 'ios') {
					var setupDevtools = __inner_require__(9 /*Libraries/Devtools/setupDevtools.js*/);
					setupDevtools();
				}
			}
		}

		setUpProcessEnv();
		setUpConsole();
		setUpTimers();
		setUpAlert();
		setUpPromise();
		setUpErrorHandler();
		setUpXHR();
		setUpGeolocation();
		setUpMapAndSet();
		setUpProduct();
		setUpWebSockets();
		setUpProfile();
		setUpNumber();
		setUpDevTools();

		if (__DEV__) {
			__inner_require__(10 /*Libraries/DebugComponentHierarchy/RCTDebugComponentOwnership.js*/);
		}
		require('react-native@0.21/Libraries/Device/RCTDeviceEventEmitter.js');
		require('react-native@0.21/Libraries/Utilities/PerformanceLogger.js');

		if (__DEV__) {

			require('react-transform-hmr@1/lib/index.js');
		}
	}, // Libraries/JavaScriptAppEngine/Initialization/ExceptionsManager.js
	function (__inner_require__, exports, module) {
		var exceptionID = 0;

		function reportException(e, isFatal) {
			var parseErrorStack = __inner_require__(2 /*Libraries/JavaScriptAppEngine/Initialization/parseErrorStack.js*/);
			var RCTExceptionsManager = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').ExceptionsManager;

			var currentExceptionID = ++exceptionID;
			if (RCTExceptionsManager) {
				var stack = parseErrorStack(e);
				if (isFatal) {
					RCTExceptionsManager.reportFatalException(e.message, stack, currentExceptionID);
				} else {
					RCTExceptionsManager.reportSoftException(e.message, stack, currentExceptionID);
				}
				if (__DEV__) {
					require('react-native@0.21/Libraries/JavaScriptAppEngine/Initialization/SourceMapsCache.js').getSourceMaps().then(function (sourceMaps) {
						var prettyStack = parseErrorStack(e, sourceMaps);
						RCTExceptionsManager.updateExceptionMessage(e.message, prettyStack, currentExceptionID);
					}).catch(function (error) {

						console.warn('Unable to load source map: ' + error.message);
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
					var stringifySafe = require('react-native@0.21/Libraries/Utilities/stringifySafe.js');
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
	}, // Libraries/JavaScriptAppEngine/Initialization/parseErrorStack.js
	function (__inner_require__, exports, module) {
		var stacktraceParser = require('stacktrace-parser@0.1/index.js');

		function resolveSourceMaps(sourceMapInstance, stackFrame) {
			try {
				var orig = sourceMapInstance.originalPositionFor({
					line: stackFrame.lineNumber,
					column: stackFrame.column });

				if (orig) {

					var queryStringStartIndex = orig.source.indexOf('?');
					stackFrame.file = queryStringStartIndex === -1 ? orig.source : orig.source.substring(0, queryStringStartIndex);
					stackFrame.lineNumber = orig.line;
					stackFrame.column = orig.column;
				}
			} catch (innerEx) {}
		}

		function parseErrorStack(e, sourceMaps) {
			if (!e || !e.stack) {
				return [];
			}

			var stack = Array.isArray(e.stack) ? e.stack : stacktraceParser.parse(e.stack);

			var framesToPop = e.framesToPop || 0;
			while (framesToPop--) {
				stack.shift();
			}

			if (sourceMaps) {
				sourceMaps.forEach(function (sourceMap, index) {
					stack.forEach(function (frame) {
						if (frame.file.indexOf(sourceMap.file) !== -1 || frame.file.replace('.map', '.bundle').indexOf(sourceMap.file) !== -1) {
							resolveSourceMaps(sourceMap, frame);
						}
					});
				});
			}

			return stack;
		}

		module.exports = parseErrorStack;
	}, // Libraries/Network/XMLHttpRequest.ios.js
	function (__inner_require__, exports, module) {
		var FormData = __inner_require__(4 /*Libraries/Network/FormData.js*/);
		var RCTNetworking = __inner_require__(5 /*Libraries/Network/RCTNetworking.ios.js*/);

		var XMLHttpRequestBase = __inner_require__(6 /*Libraries/Network/XMLHttpRequestBase.js*/);var XMLHttpRequest = function (_XMLHttpRequestBase) {
			babelHelpers.inherits(XMLHttpRequest, _XMLHttpRequestBase);
			function XMLHttpRequest() {
				babelHelpers.classCallCheck(this, XMLHttpRequest);var _this = babelHelpers.possibleConstructorReturn(this, (XMLHttpRequest.__proto__ || Object.getPrototypeOf(XMLHttpRequest)).call(this));

				_this.upload = {};return _this;
			}babelHelpers.createClass(XMLHttpRequest, [{ key: 'sendImpl', value: function sendImpl(method, url, headers, data, timeout) {
					if (typeof data === 'string') {
						data = { string: data };
					} else if (data instanceof FormData) {
						data = { formData: data.getParts() };
					}
					RCTNetworking.sendRequest({
						method: method,
						url: url,
						data: data,
						headers: headers,
						incrementalUpdates: this.onreadystatechange ? true : false,
						timeout: timeout }, this.didCreateRequest.bind(this));
				} }]);return XMLHttpRequest;
		}(XMLHttpRequestBase);

		module.exports = XMLHttpRequest;
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

						if (typeof value !== 'object') {
							value = '' + value;
						}

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
	}, // Libraries/Network/RCTNetworking.ios.js
	function (__inner_require__, exports, module) {
		var RCTNetworkingNative = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').Networking;var RCTNetworking = function () {
			function RCTNetworking() {
				babelHelpers.classCallCheck(this, RCTNetworking);
			}babelHelpers.createClass(RCTNetworking, null, [{ key: 'sendRequest', value: function sendRequest(query, callback) {
					RCTNetworkingNative.sendRequest(query, callback);
				} }, { key: 'abortRequest', value: function abortRequest(requestId) {
					RCTNetworkingNative.cancelRequest(requestId);
				} }]);return RCTNetworking;
		}();

		module.exports = RCTNetworking;
	}, // Libraries/Network/XMLHttpRequestBase.js
	function (__inner_require__, exports, module) {
		var RCTNetworking = __inner_require__(5 /*Libraries/Network/RCTNetworking.ios.js*/);
		var RCTDeviceEventEmitter = require('react-native@0.21/Libraries/Device/RCTDeviceEventEmitter.js');var XMLHttpRequestBase = function () {

			function XMLHttpRequestBase() {
				babelHelpers.classCallCheck(this, XMLHttpRequestBase);
				this.UNSENT = 0;
				this.OPENED = 1;
				this.HEADERS_RECEIVED = 2;
				this.LOADING = 3;
				this.DONE = 4;

				this.onreadystatechange = null;
				this.onload = null;
				this.upload = undefined;
				this.timeout = 0;

				this._reset();
				this._method = null;
				this._url = null;
				this._aborted = false;
			}babelHelpers.createClass(XMLHttpRequestBase, [{ key: '_reset', value: function _reset() {
					this.readyState = this.UNSENT;
					this.responseHeaders = undefined;
					this.responseText = '';
					this.status = 0;
					delete this.responseURL;

					this._requestId = null;

					this._headers = {};
					this._sent = false;
					this._lowerCaseResponseHeaders = {};

					this._clearSubscriptions();
				} }, { key: 'didCreateRequest', value: function didCreateRequest(requestId) {
					var _this = this;
					this._requestId = requestId;
					this._subscriptions.push(RCTDeviceEventEmitter.addListener('didSendNetworkData', function (args) {
						var _didUploadProgress2;return (_didUploadProgress2 = _this._didUploadProgress).call.apply(_didUploadProgress2, [_this].concat(babelHelpers.toConsumableArray(args)));
					}));

					this._subscriptions.push(RCTDeviceEventEmitter.addListener('didReceiveNetworkResponse', function (args) {
						var _didReceiveResponse2;return (_didReceiveResponse2 = _this._didReceiveResponse).call.apply(_didReceiveResponse2, [_this].concat(babelHelpers.toConsumableArray(args)));
					}));

					this._subscriptions.push(RCTDeviceEventEmitter.addListener('didReceiveNetworkData', function (args) {
						var _didReceiveData2;return (_didReceiveData2 = _this._didReceiveData).call.apply(_didReceiveData2, [_this].concat(babelHelpers.toConsumableArray(args)));
					}));

					this._subscriptions.push(RCTDeviceEventEmitter.addListener('didCompleteNetworkResponse', function (args) {
						var _didCompleteResponse2;return (_didCompleteResponse2 = _this._didCompleteResponse).call.apply(_didCompleteResponse2, [_this].concat(babelHelpers.toConsumableArray(args)));
					}));
				} }, { key: '_didUploadProgress', value: function _didUploadProgress(requestId, progress, total) {
					if (requestId === this._requestId && this.upload && this.upload.onprogress) {
						var event = {
							lengthComputable: true,
							loaded: progress,
							total: total };

						this.upload.onprogress(event);
					}
				} }, { key: '_didReceiveResponse', value: function _didReceiveResponse(requestId, status, responseHeaders, responseURL) {
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
				} }, { key: '_didReceiveData', value: function _didReceiveData(requestId, responseText) {
					if (requestId === this._requestId) {
						if (!this.responseText) {
							this.responseText = responseText;
						} else {
							this.responseText += responseText;
						}
						this.setReadyState(this.LOADING);
					}
				} }, { key: '_didCompleteResponse', value: function _didCompleteResponse(requestId, error) {
					if (requestId === this._requestId) {
						if (error) {
							this.responseText = error;
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
					}).join('\n');
				} }, { key: 'getResponseHeader', value: function getResponseHeader(header) {
					var value = this._lowerCaseResponseHeaders[header.toLowerCase()];
					return value !== undefined ? value : null;
				} }, { key: 'setRequestHeader', value: function setRequestHeader(header, value) {
					if (this.readyState !== this.OPENED) {
						throw new Error('Request has not been opened');
					}
					this._headers[header.toLowerCase()] = value;
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
					this._reset();
					this._method = method;
					this._url = url;
					this._aborted = false;
					this.setReadyState(this.OPENED);
				} }, { key: 'sendImpl', value: function sendImpl(method, url, headers, data, timeout) {
					throw new Error('Subclass must define sendImpl method');
				} }, { key: 'send', value: function send(data) {
					if (this.readyState !== this.OPENED) {
						throw new Error('Request has not been opened');
					}
					if (this._sent) {
						throw new Error('Request has already been sent');
					}
					this._sent = true;
					this.sendImpl(this._method, this._url, this._headers, data, this.timeout);
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

					var onreadystatechange = this.onreadystatechange;
					if (onreadystatechange) {

						onreadystatechange.call(this, null);
					}
					if (newState === this.DONE && !this._aborted) {
						this._sendLoad();
					}
				} }, { key: '_sendLoad', value: function _sendLoad() {

					var onload = this.onload;
					if (onload) {

						onload(null);
					}
				} }]);return XMLHttpRequestBase;
		}();

		module.exports = XMLHttpRequestBase;
	}, // Libraries/Fetch/fetch.js
	function (__inner_require__, exports, module) {
		var self = {};

		/**
                  * Copyright (c) 2014 GitHub, Inc.
                  *
                  * Permission is hereby granted, free of charge, to any person obtaining
                  * a copy of this software and associated documentation files (the
                  * "Software"), to deal in the Software without restriction, including
                  * without limitation the rights to use, copy, modify, merge, publish,
                  * distribute, sublicense, and/or sell copies of the Software, and to
                  * permit persons to whom the Software is furnished to do so, subject to
                  * the following conditions:
                  *
                  * The above copyright notice and this permission notice shall be
                  * included in all copies or substantial portions of the Software.
                  *
                  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
                  * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
                  * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                  * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
                  * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
                  * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
                  * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                  *
                  * @preserve-header
                  */
		(function () {

			if (self.fetch) {
				return;
			}

			function normalizeName(name) {
				if (typeof name !== 'string') {
					name = String(name);
				}
				if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
					throw new TypeError('Invalid character in header field name');
				}
				return name.toLowerCase();
			}

			function normalizeValue(value) {
				if (typeof value !== 'string') {
					value = String(value);
				}
				return value;
			}

			function Headers(headers) {
				this.map = {};

				if (headers instanceof Headers) {
					headers.forEach(function (value, name) {
						this.append(name, value);
					}, this);
				} else if (headers) {
					Object.getOwnPropertyNames(headers).forEach(function (name) {
						this.append(name, headers[name]);
					}, this);
				}
			}

			Headers.prototype.append = function (name, value) {
				name = normalizeName(name);
				value = normalizeValue(value);
				var list = this.map[name];
				if (!list) {
					list = [];
					this.map[name] = list;
				}
				list.push(value);
			};

			Headers.prototype['delete'] = function (name) {
				delete this.map[normalizeName(name)];
			};

			Headers.prototype.get = function (name) {
				var values = this.map[normalizeName(name)];
				return values ? values[0] : null;
			};

			Headers.prototype.getAll = function (name) {
				return this.map[normalizeName(name)] || [];
			};

			Headers.prototype.has = function (name) {
				return this.map.hasOwnProperty(normalizeName(name));
			};

			Headers.prototype.set = function (name, value) {
				this.map[normalizeName(name)] = [normalizeValue(value)];
			};

			Headers.prototype.forEach = function (callback, thisArg) {
				Object.getOwnPropertyNames(this.map).forEach(function (name) {
					this.map[name].forEach(function (value) {
						callback.call(thisArg, value, name, this);
					}, this);
				}, this);
			};

			function consumed(body) {
				if (body.bodyUsed) {
					return Promise.reject(new TypeError('Already read'));
				}
				body.bodyUsed = true;
			}

			function fileReaderReady(reader) {
				return new Promise(function (resolve, reject) {
					reader.onload = function () {
						resolve(reader.result);
					};
					reader.onerror = function () {
						reject(reader.error);
					};
				});
			}

			function readBlobAsArrayBuffer(blob) {
				var reader = new FileReader();
				reader.readAsArrayBuffer(blob);
				return fileReaderReady(reader);
			}

			function readBlobAsText(blob) {
				var reader = new FileReader();
				reader.readAsText(blob);
				return fileReaderReady(reader);
			}

			var support = {
				blob: typeof FileReader === 'function' && typeof Blob === 'function' && function () {
					try {
						new Blob();
						return true;
					} catch (e) {
						return false;
					}
				}(),
				formData: typeof FormData === 'function' };

			function Body() {
				this.bodyUsed = false;

				this._initBody = function (body) {
					this._bodyInit = body;
					if (typeof body === 'string') {
						this._bodyText = body;
					} else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
						this._bodyBlob = body;
					} else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
						this._bodyFormData = body;
					} else if (!body) {
						this._bodyText = '';
					} else {
						throw new Error('unsupported BodyInit type');
					}
				};

				if (support.blob) {
					this.blob = function () {
						var rejected = consumed(this);
						if (rejected) {
							return rejected;
						}

						if (this._bodyBlob) {
							return Promise.resolve(this._bodyBlob);
						} else if (this._bodyFormData) {
							throw new Error('could not read FormData body as blob');
						} else {
							return Promise.resolve(new Blob([this._bodyText]));
						}
					};

					this.arrayBuffer = function () {
						return this.blob().then(readBlobAsArrayBuffer);
					};

					this.text = function () {
						var rejected = consumed(this);
						if (rejected) {
							return rejected;
						}

						if (this._bodyBlob) {
							return readBlobAsText(this._bodyBlob);
						} else if (this._bodyFormData) {
							throw new Error('could not read FormData body as text');
						} else {
							return Promise.resolve(this._bodyText);
						}
					};
				} else {
					this.text = function () {
						var rejected = consumed(this);
						return rejected ? rejected : Promise.resolve(this._bodyText);
					};
				}

				if (support.formData) {
					this.formData = function () {
						return this.text().then(decode);
					};
				}

				this.json = function () {
					return this.text().then(JSON.parse);
				};

				return this;
			}

			var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

			function normalizeMethod(method) {
				var upcased = method.toUpperCase();
				return methods.indexOf(upcased) > -1 ? upcased : method;
			}

			function Request(input, options) {
				options = options || {};
				var body = options.body;
				if (Request.prototype.isPrototypeOf(input)) {
					if (input.bodyUsed) {
						throw new TypeError('Already read');
					}
					this.url = input.url;
					this.credentials = input.credentials;
					if (!options.headers) {
						this.headers = new Headers(input.headers);
					}
					this.method = input.method;
					this.mode = input.mode;
					if (!body) {
						body = input._bodyInit;
						input.bodyUsed = true;
					}
				} else {
					this.url = input;
				}

				this.credentials = options.credentials || this.credentials || 'omit';
				if (options.headers || !this.headers) {
					this.headers = new Headers(options.headers);
				}
				this.method = normalizeMethod(options.method || this.method || 'GET');
				this.mode = options.mode || this.mode || null;
				this.referrer = null;

				if ((this.method === 'GET' || this.method === 'HEAD') && body) {
					throw new TypeError('Body not allowed for GET or HEAD requests');
				}
				this._initBody(body);
			}

			Request.prototype.clone = function () {
				return new Request(this);
			};

			function decode(body) {
				var form = new FormData();
				body.trim().split('&').forEach(function (bytes) {
					if (bytes) {
						var split = bytes.split('=');
						var name = split.shift().replace(/\+/g, ' ');
						var value = split.join('=').replace(/\+/g, ' ');
						form.append(decodeURIComponent(name), decodeURIComponent(value));
					}
				});
				return form;
			}

			function headers(xhr) {
				var head = new Headers();
				var pairs = xhr.getAllResponseHeaders().trim().split('\n');
				pairs.forEach(function (header) {
					var split = header.trim().split(':');
					var key = split.shift().trim();
					var value = split.join(':').trim();
					head.append(key, value);
				});
				return head;
			}

			Body.call(Request.prototype);

			function Response(bodyInit, options) {
				if (!options) {
					options = {};
				}

				this._initBody(bodyInit);
				this.type = 'default';
				this.url = null;
				this.status = options.status;
				this.ok = this.status >= 200 && this.status < 300;
				this.statusText = options.statusText;
				this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
				this.url = options.url || '';
			}

			Response.prototype.clone = function () {
				return new Response(this._bodyInit, {
					status: this.status,
					statusText: this.statusText,
					headers: new Headers(this.headers),
					url: this.url });
			};

			Body.call(Response.prototype);

			self.Headers = Headers;
			self.Request = Request;
			self.Response = Response;

			self.fetch = function (input, init) {
				var request;
				if (Request.prototype.isPrototypeOf(input) && !init) {
					request = input;
				} else {
					request = new Request(input, init);
				}

				return new Promise(function (resolve, reject) {
					var xhr = new XMLHttpRequest();

					function responseURL() {
						if ('responseURL' in xhr) {
							return xhr.responseURL;
						}

						if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
							return xhr.getResponseHeader('X-Request-URL');
						}

						return;
					}

					xhr.onload = function () {
						var status = xhr.status === 1223 ? 204 : xhr.status;
						if (status < 100 || status > 599) {
							reject(new TypeError('Network request failed'));
							return;
						}
						var options = {
							status: status,
							statusText: xhr.statusText,
							headers: headers(xhr),
							url: responseURL() };

						var body = 'response' in xhr ? xhr.response : xhr.responseText;
						resolve(new Response(body, options));
					};

					xhr.onerror = function () {
						reject(new TypeError('Network request failed'));
					};

					xhr.open(request.method, request.url, true);

					if (request.credentials === 'include') {
						xhr.withCredentials = true;
					}

					if ('responseType' in xhr && support.blob) {
						xhr.responseType = 'blob';
					}

					request.headers.forEach(function (value, name) {
						xhr.setRequestHeader(name, value);
					});

					xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
				});
			};
			self.fetch.polyfill = true;
		})();

		module.exports = self;
	}, // Libraries/Geolocation/Geolocation.js
	function (__inner_require__, exports, module) {
		var RCTDeviceEventEmitter = require('react-native@0.21/Libraries/Device/RCTDeviceEventEmitter.js');
		var RCTLocationObserver = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').LocationObserver;

		var invariant = require('react-native@0.21/__fbjs__/lib/invariant.js');
		var logError = require('react-native@0.21/Libraries/Utilities/logError.js');
		var warning = require('react-native@0.21/__fbjs__/lib/warning.js');

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
				subscriptions.push([RCTDeviceEventEmitter.addListener('geolocationDidChange', success), error ? RCTDeviceEventEmitter.addListener('geolocationError', error) : null]);

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
		function setupDevtools() {
			var messageListeners = [];
			var closeListeners = [];
			var ws = new window.WebSocket('ws://localhost:8097/devtools');

			var FOR_BACKEND = {
				resolveRNStyle: require('react-native@0.21/Libraries/StyleSheet/flattenStyle.js'),
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

			ws.onclose = function () {
				setTimeout(setupDevtools, 200);
				closeListeners.forEach(function (fn) {
					return fn();
				});
			};
			ws.onerror = function (error) {
				setTimeout(setupDevtools, 200);
				closeListeners.forEach(function (fn) {
					return fn();
				});
			};
			ws.onopen = function () {
				tryToConnect();
			};

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
				window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
					CurrentOwner: require('react-native@0.21/__react__/lib/ReactCurrentOwner.js'),
					InstanceHandles: require('react-native@0.21/__react__/lib/ReactInstanceHandles.js'),
					Mount: require('react-native@0.21/Libraries/ReactNative/ReactNativeMount.js'),
					Reconciler: require('react-native@0.21/__react__/lib/ReactReconciler.js'),
					TextComponent: require('react-native@0.21/Libraries/ReactNative/ReactNativeTextComponent.js') });

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
		var BatchedBridge = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridge.js');
		var DebugComponentOwnershipModule = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').DebugComponentOwnershipModule;
		var InspectorUtils = require('react-native@0.21/Libraries/Inspector/InspectorUtils.js');
		var ReactNativeTagHandles = require('react-native@0.21/Libraries/ReactNative/ReactNativeTagHandles.js');

		function componentToString(component) {
			return component.getName ? component.getName() : 'Unknown';
		}

		function getRootTagForTag(tag) {
			var rootNodeID = ReactNativeTagHandles.tagToRootNodeID[tag];
			if (!rootNodeID) {
				return null;
			}
			var rootID = ReactNativeTagHandles.getNativeTopRootIDFromNodeID(rootNodeID);
			if (!rootID) {
				return null;
			}
			return ReactNativeTagHandles.rootNodeIDToTag[rootID];
		}

		var RCTDebugComponentOwnership = {

			getOwnerHierarchy: function getOwnerHierarchy(requestID, tag) {
				var rootTag = getRootTagForTag(tag);
				var instance = InspectorUtils.findInstanceByNativeTag(rootTag, tag);
				var ownerHierarchy = instance ? InspectorUtils.getOwnerHierarchy(instance).map(componentToString) : null;
				DebugComponentOwnershipModule.receiveOwnershipHierarchy(requestID, tag, ownerHierarchy);
			} };

		BatchedBridge.registerCallableModule('RCTDebugComponentOwnership', RCTDebugComponentOwnership);

		module.exports = RCTDebugComponentOwnership;
	}];
});