__d("lodash@4/_root.js", ["lodash@4/_freeGlobal.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// _root.js
		function(__inner_require__, exports, module){
			var freeGlobal = require('lodash@4/_freeGlobal.js');
			
			/** Detect free variable `self`. */
			var freeSelf = (typeof self === 'undefined' ? 'undefined' : babelHelpers.typeof(self)) == 'object' && self && self.Object === Object && self;
			
			/** Used as a reference to the global object. */
			var root = freeGlobal || freeSelf || Function('return this')();
			
			module.exports = root;
		}
	];
});