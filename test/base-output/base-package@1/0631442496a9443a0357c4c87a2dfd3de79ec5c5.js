// base-package@1/components/calendar/index.js
define("base-package@1/0631442496a9443a0357c4c87a2dfd3de79ec5c5", function(require, exports, module, __filename, __dirname){
	var mods = [
		// components/calendar/index.js
		function(__inner_require__, exports, module){
			module.exports = "calendar";
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