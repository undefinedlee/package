// react-native@0.21/Users/lifan/work-test/sss3/rn/node_modules/react/lib/ReactInstanceMap.js
loader.define("react-native@0.21", "Users/lifan/work-test/sss3/rn/node_modules/react/lib/ReactInstanceMap.js", "c", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// Users/lifan/work-test/sss3/rn/node_modules/react/lib/ReactInstanceMap.js
		function(__inner_require__, exports, module){
			var ReactInstanceMap = {
			
			  remove: function remove(key) {
			    key._reactInternalInstance = undefined;
			  },
			
			  get: function get(key) {
			    return key._reactInternalInstance;
			  },
			
			  has: function has(key) {
			    return key._reactInternalInstance !== undefined;
			  },
			
			  set: function set(key, value) {
			    key._reactInternalInstance = value;
			  } };
			
			module.exports = ReactInstanceMap;
		}
	];
});