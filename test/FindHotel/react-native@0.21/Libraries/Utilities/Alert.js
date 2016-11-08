// react-native@0.21/Libraries/Utilities/Alert.js
loader.define("react-native@0.21", "Libraries/Utilities/Alert.js", "", function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Utilities/Alert.js
	function (__inner_require__, exports, module) {
		var AlertIOS = require('react-native@0.21/Libraries/Utilities/AlertIOS.js');
		var Platform = require('react-native@0.21/Libraries/Utilities/Platform.ios.js');
		var DialogModuleAndroid = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').DialogManagerAndroid;var Alert = function () {
			function Alert() {
				babelHelpers.classCallCheck(this, Alert);
			}babelHelpers.createClass(Alert, null, [{ key: 'alert', value: function alert(title, message, buttons, type) {
					if (Platform.OS === 'ios') {
						if (typeof type !== 'undefined') {
							console.warn('Alert.alert() with a 4th "type" parameter is deprecated and will be removed. Use AlertIOS.prompt() instead.');
							AlertIOS.alert(title, message, buttons, type);
							return;
						}
						AlertIOS.alert(title, message, buttons);
					} else if (Platform.OS === 'android') {
						AlertAndroid.alert(title, message, buttons);
					}
				} }]);return Alert;
		}();var AlertAndroid = function () {
			function AlertAndroid() {
				babelHelpers.classCallCheck(this, AlertAndroid);
			}babelHelpers.createClass(AlertAndroid, null, [{ key: 'alert', value: function alert(title, message, buttons) {
					var config = {
						title: title || '',
						message: message || '' };

					var validButtons = buttons ? buttons.slice(0, 3) : [{ text: 'OK' }];
					var buttonPositive = validButtons.pop();
					var buttonNegative = validButtons.pop();
					var buttonNeutral = validButtons.pop();
					if (buttonNeutral) {
						config = babelHelpers.extends({}, config, { buttonNeutral: buttonNeutral.text || '' });
					}
					if (buttonNegative) {
						config = babelHelpers.extends({}, config, { buttonNegative: buttonNegative.text || '' });
					}
					if (buttonPositive) {
						config = babelHelpers.extends({}, config, { buttonPositive: buttonPositive.text || '' });
					}
					DialogModuleAndroid.showAlert(config, function (errorMessage) {
						return console.warn(message);
					}, function (action, buttonKey) {
						if (action !== DialogModuleAndroid.buttonClicked) {
							return;
						}
						if (buttonKey === DialogModuleAndroid.buttonNeutral) {
							buttonNeutral.onPress && buttonNeutral.onPress();
						} else if (buttonKey === DialogModuleAndroid.buttonNegative) {
							buttonNegative.onPress && buttonNegative.onPress();
						} else if (buttonKey === DialogModuleAndroid.buttonPositive) {
							buttonPositive.onPress && buttonPositive.onPress();
						}
					});
				} }]);return AlertAndroid;
		}();

		module.exports = Alert;
	}];
});