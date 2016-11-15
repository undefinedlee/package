__d("lodash@4/_freeGlobal.js", [], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// _freeGlobal.js
		function(__inner_require__, exports, module){
			/** Detect free variable `global` from Node.js. */
			var freeGlobal = (typeof global === 'undefined' ? 'undefined' : babelHelpers.typeof(global)) == 'object' && global && global.Object === Object && global;
			
			module.exports = freeGlobal;
		}
	];
});