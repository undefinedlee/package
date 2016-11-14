loader.define("sss4@0.0.1/service/user.js", ["react-native@0.33/Libraries/react-native/react-native.js", "enjoy-rn-support@0.2/dist/index.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// service/user.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			
			var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");
			
			var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);
			
			var _enjoyRnSupport = require("enjoy-rn-support@0.2/dist/index.js");
			
			var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);
			
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil(__project + "/service/user");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			var Service = _enjoyRnSupport2.default.Service;
			exports.default = {
				UserInfo: Service({
					url: "xxx",
					params: ["userId"],
					method: "GET",
					cache: true,
					dataTransform: function dataTransform(data) {
						return {
							id: data.userId,
							name: data.userName,
							sex: data.userSex,
							old: data.userOld
						};
					},
					mockData: function mockData(params) {
						return new Promise(function (resolve, reject) {
							setTimeout(function () {
								resolve({
									userId: params.userId || 123456,
									userName: "张三",
									userSex: "男",
									userOld: 26
								});
							}, 2000);
						});
					}
				})
			};
		}
	];
});