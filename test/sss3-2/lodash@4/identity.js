loader.define("lodash@4/identity.js", [], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// identity.js
		function(__inner_require__, exports, module){
			/**
			 * This method returns the first argument it receives.
			 *
			 * @static
			 * @since 0.1.0
			 * @memberOf _
			 * @category Util
			 * @param {*} value Any value.
			 * @returns {*} Returns `value`.
			 * @example
			 *
			 * var object = { 'a': 1 };
			 *
			 * console.log(_.identity(object) === object);
			 * // => true
			 */
			function identity(value) {
			  return value;
			}
			
			module.exports = identity;
		}
	];
});