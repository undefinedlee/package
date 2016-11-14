loader.define("react-native@0.21/__fbjs__/lib/ExecutionEnvironment.js", [], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// __fbjs__/lib/ExecutionEnvironment.js
	function (__inner_require__, exports, module) {
		var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

		var ExecutionEnvironment = {

			canUseDOM: canUseDOM,

			canUseWorkers: typeof Worker !== 'undefined',

			canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

			canUseViewport: canUseDOM && !!window.screen,

			isInWorker: !canUseDOM };

		module.exports = ExecutionEnvironment;
	}];
});