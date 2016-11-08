// lodash@4/_isPrototype.js
loader.define("lodash@4", "_isPrototype.js", "s", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// _isPrototype.js
		function(__inner_require__, exports, module){
			/** Used for built-in method references. */
			var objectProto = Object.prototype;
			
			/**
			 * Checks if `value` is likely a prototype object.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
			 */
			function isPrototype(value) {
			  var Ctor = value && value.constructor,
			      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
			
			  return value === proto;
			}
			
			module.exports = isPrototype;
		}
	];
});