// lodash@4/isArray.js
loader.define("lodash@4", "isArray.js", "f", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// isArray.js
		function(__inner_require__, exports, module){
			/**
			 * Checks if `value` is classified as an `Array` object.
			 *
			 * @static
			 * @memberOf _
			 * @since 0.1.0
			 * @type {Function}
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is correctly classified,
			 *  else `false`.
			 * @example
			 *
			 * _.isArray([1, 2, 3]);
			 * // => true
			 *
			 * _.isArray(document.body.children);
			 * // => false
			 *
			 * _.isArray('abc');
			 * // => false
			 *
			 * _.isArray(_.noop);
			 * // => false
			 */
			var isArray = Array.isArray;
			
			module.exports = isArray;
		}
	];
});