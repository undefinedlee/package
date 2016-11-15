loader.define("react@15.3/lib/checkReactTypeSpec.js", ["react@15.3/lib/reactProdInvariant.js", "react@15.3/lib/ReactPropTypeLocationNames.js", "react@15.3/lib/ReactPropTypesSecret.js", "fbjs@0.8/lib/invariant.js", "fbjs@0.8/lib/warning.js", "react@15.3/lib/ReactComponentTreeHook.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/checkReactTypeSpec.js
		function(__inner_require__, exports, module){
			var _prodInvariant = require('react@15.3/lib/reactProdInvariant.js');
			
			var ReactPropTypeLocationNames = require('react@15.3/lib/ReactPropTypeLocationNames.js');
			var ReactPropTypesSecret = require('react@15.3/lib/ReactPropTypesSecret.js');
			
			var invariant = require('fbjs@0.8/lib/invariant.js');
			var warning = require('fbjs@0.8/lib/warning.js');
			
			var ReactComponentTreeHook;
			
			if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test') {
			  // Temporary hack.
			  // Inline requires don't work well with Jest:
			  // https://github.com/facebook/react/issues/7240
			  // Remove the inline requires when we don't need them anymore:
			  // https://github.com/facebook/react/pull/7178
			  ReactComponentTreeHook = require('react@15.3/lib/ReactComponentTreeHook.js');
			}
			
			var loggedTypeFailures = {};
			
			/**
			 * Assert that the values match with the type specs.
			 * Error messages are memorized and will only be shown once.
			 *
			 * @param {object} typeSpecs Map of name to a ReactPropType
			 * @param {object} values Runtime values that need to be type-checked
			 * @param {string} location e.g. "prop", "context", "child context"
			 * @param {string} componentName Name of the component for error messages.
			 * @param {?object} element The React element that is being type-checked
			 * @param {?number} debugID The React component instance that is being type-checked
			 * @private
			 */
			function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
			  for (var typeSpecName in typeSpecs) {
			    if (typeSpecs.hasOwnProperty(typeSpecName)) {
			      var error;
			      // Prop type validation may throw. In case they do, we don't want to
			      // fail the render phase where it didn't fail before. So we log it.
			      // After these have been cleaned up, we'll let them throw.
			      try {
			        // This is intentionally an invariant that gets caught. It's the same
			        // behavior as without this statement except with a better message.
			        !(typeof typeSpecs[typeSpecName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : _prodInvariant('84', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : void 0;
			        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
			      } catch (ex) {
			        error = ex;
			      }
			      process.env.NODE_ENV !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName, typeof error === 'undefined' ? 'undefined' : babelHelpers.typeof(error)) : void 0;
			      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
			        // Only monitor this failure once because there tends to be a lot of the
			        // same error.
			        loggedTypeFailures[error.message] = true;
			
			        var componentStackInfo = '';
			
			        if (process.env.NODE_ENV !== 'production') {
			          if (!ReactComponentTreeHook) {
			            ReactComponentTreeHook = require('react@15.3/lib/ReactComponentTreeHook.js');
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
		}
	];
});