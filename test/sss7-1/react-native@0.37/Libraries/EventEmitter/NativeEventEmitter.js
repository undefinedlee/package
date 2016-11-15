__d("react-native@0.37/Libraries/EventEmitter/NativeEventEmitter.js", ["react-native@0.37/Libraries/EventEmitter/EventEmitter.js", "react-native@0.37/Libraries/Utilities/Platform.ios.js", "react-native@0.37/Libraries/EventEmitter/RCTDeviceEventEmitter.js", "fbjs@0.8/lib/invariant.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/EventEmitter/NativeEventEmitter.js
	function (__inner_require__, exports, module) {
		var EventEmitter = require('react-native@0.37/Libraries/EventEmitter/EventEmitter.js');
		var Platform = require('react-native@0.37/Libraries/Utilities/Platform.ios.js');
		var RCTDeviceEventEmitter = require('react-native@0.37/Libraries/EventEmitter/RCTDeviceEventEmitter.js');
		var invariant = require('fbjs@0.8/lib/invariant.js');var NativeEventEmitter = function (_EventEmitter) {
			babelHelpers.inherits(NativeEventEmitter, _EventEmitter);

			function NativeEventEmitter(nativeModule) {
				babelHelpers.classCallCheck(this, NativeEventEmitter);var _this = babelHelpers.possibleConstructorReturn(this, (NativeEventEmitter.__proto__ || Object.getPrototypeOf(NativeEventEmitter)).call(this, RCTDeviceEventEmitter.sharedSubscriber));
				if (Platform.OS === 'ios') {
					invariant(nativeModule, 'Native module cannot be null.');
					_this._nativeModule = nativeModule;
				}return _this;
			}babelHelpers.createClass(NativeEventEmitter, [{ key: 'addListener', value: function addListener(eventType, listener, context) {
					if (Platform.OS === 'ios') {
						this._nativeModule.addListener(eventType);
					}
					return babelHelpers.get(NativeEventEmitter.prototype.__proto__ || Object.getPrototypeOf(NativeEventEmitter.prototype), 'addListener', this).call(this, eventType, listener, context);
				} }, { key: 'removeAllListeners', value: function removeAllListeners(eventType) {
					invariant(eventType, 'eventType argument is required.');
					if (Platform.OS === 'ios') {
						var count = this.listeners(eventType).length;
						this._nativeModule.removeListeners(count);
					}
					babelHelpers.get(NativeEventEmitter.prototype.__proto__ || Object.getPrototypeOf(NativeEventEmitter.prototype), 'removeAllListeners', this).call(this, eventType);
				} }, { key: 'removeSubscription', value: function removeSubscription(subscription) {
					if (Platform.OS === 'ios') {
						this._nativeModule.removeListeners(1);
					}
					babelHelpers.get(NativeEventEmitter.prototype.__proto__ || Object.getPrototypeOf(NativeEventEmitter.prototype), 'removeSubscription', this).call(this, subscription);
				} }]);return NativeEventEmitter;
		}(EventEmitter);

		module.exports = NativeEventEmitter;
	}];
});