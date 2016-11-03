// react-native@0.21/Libraries/vendor/core/guid.js
loader.define("react-native@0.21", "Libraries/vendor/core/guid.js", "1m", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// Libraries/vendor/core/guid.js
		function(__inner_require__, exports, module){
			function guid() {
			  return 'f' + (Math.random() * (1 << 30)).toString(16).replace('.', '');
			}
			
			module.exports = guid;
		}
	];
});