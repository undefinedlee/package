loader.define("lodash@4/isArguments.js", ["lodash@4/isObjectLike.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// isArguments.js
		function(__inner_require__, exports, module){
			var baseIsArguments = __inner_require__(1 /*_baseIsArguments.js*/),
			    isObjectLike = require('lodash@4/isObjectLike.js');
			
			/** Used for built-in method references. */
			var objectProto = Object.prototype;
			
			/** Used to check objects for own properties. */
			var hasOwnProperty = objectProto.hasOwnProperty;
			
			/** Built-in value references. */
			var propertyIsEnumerable = objectProto.propertyIsEnumerable;
			
			/**
			 * Checks if `value` is likely an `arguments` object.
			 *
			 * @static
			 * @memberOf _
			 * @since 0.1.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
			 *  else `false`.
			 * @example
			 *
			 * _.isArguments(function() { return arguments; }());
			 * // => true
			 *
			 * _.isArguments([1, 2, 3]);
			 * // => false
			 */
			var isArguments = baseIsArguments(function () {
			    return arguments;
			}()) ? baseIsArguments : function (value) {
			    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
			};
			
			module.exports = isArguments;
		},		// _baseIsArguments.js
		function(__inner_require__, exports, module){
			var isObjectLike = require('lodash@4/isObjectLike.js');
			
			/** `Object#toString` result references. */
			var argsTag = '[object Arguments]';
			
			/** Used for built-in method references. */
			var objectProto = Object.prototype;
			
			/**
			 * Used to resolve the
			 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
			 * of values.
			 */
			var objectToString = objectProto.toString;
			
			/**
			 * The base implementation of `_.isArguments`.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
			 */
			function baseIsArguments(value) {
			  return isObjectLike(value) && objectToString.call(value) == argsTag;
			}
			
			module.exports = baseIsArguments;
		}
	];
});