loader.define("lodash@4/_baseProperty.js", [], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// _baseProperty.js
		function(__inner_require__, exports, module){
			/**
			 * The base implementation of `_.property` without support for deep paths.
			 *
			 * @private
			 * @param {string} key The key of the property to get.
			 * @returns {Function} Returns the new accessor function.
			 */
			function baseProperty(key) {
			  return function (object) {
			    return object == null ? undefined : object[key];
			  };
			}
			
			module.exports = baseProperty;
		}
	];
});