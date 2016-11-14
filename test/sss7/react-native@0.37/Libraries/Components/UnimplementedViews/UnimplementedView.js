loader.define("react-native@0.37/Libraries/Components/UnimplementedViews/UnimplementedView.js", ["react-native@0.37/Libraries/react-native/React.js", "react-native@0.37/Libraries/StyleSheet/StyleSheet.js", "react-native@0.37/Libraries/Components/View/View.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Components/UnimplementedViews/UnimplementedView.js
	function (__inner_require__, exports, module) {
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var StyleSheet = require('react-native@0.37/Libraries/StyleSheet/StyleSheet.js');var UnimplementedView = function (_React$Component) {
			babelHelpers.inherits(UnimplementedView, _React$Component);function UnimplementedView() {
				var _ref;var _temp, _this, _ret;babelHelpers.classCallCheck(this, UnimplementedView);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = UnimplementedView.__proto__ || Object.getPrototypeOf(UnimplementedView)).call.apply(_ref, [this].concat(args))), _this), _this.setNativeProps = function () {}, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
			}babelHelpers.createClass(UnimplementedView, [{ key: 'render', value: function render() {

					var View = require('react-native@0.37/Libraries/Components/View/View.js');
					return React.createElement(View, { style: [styles.unimplementedView, this.props.style] }, this.props.children);
				} }]);return UnimplementedView;
		}(React.Component);

		var styles = StyleSheet.create({
			unimplementedView: {
				borderWidth: 1,
				borderColor: 'red',
				alignSelf: 'flex-start' } });

		module.exports = UnimplementedView;
	}];
});