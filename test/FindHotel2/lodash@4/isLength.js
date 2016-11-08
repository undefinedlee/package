loader.define("lodash@4/isLength.js", [], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// isLength.js
		function(__inner_require__, exports, module){
			/** Used as references for various `Number` constants. */
			var MAX_SAFE_INTEGER = 9007199254740991;
			
			/**
			 * Checks if `value` is a valid array-like length.
			 *
			 * **Note:** This function is loosely based on
			 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
			 *
			 * @static
			 * @memberOf _
			 * @since 4.0.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a valid length,
			 *  else `false`.
			 * @example
			 *
			 * _.isLength(3);
			 * // => true
			 *
			 * _.isLength(Number.MIN_VALUE);
			 * // => false
			 *
			 * _.isLength(Infinity);
			 * // => false
			 *
			 * _.isLength('3');
			 * // => false
			 */
			function isLength(value) {
			  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
			}
			
			module.exports = isLength;
		}
	];
});