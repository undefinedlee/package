loader.define("lodash@4/isTypedArray.js", ["lodash@4/_baseUnary.js", "lodash@4/_baseGetTag.js", "lodash@4/isLength.js", "lodash@4/isObjectLike.js", "lodash@4/_freeGlobal.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// isTypedArray.js
		function(__inner_require__, exports, module){
			var baseIsTypedArray = __inner_require__(1 /*_baseIsTypedArray.js*/),
			    baseUnary = require('lodash@4/_baseUnary.js'),
			    nodeUtil = __inner_require__(2 /*_nodeUtil.js*/);
			
			/* Node.js helper references. */
			var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
			
			/**
			 * Checks if `value` is classified as a typed array.
			 *
			 * @static
			 * @memberOf _
			 * @since 3.0.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
			 * @example
			 *
			 * _.isTypedArray(new Uint8Array);
			 * // => true
			 *
			 * _.isTypedArray([]);
			 * // => false
			 */
			var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
			
			module.exports = isTypedArray;
		},		// _baseIsTypedArray.js
		function(__inner_require__, exports, module){
			var baseGetTag = require('lodash@4/_baseGetTag.js'),
			    isLength = require('lodash@4/isLength.js'),
			    isObjectLike = require('lodash@4/isObjectLike.js');
			
			/** `Object#toString` result references. */
			var argsTag = '[object Arguments]',
			    arrayTag = '[object Array]',
			    boolTag = '[object Boolean]',
			    dateTag = '[object Date]',
			    errorTag = '[object Error]',
			    funcTag = '[object Function]',
			    mapTag = '[object Map]',
			    numberTag = '[object Number]',
			    objectTag = '[object Object]',
			    regexpTag = '[object RegExp]',
			    setTag = '[object Set]',
			    stringTag = '[object String]',
			    weakMapTag = '[object WeakMap]';
			
			var arrayBufferTag = '[object ArrayBuffer]',
			    dataViewTag = '[object DataView]',
			    float32Tag = '[object Float32Array]',
			    float64Tag = '[object Float64Array]',
			    int8Tag = '[object Int8Array]',
			    int16Tag = '[object Int16Array]',
			    int32Tag = '[object Int32Array]',
			    uint8Tag = '[object Uint8Array]',
			    uint8ClampedTag = '[object Uint8ClampedArray]',
			    uint16Tag = '[object Uint16Array]',
			    uint32Tag = '[object Uint32Array]';
			
			/** Used to identify `toStringTag` values of typed arrays. */
			var typedArrayTags = {};
			typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
			typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
			
			/**
			 * The base implementation of `_.isTypedArray` without Node.js optimizations.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
			 */
			function baseIsTypedArray(value) {
			    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
			}
			
			module.exports = baseIsTypedArray;
		},		// _nodeUtil.js
		function(__inner_require__, exports, module){
			var freeGlobal = require('lodash@4/_freeGlobal.js');
			
			/** Detect free variable `exports`. */
			var freeExports = (typeof exports === 'undefined' ? 'undefined' : babelHelpers.typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
			
			/** Detect free variable `module`. */
			var freeModule = freeExports && (typeof module === 'undefined' ? 'undefined' : babelHelpers.typeof(module)) == 'object' && module && !module.nodeType && module;
			
			/** Detect the popular CommonJS extension `module.exports`. */
			var moduleExports = freeModule && freeModule.exports === freeExports;
			
			/** Detect free variable `process` from Node.js. */
			var freeProcess = moduleExports && freeGlobal.process;
			
			/** Used to access faster Node.js helpers. */
			var nodeUtil = function () {
			  try {
			    return freeProcess && freeProcess.binding('util');
			  } catch (e) {}
			}();
			
			module.exports = nodeUtil;
		}
	];
});