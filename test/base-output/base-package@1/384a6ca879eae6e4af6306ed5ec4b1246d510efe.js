// base-package@1/views/list/index.js
define("base-package@1/384a6ca879eae6e4af6306ed5ec4b1246d510efe", function(require, exports, module, __filename, __dirname){
	var mods = [
		// views/list/index.js
		function(__inner_require__, exports, module){
			var ListService = __inner_require__(1);
			var calendar = require("base-package@1/components/calendar/index.js");
			
			module.exports = "list";
		},
		// service/list.js
		function(__inner_require__, exports, module){
			var bbbLib = require("bbb@3.1.2/lib.js");
			
			module.exports = "list-service";
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