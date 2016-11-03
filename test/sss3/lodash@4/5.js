// lodash@4/_baseRest.js
loader.define("lodash@4", "_baseRest.js", "5", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// _baseRest.js
		function(__inner_require__, exports, module){
			var identity = require('lodash@4/identity.js'),
			    overRest = __inner_require__(1 /*_overRest.js*/),
			    setToString = __inner_require__(3 /*_setToString.js*/);
			
			/**
			 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
			 *
			 * @private
			 * @param {Function} func The function to apply a rest parameter to.
			 * @param {number} [start=func.length-1] The start position of the rest parameter.
			 * @returns {Function} Returns the new function.
			 */
			function baseRest(func, start) {
			  return setToString(overRest(func, start, identity), func + '');
			}
			
			module.exports = baseRest;
		},
		// _overRest.js
		function(__inner_require__, exports, module){
			var apply = __inner_require__(2 /*_apply.js*/);
			
			/* Built-in method references for those with the same name as other `lodash` methods. */
			var nativeMax = Math.max;
			
			/**
			 * A specialized version of `baseRest` which transforms the rest array.
			 *
			 * @private
			 * @param {Function} func The function to apply a rest parameter to.
			 * @param {number} [start=func.length-1] The start position of the rest parameter.
			 * @param {Function} transform The rest array transform.
			 * @returns {Function} Returns the new function.
			 */
			function overRest(func, start, transform) {
			  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
			  return function () {
			    var args = arguments,
			        index = -1,
			        length = nativeMax(args.length - start, 0),
			        array = Array(length);
			
			    while (++index < length) {
			      array[index] = args[start + index];
			    }
			    index = -1;
			    var otherArgs = Array(start + 1);
			    while (++index < start) {
			      otherArgs[index] = args[index];
			    }
			    otherArgs[start] = transform(array);
			    return apply(func, this, otherArgs);
			  };
			}
			
			module.exports = overRest;
		},
		// _apply.js
		function(__inner_require__, exports, module){
			/**
			 * A faster alternative to `Function#apply`, this function invokes `func`
			 * with the `this` binding of `thisArg` and the arguments of `args`.
			 *
			 * @private
			 * @param {Function} func The function to invoke.
			 * @param {*} thisArg The `this` binding of `func`.
			 * @param {Array} args The arguments to invoke `func` with.
			 * @returns {*} Returns the result of `func`.
			 */
			function apply(func, thisArg, args) {
			  switch (args.length) {
			    case 0:
			      return func.call(thisArg);
			    case 1:
			      return func.call(thisArg, args[0]);
			    case 2:
			      return func.call(thisArg, args[0], args[1]);
			    case 3:
			      return func.call(thisArg, args[0], args[1], args[2]);
			  }
			  return func.apply(thisArg, args);
			}
			
			module.exports = apply;
		},
		// _setToString.js
		function(__inner_require__, exports, module){
			var baseSetToString = __inner_require__(4 /*_baseSetToString.js*/),
			    shortOut = __inner_require__(6 /*_shortOut.js*/);
			
			/**
			 * Sets the `toString` method of `func` to return `string`.
			 *
			 * @private
			 * @param {Function} func The function to modify.
			 * @param {Function} string The `toString` result.
			 * @returns {Function} Returns `func`.
			 */
			var setToString = shortOut(baseSetToString);
			
			module.exports = setToString;
		},
		// _baseSetToString.js
		function(__inner_require__, exports, module){
			var constant = __inner_require__(5 /*constant.js*/),
			    defineProperty = require('lodash@4/_defineProperty.js'),
			    identity = require('lodash@4/identity.js');
			
			/**
			 * The base implementation of `setToString` without support for hot loop shorting.
			 *
			 * @private
			 * @param {Function} func The function to modify.
			 * @param {Function} string The `toString` result.
			 * @returns {Function} Returns `func`.
			 */
			var baseSetToString = !defineProperty ? identity : function (func, string) {
			  return defineProperty(func, 'toString', {
			    'configurable': true,
			    'enumerable': false,
			    'value': constant(string),
			    'writable': true
			  });
			};
			
			module.exports = baseSetToString;
		},
		// constant.js
		function(__inner_require__, exports, module){
			/**
			 * Creates a function that returns `value`.
			 *
			 * @static
			 * @memberOf _
			 * @since 2.4.0
			 * @category Util
			 * @param {*} value The value to return from the new function.
			 * @returns {Function} Returns the new constant function.
			 * @example
			 *
			 * var objects = _.times(2, _.constant({ 'a': 1 }));
			 *
			 * console.log(objects);
			 * // => [{ 'a': 1 }, { 'a': 1 }]
			 *
			 * console.log(objects[0] === objects[1]);
			 * // => true
			 */
			function constant(value) {
			  return function () {
			    return value;
			  };
			}
			
			module.exports = constant;
		},
		// _shortOut.js
		function(__inner_require__, exports, module){
			/** Used to detect hot functions by number of calls within a span of milliseconds. */
			var HOT_COUNT = 500,
			    HOT_SPAN = 16;
			
			/* Built-in method references for those with the same name as other `lodash` methods. */
			var nativeNow = Date.now;
			
			/**
			 * Creates a function that'll short out and invoke `identity` instead
			 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
			 * milliseconds.
			 *
			 * @private
			 * @param {Function} func The function to restrict.
			 * @returns {Function} Returns the new shortable function.
			 */
			function shortOut(func) {
			  var count = 0,
			      lastCalled = 0;
			
			  return function () {
			    var stamp = nativeNow(),
			        remaining = HOT_SPAN - (stamp - lastCalled);
			
			    lastCalled = stamp;
			    if (remaining > 0) {
			      if (++count >= HOT_COUNT) {
			        return arguments[0];
			      }
			    } else {
			      count = 0;
			    }
			    return func.apply(undefined, arguments);
			  };
			}
			
			module.exports = shortOut;
		}
	];
});