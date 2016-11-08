// FindHotel@0.0.1/views/list/trap.js
loader.define("FindHotel@0.0.1", "views/list/trap.js", "7", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// views/list/trap.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			
			var _reactNative = require("react-native@0.21/Libraries/react-native/react-native.js");
			
			var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);
			
			var _enjoyRnSupport = require("enjoy-rn-support@0.0.47/dist/index.js");
			
			var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);
			
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil(__project + "/views/list/trap");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			exports.default = {
				// 点击城市选择
				"1": {
					type: "click",
					params: {
						cspot: "city"
					}
				},
				// 点击过滤
				"2": {
					type: "click",
					params: {
						cspot: "filter"
					}
				},
				// 点击banner
				"3": {
					type: "click",
					params: {
						cspot: "banner"
					}
				},
				// 点击主题
				"4": {
					type: "click",
					params: {
						cspot: "theme"
					}
				},
				// 点击酒店
				"5": {
					type: "click",
					params: {
						cspot: "hotel"
					}
				},
				// 点击专题
				"6": {
					type: "click",
					params: {
						cspot: "topic"
					}
				},
				// 点击酒店底部标签
				"7": {
					type: "click",
					params: {
						cspot: "label"
					}
				},
				// 点击页面主题部分时触发
				"8": {
					type: "info-3",
					params: {
						tri: "theme",
						sthm: ""
					}
				},
				// 点击主题过滤里面主题时触发
				"9": {
					type: "info-3",
					params: {
						tri: "filter",
						sthm: ""
					}
				},
				// 点击酒店底部主题标签时触发
				"10": {
					type: "info-3",
					params: {
						tri: "label",
						sthm: ""
					}
				},
				// 点击banner时触发
				"11": {
					type: "info-4",
					params: {
						tri: "banner",
						ext: ""
					}
				},
				// 点击酒店时触发
				"12": {
					type: "info-5",
					params: {
						tri: "hotel",
						hid: "",
						spic: "",
						sthm: ""
					}
				},
				// 点击专题时触发
				"13": {
					type: "info-6",
					params: {
						tri: "topic",
						ext: ""
					}
				}
			};
		}
	];
});