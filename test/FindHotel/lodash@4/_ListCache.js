// lodash@4/_ListCache.js
loader.define("lodash@4", "_ListCache.js", "", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// _ListCache.js
		function(__inner_require__, exports, module){
			var listCacheClear = __inner_require__(1 /*_listCacheClear.js*/),
			    listCacheDelete = __inner_require__(2 /*_listCacheDelete.js*/),
			    listCacheGet = __inner_require__(4 /*_listCacheGet.js*/),
			    listCacheHas = __inner_require__(5 /*_listCacheHas.js*/),
			    listCacheSet = __inner_require__(6 /*_listCacheSet.js*/);
			
			/**
			 * Creates an list cache object.
			 *
			 * @private
			 * @constructor
			 * @param {Array} [entries] The key-value pairs to cache.
			 */
			function ListCache(entries) {
			    var index = -1,
			        length = entries ? entries.length : 0;
			
			    this.clear();
			    while (++index < length) {
			        var entry = entries[index];
			        this.set(entry[0], entry[1]);
			    }
			}
			
			// Add methods to `ListCache`.
			ListCache.prototype.clear = listCacheClear;
			ListCache.prototype['delete'] = listCacheDelete;
			ListCache.prototype.get = listCacheGet;
			ListCache.prototype.has = listCacheHas;
			ListCache.prototype.set = listCacheSet;
			
			module.exports = ListCache;
		},
		// _listCacheClear.js
		function(__inner_require__, exports, module){
			/**
			 * Removes all key-value entries from the list cache.
			 *
			 * @private
			 * @name clear
			 * @memberOf ListCache
			 */
			function listCacheClear() {
			  this.__data__ = [];
			}
			
			module.exports = listCacheClear;
		},
		// _listCacheDelete.js
		function(__inner_require__, exports, module){
			var assocIndexOf = __inner_require__(3 /*_assocIndexOf.js*/);
			
			/** Used for built-in method references. */
			var arrayProto = Array.prototype;
			
			/** Built-in value references. */
			var splice = arrayProto.splice;
			
			/**
			 * Removes `key` and its value from the list cache.
			 *
			 * @private
			 * @name delete
			 * @memberOf ListCache
			 * @param {string} key The key of the value to remove.
			 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
			 */
			function listCacheDelete(key) {
			  var data = this.__data__,
			      index = assocIndexOf(data, key);
			
			  if (index < 0) {
			    return false;
			  }
			  var lastIndex = data.length - 1;
			  if (index == lastIndex) {
			    data.pop();
			  } else {
			    splice.call(data, index, 1);
			  }
			  return true;
			}
			
			module.exports = listCacheDelete;
		},
		// _assocIndexOf.js
		function(__inner_require__, exports, module){
			var eq = require('lodash@4/eq.js');
			
			/**
			 * Gets the index at which the `key` is found in `array` of key-value pairs.
			 *
			 * @private
			 * @param {Array} array The array to search.
			 * @param {*} key The key to search for.
			 * @returns {number} Returns the index of the matched value, else `-1`.
			 */
			function assocIndexOf(array, key) {
			  var length = array.length;
			  while (length--) {
			    if (eq(array[length][0], key)) {
			      return length;
			    }
			  }
			  return -1;
			}
			
			module.exports = assocIndexOf;
		},
		// _listCacheGet.js
		function(__inner_require__, exports, module){
			var assocIndexOf = __inner_require__(3 /*_assocIndexOf.js*/);
			
			/**
			 * Gets the list cache value for `key`.
			 *
			 * @private
			 * @name get
			 * @memberOf ListCache
			 * @param {string} key The key of the value to get.
			 * @returns {*} Returns the entry value.
			 */
			function listCacheGet(key) {
			  var data = this.__data__,
			      index = assocIndexOf(data, key);
			
			  return index < 0 ? undefined : data[index][1];
			}
			
			module.exports = listCacheGet;
		},
		// _listCacheHas.js
		function(__inner_require__, exports, module){
			var assocIndexOf = __inner_require__(3 /*_assocIndexOf.js*/);
			
			/**
			 * Checks if a list cache value for `key` exists.
			 *
			 * @private
			 * @name has
			 * @memberOf ListCache
			 * @param {string} key The key of the entry to check.
			 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
			 */
			function listCacheHas(key) {
			  return assocIndexOf(this.__data__, key) > -1;
			}
			
			module.exports = listCacheHas;
		},
		// _listCacheSet.js
		function(__inner_require__, exports, module){
			var assocIndexOf = __inner_require__(3 /*_assocIndexOf.js*/);
			
			/**
			 * Sets the list cache `key` to `value`.
			 *
			 * @private
			 * @name set
			 * @memberOf ListCache
			 * @param {string} key The key of the value to set.
			 * @param {*} value The value to set.
			 * @returns {Object} Returns the list cache instance.
			 */
			function listCacheSet(key, value) {
			  var data = this.__data__,
			      index = assocIndexOf(data, key);
			
			  if (index < 0) {
			    data.push([key, value]);
			  } else {
			    data[index][1] = value;
			  }
			  return this;
			}
			
			module.exports = listCacheSet;
		}
	];
});