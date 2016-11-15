__d("react-native@0.37/Libraries/Utilities/createStrictShapeTypeChecker.js", ["react@15.3/lib/ReactPropTypeLocationNames.js", "react@15.3/lib/ReactPropTypesSecret.js", "fbjs@0.8/lib/invariant.js", "react-native@0.37/Libraries/vendor/core/merge.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Utilities/createStrictShapeTypeChecker.js
	function (__inner_require__, exports, module) {
		var ReactPropTypeLocationNames = require('react@15.3/lib/ReactPropTypeLocationNames.js');
		var ReactPropTypesSecret = require('react@15.3/lib/ReactPropTypesSecret.js');

		var invariant = require('fbjs@0.8/lib/invariant.js');
		var merge = require('react-native@0.37/Libraries/vendor/core/merge.js');

		function createStrictShapeTypeChecker(shapeTypes) {
			function checkType(isRequired, props, propName, componentName, location) {
				if (!props[propName]) {
					if (isRequired) {
						invariant(false, 'Required object `' + propName + '` was not specified in ' + ('`' + componentName + '`.'));
					}
					return;
				}
				var propValue = props[propName];
				var propType = typeof propValue;
				var locationName = location && ReactPropTypeLocationNames[location] || '(unknown)';
				if (propType !== 'object') {
					invariant(false, 'Invalid ' + locationName + ' `' + propName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
				}

				var allKeys = merge(props[propName], shapeTypes);
				for (var key in allKeys) {
					var checker = shapeTypes[key];
					if (!checker) {
						invariant(false, 'Invalid props.' + propName + ' key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
					}
					var error = checker(propValue, key, componentName, location, null, ReactPropTypesSecret);
					if (error) {
						invariant(false, error.message + '\nBad object: ' + JSON.stringify(props[propName], null, '  '));
					}
				}
			}
			function chainedCheckType(props, propName, componentName, location) {
				return checkType(false, props, propName, componentName, location);
			}
			chainedCheckType.isRequired = checkType.bind(null, true);
			return chainedCheckType;
		}

		module.exports = createStrictShapeTypeChecker;
	}];
});