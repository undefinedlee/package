// base-package@1/components/calendar/index.js
define("base-package@1/b4d38143d2fe7851f9236932f9b3b16790c3ebbe", function(require, exports, module, __filename, __dirname){
	var mods = [
		// components/calendar/index.js
		function(__inner_require__, exports, module){
			"use strict";
			
			var html = __inner_require__(1);
			var css = __inner_require__(2);
			
			module.exports = "calendar";
		},
		// components/calendar/index-html.js
		function(__inner_require__, exports, module){
			"use strict";
			
			module.exports = "calendar-html";
		},
		// components/calendar/index-css.js
		function(__inner_require__, exports, module){
			"use strict";
			
			module.exports = "calendar-css";
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