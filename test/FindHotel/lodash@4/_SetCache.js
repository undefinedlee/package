// lodash@4/_SetCache.js
loader.define("lodash@4", "_SetCache.js", "", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// _SetCache.js
		function(__inner_require__, exports, module){
			var MapCache = require('lodash@4/_MapCache.js'),
			    setCacheAdd = __inner_require__(1 /*_setCacheAdd.js*/),
			    setCacheHas = __inner_require__(2 /*_setCacheHas.js*/);
			
			/**
			 *
			 * Creates an array cache object to store unique values.
			 *
			 * @private
			 * @constructor
			 * @param {Array} [values] The values to cache.
			 */
			function SetCache(values) {
			    var index = -1,
			        length = values ? values.length : 0;
			
			    this.__data__ = new MapCache();
			    while (++index < length) {
			        this.add(values[index]);
			    }
			}
			
			// Add methods to `SetCache`.
			SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
			SetCache.prototype.has = setCacheHas;
			
			module.exports = SetCache;
		},
		// _setCacheAdd.js
		function(__inner_require__, exports, module){
			/** Used to stand-in for `undefined` hash values. */
			var HASH_UNDEFINED = '__lodash_hash_undefined__';
			
			/**
			 * Adds `value` to the array cache.
			 *
			 * @private
			 * @name add
			 * @memberOf SetCache
			 * @alias push
			 * @param {*} value The value to cache.
			 * @returns {Object} Returns the cache instance.
			 */
			function setCacheAdd(value) {
			  this.__data__.set(value, HASH_UNDEFINED);
			  return this;
			}
			
			module.exports = setCacheAdd;
		},
		// _setCacheHas.js
		function(__inner_require__, exports, module){
			/**
			 * Checks if `value` is in the array cache.
			 *
			 * @private
			 * @name has
			 * @memberOf SetCache
			 * @param {*} value The value to search for.
			 * @returns {number} Returns `true` if `value` is found, else `false`.
			 */
			function setCacheHas(value) {
			  return this.__data__.has(value);
			}
			
			module.exports = setCacheHas;
		}
	];
});