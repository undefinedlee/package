__d("lodash@4/_MapCache.js", ["lodash@4/_ListCache.js", "lodash@4/_Map.js", "lodash@4/_getNative.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// _MapCache.js
		function(__inner_require__, exports, module){
			var mapCacheClear = __inner_require__(1 /*_mapCacheClear.js*/),
			    mapCacheDelete = __inner_require__(9 /*_mapCacheDelete.js*/),
			    mapCacheGet = __inner_require__(12 /*_mapCacheGet.js*/),
			    mapCacheHas = __inner_require__(13 /*_mapCacheHas.js*/),
			    mapCacheSet = __inner_require__(14 /*_mapCacheSet.js*/);
			
			/**
			 * Creates a map cache object to store key-value pairs.
			 *
			 * @private
			 * @constructor
			 * @param {Array} [entries] The key-value pairs to cache.
			 */
			function MapCache(entries) {
			    var index = -1,
			        length = entries == null ? 0 : entries.length;
			
			    this.clear();
			    while (++index < length) {
			        var entry = entries[index];
			        this.set(entry[0], entry[1]);
			    }
			}
			
			// Add methods to `MapCache`.
			MapCache.prototype.clear = mapCacheClear;
			MapCache.prototype['delete'] = mapCacheDelete;
			MapCache.prototype.get = mapCacheGet;
			MapCache.prototype.has = mapCacheHas;
			MapCache.prototype.set = mapCacheSet;
			
			module.exports = MapCache;
		},		// _mapCacheClear.js
		function(__inner_require__, exports, module){
			var Hash = __inner_require__(2 /*_Hash.js*/),
			    ListCache = require('lodash@4/_ListCache.js'),
			    Map = require('lodash@4/_Map.js');
			
			/**
			 * Removes all key-value entries from the map.
			 *
			 * @private
			 * @name clear
			 * @memberOf MapCache
			 */
			function mapCacheClear() {
			  this.size = 0;
			  this.__data__ = {
			    'hash': new Hash(),
			    'map': new (Map || ListCache)(),
			    'string': new Hash()
			  };
			}
			
			module.exports = mapCacheClear;
		},		// _Hash.js
		function(__inner_require__, exports, module){
			var hashClear = __inner_require__(3 /*_hashClear.js*/),
			    hashDelete = __inner_require__(5 /*_hashDelete.js*/),
			    hashGet = __inner_require__(6 /*_hashGet.js*/),
			    hashHas = __inner_require__(7 /*_hashHas.js*/),
			    hashSet = __inner_require__(8 /*_hashSet.js*/);
			
			/**
			 * Creates a hash object.
			 *
			 * @private
			 * @constructor
			 * @param {Array} [entries] The key-value pairs to cache.
			 */
			function Hash(entries) {
			    var index = -1,
			        length = entries == null ? 0 : entries.length;
			
			    this.clear();
			    while (++index < length) {
			        var entry = entries[index];
			        this.set(entry[0], entry[1]);
			    }
			}
			
			// Add methods to `Hash`.
			Hash.prototype.clear = hashClear;
			Hash.prototype['delete'] = hashDelete;
			Hash.prototype.get = hashGet;
			Hash.prototype.has = hashHas;
			Hash.prototype.set = hashSet;
			
			module.exports = Hash;
		},		// _hashClear.js
		function(__inner_require__, exports, module){
			var nativeCreate = __inner_require__(4 /*_nativeCreate.js*/);
			
			/**
			 * Removes all key-value entries from the hash.
			 *
			 * @private
			 * @name clear
			 * @memberOf Hash
			 */
			function hashClear() {
			  this.__data__ = nativeCreate ? nativeCreate(null) : {};
			  this.size = 0;
			}
			
			module.exports = hashClear;
		},		// _nativeCreate.js
		function(__inner_require__, exports, module){
			var getNative = require('lodash@4/_getNative.js');
			
			/* Built-in method references that are verified to be native. */
			var nativeCreate = getNative(Object, 'create');
			
			module.exports = nativeCreate;
		},		// _hashDelete.js
		function(__inner_require__, exports, module){
			/**
			 * Removes `key` and its value from the hash.
			 *
			 * @private
			 * @name delete
			 * @memberOf Hash
			 * @param {Object} hash The hash to modify.
			 * @param {string} key The key of the value to remove.
			 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
			 */
			function hashDelete(key) {
			  var result = this.has(key) && delete this.__data__[key];
			  this.size -= result ? 1 : 0;
			  return result;
			}
			
			module.exports = hashDelete;
		},		// _hashGet.js
		function(__inner_require__, exports, module){
			var nativeCreate = __inner_require__(4 /*_nativeCreate.js*/);
			
			/** Used to stand-in for `undefined` hash values. */
			var HASH_UNDEFINED = '__lodash_hash_undefined__';
			
			/** Used for built-in method references. */
			var objectProto = Object.prototype;
			
			/** Used to check objects for own properties. */
			var hasOwnProperty = objectProto.hasOwnProperty;
			
			/**
			 * Gets the hash value for `key`.
			 *
			 * @private
			 * @name get
			 * @memberOf Hash
			 * @param {string} key The key of the value to get.
			 * @returns {*} Returns the entry value.
			 */
			function hashGet(key) {
			  var data = this.__data__;
			  if (nativeCreate) {
			    var result = data[key];
			    return result === HASH_UNDEFINED ? undefined : result;
			  }
			  return hasOwnProperty.call(data, key) ? data[key] : undefined;
			}
			
			module.exports = hashGet;
		},		// _hashHas.js
		function(__inner_require__, exports, module){
			var nativeCreate = __inner_require__(4 /*_nativeCreate.js*/);
			
			/** Used for built-in method references. */
			var objectProto = Object.prototype;
			
			/** Used to check objects for own properties. */
			var hasOwnProperty = objectProto.hasOwnProperty;
			
			/**
			 * Checks if a hash value for `key` exists.
			 *
			 * @private
			 * @name has
			 * @memberOf Hash
			 * @param {string} key The key of the entry to check.
			 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
			 */
			function hashHas(key) {
			  var data = this.__data__;
			  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
			}
			
			module.exports = hashHas;
		},		// _hashSet.js
		function(__inner_require__, exports, module){
			var nativeCreate = __inner_require__(4 /*_nativeCreate.js*/);
			
			/** Used to stand-in for `undefined` hash values. */
			var HASH_UNDEFINED = '__lodash_hash_undefined__';
			
			/**
			 * Sets the hash `key` to `value`.
			 *
			 * @private
			 * @name set
			 * @memberOf Hash
			 * @param {string} key The key of the value to set.
			 * @param {*} value The value to set.
			 * @returns {Object} Returns the hash instance.
			 */
			function hashSet(key, value) {
			  var data = this.__data__;
			  this.size += this.has(key) ? 0 : 1;
			  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
			  return this;
			}
			
			module.exports = hashSet;
		},		// _mapCacheDelete.js
		function(__inner_require__, exports, module){
			var getMapData = __inner_require__(10 /*_getMapData.js*/);
			
			/**
			 * Removes `key` and its value from the map.
			 *
			 * @private
			 * @name delete
			 * @memberOf MapCache
			 * @param {string} key The key of the value to remove.
			 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
			 */
			function mapCacheDelete(key) {
			  var result = getMapData(this, key)['delete'](key);
			  this.size -= result ? 1 : 0;
			  return result;
			}
			
			module.exports = mapCacheDelete;
		},		// _getMapData.js
		function(__inner_require__, exports, module){
			var isKeyable = __inner_require__(11 /*_isKeyable.js*/);
			
			/**
			 * Gets the data for `map`.
			 *
			 * @private
			 * @param {Object} map The map to query.
			 * @param {string} key The reference key.
			 * @returns {*} Returns the map data.
			 */
			function getMapData(map, key) {
			  var data = map.__data__;
			  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
			}
			
			module.exports = getMapData;
		},		// _isKeyable.js
		function(__inner_require__, exports, module){
			/**
			 * Checks if `value` is suitable for use as unique object key.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
			 */
			function isKeyable(value) {
			  var type = typeof value === 'undefined' ? 'undefined' : babelHelpers.typeof(value);
			  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
			}
			
			module.exports = isKeyable;
		},		// _mapCacheGet.js
		function(__inner_require__, exports, module){
			var getMapData = __inner_require__(10 /*_getMapData.js*/);
			
			/**
			 * Gets the map value for `key`.
			 *
			 * @private
			 * @name get
			 * @memberOf MapCache
			 * @param {string} key The key of the value to get.
			 * @returns {*} Returns the entry value.
			 */
			function mapCacheGet(key) {
			  return getMapData(this, key).get(key);
			}
			
			module.exports = mapCacheGet;
		},		// _mapCacheHas.js
		function(__inner_require__, exports, module){
			var getMapData = __inner_require__(10 /*_getMapData.js*/);
			
			/**
			 * Checks if a map value for `key` exists.
			 *
			 * @private
			 * @name has
			 * @memberOf MapCache
			 * @param {string} key The key of the entry to check.
			 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
			 */
			function mapCacheHas(key) {
			  return getMapData(this, key).has(key);
			}
			
			module.exports = mapCacheHas;
		},		// _mapCacheSet.js
		function(__inner_require__, exports, module){
			var getMapData = __inner_require__(10 /*_getMapData.js*/);
			
			/**
			 * Sets the map `key` to `value`.
			 *
			 * @private
			 * @name set
			 * @memberOf MapCache
			 * @param {string} key The key of the value to set.
			 * @param {*} value The value to set.
			 * @returns {Object} Returns the map cache instance.
			 */
			function mapCacheSet(key, value) {
			  var data = getMapData(this, key),
			      size = data.size;
			
			  data.set(key, value);
			  this.size += data.size == size ? 0 : 1;
			  return this;
			}
			
			module.exports = mapCacheSet;
		}
	];
});