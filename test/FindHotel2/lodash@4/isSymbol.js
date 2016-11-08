loader.define("lodash@4/isSymbol.js", ["lodash@4/isObjectLike.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// isSymbol.js
		function(__inner_require__, exports, module){
			var isObjectLike = require('lodash@4/isObjectLike.js');
			
			/** `Object#toString` result references. */
			var symbolTag = '[object Symbol]';
			
			/** Used for built-in method references. */
			var objectProto = Object.prototype;
			
			/**
			 * Used to resolve the
			 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
			 * of values.
			 */
			var objectToString = objectProto.toString;
			
			/**
			 * Checks if `value` is classified as a `Symbol` primitive or object.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.0.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is correctly classified,
			 *  else `false`.
			 * @example
			 *
			 * _.isSymbol(Symbol.iterator);
			 * // => true
			 *
			 * _.isSymbol('abc');
			 * // => false
			 */
			function isSymbol(value) {
			  return (typeof value === 'undefined' ? 'undefined' : babelHelpers.typeof(value)) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
			}
			
			module.exports = isSymbol;
		}
	];
});