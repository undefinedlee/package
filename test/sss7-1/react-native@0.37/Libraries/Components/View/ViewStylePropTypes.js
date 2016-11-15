__d("react-native@0.37/Libraries/Components/View/ViewStylePropTypes.js", ["react-native@0.37/Libraries/StyleSheet/LayoutPropTypes.js", "react-native@0.37/Libraries/react-native/React.js", "react-native@0.37/Libraries/StyleSheet/ColorPropType.js", "react-native@0.37/Libraries/Components/View/ShadowPropTypesIOS.js", "react-native@0.37/Libraries/StyleSheet/TransformPropTypes.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Components/View/ViewStylePropTypes.js
	function (__inner_require__, exports, module) {
		var LayoutPropTypes = require('react-native@0.37/Libraries/StyleSheet/LayoutPropTypes.js');
		var ReactPropTypes = require('react-native@0.37/Libraries/react-native/React.js').PropTypes;
		var ColorPropType = require('react-native@0.37/Libraries/StyleSheet/ColorPropType.js');
		var ShadowPropTypesIOS = require('react-native@0.37/Libraries/Components/View/ShadowPropTypesIOS.js');
		var TransformPropTypes = require('react-native@0.37/Libraries/StyleSheet/TransformPropTypes.js');

		var ViewStylePropTypes = babelHelpers.extends({}, LayoutPropTypes, ShadowPropTypesIOS, TransformPropTypes, {
			backfaceVisibility: ReactPropTypes.oneOf(['visible', 'hidden']),
			backgroundColor: ColorPropType,
			borderColor: ColorPropType,
			borderTopColor: ColorPropType,
			borderRightColor: ColorPropType,
			borderBottomColor: ColorPropType,
			borderLeftColor: ColorPropType,
			borderRadius: ReactPropTypes.number,
			borderTopLeftRadius: ReactPropTypes.number,
			borderTopRightRadius: ReactPropTypes.number,
			borderBottomLeftRadius: ReactPropTypes.number,
			borderBottomRightRadius: ReactPropTypes.number,
			borderStyle: ReactPropTypes.oneOf(['solid', 'dotted', 'dashed']),
			borderWidth: ReactPropTypes.number,
			borderTopWidth: ReactPropTypes.number,
			borderRightWidth: ReactPropTypes.number,
			borderBottomWidth: ReactPropTypes.number,
			borderLeftWidth: ReactPropTypes.number,
			opacity: ReactPropTypes.number,

			elevation: ReactPropTypes.number });

		module.exports = ViewStylePropTypes;
	}];
});