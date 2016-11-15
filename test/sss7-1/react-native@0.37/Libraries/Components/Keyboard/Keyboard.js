__d("react-native@0.37/Libraries/Components/Keyboard/Keyboard.js", ["fbjs@0.8/lib/invariant.js", "react-native@0.37/Libraries/EventEmitter/NativeEventEmitter.js", "react-native@0.37/Libraries/BatchedBridge/NativeModules.js", "react-native@0.37/Libraries/Utilities/dismissKeyboard.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Components/Keyboard/Keyboard.js
	function (__inner_require__, exports, module) {
		var invariant = require('fbjs@0.8/lib/invariant.js');
		var NativeEventEmitter = require('react-native@0.37/Libraries/EventEmitter/NativeEventEmitter.js');
		var KeyboardObserver = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js').KeyboardObserver;
		var dismissKeyboard = require('react-native@0.37/Libraries/Utilities/dismissKeyboard.js');
		var KeyboardEventEmitter = new NativeEventEmitter(KeyboardObserver);

		var Keyboard = {

			addListener: function addListener(eventName, callback) {
				invariant(false, 'Dummy method used for documentation');
			},

			removeListener: function removeListener(eventName, callback) {
				invariant(false, 'Dummy method used for documentation');
			},

			removeAllListeners: function removeAllListeners(eventName) {
				invariant(false, 'Dummy method used for documentation');
			},

			dismiss: function dismiss() {
				invariant(false, 'Dummy method used for documentation');
			} };

		Keyboard = KeyboardEventEmitter;
		Keyboard.dismiss = dismissKeyboard;

		module.exports = Keyboard;
	}];
});