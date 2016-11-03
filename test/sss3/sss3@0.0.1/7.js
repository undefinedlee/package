// sss3@0.0.1/build/views/user-info/index-html.js
loader.define("sss3@0.0.1", "build/views/user-info/index-html.js", "7", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// build/views/user-info/index-html.js
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
			var Body = _enjoyRnSupport2.default.Body;
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil("sss3/build/views/user-info/index");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			__util__.header({});
			
			function View() {
				var __view__ = {};
				var a;
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
								}, "用户信息"), __dom__(Box, {
									css: [".rn-left", ".navbar-left"],
									_id: __getKey__()
								}, __nav_util__.canBack ? __dom__(Box, {
									css: [".rn-back"],
									_id: __getKey__(),
									onClick: function onClick() {
										__nav_util__.back();
									}
								}, "返回") : null));
							}.bind(this)
						});
						a = this._styles;
					}.bind(this),
					check: function () {
						return this._styles !== a;
					}.bind(this)
				};
			
				__view__.render = function (components) {
					return __dom__(Body, {
						_component_id: this.props._id,
						_styles: this._styles,
						css: [".rn-body"],
						_id: __getKey__()
					}, this.state.user ? __dom__(Box, {
						css: [".rn-ul", ".user-info"],
						_id: __getKey__()
					}, __dom__(Box, {
						css: [".rn-li"],
						_id: __getKey__()
					}, "ID：", this.state.user.id), __dom__(Box, {
						css: [".rn-li"],
						_id: __getKey__()
					}, "姓名：", this.state.user.name), __dom__(Box, {
						css: [".rn-li"],
						_id: __getKey__()
					}, "性别：", this.state.user.sex), __dom__(Box, {
						css: [".rn-li"],
						_id: __getKey__()
					}, "年龄：", this.state.user.old)) : __dom__(Box, {
						css: [".rn-p", ".loading"],
						_id: __getKey__()
					}, "加载中..."), components);
				}.bind(this);
			
				return __view__;
			}
		}
	];
});