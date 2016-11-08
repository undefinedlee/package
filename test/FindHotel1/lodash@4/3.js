// lodash@4/isArrayLike.js
loader.define("lodash@4", "isArrayLike.js", "3", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// isArrayLike.js
		function(__inner_require__, exports, module){
			var getLength = __inner_require__(1 /*_getLength.js*/),
			    isFunction = require('lodash@4/isFunction.js'),
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
			  return value != null && isLength(getLength(value)) && !isFunction(value);
			}
			
			module.exports = isArrayLike;
		},
		// _getLength.js
		function(__inner_require__, exports, module){
			var baseProperty = require('lodash@4/_baseProperty.js');
			
			/**
			 * Gets the "length" property value of `object`.
			 *
			 * **Note:** This function is used to avoid a
			 * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
			 * Safari on at least iOS 8.1-8.3 ARM64.
			 *
			 * @private
			 * @param {Object} object The object to query.
			 * @returns {*} Returns the "length" value.
			 */
			var getLength = baseProperty('length');
			
			module.exports = getLength;
		}
	];
});