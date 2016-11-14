loader.define("react-native@0.37/Libraries/StyleSheet/EdgeInsetsPropType.js", ["react-native@0.37/Libraries/react-native/React.js", "react-native@0.37/Libraries/Utilities/createStrictShapeTypeChecker.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/StyleSheet/EdgeInsetsPropType.js
	function (__inner_require__, exports, module) {
		var _require = require('react-native@0.37/Libraries/react-native/React.js'),
		    PropTypes = _require.PropTypes;

		var createStrictShapeTypeChecker = require('react-native@0.37/Libraries/Utilities/createStrictShapeTypeChecker.js');

		var EdgeInsetsPropType = createStrictShapeTypeChecker({
			top: PropTypes.number,
			left: PropTypes.number,
			bottom: PropTypes.number,
			right: PropTypes.number });

		module.exports = EdgeInsetsPropType;
	}];
});