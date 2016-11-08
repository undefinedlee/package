// react-native@0.21/Libraries/Device/RCTDeviceEventEmitter.js
loader.define("react-native@0.21", "Libraries/Device/RCTDeviceEventEmitter.js", "v", function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Device/RCTDeviceEventEmitter.js
	function (__inner_require__, exports, module) {
		var EventEmitter = require('react-native@0.21/Libraries/vendor/emitter/EventEmitter.js');
		var BatchedBridge = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridge.js');

		var RCTDeviceEventEmitter = new EventEmitter();

		BatchedBridge.registerCallableModule('RCTDeviceEventEmitter', RCTDeviceEventEmitter);

		module.exports = RCTDeviceEventEmitter;
	}];
});