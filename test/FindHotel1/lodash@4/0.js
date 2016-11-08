// lodash@4/find.js
loader.define("lodash@4", "find.js", "0", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// find.js
		function(__inner_require__, exports, module){
			var createFind = __inner_require__(1 /*_createFind.js*/),
			    findIndex = __inner_require__(46 /*findIndex.js*/);
			
			/**
			 * Iterates over elements of `collection`, returning the first element
			 * `predicate` returns truthy for. The predicate is invoked with three
			 * arguments: (value, index|key, collection).
			 *
			 * @static
			 * @memberOf _
			 * @since 0.1.0
			 * @category Collection
			 * @param {Array|Object} collection The collection to search.
			 * @param {Array|Function|Object|string} [predicate=_.identity]
			 *  The function invoked per iteration.
			 * @param {number} [fromIndex=0] The index to search from.
			 * @returns {*} Returns the matched element, else `undefined`.
			 * @example
			 *
			 * var users = [
			 *   { 'user': 'barney',  'age': 36, 'active': true },
			 *   { 'user': 'fred',    'age': 40, 'active': false },
			 *   { 'user': 'pebbles', 'age': 1,  'active': true }
			 * ];
			 *
			 * _.find(users, function(o) { return o.age < 40; });
			 * // => object for 'barney'
			 *
			 * // The `_.matches` iteratee shorthand.
			 * _.find(users, { 'age': 1, 'active': true });
			 * // => object for 'pebbles'
			 *
			 * // The `_.matchesProperty` iteratee shorthand.
			 * _.find(users, ['active', false]);
			 * // => object for 'fred'
			 *
			 * // The `_.property` iteratee shorthand.
			 * _.find(users, 'active');
			 * // => object for 'barney'
			 */
			var find = createFind(findIndex);
			
			module.exports = find;
		},
		// _createFind.js
		function(__inner_require__, exports, module){
			var baseIteratee = __inner_require__(2 /*_baseIteratee.js*/),
			    isArrayLike = require('lodash@4/isArrayLike.js'),
			    keys = require('lodash@4/keys.js');
			
			/**
			 * Creates a `_.find` or `_.findLast` function.
			 *
			 * @private
			 * @param {Function} findIndexFunc The function to find the collection index.
			 * @returns {Function} Returns the new find function.
			 */
			function createFind(findIndexFunc) {
			  return function (collection, predicate, fromIndex) {
			    var iterable = Object(collection);
			    predicate = baseIteratee(predicate, 3);
			    if (!isArrayLike(collection)) {
			      var props = keys(collection);
			    }
			    var index = findIndexFunc(props || collection, function (value, key) {
			      if (props) {
			        key = value;
			        value = iterable[key];
			      }
			      return predicate(value, key, iterable);
			    }, fromIndex);
			    return index > -1 ? collection[props ? props[index] : index] : undefined;
			  };
			}
			
			module.exports = createFind;
		},
		// _baseIteratee.js
		function(__inner_require__, exports, module){
			var baseMatches = __inner_require__(3 /*_baseMatches.js*/),
			    baseMatchesProperty = __inner_require__(30 /*_baseMatchesProperty.js*/),
			    identity = __inner_require__(43 /*identity.js*/),
			    isArray = require('lodash@4/isArray.js'),
			    property = __inner_require__(44 /*property.js*/);
			
			/**
			 * The base implementation of `_.iteratee`.
			 *
			 * @private
			 * @param {*} [value=_.identity] The value to convert to an iteratee.
			 * @returns {Function} Returns the iteratee.
			 */
			function baseIteratee(value) {
			  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
			  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
			  if (typeof value == 'function') {
			    return value;
			  }
			  if (value == null) {
			    return identity;
			  }
			  if ((typeof value === 'undefined' ? 'undefined' : babelHelpers.typeof(value)) == 'object') {
			    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
			  }
			  return property(value);
			}
			
			module.exports = baseIteratee;
		},
		// _baseMatches.js
		function(__inner_require__, exports, module){
			var baseIsMatch = __inner_require__(4 /*_baseIsMatch.js*/),
			    getMatchData = __inner_require__(27 /*_getMatchData.js*/),
			    matchesStrictComparable = __inner_require__(29 /*_matchesStrictComparable.js*/);
			
			/**
			 * The base implementation of `_.matches` which doesn't clone `source`.
			 *
			 * @private
			 * @param {Object} source The object of property values to match.
			 * @returns {Function} Returns the new spec function.
			 */
			function baseMatches(source) {
			  var matchData = getMatchData(source);
			  if (matchData.length == 1 && matchData[0][2]) {
			    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
			  }
			  return function (object) {
			    return object === source || baseIsMatch(object, source, matchData);
			  };
			}
			
			module.exports = baseMatches;
		},
		// _baseIsMatch.js
		function(__inner_require__, exports, module){
			var Stack = __inner_require__(5 /*_Stack.js*/),
			    baseIsEqual = __inner_require__(11 /*_baseIsEqual.js*/);
			
			/** Used to compose bitmasks for comparison styles. */
			var UNORDERED_COMPARE_FLAG = 1,
			    PARTIAL_COMPARE_FLAG = 2;
			
			/**
			 * The base implementation of `_.isMatch` without support for iteratee shorthands.
			 *
			 * @private
			 * @param {Object} object The object to inspect.
			 * @param {Object} source The object of property values to match.
			 * @param {Array} matchData The property names, values, and compare flags to match.
			 * @param {Function} [customizer] The function to customize comparisons.
			 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
			 */
			function baseIsMatch(object, source, matchData, customizer) {
			  var index = matchData.length,
			      length = index,
			      noCustomizer = !customizer;
			
			  if (object == null) {
			    return !length;
			  }
			  object = Object(object);
			  while (index--) {
			    var data = matchData[index];
			    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
			      return false;
			    }
			  }
			  while (++index < length) {
			    data = matchData[index];
			    var key = data[0],
			        objValue = object[key],
			        srcValue = data[1];
			
			    if (noCustomizer && data[2]) {
			      if (objValue === undefined && !(key in object)) {
			        return false;
			      }
			    } else {
			      var stack = new Stack();
			      if (customizer) {
			        var result = customizer(objValue, srcValue, key, object, source, stack);
			      }
			      if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack) : result)) {
			        return false;
			      }
			    }
			  }
			  return true;
			}
			
			module.exports = baseIsMatch;
		},
		// _Stack.js
		function(__inner_require__, exports, module){
			var ListCache = require('lodash@4/_ListCache.js'),
			    stackClear = __inner_require__(6 /*_stackClear.js*/),
			    stackDelete = __inner_require__(7 /*_stackDelete.js*/),
			    stackGet = __inner_require__(8 /*_stackGet.js*/),
			    stackHas = __inner_require__(9 /*_stackHas.js*/),
			    stackSet = __inner_require__(10 /*_stackSet.js*/);
			
			/**
			 * Creates a stack cache object to store key-value pairs.
			 *
			 * @private
			 * @constructor
			 * @param {Array} [entries] The key-value pairs to cache.
			 */
			function Stack(entries) {
			  this.__data__ = new ListCache(entries);
			}
			
			// Add methods to `Stack`.
			Stack.prototype.clear = stackClear;
			Stack.prototype['delete'] = stackDelete;
			Stack.prototype.get = stackGet;
			Stack.prototype.has = stackHas;
			Stack.prototype.set = stackSet;
			
			module.exports = Stack;
		},
		// _stackClear.js
		function(__inner_require__, exports, module){
			var ListCache = require('lodash@4/_ListCache.js');
			
			/**
			 * Removes all key-value entries from the stack.
			 *
			 * @private
			 * @name clear
			 * @memberOf Stack
			 */
			function stackClear() {
			  this.__data__ = new ListCache();
			}
			
			module.exports = stackClear;
		},
		// _stackDelete.js
		function(__inner_require__, exports, module){
			/**
			 * Removes `key` and its value from the stack.
			 *
			 * @private
			 * @name delete
			 * @memberOf Stack
			 * @param {string} key The key of the value to remove.
			 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
			 */
			function stackDelete(key) {
			  return this.__data__['delete'](key);
			}
			
			module.exports = stackDelete;
		},
		// _stackGet.js
		function(__inner_require__, exports, module){
			/**
			 * Gets the stack value for `key`.
			 *
			 * @private
			 * @name get
			 * @memberOf Stack
			 * @param {string} key The key of the value to get.
			 * @returns {*} Returns the entry value.
			 */
			function stackGet(key) {
			  return this.__data__.get(key);
			}
			
			module.exports = stackGet;
		},
		// _stackHas.js
		function(__inner_require__, exports, module){
			/**
			 * Checks if a stack value for `key` exists.
			 *
			 * @private
			 * @name has
			 * @memberOf Stack
			 * @param {string} key The key of the entry to check.
			 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
			 */
			function stackHas(key) {
			  return this.__data__.has(key);
			}
			
			module.exports = stackHas;
		},
		// _stackSet.js
		function(__inner_require__, exports, module){
			var ListCache = require('lodash@4/_ListCache.js'),
			    MapCache = require('lodash@4/_MapCache.js');
			
			/** Used as the size to enable large array optimizations. */
			var LARGE_ARRAY_SIZE = 200;
			
			/**
			 * Sets the stack `key` to `value`.
			 *
			 * @private
			 * @name set
			 * @memberOf Stack
			 * @param {string} key The key of the value to set.
			 * @param {*} value The value to set.
			 * @returns {Object} Returns the stack cache instance.
			 */
			function stackSet(key, value) {
			  var cache = this.__data__;
			  if (cache instanceof ListCache && cache.__data__.length == LARGE_ARRAY_SIZE) {
			    cache = this.__data__ = new MapCache(cache.__data__);
			  }
			  cache.set(key, value);
			  return this;
			}
			
			module.exports = stackSet;
		},
		// _baseIsEqual.js
		function(__inner_require__, exports, module){
			var baseIsEqualDeep = __inner_require__(12 /*_baseIsEqualDeep.js*/),
			    isObject = require('lodash@4/isObject.js'),
			    isObjectLike = require('lodash@4/isObjectLike.js');
			
			/**
			 * The base implementation of `_.isEqual` which supports partial comparisons
			 * and tracks traversed objects.
			 *
			 * @private
			 * @param {*} value The value to compare.
			 * @param {*} other The other value to compare.
			 * @param {Function} [customizer] The function to customize comparisons.
			 * @param {boolean} [bitmask] The bitmask of comparison flags.
			 *  The bitmask may be composed of the following flags:
			 *     1 - Unordered comparison
			 *     2 - Partial comparison
			 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
			 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
			 */
			function baseIsEqual(value, other, customizer, bitmask, stack) {
			  if (value === other) {
			    return true;
			  }
			  if (value == null || other == null || !isObject(value) && !isObjectLike(other)) {
			    return value !== value && other !== other;
			  }
			  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
			}
			
			module.exports = baseIsEqual;
		},
		// _baseIsEqualDeep.js
		function(__inner_require__, exports, module){
			var Stack = __inner_require__(5 /*_Stack.js*/),
			    equalArrays = __inner_require__(13 /*_equalArrays.js*/),
			    equalByTag = __inner_require__(15 /*_equalByTag.js*/),
			    equalObjects = __inner_require__(20 /*_equalObjects.js*/),
			    getTag = __inner_require__(21 /*_getTag.js*/),
			    isArray = require('lodash@4/isArray.js'),
			    isHostObject = require('lodash@4/_isHostObject.js'),
			    isTypedArray = __inner_require__(26 /*isTypedArray.js*/);
			
			/** Used to compose bitmasks for comparison styles. */
			var PARTIAL_COMPARE_FLAG = 2;
			
			/** `Object#toString` result references. */
			var argsTag = '[object Arguments]',
			    arrayTag = '[object Array]',
			    objectTag = '[object Object]';
			
			/** Used for built-in method references. */
			var objectProto = Object.prototype;
			
			/** Used to check objects for own properties. */
			var hasOwnProperty = objectProto.hasOwnProperty;
			
			/**
			 * A specialized version of `baseIsEqual` for arrays and objects which performs
			 * deep comparisons and tracks traversed objects enabling objects with circular
			 * references to be compared.
			 *
			 * @private
			 * @param {Object} object The object to compare.
			 * @param {Object} other The other object to compare.
			 * @param {Function} equalFunc The function to determine equivalents of values.
			 * @param {Function} [customizer] The function to customize comparisons.
			 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
			 *  for more details.
			 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
			 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
			 */
			function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
			  var objIsArr = isArray(object),
			      othIsArr = isArray(other),
			      objTag = arrayTag,
			      othTag = arrayTag;
			
			  if (!objIsArr) {
			    objTag = getTag(object);
			    objTag = objTag == argsTag ? objectTag : objTag;
			  }
			  if (!othIsArr) {
			    othTag = getTag(other);
			    othTag = othTag == argsTag ? objectTag : othTag;
			  }
			  var objIsObj = objTag == objectTag && !isHostObject(object),
			      othIsObj = othTag == objectTag && !isHostObject(other),
			      isSameTag = objTag == othTag;
			
			  if (isSameTag && !objIsObj) {
			    stack || (stack = new Stack());
			    return objIsArr || isTypedArray(object) ? equalArrays(object, other, equalFunc, customizer, bitmask, stack) : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
			  }
			  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
			    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
			        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
			
			    if (objIsWrapped || othIsWrapped) {
			      var objUnwrapped = objIsWrapped ? object.value() : object,
			          othUnwrapped = othIsWrapped ? other.value() : other;
			
			      stack || (stack = new Stack());
			      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
			    }
			  }
			  if (!isSameTag) {
			    return false;
			  }
			  stack || (stack = new Stack());
			  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
			}
			
			module.exports = baseIsEqualDeep;
		},
		// _equalArrays.js
		function(__inner_require__, exports, module){
			var SetCache = require('lodash@4/_SetCache.js'),
			    arraySome = __inner_require__(14 /*_arraySome.js*/);
			
			/** Used to compose bitmasks for comparison styles. */
			var UNORDERED_COMPARE_FLAG = 1,
			    PARTIAL_COMPARE_FLAG = 2;
			
			/**
			 * A specialized version of `baseIsEqualDeep` for arrays with support for
			 * partial deep comparisons.
			 *
			 * @private
			 * @param {Array} array The array to compare.
			 * @param {Array} other The other array to compare.
			 * @param {Function} equalFunc The function to determine equivalents of values.
			 * @param {Function} customizer The function to customize comparisons.
			 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
			 *  for more details.
			 * @param {Object} stack Tracks traversed `array` and `other` objects.
			 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
			 */
			function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
			  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
			      arrLength = array.length,
			      othLength = other.length;
			
			  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
			    return false;
			  }
			  // Assume cyclic values are equal.
			  var stacked = stack.get(array);
			  if (stacked) {
			    return stacked == other;
			  }
			  var index = -1,
			      result = true,
			      seen = bitmask & UNORDERED_COMPARE_FLAG ? new SetCache() : undefined;
			
			  stack.set(array, other);
			
			  // Ignore non-index properties.
			  while (++index < arrLength) {
			    var arrValue = array[index],
			        othValue = other[index];
			
			    if (customizer) {
			      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
			    }
			    if (compared !== undefined) {
			      if (compared) {
			        continue;
			      }
			      result = false;
			      break;
			    }
			    // Recursively compare arrays (susceptible to call stack limits).
			    if (seen) {
			      if (!arraySome(other, function (othValue, othIndex) {
			        if (!seen.has(othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
			          return seen.add(othIndex);
			        }
			      })) {
			        result = false;
			        break;
			      }
			    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
			      result = false;
			      break;
			    }
			  }
			  stack['delete'](array);
			  return result;
			}
			
			module.exports = equalArrays;
		},
		// _arraySome.js
		function(__inner_require__, exports, module){
			/**
			 * A specialized version of `_.some` for arrays without support for iteratee
			 * shorthands.
			 *
			 * @private
			 * @param {Array} [array] The array to iterate over.
			 * @param {Function} predicate The function invoked per iteration.
			 * @returns {boolean} Returns `true` if any element passes the predicate check,
			 *  else `false`.
			 */
			function arraySome(array, predicate) {
			  var index = -1,
			      length = array ? array.length : 0;
			
			  while (++index < length) {
			    if (predicate(array[index], index, array)) {
			      return true;
			    }
			  }
			  return false;
			}
			
			module.exports = arraySome;
		},
		// _equalByTag.js
		function(__inner_require__, exports, module){
			var _Symbol = __inner_require__(16 /*_Symbol.js*/),
			    Uint8Array = __inner_require__(17 /*_Uint8Array.js*/),
			    equalArrays = __inner_require__(13 /*_equalArrays.js*/),
			    mapToArray = __inner_require__(18 /*_mapToArray.js*/),
			    setToArray = __inner_require__(19 /*_setToArray.js*/);
			
			/** Used to compose bitmasks for comparison styles. */
			var UNORDERED_COMPARE_FLAG = 1,
			    PARTIAL_COMPARE_FLAG = 2;
			
			/** `Object#toString` result references. */
			var boolTag = '[object Boolean]',
			    dateTag = '[object Date]',
			    errorTag = '[object Error]',
			    mapTag = '[object Map]',
			    numberTag = '[object Number]',
			    regexpTag = '[object RegExp]',
			    setTag = '[object Set]',
			    stringTag = '[object String]',
			    symbolTag = '[object Symbol]';
			
			var arrayBufferTag = '[object ArrayBuffer]',
			    dataViewTag = '[object DataView]';
			
			/** Used to convert symbols to primitives and strings. */
			var symbolProto = _Symbol ? _Symbol.prototype : undefined,
			    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
			
			/**
			 * A specialized version of `baseIsEqualDeep` for comparing objects of
			 * the same `toStringTag`.
			 *
			 * **Note:** This function only supports comparing values with tags of
			 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
			 *
			 * @private
			 * @param {Object} object The object to compare.
			 * @param {Object} other The other object to compare.
			 * @param {string} tag The `toStringTag` of the objects to compare.
			 * @param {Function} equalFunc The function to determine equivalents of values.
			 * @param {Function} customizer The function to customize comparisons.
			 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
			 *  for more details.
			 * @param {Object} stack Tracks traversed `object` and `other` objects.
			 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
			 */
			function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
			  switch (tag) {
			    case dataViewTag:
			      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
			        return false;
			      }
			      object = object.buffer;
			      other = other.buffer;
			
			    case arrayBufferTag:
			      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
			        return false;
			      }
			      return true;
			
			    case boolTag:
			    case dateTag:
			      // Coerce dates and booleans to numbers, dates to milliseconds and
			      // booleans to `1` or `0` treating invalid dates coerced to `NaN` as
			      // not equal.
			      return +object == +other;
			
			    case errorTag:
			      return object.name == other.name && object.message == other.message;
			
			    case numberTag:
			      // Treat `NaN` vs. `NaN` as equal.
			      return object != +object ? other != +other : object == +other;
			
			    case regexpTag:
			    case stringTag:
			      // Coerce regexes to strings and treat strings, primitives and objects,
			      // as equal. See http://www.ecma-international.org/ecma-262/6.0/#sec-regexp.prototype.tostring
			      // for more details.
			      return object == other + '';
			
			    case mapTag:
			      var convert = mapToArray;
			
			    case setTag:
			      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
			      convert || (convert = setToArray);
			
			      if (object.size != other.size && !isPartial) {
			        return false;
			      }
			      // Assume cyclic values are equal.
			      var stacked = stack.get(object);
			      if (stacked) {
			        return stacked == other;
			      }
			      bitmask |= UNORDERED_COMPARE_FLAG;
			      stack.set(object, other);
			
			      // Recursively compare objects (susceptible to call stack limits).
			      return equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
			
			    case symbolTag:
			      if (symbolValueOf) {
			        return symbolValueOf.call(object) == symbolValueOf.call(other);
			      }
			  }
			  return false;
			}
			
			module.exports = equalByTag;
		},
		// _Symbol.js
		function(__inner_require__, exports, module){
			var root = require('lodash@4/_root.js');
			
			/** Built-in value references. */
			var _Symbol = root.Symbol;
			
			module.exports = _Symbol;
		},
		// _Uint8Array.js
		function(__inner_require__, exports, module){
			var root = require('lodash@4/_root.js');
			
			/** Built-in value references. */
			var Uint8Array = root.Uint8Array;
			
			module.exports = Uint8Array;
		},
		// _mapToArray.js
		function(__inner_require__, exports, module){
			/**
			 * Converts `map` to its key-value pairs.
			 *
			 * @private
			 * @param {Object} map The map to convert.
			 * @returns {Array} Returns the key-value pairs.
			 */
			function mapToArray(map) {
			  var index = -1,
			      result = Array(map.size);
			
			  map.forEach(function (value, key) {
			    result[++index] = [key, value];
			  });
			  return result;
			}
			
			module.exports = mapToArray;
		},
		// _setToArray.js
		function(__inner_require__, exports, module){
			/**
			 * Converts `set` to an array of its values.
			 *
			 * @private
			 * @param {Object} set The set to convert.
			 * @returns {Array} Returns the values.
			 */
			function setToArray(set) {
			  var index = -1,
			      result = Array(set.size);
			
			  set.forEach(function (value) {
			    result[++index] = value;
			  });
			  return result;
			}
			
			module.exports = setToArray;
		},
		// _equalObjects.js
		function(__inner_require__, exports, module){
			var baseHas = require('lodash@4/_baseHas.js'),
			    keys = require('lodash@4/keys.js');
			
			/** Used to compose bitmasks for comparison styles. */
			var PARTIAL_COMPARE_FLAG = 2;
			
			/**
			 * A specialized version of `baseIsEqualDeep` for objects with support for
			 * partial deep comparisons.
			 *
			 * @private
			 * @param {Object} object The object to compare.
			 * @param {Object} other The other object to compare.
			 * @param {Function} equalFunc The function to determine equivalents of values.
			 * @param {Function} customizer The function to customize comparisons.
			 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
			 *  for more details.
			 * @param {Object} stack Tracks traversed `object` and `other` objects.
			 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
			 */
			function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
			  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
			      objProps = keys(object),
			      objLength = objProps.length,
			      othProps = keys(other),
			      othLength = othProps.length;
			
			  if (objLength != othLength && !isPartial) {
			    return false;
			  }
			  var index = objLength;
			  while (index--) {
			    var key = objProps[index];
			    if (!(isPartial ? key in other : baseHas(other, key))) {
			      return false;
			    }
			  }
			  // Assume cyclic values are equal.
			  var stacked = stack.get(object);
			  if (stacked) {
			    return stacked == other;
			  }
			  var result = true;
			  stack.set(object, other);
			
			  var skipCtor = isPartial;
			  while (++index < objLength) {
			    key = objProps[index];
			    var objValue = object[key],
			        othValue = other[key];
			
			    if (customizer) {
			      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
			    }
			    // Recursively compare objects (susceptible to call stack limits).
			    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack) : compared)) {
			      result = false;
			      break;
			    }
			    skipCtor || (skipCtor = key == 'constructor');
			  }
			  if (result && !skipCtor) {
			    var objCtor = object.constructor,
			        othCtor = other.constructor;
			
			    // Non `Object` object instances with different constructors are not equal.
			    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
			      result = false;
			    }
			  }
			  stack['delete'](object);
			  return result;
			}
			
			module.exports = equalObjects;
		},
		// _getTag.js
		function(__inner_require__, exports, module){
			var DataView = __inner_require__(22 /*_DataView.js*/),
			    Map = require('lodash@4/_Map.js'),
			    Promise = __inner_require__(23 /*_Promise.js*/),
			    Set = __inner_require__(24 /*_Set.js*/),
			    WeakMap = __inner_require__(25 /*_WeakMap.js*/),
			    toSource = require('lodash@4/_toSource.js');
			
			/** `Object#toString` result references. */
			var mapTag = '[object Map]',
			    objectTag = '[object Object]',
			    promiseTag = '[object Promise]',
			    setTag = '[object Set]',
			    weakMapTag = '[object WeakMap]';
			
			var dataViewTag = '[object DataView]';
			
			/** Used for built-in method references. */
			var objectProto = Object.prototype;
			
			/**
			 * Used to resolve the
			 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
			 * of values.
			 */
			var objectToString = objectProto.toString;
			
			/** Used to detect maps, sets, and weakmaps. */
			var dataViewCtorString = toSource(DataView),
			    mapCtorString = toSource(Map),
			    promiseCtorString = toSource(Promise),
			    setCtorString = toSource(Set),
			    weakMapCtorString = toSource(WeakMap);
			
			/**
			 * Gets the `toStringTag` of `value`.
			 *
			 * @private
			 * @param {*} value The value to query.
			 * @returns {string} Returns the `toStringTag`.
			 */
			function getTag(value) {
			  return objectToString.call(value);
			}
			
			// Fallback for data views, maps, sets, and weak maps in IE 11,
			// for data views in Edge, and promises in Node.js.
			if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
			  getTag = function getTag(value) {
			    var result = objectToString.call(value),
			        Ctor = result == objectTag ? value.constructor : undefined,
			        ctorString = Ctor ? toSource(Ctor) : undefined;
			
			    if (ctorString) {
			      switch (ctorString) {
			        case dataViewCtorString:
			          return dataViewTag;
			        case mapCtorString:
			          return mapTag;
			        case promiseCtorString:
			          return promiseTag;
			        case setCtorString:
			          return setTag;
			        case weakMapCtorString:
			          return weakMapTag;
			      }
			    }
			    return result;
			  };
			}
			
			module.exports = getTag;
		},
		// _DataView.js
		function(__inner_require__, exports, module){
			var getNative = require('lodash@4/_getNative.js'),
			    root = require('lodash@4/_root.js');
			
			/* Built-in method references that are verified to be native. */
			var DataView = getNative(root, 'DataView');
			
			module.exports = DataView;
		},
		// _Promise.js
		function(__inner_require__, exports, module){
			var getNative = require('lodash@4/_getNative.js'),
			    root = require('lodash@4/_root.js');
			
			/* Built-in method references that are verified to be native. */
			var Promise = getNative(root, 'Promise');
			
			module.exports = Promise;
		},
		// _Set.js
		function(__inner_require__, exports, module){
			var getNative = require('lodash@4/_getNative.js'),
			    root = require('lodash@4/_root.js');
			
			/* Built-in method references that are verified to be native. */
			var Set = getNative(root, 'Set');
			
			module.exports = Set;
		},
		// _WeakMap.js
		function(__inner_require__, exports, module){
			var getNative = require('lodash@4/_getNative.js'),
			    root = require('lodash@4/_root.js');
			
			/* Built-in method references that are verified to be native. */
			var WeakMap = getNative(root, 'WeakMap');
			
			module.exports = WeakMap;
		},
		// isTypedArray.js
		function(__inner_require__, exports, module){
			var isLength = require('lodash@4/isLength.js'),
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
			
			/** Used for built-in method references. */
			var objectProto = Object.prototype;
			
			/**
			 * Used to resolve the
			 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
			 * of values.
			 */
			var objectToString = objectProto.toString;
			
			/**
			 * Checks if `value` is classified as a typed array.
			 *
			 * @static
			 * @memberOf _
			 * @since 3.0.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is correctly classified,
			 *  else `false`.
			 * @example
			 *
			 * _.isTypedArray(new Uint8Array);
			 * // => true
			 *
			 * _.isTypedArray([]);
			 * // => false
			 */
			function isTypedArray(value) {
			    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
			}
			
			module.exports = isTypedArray;
		},
		// _getMatchData.js
		function(__inner_require__, exports, module){
			var isStrictComparable = __inner_require__(28 /*_isStrictComparable.js*/),
			    keys = require('lodash@4/keys.js');
			
			/**
			 * Gets the property names, values, and compare flags of `object`.
			 *
			 * @private
			 * @param {Object} object The object to query.
			 * @returns {Array} Returns the match data of `object`.
			 */
			function getMatchData(object) {
			    var result = keys(object),
			        length = result.length;
			
			    while (length--) {
			        var key = result[length],
			            value = object[key];
			
			        result[length] = [key, value, isStrictComparable(value)];
			    }
			    return result;
			}
			
			module.exports = getMatchData;
		},
		// _isStrictComparable.js
		function(__inner_require__, exports, module){
			var isObject = require('lodash@4/isObject.js');
			
			/**
			 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` if suitable for strict
			 *  equality comparisons, else `false`.
			 */
			function isStrictComparable(value) {
			  return value === value && !isObject(value);
			}
			
			module.exports = isStrictComparable;
		},
		// _matchesStrictComparable.js
		function(__inner_require__, exports, module){
			/**
			 * A specialized version of `matchesProperty` for source values suitable
			 * for strict equality comparisons, i.e. `===`.
			 *
			 * @private
			 * @param {string} key The key of the property to get.
			 * @param {*} srcValue The value to match.
			 * @returns {Function} Returns the new spec function.
			 */
			function matchesStrictComparable(key, srcValue) {
			  return function (object) {
			    if (object == null) {
			      return false;
			    }
			    return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
			  };
			}
			
			module.exports = matchesStrictComparable;
		},
		// _baseMatchesProperty.js
		function(__inner_require__, exports, module){
			var baseIsEqual = __inner_require__(11 /*_baseIsEqual.js*/),
			    get = __inner_require__(31 /*get.js*/),
			    hasIn = __inner_require__(40 /*hasIn.js*/),
			    isKey = __inner_require__(38 /*_isKey.js*/),
			    isStrictComparable = __inner_require__(28 /*_isStrictComparable.js*/),
			    matchesStrictComparable = __inner_require__(29 /*_matchesStrictComparable.js*/),
			    toKey = __inner_require__(39 /*_toKey.js*/);
			
			/** Used to compose bitmasks for comparison styles. */
			var UNORDERED_COMPARE_FLAG = 1,
			    PARTIAL_COMPARE_FLAG = 2;
			
			/**
			 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
			 *
			 * @private
			 * @param {string} path The path of the property to get.
			 * @param {*} srcValue The value to match.
			 * @returns {Function} Returns the new spec function.
			 */
			function baseMatchesProperty(path, srcValue) {
			  if (isKey(path) && isStrictComparable(srcValue)) {
			    return matchesStrictComparable(toKey(path), srcValue);
			  }
			  return function (object) {
			    var objValue = get(object, path);
			    return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
			  };
			}
			
			module.exports = baseMatchesProperty;
		},
		// get.js
		function(__inner_require__, exports, module){
			var baseGet = __inner_require__(32 /*_baseGet.js*/);
			
			/**
			 * Gets the value at `path` of `object`. If the resolved value is
			 * `undefined`, the `defaultValue` is used in its place.
			 *
			 * @static
			 * @memberOf _
			 * @since 3.7.0
			 * @category Object
			 * @param {Object} object The object to query.
			 * @param {Array|string} path The path of the property to get.
			 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
			 * @returns {*} Returns the resolved value.
			 * @example
			 *
			 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
			 *
			 * _.get(object, 'a[0].b.c');
			 * // => 3
			 *
			 * _.get(object, ['a', '0', 'b', 'c']);
			 * // => 3
			 *
			 * _.get(object, 'a.b.c', 'default');
			 * // => 'default'
			 */
			function get(object, path, defaultValue) {
			  var result = object == null ? undefined : baseGet(object, path);
			  return result === undefined ? defaultValue : result;
			}
			
			module.exports = get;
		},
		// _baseGet.js
		function(__inner_require__, exports, module){
			var castPath = __inner_require__(33 /*_castPath.js*/),
			    isKey = __inner_require__(38 /*_isKey.js*/),
			    toKey = __inner_require__(39 /*_toKey.js*/);
			
			/**
			 * The base implementation of `_.get` without support for default values.
			 *
			 * @private
			 * @param {Object} object The object to query.
			 * @param {Array|string} path The path of the property to get.
			 * @returns {*} Returns the resolved value.
			 */
			function baseGet(object, path) {
			  path = isKey(path, object) ? [path] : castPath(path);
			
			  var index = 0,
			      length = path.length;
			
			  while (object != null && index < length) {
			    object = object[toKey(path[index++])];
			  }
			  return index && index == length ? object : undefined;
			}
			
			module.exports = baseGet;
		},
		// _castPath.js
		function(__inner_require__, exports, module){
			var isArray = require('lodash@4/isArray.js'),
			    stringToPath = __inner_require__(34 /*_stringToPath.js*/);
			
			/**
			 * Casts `value` to a path array if it's not one.
			 *
			 * @private
			 * @param {*} value The value to inspect.
			 * @returns {Array} Returns the cast property path array.
			 */
			function castPath(value) {
			  return isArray(value) ? value : stringToPath(value);
			}
			
			module.exports = castPath;
		},
		// _stringToPath.js
		function(__inner_require__, exports, module){
			var memoize = __inner_require__(35 /*memoize.js*/),
			    toString = __inner_require__(36 /*toString.js*/);
			
			/** Used to match property names within property paths. */
			var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(\.|\[\])(?:\4|$))/g;
			
			/** Used to match backslashes in property paths. */
			var reEscapeChar = /\\(\\)?/g;
			
			/**
			 * Converts `string` to a property path array.
			 *
			 * @private
			 * @param {string} string The string to convert.
			 * @returns {Array} Returns the property path array.
			 */
			var stringToPath = memoize(function (string) {
			  var result = [];
			  toString(string).replace(rePropName, function (match, number, quote, string) {
			    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
			  });
			  return result;
			});
			
			module.exports = stringToPath;
		},
		// memoize.js
		function(__inner_require__, exports, module){
			var MapCache = require('lodash@4/_MapCache.js');
			
			/** Used as the `TypeError` message for "Functions" methods. */
			var FUNC_ERROR_TEXT = 'Expected a function';
			
			/**
			 * Creates a function that memoizes the result of `func`. If `resolver` is
			 * provided, it determines the cache key for storing the result based on the
			 * arguments provided to the memoized function. By default, the first argument
			 * provided to the memoized function is used as the map cache key. The `func`
			 * is invoked with the `this` binding of the memoized function.
			 *
			 * **Note:** The cache is exposed as the `cache` property on the memoized
			 * function. Its creation may be customized by replacing the `_.memoize.Cache`
			 * constructor with one whose instances implement the
			 * [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
			 * method interface of `delete`, `get`, `has`, and `set`.
			 *
			 * @static
			 * @memberOf _
			 * @since 0.1.0
			 * @category Function
			 * @param {Function} func The function to have its output memoized.
			 * @param {Function} [resolver] The function to resolve the cache key.
			 * @returns {Function} Returns the new memoized function.
			 * @example
			 *
			 * var object = { 'a': 1, 'b': 2 };
			 * var other = { 'c': 3, 'd': 4 };
			 *
			 * var values = _.memoize(_.values);
			 * values(object);
			 * // => [1, 2]
			 *
			 * values(other);
			 * // => [3, 4]
			 *
			 * object.a = 2;
			 * values(object);
			 * // => [1, 2]
			 *
			 * // Modify the result cache.
			 * values.cache.set(object, ['a', 'b']);
			 * values(object);
			 * // => ['a', 'b']
			 *
			 * // Replace `_.memoize.Cache`.
			 * _.memoize.Cache = WeakMap;
			 */
			function memoize(func, resolver) {
			  if (typeof func != 'function' || resolver && typeof resolver != 'function') {
			    throw new TypeError(FUNC_ERROR_TEXT);
			  }
			  var memoized = function memoized() {
			    var args = arguments,
			        key = resolver ? resolver.apply(this, args) : args[0],
			        cache = memoized.cache;
			
			    if (cache.has(key)) {
			      return cache.get(key);
			    }
			    var result = func.apply(this, args);
			    memoized.cache = cache.set(key, result);
			    return result;
			  };
			  memoized.cache = new (memoize.Cache || MapCache)();
			  return memoized;
			}
			
			// Assign cache to `_.memoize`.
			memoize.Cache = MapCache;
			
			module.exports = memoize;
		},
		// toString.js
		function(__inner_require__, exports, module){
			var baseToString = __inner_require__(37 /*_baseToString.js*/);
			
			/**
			 * Converts `value` to a string. An empty string is returned for `null`
			 * and `undefined` values. The sign of `-0` is preserved.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.0.0
			 * @category Lang
			 * @param {*} value The value to process.
			 * @returns {string} Returns the string.
			 * @example
			 *
			 * _.toString(null);
			 * // => ''
			 *
			 * _.toString(-0);
			 * // => '-0'
			 *
			 * _.toString([1, 2, 3]);
			 * // => '1,2,3'
			 */
			function toString(value) {
			  return value == null ? '' : baseToString(value);
			}
			
			module.exports = toString;
		},
		// _baseToString.js
		function(__inner_require__, exports, module){
			var _Symbol = __inner_require__(16 /*_Symbol.js*/),
			    isSymbol = require('lodash@4/isSymbol.js');
			
			/** Used as references for various `Number` constants. */
			var INFINITY = 1 / 0;
			
			/** Used to convert symbols to primitives and strings. */
			var symbolProto = _Symbol ? _Symbol.prototype : undefined,
			    symbolToString = symbolProto ? symbolProto.toString : undefined;
			
			/**
			 * The base implementation of `_.toString` which doesn't convert nullish
			 * values to empty strings.
			 *
			 * @private
			 * @param {*} value The value to process.
			 * @returns {string} Returns the string.
			 */
			function baseToString(value) {
			  // Exit early for strings to avoid a performance hit in some environments.
			  if (typeof value == 'string') {
			    return value;
			  }
			  if (isSymbol(value)) {
			    return symbolToString ? symbolToString.call(value) : '';
			  }
			  var result = value + '';
			  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
			}
			
			module.exports = baseToString;
		},
		// _isKey.js
		function(__inner_require__, exports, module){
			var isArray = require('lodash@4/isArray.js'),
			    isSymbol = require('lodash@4/isSymbol.js');
			
			/** Used to match property names within property paths. */
			var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
			    reIsPlainProp = /^\w*$/;
			
			/**
			 * Checks if `value` is a property name and not a property path.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @param {Object} [object] The object to query keys on.
			 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
			 */
			function isKey(value, object) {
			  if (isArray(value)) {
			    return false;
			  }
			  var type = typeof value === 'undefined' ? 'undefined' : babelHelpers.typeof(value);
			  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
			    return true;
			  }
			  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
			}
			
			module.exports = isKey;
		},
		// _toKey.js
		function(__inner_require__, exports, module){
			var isSymbol = require('lodash@4/isSymbol.js');
			
			/** Used as references for various `Number` constants. */
			var INFINITY = 1 / 0;
			
			/**
			 * Converts `value` to a string key if it's not a string or symbol.
			 *
			 * @private
			 * @param {*} value The value to inspect.
			 * @returns {string|symbol} Returns the key.
			 */
			function toKey(value) {
			  if (typeof value == 'string' || isSymbol(value)) {
			    return value;
			  }
			  var result = value + '';
			  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
			}
			
			module.exports = toKey;
		},
		// hasIn.js
		function(__inner_require__, exports, module){
			var baseHasIn = __inner_require__(41 /*_baseHasIn.js*/),
			    hasPath = __inner_require__(42 /*_hasPath.js*/);
			
			/**
			 * Checks if `path` is a direct or inherited property of `object`.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.0.0
			 * @category Object
			 * @param {Object} object The object to query.
			 * @param {Array|string} path The path to check.
			 * @returns {boolean} Returns `true` if `path` exists, else `false`.
			 * @example
			 *
			 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
			 *
			 * _.hasIn(object, 'a');
			 * // => true
			 *
			 * _.hasIn(object, 'a.b');
			 * // => true
			 *
			 * _.hasIn(object, ['a', 'b']);
			 * // => true
			 *
			 * _.hasIn(object, 'b');
			 * // => false
			 */
			function hasIn(object, path) {
			  return object != null && hasPath(object, path, baseHasIn);
			}
			
			module.exports = hasIn;
		},
		// _baseHasIn.js
		function(__inner_require__, exports, module){
			/**
			 * The base implementation of `_.hasIn` without support for deep paths.
			 *
			 * @private
			 * @param {Object} [object] The object to query.
			 * @param {Array|string} key The key to check.
			 * @returns {boolean} Returns `true` if `key` exists, else `false`.
			 */
			function baseHasIn(object, key) {
			  return object != null && key in Object(object);
			}
			
			module.exports = baseHasIn;
		},
		// _hasPath.js
		function(__inner_require__, exports, module){
			var castPath = __inner_require__(33 /*_castPath.js*/),
			    isArguments = require('lodash@4/isArguments.js'),
			    isArray = require('lodash@4/isArray.js'),
			    isIndex = require('lodash@4/_isIndex.js'),
			    isKey = __inner_require__(38 /*_isKey.js*/),
			    isLength = require('lodash@4/isLength.js'),
			    isString = require('lodash@4/isString.js'),
			    toKey = __inner_require__(39 /*_toKey.js*/);
			
			/**
			 * Checks if `path` exists on `object`.
			 *
			 * @private
			 * @param {Object} object The object to query.
			 * @param {Array|string} path The path to check.
			 * @param {Function} hasFunc The function to check properties.
			 * @returns {boolean} Returns `true` if `path` exists, else `false`.
			 */
			function hasPath(object, path, hasFunc) {
			  path = isKey(path, object) ? [path] : castPath(path);
			
			  var result,
			      index = -1,
			      length = path.length;
			
			  while (++index < length) {
			    var key = toKey(path[index]);
			    if (!(result = object != null && hasFunc(object, key))) {
			      break;
			    }
			    object = object[key];
			  }
			  if (result) {
			    return result;
			  }
			  var length = object ? object.length : 0;
			  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isString(object) || isArguments(object));
			}
			
			module.exports = hasPath;
		},
		// identity.js
		function(__inner_require__, exports, module){
			/**
			 * This method returns the first argument given to it.
			 *
			 * @static
			 * @since 0.1.0
			 * @memberOf _
			 * @category Util
			 * @param {*} value Any value.
			 * @returns {*} Returns `value`.
			 * @example
			 *
			 * var object = { 'user': 'fred' };
			 *
			 * console.log(_.identity(object) === object);
			 * // => true
			 */
			function identity(value) {
			  return value;
			}
			
			module.exports = identity;
		},
		// property.js
		function(__inner_require__, exports, module){
			var baseProperty = require('lodash@4/_baseProperty.js'),
			    basePropertyDeep = __inner_require__(45 /*_basePropertyDeep.js*/),
			    isKey = __inner_require__(38 /*_isKey.js*/),
			    toKey = __inner_require__(39 /*_toKey.js*/);
			
			/**
			 * Creates a function that returns the value at `path` of a given object.
			 *
			 * @static
			 * @memberOf _
			 * @since 2.4.0
			 * @category Util
			 * @param {Array|string} path The path of the property to get.
			 * @returns {Function} Returns the new accessor function.
			 * @example
			 *
			 * var objects = [
			 *   { 'a': { 'b': 2 } },
			 *   { 'a': { 'b': 1 } }
			 * ];
			 *
			 * _.map(objects, _.property('a.b'));
			 * // => [2, 1]
			 *
			 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
			 * // => [1, 2]
			 */
			function property(path) {
			  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
			}
			
			module.exports = property;
		},
		// _basePropertyDeep.js
		function(__inner_require__, exports, module){
			var baseGet = __inner_require__(32 /*_baseGet.js*/);
			
			/**
			 * A specialized version of `baseProperty` which supports deep paths.
			 *
			 * @private
			 * @param {Array|string} path The path of the property to get.
			 * @returns {Function} Returns the new accessor function.
			 */
			function basePropertyDeep(path) {
			  return function (object) {
			    return baseGet(object, path);
			  };
			}
			
			module.exports = basePropertyDeep;
		},
		// findIndex.js
		function(__inner_require__, exports, module){
			var baseFindIndex = __inner_require__(47 /*_baseFindIndex.js*/),
			    baseIteratee = __inner_require__(2 /*_baseIteratee.js*/),
			    toInteger = require('lodash@4/toInteger.js');
			
			/* Built-in method references for those with the same name as other `lodash` methods. */
			var nativeMax = Math.max;
			
			/**
			 * This method is like `_.find` except that it returns the index of the first
			 * element `predicate` returns truthy for instead of the element itself.
			 *
			 * @static
			 * @memberOf _
			 * @since 1.1.0
			 * @category Array
			 * @param {Array} array The array to search.
			 * @param {Array|Function|Object|string} [predicate=_.identity]
			 *  The function invoked per iteration.
			 * @param {number} [fromIndex=0] The index to search from.
			 * @returns {number} Returns the index of the found element, else `-1`.
			 * @example
			 *
			 * var users = [
			 *   { 'user': 'barney',  'active': false },
			 *   { 'user': 'fred',    'active': false },
			 *   { 'user': 'pebbles', 'active': true }
			 * ];
			 *
			 * _.findIndex(users, function(o) { return o.user == 'barney'; });
			 * // => 0
			 *
			 * // The `_.matches` iteratee shorthand.
			 * _.findIndex(users, { 'user': 'fred', 'active': false });
			 * // => 1
			 *
			 * // The `_.matchesProperty` iteratee shorthand.
			 * _.findIndex(users, ['active', false]);
			 * // => 0
			 *
			 * // The `_.property` iteratee shorthand.
			 * _.findIndex(users, 'active');
			 * // => 2
			 */
			function findIndex(array, predicate, fromIndex) {
			  var length = array ? array.length : 0;
			  if (!length) {
			    return -1;
			  }
			  var index = fromIndex == null ? 0 : toInteger(fromIndex);
			  if (index < 0) {
			    index = nativeMax(length + index, 0);
			  }
			  return baseFindIndex(array, baseIteratee(predicate, 3), index);
			}
			
			module.exports = findIndex;
		},
		// _baseFindIndex.js
		function(__inner_require__, exports, module){
			/**
			 * The base implementation of `_.findIndex` and `_.findLastIndex` without
			 * support for iteratee shorthands.
			 *
			 * @private
			 * @param {Array} array The array to search.
			 * @param {Function} predicate The function invoked per iteration.
			 * @param {number} fromIndex The index to search from.
			 * @param {boolean} [fromRight] Specify iterating from right to left.
			 * @returns {number} Returns the index of the matched value, else `-1`.
			 */
			function baseFindIndex(array, predicate, fromIndex, fromRight) {
			  var length = array.length,
			      index = fromIndex + (fromRight ? 1 : -1);
			
			  while (fromRight ? index-- : ++index < length) {
			    if (predicate(array[index], index, array)) {
			      return index;
			    }
			  }
			  return -1;
			}
			
			module.exports = baseFindIndex;
		}
	];
});