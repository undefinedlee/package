loader.define("lodash@4/assign.js", ["lodash@4/isArrayLike.js", "lodash@4/_isPrototype.js", "lodash@4/keys.js", "lodash@4/eq.js", "lodash@4/_defineProperty.js", "lodash@4/_baseRest.js", "lodash@4/_isIndex.js", "lodash@4/isObject.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// assign.js
		function(__inner_require__, exports, module){
			var assignValue = __inner_require__(1 /*_assignValue.js*/),
			    copyObject = __inner_require__(3 /*_copyObject.js*/),
			    createAssigner = __inner_require__(4 /*_createAssigner.js*/),
			    isArrayLike = require('lodash@4/isArrayLike.js'),
			    isPrototype = require('lodash@4/_isPrototype.js'),
			    keys = require('lodash@4/keys.js');
			
			/** Used for built-in method references. */
			var objectProto = Object.prototype;
			
			/** Used to check objects for own properties. */
			var hasOwnProperty = objectProto.hasOwnProperty;
			
			/**
			 * Assigns own enumerable string keyed properties of source objects to the
			 * destination object. Source objects are applied from left to right.
			 * Subsequent sources overwrite property assignments of previous sources.
			 *
			 * **Note:** This method mutates `object` and is loosely based on
			 * [`Object.assign`](https://mdn.io/Object/assign).
			 *
			 * @static
			 * @memberOf _
			 * @since 0.10.0
			 * @category Object
			 * @param {Object} object The destination object.
			 * @param {...Object} [sources] The source objects.
			 * @returns {Object} Returns `object`.
			 * @see _.assignIn
			 * @example
			 *
			 * function Foo() {
			 *   this.a = 1;
			 * }
			 *
			 * function Bar() {
			 *   this.c = 3;
			 * }
			 *
			 * Foo.prototype.b = 2;
			 * Bar.prototype.d = 4;
			 *
			 * _.assign({ 'a': 0 }, new Foo, new Bar);
			 * // => { 'a': 1, 'c': 3 }
			 */
			var assign = createAssigner(function (object, source) {
			  if (isPrototype(source) || isArrayLike(source)) {
			    copyObject(source, keys(source), object);
			    return;
			  }
			  for (var key in source) {
			    if (hasOwnProperty.call(source, key)) {
			      assignValue(object, key, source[key]);
			    }
			  }
			});
			
			module.exports = assign;
		},		// _assignValue.js
		function(__inner_require__, exports, module){
			var baseAssignValue = __inner_require__(2 /*_baseAssignValue.js*/),
			    eq = require('lodash@4/eq.js');
			
			/** Used for built-in method references. */
			var objectProto = Object.prototype;
			
			/** Used to check objects for own properties. */
			var hasOwnProperty = objectProto.hasOwnProperty;
			
			/**
			 * Assigns `value` to `key` of `object` if the existing value is not equivalent
			 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
			 * for equality comparisons.
			 *
			 * @private
			 * @param {Object} object The object to modify.
			 * @param {string} key The key of the property to assign.
			 * @param {*} value The value to assign.
			 */
			function assignValue(object, key, value) {
			  var objValue = object[key];
			  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
			    baseAssignValue(object, key, value);
			  }
			}
			
			module.exports = assignValue;
		},		// _baseAssignValue.js
		function(__inner_require__, exports, module){
			var defineProperty = require('lodash@4/_defineProperty.js');
			
			/**
			 * The base implementation of `assignValue` and `assignMergeValue` without
			 * value checks.
			 *
			 * @private
			 * @param {Object} object The object to modify.
			 * @param {string} key The key of the property to assign.
			 * @param {*} value The value to assign.
			 */
			function baseAssignValue(object, key, value) {
			  if (key == '__proto__' && defineProperty) {
			    defineProperty(object, key, {
			      'configurable': true,
			      'enumerable': true,
			      'value': value,
			      'writable': true
			    });
			  } else {
			    object[key] = value;
			  }
			}
			
			module.exports = baseAssignValue;
		},		// _copyObject.js
		function(__inner_require__, exports, module){
			var assignValue = __inner_require__(1 /*_assignValue.js*/),
			    baseAssignValue = __inner_require__(2 /*_baseAssignValue.js*/);
			
			/**
			 * Copies properties of `source` to `object`.
			 *
			 * @private
			 * @param {Object} source The object to copy properties from.
			 * @param {Array} props The property identifiers to copy.
			 * @param {Object} [object={}] The object to copy properties to.
			 * @param {Function} [customizer] The function to customize copied values.
			 * @returns {Object} Returns `object`.
			 */
			function copyObject(source, props, object, customizer) {
			  var isNew = !object;
			  object || (object = {});
			
			  var index = -1,
			      length = props.length;
			
			  while (++index < length) {
			    var key = props[index];
			
			    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
			
			    if (newValue === undefined) {
			      newValue = source[key];
			    }
			    if (isNew) {
			      baseAssignValue(object, key, newValue);
			    } else {
			      assignValue(object, key, newValue);
			    }
			  }
			  return object;
			}
			
			module.exports = copyObject;
		},		// _createAssigner.js
		function(__inner_require__, exports, module){
			var baseRest = require('lodash@4/_baseRest.js'),
			    isIterateeCall = __inner_require__(5 /*_isIterateeCall.js*/);
			
			/**
			 * Creates a function like `_.assign`.
			 *
			 * @private
			 * @param {Function} assigner The function to assign values.
			 * @returns {Function} Returns the new assigner function.
			 */
			function createAssigner(assigner) {
			  return baseRest(function (object, sources) {
			    var index = -1,
			        length = sources.length,
			        customizer = length > 1 ? sources[length - 1] : undefined,
			        guard = length > 2 ? sources[2] : undefined;
			
			    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;
			
			    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
			      customizer = length < 3 ? undefined : customizer;
			      length = 1;
			    }
			    object = Object(object);
			    while (++index < length) {
			      var source = sources[index];
			      if (source) {
			        assigner(object, source, index, customizer);
			      }
			    }
			    return object;
			  });
			}
			
			module.exports = createAssigner;
		},		// _isIterateeCall.js
		function(__inner_require__, exports, module){
			var eq = require('lodash@4/eq.js'),
			    isArrayLike = require('lodash@4/isArrayLike.js'),
			    isIndex = require('lodash@4/_isIndex.js'),
			    isObject = require('lodash@4/isObject.js');
			
			/**
			 * Checks if the given arguments are from an iteratee call.
			 *
			 * @private
			 * @param {*} value The potential iteratee value argument.
			 * @param {*} index The potential iteratee index or key argument.
			 * @param {*} object The potential iteratee object argument.
			 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
			 *  else `false`.
			 */
			function isIterateeCall(value, index, object) {
			  if (!isObject(object)) {
			    return false;
			  }
			  var type = typeof index === 'undefined' ? 'undefined' : babelHelpers.typeof(index);
			  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
			    return eq(object[index], value);
			  }
			  return false;
			}
			
			module.exports = isIterateeCall;
		}
	];
});