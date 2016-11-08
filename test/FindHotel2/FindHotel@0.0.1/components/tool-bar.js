loader.define("FindHotel@0.0.1/components/tool-bar.js", ["react-native@0.21/Libraries/react-native/react-native.js", "enjoy-rn-support@0.0.47/dist/index.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// components/tool-bar.js
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
			var __util__ = Util.pageUtil(__project + "/components/tool-bar");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			var Platform = _enjoyRnSupport2.default.Platform;
			
			var NativeModules = require('NativeModules');
			
			exports.default = {
				show: function show() {
					if (NativeModules && NativeModules.MozartHomeToolBarNeedHidden && NativeModules.MozartHomeToolBarNeedHidden.eLongHomeToolBarNeedHidden) {
						NativeModules.MozartHomeToolBarNeedHidden.eLongHomeToolBarNeedHidden(0);
					}
				},
				hide: function hide() {
					if (NativeModules && NativeModules.MozartHomeToolBarNeedHidden && NativeModules.MozartHomeToolBarNeedHidden.eLongHomeToolBarNeedHidden) {
						NativeModules.MozartHomeToolBarNeedHidden.eLongHomeToolBarNeedHidden(1);
					}
				}
			};
		}
	];
});