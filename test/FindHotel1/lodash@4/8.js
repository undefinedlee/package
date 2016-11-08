// lodash@4/toInteger.js
loader.define("lodash@4", "toInteger.js", "8", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// toInteger.js
		function(__inner_require__, exports, module){
			var toFinite = __inner_require__(1 /*toFinite.js*/);
			
			/**
			 * Converts `value` to an integer.
			 *
			 * **Note:** This method is loosely based on
			 * [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
			 *
			 * @static
			 * @memberOf _
			 * @since 4.0.0
			 * @category Lang
			 * @param {*} value The value to convert.
			 * @returns {number} Returns the converted integer.
			 * @example
			 *
			 * _.toInteger(3.2);
			 * // => 3
			 *
			 * _.toInteger(Number.MIN_VALUE);
			 * // => 0
			 *
			 * _.toInteger(Infinity);
			 * // => 1.7976931348623157e+308
			 *
			 * _.toInteger('3.2');
			 * // => 3
			 */
			function toInteger(value) {
			  var result = toFinite(value),
			      remainder = result % 1;
			
			  return result === result ? remainder ? result - remainder : result : 0;
			}
			
			module.exports = toInteger;
		},
		// toFinite.js
		function(__inner_require__, exports, module){
			var toNumber = __inner_require__(2 /*toNumber.js*/);
			
			/** Used as references for various `Number` constants. */
			var INFINITY = 1 / 0,
			    MAX_INTEGER = 1.7976931348623157e+308;
			
			/**
			 * Converts `value` to a finite number.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.12.0
			 * @category Lang
			 * @param {*} value The value to convert.
			 * @returns {number} Returns the converted number.
			 * @example
			 *
			 * _.toFinite(3.2);
			 * // => 3.2
			 *
			 * _.toFinite(Number.MIN_VALUE);
			 * // => 5e-324
			 *
			 * _.toFinite(Infinity);
			 * // => 1.7976931348623157e+308
			 *
			 * _.toFinite('3.2');
			 * // => 3.2
			 */
			function toFinite(value) {
			  if (!value) {
			    return value === 0 ? value : 0;
			  }
			  value = toNumber(value);
			  if (value === INFINITY || value === -INFINITY) {
			    var sign = value < 0 ? -1 : 1;
			    return sign * MAX_INTEGER;
			  }
			  return value === value ? value : 0;
			}
			
			module.exports = toFinite;
		},
		// toNumber.js
		function(__inner_require__, exports, module){
			var isFunction = require('lodash@4/isFunction.js'),
			    isObject = require('lodash@4/isObject.js'),
			    isSymbol = require('lodash@4/isSymbol.js');
			
			/** Used as references for various `Number` constants. */
			var NAN = 0 / 0;
			
			/** Used to match leading and trailing whitespace. */
			var reTrim = /^\s+|\s+$/g;
			
			/** Used to detect bad signed hexadecimal string values. */
			var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
			
			/** Used to detect binary string values. */
			var reIsBinary = /^0b[01]+$/i;
			
			/** Used to detect octal string values. */
			var reIsOctal = /^0o[0-7]+$/i;
			
			/** Built-in method references without a dependency on `root`. */
			var freeParseInt = parseInt;
			
			/**
			 * Converts `value` to a number.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.0.0
			 * @category Lang
			 * @param {*} value The value to process.
			 * @returns {number} Returns the number.
			 * @example
			 *
			 * _.toNumber(3.2);
			 * // => 3.2
			 *
			 * _.toNumber(Number.MIN_VALUE);
			 * // => 5e-324
			 *
			 * _.toNumber(Infinity);
			 * // => Infinity
			 *
			 * _.toNumber('3.2');
			 * // => 3.2
			 */
			function toNumber(value) {
			  if (typeof value == 'number') {
			    return value;
			  }
			  if (isSymbol(value)) {
			    return NAN;
			  }
			  if (isObject(value)) {
			    var other = isFunction(value.valueOf) ? value.valueOf() : value;
			    value = isObject(other) ? other + '' : other;
			  }
			  if (typeof value != 'string') {
			    return value === 0 ? value : +value;
			  }
			  value = value.replace(reTrim, '');
			  var isBinary = reIsBinary.test(value);
			  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
			}
			
			module.exports = toNumber;
		}
	];
});