loader.define("react-native@0.33/Libraries/JavaScriptAppEngine/Initialization/symbolicateStackTrace.js", ["react-native@0.33/Libraries/Fetch/fetch.js", "react-native@0.33/Libraries/JavaScriptAppEngine/Initialization/getDevServer.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/JavaScriptAppEngine/Initialization/symbolicateStackTrace.js
	function (__inner_require__, exports, module) {
		var _require = require('react-native@0.33/Libraries/Fetch/fetch.js'),
		    fetch = _require.fetch;
		var getDevServer = require('react-native@0.33/Libraries/JavaScriptAppEngine/Initialization/getDevServer.js');

		function symbolicateStackTrace(stack) {
			var devServer, response, json;return regeneratorRuntime.async(function symbolicateStackTrace$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {case 0:
							devServer = getDevServer();if (devServer.bundleLoadedFromServer) {
								_context.next = 3;break;
							}throw new Error('Bundle was not loaded from the packager');case 3:
							_context.next = 5;return regeneratorRuntime.awrap(fetch(devServer.url + 'symbolicate', {
								method: 'POST',
								body: JSON.stringify({ stack: stack }) }));case 5:
							response = _context.sent;_context.next = 8;return regeneratorRuntime.awrap(response.json());case 8:
							json = _context.sent;return _context.abrupt('return', json.stack);case 10:case 'end':
							return _context.stop();}
				}
			}, null, this);
		}

		module.exports = symbolicateStackTrace;
	}];
});