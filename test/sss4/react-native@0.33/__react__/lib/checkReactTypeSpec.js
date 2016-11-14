loader.define("react-native@0.33/__react__/lib/checkReactTypeSpec.js", ["react-native@0.33/__react__/lib/reactProdInvariant.js", "react-native@0.33/__react__/lib/ReactPropTypeLocationNames.js", "react-native@0.33/__react__/lib/ReactPropTypesSecret.js", "react-native@0.33/__fbjs__/lib/invariant.js", "react-native@0.33/__fbjs__/lib/warning.js", "react-native@0.33/__react__/lib/ReactComponentTreeHook.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// __react__/lib/checkReactTypeSpec.js
	function (__inner_require__, exports, module) {
		var _prodInvariant = require('react-native@0.33/__react__/lib/reactProdInvariant.js');

		var ReactPropTypeLocationNames = require('react-native@0.33/__react__/lib/ReactPropTypeLocationNames.js');
		var ReactPropTypesSecret = require('react-native@0.33/__react__/lib/ReactPropTypesSecret.js');

		var invariant = require('react-native@0.33/__fbjs__/lib/invariant.js');
		var warning = require('react-native@0.33/__fbjs__/lib/warning.js');

		var ReactComponentTreeHook;

		if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test') {

			ReactComponentTreeHook = require('react-native@0.33/__react__/lib/ReactComponentTreeHook.js');
		}

		var loggedTypeFailures = {};

		function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
			for (var typeSpecName in typeSpecs) {
				if (typeSpecs.hasOwnProperty(typeSpecName)) {
					var error;

					try {

						!(typeof typeSpecs[typeSpecName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : _prodInvariant('84', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : void 0;
						error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
					} catch (ex) {
						error = ex;
					}
					process.env.NODE_ENV !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName, typeof error) : void 0;
					if (error instanceof Error && !(error.message in loggedTypeFailures)) {

						loggedTypeFailures[error.message] = true;

						var componentStackInfo = '';

						if (process.env.NODE_ENV !== 'production') {
							if (!ReactComponentTreeHook) {
								ReactComponentTreeHook = require('react-native@0.33/__react__/lib/ReactComponentTreeHook.js');
							}
							if (debugID !== null) {
								componentStackInfo = ReactComponentTreeHook.getStackAddendumByID(debugID);
							} else if (element !== null) {
								componentStackInfo = ReactComponentTreeHook.getCurrentStackAddendum(element);
							}
						}

						process.env.NODE_ENV !== 'production' ? warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
					}
				}
			}
		}

		module.exports = checkReactTypeSpec;
	}];
});