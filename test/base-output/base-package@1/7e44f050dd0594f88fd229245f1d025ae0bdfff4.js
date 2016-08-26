// base-package@1/views/detail/index.js
define("base-package@1/7e44f050dd0594f88fd229245f1d025ae0bdfff4", function(require, exports, module, __filename, __dirname){
	var mods = [
		// views/detail/index.js
		function(__inner_require__, exports, module){
			"use strict";
			
			var DetailService = __inner_require__(1);
			var calendar = require("base-package@1/components/calendar/index.js");
			
			module.exports = "detail";
		},
		// service/detail.js
		function(__inner_require__, exports, module){
			"use strict";
			
			module.exports = "detail-service";
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