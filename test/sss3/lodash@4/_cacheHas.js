loader.define("lodash@4/_cacheHas.js", [], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// _cacheHas.js
		function(__inner_require__, exports, module){
			/**
			 * Checks if a `cache` value for `key` exists.
			 *
			 * @private
			 * @param {Object} cache The cache to query.
			 * @param {string} key The key of the entry to check.
			 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
			 */
			function cacheHas(cache, key) {
			  return cache.has(key);
			}
			
			module.exports = cacheHas;
		}
	];
});