loader.define("react-native@0.33/Libraries/Components/StatusBar/StatusBarIOS.ios.js", ["react-native@0.33/Libraries/EventEmitter/NativeEventEmitter.js", "react-native@0.33/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Components/StatusBar/StatusBarIOS.ios.js
	function (__inner_require__, exports, module) {
		var NativeEventEmitter = require('react-native@0.33/Libraries/EventEmitter/NativeEventEmitter.js');var _require = require('react-native@0.33/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js'),
		    StatusBarManager = _require.StatusBarManager;var StatusBarIOS = function (_NativeEventEmitter) {
			babelHelpers.inherits(StatusBarIOS, _NativeEventEmitter);function StatusBarIOS() {
				babelHelpers.classCallCheck(this, StatusBarIOS);return babelHelpers.possibleConstructorReturn(this, (StatusBarIOS.__proto__ || Object.getPrototypeOf(StatusBarIOS)).apply(this, arguments));
			}return StatusBarIOS;
		}(NativeEventEmitter);

		module.exports = new StatusBarIOS(StatusBarManager);
	}];
});