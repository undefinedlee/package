loader.define("react-native@0.37/Libraries/Components/View/ShadowPropTypesIOS.js", ["react-native@0.37/Libraries/StyleSheet/ColorPropType.js", "react-native@0.37/Libraries/react-native/React.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Components/View/ShadowPropTypesIOS.js
	function (__inner_require__, exports, module) {
		var ColorPropType = require('react-native@0.37/Libraries/StyleSheet/ColorPropType.js');
		var ReactPropTypes = require('react-native@0.37/Libraries/react-native/React.js').PropTypes;

		var ShadowPropTypesIOS = {

			shadowColor: ColorPropType,

			shadowOffset: ReactPropTypes.shape({ width: ReactPropTypes.number, height: ReactPropTypes.number }),

			shadowOpacity: ReactPropTypes.number,

			shadowRadius: ReactPropTypes.number };

		module.exports = ShadowPropTypesIOS;
	}];
});