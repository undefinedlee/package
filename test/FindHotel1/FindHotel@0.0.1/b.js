// FindHotel@0.0.1/service/common.js
loader.define("FindHotel@0.0.1", "service/common.js", "b", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// service/common.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			
			var _reactNative = require("react-native@0.21/Libraries/react-native/react-native.js");
			
			var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);
			
			var _enjoyRnSupport = require("enjoy-rn-support@0.0.47/dist/index.js");
			
			var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);
			
			var _mapi = require("FindHotel@0.0.1/service/mapi.js");
			
			var _mapi2 = babelHelpers.interopRequireDefault(_mapi);
			
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil(__project + "/service/common");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			var Service = _enjoyRnSupport2.default.Service;
			var Platform = _enjoyRnSupport2.default.Platform;
			exports.default = {
				CityList: Service({
					url: _mapi2.default.citylist[0],
					cache: true,
					dataTransform: function dataTransform(data) {
						var result = {
							"热门": data.more.map(function (city) {
								return [city.cityname, city.alias_en, city.did];
							})
						};
			
						data.data.forEach(function (city) {
							var key = city.fletter.toUpperCase();
			
							if (!result[key]) {
								result[key] = [];
							}
			
							result[key].push([city.cname, city.pinyin, "", city.did]);
						});
			
						return result;
					}
				}),
			
				Themes: Service({
					params: _mapi2.default.getlabels[1],
					url: _mapi2.default.getlabels[0],
					// url: "/perfecthotel/getlabels?did=${did}",
					method: "GET",
					cache: true,
					dataTransform: function dataTransform(data) {
						return (data.labels || data.data || []).map(function (item) {
							return {
								id: item.labelid,
								name: item.labelname,
								desc: item.desc,
								pic: item.img,
								href: "/list?labelid=" + item.labelid + "&if=11009"
							};
						});
					}
				})
			};
		}
	];
});