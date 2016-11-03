// react-native@0.21/Users/lifan/work-test/sss3/rn/node_modules/fbjs/lib/ExecutionEnvironment.js
loader.define("react-native@0.21", "Users/lifan/work-test/sss3/rn/node_modules/fbjs/lib/ExecutionEnvironment.js", "1p", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// Users/lifan/work-test/sss3/rn/node_modules/fbjs/lib/ExecutionEnvironment.js
		function(__inner_require__, exports, module){
			var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
			
			var ExecutionEnvironment = {
			
			  canUseDOM: canUseDOM,
			
			  canUseWorkers: typeof Worker !== 'undefined',
			
			  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
			
			  canUseViewport: canUseDOM && !!window.screen,
			
			  isInWorker: !canUseDOM };
			
			module.exports = ExecutionEnvironment;
		}
	];
});