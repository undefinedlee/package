// react-native@0.21/Libraries/WebSocket/WebSocket.js
loader.define("react-native@0.21", "Libraries/WebSocket/WebSocket.js", "1h", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// Libraries/WebSocket/WebSocket.js
		function(__inner_require__, exports, module){
			var RCTDeviceEventEmitter = require('react-native@0.21/Libraries/Device/RCTDeviceEventEmitter.js');
			var RCTWebSocketModule = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').WebSocketModule;
			
			var Platform = require('react-native@0.21/Libraries/Utilities/Platform.ios.js');
			var WebSocketBase = __inner_require__(1 /*Libraries/WebSocket/WebSocketBase.js*/);
			var WebSocketEvent = __inner_require__(2 /*Libraries/WebSocket/WebSocketEvent.js*/);
			
			var base64 = require('base64-js@0.0.8/lib/b64.js');
			
			var WebSocketId = 0;
			var CLOSE_NORMAL = 1000;var WebSocket = function (_WebSocketBase) {
			  babelHelpers.inherits(WebSocket, _WebSocketBase);function WebSocket() {
			    babelHelpers.classCallCheck(this, WebSocket);return babelHelpers.possibleConstructorReturn(this, (WebSocket.__proto__ || Object.getPrototypeOf(WebSocket)).apply(this, arguments));
			  }babelHelpers.createClass(WebSocket, [{ key: 'connectToSocketImpl', value: function connectToSocketImpl(url, protocols, options) {
			      this._socketId = WebSocketId++;
			
			      RCTWebSocketModule.connect(url, protocols, options, this._socketId);
			
			      this._registerEvents(this._socketId);
			    } }, { key: 'closeConnectionImpl', value: function closeConnectionImpl(code, reason) {
			      this._closeWebSocket(this._socketId, code, reason);
			    } }, { key: 'cancelConnectionImpl', value: function cancelConnectionImpl() {
			      this._closeWebSocket(this._socketId);
			    } }, { key: 'sendStringImpl', value: function sendStringImpl(message) {
			      RCTWebSocketModule.send(message, this._socketId);
			    } }, { key: 'sendArrayBufferImpl', value: function sendArrayBufferImpl() {
			
			      console.warn('Sending ArrayBuffers is not yet supported');
			    } }, { key: '_closeWebSocket', value: function _closeWebSocket(id, code, reason) {
			      if (Platform.OS === 'android') {
			
			        var statusCode = typeof code === 'number' ? code : CLOSE_NORMAL;
			        var closeReason = typeof reason === 'string' ? reason : '';
			        RCTWebSocketModule.close(statusCode, closeReason, id);
			      } else {
			        RCTWebSocketModule.close(id);
			      }
			    } }, { key: '_unregisterEvents', value: function _unregisterEvents() {
			      this._subs.forEach(function (e) {
			        return e.remove();
			      });
			      this._subs = [];
			    } }, { key: '_registerEvents', value: function _registerEvents(id) {
			      var _this2 = this;
			      this._subs = [RCTDeviceEventEmitter.addListener('websocketMessage', function (ev) {
			        if (ev.id !== id) {
			          return;
			        }
			        var event = new WebSocketEvent('message', {
			          data: ev.type === 'binary' ? base64.toByteArray(ev.data).buffer : ev.data });
			
			        _this2.onmessage && _this2.onmessage(event);
			        _this2.dispatchEvent(event);
			      }), RCTDeviceEventEmitter.addListener('websocketOpen', function (ev) {
			        if (ev.id !== id) {
			          return;
			        }
			        _this2.readyState = _this2.OPEN;
			        var event = new WebSocketEvent('open');
			        _this2.onopen && _this2.onopen(event);
			        _this2.dispatchEvent(event);
			      }), RCTDeviceEventEmitter.addListener('websocketClosed', function (ev) {
			        if (ev.id !== id) {
			          return;
			        }
			        _this2.readyState = _this2.CLOSED;
			        var event = new WebSocketEvent('close');
			        event.code = ev.code;
			        event.reason = ev.reason;
			        _this2.onclose && _this2.onclose(event);
			        _this2.dispatchEvent(event);
			        _this2._unregisterEvents();
			        _this2.close();
			      }), RCTDeviceEventEmitter.addListener('websocketFailed', function (ev) {
			        if (ev.id !== id) {
			          return;
			        }
			        var event = new WebSocketEvent('error');
			        event.message = ev.message;
			        _this2.onerror && _this2.onerror(event);
			        _this2.dispatchEvent(event);
			        _this2._unregisterEvents();
			        _this2.close();
			      })];
			    } }]);return WebSocket;
			}(WebSocketBase);
			
			module.exports = WebSocket;
		},
		// Libraries/WebSocket/WebSocketBase.js
		function(__inner_require__, exports, module){
			var EventTarget = require('event-target-shim@1/lib/event-target.js');var WebSocketBase = function (_EventTarget) {
			  babelHelpers.inherits(WebSocketBase, _EventTarget);
			
			  function WebSocketBase(url, protocols, options) {
			    babelHelpers.classCallCheck(this, WebSocketBase);var _this = babelHelpers.possibleConstructorReturn(this, (WebSocketBase.__proto__ || Object.getPrototypeOf(WebSocketBase)).call(this));
			
			    _this.CONNECTING = 0;
			    _this.OPEN = 1;
			    _this.CLOSING = 2;
			    _this.CLOSED = 3;
			
			    if (typeof protocols === 'string') {
			      protocols = [protocols];
			    }
			
			    if (!Array.isArray(protocols)) {
			      protocols = null;
			    }
			
			    _this.readyState = _this.CONNECTING;
			    _this.connectToSocketImpl(url, protocols, options);return _this;
			  }babelHelpers.createClass(WebSocketBase, [{ key: 'close', value: function close() {
			      if (this.readyState === this.CLOSING || this.readyState === this.CLOSED) {
			        return;
			      }
			
			      if (this.readyState === this.CONNECTING) {
			        this.cancelConnectionImpl();
			      }
			
			      this.readyState = this.CLOSING;
			      this.closeConnectionImpl();
			    } }, { key: 'send', value: function send(data) {
			      if (this.readyState === this.CONNECTING) {
			        throw new Error('INVALID_STATE_ERR');
			      }
			
			      if (typeof data === 'string') {
			        this.sendStringImpl(data);
			      } else if (data instanceof ArrayBuffer) {
			        this.sendArrayBufferImpl(data);
			      } else {
			        throw new Error('Not supported data type');
			      }
			    } }, { key: 'closeConnectionImpl', value: function closeConnectionImpl() {
			      throw new Error('Subclass must define closeConnectionImpl method');
			    } }, { key: 'connectToSocketImpl', value: function connectToSocketImpl() {
			      throw new Error('Subclass must define connectToSocketImpl method');
			    } }, { key: 'cancelConnectionImpl', value: function cancelConnectionImpl() {
			      throw new Error('Subclass must define cancelConnectionImpl method');
			    } }, { key: 'sendStringImpl', value: function sendStringImpl() {
			      throw new Error('Subclass must define sendStringImpl method');
			    } }, { key: 'sendArrayBufferImpl', value: function sendArrayBufferImpl() {
			      throw new Error('Subclass must define sendArrayBufferImpl method');
			    } }]);return WebSocketBase;
			}(EventTarget);
			
			WebSocketBase.CONNECTING = 0;
			WebSocketBase.OPEN = 1;
			WebSocketBase.CLOSING = 2;
			WebSocketBase.CLOSED = 3;
			
			module.exports = WebSocketBase;
		},
		// Libraries/WebSocket/WebSocketEvent.js
		function(__inner_require__, exports, module){
			var WebSocketEvent = function WebSocketEvent(type, eventInitDict) {
			  babelHelpers.classCallCheck(this, WebSocketEvent);
			  this.type = type.toString();
			  babelHelpers.extends(this, eventInitDict);
			};
			
			module.exports = WebSocketEvent;
		}
	];
});