loader.define("lodash@4/_getNative.js", ["lodash@4/isFunction.js", "lodash@4/isObject.js", "lodash@4/_toSource.js", "lodash@4/_root.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// _getNative.js
		function(__inner_require__, exports, module){
			var baseIsNative = __inner_require__(1 /*_baseIsNative.js*/),
			    getValue = __inner_require__(4 /*_getValue.js*/);
			
			/**
			 * Gets the native function at `key` of `object`.
			 *
			 * @private
			 * @param {Object} object The object to query.
			 * @param {string} key The key of the method to get.
			 * @returns {*} Returns the function if it's native, else `undefined`.
			 */
			function getNative(object, key) {
			  var value = getValue(object, key);
			  return baseIsNative(value) ? value : undefined;
			}
			
			module.exports = getNative;
		},		// _baseIsNative.js
		function(__inner_require__, exports, module){
			var isFunction = require('lodash@4/isFunction.js'),
			    isMasked = __inner_require__(2 /*_isMasked.js*/),
			    isObject = require('lodash@4/isObject.js'),
			    toSource = require('lodash@4/_toSource.js');
			
			/**
			 * Used to match `RegExp`
			 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
			 */
			var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
			
			/** Used to detect host constructors (Safari). */
			var reIsHostCtor = /^\[object .+?Constructor\]$/;
			
			/** Used for built-in method references. */
			var funcProto = Function.prototype,
			    objectProto = Object.prototype;
			
			/** Used to resolve the decompiled source of functions. */
			var funcToString = funcProto.toString;
			
			/** Used to check objects for own properties. */
			var hasOwnProperty = objectProto.hasOwnProperty;
			
			/** Used to detect if a method is native. */
			var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
			
			/**
			 * The base implementation of `_.isNative` without bad shim checks.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a native function,
			 *  else `false`.
			 */
			function baseIsNative(value) {
			  if (!isObject(value) || isMasked(value)) {
			    return false;
			  }
			  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
			  return pattern.test(toSource(value));
			}
			
			module.exports = baseIsNative;
		},		// _isMasked.js
		function(__inner_require__, exports, module){
			var coreJsData = __inner_require__(3 /*_coreJsData.js*/);
			
			/** Used to detect methods masquerading as native. */
			var maskSrcKey = function () {
			  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
			  return uid ? 'Symbol(src)_1.' + uid : '';
			}();
			
			/**
			 * Checks if `func` has its source masked.
			 *
			 * @private
			 * @param {Function} func The function to check.
			 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
			 */
			function isMasked(func) {
			  return !!maskSrcKey && maskSrcKey in func;
			}
			
			module.exports = isMasked;
		},		// _coreJsData.js
		function(__inner_require__, exports, module){
			var root = require('lodash@4/_root.js');
			
			/** Used to detect overreaching core-js shims. */
			var coreJsData = root['__core-js_shared__'];
			
			module.exports = coreJsData;
		},		// _getValue.js
		function(__inner_require__, exports, module){
			/**
			 * Gets the value at `key` of `object`.
			 *
			 * @private
			 * @param {Object} [object] The object to query.
			 * @param {string} key The key of the property to get.
			 * @returns {*} Returns the property value.
			 */
			function getValue(object, key) {
			  return object == null ? undefined : object[key];
			}
			
			module.exports = getValue;
		}
	];
});