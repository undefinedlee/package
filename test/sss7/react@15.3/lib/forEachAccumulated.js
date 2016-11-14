loader.define("react@15.3/lib/forEachAccumulated.js", [], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/forEachAccumulated.js
		function(__inner_require__, exports, module){
			/**
			 * @param {array} arr an "accumulation" of items which is either an Array or
			 * a single item. Useful when paired with the `accumulate` module. This is a
			 * simple utility that allows us to reason about a collection of items, but
			 * handling the case when there is exactly one item (and we do not need to
			 * allocate an array).
			 */
			
			function forEachAccumulated(arr, cb, scope) {
			  if (Array.isArray(arr)) {
			    arr.forEach(cb, scope);
			  } else if (arr) {
			    cb.call(scope, arr);
			  }
			}
			
			module.exports = forEachAccumulated;
		}
	];
});