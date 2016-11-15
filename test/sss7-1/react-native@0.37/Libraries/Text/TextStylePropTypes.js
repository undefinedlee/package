__d("react-native@0.37/Libraries/Text/TextStylePropTypes.js", ["react-native@0.37/Libraries/react-native/React.js", "react-native@0.37/Libraries/StyleSheet/ColorPropType.js", "react-native@0.37/Libraries/Components/View/ViewStylePropTypes.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Text/TextStylePropTypes.js
	function (__inner_require__, exports, module) {
		var ReactPropTypes = require('react-native@0.37/Libraries/react-native/React.js').PropTypes;
		var ColorPropType = require('react-native@0.37/Libraries/StyleSheet/ColorPropType.js');
		var ViewStylePropTypes = require('react-native@0.37/Libraries/Components/View/ViewStylePropTypes.js');

		var TextStylePropTypes = babelHelpers.extends(Object.create(ViewStylePropTypes), {
			color: ColorPropType,
			fontFamily: ReactPropTypes.string,
			fontSize: ReactPropTypes.number,
			fontStyle: ReactPropTypes.oneOf(['normal', 'italic']),

			fontWeight: ReactPropTypes.oneOf(['normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900']),

			fontVariant: ReactPropTypes.arrayOf(ReactPropTypes.oneOf(['small-caps', 'oldstyle-nums', 'lining-nums', 'tabular-nums', 'proportional-nums'])),

			textShadowOffset: ReactPropTypes.shape({ width: ReactPropTypes.number, height: ReactPropTypes.number }),

			textShadowRadius: ReactPropTypes.number,
			textShadowColor: ColorPropType,

			letterSpacing: ReactPropTypes.number,
			lineHeight: ReactPropTypes.number,

			textAlign: ReactPropTypes.oneOf(['auto', 'left', 'right', 'center', 'justify']),

			textAlignVertical: ReactPropTypes.oneOf(['auto', 'top', 'bottom', 'center']),

			textDecorationLine: ReactPropTypes.oneOf(['none', 'underline', 'line-through', 'underline line-through']),

			textDecorationStyle: ReactPropTypes.oneOf(['solid', 'double', 'dotted', 'dashed']),

			textDecorationColor: ColorPropType,

			writingDirection: ReactPropTypes.oneOf(['auto', 'ltr', 'rtl']) });

		module.exports = TextStylePropTypes;
	}];
});