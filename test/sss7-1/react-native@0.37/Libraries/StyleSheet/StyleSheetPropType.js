__d("react-native@0.37/Libraries/StyleSheet/StyleSheetPropType.js", ["react-native@0.37/Libraries/Utilities/createStrictShapeTypeChecker.js", "react-native@0.37/Libraries/StyleSheet/flattenStyle.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/StyleSheet/StyleSheetPropType.js
	function (__inner_require__, exports, module) {
		var createStrictShapeTypeChecker = require('react-native@0.37/Libraries/Utilities/createStrictShapeTypeChecker.js');
		var flattenStyle = require('react-native@0.37/Libraries/StyleSheet/flattenStyle.js');

		function StyleSheetPropType(shape) {
			var shapePropType = createStrictShapeTypeChecker(shape);
			return function (props, propName, componentName, location) {
				var newProps = props;
				if (props[propName]) {

					newProps = {};
					newProps[propName] = flattenStyle(props[propName]);
				}
				return shapePropType(newProps, propName, componentName, location);
			};
		}

		module.exports = StyleSheetPropType;
	}];
});