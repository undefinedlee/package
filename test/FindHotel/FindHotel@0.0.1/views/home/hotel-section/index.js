// FindHotel@0.0.1/views/home/hotel-section/index.js
loader.define("FindHotel@0.0.1", "views/home/hotel-section/index.js", "", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// views/home/hotel-section/index.js
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
			var __util__ = Util.pageUtil(__project + "/views/home/hotel-section/index");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			var Component = _enjoyRnSupport2.default.Component;
			
			var HotelSection = (_temp = _class = function (_Component) {
				babelHelpers.inherits(HotelSection, _Component);
			
				function HotelSection(props) {
					babelHelpers.classCallCheck(this, HotelSection);
			
					var _this = babelHelpers.possibleConstructorReturn(this, (HotelSection.__proto__ || Object.getPrototypeOf(HotelSection)).call(this, props));
			
					if (HotelSection.__start_list__) {
						HotelSection.__start_list__.forEach(function (item) {
							item.call(_this);
						});
					}
					return _this;
				}
			
				return HotelSection;
			}(Component), _class.View = __inner_require__(1 /*views/home/hotel-section/index-html.js*/).default, _class.Styles = [__inner_require__(2 /*views/home/hotel-section/index-css.js*/).default], _class.__start_list__ = [function () {
				this._styles = HotelSection.Styles;
			}, function () {
				this.view = HotelSection.View.call(this);
			}], _temp);
			exports.default = HotelSection;
		},
		// views/home/hotel-section/index-html.js
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
			var A = _enjoyRnSupport2.default.A;
			var Image = _enjoyRnSupport2.default.Image;
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil(__project + "/views/home/hotel-section/index");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			function View() {
				var _this = this;
			
				return {
					render: function render(components) {
						return __dom__(Box, {
							_component_id: _this.props._id,
							_styles: _this._styles,
							css: [".rn-div"],
							_id: __getKey__()
						}, __dom__(Box, {
							css: [".rn-div"],
							_id: __getKey__()
						}, _this.props.data.hotels.map(function (hotel, index) {
							return __dom__(Box, { key: hotel.id, css: [".rn-div", ".hotel-item"],
								_id: __getKey__()
							}, __dom__(A, {
								href: hotel.href,
								trapId: "5",
								onClick: function onClick() {
									_this.props.onHotelClick && _this.props.onHotelClick(hotel);
								}, css: [".rn-a", ".base"],
								_id: __getKey__(),
								_util: __util__,
								_navigator: _this.page
							}, __dom__(Box, {
								css: [".rn-div", ".pic"],
								_id: __getKey__()
							}, __dom__(Image, { src: hotel.pic, css: [".rn-img"],
								_id: __getKey__(),
								_util: __util__
							}), hotel.vr ? __dom__(Box, {
								css: [".rn-span", ".vr"],
								_id: __getKey__()
							}, "VR") : null), __dom__(Box, {
								css: [".rn-div", ".content"],
								_id: __getKey__()
							}, __dom__(Box, {
								css: [".rn-h3", ".title"],
								_id: __getKey__()
							}, __dom__(Box, {
								css: [".rn-span", ".name"],
								_id: __getKey__()
							}, hotel.name), hotel.price > 0 ? __dom__(Box, {
								css: [".rn-span", ".price"],
								_id: __getKey__()
							}, __dom__(Box, {
								css: [".rn-em", ".currency"],
								_id: __getKey__()
							}, "\xA5"), hotel.price, __dom__(Box, {
								css: [".rn-em", ".extend"],
								_id: __getKey__()
							}, "起")) : __dom__(Box, {
								css: [".rn-span", ".no-vacancies"],
								_id: __getKey__()
							}, "今日满房")), __dom__(Box, {
								css: [".rn-p", ".desc"],
								_id: __getKey__()
							}, hotel.desc), __dom__(Box, {
								css: [".rn-p", ".info"],
								_id: __getKey__()
							}, __dom__(Box, {
								css: [".rn-span", ".place"],
								_id: __getKey__()
							}, hotel.place), __dom__(Box, {
								css: [".rn-span", ".people"],
								_id: __getKey__()
							}, hotel.people ? hotel.people + "人住过" : "暂无数据")))), __dom__(Box, {
								css: [".rn-p", ".feature"],
								_id: __getKey__()
							}, hotel.features.map(function (feature) {
								return __dom__(A, {
									href: feature.href,
									trapId: "7",
									onClick: function onClick() {
										_this.props.onLabelClick && _this.props.onLabelClick(feature);
									}, css: [".rn-a"],
									_id: __getKey__(),
									_util: __util__,
									_navigator: _this.page
								}, feature.name);
							})));
						})), __dom__(Box, {
							css: [".rn-div"],
							_id: __getKey__()
						}, _this.props.data.theme.map(function (theme, index) {
							return __dom__(Box, {
								style: {
									backgroundImage: "url(" + theme.pic + ")",
									backgroundColor: "#333"
								},
								key: theme.title, css: [".rn-div", ".theme-item"],
								_id: __getKey__()
							}, __dom__(Box, {
								css: [".rn-div", ".mask"],
								_id: __getKey__()
							}), __dom__(A, { href: theme.href, css: [".rn-a", ".content"],
								_id: __getKey__(),
								_util: __util__,
								_navigator: _this.page
							}, __dom__(Box, {
								style: {
									fontSize: Math.min(24, (_enjoyRnSupport2.default.Screen.size.width - 100) / theme.title.length)
								},
								onLayout: function onLayout(e) {
									var target = _this.refs["theme-place-" + index];
									if (target) {
										target.nativeNode.setNativeProps({
											style: {
												width: e.nativeEvent.layout.width - 2
											}
										});
									}
								}, css: [".rn-h3", ".title", ".abc"],
								_id: __getKey__()
							}, __dom__(Box, { ref: "theme-place-" + index, css: [".rn-span", ".place"],
								_id: __getKey__()
							}, __dom__(Box, {
								css: [".rn-i"],
								_id: __getKey__()
							}), theme.city || _this.props.city ? _this.props.city.name : ""), theme.title), __dom__(Box, {
								css: [".rn-p", ".tags"],
								_id: __getKey__()
							}, theme.tags.map(function (tag) {
								return __dom__(Box, {
									css: [".rn-span", ".tag"],
									_id: __getKey__()
								}, tag);
							})), __dom__(A, {
								href: theme.href,
								title: theme.title,
								trapId: "6",
								onClick: function onClick() {
									_this.props.onEventClick && _this.props.onEventClick(theme);
								}, css: [".rn-a", ".enter-btn"],
								_id: __getKey__(),
								_util: __util__,
								_navigator: _this.page
							}, "进入专题")));
						})), components);
					}
				};
			}
		},
		// views/home/hotel-section/index-css.js
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
						marginTop: "0",
						marginHorizontal: "12px",
						marginBottom: "12px",
						backgroundColor: "#fff",
						shadowOffset: {
							width: "0",
							height: "0.5px"
						},
						shadowRadius: "1px",
						shadowOpacity: 1,
						shadowColor: "rgba(0,0,0,.05)",
						padding: "12px"
					},
					"1": {
						display: "block"
					},
					"2": {
						position: "relative",
						marginTop: "-12px",
						marginHorizontal: "-12px",
						marginBottom: "0",
						height: "150px",
						backgroundColor: "#efefef",
						backgroundImage: require("FindHotel@0.0.1/views/home/pic/logo@2x.png"),
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center center",
						backgroundSize: "90px 40px"
					},
					"3": {
						position: "absolute",
						width: "60px",
						height: "24px",
						left: "0",
						bottom: "13px",
						lineHeight: "24px",
						textAlign: "center",
						fontSize: "12px",
						color: "#fff",
						backgroundColor: "rgba(255, 138, 0, .9)",
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center"
					},
					"4": {
						content: "",
						display: "block",
						width: "16px",
						height: "10px",
						backgroundImage: __inner_require__(3 /*views/home/pic/vr.png*/),
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center center",
						backgroundSize: "16px 10px",
						marginRight: "3px"
					},
					"5": {
						position: "relative"
					},
					"6": {
						display: "flex",
						flexDirection: "row",
						height: "42px",
						lineHeight: "22px",
						paddingTop: "14px",
						paddingHorizontal: "0",
						paddingBottom: "6px",
						fontWeight: "normal"
					},
					"7": {
						flex: "1",
						fontSize: "18px",
						color: "#333",
						whiteSpace: "nowrap",
						overflow: "hidden"
					},
					"8": {
						color: "#f55",
						fontSize: "22px",
						display: "flex",
						flexDirection: "row",
						alignItems: "flex-end"
					},
					"9": {
						fontSize: "11px",
						lineHeight: "16px"
					},
					A: {
						marginRight: "2px"
					},
					B: {
						color: "#b2b2b2"
					},
					C: {
						fontSize: "16px",
						color: "#b2b2b2",
						marginLeft: "10px"
					},
					D: {
						fontSize: "12px",
						lineHeight: "2.5",
						color: "#888"
					},
					E: {
						fontSize: "11px",
						lineHeight: "1",
						"android-lineHeight": "1.5",
						color: "#b2b2b2",
						marginTop: "9px",
						marginHorizontal: "0",
						marginBottom: "12px",
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between"
					},
					F: {
						display: "flex",
						flexDirection: "row",
						alignItems: "center"
					},
					G: {
						content: "",
						display: "block",
						width: "10px",
						height: "12px",
						backgroundImage: __inner_require__(4 /*views/home/pic/place-gray.png*/),
						backgroundSize: "10px 12px",
						marginTop: "-2px",
						marginRight: "5px",
						marginBottom: "0",
						marginLeft: "0"
					},
					H: {
						content: "",
						display: "block",
						width: "14px",
						height: "12px",
						backgroundImage: __inner_require__(5 /*views/home/pic/people.png*/),
						backgroundSize: "14px 12px",
						marginTop: "-3px",
						marginRight: "5px",
						marginBottom: "0",
						marginLeft: "0"
					},
					I: {
						borderTopWidth: "1px",
						borderStyle: "solid",
						borderTopColor: "#ebebeb",
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap"
					},
					J: {
						marginTop: "12px",
						marginRight: "8px",
						marginBottom: "0",
						marginLeft: "0",
						fontSize: "12px",
						lineHeight: "24px",
						paddingVertical: "0",
						paddingHorizontal: "12px",
						borderRadius: "12px",
						color: "#888",
						borderWidth: "1px",
						borderStyle: "solid",
						borderColor: "#ebebeb",
						"ios-borderWidth": "0.5px"
					},
					K: {
						position: "relative",
						marginBottom: "12px",
						height: "200px",
						backgroundSize: "cover",
						backgroundPosition: "50% 50%",
						display: "flex",
						flexDirection: "column"
					},
					L: {
						position: "absolute",
						left: "0",
						right: "0",
						top: "0",
						bottom: "0",
						backgroundColor: "rgba(0,0,0,.4)"
					},
					M: {
						position: "relative",
						flex: "1",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center"
					},
					N: {
						position: "relative",
						color: "#fff",
						fontSize: "24px",
						borderBottomWidth: "2px",
						borderStyle: "solid",
						borderBottomColor: "#fff",
						height: "74px",
						lineHeight: "80px",
						"android-lineHeight": "74px",
						textAlign: "center",
						paddingVertical: "0",
						paddingHorizontal: "24px"
					},
					O: {
						content: "",
						display: "block",
						position: "absolute",
						width: "2px",
						height: "67px",
						"ios-height": "69px",
						"android-height": "71px",
						backgroundColor: "#fff",
						bottom: "0"
					},
					P: {
						left: "0"
					},
					Q: {
						right: "0"
					},
					R: {
						position: "absolute",
						left: "0",
						right: "0",
						top: "0",
						display: "flex",
						flexDirection: "row",
						fontSize: "12px",
						lineHeight: "14px"
					},
					S: {
						display: "block",
						width: "11px",
						height: "14px",
						backgroundImage: __inner_require__(6 /*views/home/pic/place-white.png*/),
						backgroundSize: "11px 14px",
						marginRight: "5px"
					},
					T: {
						content: "",
						flex: "1",
						height: "2px",
						backgroundColor: "#fff",
						marginTop: "5px"
					},
					U: {
						marginRight: "10px"
					},
					V: {
						marginLeft: "10px"
					},
					W: {
						fontSize: "12px",
						color: "#fff",
						marginVertical: "17px",
						marginHorizontal: "0",
						display: "flex",
						flexDirection: "row",
						justifyContent: "center"
					},
					X: {
						marginLeft: "10px",
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center"
					},
					Y: {
						content: "",
						width: "2px",
						height: "2px",
						backgroundColor: "#fff",
						marginRight: "10px"
					},
					Z: {
						marginLeft: "0"
					},
					a: {
						display: "none"
					},
					b: {
						width: "80px",
						height: "24px",
						fontSize: "12px",
						lineHeight: "24px",
						textAlign: "center",
						color: "#fff",
						backgroundColor: "rgba(0,0,0,.8)"
					}
				},
				index: {
					".hotel-item": [{
						key: "0"
					}],
					".base": [{
						selector: ".hotel-item .base",
						key: "1"
					}],
					".pic": [{
						selector: ".hotel-item .pic",
						key: "2"
					}],
					".vr": [{
						selector: ".hotel-item .vr",
						key: "3"
					}, {
						selector: ".hotel-item .vr:before",
						key: "4"
					}],
					".content": [{
						selector: ".hotel-item .content",
						key: "5"
					}, {
						selector: ".theme-item .content",
						key: "M"
					}],
					".title": [{
						selector: ".hotel-item .title",
						key: "6"
					}, {
						selector: ".theme-item .title",
						key: "N"
					}, {
						selector: ".theme-item .title:before",
						key: "O"
					}, {
						selector: ".theme-item .title:after",
						key: "O"
					}, {
						selector: ".theme-item .title:before",
						key: "P"
					}, {
						selector: ".theme-item .title:after",
						key: "Q"
					}],
					".name": [{
						selector: ".hotel-item .name",
						key: "7"
					}],
					".price": [{
						selector: ".hotel-item .price",
						key: "8"
					}],
					".currency": [{
						selector: ".hotel-item .price .currency",
						key: "9"
					}, {
						selector: ".hotel-item .price .currency",
						key: "A"
					}],
					".extend": [{
						selector: ".hotel-item .price .extend",
						key: "9"
					}, {
						selector: ".hotel-item .price .extend",
						key: "B"
					}],
					".no-vacancies": [{
						key: "C"
					}],
					".desc": [{
						selector: ".hotel-item .desc",
						key: "D"
					}],
					".info": [{
						selector: ".hotel-item .info",
						key: "E"
					}],
					".place": [{
						selector: ".hotel-item .place",
						key: "F"
					}, {
						selector: ".hotel-item .place:before",
						key: "G"
					}, {
						selector: ".theme-item .title .place",
						key: "R"
					}, {
						selector: ".theme-item .title .place:before",
						key: "T"
					}, {
						selector: ".theme-item .title .place:after",
						key: "T"
					}, {
						selector: ".theme-item .title .place:before",
						key: "U"
					}, {
						selector: ".theme-item .title .place:after",
						key: "V"
					}],
					".people": [{
						selector: ".hotel-item .people",
						key: "F"
					}, {
						selector: ".hotel-item .people:before",
						key: "H"
					}],
					".feature": [{
						selector: ".hotel-item .feature",
						key: "I"
					}],
					".rn-a": [{
						selector: ".hotel-item .feature .rn-a",
						key: "J"
					}],
					".theme-item": [{
						key: "K"
					}],
					".mask": [{
						selector: ".theme-item .mask",
						key: "L"
					}],
					".rn-i": [{
						selector: ".theme-item .title .place .rn-i",
						key: "S"
					}],
					".tags": [{
						selector: ".theme-item .tags",
						key: "W"
					}],
					".tag": [{
						selector: ".theme-item .tags .tag",
						key: "X"
					}, {
						selector: ".theme-item .tags .tag:before",
						key: "Y"
					}, {
						selector: ".theme-item .tags .tag:first-child",
						key: "Z"
					}, {
						selector: ".theme-item .tags .tag:first-child:before",
						key: "a"
					}],
					".enter-btn": [{
						selector: ".theme-item .enter-btn",
						key: "b"
					}]
				}
			});
		},
		// views/home/pic/vr.png
		function(__inner_require__, exports, module){
			var images = require("FindHotel@0.0.1/__base64_image_sprite_mod_id__");
			module.exports = ["", images["1fe7ec91204a49374dc8575f8cc0b4dfd52204d8.png"], images["a94efed097ce2de4ea970b0d525b58c88c16046e.png"], images["ea4fe39a74e9b92a9f4eeb5b1b0f9486908b415b.png"]][__pixel_ratio];
		},
		// views/home/pic/place-gray.png
		function(__inner_require__, exports, module){
			var images = require("FindHotel@0.0.1/__base64_image_sprite_mod_id__");
			module.exports = ["", images["576e4bbe6020540f151ebba30b3bc1e862abb0bf.png"], images["c96031367ea0c51e006f0fa910f5653dd311ef4c.png"], images["c410f35797b07ce8b6f113f65e6d3a6a30271760.png"]][__pixel_ratio];
		},
		// views/home/pic/people.png
		function(__inner_require__, exports, module){
			var images = require("FindHotel@0.0.1/__base64_image_sprite_mod_id__");
			module.exports = ["", images["a4483a70c68c9f8b5a2af27d9c3c2b4fa8d24192.png"], images["59f6a5a95ccca4bc563094cc2ec33678c7ce9c8f.png"], images["390c9eb1ef7f9a953fbf371cfa246fc9d7ec62ee.png"]][__pixel_ratio];
		},
		// views/home/pic/place-white.png
		function(__inner_require__, exports, module){
			var images = require("FindHotel@0.0.1/__base64_image_sprite_mod_id__");
			module.exports = ["", images["9df642f347f10af8863f844905451a9be5899469.png"], images["9ce13d68f35129eb5282fc922124735a94cc0c9e.png"], images["53651dcdb3583805b321e79877e453f49399b7bd.png"]][__pixel_ratio];
		}
	];
});