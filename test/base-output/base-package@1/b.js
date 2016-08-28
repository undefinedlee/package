// base-package@1/components/calendar/index.js
loader.define("base-package@1/b", function(require, __filename, __dirname, __base){
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
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = {
				key: ".ej-css-6",
				rules: [{
					"selectors": [".abc"],
					"content": "background:url(" + __inner_require__(3 /*components/calendar/pic/user.png*/) + ");"
				}]
			};
		},
		// components/calendar/pic/user.png
		function(__inner_require__, exports, module){
			var images = require("base-package@1/__base64_image_sprite_mod_id__");
			module.exports = [images["324902c6fb26e42349f9ca818b35eeada1b38548.png"], images["93b8dc558a137e3be7308b09454895f832cc5ab6.png"], __dirname + "/e3100eef8805632c92dcfaf86d653f3ff95471ef.png"][Math.min(3, window.devicePixelRatio || 1)];
		}
	];
});