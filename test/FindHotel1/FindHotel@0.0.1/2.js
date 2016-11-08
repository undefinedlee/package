// FindHotel@0.0.1/views/home/banner/index.js
loader.define("FindHotel@0.0.1", "views/home/banner/index.js", "2", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// views/home/banner/index.js
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
			var __util__ = Util.pageUtil(__project + "/views/home/banner/index");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			var Component = _enjoyRnSupport2.default.Component;
			
			var Banner = (_temp = _class = function (_Component) {
				babelHelpers.inherits(Banner, _Component);
			
				function Banner(props) {
					babelHelpers.classCallCheck(this, Banner);
			
					var _this = babelHelpers.possibleConstructorReturn(this, (Banner.__proto__ || Object.getPrototypeOf(Banner)).call(this, props));
			
					_this.state = {
						bannerIndex: 0
					};
			
					if (Banner.__start_list__) {
						Banner.__start_list__.forEach(function (item) {
							item.call(_this);
						});
					}
					return _this;
				}
			
				babelHelpers.createClass(Banner, [{
					key: "stop",
					value: function stop() {
						this.refs.swiper.stop();
					}
				}, {
					key: "play",
					value: function play() {
						this.refs.swiper.play();
					}
				}]);
				return Banner;
			}(Component), _class.View = __inner_require__(1 /*views/home/banner/index-html.js*/).default, _class.Styles = [__inner_require__(2 /*views/home/banner/index-css.js*/).default], _class.__start_list__ = [function () {
				this._styles = Banner.Styles;
			}, function () {
				this.view = Banner.View.call(this);
			}], _temp);
			exports.default = Banner;
		},
		// views/home/banner/index-html.js
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
			var Swiper = _enjoyRnSupport2.default.Swiper;
			var A = _enjoyRnSupport2.default.A;
			var Image = _enjoyRnSupport2.default.Image;
			var SwiperPager = _enjoyRnSupport2.default.SwiperPager;
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil(__project + "/views/home/banner/index");
			
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
							css: [".rn-div", ".banner-component"],
							_id: __getKey__()
						}, __dom__(Swiper, {
							ref: "swiper",
			
							loop: true,
							autoplay: true,
							onChange: function onChange(index) {
								_this.setState({
									bannerIndex: index
								});
							}, css: [".rn-swiper", ".banner"],
							_id: __getKey__()
						}, _this.props.data.map(function (banner, index) {
							return __dom__(A, {
								href: banner.href,
								key: index,
								title: banner.title,
								trapId: "3",
								onClick: function onClick() {
									_this.props.trap.click(_this.props.traps["3"].params);
			
									_this.props.trap.info(Object.assign(_this.props.traps["11"].params, {
										ext: banner.title
									}));
								}, css: [".rn-a", ".item"],
								_id: __getKey__(),
								_util: __util__,
								_navigator: _this.page
							}, __dom__(Image, { src: banner.pic, css: [".rn-img"],
								_id: __getKey__(),
								_util: __util__
							}));
						})), __dom__(SwiperPager, {
							count: _this.props.data.length,
							current: _this.state.bannerIndex,
							itemStyle: {
								backgroundColor: "#fff",
								opacity: "0.5"
							},
							currentStyle: {
								backgroundColor: "#fff",
								opacity: "1"
							},
							css: [".rn-swiper-pager", ".banner-pager"],
							_id: __getKey__()
						}), components);
					}
				};
			}
		},
		// views/home/banner/index-css.js
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
						height: "200px"
					},
					"1": {
						height: "200px",
						backgroundColor: "#efefef",
						backgroundImage: require("FindHotel@0.0.1/views/home/pic/logo@2x.png"),
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center center",
						backgroundSize: "90px 40px"
					},
					"2": {
						display: "block",
						height: "200px"
					},
					"3": {
						marginTop: "-20px"
					}
				},
				index: {
					".banner-component": [{
						key: "0"
					}],
					".banner": [{
						key: "1"
					}],
					".item": [{
						key: "2"
					}],
					".banner-pager": [{
						key: "3"
					}]
				}
			});
		}
	];
});