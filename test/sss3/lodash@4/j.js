// lodash@4/isBuffer.js
loader.define("lodash@4", "isBuffer.js", "j", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// isBuffer.js
		function(__inner_require__, exports, module){
			var root = require('lodash@4/_root.js'),
			    stubFalse = __inner_require__(1 /*stubFalse.js*/);
			
			/** Detect free variable `exports`. */
			var freeExports = (typeof exports === 'undefined' ? 'undefined' : babelHelpers.typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
			
			/** Detect free variable `module`. */
			var freeModule = freeExports && (typeof module === 'undefined' ? 'undefined' : babelHelpers.typeof(module)) == 'object' && module && !module.nodeType && module;
			
			/** Detect the popular CommonJS extension `module.exports`. */
			var moduleExports = freeModule && freeModule.exports === freeExports;
			
			/** Built-in value references. */
			var Buffer = moduleExports ? root.Buffer : undefined;
			
			/* Built-in method references for those with the same name as other `lodash` methods. */
			var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
			
			/**
			 * Checks if `value` is a buffer.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.3.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
			 * @example
			 *
			 * _.isBuffer(new Buffer(2));
			 * // => true
			 *
			 * _.isBuffer(new Uint8Array(2));
			 * // => false
			 */
			var isBuffer = nativeIsBuffer || stubFalse;
			
			module.exports = isBuffer;
		},
		// stubFalse.js
		function(__inner_require__, exports, module){
			/**
			 * This method returns `false`.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.13.0
			 * @category Util
			 * @returns {boolean} Returns `false`.
			 * @example
			 *
			 * _.times(2, _.stubFalse);
			 * // => [false, false]
			 */
			function stubFalse() {
			  return false;
			}
			
			module.exports = stubFalse;
		}
	];
});