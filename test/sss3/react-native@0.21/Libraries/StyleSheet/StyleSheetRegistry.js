loader.define("react-native@0.21/Libraries/StyleSheet/StyleSheetRegistry.js", [], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/StyleSheet/StyleSheetRegistry.js
	function (__inner_require__, exports, module) {
		var styles = {};
		var uniqueID = 1;
		var emptyStyle = {};var StyleSheetRegistry = function () {
			function StyleSheetRegistry() {
				babelHelpers.classCallCheck(this, StyleSheetRegistry);
			}babelHelpers.createClass(StyleSheetRegistry, null, [{ key: 'registerStyle', value: function registerStyle(style) {
					var id = ++uniqueID;
					if (__DEV__) {
						Object.freeze(style);
					}
					styles[id] = style;
					return id;
				} }, { key: 'getStyleByID', value: function getStyleByID(id) {
					if (!id) {

						return emptyStyle;
					}

					var style = styles[id];
					if (!style) {
						console.warn('Invalid style with id `' + id + '`. Skipping ...');
						return emptyStyle;
					}
					return style;
				} }]);return StyleSheetRegistry;
		}();

		module.exports = StyleSheetRegistry;
	}];
});