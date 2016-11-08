// FindHotel@0.0.1/views/test/index.js
loader.define("FindHotel@0.0.1", "views/test/index.js", "", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// views/test/index.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = undefined;
			
			var _class, _temp;
			
			var _reactNative = require("react-native@0.21/Libraries/react-native/react-native.js");
			
			var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);
			
			var _enjoyRnSupport = require("enjoy-rn-support@0.0.47/dist/index.js");
			
			var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);
			
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil(__project + "/views/test/index");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			var Component = _enjoyRnSupport2.default.Component;
			var Layer = _enjoyRnSupport2.default.Layer;
			var NodeMethods = _enjoyRnSupport2.default.NodeMethods;
			var Screen = _enjoyRnSupport2.default.Screen;
			
			var $ = NodeMethods;
			
			var Test = (_temp = _class = function (_Component) {
				babelHelpers.inherits(Test, _Component);
			
				function Test(props) {
					babelHelpers.classCallCheck(this, Test);
			
					//接收事件
					var _this = babelHelpers.possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).call(this, props));
			
					var NativeAppEventEmitter = require('RCTNativeAppEventEmitter');
					NativeAppEventEmitter.addListener('AppEvent', function (e) {
						if (e.bussiLine == "findHotel") {
							alert('哇哇:' + JSON.stringify(e.data));
						}
					});
					_this.state = {
						code: "{\n                \"action\":\"webPage\", \n                \"params\":{\"url\":\"http://www.baidu.com\",\"isNaviHidden\":false,\"title\":\"你好世界\",\"style\":2}\n        }"
					};
			
					if (Test.__start_list__) {
						Test.__start_list__.forEach(function (item) {
							item.call(_this);
						});
					}
					return _this;
				}
			
				return Test;
			}(Component), _class.View = __inner_require__(1 /*views/test/index-html.js*/).default, _class.Styles = [__inner_require__(2 /*views/test/index-css.js*/).default], _class.__start_list__ = [function () {
				this._styles = Test.Styles;
			}, function () {
				this.view = Test.View.call(this);
			}], _temp);
			exports.default = Test;
		},
		// views/test/index-html.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = View;
			
			var _reactNative = require("react-native@0.21/Libraries/react-native/react-native.js");
			
			var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);
			
			var _enjoyRnSupport = require("enjoy-rn-support@0.0.47/dist/index.js");
			
			var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);
			
			var Box = _enjoyRnSupport2.default.Box;
			var A = _enjoyRnSupport2.default.A;
			var Body = _enjoyRnSupport2.default.Body;
			var ScrollView = _enjoyRnSupport2.default.ScrollView;
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil(__project + "/views/test/index");
			
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
								return __dom__(Box, { _styles: this._styles,
									css: [".rn-head", ".navbar", "#test-head"],
									_id: __getKey__()
								}, __dom__(Box, {
									css: [".rn-title", ".navbar-title"],
									_id: __getKey__()
								}, __dom__(A, {
									onClick: function onClick() {
										alert('你好世界');
									}, css: [".rn-a", ".city-name"],
									_id: __getKey__()
								}, "测试")), __dom__(Box, {
									css: [".rn-left", ".navbar-left"],
									_id: __getKey__()
								}, __nav_util__.canBack ? __dom__(Box, {
									css: [".rn-back", ".back-btn"],
									_id: __getKey__(),
									onClick: function onClick() {
										__nav_util__.back();
									}
								}) : null));
							}.bind(this)
						});
						a = this._styles;
					}.bind(this),
					check: function () {
						return this._styles !== a;
					}.bind(this)
				};
			
				__view__.render = function (components) {
					return __dom__(Body, { _component_id: this.props._id,
						_styles: this._styles,
						css: [".rn-body", "#test"],
						_id: __getKey__()
					}, __dom__(Box, {
						css: [".rn-div", ".main"],
						_id: __getKey__()
					}, __dom__(ScrollView, {
						ref: "scroller",
						removeClippedSubviews: true,
						collapsable: true,
						showsVerticalScrollIndicator: false,
			
						scrollEventThrottle: 10, css: [".rn-scroll-view", ".page-scroll"],
						_id: __getKey__()
					}, __dom__(Box, {
						css: [".rn-h2"],
						_id: __getKey__()
					}, "本地存储API测试"), __dom__(Box, {
						css: [".rn-ul"],
						_id: __getKey__()
					}, __dom__(Box, {
						css: [".rn-li"],
						_id: __getKey__()
					}, __dom__(A, { href: "", onClick: function onClick() {
							var MozartStorage = require('NativeModules').MozartStorage;
							MozartStorage.put(JSON.stringify({
								"key": "abc",
								"value": "123"
			
							}), function (err, data) {
								alert("putErr:" + err);
								alert("putData:" + data);
							});
						}, css: [".rn-a"],
						_id: __getKey__()
					}, "增改")), __dom__(Box, {
						css: [".rn-li"],
						_id: __getKey__()
					}, __dom__(A, { href: "", onClick: function onClick() {
							var MozartStorage = require('NativeModules').MozartStorage;
							MozartStorage.remove("abc", function (err, data) {
								alert("removeErr:" + err);
								alert("removeData:" + data);
							});
						}, css: [".rn-a"],
						_id: __getKey__()
					}, "删")), __dom__(Box, {
						css: [".rn-li"],
						_id: __getKey__()
					}, __dom__(A, { href: "", onClick: function onClick() {
							var MozartStorage = require('NativeModules').MozartStorage;
							MozartStorage.get("abc", function (err, data) {
								alert("getErr:" + err);
								alert("getData:" + data);
							});
						}, css: [".rn-a"],
						_id: __getKey__()
					}, "查")), __dom__(Box, {
						css: [".rn-li"],
						_id: __getKey__()
					}, __dom__(A, { href: "", onClick: function onClick() {
							var MozartStorage = require('NativeModules').MozartStorage;
							MozartStorage.getAll(function (err, data) {
								alert("getAllErr:" + err);
								alert("getAllData:" + data);
							});
						}, css: [".rn-a"],
						_id: __getKey__()
					}, "查全部"))), __dom__(Box, {
						css: [".rn-h2"],
						_id: __getKey__()
					}, "网络API测试"), __dom__(Box, { style: "", css: [".rn-ul"],
						_id: __getKey__()
					}, __dom__(Box, {
						css: [".rn-li"],
						_id: __getKey__()
					}, __dom__(A, { href: "", onClick: function onClick() {
							var MozartRequester = require('NativeModules').MozartRequester;
							MozartRequester.request(JSON.stringify({
								"url": "PerfectHotel/hotelevent/getlabelbydid",
								"attris": { "did": 335 },
								"method": "Get"
							}), function (err, data) {
								alert("err:" + err + "\n" + "data:" + JSON.stringify(data));
							});
						}, css: [".rn-a"],
						_id: __getKey__()
					}, "网络接口(新接口参数在attris)")), __dom__(Box, {
						css: [".rn-li"],
						_id: __getKey__()
					}, __dom__(A, { href: "", onClick: function onClick() {
							var MozartRequester = require('NativeModules').MozartRequester;
							MozartRequester.request(JSON.stringify({
								"url": "perfecthotel/getlabellist?did=335",
			
								"method": "Get"
							}), function (err, data) {
								alert("err:" + err + "\n" + "data:" + JSON.stringify(data));
							});
						}, css: [".rn-a"],
						_id: __getKey__()
					}, "网络接口(参数在url)"))), __dom__(Box, {
						css: [".rn-h2"],
						_id: __getKey__()
					}, "定位API测试"), __dom__(Box, {
						css: [".rn-ul"],
						_id: __getKey__()
					}, __dom__(Box, {
						css: [".rn-li"],
						_id: __getKey__()
					}, __dom__(A, { href: "", onClick: function onClick() {
							var MozartGetLocation = require('NativeModules').MozartGetLocation;
							MozartGetLocation.getLocationInfoWithCallback(function (err, data) {
								//alert(data.city.name)
								//alert(data);
								alert(err + JSON.stringify(data));
							});
						}, css: [".rn-a"],
						_id: __getKey__()
					}, "定位"))), __dom__(Box, {
						css: [".rn-h2"],
						_id: __getKey__()
					}, "跳转API测试"), __dom__(Box, {
						css: [".rn-ul"],
						_id: __getKey__()
					}, __dom__(Box, {
						css: [".rn-li"],
						_id: __getKey__()
					}, __dom__(A, { href: "", onClick: function onClick() {
							var MozartTransfer = require('NativeModules').MozartTransfer;
							MozartTransfer.transfer(JSON.stringify({
								"action": "webPage",
								"params": { "url": "http://www.baidu.com", "isNaviHidden": false, "title": "你好世界", "style": 2 }
							}), function (err, data) {
								alert(err + JSON.stringify(data));
							});
						}, css: [".rn-a"],
						_id: __getKey__()
					}, "跳转webView")), __dom__(Box, {
						css: [".rn-li"],
						_id: __getKey__()
					}, __dom__(A, { href: "", onClick: function onClick() {
							var MozartTransfer = require('NativeModules').MozartTransfer;
							MozartTransfer.transfer(JSON.stringify({
								"action": "hotelDetail",
								"params": {
									"hotelId": "40101627",
									//	"checkInString":"yyyy-MM-dd",//可选
									//"checkOutString":"yyyy-MM-dd",//可选
									"if": "11009"
								}
							}), function (err, data) {
								alert(err + JSON.stringify(data));
							});
						}, css: [".rn-a"],
						_id: __getKey__()
					}, "跳酒店详请")), __dom__(Box, {
						css: [".rn-li"],
						_id: __getKey__()
					}, __dom__(A, { href: "", onClick: function onClick() {
							var MozartTransfer = require('NativeModules').MozartTransfer;
							MozartTransfer.transfer(JSON.stringify({
								"action": "hotelList",
								"params": {
									"if": "11009",
									"cityId": "0101",
									"recommendationTypeId": "1",
									"checkInString": "2016-07-22", //可选
									"checkOutString": "2016-07-28" //可选
								}
							}), function (err, data) {
								//alert(err+JSON.stringify(data));
							});
						}, css: [".rn-a"],
						_id: __getKey__()
					}, "跳酒店列表")), __dom__(Box, {
						css: [".rn-li"],
						_id: __getKey__()
					}, __dom__(A, {
						onClick: function onClick() {
							var eLongReactModule = require('NativeModules').eLongReactModule;
							eLongReactModule.backHome();
						},
						css: [".rn-a"],
						_id: __getKey__()
					}, "回app首页"))), __dom__(Box, {
						css: [".rn-h2"],
						_id: __getKey__()
					}, "打点API测试"), __dom__(Box, {
						css: [".rn-ul"],
						_id: __getKey__()
					}, __dom__(Box, {
						css: [".rn-li"],
						_id: __getKey__()
					}, __dom__(A, { href: "", onClick: function onClick() {
							var MozartCountly = require('NativeModules').MozartCountly;
							MozartCountly.countlyWith(JSON.stringify({
								"countlyType": "click", //click、 show、 info
								"if": "innerfrom",
								"of": "orderfrom",
								"ch": "频道",
								"chid": "channelId",
								"pt": "页面名称",
								"cspot": "点位名称",
								"tri": "触发位置",
								"hcty": "城市",
								"sthm": "主题， 标签",
								"skeyt": "区域位置",
								"ext": "",
								"hid": "酒店id",
								"spic": "酒店价格"
							}), function (err, data) {
								alert(err + JSON.stringify(data));
							});
						}, css: [".rn-a"],
						_id: __getKey__()
					}, "打点(click)")), __dom__(Box, {
						css: [".rn-li"],
						_id: __getKey__()
					}, __dom__(A, { href: "", onClick: function onClick() {
							var MozartCountly = require('NativeModules').MozartCountly;
							MozartCountly.countlyWith(JSON.stringify({
								"countlyType": "info", //click、 show、 info
								"if": "innerfrom",
								"of": "orderfrom",
								"ch": "频道",
								"chid": "channelId",
								"pt": "页面名称",
								"cspot": "点位名称",
								"tri": "触发位置",
								"hcty": "城市",
								"sthm": "主题， 标签",
								"skeyt": "区域位置",
								"ext": "",
								"hid": "酒店id",
								"spic": "酒店价格"
							}), function (err, data) {
								alert(err + JSON.stringify(data));
							});
						}, css: [".rn-a"],
						_id: __getKey__()
					}, "打点(info)")), __dom__(Box, {
						css: [".rn-li"],
						_id: __getKey__()
					}, __dom__(A, { href: "", onClick: function onClick() {
							var MozartCountly = require('NativeModules').MozartCountly;
							MozartCountly.countlyWith(JSON.stringify({
								"countlyType": "show", //click、 show、 info
								"if": "innerfrom",
								"of": "orderfrom",
								"ch": "频道",
								"chid": "channelId",
								"pt": "页面名称",
								"cspot": "点位名称",
								"tri": "触发位置",
								"hcty": "城市",
								"sthm": "主题， 标签",
								"skeyt": "区域位置",
								"ext": "",
								"hid": "酒店id",
								"spic": "酒店价格"
							}), function (err, data) {
								alert(err + JSON.stringify(data));
							});
						}, css: [".rn-a"],
						_id: __getKey__()
					}, "打点(show)"))), __dom__(Box, {
						css: [".rn-h2"],
						_id: __getKey__()
					}, "其它API测试"), __dom__(Box, {
						css: [".rn-ul"],
						_id: __getKey__()
					}, __dom__(Box, {
						css: [".rn-li"],
						_id: __getKey__()
					}, __dom__(A, { href: "", onClick: function onClick() {
							var MozartCalender = require('NativeModules').MozartCalender;
							MozartCalender.calendarWith(JSON.stringify({
								checkin: "2016-07-26", //可选
								checkout: "2016-07-27" //可选
							}), function (err, data) {
								alert(err + '\n' + JSON.stringify(data));
							});
						}, css: [".rn-a"],
						_id: __getKey__()
					}, "打开日历")), __dom__(Box, {
						css: [".rn-li"],
						_id: __getKey__()
					}, __dom__(A, { href: "", onClick: function onClick() {
							var MozartHomeToolBarNeedHidden = require('NativeModules').MozartHomeToolBarNeedHidden;
							MozartHomeToolBarNeedHidden.eLongHomeToolBarNeedHidden(1);
						}, css: [".rn-a"],
						_id: __getKey__()
					}, "隐藏底部")), __dom__(Box, {
						css: [".rn-li"],
						_id: __getKey__()
					}, __dom__(A, { href: "", onClick: function onClick() {
							var MozartHomeToolBarNeedHidden = require('NativeModules').MozartHomeToolBarNeedHidden;
							MozartHomeToolBarNeedHidden.eLongHomeToolBarNeedHidden(0);
						}, css: [".rn-a"],
						_id: __getKey__()
					}, "显示底部")), __dom__(Box, {
						css: [".rn-li"],
						_id: __getKey__()
					}, __dom__(A, { href: "", onClick: function onClick() {
							var MozartShare = require('NativeModules').MozartShare;
							MozartShare.shareWithParams(JSON.stringify({
								"platformType": "2", //分享平台类型，0：分享到微信，1：分享到微信及朋友圈，2：分享到全部支持平台", 
								"shareDic": {
									"shareMessage": "微信短信分享的文字内容",
									"shareMessageWB": "微博分享的文字内容",
									"shareMessageMail": "邮件分享的文字内容",
									"shareThumbImageUrl": "https://ssl.mifengwo.me/enjoy/img/icon.jpg",
									"shareLink": "http://www.elong.com/",
									"wxShareTitle": "微信分享的title",
									"wxFriendTitle": "微信朋友圈分享的title",
									"mailTitle": "邮件分享的title",
									"lat": "0.0", //"纬度,经纬度均为0.0时，腾讯微博只分享文字"，
									"lon": "0.0" //"经度  经纬度均为0.0时，腾讯微博只分享文字"
								}
							}), function (err, data) {});
						}, css: [".rn-a"],
						_id: __getKey__()
					}, "分享")), __dom__(Box, {
						css: [".rn-li"],
						_id: __getKey__()
					}, __dom__(A, { href: "/home", css: [".rn-a"],
						_id: __getKey__(),
						_util: __util__,
						_navigator: this.page
					}, "回发现首页"))))), components);
				}.bind(this);
			
				return __view__;
			}
		},
		// views/test/index-css.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			
			var _enjoyRnSupport = require("enjoy-rn-support@0.0.47/dist/index.js");
			
			var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);
			
			var StyleSheet = _enjoyRnSupport2.default.StyleSheet;
			exports.default = new StyleSheet({
				rules: {
					"0": {
						paddingTop: "40px",
						"ios-paddingTop": "64px"
					},
					"1": {
						flex: "1",
						display: "flex",
						flexDirection: "column"
					},
					"2": {
						fontSize: "22px",
						textAlign: "center"
					},
					"3": {
						height: "40px",
						paddingLeft: "12px",
						lineHeight: "40px",
						backgroundColor: "#fff",
						borderStyle: "solid",
						borderBottomWidth: "1px",
						borderBottomColor: "#f2f2f2"
					},
					"4": {
						color: "#666"
					},
					"5": {
						display: "flex",
						flexDirection: "row",
						alignItems: "center"
					},
					"6": {
						display: "flex",
						flexDirection: "row",
						alignItems: "center"
					}
				},
				index: {
					".page-scroll": [{
						selector: "#test .page-scroll",
						key: "0"
					}],
					".main": [{
						selector: "#test .main",
						key: "1"
					}],
					".rn-h2": [{
						selector: "#test .rn-h2",
						key: "2"
					}],
					".rn-li": [{
						selector: "#test .rn-li",
						key: "3"
					}],
					".rn-a": [{
						selector: "#test-head .rn-a",
						key: "4"
					}],
					".city-name": [{
						selector: "#test-head .city-name",
						key: "5"
					}],
					".back-btn": [{
						selector: "#test-head .back-btn",
						key: "6"
					}]
				}
			});
		}
	];
});