__d("react-native@0.37/Libraries/Image/ImageStylePropTypes.js", ["react-native@0.37/Libraries/Image/ImageResizeMode.js", "react-native@0.37/Libraries/StyleSheet/LayoutPropTypes.js", "react-native@0.37/Libraries/StyleSheet/ColorPropType.js", "react-native@0.37/Libraries/Components/View/ShadowPropTypesIOS.js", "react-native@0.37/Libraries/StyleSheet/TransformPropTypes.js", "react-native@0.37/Libraries/react-native/React.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Image/ImageStylePropTypes.js
	function (__inner_require__, exports, module) {
		var ImageResizeMode = require('react-native@0.37/Libraries/Image/ImageResizeMode.js');
		var LayoutPropTypes = require('react-native@0.37/Libraries/StyleSheet/LayoutPropTypes.js');
		var ColorPropType = require('react-native@0.37/Libraries/StyleSheet/ColorPropType.js');
		var ShadowPropTypesIOS = require('react-native@0.37/Libraries/Components/View/ShadowPropTypesIOS.js');
		var TransformPropTypes = require('react-native@0.37/Libraries/StyleSheet/TransformPropTypes.js');

		var ReactPropTypes = require('react-native@0.37/Libraries/react-native/React.js').PropTypes;

		var ImageStylePropTypes = babelHelpers.extends({}, LayoutPropTypes, ShadowPropTypesIOS, TransformPropTypes, {
			resizeMode: ReactPropTypes.oneOf(Object.keys(ImageResizeMode)),
			backfaceVisibility: ReactPropTypes.oneOf(['visible', 'hidden']),
			backgroundColor: ColorPropType,
			borderColor: ColorPropType,
			borderWidth: ReactPropTypes.number,
			borderRadius: ReactPropTypes.number,
			overflow: ReactPropTypes.oneOf(['visible', 'hidden']),

			tintColor: ColorPropType,
			opacity: ReactPropTypes.number,

			overlayColor: ReactPropTypes.string,

			borderTopLeftRadius: ReactPropTypes.number,
			borderTopRightRadius: ReactPropTypes.number,
			borderBottomLeftRadius: ReactPropTypes.number,
			borderBottomRightRadius: ReactPropTypes.number });

		module.exports = ImageStylePropTypes;
	}];
});