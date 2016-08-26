// base-package@1/views/home/index.js
define("base-package@1/673efc536100360b2e4f37ac643ae923e9266de6", function(require, exports, module, __filename, __dirname){
	var mods = [
		// views/home/index.js
		function(__inner_require__, exports, module){
			"use strict";
			
			var HomeService = __inner_require__(1);
			var CitySelector = __inner_require__(2);
			
			module.exports = "home";
		},
		// service/home.js
		function(__inner_require__, exports, module){
			"use strict";
			
			var aaa = require("aaa@6/index.js");
			
			module.exports = "home-service";
		},
		// components/city-selector/index.js
		function(__inner_require__, exports, module){
			"use strict";
			
			var CommonService = __inner_require__(3);
			
			module.exports = "city-selector";
		},
		// service/common.js
		function(__inner_require__, exports, module){
			"use strict";
			
			var ccc = require("ccc@0.1/index.js");
			
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