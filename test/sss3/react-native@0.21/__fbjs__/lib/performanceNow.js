loader.define("react-native@0.21/__fbjs__/lib/performanceNow.js", ["react-native@0.21/__fbjs__/lib/ExecutionEnvironment.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// __fbjs__/lib/performanceNow.js
	function (__inner_require__, exports, module) {
		var performance = __inner_require__(1 /*__fbjs__/lib/performance.js*/);

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
	}, // __fbjs__/lib/performance.js
	function (__inner_require__, exports, module) {
		var ExecutionEnvironment = require('react-native@0.21/__fbjs__/lib/ExecutionEnvironment.js');

		var performance;

		if (ExecutionEnvironment.canUseDOM) {
			performance = window.performance || window.msPerformance || window.webkitPerformance;
		}

		module.exports = performance || {};
	}];
});