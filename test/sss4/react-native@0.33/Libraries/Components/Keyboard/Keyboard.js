loader.define("react-native@0.33/Libraries/Components/Keyboard/Keyboard.js", ["react-native@0.33/Libraries/EventEmitter/NativeEventEmitter.js", "react-native@0.33/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Components/Keyboard/Keyboard.js
	function (__inner_require__, exports, module) {
		var NativeEventEmitter = require('react-native@0.33/Libraries/EventEmitter/NativeEventEmitter.js');
		var KeyboardObserver = require('react-native@0.33/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').KeyboardObserver;

		module.exports = new NativeEventEmitter(KeyboardObserver);
	}];
});