loader.define("lodash@4/difference.js", ["lodash@4/_baseRest.js", "lodash@4/_SetCache.js", "lodash@4/_arrayMap.js", "lodash@4/_baseUnary.js", "lodash@4/_cacheHas.js", "lodash@4/_baseFindIndex.js", "lodash@4/_Symbol.js", "lodash@4/isArguments.js", "lodash@4/isArray.js", "lodash@4/isArrayLike.js", "lodash@4/isObjectLike.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// difference.js
		function(__inner_require__, exports, module){
			var baseDifference = __inner_require__(1 /*_baseDifference.js*/),
			    baseFlatten = __inner_require__(7 /*_baseFlatten.js*/),
			    baseRest = require('lodash@4/_baseRest.js'),
			    isArrayLikeObject = __inner_require__(10 /*isArrayLikeObject.js*/);
			
			/**
			 * Creates an array of `array` values not included in the other given arrays
			 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
			 * for equality comparisons. The order and references of result values are
			 * determined by the first array.
			 *
			 * **Note:** Unlike `_.pullAll`, this method returns a new array.
			 *
			 * @static
			 * @memberOf _
			 * @since 0.1.0
			 * @category Array
			 * @param {Array} array The array to inspect.
			 * @param {...Array} [values] The values to exclude.
			 * @returns {Array} Returns the new array of filtered values.
			 * @see _.without, _.xor
			 * @example
			 *
			 * _.difference([2, 1], [2, 3]);
			 * // => [1]
			 */
			var difference = baseRest(function (array, values) {
			    return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : [];
			});
			
			module.exports = difference;
		},		// _baseDifference.js
		function(__inner_require__, exports, module){
			var SetCache = require('lodash@4/_SetCache.js'),
			    arrayIncludes = __inner_require__(2 /*_arrayIncludes.js*/),
			    arrayIncludesWith = __inner_require__(6 /*_arrayIncludesWith.js*/),
			    arrayMap = require('lodash@4/_arrayMap.js'),
			    baseUnary = require('lodash@4/_baseUnary.js'),
			    cacheHas = require('lodash@4/_cacheHas.js');
			
			/** Used as the size to enable large array optimizations. */
			var LARGE_ARRAY_SIZE = 200;
			
			/**
			 * The base implementation of methods like `_.difference` without support
			 * for excluding multiple arrays or iteratee shorthands.
			 *
			 * @private
			 * @param {Array} array The array to inspect.
			 * @param {Array} values The values to exclude.
			 * @param {Function} [iteratee] The iteratee invoked per element.
			 * @param {Function} [comparator] The comparator invoked per element.
			 * @returns {Array} Returns the new array of filtered values.
			 */
			function baseDifference(array, values, iteratee, comparator) {
			  var index = -1,
			      includes = arrayIncludes,
			      isCommon = true,
			      length = array.length,
			      result = [],
			      valuesLength = values.length;
			
			  if (!length) {
			    return result;
			  }
			  if (iteratee) {
			    values = arrayMap(values, baseUnary(iteratee));
			  }
			  if (comparator) {
			    includes = arrayIncludesWith;
			    isCommon = false;
			  } else if (values.length >= LARGE_ARRAY_SIZE) {
			    includes = cacheHas;
			    isCommon = false;
			    values = new SetCache(values);
			  }
			  outer: while (++index < length) {
			    var value = array[index],
			        computed = iteratee == null ? value : iteratee(value);
			
			    value = comparator || value !== 0 ? value : 0;
			    if (isCommon && computed === computed) {
			      var valuesIndex = valuesLength;
			      while (valuesIndex--) {
			        if (values[valuesIndex] === computed) {
			          continue outer;
			        }
			      }
			      result.push(value);
			    } else if (!includes(values, computed, comparator)) {
			      result.push(value);
			    }
			  }
			  return result;
			}
			
			module.exports = baseDifference;
		},		// _arrayIncludes.js
		function(__inner_require__, exports, module){
			var baseIndexOf = __inner_require__(3 /*_baseIndexOf.js*/);
			
			/**
			 * A specialized version of `_.includes` for arrays without support for
			 * specifying an index to search from.
			 *
			 * @private
			 * @param {Array} [array] The array to inspect.
			 * @param {*} target The value to search for.
			 * @returns {boolean} Returns `true` if `target` is found, else `false`.
			 */
			function arrayIncludes(array, value) {
			  var length = array == null ? 0 : array.length;
			  return !!length && baseIndexOf(array, value, 0) > -1;
			}
			
			module.exports = arrayIncludes;
		},		// _baseIndexOf.js
		function(__inner_require__, exports, module){
			var baseFindIndex = require('lodash@4/_baseFindIndex.js'),
			    baseIsNaN = __inner_require__(4 /*_baseIsNaN.js*/),
			    strictIndexOf = __inner_require__(5 /*_strictIndexOf.js*/);
			
			/**
			 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
			 *
			 * @private
			 * @param {Array} array The array to inspect.
			 * @param {*} value The value to search for.
			 * @param {number} fromIndex The index to search from.
			 * @returns {number} Returns the index of the matched value, else `-1`.
			 */
			function baseIndexOf(array, value, fromIndex) {
			    return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
			}
			
			module.exports = baseIndexOf;
		},		// _baseIsNaN.js
		function(__inner_require__, exports, module){
			/**
			 * The base implementation of `_.isNaN` without support for number objects.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
			 */
			function baseIsNaN(value) {
			  return value !== value;
			}
			
			module.exports = baseIsNaN;
		},		// _strictIndexOf.js
		function(__inner_require__, exports, module){
			/**
			 * A specialized version of `_.indexOf` which performs strict equality
			 * comparisons of values, i.e. `===`.
			 *
			 * @private
			 * @param {Array} array The array to inspect.
			 * @param {*} value The value to search for.
			 * @param {number} fromIndex The index to search from.
			 * @returns {number} Returns the index of the matched value, else `-1`.
			 */
			function strictIndexOf(array, value, fromIndex) {
			  var index = fromIndex - 1,
			      length = array.length;
			
			  while (++index < length) {
			    if (array[index] === value) {
			      return index;
			    }
			  }
			  return -1;
			}
			
			module.exports = strictIndexOf;
		},		// _arrayIncludesWith.js
		function(__inner_require__, exports, module){
			/**
			 * This function is like `arrayIncludes` except that it accepts a comparator.
			 *
			 * @private
			 * @param {Array} [array] The array to inspect.
			 * @param {*} target The value to search for.
			 * @param {Function} comparator The comparator invoked per element.
			 * @returns {boolean} Returns `true` if `target` is found, else `false`.
			 */
			function arrayIncludesWith(array, value, comparator) {
			  var index = -1,
			      length = array == null ? 0 : array.length;
			
			  while (++index < length) {
			    if (comparator(value, array[index])) {
			      return true;
			    }
			  }
			  return false;
			}
			
			module.exports = arrayIncludesWith;
		},		// _baseFlatten.js
		function(__inner_require__, exports, module){
			var arrayPush = __inner_require__(8 /*_arrayPush.js*/),
			    isFlattenable = __inner_require__(9 /*_isFlattenable.js*/);
			
			/**
			 * The base implementation of `_.flatten` with support for restricting flattening.
			 *
			 * @private
			 * @param {Array} array The array to flatten.
			 * @param {number} depth The maximum recursion depth.
			 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
			 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
			 * @param {Array} [result=[]] The initial result value.
			 * @returns {Array} Returns the new flattened array.
			 */
			function baseFlatten(array, depth, predicate, isStrict, result) {
			  var index = -1,
			      length = array.length;
			
			  predicate || (predicate = isFlattenable);
			  result || (result = []);
			
			  while (++index < length) {
			    var value = array[index];
			    if (depth > 0 && predicate(value)) {
			      if (depth > 1) {
			        // Recursively flatten arrays (susceptible to call stack limits).
			        baseFlatten(value, depth - 1, predicate, isStrict, result);
			      } else {
			        arrayPush(result, value);
			      }
			    } else if (!isStrict) {
			      result[result.length] = value;
			    }
			  }
			  return result;
			}
			
			module.exports = baseFlatten;
		},		// _arrayPush.js
		function(__inner_require__, exports, module){
			/**
			 * Appends the elements of `values` to `array`.
			 *
			 * @private
			 * @param {Array} array The array to modify.
			 * @param {Array} values The values to append.
			 * @returns {Array} Returns `array`.
			 */
			function arrayPush(array, values) {
			  var index = -1,
			      length = values.length,
			      offset = array.length;
			
			  while (++index < length) {
			    array[offset + index] = values[index];
			  }
			  return array;
			}
			
			module.exports = arrayPush;
		},		// _isFlattenable.js
		function(__inner_require__, exports, module){
			var _Symbol = require('lodash@4/_Symbol.js'),
			    isArguments = require('lodash@4/isArguments.js'),
			    isArray = require('lodash@4/isArray.js');
			
			/** Built-in value references. */
			var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;
			
			/**
			 * Checks if `value` is a flattenable `arguments` object or array.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
			 */
			function isFlattenable(value) {
			    return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
			}
			
			module.exports = isFlattenable;
		},		// isArrayLikeObject.js
		function(__inner_require__, exports, module){
			var isArrayLike = require('lodash@4/isArrayLike.js'),
			    isObjectLike = require('lodash@4/isObjectLike.js');
			
			/**
			 * This method is like `_.isArrayLike` except that it also checks if `value`
			 * is an object.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.0.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is an array-like object,
			 *  else `false`.
			 * @example
			 *
			 * _.isArrayLikeObject([1, 2, 3]);
			 * // => true
			 *
			 * _.isArrayLikeObject(document.body.children);
			 * // => true
			 *
			 * _.isArrayLikeObject('abc');
			 * // => false
			 *
			 * _.isArrayLikeObject(_.noop);
			 * // => false
			 */
			function isArrayLikeObject(value) {
			  return isObjectLike(value) && isArrayLike(value);
			}
			
			module.exports = isArrayLikeObject;
		}
	];
});