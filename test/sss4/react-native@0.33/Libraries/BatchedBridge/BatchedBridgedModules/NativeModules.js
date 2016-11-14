loader.define("react-native@0.33/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js", ["react-native@0.33/Libraries/BatchedBridge/BatchedBridge.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js
	function (__inner_require__, exports, module) {
		var BatchedBridge = require('react-native@0.33/Libraries/BatchedBridge/BatchedBridge.js');
		var RemoteModules = BatchedBridge.RemoteModules;

		function normalizePrefix(moduleName) {
			return moduleName.replace(/^(RCT|RK)/, '');
		}

		Object.keys(RemoteModules).forEach(function (moduleName) {
			var strippedName = normalizePrefix(moduleName);
			if (RemoteModules['RCT' + strippedName] && RemoteModules['RK' + strippedName]) {
				throw new Error('Module cannot be registered as both RCT and RK: ' + moduleName);
			}
			if (strippedName !== moduleName) {
				RemoteModules[strippedName] = RemoteModules[moduleName];
				delete RemoteModules[moduleName];
			}
		});

		var NativeModules = {};
		Object.keys(RemoteModules).forEach(function (moduleName) {
			Object.defineProperty(NativeModules, moduleName, {
				configurable: true,
				enumerable: true,
				get: function get() {
					var module = RemoteModules[moduleName];
					if (module && typeof module.moduleID === 'number' && global.nativeRequireModuleConfig) {

						var rawConfig = global.nativeRequireModuleConfig(moduleName);
						var config = typeof rawConfig === 'string' ? JSON.parse(rawConfig) : rawConfig;
						module = config && BatchedBridge.processModuleConfig(config, module.moduleID);
						RemoteModules[moduleName] = module;
					}
					Object.defineProperty(NativeModules, moduleName, {
						configurable: true,
						enumerable: true,
						value: module });

					return module;
				} });
		});

		module.exports = NativeModules;
	}];
});