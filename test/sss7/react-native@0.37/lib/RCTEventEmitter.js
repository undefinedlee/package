loader.define("react-native@0.37/lib/RCTEventEmitter.js", ["react-native@0.37/Libraries/BatchedBridge/BatchedBridge.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// lib/RCTEventEmitter.js
	function (__inner_require__, exports, module) {
		module.exports = __inner_require__(1 /*Libraries/EventEmitter/RCTEventEmitter.js*/);
	}, // Libraries/EventEmitter/RCTEventEmitter.js
	function (__inner_require__, exports, module) {
		var BatchedBridge = require('react-native@0.37/Libraries/BatchedBridge/BatchedBridge.js');

		var RCTEventEmitter = {
			register: function register(eventEmitter) {
				BatchedBridge.registerCallableModule('RCTEventEmitter', eventEmitter);
			} };

		module.exports = RCTEventEmitter;
	}];
});