// FindHotel@0.0.1/components/loading/index.js
loader.define("FindHotel@0.0.1", "components/loading/index.js", "", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// components/loading/index.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.Loading = undefined;
			
			var _class, _temp;
			
			exports.default = function (component) {
				var loading;
			
				if (!component.__start_list__) {
					component.__start_list__ = [];
				}
			
				component.__start_list__.push(function () {
					var _this2 = this;
			
					setTimeout(function () {
						_this2.appendComponent(__dom__(Loading, { _ref: function _ref(self) {
								loading = self;
			
								if (_this2._loading_open_count > 0) {
									loading.open();
								}
							} }));
					}, 1);
			
					this._loading_open_count = 0;
				});
			
				Object.defineProperties(component.prototype, {
					loading: {
						get: function get() {
							return this._loading_open_count > 0;
						},
						set: function set(open) {
							if (open) {
								if (this._loading_open_count === 0 && loading) {
									loading.open();
								}
			
								this._loading_open_count++;
							} else {
								if (this._loading_open_count > 0) {
									if (--this._loading_open_count === 0 && loading) {
										loading.close();
									}
								}
							}
						}
					}
				});
			};
			
			var _reactNative = require("react-native@0.21/Libraries/react-native/react-native.js");
			
			var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);
			
			var _enjoyRnSupport = require("enjoy-rn-support@0.0.47/dist/index.js");
			
			var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);
			
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil(__project + "/components/loading/index");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			var Loading = exports.Loading = (_temp = _class = function (_Enjoy$Component) {
				babelHelpers.inherits(Loading, _Enjoy$Component);
			
				function Loading(props) {
					babelHelpers.classCallCheck(this, Loading);
			
					var _this = babelHelpers.possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).call(this, props));
			
					_this.state = {
						isOpen: false
					};
			
					if (Loading.__start_list__) {
						Loading.__start_list__.forEach(function (item) {
							item.call(_this);
						});
					}
					return _this;
				}
			
				babelHelpers.createClass(Loading, [{
					key: "componentWillMount",
					value: function componentWillMount() {
						babelHelpers.get(Loading.prototype.__proto__ || Object.getPrototypeOf(Loading.prototype), "componentWillMount", this).call(this);
			
						if (this.props._ref) {
							this.props._ref(this);
						}
					}
				}, {
					key: "open",
					value: function open() {
						this.setState({
							isOpen: true
						});
					}
				}, {
					key: "close",
					value: function close() {
						this.setState({
							isOpen: false
						});
					}
				}]);
				return Loading;
			}(_enjoyRnSupport2.default.Component), _class.View = __inner_require__(1 /*components/loading/index-html.js*/).default, _class.Styles = [__inner_require__(2 /*components/loading/index-css.js*/).default], _class.__start_list__ = [function () {
				this._styles = Loading.Styles;
			}, function () {
				this.view = Loading.View.call(this);
			}], _temp);
			
			;
		},
		// components/loading/index-html.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
					value: true
			});
			exports.default = View;
			
			var _reactNative = require("react-native@0.21/Libraries/react-native/react-native.js");
			
			var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);
			
			var _enjoyRnSupport = require("enjoy-rn-support@0.0.47/dist/index.js");
			
			var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);
			
			var Box = _enjoyRnSupport2.default.Box;
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil(__project + "/components/loading/index");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
					return __htmlIndex__ + __keyIndex__++;
			}
			
			function View() {
					var _this = this;
			
					return {
							render: function render(components) {
									return __dom__(Box, { _component_id: _this.props._id,
											_styles: _this._styles,
											css: __class__(["rn-div", {
													"loading": true,
													"fn-hide": !_this.state.isOpen
											}]),
											_id: __getKey__()
									}, __dom__(Box, {
											css: [".rn-span"],
											_id: __getKey__()
									}, "努力加载中"), components);
							}
					};
			}
		},
		// components/loading/index-css.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			
			var _enjoyRnSupport = require("enjoy-rn-support@0.0.47/dist/index.js");
			
			var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);
			
			var StyleSheet = _enjoyRnSupport2.default.StyleSheet;
			exports.default = new StyleSheet({
				rules: {
					"0": {
						position: "absolute",
						left: "0",
						right: "0",
						top: "0",
						bottom: "0",
						backgroundColor: "rgba(255,255,255,.1)",
						backgroundImage: __inner_require__(3 /*components/loading/pic/loading.gif*/),
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center center",
						backgroundSize: "106px 93px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center"
					},
					"1": {
						fontSize: "14px",
						color: "#999",
						marginTop: "126px"
					}
				},
				index: {
					".loading": [{
						key: "0"
					}],
					".rn-span": [{
						selector: ".loading .rn-span",
						key: "1"
					}]
				}
			});
		},
		// components/loading/pic/loading.gif
		function(__inner_require__, exports, module){
			var images = require("FindHotel@0.0.1/__base64_image_sprite_mod_id__");
			module.exports = ["", __dirname + "/194ba1ecdb384ecb88b4e18fa42752d53781c209.gif", __dirname + "/194ba1ecdb384ecb88b4e18fa42752d53781c209.gif", __dirname + "/194ba1ecdb384ecb88b4e18fa42752d53781c209.gif"][__pixel_ratio];
		}
	];
});