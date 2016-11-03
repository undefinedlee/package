// react-native@0.21/Users/lifan/work-test/sss3/rn/node_modules/react/lib/canDefineProperty.js
loader.define("react-native@0.21", "Users/lifan/work-test/sss3/rn/node_modules/react/lib/canDefineProperty.js", "l", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// Users/lifan/work-test/sss3/rn/node_modules/react/lib/canDefineProperty.js
		function(__inner_require__, exports, module){
			var canDefineProperty = false;
			if (process.env.NODE_ENV !== 'production') {
			  try {
			    Object.defineProperty({}, 'x', { get: function get() {} });
			    canDefineProperty = true;
			  } catch (x) {}
			}
			
			module.exports = canDefineProperty;
		}
	];
});