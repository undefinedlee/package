// lodash@4/isObject.js
loader.define("lodash@4", "isObject.js", "g", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// isObject.js
		function(__inner_require__, exports, module){
			/**
			 * Checks if `value` is the
			 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
			 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
			 *
			 * @static
			 * @memberOf _
			 * @since 0.1.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
			 * @example
			 *
			 * _.isObject({});
			 * // => true
			 *
			 * _.isObject([1, 2, 3]);
			 * // => true
			 *
			 * _.isObject(_.noop);
			 * // => true
			 *
			 * _.isObject(null);
			 * // => false
			 */
			function isObject(value) {
			  var type = typeof value === 'undefined' ? 'undefined' : babelHelpers.typeof(value);
			  return !!value && (type == 'object' || type == 'function');
			}
			
			module.exports = isObject;
		}
	];
});