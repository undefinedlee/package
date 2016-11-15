__d("react-native@0.37/Libraries/StyleSheet/processColor.js", ["react-native@0.37/Libraries/Utilities/Platform.ios.js", "react-native@0.37/Libraries/StyleSheet/normalizeColor.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/StyleSheet/processColor.js
	function (__inner_require__, exports, module) {
		var Platform = require('react-native@0.37/Libraries/Utilities/Platform.ios.js');

		var normalizeColor = require('react-native@0.37/Libraries/StyleSheet/normalizeColor.js');

		function processColor(color) {
			if (color === undefined || color === null) {
				return color;
			}

			var int32Color = normalizeColor(color);
			if (int32Color === null) {
				return undefined;
			}

			int32Color = (int32Color << 24 | int32Color >>> 8) >>> 0;

			if (Platform.OS === 'android') {

				int32Color = int32Color | 0x0;
			}
			return int32Color;
		}

		module.exports = processColor;
	}];
});