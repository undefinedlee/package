// base-package@1/views/home/index.js
define("base-package@1/33cc2e9d676831f1eae2e71c0dfe66f11252f054", function(require, exports, module, __filename, __dirname){
	var mods = [
		// views/home/index.js
		function(__inner_require__, exports, module){
			var HomeService = __inner_require__(1);
			var CitySelector = __inner_require__(2);
			
			module.exports = "home";
		},
		// service/home.js
		function(__inner_require__, exports, module){
			var aaa = require("aaa@6/index.js");
			
			module.exports = "home-service";
		},
		// components/city-selector/index.js
		function(__inner_require__, exports, module){
			var CommonService = __inner_require__(3);
			
			module.exports = "city-selector";
		},
		// service/common.js
		function(__inner_require__, exports, module){
			var ccc = require("ccc@2.1/index.js");
			
			module.exports = "common-service";
		}
	];

	function __inner_require__(id){
		var factory = mods[id];
		var module;

		if(!factory.isInitialized){
			module = {exports: {}};
			factory(__inner_require__, module.exports, module);
			factory.exports = module.exports;
			factory.isInitialized = true;
		}

		return factory.exports;
	}

	module.exports = __inner_require__(0);
});