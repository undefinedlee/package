// lodash@4/_baseHas.js
loader.define("lodash@4", "_baseHas.js", "", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// _baseHas.js
		function(__inner_require__, exports, module){
			var getPrototype = __inner_require__(1 /*_getPrototype.js*/);
			
			/** Used for built-in method references. */
			var objectProto = Object.prototype;
			
			/** Used to check objects for own properties. */
			var hasOwnProperty = objectProto.hasOwnProperty;
			
			/**
			 * The base implementation of `_.has` without support for deep paths.
			 *
			 * @private
			 * @param {Object} [object] The object to query.
			 * @param {Array|string} key The key to check.
			 * @returns {boolean} Returns `true` if `key` exists, else `false`.
			 */
			function baseHas(object, key) {
			  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
			  // that are composed entirely of index properties, return `false` for
			  // `hasOwnProperty` checks of them.
			  return object != null && (hasOwnProperty.call(object, key) || (typeof object === 'undefined' ? 'undefined' : babelHelpers.typeof(object)) == 'object' && key in object && getPrototype(object) === null);
			}
			
			module.exports = baseHas;
		},
		// _getPrototype.js
		function(__inner_require__, exports, module){
			/* Built-in method references for those with the same name as other `lodash` methods. */
			var nativeGetPrototype = Object.getPrototypeOf;
			
			/**
			 * Gets the `[[Prototype]]` of `value`.
			 *
			 * @private
			 * @param {*} value The value to query.
			 * @returns {null|Object} Returns the `[[Prototype]]`.
			 */
			function getPrototype(value) {
			  return nativeGetPrototype(Object(value));
			}
			
			module.exports = getPrototype;
		}
	];
});