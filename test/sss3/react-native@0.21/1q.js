// react-native@0.21/Users/lifan/work-test/sss3/rn/node_modules/fbjs/lib/emptyFunction.js
loader.define("react-native@0.21", "Users/lifan/work-test/sss3/rn/node_modules/fbjs/lib/emptyFunction.js", "1q", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// Users/lifan/work-test/sss3/rn/node_modules/fbjs/lib/emptyFunction.js
		function(__inner_require__, exports, module){
			function makeEmptyFunction(arg) {
			  return function () {
			    return arg;
			  };
			}
			
			function emptyFunction() {}
			
			emptyFunction.thatReturns = makeEmptyFunction;
			emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
			emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
			emptyFunction.thatReturnsNull = makeEmptyFunction(null);
			emptyFunction.thatReturnsThis = function () {
			  return this;
			};
			emptyFunction.thatReturnsArgument = function (arg) {
			  return arg;
			};
			
			module.exports = emptyFunction;
		}
	];
});