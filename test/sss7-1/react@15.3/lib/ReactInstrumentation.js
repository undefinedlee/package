__d("react@15.3/lib/ReactInstrumentation.js", ["react@15.3/lib/ReactDebugTool.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/ReactInstrumentation.js
		function(__inner_require__, exports, module){
			var debugTool = null;
			
			if (process.env.NODE_ENV !== 'production') {
			  var ReactDebugTool = require('react@15.3/lib/ReactDebugTool.js');
			  debugTool = ReactDebugTool;
			}
			
			module.exports = { debugTool: debugTool };
		}
	];
});