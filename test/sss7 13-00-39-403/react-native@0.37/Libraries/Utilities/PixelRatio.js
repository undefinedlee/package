loader.define("react-native@0.37/Libraries/Utilities/PixelRatio.js", ["react-native@0.37/Libraries/Utilities/Dimensions.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Utilities/PixelRatio.js
	function (__inner_require__, exports, module) {
		var Dimensions = require('react-native@0.37/Libraries/Utilities/Dimensions.js');var PixelRatio = function () {
			function PixelRatio() {
				babelHelpers.classCallCheck(this, PixelRatio);
			}babelHelpers.createClass(PixelRatio, null, [{ key: 'get', value: function get() {
					return Dimensions.get('window').scale;
				} }, { key: 'getFontScale', value: function getFontScale() {
					return Dimensions.get('window').fontScale || PixelRatio.get();
				} }, { key: 'getPixelSizeForLayoutSize', value: function getPixelSizeForLayoutSize(layoutSize) {
					return Math.round(layoutSize * PixelRatio.get());
				} }, { key: 'roundToNearestPixel', value: function roundToNearestPixel(layoutSize) {
					var ratio = PixelRatio.get();
					return Math.round(layoutSize * ratio) / ratio;
				} }, { key: 'startDetecting', value: function startDetecting() {} }]);return PixelRatio;
		}();

		module.exports = PixelRatio;
	}];
});