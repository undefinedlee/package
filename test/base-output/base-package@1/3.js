// base-package@1/components/calendar/index.js
loader.define("base-package@1/3", function(require, __filename, __dirname, __base){
	"use strict";
	
	return [
		// components/calendar/index.js
		function(__inner_require__, exports, module){
			var html = __inner_require__(1 /*components/calendar/index-html.js*/);
			var css = __inner_require__(2 /*components/calendar/index-css.js*/);
			
			module.exports = "calendar";
		},
		// components/calendar/index-html.js
		function(__inner_require__, exports, module){
			module.exports = "calendar-html";
		},
		// components/calendar/index-css.js
		function(__inner_require__, exports, module){
			module.exports = "calendar-css";
		}
	];
});