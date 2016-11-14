loader.define("sss4@0.0.1/index.js", ["react-native@0.33/Libraries/react-native/react-native.js", "enjoy-rn-support@0.2/dist/index.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// index.js
		function(__inner_require__, exports, module){
			var _reactNative = require('react-native@0.33/Libraries/react-native/react-native.js');
			
			var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);
			
			var _main = __inner_require__(1 /*main.js*/);
			
			var _main2 = babelHelpers.interopRequireDefault(_main);
			
			_reactNative.AppRegistry.registerComponent("sss4", function () {
			  return _main2.default;
			});
		},		// main.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = undefined;
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);
			
			var _enjoyRnSupport = require("enjoy-rn-support@0.2/dist/index.js");
			
			var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);
			
			var _commonCss = __inner_require__(2 /*common-css.js*/);
			
			var _commonCss2 = babelHelpers.interopRequireDefault(_commonCss);
			
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
			
			_enjoyRnSupport2.default.StyleSheet.globalStylesheets.push(_commonCss2.default);
			
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
									return __project + "/views" + url + "/index.js" + params;
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
			
									url = url.replace(__project + "/views", "").replace(/\/index\.js$/, "");
			
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
		},		// common-css.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			
			var _enjoyRnSupport = require("enjoy-rn-support@0.2/dist/index.js");
			
			var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);
			
			var StyleSheet = _enjoyRnSupport2.default.StyleSheet;
			exports.default = new StyleSheet({
				rules: {
					"0": {
						color: "#f00"
					}
				},
				index: {
					"*": [{
						key: "0"
					}]
				}
			});
		}
	];
});