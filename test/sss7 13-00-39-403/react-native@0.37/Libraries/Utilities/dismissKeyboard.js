loader.define("react-native@0.37/Libraries/Utilities/dismissKeyboard.js", ["react-native@0.37/Libraries/Components/TextInput/TextInputState.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Utilities/dismissKeyboard.js
	function (__inner_require__, exports, module) {
		var TextInputState = require('react-native@0.37/Libraries/Components/TextInput/TextInputState.js');

		function dismissKeyboard() {
			TextInputState.blurTextInput(TextInputState.currentlyFocusedField());
		}

		module.exports = dismissKeyboard;
	}];
});