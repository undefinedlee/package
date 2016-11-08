// FindHotel@0.0.1/views/home/theme-list/index.js
loader.define("FindHotel@0.0.1", "views/home/theme-list/index.js", "", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// views/home/theme-list/index.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = undefined;
			
			var _class, _temp;
			
			var _reactNative = require("react-native@0.21/Libraries/react-native/react-native.js");
			
			var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);
			
			var _enjoyRnSupport = require("enjoy-rn-support@0.0.47/dist/index.js");
			
			var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);
			
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil(__project + "/views/home/theme-list/index");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			var Component = _enjoyRnSupport2.default.Component;
			
			var ThemeList = (_temp = _class = function (_Component) {
				babelHelpers.inherits(ThemeList, _Component);
			
				function ThemeList(props) {
					babelHelpers.classCallCheck(this, ThemeList);
			
					var _this = babelHelpers.possibleConstructorReturn(this, (ThemeList.__proto__ || Object.getPrototypeOf(ThemeList)).call(this, props));
			
					if (ThemeList.__start_list__) {
						ThemeList.__start_list__.forEach(function (item) {
							item.call(_this);
						});
					}
					return _this;
				}
			
				babelHelpers.createClass(ThemeList, [{
					key: "contentNode",
					get: function get() {
						return this.refs.themeBar;
					}
				}]);
				return ThemeList;
			}(Component), _class.View = __inner_require__(1 /*views/home/theme-list/index-html.js*/).default, _class.Styles = [__inner_require__(2 /*views/home/theme-list/index-css.js*/).default], _class.__start_list__ = [function () {
				this._styles = ThemeList.Styles;
			}, function () {
				this.view = ThemeList.View.call(this);
			}], _temp);
			exports.default = ThemeList;
		},
		// views/home/theme-list/index-html.js
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
			var ScrollView = _enjoyRnSupport2.default.ScrollView;
			var A = _enjoyRnSupport2.default.A;
			var Image = _enjoyRnSupport2.default.Image;
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil(__project + "/views/home/theme-list/index");
			
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
							css: __class__(["rn-section", ["theme-list", {
								"fn-hide": !_this.props.data.length
							}]]),
							_id: __getKey__()
						}, __dom__(Box, {
							css: [".rn-h2", ".mod-title"],
							_id: __getKey__()
						}, __dom__(Box, {
							css: [".rn-span"],
							_id: __getKey__()
						}, "主题酒店")), __dom__(ScrollView, {
							ref: "themeBar",
							horizontal: true,
							contentContainerStyle: {
								width: _this.props.data.length * 142 + 12
							}, css: [".rn-scroll-view"],
							_id: __getKey__()
						}, _this.props.data.map(function (theme, index) {
							return __dom__(A, {
								href: theme.href,
								key: index,
								trapId: "4",
								onClick: function onClick() {
									_this.props.onClick && _this.props.onClick(theme);
								}, css: [".rn-a", ".item"],
								_id: __getKey__(),
								_util: __util__,
								_navigator: _this.page
							}, __dom__(Image, { src: theme.pic, css: [".rn-img"],
								_id: __getKey__(),
								_util: __util__
							}), __dom__(Box, {
								css: [".rn-span", ".name"],
								_id: __getKey__()
							}, __dom__(Box, {
								css: [".rn-span"],
								_id: __getKey__()
							}, theme.name)));
						})), components);
					}
				};
			}
		},
		// views/home/theme-list/index-css.js
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
						backgroundColor: "#fff",
						paddingBottom: "12px",
						marginBottom: "10px"
					},
					"1": {
						position: "relative",
						width: "130px",
						height: "130px",
						marginRight: "12px",
						display: "block",
						backgroundColor: "#efefef",
						backgroundImage: __inner_require__(3 /*views/home/pic/default-pic@2x.png*/),
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center center",
						backgroundSize: "130px 130px"
					},
					"2": {
						marginLeft: "12px"
					},
					"3": {
						position: "absolute",
						left: "0",
						right: "0",
						top: "0",
						bottom: "0",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center"
					},
					"4": {
						fontSize: "14px",
						lineHeight: "24px",
						height: "24px",
						paddingVertical: "0",
						paddingHorizontal: "8px",
						color: "#fff",
						backgroundColor: "rgba(0,0,0,.8)"
					}
				},
				index: {
					".theme-list": [{
						key: "0"
					}],
					".item": [{
						selector: ".theme-list .item",
						key: "1"
					}, {
						selector: ".theme-list .item:first-child",
						key: "2"
					}],
					".name": [{
						selector: ".theme-list .item .name",
						key: "3"
					}],
					".rn-span": [{
						selector: ".theme-list .item .name .rn-span",
						key: "4"
					}]
				}
			});
		},
		// views/home/pic/default-pic@2x.png
		function(__inner_require__, exports, module){
			var images = require("FindHotel@0.0.1/__base64_image_sprite_mod_id__");
			module.exports = ["", images["0d9aff293929ab613d6e5f762b2bc6ee5ceacb00.png"], images["84e1bd77ee626aceef7d6c1985ec2987181d4e9c.png"], images["84e1bd77ee626aceef7d6c1985ec2987181d4e9c.png"]][__pixel_ratio];
		}
	];
});