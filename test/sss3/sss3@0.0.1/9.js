// sss3@0.0.1/build/components/calendar/index-html.js
loader.define("sss3@0.0.1", "build/components/calendar/index-html.js", "9", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// build/components/calendar/index-html.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = View;
			
			var _reactNative = require("react-native@0.21/Libraries/react-native/react-native.js");
			
			var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);
			
			var _enjoyRnSupport = require("enjoy-rn-support@0.2/dist/index.js");
			
			var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);
			
			var _index = require("sss3@0.0.1/build/components/calendar/item/index.js");
			
			var _index2 = babelHelpers.interopRequireDefault(_index);
			
			var Body = _enjoyRnSupport2.default.Body;
			var Box = _enjoyRnSupport2.default.Box;
			var A = _enjoyRnSupport2.default.A;
			var ScrollView = _enjoyRnSupport2.default.ScrollView;
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil("sss3/build/components/calendar/index");
			
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
					}, "选择日期"), __dom__(Box, {
						css: [".rn-div", ".navbar-right"],
						_id: __getKey__()
					}, __dom__(A, { onClick: function onClick() {
							_this.props.layer.hide();
						}, css: [".rn-a"],
						_id: __getKey__()
					}, "关闭"))), __dom__(ScrollView, {
						css: [".rn-scroll-view", ".container"],
						_id: __getKey__()
					}, this.state.dates.map(function (date) {
						return __dom__(_index2.default, { date: date, onSelect: _this.selectDate.bind(_this) });
					})), components);
				}.bind(this);
			
				return __view__;
			}
		}
	];
});