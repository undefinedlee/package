// react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/performanceNow.js
loader.define("react-native@0.21", "Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/performanceNow.js", "s", function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/performanceNow.js
	function (__inner_require__, exports, module) {
		var performance = __inner_require__(1 /*Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/performance.js*/);

		var performanceNow;

		if (performance.now) {
			performanceNow = function performanceNow() {
				return performance.now();
			};
		} else {
			performanceNow = function performanceNow() {
				return Date.now();
			};
		}

		module.exports = performanceNow;
	},
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/performance.js
	function (__inner_require__, exports, module) {
		var ExecutionEnvironment = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/ExecutionEnvironment.js');

		var performance;

		if (ExecutionEnvironment.canUseDOM) {
			performance = window.performance || window.msPerformance || window.webkitPerformance;
		}

		module.exports = performance || {};
	}];
});