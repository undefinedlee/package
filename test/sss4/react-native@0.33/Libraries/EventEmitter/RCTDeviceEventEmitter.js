loader.define("react-native@0.33/Libraries/EventEmitter/RCTDeviceEventEmitter.js", ["react-native@0.33/Libraries/EventEmitter/EventEmitter.js", "react-native@0.33/Libraries/EventEmitter/EventSubscriptionVendor.js", "react-native@0.33/Libraries/BatchedBridge/BatchedBridge.js", "react-native@0.33/Libraries/Components/StatusBar/StatusBarIOS.ios.js", "react-native@0.33/Libraries/Components/Keyboard/Keyboard.js", "react-native@0.33/Libraries/AppState/AppState.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/EventEmitter/RCTDeviceEventEmitter.js
	function (__inner_require__, exports, module) {
		var EventEmitter = require('react-native@0.33/Libraries/EventEmitter/EventEmitter.js');
		var EventSubscriptionVendor = require('react-native@0.33/Libraries/EventEmitter/EventSubscriptionVendor.js');
		var BatchedBridge = require('react-native@0.33/Libraries/BatchedBridge/BatchedBridge.js');var RCTDeviceEventEmitter = function (_EventEmitter) {
			babelHelpers.inherits(RCTDeviceEventEmitter, _EventEmitter);

			function RCTDeviceEventEmitter() {
				babelHelpers.classCallCheck(this, RCTDeviceEventEmitter);
				var sharedSubscriber = new EventSubscriptionVendor();var _this = babelHelpers.possibleConstructorReturn(this, (RCTDeviceEventEmitter.__proto__ || Object.getPrototypeOf(RCTDeviceEventEmitter)).call(this, sharedSubscriber));
				_this.sharedSubscriber = sharedSubscriber;return _this;
			}babelHelpers.createClass(RCTDeviceEventEmitter, [{ key: '_nativeEventModule', value: function _nativeEventModule(eventType) {
					if (eventType) {
						if (eventType.lastIndexOf('statusBar', 0) === 0) {
							console.warn('`%s` event should be registered via the StatusBarIOS module', eventType);
							return require('react-native@0.33/Libraries/Components/StatusBar/StatusBarIOS.ios.js');
						}
						if (eventType.lastIndexOf('keyboard', 0) === 0) {
							console.warn('`%s` event should be registered via the Keyboard module', eventType);
							return require('react-native@0.33/Libraries/Components/Keyboard/Keyboard.js');
						}
						if (eventType === 'appStateDidChange' || eventType === 'memoryWarning') {
							console.warn('`%s` event should be registered via the AppState module', eventType);
							return require('react-native@0.33/Libraries/AppState/AppState.js');
						}
					}
					return null;
				} }, { key: 'addListener', value: function addListener(eventType, listener, context) {
					var eventModule = this._nativeEventModule(eventType);
					return eventModule ? eventModule.addListener(eventType, listener, context) : babelHelpers.get(RCTDeviceEventEmitter.prototype.__proto__ || Object.getPrototypeOf(RCTDeviceEventEmitter.prototype), 'addListener', this).call(this, eventType, listener, context);
				} }, { key: 'removeAllListeners', value: function removeAllListeners(eventType) {
					var eventModule = this._nativeEventModule(eventType);
					eventModule && eventType ? eventModule.removeAllListeners(eventType) : babelHelpers.get(RCTDeviceEventEmitter.prototype.__proto__ || Object.getPrototypeOf(RCTDeviceEventEmitter.prototype), 'removeAllListeners', this).call(this, eventType);
				} }, { key: 'removeSubscription', value: function removeSubscription(subscription) {
					if (subscription.emitter !== this) {
						subscription.emitter.removeSubscription(subscription);
					} else {
						babelHelpers.get(RCTDeviceEventEmitter.prototype.__proto__ || Object.getPrototypeOf(RCTDeviceEventEmitter.prototype), 'removeSubscription', this).call(this, subscription);
					}
				} }]);return RCTDeviceEventEmitter;
		}(EventEmitter);

		RCTDeviceEventEmitter = new RCTDeviceEventEmitter();

		BatchedBridge.registerCallableModule('RCTDeviceEventEmitter', RCTDeviceEventEmitter);

		module.exports = RCTDeviceEventEmitter;
	}];
});