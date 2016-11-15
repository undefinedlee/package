__d("react-native@0.37/Libraries/Components/TextInput/TextInputState.js", ["react-native@0.37/Libraries/Utilities/Platform.ios.js", "react-native@0.37/Libraries/ReactNative/UIManager.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Components/TextInput/TextInputState.js
	function (__inner_require__, exports, module) {
		var Platform = require('react-native@0.37/Libraries/Utilities/Platform.ios.js');
		var UIManager = require('react-native@0.37/Libraries/ReactNative/UIManager.js');

		var TextInputState = {

			_currentlyFocusedID: null,

			currentlyFocusedField: function currentlyFocusedField() {
				return this._currentlyFocusedID;
			},

			focusTextInput: function focusTextInput(textFieldID) {
				if (this._currentlyFocusedID !== textFieldID && textFieldID !== null) {
					this._currentlyFocusedID = textFieldID;
					if (Platform.OS === 'ios') {
						UIManager.focus(textFieldID);
					} else if (Platform.OS === 'android') {
						UIManager.dispatchViewManagerCommand(textFieldID, UIManager.AndroidTextInput.Commands.focusTextInput, null);
					}
				}
			},

			blurTextInput: function blurTextInput(textFieldID) {
				if (this._currentlyFocusedID === textFieldID && textFieldID !== null) {
					this._currentlyFocusedID = null;
					if (Platform.OS === 'ios') {
						UIManager.blur(textFieldID);
					} else if (Platform.OS === 'android') {
						UIManager.dispatchViewManagerCommand(textFieldID, UIManager.AndroidTextInput.Commands.blurTextInput, null);
					}
				}
			} };

		module.exports = TextInputState;
	}];
});