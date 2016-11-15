__d("fbjs@0.8/lib/emptyObject.js", [], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/emptyObject.js
		function(__inner_require__, exports, module){
			var emptyObject = {};
			
			if (process.env.NODE_ENV !== 'production') {
			  Object.freeze(emptyObject);
			}
			
			module.exports = emptyObject;
		}
	];
});