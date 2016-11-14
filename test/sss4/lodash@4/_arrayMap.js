loader.define("lodash@4/_arrayMap.js", [], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// _arrayMap.js
		function(__inner_require__, exports, module){
			/**
			 * A specialized version of `_.map` for arrays without support for iteratee
			 * shorthands.
			 *
			 * @private
			 * @param {Array} [array] The array to iterate over.
			 * @param {Function} iteratee The function invoked per iteration.
			 * @returns {Array} Returns the new mapped array.
			 */
			function arrayMap(array, iteratee) {
			  var index = -1,
			      length = array == null ? 0 : array.length,
			      result = Array(length);
			
			  while (++index < length) {
			    result[index] = iteratee(array[index], index, array);
			  }
			  return result;
			}
			
			module.exports = arrayMap;
		}
	];
});