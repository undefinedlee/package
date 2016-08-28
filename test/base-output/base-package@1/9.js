// base-package@1/views/home/index.js
loader.define("base-package@1/9", function(require, __filename, __dirname, __base){
	"use strict";
	
	return [
		// views/home/index.js
		function(__inner_require__, exports, module){
			var HomeService = __inner_require__(1 /*service/home.js*/);
			var CitySelector = __inner_require__(2 /*components/city-selector/index.js*/);
			
			module.exports = "home";
		},
		// service/home.js
		function(__inner_require__, exports, module){
			var aaa = require("aaa@6/index.js");
			
			module.exports = "home-service";
		},
		// components/city-selector/index.js
		function(__inner_require__, exports, module){
			var CommonService = __inner_require__(3 /*service/common.js*/);
			
			module.exports = "city-selector";
		},
		// service/common.js
		function(__inner_require__, exports, module){
			var ccc = require("ccc@0.1/index.js");
			
			module.exports = "common-service";
		}
	];
});