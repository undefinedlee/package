// FindHotel@0.0.1/service/mapi.js
loader.define("FindHotel@0.0.1", "service/mapi.js", "g", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// service/mapi.js
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
			var __util__ = Util.pageUtil(__project + "/service/mapi");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			var Platform = _enjoyRnSupport2.default.Platform;
			
			var platform = Platform.isRN ? "rn" : "h5";
			exports.default = {
				"rn": {
					"citylist": ["PerfectHotel/hotelevent/getcitylistnew"],
					"getlabels": ["PerfectHotel/hotelevent/getlabelbydid", ["did"]],
					"getcarousel": ["PerfectHotel/hotelevent/getcarousel"],
					"gethotellistbylabelanddid": ["PerfectHotel/hotelevent/gethotellistbylabelanddid", ["did", "Pages", "labelid", "months"]],
					"secondhotellist": ["/PerfectHotel/hotelevent/hotellistinfo", ["did", "labelid", "pages", "orderby", "indate", "outdate"]]
				},
				"h5": {
					"citylist": ["perfecthotel/citylist/"],
					"getlabels": ["perfecthotel/getlabels", ["did"]],
					"getcarousel": ["perfecthotel/getcarousel"],
					"gethotellistbylabelanddid": ["perfecthotel/gethotellistbylabelanddid", ["cityId", "page"]],
					"secondhotellist": ["perfecthotel/getsecondhotellist", ["cityId", "labelid", "pages", "orderby", "indate", "outdate"]]
				}
			}[platform];
		}
	];
});