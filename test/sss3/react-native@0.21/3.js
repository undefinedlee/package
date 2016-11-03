// react-native@0.21/Users/lifan/work-test/sss3/rn/node_modules/react/lib/Object.assign.js
loader.define("react-native@0.21", "Users/lifan/work-test/sss3/rn/node_modules/react/lib/Object.assign.js", "3", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// Users/lifan/work-test/sss3/rn/node_modules/react/lib/Object.assign.js
		function(__inner_require__, exports, module){
			function assign(target, sources) {
			  if (target == null) {
			    throw new TypeError('Object.assign target cannot be null or undefined');
			  }
			
			  var to = Object(target);
			  var hasOwnProperty = Object.prototype.hasOwnProperty;
			
			  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
			    var nextSource = arguments[nextIndex];
			    if (nextSource == null) {
			      continue;
			    }
			
			    var from = Object(nextSource);
			
			    for (var key in from) {
			      if (hasOwnProperty.call(from, key)) {
			        to[key] = from[key];
			      }
			    }
			  }
			
			  return to;
			}
			
			module.exports = assign;
		}
	];
});