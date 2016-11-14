loader.define("react@15.3/lib/ReactFeatureFlags.js", [], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/ReactFeatureFlags.js
		function(__inner_require__, exports, module){
			var ReactFeatureFlags = {
			  // When true, call console.time() before and .timeEnd() after each top-level
			  // render (both initial renders and updates). Useful when looking at prod-mode
			  // timeline profiles in Chrome, for example.
			  logTopLevelRenders: false
			};
			
			module.exports = ReactFeatureFlags;
		}
	];
});