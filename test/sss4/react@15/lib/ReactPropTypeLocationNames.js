loader.define("react@15/lib/ReactPropTypeLocationNames.js", [], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/ReactPropTypeLocationNames.js
		function(__inner_require__, exports, module){
			var ReactPropTypeLocationNames = {};
			
			if (process.env.NODE_ENV !== 'production') {
			  ReactPropTypeLocationNames = {
			    prop: 'prop',
			    context: 'context',
			    childContext: 'child context'
			  };
			}
			
			module.exports = ReactPropTypeLocationNames;
		}
	];
});