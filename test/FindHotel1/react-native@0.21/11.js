// react-native@0.21/Libraries/StyleSheet/flattenStyle.js
loader.define("react-native@0.21", "Libraries/StyleSheet/flattenStyle.js", "11", function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/StyleSheet/flattenStyle.js
	function (__inner_require__, exports, module) {
		var StyleSheetRegistry = require('react-native@0.21/Libraries/StyleSheet/StyleSheetRegistry.js');
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');

		function getStyle(style) {
			if (typeof style === 'number') {
				return StyleSheetRegistry.getStyleByID(style);
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
			for (var i = 0; i < style.length; ++i) {
				var computedStyle = flattenStyle(style[i]);
				if (computedStyle) {
					for (var key in computedStyle) {
						result[key] = computedStyle[key];

						if (__DEV__) {
							var value = computedStyle[key];
						}
					}
				}
			}
			return result;
		}

		module.exports = flattenStyle;
	}];
});