// sss3@0.0.1/build/views/home/index-html.js
loader.define("sss3@0.0.1", "build/views/home/index-html.js", "5", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// build/views/home/index-html.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = View;
			
			var _reactNative = require("react-native@0.21/Libraries/react-native/react-native.js");
			
			var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);
			
			var _enjoyRnSupport = require("enjoy-rn-support@0.2/dist/index.js");
			
			var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);
			
			var Box = _enjoyRnSupport2.default.Box;
			var A = _enjoyRnSupport2.default.A;
			var Body = _enjoyRnSupport2.default.Body;
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil("sss3/build/views/home/index");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			__util__.header({});
			
			function View() {
				var __view__ = {};
				var a, b, c;
				__view__.header = {
					render: function () {
						this.page.navbar.view({
							url: this.page.url,
							render: function (__nav_util__) {
								return __dom__(Box, {
									_styles: this._styles,
									css: [".rn-head", ".navbar"],
									_id: __getKey__()
								}, __dom__(Box, {
									css: [".rn-title", ".navbar-title"],
									_id: __getKey__()
								}, "首页"), __dom__(Box, {
									css: [".rn-left", ".navbar-left"],
									_id: __getKey__()
								}, __dom__(A, { onClick: this.openCalendar.bind(this), css: [".rn-a"],
									_id: __getKey__()
								}, this.state.date || "日历")), __dom__(Box, {
									css: [".rn-right", ".navbar-right"],
									_id: __getKey__()
								}, this.state.user ? __dom__(Box, {
									css: [".rn-span", ".user"],
									_id: __getKey__()
								}, "你好", __dom__(A, { href: "/user-info?userId=" + this.state.user.id, css: [".rn-a"],
									_id: __getKey__(),
									_util: __util__,
									_navigator: this.page
								}, this.state.user.name)) : __dom__(Box, {
									css: [".rn-span", ".logining"],
									_id: __getKey__()
								}, "登陆中...")));
							}.bind(this)
						});
						a = this._styles;
						b = this.state.date;
						c = this.state.user ? __dom__(Box, {
							css: [".rn-span", ".user"],
							_id: __getKey__()
						}, "你好", __dom__(A, { href: "/user-info?userId=" + this.state.user.id, css: [".rn-a"],
							_id: __getKey__(),
							_util: __util__,
							_navigator: this.page
						}, this.state.user.name)) : __dom__(Box, {
							css: [".rn-span", ".logining"],
							_id: __getKey__()
						}, "登陆中...");
					}.bind(this),
					check: function () {
						return (this.state.user ? __dom__(Box, {
							css: [".rn-span", ".user"],
							_id: __getKey__()
						}, "你好", __dom__(A, { href: "/user-info?userId=" + this.state.user.id, css: [".rn-a"],
							_id: __getKey__(),
							_util: __util__,
							_navigator: this.page
						}, this.state.user.name)) : __dom__(Box, {
							css: [".rn-span", ".logining"],
							_id: __getKey__()
						}, "登陆中...")) !== c || this.state.date !== b || this._styles !== a;
					}.bind(this)
				};
			
				__view__.render = function (components) {
					return __dom__(Body, {
						_component_id: this.props._id,
						_styles: this._styles,
						css: [".rn-body"],
						_id: __getKey__()
					}, __dom__(Box, {
						css: [".rn-p"],
						_id: __getKey__()
					}, "Hello Enjoy!"), components);
				}.bind(this);
			
				return __view__;
			}
		}
	];
});