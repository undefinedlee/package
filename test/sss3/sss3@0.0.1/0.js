// sss3@0.0.1/index.ios.js
loader.define("sss3@0.0.1", "index.ios.js", "0", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// index.ios.js
		function(__inner_require__, exports, module){
			var _reactNative = require('react-native@0.21/Libraries/react-native/react-native.js');
			
			var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);
			
			var _res = __inner_require__(1 /*build/_res.js*/);
			
			var _res2 = babelHelpers.interopRequireDefault(_res);
			
			var _main = __inner_require__(2 /*build/main.js*/);
			
			var _main2 = babelHelpers.interopRequireDefault(_main);
			
			_reactNative.AppRegistry.registerComponent('sss3', function () {
			  return _main2.default;
			});
		},
		// build/_res.js
		function(__inner_require__, exports, module){
			__inner_require__(2 /*build/main.js*/);
			require("sss3@0.0.1/build/service/user.js");
			require("sss3@0.0.1/build/views/home/index-css.js");
			require("sss3@0.0.1/build/views/home/index-html.js");
			require("sss3@0.0.1/build/views/home/index.js");
			require("sss3@0.0.1/build/views/user-info/index-css.js");
			require("sss3@0.0.1/build/views/user-info/index-html.js");
			require("sss3@0.0.1/build/views/user-info/index.js");
			require("sss3@0.0.1/build/components/calendar/index-css.js");
			require("sss3@0.0.1/build/components/calendar/index-html.js");
			require("sss3@0.0.1/build/components/calendar/index.js");
			require("sss3@0.0.1/build/components/calendar/item/index-css.js");
			require("sss3@0.0.1/build/components/calendar/item/index-html.js");
			require("sss3@0.0.1/build/components/calendar/item/index.js");
		},
		// build/main.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = undefined;
			
			var _reactNative = require("react-native@0.21/Libraries/react-native/react-native.js");
			
			var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);
			
			var _enjoyRnSupport = require("enjoy-rn-support@0.2/dist/index.js");
			
			var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);
			
			var Container = _enjoyRnSupport2.default.Container;
			var Router = _enjoyRnSupport2.default.Router;
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil("sss3/build/main");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			var Main = function (_React$Component) {
				babelHelpers.inherits(Main, _React$Component);
			
				function Main() {
					babelHelpers.classCallCheck(this, Main);
					return babelHelpers.possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
				}
			
				babelHelpers.createClass(Main, [{
					key: "render",
					value: function render() {
						return __dom__(Container, {
							css: [".rn-container"],
							_id: __getKey__()
						}, __dom__(Router, {
							href: "/home",
							map: function map(url, util) {
								url = url.split("?");
								var params = url[1] ? "?" + url[1] : "";
								url = url[0];
			
								if (/^[a-zA-Z\-0-9]\:\/\//.test(url)) {
									return url + params;
								} else if (/^\.{1,2}\//.test(url)) {
									return util.resolve(url) + params;
								} else if (/^\//.test(url)) {
									return "sss3/build" + "/views" + url + "/index.js" + params;
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
			
									url = url.replace("sss3/build" + "/views", "").replace(/\/index\.js$/, "");
			
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