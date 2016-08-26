// base-package@1/views/detail/index.js
loader.define("base-package@1/0", function(require, __filename, __dirname, __base){
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