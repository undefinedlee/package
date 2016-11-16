__d("lodash@4/_defineProperty.js", ["lodash@4/_getNative.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// _defineProperty.js
		function(__inner_require__, exports, module){
			var getNative = require('lodash@4/_getNative.js');
			
			var defineProperty = function () {
			  try {
			    var func = getNative(Object, 'defineProperty');
			    func({}, '', {});
			    return func;
			  } catch (e) {}
			}();
			
			module.exports = defineProperty;
		}
	];
});