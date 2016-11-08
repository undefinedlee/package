// FindHotel@0.0.1/views/home/index.js
loader.define("FindHotel@0.0.1", "views/home/index.js", "4", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// views/home/index.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = undefined;
			
			var _class2, _temp;
			
			var _reactNative = require("react-native@0.21/Libraries/react-native/react-native.js");
			
			var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);
			
			var _enjoyRnSupport = require("enjoy-rn-support@0.0.47/dist/index.js");
			
			var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);
			
			var _index = require("FindHotel@0.0.1/components/city-selector/index.js");
			
			var _index2 = babelHelpers.interopRequireDefault(_index);
			
			var _index3 = require("FindHotel@0.0.1/components/theme-selector/index.js");
			
			var _index4 = babelHelpers.interopRequireDefault(_index3);
			
			var _common = require("FindHotel@0.0.1/service/common.js");
			
			var _common2 = babelHelpers.interopRequireDefault(_common);
			
			var _home = __inner_require__(1 /*service/home.js*/);
			
			var _home2 = babelHelpers.interopRequireDefault(_home);
			
			var _appEvent = require("FindHotel@0.0.1/components/app-event.js");
			
			var _appEvent2 = babelHelpers.interopRequireDefault(_appEvent);
			
			var _toolBar = require("FindHotel@0.0.1/components/tool-bar.js");
			
			var _toolBar2 = babelHelpers.interopRequireDefault(_toolBar);
			
			var _index5 = require("FindHotel@0.0.1/components/loading/index.js");
			
			var _index6 = babelHelpers.interopRequireDefault(_index5);
			
			var _traps = __inner_require__(2 /*views/home/traps.json*/);
			
			var _traps2 = babelHelpers.interopRequireDefault(_traps);
			
			var Image = _enjoyRnSupport2.default.Image;
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil(__project + "/views/home/index");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			var _dec, _class;
			
			var Component = _enjoyRnSupport2.default.Component;
			var layers = _enjoyRnSupport2.default.layers;
			var NodeMethods = _enjoyRnSupport2.default.NodeMethods;
			var Screen = _enjoyRnSupport2.default.Screen;
			var Trap = _enjoyRnSupport2.default.Trap;
			var GuideMask = _enjoyRnSupport2.default.GuideMask;
			var Storage = _enjoyRnSupport2.default.Storage;
			var Toast = _enjoyRnSupport2.default.Toast;
			var Cookie = _enjoyRnSupport2.default.Cookie;
			var Platform = _enjoyRnSupport2.default.Platform;
			var InteractionManager = _enjoyRnSupport2.default.InteractionManager;
			
			var Home = (_dec = layers({
				citySelector: _index2.default,
				themeSelector: _index4.default
			}), _dec(_class = (0, _index6.default)(_class = (_temp = _class2 = function (_Component) {
				babelHelpers.inherits(Home, _Component);
			
				function Home(props) {
					babelHelpers.classCallCheck(this, Home);
			
					var _this = babelHelpers.possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
			
					_this.testCount = 0;
					_this.hotelHasLoad = false;
					_this.bannerContainer = null;
					_this.bannerContent = null;
					_this.lastScrollTop = 0;
					_this.isFirstScreen = true;
					_this.loadingMore = false;
					_this.loadMoreFailTiping = false;
			
					_this.trap = new Trap({
						"biz": "h5-perfecthotel",
						"if": "11009",
						"pt": "perfectHotelPage"
					});
			
					_this.configTraps();
			
					_this.configState();
			
					_toolBar2.default.show();
			
					_appEvent2.default.onShow(function () {
						_this.isFocus = true;
						_this.viewGuide();
						//alert('onShow');
						_this.trap.show();
					});
					// AppEvent.onUpdate((data) => {
					// 	if(data.Code==101){
					// 		this.loading = true;
					// 		alert('我要更新了');
					// 	}
					// 	if(data.Code==0){
					// 		this.loading = false;
					// 		alert('更新完成');
					// 	}
					// 	if(data.Code>=201){
					// 			alert(data.Code+'更新失败');
					// 	}
					// });
			
					if (Home.__start_list__) {
						Home.__start_list__.forEach(function (item) {
							item.call(_this);
						});
					}
					return _this;
				}
			
				babelHelpers.createClass(Home, [{
					key: "configState",
					value: function configState() {
						this.state = {
			
							test: true,
							// 当前城市
							city: null,
							// 轮播
							banners: [],
							// 主题
							themes: [],
							// 酒店列表
							hotels: [],
							// 酒店当前页
							hotelPage: -1,
							// 酒店总页数
							hotelTotalPage: 1,
							// 是否是首屏
							isFirstScreen: true,
							// 0: 加载中
							// -1: 加载失败
							// 1: 加载成功
							bannerLoadStatus: 0,
							themeLoadStatus: 0,
							hotelLoadStatus: 0,
							loadMoreStatus: 1
						};
					}
			
					// 配置打点信息
			
				}, {
					key: "configTraps",
					value: function configTraps() {
						this.traps = _traps2.default;
					}
			
					// 加载Banner数据
			
				}, {
					key: "loadBanner",
					value: function () {
						var _ref = babelHelpers.asyncToGenerator(regeneratorRuntime.mark(function _callee() {
							var _this2 = this;
			
							var data;
							return regeneratorRuntime.wrap(function _callee$(_context) {
								while (1) {
									switch (_context.prev = _context.next) {
										case 0:
											this.setState({
												bannerLoadStatus: 0
											});
			
											this.loading = true;
			
											_context.prev = 2;
											_context.next = 5;
											return _home2.default.Banners();
			
										case 5:
											data = _context.sent;
			
											this.setState({
												banners: data
											}, function () {
												_this2.setState({
													bannerLoadStatus: 1
												});
			
												_this2.loading = false;
											});
											_context.next = 13;
											break;
			
										case 9:
											_context.prev = 9;
											_context.t0 = _context["catch"](2);
			
											this.setState({
												bannerLoadStatus: -1,
												banners: []
											});
			
											this.loading = false;
			
										case 13:
										case "end":
											return _context.stop();
									}
								}
							}, _callee, this, [[2, 9]]);
						}));
			
						function loadBanner() {
							return _ref.apply(this, arguments);
						}
			
						return loadBanner;
					}()
			
					// 加载主题酒店
			
				}, {
					key: "loadTheme",
					value: function () {
						var _ref2 = babelHelpers.asyncToGenerator(regeneratorRuntime.mark(function _callee2(cityId) {
							var _this3 = this;
			
							var data;
							return regeneratorRuntime.wrap(function _callee2$(_context2) {
								while (1) {
									switch (_context2.prev = _context2.next) {
										case 0:
											cityId = cityId || this.state.city.id;
			
											this.setState({
												themeLoadStatus: 0
											});
			
											this.loading = true;
			
											_context2.prev = 3;
											_context2.next = 6;
											return _common2.default.Themes(cityId);
			
										case 6:
											data = _context2.sent;
			
											this.setState({
												themes: data
											}, function () {
												_this3.setState({
													themeLoadStatus: 1
												});
			
												_this3.loading = false;
											});
											_context2.next = 14;
											break;
			
										case 10:
											_context2.prev = 10;
											_context2.t0 = _context2["catch"](3);
			
											this.setState({
												themeLoadStatus: -1,
												themes: []
											});
			
											this.loading = false;
			
										case 14:
										case "end":
											return _context2.stop();
									}
								}
							}, _callee2, this, [[3, 10]]);
						}));
			
						function loadTheme(_x) {
							return _ref2.apply(this, arguments);
						}
			
						return loadTheme;
					}()
				}, {
					key: "loadHotel",
			
					// 加载特色酒店精选
					value: function () {
						var _ref3 = babelHelpers.asyncToGenerator(regeneratorRuntime.mark(function _callee3(cityId, isRefresh) {
							var _this4 = this;
			
							var data;
							return regeneratorRuntime.wrap(function _callee3$(_context3) {
								while (1) {
									switch (_context3.prev = _context3.next) {
										case 0:
											cityId = cityId || this.state.city.id;
			
											this.setState({
												hotelLoadStatus: 0
											});
			
											this.loading = true;
			
											_context3.prev = 3;
											_context3.next = 6;
											return _home2.default.Hotels(cityId, 0);
			
										case 6:
											data = _context3.sent;
			
											data = data || {
												total: 1,
												data: {
													hotels: [],
													theme: []
												}
											};
											this.setState({
												hotelPage: 0,
												hotelTotalPage: data.total,
												hotels: [data.data]
											}, function () {
												_this4.setState({
													hotelLoadStatus: 1
												});
			
												_this4.loading = false;
			
												setTimeout(function () {
													_this4.hotelHasLoad = true;
												}, 500);
			
												// if(isRefresh){
												// 	Toast.show(`更新了${data.data.hotels.length}条数据`);
												// }
											});
											_context3.next = 15;
											break;
			
										case 11:
											_context3.prev = 11;
											_context3.t0 = _context3["catch"](3);
			
											this.setState({
												hotelLoadStatus: -1,
												hotels: []
											});
			
											this.loading = false;
			
										case 15:
										case "end":
											return _context3.stop();
									}
								}
							}, _callee3, this, [[3, 11]]);
						}));
			
						function loadHotel(_x2, _x3) {
							return _ref3.apply(this, arguments);
						}
			
						return loadHotel;
					}()
				}, {
					key: "onCityChange",
					value: function onCityChange() {
						var _this5 = this;
			
						var isFirst = true;
						this.cityChangeHandler = function (city) {
							if (city) {
								if (!_this5.state.city || _this5.state.city.id !== city.id) {
									_this5.changeCity(city);
								}
			
								if (isFirst) {
									isFirst = false;
								} else {
									_this5.trap.info(Object.assign(_this5.traps["14"].params, {
										hcty: city.id
									}));
								}
							}
						};
			
						_index2.default.Data.onChange(this.cityChangeHandler);
					}
				}, {
					key: "offCityChange",
					value: function offCityChange() {
						_index2.default.Data.offChange(this.cityChangeHandler);
						this.cityChangeHandler = null;
					}
			
					// 初始化时加载Banner数据
			
				}, {
					key: "componentWillMount",
					value: function componentWillMount() {
						babelHelpers.get(Home.prototype.__proto__ || Object.getPrototypeOf(Home.prototype), "componentWillMount", this).call(this);
			
						this.loadBanner();
			
						this.onCityChange();
					}
			
					// 城市/主题过滤
			
				}, {
					key: "componentDidMount",
					value: function componentDidMount() {
						var _this6 = this;
			
						babelHelpers.get(Home.prototype.__proto__ || Object.getPrototypeOf(Home.prototype), "componentDidMount", this).call(this);
			
						this.citySelector.onReady(function () {
							// 城市浮层初始化好之后，给浮层配置打点信息
							_this6.citySelector.component.configTrap({
								pt: "perfectHotelPage"
							});
						});
			
						this.themeSelector.onReady(function () {
							_this6.themeSelector.component.onChange(function (theme) {
								if (theme) {
									_this6.page.go(__util__.resolve(theme.href));
			
									_this6.trap.click(_this6.traps["4"].params);
			
									_this6.trap.info(Object.assign(_this6.traps["9"].params, {
										sthm: theme.id
									}));
								}
							});
						});
					}
			
					//
			
				}, {
					key: "componentWillUnmount",
					value: function componentWillUnmount() {
						babelHelpers.get(Home.prototype.__proto__ || Object.getPrototypeOf(Home.prototype), "componentWillUnmount", this).call(this);
			
						this.offCityChange();
					}
				}, {
					key: "onBackFrom",
					value: function onBackFrom(url) {
						var _this7 = this;
			
						_toolBar2.default.show();
						// 返回当前页面后，banner重新自动滚动
						if (this.refs.banner) {
							this.refs.banner.play();
						}
			
						this.onCityChange();
			
						this.isFocus = true;
			
						InteractionManager.runAfterInteractions(function () {
							_this7.viewGuide();
						});
					}
				}, {
					key: "onForwardTo",
					value: function onForwardTo() {
						// 离开当前页的时候，暂停banner自动滚动
						if (this.refs.banner) {
							this.refs.banner.stop();
						}
			
						this.offCityChange();
			
						this.isFocus = false;
			
						GuideMask.close();
					}
				}, {
					key: "changeCity",
					value: function changeCity(city) {
						this.setState({
							city: city
						});
			
						// 城市改变时重新加载主题酒店跟精选酒店
						this.loadTheme(city.id);
						this.loadHotel(city.id);
			
						this.backTop();
					}
			
					// 打开城市、标签过滤层
			
				}, {
					key: "filter",
					value: function filter(type) {
						switch (type) {
							case "city":
								this.citySelector.show();
								break;
							case "tag":
								this.themeSelector.show();
								break;
						}
					}
			
					// 下拉图片放大，向上滚动差
			
				}, {
					key: "onScroll",
					value: function onScroll(e) {
						if (!this.refs["banner-container"]) {
							return;
						}
			
						if (!this.bannerContainer) {
							this.bannerContainer = NodeMethods(this.refs["banner-container"]);
							this.bannerContent = NodeMethods(this.refs["banner-content"]);
						}
			
						var scrollTop = e.scrollTop;
			
						if (scrollTop >= 0) {
							if (this.lastScrollTop <= 264) {
								this.bannerContainer.style = {
									transform: "translateY(" + -e.scrollTop + "px)"
								};
								this.bannerContent.style = {
									transform: "translateY(" + e.scrollTop / 2 + "px)"
								};
							}
			
							// 首屏不显示返回顶部
							if (scrollTop > Screen.size.height) {
								if (this.isFirstScreen) {
									this.isFirstScreen = false;
									this.setState({
										isFirstScreen: false
									});
								}
							} else {
								if (!this.isFirstScreen) {
									this.isFirstScreen = true;
									this.setState({
										isFirstScreen: true
									});
								}
							}
						} else {
							this.bannerContainer.style = {
								transform: "scale(" + (200 + -scrollTop * 2) / 200 + ")"
							};
							if (this.lastScrollTop > 0) {
								this.bannerContent.style = {
									transform: "translateY(0)"
								};
							}
						}
			
						this.lastScrollTop = scrollTop;
					}
				}, {
					key: "loadMore",
			
					// 加载更多
					value: function () {
						var _ref4 = babelHelpers.asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
							var _this8 = this;
			
							var data;
							return regeneratorRuntime.wrap(function _callee4$(_context4) {
								while (1) {
									switch (_context4.prev = _context4.next) {
										case 0:
											if (!(!this.state.city || !this.hotelHasLoad || this.loadMoreFailTiping || this.loadingMore)) {
												_context4.next = 2;
												break;
											}
			
											return _context4.abrupt("return", false);
			
										case 2:
											if (!(this.state.hotelPage < this.state.hotelTotalPage - 1)) {
												_context4.next = 21;
												break;
											}
			
											this.setState({
												loadMoreStatus: 0
											});
											this.loadingMore = true;
			
											_context4.prev = 5;
											_context4.next = 8;
											return _home2.default.Hotels(this.state.city.id, this.state.hotelPage + 1);
			
										case 8:
											data = _context4.sent;
			
											this.state.hotels.push(data.data);
											this.setState({
												hotelPage: this.state.hotelPage + 1,
												hotels: this.state.hotels,
												loadMoreStatus: 1
											});
			
											this.loadingMore = false;
			
											return _context4.abrupt("return", true);
			
										case 15:
											_context4.prev = 15;
											_context4.t0 = _context4["catch"](5);
			
											this.setState({
												loadMoreStatus: -1
											}, function () {
												setTimeout(function () {
													_this8.setState({
														loadMoreStatus: 1
													}, function () {
														var scroller = _this8.refs.scroller;
			
														setTimeout(function () {
															if (scroller.contentHeight > scroller.containerHeight) {
																scroller.scrollTo(0, scroller.contentHeight - scroller.containerHeight, false);
															}
			
															_this8.loadMoreFailTiping = false;
														}, 10);
													});
												}, 1500);
											});
			
											this.loadingMore = false;
											this.loadMoreFailTiping = true;
			
											return _context4.abrupt("return", false);
			
										case 21:
											return _context4.abrupt("return", false);
			
										case 22:
										case "end":
											return _context4.stop();
									}
								}
							}, _callee4, this, [[5, 15]]);
						}));
			
						function loadMore() {
							return _ref4.apply(this, arguments);
						}
			
						return loadMore;
					}()
				}, {
					key: "onRefresh",
					value: function onRefresh() {
						setTimeout(function () {
							this.loadBanner();
							this.loadTheme();
							this.loadHotel(null, true);
						}.bind(this), 350);
					}
				}, {
					key: "reload",
					value: function reload() {
						if (this.state.bannerLoadStatus === -1) {
							this.loadBanner();
						}
			
						if (this.state.themeLoadStatus === -1) {
							this.loadTheme();
						}
			
						if (this.state.hotelLoadStatus === -1) {
							this.loadHotel();
						}
					}
				}, {
					key: "reloadHotel",
					value: function reloadHotel() {
						this.loadHotel();
					}
			
					// 回到顶部
			
				}, {
					key: "backTop",
					value: function backTop() {
						if (this.refs.scroller) {
							this.refs.scroller.scrollTo(0, 0);
						}
					}
			
					// 新手引导
			
				}, {
					key: "viewGuide",
					value: function () {
						var _ref5 = babelHelpers.asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
							var _this9 = this;
			
							var guideKey, hasViewGuide, checkStatus;
							return regeneratorRuntime.wrap(function _callee5$(_context5) {
								while (1) {
									switch (_context5.prev = _context5.next) {
										case 0:
											if (this.isFocus) {
												_context5.next = 2;
												break;
											}
			
											return _context5.abrupt("return");
			
										case 2:
											guideKey = "perfect-hotel-has-view-guide";
											_context5.next = 5;
											return Storage.get(guideKey);
			
										case 5:
											hasViewGuide = _context5.sent;
			
											if (!hasViewGuide) {
												_context5.next = 8;
												break;
											}
			
											return _context5.abrupt("return");
			
										case 8:
											checkStatus = function checkStatus() {
												if (_this9.state.bannerLoadStatus === 0 || _this9.state.themeLoadStatus === 0 || _this9.state.hotelLoadStatus === 0) {
													setTimeout(checkStatus, 200);
												} else {
													// 选择城市/主题
													var points = [];
			
													if (_this9._refs.cityBtn) {
														points.push({
															target: _this9._refs.cityBtn,
															padding: "0 8",
															radius: "half",
															info: {
																target: __dom__(Image, { key: "1", src: "./pic/guide-city.png", style: {
																		width: "145px",
																		height: "93px"
																	},
																	css: [".rn-img"],
																	_id: __getKey__(),
																	_util: __util__
																}),
																offset: {
																	left: 25,
																	top: 10
																}
															}
														});
													}
			
													if (_this9.state.themes.length > 0 && _this9._refs.filterBtn) {
														points.push({
															target: _this9._refs.filterBtn,
															padding: "0 8",
															radius: "half",
															info: {
																target: __dom__(Image, { key: "2", src: "./pic/guide-filter-theme.png", style: {
																		width: "112px",
																		height: "86px"
																	},
																	css: [".rn-img"],
																	_id: __getKey__(),
																	_util: __util__
																}),
																offset: {
																	left: -87,
																	top: 13
																}
															}
														});
													}
			
													// 主题滚动
													if (_this9.state.themeLoadStatus === 1 && _this9.refs.themeBar && _this9.refs.themeBar.contentNode) {
														points.push({
															target: _this9.refs.themeBar.contentNode,
															padding: "10 0",
															info: {
																target: __dom__(Image, { key: "3", src: "./pic/guide-scroll-theme.png", style: {
																		width: "144px",
																		height: "105px"
																	},
																	css: [".rn-img"],
																	_id: __getKey__(),
																	_util: __util__
																}),
																offset: {
																	left: 116,
																	top: 158
																}
															}
														});
													}
			
													// 酒店下拉加载更多
													if (_this9.state.hotelLoadStatus === 1 && _this9.refs.hotelTitle) {
														points.push({
															target: _this9.refs.hotelTitle,
															padding: "-10 5",
															radius: "half",
															info: {
																target: __dom__(Image, { key: "4", src: "./pic/guide-hotel.png", style: {
																		width: "195px",
																		height: "79px"
																	},
																	css: [".rn-img"],
																	_id: __getKey__(),
																	_util: __util__
																}),
																offset: {
																	left: 10,
																	top: -85
																}
															}
														});
													}
			
													GuideMask.open(points, function () {
														Storage.set(guideKey, true);
													});
												}
											};
			
											checkStatus();
			
										case 10:
										case "end":
											return _context5.stop();
									}
								}
							}, _callee5, this);
						}));
			
						function viewGuide() {
							return _ref5.apply(this, arguments);
						}
			
						return viewGuide;
					}()
				}, {
					key: "allFail",
					get: function get() {
						return this.state.bannerLoadStatus === -1 && this.state.themeLoadStatus === -1 && this.state.hotelLoadStatus === -1;
					}
				}]);
				return Home;
			}(Component), _class2.View = __inner_require__(3 /*views/home/index-html.js*/).default, _class2.Styles = [__inner_require__(4 /*views/home/index-css.js*/).default], _class2.__start_list__ = [function () {
				this._styles = Home.Styles;
			}, function () {
				this.view = Home.View.call(this);
			}], _temp)) || _class) || _class);
			exports.default = Home;
		},
		// service/home.js
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
			var __util__ = Util.pageUtil(__project + "/service/home");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			var Service = _enjoyRnSupport2.default.Service;
			var Platform = _enjoyRnSupport2.default.Platform;
			exports.default = {
				Banners: Service({
					url: _mapi2.default.getcarousel[0],
					dataTransform: function dataTransform(data) {
						return data.data.map(function (item) {
							return {
								pic: item.file,
								href: item.url,
								title: item.title || "列表页"
							};
						});
					}
				}),
			
				Hotels: Service({
					params: _mapi2.default.gethotellistbylabelanddid[1],
					url: _mapi2.default.gethotellistbylabelanddid[0], //"/perfecthotel/gethotellistbylabelanddid/?did=${cityId}&pages=${page}",
					dataTransform: function dataTransform(data) {
						if (data.data) {
							return {
								total: data.total,
								data: {
									hotels: data.data.hotels.map(function (hotel) {
										return {
											id: hotel.hotelid,
											name: hotel.hotelname.trim(),
											desc: hotel.hotelreason.trim(),
											pic: hotel.hotelimg,
											vr: false,
											price: hotel.hotelprice,
											place: hotel.hoteladdress.trim(),
											//	href: `http://m.elong.com/hotel/${hotel.hotelid}&if=11009`,
											//	href:`http://m.elong.com/perfecthotel/${hotel.hotelid}/?eventid=0&if=11009`,
											href: "http://m.elong.com/perfecthotel/" + hotel.hotelid + "/?themeid=1136",
											people: hotel.order,
											features: hotel.labels.map(function (label) {
												return {
													id: label.labelid,
													name: label.labelname,
													href: "/list?labelid=" + label.labelid + "&if=11009"
												};
											})
										};
									}),
									theme: data.data.event.map(function (event) {
										return {
											title: event.seotitle,
											city: "",
											tags: event.tags.split(" ").filter(function (tag) {
												return !!tag;
											}),
											href: event.url,
											pic: event.mlogo
										};
									})
								}
							};
						} else {
							throw "no-data";
						}
					}
				})
			};
		},
		// views/home/traps.json
		function(__inner_require__, exports, module){
			module.exports = {
				// 点击城市选择
				"1": {
					"type": "click",
					"params": {
						"cspot": "city"
					}
				},
				// 点击过滤
				"2": {
					"type": "click",
					"params": {
						"cspot": "filter"
					}
				},
				// 点击banner
				"3": {
					"type": "click",
					"params": {
						"cspot": "banner"
					}
				},
				// 点击主题
				"4": {
					"type": "click",
					"params": {
						"cspot": "theme"
					}
				},
				// 点击酒店
				"5": {
					"type": "click",
					"params": {
						"cspot": "hotel"
					}
				},
				// 点击专题
				"6": {
					"type": "click",
					"params": {
						"cspot": "topic"
					}
				},
				// 点击酒店底部标签
				"7": {
					"type": "click",
					"params": {
						"cspot": "label"
					}
				},
				// 点击页面主题部分时触发
				"8": {
					"type": "info",
					"params": {
						"tri": "theme",
						"sthm": ""
					}
				},
				// 点击主题过滤里面主题时触发
				"9": {
					"type": "info",
					"params": {
						"tri": "filter",
						"sthm": ""
					}
				},
				// 点击酒店底部主题标签时触发
				"10": {
					"type": "info",
					"params": {
						"tri": "label",
						"sthm": ""
					}
				},
				// 点击banner时触发
				"11": {
					"type": "info",
					"params": {
						"tri": "banner",
						"ext": ""
					}
				},
				// 点击酒店时触发
				"12": {
					"type": "info",
					"params": {
						"tri": "hotel",
						"hid": "",
						"spic": "",
						"sthm": ""
					}
				},
				// 点击专题时触发
				"13": {
					"type": "info",
					"params": {
						"tri": "topic",
						"ext": ""
					}
				},
				// 用户选择城市时
				"14": {
					"type": "info",
					"event": "click",
					"params": {
						"tri": "city",
						"hcty": ""
					}
				}
			};
		},
		// views/home/index-html.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = View;
			
			var _reactNative = require("react-native@0.21/Libraries/react-native/react-native.js");
			
			var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);
			
			var _enjoyRnSupport = require("enjoy-rn-support@0.0.47/dist/index.js");
			
			var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);
			
			var _index = require("FindHotel@0.0.1/views/home/banner/index.js");
			
			var _index2 = babelHelpers.interopRequireDefault(_index);
			
			var _index3 = require("FindHotel@0.0.1/views/home/theme-list/index.js");
			
			var _index4 = babelHelpers.interopRequireDefault(_index3);
			
			var _index5 = require("FindHotel@0.0.1/views/home/hotel-section/index.js");
			
			var _index6 = babelHelpers.interopRequireDefault(_index5);
			
			var _index7 = require("FindHotel@0.0.1/components/loading/index.js");
			
			var _index8 = babelHelpers.interopRequireDefault(_index7);
			
			var Box = _enjoyRnSupport2.default.Box;
			var A = _enjoyRnSupport2.default.A;
			var Body = _enjoyRnSupport2.default.Body;
			var ScrollView = _enjoyRnSupport2.default.ScrollView;
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil(__project + "/views/home/index");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			__util__.header({});
			
			function View() {
				var __view__ = {};
				var a, b, c;
				__view__.header = {
					render: function () {
						this.page.navbar.view({
							url: this.page.url,
							render: function (__nav_util__) {
								var _this = this;
			
								return __dom__(Box, {
									_styles: this._styles,
									css: [".rn-head", ".navbar"],
									_id: __getKey__()
								}, __dom__(Box, {
									css: [".rn-title", ".navbar-title"],
									_id: __getKey__()
								}, "发现·有特色的酒店"), __dom__(Box, {
									css: [".rn-left", ".navbar-left"],
									_id: __getKey__()
								}, __dom__(A, {
									trapId: "1",
			
									onClick: function onClick() {
										_this.filter("city");
			
										_this.trap.click(_this.traps["1"].params);
									}, css: [".rn-a", ".city-btn"],
									_id: __getKey__(),
									_ref: function _ref(self) {
										_this._refs.cityBtn = self;
									}
								}, this.state.city ? this.state.city.name : "定位中...")), __dom__(Box, {
									css: [".rn-right", ".navbar-right"],
									_id: __getKey__()
								}, __dom__(A, {
									trapId: "2",
			
									onClick: function onClick() {
										_this.filter("tag");
			
										_this.trap.click(_this.traps["2"].params);
									}, css: __class__(["rn-a", {
										"filter-btn": true,
										"filter-btn-hide": this.state.themes.length === 0
									}]),
									_id: __getKey__(),
									_ref: function _ref(self) {
										_this._refs.filterBtn = self;
									}
								}, "筛选")));
							}.bind(this)
						});
						a = this._styles;
						b = this.state.city ? this.state.city.name : "定位中...";
						c = this.state.themes.length;
					}.bind(this),
					check: function () {
						return this.state.themes.length !== c || (this.state.city ? this.state.city.name : "定位中...") !== b || this._styles !== a;
					}.bind(this)
				};
			
				__view__.render = function (components) {
					var _this2 = this;
			
					return __dom__(Body, {
						_component_id: this.props._id,
						_styles: this._styles,
						css: [".rn-body"],
						_id: __getKey__()
					}, __dom__(Box, {
						css: __class__(["rn-div", ["main", { "fn-hide": this.allFail }]]),
						_id: __getKey__()
					}, __dom__(ScrollView, { ref: "scroller", onScroll: this.onScroll.bind(this), onEndPoint: this.loadMore.bind(this), endPointThreshold: 0, onRefresh: this.onRefresh.bind(this), css: [".rn-div", ".page-scroll"],
						_id: __getKey__()
					}, __dom__(_index4.default, { ref: "themeBar", data: this.state.themes,
						onClick: function onClick(theme) {
							_this2.trap.click(_this2.traps["4"].params);
			
							_this2.trap.info(Object.assign(_this2.traps["8"].params, {
								sthm: theme.id
							}));
						}, css: [".rn-theme-list"],
						_id: __getKey__(),
						_pageInfo: this.props._pageInfo
					}), __dom__(Box, {
						css: __class__(["rn-section", ["feature-hotels", { "fn-hide": !this.state.hotels.length && this.state.hotelLoadStatus !== -1 }]]),
						_id: __getKey__()
					}, __dom__(Box, {
						css: [".rn-h2", ".mod-title"],
						_id: __getKey__()
					}, __dom__(Box, { ref: "hotelTitle", css: [".rn-span"],
						_id: __getKey__()
					}, "特色酒店精选")), __dom__(Box, {
						css: __class__(["rn-div", { "fn-hide": this.state.hotelLoadStatus === -1 }]),
						_id: __getKey__()
					}, this.state.hotels.map(function (item, index) {
						return __dom__(_index6.default, { city: _this2.state.city, data: item,
							onHotelClick: function onHotelClick(hotel) {
								_this2.trap.click(_this2.traps["5"].params);
			
								_this2.trap.info(Object.assign(_this2.traps["12"].params, {
									hid: hotel.id,
									spic: hotel.price,
									sthm: hotel.features.map(function (feature) {
										return feature.id;
									}).join(",")
								}));
							},
							onLabelClick: function onLabelClick(label) {
								_this2.trap.click(_this2.traps["7"].params);
			
								_this2.trap.info(Object.assign(_this2.traps["10"].params, {
									sthm: label.id
								}));
							},
							onEventClick: function onEventClick(event) {
								_this2.trap.click(_this2.traps["6"].params);
			
								_this2.trap.info(Object.assign(_this2.traps["13"].params, {
									ext: event.title
								}));
							}, css: [".rn-hotel-section"],
							_id: __getKey__(),
							_pageInfo: _this2.props._pageInfo
						});
					}), __dom__(Box, {
						css: __class__(["rn-p", {
							"load-more-fail": true,
							"fn-hide": this.state.loadMoreStatus !== -1
						}]),
						_id: __getKey__()
					}, "加载失败"), __dom__(Box, {
						css: __class__(["rn-p", {
							"load-more-tip": true,
							"more-tip-show": this.state.loadMoreStatus === 0,
							"fn-hide": this.state.hotelPage >= this.state.hotelTotalPage - 1 && this.state.hotelLoadStatus !== 0 || this.state.loadMoreStatus === -1
						}]),
						_id: __getKey__()
					}, "稍等一小会，发现更多·有特色·的酒店"), __dom__(Box, {
						css: __class__(["rn-p", {
							"no-more-tip": true,
							"fn-hide": this.state.hotelPage < this.state.hotelTotalPage - 1 || this.state.hotelLoadStatus === 0 || this.state.hotelTotalPage === 0 || this.state.hotelTotalPage === 1 && this.state.hotels[0].hotels.length < 4
						}]),
						_id: __getKey__()
					}, "没有更多酒店了哦~"), __dom__(Box, {
						css: __class__(["rn-p", {
							"no-more-tip": true,
							"fn-hide": this.state.hotelPage < this.state.hotelTotalPage - 1 || this.state.hotelLoadStatus === 0 || this.state.hotelTotalPage > 1 || this.state.hotelTotalPage === 1 && this.state.hotels[0].hotels.length >= 4
						}]),
						_id: __getKey__()
					}, "我们正在寻找更多有特色的酒店~")), __dom__(Box, {
						css: __class__(["rn-div", ["hotel-load-fail net-error", { "fn-hide": this.state.hotelLoadStatus !== -1 }]]),
						_id: __getKey__()
					}, __dom__(Box, {
						css: [".rn-i", ".img"],
						_id: __getKey__()
					}), __dom__(Box, {
						css: [".rn-p"],
						_id: __getKey__()
					}, "网络开小差了，请重新加载试试"), __dom__(A, { onClick: this.reloadHotel.bind(this), css: [".rn-a"],
						_id: __getKey__()
					}, "重新加载")))), __dom__(Box, { ref: "banner-container", css: [".rn-div", ".banner-container"],
						_id: __getKey__()
					}, __dom__(Box, { ref: "banner-content", css: [".rn-div", ".banner-content"],
						_id: __getKey__()
					}, __dom__(_index2.default, { ref: "banner", data: this.state.banners, trap: this.trap, traps: this.traps, css: [".rn-banner"],
						_id: __getKey__(),
						_pageInfo: this.props._pageInfo
					}))), __dom__(Box, {
						css: __class__(["rn-div", {
							"back-top": true,
							"back-top-show": !this.state.isFirstScreen
						}]),
						_id: __getKey__()
					}, __dom__(A, { onClick: this.backTop.bind(this), css: [".rn-a"],
						_id: __getKey__()
					}))), __dom__(Box, {
						css: __class__(["rn-div", {
							"all-load-fail net-error": true,
							"fn-hide": !this.allFail || this.loading
						}]),
						_id: __getKey__()
					}, __dom__(Box, {
						css: [".rn-i", ".img"],
						_id: __getKey__()
					}), __dom__(Box, {
						css: [".rn-p"],
						_id: __getKey__()
					}, "网络开小差了，请重新加载试试"), __dom__(A, { onClick: this.reload.bind(this), css: [".rn-a"],
						_id: __getKey__()
					}, "重新加载")), __dom__(Box, {
						style: {
							position: "absolute",
							top: "100px",
							left: "0",
							backgroundColor: "rgba(0,0,0,.8)",
							color: "#fff",
							paddingVertical: "0",
							paddingHorizontal: "10px",
							borderTopLeftRadius: "0",
							borderTopRightRadius: "3px",
							borderBottomRightRadius: "3px",
							borderBottomLeftRadius: "0"
						},
						css: __class__(["rn-div", {
							"fn-hide": this.state.test
						}]),
						_id: __getKey__()
					}, __dom__(Box, {
						css: [".rn-span", ".test"],
						_id: __getKey__()
					}, "不改版"), __dom__(A, { href: "/test", style: {
							display: "block",
							height: "40px",
							lineHeight: "40px"
						},
						css: [".rn-a"],
						_id: __getKey__(),
						_util: __util__,
						_navigator: this.page
					}, "馨允进"), __dom__(A, {
						style: {
							display: "block",
							height: "40px",
							lineHeight: "40px"
						},
						onClick: function onClick() {
							_enjoyRnSupport2.default.Storage.clear();
							_enjoyRnSupport2.default.Toast.show("本地存储已清除");
						}, css: [".rn-a"],
						_id: __getKey__()
					}, "清除本地存储")), components);
				}.bind(this);
			
				return __view__;
			}
		},
		// views/home/index-css.js
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
						color: "#666"
					},
					"1": {
						display: "flex",
						flexDirection: "row",
						alignItems: "center"
					},
					"2": {
						content: "",
						display: "block",
						width: "9px",
						height: "5px",
						backgroundImage: __inner_require__(5 /*views/home/pic/arrow-down.png*/),
						backgroundSize: "9px 5px",
						marginTop: "2px",
						marginRight: "0",
						marginBottom: "0",
						marginLeft: "5px"
					},
					"3": {
						opacity: "0",
						pointerEvents: "none"
					},
					"4": {
						backgroundColor: "#eee"
					},
					"5": {
						flex: "1",
						display: "flex",
						flexDirection: "column"
					},
					"6": {
						position: "absolute",
						left: "0",
						right: "0",
						top: "44px",
						"ios-top": "64px",
						height: "200px",
						overflow: "hidden"
					},
					"7": {
						height: "200px"
					},
					"8": {
						fontSize: "18px",
						fontWeight: "normal",
						lineHeight: "60px",
						color: "#333",
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center"
					},
					"9": {
						content: "",
						width: "48px",
						height: "1px",
						"ios-height": "0.5px",
						lineHeight: "0",
						backgroundColor: "#333"
					},
					A: {
						marginVertical: "0",
						marginHorizontal: "5px",
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
						"android-marginTop": "-5px"
					},
					B: {
						content: "",
						width: "5px",
						height: "5px",
						transform: [{
							scale: 0.5
						}],
						lineHeight: "0",
						backgroundColor: "#333",
						"android-marginTop": "5px"
					},
					C: {
						marginRight: "12px"
					},
					D: {
						marginLeft: "12px"
					},
					E: {
						paddingTop: "254px",
						"ios-paddingTop": "274px"
					},
					F: {
						backgroundImage: __inner_require__(6 /*views/home/pic/bg1.png*/)
					},
					G: {
						fontSize: "14px",
						color: "#888",
						textAlign: "center",
						marginBottom: "-21px"
					},
					H: {
						marginBottom: "12px"
					},
					I: {
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center"
					},
					J: {
						content: "",
						display: "block",
						width: "18px",
						height: "18px",
						backgroundImage: __inner_require__(7 /*views/home/pic/loading-normal-s.gif*/),
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center center",
						backgroundSize: "18px 18px",
						marginTop: "-2px",
						marginRight: "9px",
						marginBottom: "0",
						marginLeft: "0"
					},
					K: {
						marginBottom: "18px"
					},
					L: {
						fontSize: "14px",
						color: "#c2c2c2",
						marginBottom: "18px",
						textAlign: "center"
					},
					M: {
						width: "110px",
						height: "30px",
						lineHeight: "30px",
						textAlign: "center",
						fontSize: "14px",
						color: "#858585",
						borderWidth: "1px",
						borderStyle: "solid",
						borderColor: "#c2c2c2",
						"ios-borderWidth": "0.5px",
						borderRadius: "5px"
					},
					N: {
						position: "absolute",
						right: "8px",
						bottom: "-44px",
						width: "44px",
						height: "44px",
						borderRadius: "22px",
						backgroundColor: "rgba(255,255,255,.95)",
						backgroundImage: __inner_require__(8 /*views/home/pic/back-up.png*/),
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center center",
						backgroundSize: "19px 23px",
						shadowOffset: {
							width: "0",
							height: "0"
						},
						shadowRadius: "3px",
						shadowOpacity: 1,
						shadowColor: "rgba(0,0,0,0.2)",
						"ios-borderWidth": "0.5px",
						"ios-borderStyle": "solid",
						"ios-borderColor": "#999",
						"android-borderWidth": "1px",
						"android-borderStyle": "solid",
						"android-borderColor": "#ccc",
						transition: [{
							property: ["bottom"],
							duration: 300,
							timingFunction: "ease-out",
							delay: 0
						}]
					},
					O: {
						position: "absolute",
						left: "0",
						right: "0",
						top: "0",
						bottom: "0"
					},
					P: {
						bottom: "8px"
					},
					Q: {
						flex: "1"
					},
					R: {
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center"
					},
					S: {
						width: "77px",
						height: "54px",
						backgroundImage: __inner_require__(9 /*views/home/pic/net-error.png*/),
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center center",
						backgroundSize: "77px 54px"
					},
					T: {
						fontSize: "12px",
						color: "#888",
						marginTop: "17px",
						marginHorizontal: "0",
						marginBottom: "37px",
						textAlign: "center"
					},
					U: {
						width: "150px",
						height: "40px",
						lineHeight: "40px",
						textAlign: "center",
						fontSize: "15px",
						color: "#49f",
						borderWidth: "1px",
						borderStyle: "solid",
						borderColor: "#49f",
						"ios-borderWidth": "0.5px",
						borderRadius: "5px"
					}
				},
				index: {
					".rn-a": [{
						selector: ".rn-head .rn-a",
						key: "0"
					}, {
						selector: ".hotel-load-fail .rn-a",
						key: "M"
					}, {
						selector: ".back-top .rn-a",
						key: "O"
					}, {
						selector: ".net-error .rn-a",
						key: "U"
					}],
					".city-btn": [{
						selector: ".rn-head .city-btn",
						key: "1"
					}, {
						selector: ".rn-head .city-btn:after",
						key: "2"
					}],
					".filter-btn-hide": [{
						selector: ".rn-head .filter-btn-hide",
						key: "3"
					}],
					".rn-body": [{
						key: "4"
					}],
					".main": [{
						key: "5"
					}],
					".banner-container": [{
						key: "6"
					}],
					".banner-content": [{
						key: "7"
					}],
					".mod-title": [{
						key: "8"
					}, {
						selector: ".mod-title:before",
						key: "9"
					}, {
						selector: ".mod-title:after",
						key: "9"
					}],
					".rn-span": [{
						selector: ".mod-title .rn-span",
						key: "A"
					}, {
						selector: ".mod-title .rn-span:before",
						key: "B"
					}, {
						selector: ".mod-title .rn-span:after",
						key: "B"
					}, {
						selector: ".mod-title .rn-span:before",
						key: "C"
					}, {
						selector: ".mod-title .rn-span:after",
						key: "D"
					}],
					".page-scroll": [{
						key: "E"
					}],
					".feature-hotels": [{
						key: "F"
					}],
					".load-more-tip": [{
						key: "G"
					}, {
						key: "I"
					}, {
						selector: ".load-more-tip:before",
						key: "J"
					}],
					".no-more-tip": [{
						key: "G"
					}],
					".load-more-fail": [{
						key: "G"
					}, {
						key: "H"
					}],
					".more-tip-show": [{
						key: "H"
					}],
					".hotel-load-fail": [{
						key: "K"
					}],
					".rn-p": [{
						selector: ".hotel-load-fail .rn-p",
						key: "L"
					}, {
						selector: ".net-error .rn-p",
						key: "T"
					}],
					".back-top": [{
						key: "N"
					}],
					".back-top-show": [{
						key: "P"
					}],
					".all-load-fail": [{
						key: "Q"
					}],
					".net-error": [{
						key: "R"
					}],
					".img": [{
						selector: ".net-error .img",
						key: "S"
					}]
				}
			});
		},
		// views/home/pic/arrow-down.png
		function(__inner_require__, exports, module){
			var images = require("FindHotel@0.0.1/__base64_image_sprite_mod_id__");
			module.exports = ["", images["22a8d11acf93e2806bb63e68c4c5caf1d7af18b3.png"], images["1b28980589de5dd2103888122e769176c498cacd.png"], images["660797ce0d4a5aced6c2cb76943b61e8651b55c6.png"]][__pixel_ratio];
		},
		// views/home/pic/bg1.png
		function(__inner_require__, exports, module){
			var images = require("FindHotel@0.0.1/__base64_image_sprite_mod_id__");
			module.exports = ["", images["d6fd64488a48f606cb32210f71f83eaa219faa6b.png"], images["c681995cc6d285965ef621acb1e09d18af0659c0.png"], images["9d2f1b252ad5825d722f2ec6d77fae5615c200c2.png"]][__pixel_ratio];
		},
		// views/home/pic/loading-normal-s.gif
		function(__inner_require__, exports, module){
			var images = require("FindHotel@0.0.1/__base64_image_sprite_mod_id__");
			module.exports = ["", images["bccc5b4632ce51bdaa0add852a0d8f4f284808d6.gif"], images["bccc5b4632ce51bdaa0add852a0d8f4f284808d6.gif"], images["bccc5b4632ce51bdaa0add852a0d8f4f284808d6.gif"]][__pixel_ratio];
		},
		// views/home/pic/back-up.png
		function(__inner_require__, exports, module){
			var images = require("FindHotel@0.0.1/__base64_image_sprite_mod_id__");
			module.exports = ["", images["286577af433dbdf89f998d39ec840f5386d6b25a.png"], images["f370a68b8bd5d10b6f00c11df63b032e98d743c8.png"], images["2e66cf06adfb8c4c8be90563a538ef5aec5a53dd.png"]][__pixel_ratio];
		},
		// views/home/pic/net-error.png
		function(__inner_require__, exports, module){
			var images = require("FindHotel@0.0.1/__base64_image_sprite_mod_id__");
			module.exports = ["", images["5e8ebdbcbe34813f67624c7bf67ac73751e5ec16.png"], images["845c957571a1c66dbef060ba258170d45ebde9c7.png"], images["ae1b8257059490dfa2a31d244aeab076a9785c90.png"]][__pixel_ratio];
		}
	];
});