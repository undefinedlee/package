// lodash@4/isArrayLike.js
loader.define("lodash@4", "isArrayLike.js", "3", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// isArrayLike.js
		function(__inner_require__, exports, module){
			var isFunction = require('lodash@4/isFunction.js'),
			    isLength = require('lodash@4/isLength.js');
			
			/**
			 * Checks if `value` is array-like. A value is considered array-like if it's
			 * not a function and has a `value.length` that's an integer greater than or
			 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.0.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
			 * @example
			 *
			 * _.isArrayLike([1, 2, 3]);
			 * // => true
			 *
			 * _.isArrayLike(document.body.children);
			 * // => true
			 *
			 * _.isArrayLike('abc');
			 * // => true
			 *
			 * _.isArrayLike(_.noop);
			 * // => false
			 */
			function isArrayLike(value) {
			  return value != null && isLength(value.length) && !isFunction(value);
			}
			
			module.exports = isArrayLike;
		}
	];
});