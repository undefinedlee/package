// lodash@4/_toSource.js
loader.define("lodash@4", "_toSource.js", "r", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// _toSource.js
		function(__inner_require__, exports, module){
			/** Used to resolve the decompiled source of functions. */
			var funcToString = Function.prototype.toString;
			
			/**
			 * Converts `func` to its source code.
			 *
			 * @private
			 * @param {Function} func The function to process.
			 * @returns {string} Returns the source code.
			 */
			function toSource(func) {
			  if (func != null) {
			    try {
			      return funcToString.call(func);
			    } catch (e) {}
			    try {
			      return func + '';
			    } catch (e) {}
			  }
			  return '';
			}
			
			module.exports = toSource;
		}
	];
});