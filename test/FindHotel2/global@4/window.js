loader.define("global@4/window.js", [], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// window.js
		function(__inner_require__, exports, module){
			if (typeof window !== "undefined") {
			    module.exports = window;
			} else if (typeof global !== "undefined") {
			    module.exports = global;
			} else if (typeof self !== "undefined") {
			    module.exports = self;
			} else {
			    module.exports = {};
			}
		}
	];
});