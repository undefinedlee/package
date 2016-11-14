loader.define("react@15/lib/canDefineProperty.js", [], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/canDefineProperty.js
		function(__inner_require__, exports, module){
			var canDefineProperty = false;
			if (process.env.NODE_ENV !== 'production') {
			  try {
			    Object.defineProperty({}, 'x', { get: function get() {} });
			    canDefineProperty = true;
			  } catch (x) {
			    // IE will fail on defineProperty
			  }
			}
			
			module.exports = canDefineProperty;
		}
	];
});