// FindHotel@0.0.1/components/app-event.js
loader.define("FindHotel@0.0.1", "components/app-event.js", "c", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// components/app-event.js
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
			var __util__ = Util.pageUtil(__project + "/components/app-event");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			var NativeAppEventEmitter = _reactNative2.default.NativeAppEventEmitter;
			var DeviceEventEmitter = _reactNative2.default.DeviceEventEmitter;
			var events = _enjoyRnSupport2.default.events;
			var Platform = _enjoyRnSupport2.default.Platform;
			
			var Event = events(["show", "memory async"], ["city-change", "memory async"], ["redirect", "memory async"], ["update", "memory async"])({});
			
			if (Platform.isIOS) {
				NativeAppEventEmitter.addListener('AppEvent', function (e) {
					//alert(JSON.stringify(e));
					if (e.bussiLine == "findHotel") {
						//增量更新
						// alert(JSON.stringify(e.data));
						// if(e.data['updateEvent'] && e.data["upateData"]['level']=="0"){
						// 		Event.fireUpdate(e.data);
						// }
						// 页面跳转
						if (e.data['findHotelShow'] && e.data['cityName'] && e.data['labelId']) {
							Event.fireRedirect({
								cityName: e.data['cityName'],
								labelId: e.data['labelId']
							});
						} else if (e.data['findHotelShow'] && e.data['cityName']) {
							// APP其他地方修改城市，同步更新
							Event.fireCityChange(e.data['cityName']);
							Event.fireShow();
						} else if (e.data['findHotelShow'] && e.data['findHotelShow'] == 1) {
							// 从首页切换到发现酒店
							Event.fireShow();
						}
					}
				});
			} else if (Platform.isAndroid) {
				var NativeModules = require('NativeModules');
				if (NativeModules && NativeModules.MozartIntentExtra) {
					NativeModules.MozartIntentExtra.getIntent(function (err, data) {
						data = JSON.parse(data);
			
						if (data.intent == "ppage" && data.labelid) {
							Event.fireRedirect({
								cityName: data.cityname,
								labelId: data.labelid
							});
						} else if (data.cityname) {
							Event.fireCityChange(data.cityname);
							Event.fireShow();
						}
					});
				}
			
				DeviceEventEmitter.addListener('AppEvent', function (e) {
					if (e.bussiLine === "findHotel") {
						if (e.data["findHotelShow"] && e.data["cityName"]) {
							// APP其他地方修改城市，同步更新
							Event.fireCityChange(e.data['cityName']);
							Event.fireShow();
						} else if (e.data["findHotelShow"] && e.data["findHotelShow"] == 1) {
							Event.fireShow();
						}
					}
				});
			
				Event.fireShow();
			}
			
			exports.default = Event;
		}
	];
});