loader.define("lodash@4/isFunction.js", ["lodash@4/_baseGetTag.js", "lodash@4/isObject.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// isFunction.js
		function(__inner_require__, exports, module){
			var baseGetTag = require('lodash@4/_baseGetTag.js'),
			    isObject = require('lodash@4/isObject.js');
			
			/** `Object#toString` result references. */
			var asyncTag = '[object AsyncFunction]',
			    funcTag = '[object Function]',
			    genTag = '[object GeneratorFunction]',
			    proxyTag = '[object Proxy]';
			
			/**
			 * Checks if `value` is classified as a `Function` object.
			 *
			 * @static
			 * @memberOf _
			 * @since 0.1.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
			 * @example
			 *
			 * _.isFunction(_);
			 * // => true
			 *
			 * _.isFunction(/abc/);
			 * // => false
			 */
			function isFunction(value) {
			    if (!isObject(value)) {
			        return false;
			    }
			    // The use of `Object#toString` avoids issues with the `typeof` operator
			    // in Safari 9 which returns 'object' for typed arrays and other constructors.
			    var tag = baseGetTag(value);
			    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
			}
			
			module.exports = isFunction;
		}
	];
});