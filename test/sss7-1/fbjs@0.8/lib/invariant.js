__d("fbjs@0.8/lib/invariant.js", [], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/invariant.js
		function(__inner_require__, exports, module){
			/**
			 * Use invariant() to assert state which your program assumes to be true.
			 *
			 * Provide sprintf-style format (only %s is supported) and arguments
			 * to provide information about what broke and what you were
			 * expecting.
			 *
			 * The invariant message will be stripped in production, but the invariant
			 * will remain to ensure logic does not differ in production.
			 */
			
			function invariant(condition, format, a, b, c, d, e, f) {
			  if (process.env.NODE_ENV !== 'production') {
			    if (format === undefined) {
			      throw new Error('invariant requires an error message argument');
			    }
			  }
			
			  if (!condition) {
			    var error;
			    if (format === undefined) {
			      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
			    } else {
			      var args = [a, b, c, d, e, f];
			      var argIndex = 0;
			      error = new Error(format.replace(/%s/g, function () {
			        return args[argIndex++];
			      }));
			      error.name = 'Invariant Violation';
			    }
			
			    error.framesToPop = 1; // we don't care about invariant's own frame
			    throw error;
			  }
			}
			
			module.exports = invariant;
		}
	];
});