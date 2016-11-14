loader.define("fbjs@0.8/lib/memoizeStringOnly.js", [], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/memoizeStringOnly.js
		function(__inner_require__, exports, module){
			/**
			 * Memoizes the return value of a function that accepts one string argument.
			 */
			
			function memoizeStringOnly(callback) {
			  var cache = {};
			  return function (string) {
			    if (!cache.hasOwnProperty(string)) {
			      cache[string] = callback.call(this, string);
			    }
			    return cache[string];
			  };
			}
			
			module.exports = memoizeStringOnly;
		}
	];
});