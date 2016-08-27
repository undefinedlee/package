// base-package@1/views/list/index.js
loader.define("base-package@1/3", function(require, __filename, __dirname, __base){
	"use strict";
	
	return [
		// views/list/index.js
		function(__inner_require__, exports, module){
			var ListService = __inner_require__(1 /*service/list.js*/);
			var calendar = require("base-package@1/components/calendar/index.js");
			
			module.exports = "list";
		},
		// service/list.js
		function(__inner_require__, exports, module){
			var bbbLib = require("bbb@3.1.2/lib.js");
			
			module.exports = "list-service";
		}
	];
});