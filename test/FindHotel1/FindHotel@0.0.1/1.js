// FindHotel@0.0.1/index.js
loader.define("FindHotel@0.0.1", "index.js", "1", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// index.js
		function(__inner_require__, exports, module){
			var _reactNative = require('react-native@0.21/Libraries/react-native/react-native.js');
			
			var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);
			
			var _enjoyRnSupport = require('enjoy-rn-support@0.0.47/dist/index.js');
			
			var _main = __inner_require__(1 /*main.js*/);
			
			var _main2 = babelHelpers.interopRequireDefault(_main);
			
			_enjoyRnSupport.NativeModules.init(require('NativeModules'));
			
			_reactNative.AppRegistry.registerComponent("FindHotel", function () {
			  return _main2.default;
			});
		},
		// main.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = undefined;
			
			var _reactNative = require("react-native@0.21/Libraries/react-native/react-native.js");
			
			var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);
			
			var _enjoyRnSupport = require("enjoy-rn-support@0.0.47/dist/index.js");
			
			var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);
			
			var _appEvent = require("FindHotel@0.0.1/components/app-event.js");
			
			var _appEvent2 = babelHelpers.interopRequireDefault(_appEvent);
			
			var _index = require("FindHotel@0.0.1/views/home/index.js");
			
			var _index2 = babelHelpers.interopRequireDefault(_index);
			
			var _index3 = require("FindHotel@0.0.1/views/list/index.js");
			
			var _index4 = babelHelpers.interopRequireDefault(_index3);
			
			var _index5 = require("FindHotel@0.0.1/views/test/index.js");
			
			var _index6 = babelHelpers.interopRequireDefault(_index5);
			
			var Container = _enjoyRnSupport2.default.Container;
			var Router = _enjoyRnSupport2.default.Router;
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil(__project + "/main");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			var Platform = _enjoyRnSupport2.default.Platform;
			
			// import Cal from "./views/cal/index";
			// import TestLocal from "./views/testLocal/index";
			// import DetailInfo from "./views/detailinfo/index";
			// import Demo from "./views/demo/index";
			
			if (Platform.isWeb) {
				window.__mods__ = {
					home: _index2.default,
					list: _index4.default,
					// demo: Demo,
					test: _index6.default
				};
			}
			
			var Main = function (_React$Component) {
				babelHelpers.inherits(Main, _React$Component);
			
				function Main(props) {
					babelHelpers.classCallCheck(this, Main);
			
					var _this = babelHelpers.possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));
			
					_this.state = {
						href: "/home"
					};
			
					_appEvent2.default.onRedirect(function (data) {
						if (_this.refs.router) {
							_this.refs.router._navigator.goFromNative("/list?labelid=" + data.labelId + "&cityname=" + data.cityName);
						}
					});
					return _this;
				}
			
				babelHelpers.createClass(Main, [{
					key: "render",
					value: function render() {
						if (!(this.state && this.state.href)) {
							return null;
						}
						return __dom__(Container, {
							css: [".rn-container"],
							_id: __getKey__()
						}, __dom__(Router, {
							ref: "router",
							href: this.state.href,
							map: function map(url, util) {
								url = url.split("?");
								var params = url[1] ? "?" + url[1] : "";
								url = url[0];
			
								if (url.match(/^https?\:\/\/m\.elong\.com\/hotel\/(\d+)\/nlist\//)) {
									if (Platform.isRN) {
										var match = url.match(/^https?\:\/\/m\.elong\.com\/hotel\/(\d+)\/nlist\//);
										var cityId = match ? match[1] : 0;
										var indate = (url.match(/indate\=([^&?]*)/) || ["", ""])[1];
										var outdate = (url.match(/outdate\=([^&?]*)/) || ["", ""])[1];
										var cityname = (url.match(/cityname\=([^&?]*)/) || ["", ""])[1];
			
										return "native://hotelList" + (params ? params + "&" : "?") + "cityId=" + cityId + "&checkInString=" + indate + "&checkOutString=" + outdate + "&cityName=" + cityname;
									} else {
										return url + params;
									}
								}
								if (/^https?\:\/\/m\.elong\.com\/hotel\//.test(url)) {
									if (Platform.isRN) {
										var _match = url.match(/^https?\:\/\/m\.elong\.com\/hotel\/(\d+)/);
										var hotelId = _match ? _match[1] : 0;
										var _indate = (url.match(/indate\=([^&?]*)/) || ["", ""])[1];
										var _outdate = (url.match(/outdate\=([^&?]*)/) || ["", ""])[1];
										return "native://hotelDetail" + (params ? params + "&" : "?") + "hotelId=" + hotelId + "&checkInString=" + _indate + "&checkOutString=" + _outdate;
									} else {
										return url + params;
									}
								}
			
								if (/^[a-zA-Z\-0-9]\:\/\//.test(url)) {
									return url + params;
								} else if (/^\.{1,2}\//.test(url)) {
									return util.resolve(url) + params;
								} else if (/^\//.test(url)) {
									return __PROJECT_ROOT__ + "/views" + url + "/index.js" + params;
								} else {
									return url + params;
								}
							},
							reverseMap: function reverseMap(url, util) {
								if (/^[a-zA-Z\-0-9]\:\/\//.test(url)) {
									return url;
								} else {
									url = url.split("?");
									var params = url[1] ? "?" + url[1] : "";
									url = url[0];
			
									url = url.replace(__PROJECT_ROOT__ + "/views", "").replace(/\/index\.js$/, "");
			
									return url + params;
								}
							}, css: [".rn-router"],
							_id: __getKey__(),
							_util: __util__
						}));
					}
				}]);
				return Main;
			}(_reactNative2.default.Component);
			exports.default = Main;
		}
	];
});