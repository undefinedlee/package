loader.define("react-native@0.33/Libraries/Utilities/UIManager.js", ["react-native@0.33/Libraries/Utilities/Platform.ios.js", "react-native@0.33/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js", "react-native@0.33/__react__/lib/findNodeHandle.js", "react-native@0.33/__fbjs__/lib/invariant.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Utilities/UIManager.js
	function (__inner_require__, exports, module) {
		var Platform = require('react-native@0.33/Libraries/Utilities/Platform.ios.js');
		var NativeModules = require('react-native@0.33/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js');var UIManager = NativeModules.UIManager;

		var findNodeHandle = require('react-native@0.33/__react__/lib/findNodeHandle.js');
		var invariant = require('react-native@0.33/__fbjs__/lib/invariant.js');

		invariant(UIManager, 'UIManager is undefined. The native module config is probably incorrect.');

		var _takeSnapshot = UIManager.takeSnapshot;

		UIManager.takeSnapshot = function _callee(view, options) {
			return regeneratorRuntime.async(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {case 0:
							if (_takeSnapshot) {
								_context.next = 3;break;
							}
							console.warn('UIManager.takeSnapshot is not available on this platform');return _context.abrupt('return');case 3:

							if (typeof view !== 'number' && view !== 'window') {
								view = findNodeHandle(view) || 'window';
							}return _context.abrupt('return', _takeSnapshot(view, options));case 5:case 'end':
							return _context.stop();}
				}
			}, null, this);
		};

		if (Platform.OS === 'ios') {
			(function () {

				function normalizePrefix(moduleName) {
					return moduleName.replace(/^(RCT|RK)/, '');
				}

				Object.keys(UIManager).forEach(function (viewName) {
					var viewConfig = UIManager[viewName];
					if (viewConfig.Manager) {
						(function () {
							var constants = void 0;

							Object.defineProperty(viewConfig, 'Constants', {
								configurable: true,
								enumerable: true,
								get: function get() {
									if (constants) {
										return constants;
									}
									constants = {};
									var viewManager = NativeModules[normalizePrefix(viewConfig.Manager)];
									viewManager && Object.keys(viewManager).forEach(function (key) {
										var value = viewManager[key];
										if (typeof value !== 'function') {
											constants[key] = value;
										}
									});
									return constants;
								} });

							var commands = void 0;

							Object.defineProperty(viewConfig, 'Commands', {
								configurable: true,
								enumerable: true,
								get: function get() {
									if (commands) {
										return commands;
									}
									commands = {};
									var viewManager = NativeModules[normalizePrefix(viewConfig.Manager)];
									var index = 0;
									viewManager && Object.keys(viewManager).forEach(function (key) {
										var value = viewManager[key];
										if (typeof value === 'function') {
											commands[key] = index++;
										}
									});
									return commands;
								} });
						})();
					}
				});
			})();
		}

		module.exports = UIManager;
	}];
});