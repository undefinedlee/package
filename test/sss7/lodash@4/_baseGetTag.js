__d("lodash@4/_baseGetTag.js", ["lodash@4/_Symbol.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// _baseGetTag.js
		function(__inner_require__, exports, module){
			var _Symbol = require('lodash@4/_Symbol.js'),
			    getRawTag = __inner_require__(1 /*_getRawTag.js*/),
			    objectToString = __inner_require__(2 /*_objectToString.js*/);
			
			/** `Object#toString` result references. */
			var nullTag = '[object Null]',
			    undefinedTag = '[object Undefined]';
			
			/** Built-in value references. */
			var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
			
			/**
			 * The base implementation of `getTag` without fallbacks for buggy environments.
			 *
			 * @private
			 * @param {*} value The value to query.
			 * @returns {string} Returns the `toStringTag`.
			 */
			function baseGetTag(value) {
			    if (value == null) {
			        return value === undefined ? undefinedTag : nullTag;
			    }
			    value = Object(value);
			    return symToStringTag && symToStringTag in value ? getRawTag(value) : objectToString(value);
			}
			
			module.exports = baseGetTag;
		},		// _getRawTag.js
		function(__inner_require__, exports, module){
			var _Symbol = require('lodash@4/_Symbol.js');
			
			/** Used for built-in method references. */
			var objectProto = Object.prototype;
			
			/** Used to check objects for own properties. */
			var hasOwnProperty = objectProto.hasOwnProperty;
			
			/**
			 * Used to resolve the
			 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
			 * of values.
			 */
			var nativeObjectToString = objectProto.toString;
			
			/** Built-in value references. */
			var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
			
			/**
			 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
			 *
			 * @private
			 * @param {*} value The value to query.
			 * @returns {string} Returns the raw `toStringTag`.
			 */
			function getRawTag(value) {
			  var isOwn = hasOwnProperty.call(value, symToStringTag),
			      tag = value[symToStringTag];
			
			  try {
			    value[symToStringTag] = undefined;
			    var unmasked = true;
			  } catch (e) {}
			
			  var result = nativeObjectToString.call(value);
			  if (unmasked) {
			    if (isOwn) {
			      value[symToStringTag] = tag;
			    } else {
			      delete value[symToStringTag];
			    }
			  }
			  return result;
			}
			
			module.exports = getRawTag;
		},		// _objectToString.js
		function(__inner_require__, exports, module){
			/** Used for built-in method references. */
			var objectProto = Object.prototype;
			
			/**
			 * Used to resolve the
			 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
			 * of values.
			 */
			var nativeObjectToString = objectProto.toString;
			
			/**
			 * Converts `value` to a string using `Object.prototype.toString`.
			 *
			 * @private
			 * @param {*} value The value to convert.
			 * @returns {string} Returns the converted string.
			 */
			function objectToString(value) {
			  return nativeObjectToString.call(value);
			}
			
			module.exports = objectToString;
		}
	];
});