loader.define("lodash@4/rest.js", ["lodash@4/toInteger.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// rest.js
		function(__inner_require__, exports, module){
			var apply = __inner_require__(1 /*_apply.js*/),
			    toInteger = require('lodash@4/toInteger.js');
			
			/** Used as the `TypeError` message for "Functions" methods. */
			var FUNC_ERROR_TEXT = 'Expected a function';
			
			/* Built-in method references for those with the same name as other `lodash` methods. */
			var nativeMax = Math.max;
			
			/**
			 * Creates a function that invokes `func` with the `this` binding of the
			 * created function and arguments from `start` and beyond provided as
			 * an array.
			 *
			 * **Note:** This method is based on the
			 * [rest parameter](https://mdn.io/rest_parameters).
			 *
			 * @static
			 * @memberOf _
			 * @since 4.0.0
			 * @category Function
			 * @param {Function} func The function to apply a rest parameter to.
			 * @param {number} [start=func.length-1] The start position of the rest parameter.
			 * @returns {Function} Returns the new function.
			 * @example
			 *
			 * var say = _.rest(function(what, names) {
			 *   return what + ' ' + _.initial(names).join(', ') +
			 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
			 * });
			 *
			 * say('hello', 'fred', 'barney', 'pebbles');
			 * // => 'hello fred, barney, & pebbles'
			 */
			function rest(func, start) {
			  if (typeof func != 'function') {
			    throw new TypeError(FUNC_ERROR_TEXT);
			  }
			  start = nativeMax(start === undefined ? func.length - 1 : toInteger(start), 0);
			  return function () {
			    var args = arguments,
			        index = -1,
			        length = nativeMax(args.length - start, 0),
			        array = Array(length);
			
			    while (++index < length) {
			      array[index] = args[start + index];
			    }
			    switch (start) {
			      case 0:
			        return func.call(this, array);
			      case 1:
			        return func.call(this, args[0], array);
			      case 2:
			        return func.call(this, args[0], args[1], array);
			    }
			    var otherArgs = Array(start + 1);
			    index = -1;
			    while (++index < start) {
			      otherArgs[index] = args[index];
			    }
			    otherArgs[start] = array;
			    return apply(func, this, otherArgs);
			  };
			}
			
			module.exports = rest;
		},		// _apply.js
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
			  var length = args.length;
			  switch (length) {
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
		}
	];
});