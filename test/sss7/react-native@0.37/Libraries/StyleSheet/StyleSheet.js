loader.define("react-native@0.37/Libraries/StyleSheet/StyleSheet.js", ["react-native@0.37/Libraries/Utilities/PixelRatio.js", "react@15.3/lib/ReactNativePropRegistry.js", "react-native@0.37/Libraries/StyleSheet/flattenStyle.js", "react-native@0.37/Libraries/Image/ImageStylePropTypes.js", "react@15.3/lib/ReactPropTypeLocations.js", "react@15.3/lib/ReactPropTypesSecret.js", "react-native@0.37/Libraries/Text/TextStylePropTypes.js", "react-native@0.37/Libraries/Components/View/ViewStylePropTypes.js", "fbjs@0.8/lib/invariant.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/StyleSheet/StyleSheet.js
	function (__inner_require__, exports, module) {
		var PixelRatio = require('react-native@0.37/Libraries/Utilities/PixelRatio.js');
		var ReactNativePropRegistry = require('react@15.3/lib/ReactNativePropRegistry.js');
		var StyleSheetValidation = __inner_require__(1 /*Libraries/StyleSheet/StyleSheetValidation.js*/);

		var flatten = require('react-native@0.37/Libraries/StyleSheet/flattenStyle.js');

		var hairlineWidth = PixelRatio.roundToNearestPixel(0.4);
		if (hairlineWidth === 0) {
			hairlineWidth = 1 / PixelRatio.get();
		}

		var absoluteFillObject = {
			position: 'absolute',
			left: 0,
			right: 0,
			top: 0,
			bottom: 0 };

		var absoluteFill = ReactNativePropRegistry.register(absoluteFillObject);

		module.exports = {

			hairlineWidth: hairlineWidth,

			absoluteFill: absoluteFill,

			absoluteFillObject: absoluteFillObject,

			flatten: flatten,

			create: function create(obj) {
				var result = {};
				for (var key in obj) {
					StyleSheetValidation.validateStyle(key, obj);
					result[key] = ReactNativePropRegistry.register(obj[key]);
				}
				return result;
			} };
	}, // Libraries/StyleSheet/StyleSheetValidation.js
	function (__inner_require__, exports, module) {
		var ImageStylePropTypes = require('react-native@0.37/Libraries/Image/ImageStylePropTypes.js');
		var ReactPropTypeLocations = require('react@15.3/lib/ReactPropTypeLocations.js');
		var ReactPropTypesSecret = require('react@15.3/lib/ReactPropTypesSecret.js');
		var TextStylePropTypes = require('react-native@0.37/Libraries/Text/TextStylePropTypes.js');
		var ViewStylePropTypes = require('react-native@0.37/Libraries/Components/View/ViewStylePropTypes.js');

		var invariant = require('fbjs@0.8/lib/invariant.js');var StyleSheetValidation = function () {
			function StyleSheetValidation() {
				babelHelpers.classCallCheck(this, StyleSheetValidation);
			}babelHelpers.createClass(StyleSheetValidation, null, [{ key: 'validateStyleProp', value: function validateStyleProp(prop, style, caller) {
					if (!__DEV__) {
						return;
					}
					if (allStylePropTypes[prop] === undefined) {
						var message1 = '"' + prop + '" is not a valid style property.';
						var message2 = '\nValid style props: ' + JSON.stringify(Object.keys(allStylePropTypes).sort(), null, '  ');
						styleError(message1, style, caller, message2);
					}
					var error = allStylePropTypes[prop](style, prop, caller, ReactPropTypeLocations.prop, null, ReactPropTypesSecret);

					if (error) {
						styleError(error.message, style, caller);
					}
				} }, { key: 'validateStyle', value: function validateStyle(name, styles) {
					if (!__DEV__) {
						return;
					}
					for (var prop in styles[name]) {
						StyleSheetValidation.validateStyleProp(prop, styles[name], 'StyleSheet ' + name);
					}
				} }, { key: 'addValidStylePropTypes', value: function addValidStylePropTypes(stylePropTypes) {
					for (var key in stylePropTypes) {
						allStylePropTypes[key] = stylePropTypes[key];
					}
				} }]);return StyleSheetValidation;
		}();

		var styleError = function styleError(message1, style, caller, message2) {
			invariant(false, message1 + '\n' + (caller || '<<unknown>>') + ': ' + JSON.stringify(style, null, '  ') + (message2 || ''));
		};

		var allStylePropTypes = {};

		StyleSheetValidation.addValidStylePropTypes(ImageStylePropTypes);
		StyleSheetValidation.addValidStylePropTypes(TextStylePropTypes);
		StyleSheetValidation.addValidStylePropTypes(ViewStylePropTypes);

		module.exports = StyleSheetValidation;
	}];
});