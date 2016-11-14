loader.define("react-native@0.33/Libraries/JavaScriptAppEngine/Initialization/getDevServer.js", ["react-native@0.33/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/JavaScriptAppEngine/Initialization/getDevServer.js
	function (__inner_require__, exports, module) {
		var _require = require('react-native@0.33/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js'),
		    SourceCode = _require.SourceCode;

		var _cachedDevServerURL = void 0;
		var FALLBACK = 'http://localhost:8081/';

		function getDevServer() {
			if (_cachedDevServerURL === undefined) {
				var match = SourceCode.scriptURL && SourceCode.scriptURL.match(/^https?:\/\/.*?\//);
				_cachedDevServerURL = match ? match[0] : null;
			}

			return {
				url: _cachedDevServerURL || FALLBACK,
				bundleLoadedFromServer: _cachedDevServerURL !== null };
		}

		module.exports = getDevServer;
	}];
});