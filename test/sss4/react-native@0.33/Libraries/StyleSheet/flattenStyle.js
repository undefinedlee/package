loader.define("react-native@0.33/Libraries/StyleSheet/flattenStyle.js", ["react-native@0.33/__react__/lib/ReactNativePropRegistry.js", "react-native@0.33/__fbjs__/lib/invariant.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/StyleSheet/flattenStyle.js
	function (__inner_require__, exports, module) {
		var ReactNativePropRegistry = require('react-native@0.33/__react__/lib/ReactNativePropRegistry.js');
		var invariant = require('react-native@0.33/__fbjs__/lib/invariant.js');

		function getStyle(style) {
			if (typeof style === 'number') {
				return ReactNativePropRegistry.getByID(style);
			}
			return style;
		}

		function flattenStyle(style) {
			if (!style) {
				return undefined;
			}
			invariant(style !== true, 'style may be false but not true');

			if (!Array.isArray(style)) {
				return getStyle(style);
			}

			var result = {};
			for (var i = 0, styleLength = style.length; i < styleLength; ++i) {
				var computedStyle = flattenStyle(style[i]);
				if (computedStyle) {
					for (var key in computedStyle) {
						result[key] = computedStyle[key];
					}
				}
			}
			return result;
		}

		module.exports = flattenStyle;
	}];
});