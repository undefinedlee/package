// react-native@0.21/Libraries/Utilities/logError.js
loader.define("react-native@0.21", "Libraries/Utilities/logError.js", "", function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Utilities/logError.js
	function (__inner_require__, exports, module) {
		var logError = function logError() {
			if (arguments.length === 1 && arguments[0] instanceof Error) {
				var err = arguments[0];
				console.error('Error: "' + err.message + '".  Stack:\n' + err.stack);
			} else {
				console.error.apply(console, arguments);
			}
		};

		module.exports = logError;
	}];
});