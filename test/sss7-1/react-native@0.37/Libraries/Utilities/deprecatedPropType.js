__d("react-native@0.37/Libraries/Utilities/deprecatedPropType.js", ["react-native@0.37/Libraries/ReactNative/UIManager.js", "react@15.3/lib/ReactPropTypesSecret.js", "react@15.3/lib/ReactPropTypeLocations.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Utilities/deprecatedPropType.js
	function (__inner_require__, exports, module) {
		var UIManager = require('react-native@0.37/Libraries/ReactNative/UIManager.js');
		var ReactPropTypesSecret = require('react@15.3/lib/ReactPropTypesSecret.js');
		var ReactPropTypeLocations = require('react@15.3/lib/ReactPropTypeLocations.js');

		function deprecatedPropType(propType, explanation) {
			return function validate(props, propName, componentName) {

				if (!UIManager[componentName] && props[propName] !== undefined) {
					console.warn('`' + propName + '` supplied to `' + componentName + '` has been deprecated. ' + explanation);
				}

				return propType(props, propName, componentName, ReactPropTypeLocations.prop, null, ReactPropTypesSecret);
			};
		}

		module.exports = deprecatedPropType;
	}];
});