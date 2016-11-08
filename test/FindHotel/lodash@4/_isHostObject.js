// lodash@4/_isHostObject.js
loader.define("lodash@4", "_isHostObject.js", "", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// _isHostObject.js
		function(__inner_require__, exports, module){
			/**
			 * Checks if `value` is a host object in IE < 9.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
			 */
			function isHostObject(value) {
			  // Many host objects are `Object` objects that can coerce to strings
			  // despite having improperly defined `toString` methods.
			  var result = false;
			  if (value != null && typeof value.toString != 'function') {
			    try {
			      result = !!(value + '');
			    } catch (e) {}
			  }
			  return result;
			}
			
			module.exports = isHostObject;
		}
	];
});