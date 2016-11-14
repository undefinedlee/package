loader.define("react-native@0.33/Libraries/EventEmitter/RCTNativeAppEventEmitter.js", ["react-native@0.33/Libraries/BatchedBridge/BatchedBridge.js", "react-native@0.33/Libraries/EventEmitter/RCTDeviceEventEmitter.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/EventEmitter/RCTNativeAppEventEmitter.js
	function (__inner_require__, exports, module) {
		var BatchedBridge = require('react-native@0.33/Libraries/BatchedBridge/BatchedBridge.js');
		var RCTDeviceEventEmitter = require('react-native@0.33/Libraries/EventEmitter/RCTDeviceEventEmitter.js');

		var RCTNativeAppEventEmitter = RCTDeviceEventEmitter;

		BatchedBridge.registerCallableModule('RCTNativeAppEventEmitter', RCTNativeAppEventEmitter);

		module.exports = RCTNativeAppEventEmitter;
	}];
});