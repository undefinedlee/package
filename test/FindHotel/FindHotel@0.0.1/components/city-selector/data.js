// FindHotel@0.0.1/components/city-selector/data.js
loader.define("FindHotel@0.0.1", "components/city-selector/data.js", "", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// components/city-selector/data.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			
			var _reactNative = require("react-native@0.21/Libraries/react-native/react-native.js");
			
			var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);
			
			var _enjoyRnSupport = require("enjoy-rn-support@0.0.47/dist/index.js");
			
			var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);
			
			var _common = require("FindHotel@0.0.1/service/common.js");
			
			var _common2 = babelHelpers.interopRequireDefault(_common);
			
			var _asyncList = __inner_require__(1 /*util/async-list.js*/);
			
			var _asyncList2 = babelHelpers.interopRequireDefault(_asyncList);
			
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil(__project + "/components/city-selector/data");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			var _dec, _class;
			
			var events = _enjoyRnSupport2.default.events;
			var Geolocation = _enjoyRnSupport2.default.Geolocation;
			var Storage = _enjoyRnSupport2.default.Storage;
			// 用户选择的城市本地存储KEY
			
			var USER_SELECT_CITY_STORAGE_KEY = "user-select-city-storage-key";
			// 城市列表本地存储KEY
			var CITY_LIST_STORAGE_KEY = "city-list-storage-key";
			
			var CityData = (_dec = events(
			// 城市列表加载完成
			["source-ready", "memory once async"],
			// 当前位置定位成功
			["current-ready", "memory once async"],
			// 用户选择的城市改变时
			["change", "memory async"]), _dec(_class = function () {
				function CityData(props) {
					var _this = this;
			
					babelHelpers.classCallCheck(this, CityData);
					this.source = {};
					this.city = null;
					this.currentCity = null;
			
					// 并行获取用户选择的城市、定位城市、城市列表
					(0, _asyncList2.default)([this.getUserSelectedCity(), this.getCurrentCityName(), this.getCityList()]).then(function (userSelectedCity, currentCityName, cityList) {
						var currentCity = _this.getCityByName(currentCityName, cityList);
						if (!currentCity) {
							currentCity = _this.getCityByName("北京", cityList);
						}
			
						if (currentCity) {
							_this.currentCity = currentCity;
			
							_this.fireCurrentReady(currentCity);
			
							// 如果用户没有选择城市，则用定位的城市
							if (!userSelectedCity) {
								_this.fireChange(currentCity);
							}
						}
					});
				}
			
				// 城市列表
			
			
				// 用户选择的城市
			
			
				// 当前定位的城市
			
			
				babelHelpers.createClass(CityData, [{
					key: "getCityByName",
			
					// 根据城市名获取城市信息
					value: function getCityByName(name, source) {
						if (!name) {
							return null;
						}
			
						source = source || this.source;
						var city = void 0;
						Object.keys(source).some(function (key) {
							return key !== "热门" && (city = source[key].find(function (city) {
								return city[0] === name;
							}));
						});
			
						return city ? {
							id: city[3],
							name: city[0]
						} : null;
					}
			
					// 根据城市ID获取城市信息
			
				}, {
					key: "getCityById",
					value: function getCityById(id, source) {
						source = source || this.source;
						var city = void 0;
						Object.keys(source).some(function (key) {
							return key !== "热门" && (city = source[key].find(function (city) {
								return city[3] == id;
							}));
						});
			
						return city ? {
							id: city[3],
							name: city[0]
						} : null;
					}
			
					// 获取用户选择的城市
			
				}, {
					key: "getUserSelectedCity",
					value: function () {
						var _ref = babelHelpers.asyncToGenerator(regeneratorRuntime.mark(function _callee() {
							var city;
							return regeneratorRuntime.wrap(function _callee$(_context) {
								while (1) {
									switch (_context.prev = _context.next) {
										case 0:
											_context.next = 2;
											return Storage.get(USER_SELECT_CITY_STORAGE_KEY);
			
										case 2:
											city = _context.sent;
			
											if (city) {
												this.city = city;
			
												this.fireChange(city);
											}
			
											return _context.abrupt("return", city);
			
										case 5:
										case "end":
											return _context.stop();
									}
								}
							}, _callee, this);
						}));
			
						function getUserSelectedCity() {
							return _ref.apply(this, arguments);
						}
			
						return getUserSelectedCity;
					}()
			
					// 获取用户当前所在的城市
			
				}, {
					key: "getCurrentCityName",
					value: function () {
						var _ref2 = babelHelpers.asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
							var cityName, position;
							return regeneratorRuntime.wrap(function _callee2$(_context2) {
								while (1) {
									switch (_context2.prev = _context2.next) {
										case 0:
											cityName = void 0;
											_context2.prev = 1;
											_context2.next = 4;
											return Geolocation.get();
			
										case 4:
											position = _context2.sent;
			
											cityName = position.city;
											_context2.next = 10;
											break;
			
										case 8:
											_context2.prev = 8;
											_context2.t0 = _context2["catch"](1);
			
										case 10:
											return _context2.abrupt("return", cityName);
			
										case 11:
										case "end":
											return _context2.stop();
									}
								}
							}, _callee2, this, [[1, 8]]);
						}));
			
						function getCurrentCityName() {
							return _ref2.apply(this, arguments);
						}
			
						return getCurrentCityName;
					}()
			
					// 网络请求城市列表
			
				}, {
					key: "requestCityList",
					value: function () {
						var _ref3 = babelHelpers.asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
							var cityList;
							return regeneratorRuntime.wrap(function _callee3$(_context3) {
								while (1) {
									switch (_context3.prev = _context3.next) {
										case 0:
											cityList = void 0;
											_context3.prev = 1;
											_context3.next = 4;
											return _common2.default.CityList();
			
										case 4:
											cityList = _context3.sent;
			
											Storage.set(CITY_LIST_STORAGE_KEY, cityList);
											_context3.next = 10;
											break;
			
										case 8:
											_context3.prev = 8;
											_context3.t0 = _context3["catch"](1);
			
										case 10:
											return _context3.abrupt("return", cityList);
			
										case 11:
										case "end":
											return _context3.stop();
									}
								}
							}, _callee3, this, [[1, 8]]);
						}));
			
						function requestCityList() {
							return _ref3.apply(this, arguments);
						}
			
						return requestCityList;
					}()
			
					// 先读取本地存储中的城市列表
					// 如果有，则返回读取的列表，并异步请求城市列表，更新本地存储
					// 如果没有，请求城市列表，并返回列表
			
				}, {
					key: "getCityList",
					value: function () {
						var _ref4 = babelHelpers.asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
							var cityList;
							return regeneratorRuntime.wrap(function _callee4$(_context4) {
								while (1) {
									switch (_context4.prev = _context4.next) {
										case 0:
											cityList = void 0;
											_context4.prev = 1;
											_context4.next = 4;
											return Storage.get(CITY_LIST_STORAGE_KEY);
			
										case 4:
											cityList = _context4.sent;
											_context4.next = 9;
											break;
			
										case 7:
											_context4.prev = 7;
											_context4.t0 = _context4["catch"](1);
			
										case 9:
											if (!cityList) {
												_context4.next = 13;
												break;
											}
			
											// 如果本地缓存过城市列表，则异步请求城市列表，更新本地缓存，下次使用
											this.requestCityList();
											_context4.next = 17;
											break;
			
										case 13:
											_context4.next = 15;
											return this.requestCityList();
			
										case 15:
											cityList = _context4.sent;
			
											if (!cityList) {
												cityList = {
													"B": [["北京", "beijing", "", "335"]]
												};
											}
			
										case 17:
			
											this.source = cityList;
			
											this.fireSourceReady(cityList);
			
											return _context4.abrupt("return", cityList);
			
										case 20:
										case "end":
											return _context4.stop();
									}
								}
							}, _callee4, this, [[1, 7]]);
						}));
			
						function getCityList() {
							return _ref4.apply(this, arguments);
						}
			
						return getCityList;
					}()
			
					// 切换用户用户选择的城市
			
				}, {
					key: "changeCity",
					value: function changeCity(city) {
						if (!this.city || city.id !== this.city.id) {
							this.city = city;
							this.fireChange(city);
							Storage.set(USER_SELECT_CITY_STORAGE_KEY, city);
						}
					}
				}]);
				return CityData;
			}()) || _class);
			
			exports.default = new CityData();
		},
		// util/async-list.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			
			exports.default = function (list) {
				var count = list.length,
				    results = [];
			
				return {
					then: function then(callback) {
						if (count > 0) {
							list.forEach(function (item, index) {
								item.then(function (result) {
									results[index] = result;
									count--;
									if (count === 0) {
										callback.apply(null, results);
									}
								});
							});
						} else {
							callback();
						}
					}
				};
			};
			
			var _reactNative = require("react-native@0.21/Libraries/react-native/react-native.js");
			
			var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);
			
			var _enjoyRnSupport = require("enjoy-rn-support@0.0.47/dist/index.js");
			
			var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);
			
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil(__project + "/util/async-list");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			// 异步列表
			;
		}
	];
});