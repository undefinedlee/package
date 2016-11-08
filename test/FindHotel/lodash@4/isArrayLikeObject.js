// lodash@4/isArrayLikeObject.js
loader.define("lodash@4", "isArrayLikeObject.js", "", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// isArrayLikeObject.js
		function(__inner_require__, exports, module){
			var isArrayLike = require('lodash@4/isArrayLike.js'),
			    isObjectLike = require('lodash@4/isObjectLike.js');
			
			/**
			 * This method is like `_.isArrayLike` except that it also checks if `value`
			 * is an object.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.0.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is an array-like object,
			 *  else `false`.
			 * @example
			 *
			 * _.isArrayLikeObject([1, 2, 3]);
			 * // => true
			 *
			 * _.isArrayLikeObject(document.body.children);
			 * // => true
			 *
			 * _.isArrayLikeObject('abc');
			 * // => false
			 *
			 * _.isArrayLikeObject(_.noop);
			 * // => false
			 */
			function isArrayLikeObject(value) {
			  return isObjectLike(value) && isArrayLike(value);
			}
			
			module.exports = isArrayLikeObject;
		}
	];
});