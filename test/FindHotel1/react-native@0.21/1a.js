// react-native@0.21/Libraries/Utilities/HMRClient.js
loader.define("react-native@0.21", "Libraries/Utilities/HMRClient.js", "1a", function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Utilities/HMRClient.js
	function (__inner_require__, exports, module) {
		var Platform = require('react-native@0.21/Libraries/Utilities/Platform.ios.js');
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var processColor = require('react-native@0.21/Libraries/StyleSheet/processColor.js');

		var HMRClient = {
			enable: function enable(platform, bundleEntry, host, port) {
				invariant(platform, 'Missing required parameter `platform`');
				invariant(bundleEntry, 'Missing required paramenter `bundleEntry`');
				invariant(host, 'Missing required paramenter `host`');

				var WebSocket = require('react-native@0.21/Libraries/WebSocket/WebSocket.js');

				var wsHostPort = port !== null && port !== '' ? host + ':' + port : host;

				var wsUrl = 'ws://' + wsHostPort + '/hot?' + ('platform=' + platform + '&') + ('bundleEntry=' + bundleEntry.replace('.bundle', '.js'));

				var activeWS = new WebSocket(wsUrl);
				activeWS.onerror = function (e) {
					throw new Error('Hot loading isn\'t working because it cannot connect to the development server.\n\nEnsure the following:\n- Node server is running and available on the same network\n- run \'npm start\' from react-native root\n- Node server URL is correctly set in AppDelegate\n\nURL: ' + host + ':' + port + '\n\nError: ' + e.message);
				};
				activeWS.onmessage = function (_ref) {
					var data = _ref.data;
					var DevLoadingView = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').DevLoadingView;
					if (!DevLoadingView) {
						DevLoadingView = {
							showMessage: function showMessage() {},
							hide: function hide() {} };
					}
					data = JSON.parse(data);

					switch (data.type) {
						case 'update-start':
							{
								DevLoadingView.showMessage('Hot Loading...', processColor('#000000'), processColor('#aaaaaa'));

								break;
							}
						case 'update':
							{
								var _ret = function () {
									var modules = data.body.modules;
									var sourceMappingURLs = data.body.sourceMappingURLs;
									var sourceURLs = data.body.sourceURLs;

									if (Platform.OS === 'ios') {
										var RCTRedBox = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').RedBox;
										RCTRedBox && RCTRedBox.dismiss && RCTRedBox.dismiss();
									} else {
										var RCTExceptionsManager = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').ExceptionsManager;
										RCTExceptionsManager && RCTExceptionsManager.dismissRedbox && RCTExceptionsManager.dismissRedbox();
									}

									modules.forEach(function (code, i) {
										code = code + '\n\n' + sourceMappingURLs[i];

										require('react-native@0.21/Libraries/JavaScriptAppEngine/Initialization/SourceMapsCache.js').fetch({
											text: code,
											url: sourceURLs[i],
											sourceMappingURL: sourceMappingURLs[i] });

										var injectFunction = typeof global.nativeInjectHMRUpdate === 'function' ? global.nativeInjectHMRUpdate : eval;

										injectFunction(code, sourceURLs[i]);
									});

									DevLoadingView.hide();
									return 'break';
								}();if (_ret === 'break') break;
							}
						case 'update-done':
							{
								DevLoadingView.hide();
								break;
							}
						case 'error':
							{
								DevLoadingView.hide();
								throw new Error(data.body.type + ' ' + data.body.description);
							}
						default:
							{
								throw new Error('Unexpected message: ' + data);
							}}
				};
			} };

		module.exports = HMRClient;
	}];
});