// lodash@4/_baseUnary.js
loader.define("lodash@4", "_baseUnary.js", "b", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// _baseUnary.js
		function(__inner_require__, exports, module){
			/**
			 * The base implementation of `_.unary` without support for storing metadata.
			 *
			 * @private
			 * @param {Function} func The function to cap arguments for.
			 * @returns {Function} Returns the new capped function.
			 */
			function baseUnary(func) {
			  return function (value) {
			    return func(value);
			  };
			}
			
			module.exports = baseUnary;
		}
	];
});