// sss3@0.0.1/build/components/calendar/item/index-html.js
loader.define("sss3@0.0.1", "build/components/calendar/item/index-html.js", "d", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// build/components/calendar/item/index-html.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = View;
			
			var _reactNative = require("react-native@0.21/Libraries/react-native/react-native.js");
			
			var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);
			
			var _enjoyRnSupport = require("enjoy-rn-support@0.2/dist/index.js");
			
			var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);
			
			var A = _enjoyRnSupport2.default.A;
			var Box = _enjoyRnSupport2.default.Box;
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil("sss3/build/components/calendar/item/index");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			function View() {
				var _this = this;
			
				return {
					render: function render(components) {
						return __dom__(A, { onClick: function onClick() {
								_this.props.onSelect(_this.props.date.date);
							}, _component_id: _this.props._id,
							_styles: _this._styles,
							css: [".rn-a"],
							_id: __getKey__()
						}, _this.props.date.date, __dom__(Box, {
							css: [".rn-span"],
							_id: __getKey__()
						}, "周", _this.props.date.weekday), components);
					}
				};
			}
		}
	];
});