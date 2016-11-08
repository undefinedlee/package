loader.define("FindHotel@0.0.1/components/theme-selector/index.js", ["react-native@0.21/Libraries/react-native/react-native.js", "enjoy-rn-support@0.0.47/dist/index.js", "FindHotel@0.0.1/service/common.js", "FindHotel@0.0.1/components/city-selector/data.js", "FindHotel@0.0.1/__base64_image_sprite_mod_id__"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// components/theme-selector/index.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = undefined;
			
			var _class2, _temp;
			
			var _reactNative = require("react-native@0.21/Libraries/react-native/react-native.js");
			
			var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);
			
			var _enjoyRnSupport = require("enjoy-rn-support@0.0.47/dist/index.js");
			
			var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);
			
			var _common = require("FindHotel@0.0.1/service/common.js");
			
			var _common2 = babelHelpers.interopRequireDefault(_common);
			
			var _data = require("FindHotel@0.0.1/components/city-selector/data.js");
			
			var _data2 = babelHelpers.interopRequireDefault(_data);
			
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil(__project + "/components/theme-selector/index");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			var _dec, _class;
			
			var Component = _enjoyRnSupport2.default.Component;
			var events = _enjoyRnSupport2.default.events;
			
			var ThemeSelector = (_dec = events("change"), _dec(_class = (_temp = _class2 = function (_Component) {
				babelHelpers.inherits(ThemeSelector, _Component);
			
				function ThemeSelector(props) {
					var _this2 = this;
			
					babelHelpers.classCallCheck(this, ThemeSelector);
			
					var _this = babelHelpers.possibleConstructorReturn(this, (ThemeSelector.__proto__ || Object.getPrototypeOf(ThemeSelector)).call(this, props));
			
					_this.state = {
						city: null,
						data: []
					};
			
					_data2.default.onChange(function () {
						var _ref = babelHelpers.asyncToGenerator(regeneratorRuntime.mark(function _callee(city) {
							var data;
							return regeneratorRuntime.wrap(function _callee$(_context) {
								while (1) {
									switch (_context.prev = _context.next) {
										case 0:
											_context.prev = 0;
											_context.next = 3;
											return _common2.default.Themes(city.id);
			
										case 3:
											data = _context.sent;
			
											_this.setState({
												city: city,
												data: data
											});
											_context.next = 10;
											break;
			
										case 7:
											_context.prev = 7;
											_context.t0 = _context["catch"](0);
			
											_this.setState({
												city: city,
												data: []
											});
			
										case 10:
										case "end":
											return _context.stop();
									}
								}
							}, _callee, _this2, [[0, 7]]);
						}));
			
						return function (_x) {
							return _ref.apply(this, arguments);
						};
					}());
			
					if (ThemeSelector.__start_list__) {
						ThemeSelector.__start_list__.forEach(function (item) {
							item.call(_this);
						});
					}
					return _this;
				}
			
				babelHelpers.createClass(ThemeSelector, [{
					key: "select",
					value: function select(theme) {
						this.fireChange(theme);
						this.props.layer.hide();
					}
				}]);
				return ThemeSelector;
			}(Component), _class2.View = __inner_require__(1 /*components/theme-selector/index-html.js*/).default, _class2.Styles = [__inner_require__(2 /*components/theme-selector/index-css.js*/).default], _class2.__start_list__ = [function () {
				this._styles = ThemeSelector.Styles;
			}, function () {
				this.view = ThemeSelector.View.call(this);
			}], _temp)) || _class);
			exports.default = ThemeSelector;
		},		// components/theme-selector/index-html.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = View;
			
			var _reactNative = require("react-native@0.21/Libraries/react-native/react-native.js");
			
			var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);
			
			var _enjoyRnSupport = require("enjoy-rn-support@0.0.47/dist/index.js");
			
			var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);
			
			var Body = _enjoyRnSupport2.default.Body;
			var Box = _enjoyRnSupport2.default.Box;
			var A = _enjoyRnSupport2.default.A;
			var ScrollView = _enjoyRnSupport2.default.ScrollView;
			var Image = _enjoyRnSupport2.default.Image;
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil(__project + "/components/theme-selector/index");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			function View() {
				var __view__ = {};
			
				__view__.render = function (components) {
					var _this = this;
			
					return __dom__(Body, {
						_component_id: this.props._id,
						_styles: this._styles,
						css: [".rn-body"],
						_id: __getKey__()
					}, __dom__(Box, {
						css: [".rn-div", ".navbar"],
						_id: __getKey__()
					}, __dom__(Box, {
						css: [".rn-div", ".navbar-title"],
						_id: __getKey__()
					}, this.state.city ? this.state.city.name + "主题酒店" : "定位中..."), __dom__(Box, {
						css: [".rn-div", ".navbar-right"],
						_id: __getKey__()
					}, __dom__(A, {
						onClick: function onClick() {
							_this.props.layer.hide();
						}, css: [".rn-a", ".close"],
						_id: __getKey__()
					}))), __dom__(ScrollView, {
						css: [".rn-scroll-view"],
						_id: __getKey__()
					}, this.state.data.map(function (item) {
						return __dom__(A, {
							onClick: function onClick() {
								_this.select(item);
							}, css: [".rn-a", ".theme"],
							_id: __getKey__()
						}, __dom__(Image, { src: item.pic, css: [".rn-img"],
							_id: __getKey__(),
							_util: __util__
						}), __dom__(Box, {
							css: [".rn-div", ".content"],
							_id: __getKey__()
						}, __dom__(Box, {
							css: [".rn-h3"],
							_id: __getKey__()
						}, item.name), __dom__(Box, {
							css: [".rn-p"],
							_id: __getKey__()
						}, item.desc)));
					})), components);
				}.bind(this);
			
				return __view__;
			}
		},		// components/theme-selector/index-css.js
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
						backgroundColor: "#fff"
					},
					"1": {
						borderBottomWidth: "1px",
						borderStyle: "solid",
						borderBottomColor: "#ebebeb",
						"ios-borderBottomWidth": "0.5px"
					},
					"2": {
						fontSize: "17px",
						fontWeight: "normal",
						color: "#333"
					},
					"3": {
						width: "44px",
						height: "44px",
						marginRight: "-10px",
						backgroundImage: __inner_require__(3 /*components/theme-selector/close.png*/),
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center center",
						backgroundSize: "16px 16px"
					},
					"4": {
						position: "relative",
						paddingLeft: "94px",
						height: "94px",
						display: "flex",
						flexDirection: "column"
					},
					"5": {
						backgroundColor: "#f1f1f1"
					},
					"6": {
						position: "absolute",
						width: "70px",
						height: "70px",
						left: "12px",
						top: "12px"
					},
					"7": {
						flex: "1",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						borderBottomWidth: "1px",
						borderStyle: "solid",
						borderBottomColor: "#ebebeb",
						"ios-borderBottomWidth": "0.5px"
					},
					"8": {
						borderBottomWidth: 0
					},
					"9": {
						fontSize: "15px",
						fontWeight: "normal",
						color: "#333"
					},
					A: {
						fontSize: "11px",
						fontWeight: "normal",
						color: "#888"
					}
				},
				index: {
					".rn-body": [{
						key: "0"
					}],
					".navbar": [{
						key: "1"
					}],
					".navbar-title": [{
						key: "2"
					}],
					".close": [{
						key: "3"
					}],
					".theme": [{
						key: "4"
					}, {
						selector: ".theme:active",
						key: "5"
					}],
					".rn-img": [{
						selector: ".theme .rn-img",
						key: "6"
					}],
					".content": [{
						selector: ".theme .content",
						key: "7"
					}, {
						selector: ".theme:last-child .content",
						key: "8"
					}],
					".rn-h3": [{
						selector: ".theme .content .rn-h3",
						key: "9"
					}],
					".rn-p": [{
						selector: ".theme .content .rn-p",
						key: "A"
					}]
				}
			});
		},		// components/theme-selector/close.png
		function(__inner_require__, exports, module){
			var images = require("FindHotel@0.0.1/__base64_image_sprite_mod_id__");
			module.exports = ["", images["e3a27e0bca12237b688c22d0d16c80824d2df3d6.png"], images["be370a73c0b2a48114ced12acd0f7ed5393fd5b2.png"], images["07b6317fb71c4e6bf6dcdceb4f2baa9be9ba132a.png"]][__pixel_ratio];
		}
	];
});