// lodash@4/isFunction.js
loader.define("lodash@4", "isFunction.js", "", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// isFunction.js
		function(__inner_require__, exports, module){
			var isObject = require('lodash@4/isObject.js');
			
			/** `Object#toString` result references. */
			var funcTag = '[object Function]',
			    genTag = '[object GeneratorFunction]';
			
			/** Used for built-in method references. */
			var objectProto = Object.prototype;
			
			/**
			 * Used to resolve the
			 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
			 * of values.
			 */
			var objectToString = objectProto.toString;
			
			/**
			 * Checks if `value` is classified as a `Function` object.
			 *
			 * @static
			 * @memberOf _
			 * @since 0.1.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is correctly classified,
			 *  else `false`.
			 * @example
			 *
			 * _.isFunction(_);
			 * // => true
			 *
			 * _.isFunction(/abc/);
			 * // => false
			 */
			function isFunction(value) {
			  // The use of `Object#toString` avoids issues with the `typeof` operator
			  // in Safari 8 which returns 'object' for typed array and weak map constructors,
			  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
			  var tag = isObject(value) ? objectToString.call(value) : '';
			  return tag == funcTag || tag == genTag;
			}
			
			module.exports = isFunction;
		}
	];
});