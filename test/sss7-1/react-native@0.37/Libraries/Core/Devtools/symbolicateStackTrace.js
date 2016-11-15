__d("react-native@0.37/Libraries/Core/Devtools/symbolicateStackTrace.js", ["react-native@0.37/Libraries/Core/Devtools/getDevServer.js", "react-native@0.37/Libraries/BatchedBridge/NativeModules.js", "react-native@0.37/Libraries/Network/fetch.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Core/Devtools/symbolicateStackTrace.js
	function (__inner_require__, exports, module) {
		var getDevServer = require('react-native@0.37/Libraries/Core/Devtools/getDevServer.js');var _require = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js'),
		    SourceCode = _require.SourceCode;var _require2 = require('react-native@0.37/Libraries/Network/fetch.js'),
		    fetch = _require2.fetch;

		function symbolicateStackTrace(stack) {
			var devServer, i, response, json;return regeneratorRuntime.async(function symbolicateStackTrace$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {case 0:
							devServer = getDevServer();if (devServer.bundleLoadedFromServer) {
								_context.next = 3;break;
							}throw new Error('Bundle was not loaded from the packager');case 3:
							if (!SourceCode.scriptURL) {
								_context.next = 12;break;
							}
							i = 0;case 5:
							if (!(i < stack.length)) {
								_context.next = 12;break;
							}if (!(/^http/.test(stack[i].file) || !/[\\/]/.test(stack[i].file))) {
								_context.next = 8;break;
							}return _context.abrupt('break', 12);case 8:

							stack[i].file = SourceCode.scriptURL;case 9:
							++i;_context.next = 5;break;case 12:
							_context.next = 14;return regeneratorRuntime.awrap(fetch(devServer.url + 'symbolicate', {
								method: 'POST',
								body: JSON.stringify({ stack: stack }) }));case 14:
							response = _context.sent;_context.next = 17;return regeneratorRuntime.awrap(response.json());case 17:
							json = _context.sent;return _context.abrupt('return', json.stack);case 19:case 'end':
							return _context.stop();}
				}
			}, null, this);
		}

		module.exports = symbolicateStackTrace;
	}];
});