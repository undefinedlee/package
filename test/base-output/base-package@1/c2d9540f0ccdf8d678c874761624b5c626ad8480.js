// base-package@1/views/detail/index.js
loader.define("base-package@1/c2d9540f0ccdf8d678c874761624b5c626ad8480", function(require, __filename, __dirname, __base){
	"use strict";
	
	return [
		// views/detail/index.js
		function(__inner_require__, exports, module){
			var DetailService = __inner_require__(1 /*service/detail.js*/);
			var calendar = require("base-package@1/components/calendar/index.js");
			
			module.exports = "detail";
		},
		// service/detail.js
		function(__inner_require__, exports, module){
			module.exports = "detail-service";
		}
	];
});