loader.define("react-native@0.37/Libraries/Utilities/Dimensions.js", ["react-native@0.37/Libraries/Utilities/Platform.ios.js", "react-native@0.37/Libraries/ReactNative/UIManager.js", "react-native@0.37/Libraries/EventEmitter/RCTDeviceEventEmitter.js", "fbjs@0.8/lib/invariant.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Utilities/Dimensions.js
	function (__inner_require__, exports, module) {
		var Platform = require('react-native@0.37/Libraries/Utilities/Platform.ios.js');
		var UIManager = require('react-native@0.37/Libraries/ReactNative/UIManager.js');
		var RCTDeviceEventEmitter = require('react-native@0.37/Libraries/EventEmitter/RCTDeviceEventEmitter.js');

		var invariant = require('fbjs@0.8/lib/invariant.js');

		var dimensions = {};var Dimensions = function () {
			function Dimensions() {
				babelHelpers.classCallCheck(this, Dimensions);
			}babelHelpers.createClass(Dimensions, null, [{ key: 'set', value: function set(dims) {

					if (dims && dims.windowPhysicalPixels) {

						dims = JSON.parse(JSON.stringify(dims));

						var windowPhysicalPixels = dims.windowPhysicalPixels;
						dims.window = {
							width: windowPhysicalPixels.width / windowPhysicalPixels.scale,
							height: windowPhysicalPixels.height / windowPhysicalPixels.scale,
							scale: windowPhysicalPixels.scale,
							fontScale: windowPhysicalPixels.fontScale };

						if (Platform.OS === 'android') {

							var screenPhysicalPixels = dims.screenPhysicalPixels;
							dims.screen = {
								width: screenPhysicalPixels.width / screenPhysicalPixels.scale,
								height: screenPhysicalPixels.height / screenPhysicalPixels.scale,
								scale: screenPhysicalPixels.scale,
								fontScale: screenPhysicalPixels.fontScale };

							delete dims.screenPhysicalPixels;
						} else {
							dims.screen = dims.window;
						}

						delete dims.windowPhysicalPixels;
					}

					babelHelpers.extends(dimensions, dims);
				} }, { key: 'get', value: function get(dim) {
					invariant(dimensions[dim], 'No dimension set for key ' + dim);
					return dimensions[dim];
				} }]);return Dimensions;
		}();

		Dimensions.set(UIManager.Dimensions);
		RCTDeviceEventEmitter.addListener('didUpdateDimensions', function (update) {
			Dimensions.set(update);
		});

		module.exports = Dimensions;
	}];
});