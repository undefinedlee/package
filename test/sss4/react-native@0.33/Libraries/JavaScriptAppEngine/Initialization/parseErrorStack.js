loader.define("react-native@0.33/Libraries/JavaScriptAppEngine/Initialization/parseErrorStack.js", ["stacktrace-parser@0.1/index.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/JavaScriptAppEngine/Initialization/parseErrorStack.js
	function (__inner_require__, exports, module) {
		var stacktraceParser = require('stacktrace-parser@0.1/index.js');

		function parseErrorStack(e) {
			if (!e || !e.stack) {
				return [];
			}

			var stack = Array.isArray(e.stack) ? e.stack : stacktraceParser.parse(e.stack);

			var framesToPop = e.framesToPop || 0;
			while (framesToPop--) {
				stack.shift();
			}

			return stack;
		}

		module.exports = parseErrorStack;
	}];
});