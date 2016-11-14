loader.define("react-native@0.33/__react__/lib/ReactInstrumentation.js", ["react-native@0.33/__react__/lib/ReactDebugTool.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// __react__/lib/ReactInstrumentation.js
	function (__inner_require__, exports, module) {
		var debugTool = null;

		if (process.env.NODE_ENV !== 'production') {
			var ReactDebugTool = require('react-native@0.33/__react__/lib/ReactDebugTool.js');
			debugTool = ReactDebugTool;
		}

		module.exports = { debugTool: debugTool };
	}];
});