// FindHotel@0.0.1/components/city-selector/index.js
loader.define("FindHotel@0.0.1", "components/city-selector/index.js", "", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// components/city-selector/index.js
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
			
			var _data = require("FindHotel@0.0.1/components/city-selector/data.js");
			
			var _data2 = babelHelpers.interopRequireDefault(_data);
			
			var _appEvent = require("FindHotel@0.0.1/components/app-event.js");
			
			var _appEvent2 = babelHelpers.interopRequireDefault(_appEvent);
			
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil(__project + "/components/city-selector/index");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			var Component = _enjoyRnSupport2.default.Component;
			var events = _enjoyRnSupport2.default.events;
			var NodeMethods = _enjoyRnSupport2.default.NodeMethods;
			var Geolocation = _enjoyRnSupport2.default.Geolocation;
			var Trap = _enjoyRnSupport2.default.Trap;
			var Storage = _enjoyRnSupport2.default.Storage;
			
			var $ = NodeMethods;
			var keys = ["current", "hot"].concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
			
			function NOOP() {}
			
			// 监听APP其他部分的城市修改事件
			_appEvent2.default.onCityChange(function (cityName) {
				_data2.default.onSourceReady(function () {
					var city = _data2.default.getCityByName(cityName);
					if (city) {
						_data2.default.changeCity(city);
					}
				});
			});
			
			var CitySelector = (_temp = _class = function (_Component) {
				babelHelpers.inherits(CitySelector, _Component);
			
				function CitySelector(props) {
					babelHelpers.classCallCheck(this, CitySelector);
			
					var _this = babelHelpers.possibleConstructorReturn(this, (CitySelector.__proto__ || Object.getPrototypeOf(CitySelector)).call(this, props));
			
					_this.trap = {
						show: NOOP,
						click: NOOP,
						info: NOOP
					};
					_this.traps = {
						// 点击搜索城市的输入框
						"1": {
							type: "click",
							params: {
								cspot: "searchCity"
							}
						},
						// 用户输入城市回删时触发
						"2": {
							type: "info",
							params: {
								tri: "searchCity",
								ext: ""
							}
						},
						// 用户输入城市匹配选择城市时触发
						"3": {
							type: "info",
							params: {
								tri: "cityList",
								hcty: ""
							}
						}
					};
					_this.lastInputText = "";
					_this.hasDeleteTrap = false;
					_this.anchorList = [];
					_this.lastScrollTop = 0;
			
					_this.state = {
						data: {},
						currentCity: null
					};
			
					if (CitySelector.__start_list__) {
						CitySelector.__start_list__.forEach(function (item) {
							item.call(_this);
						});
					}
					return _this;
				}
			
				babelHelpers.createClass(CitySelector, [{
					key: "configTrap",
					value: function configTrap(pageInfo) {
						this.trap = new Trap(pageInfo);
					}
				}, {
					key: "onSearchChange",
					value: function onSearchChange(text) {
						// 第一次回删时的输入信息进行打点
						if (this.lastInputText && this.lastInputText.indexOf(text) === 0 && this.trap) {
			
							if (!this.hasDeleteTrap) {
			
								this.hasDeleteTrap = true;
								this.trap.info(Object.assign(this.traps["2"].params, {
									ext: this.lastInputText
								}));
							}
						}
						this.lastInputText = text;
					}
				}, {
					key: "select",
					value: function select(city) {
						this.props.layer.hide(city);
						this.refs.searchBar.blur();
						_data2.default.changeCity(city);
					}
				}, {
					key: "bindAnchor",
					value: function bindAnchor() {
						var _this2 = this;
			
						var anchorHash = this.anchorHash = {};
						var anchorList = this.anchorList = [];
			
						Object.keys(this.refs).forEach(function (key) {
							if (keys.indexOf(key) === -1) {
								return;
							}
			
							var node = NodeMethods(_this2.refs[key]);
			
							var styleKeys = /^(background|padding|margin|font|color|width|height|lineHeight)/;
							var style = function (_style) {
								var style = {};
								for (var key in _style) {
									if (styleKeys.test(key)) {
										style[key] = _style[key];
									}
								}
								return style;
							}(node.style);
			
							node.measure(_this2.refs["container"], function (x, y, width, height) {
								var item = {
									key: key,
									x: x,
									y: y,
									width: width,
									height: height,
									style: style
								};
			
								anchorHash[key] = item;
								anchorList.push(item);
								anchorList.sort(function (a, b) {
									return b.y - a.y;
								});
							});
						});
					}
				}, {
					key: "componentWillMount",
					value: function () {
						var _ref = babelHelpers.asyncToGenerator(regeneratorRuntime.mark(function _callee() {
							var _this3 = this;
			
							return regeneratorRuntime.wrap(function _callee$(_context) {
								while (1) {
									switch (_context.prev = _context.next) {
										case 0:
											babelHelpers.get(CitySelector.prototype.__proto__ || Object.getPrototypeOf(CitySelector.prototype), "componentWillMount", this).call(this);
			
											_data2.default.onSourceReady(function (data) {
												_this3.setState({
													data: data
												});
											}).onCurrentReady(function (currentCity) {
												_this3.setState({
													currentCity: currentCity
												});
											});
			
										case 2:
										case "end":
											return _context.stop();
									}
								}
							}, _callee, this);
						}));
			
						function componentWillMount() {
							return _ref.apply(this, arguments);
						}
			
						return componentWillMount;
					}()
				}, {
					key: "componentDidMount",
					value: function () {
						var _ref2 = babelHelpers.asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
							return regeneratorRuntime.wrap(function _callee2$(_context2) {
								while (1) {
									switch (_context2.prev = _context2.next) {
										case 0:
											babelHelpers.get(CitySelector.prototype.__proto__ || Object.getPrototypeOf(CitySelector.prototype), "componentDidMount", this).call(this);
			
											this.bindAnchor();
			
										case 2:
										case "end":
											return _context2.stop();
									}
								}
							}, _callee2, this);
						}));
			
						function componentDidMount() {
							return _ref2.apply(this, arguments);
						}
			
						return componentDidMount;
					}()
				}, {
					key: "componentDidUpdate",
					value: function componentDidUpdate() {
						babelHelpers.get(CitySelector.prototype.__proto__ || Object.getPrototypeOf(CitySelector.prototype), "componentDidUpdate", this).call(this);
			
						this.bindAnchor();
					}
				}, {
					key: "onIndexTo",
					value: function onIndexTo(key) {
						var anchor = this.anchorHash[key];
						if (anchor) {
							this.refs.container.scrollTo(0, anchor.y, false);
						}
					}
				}, {
					key: "cityScroll",
			
					// 浮动头
					value: function cityScroll(e) {
						var _this4 = this;
			
						if (this.refs.index.touching) {
							if (this.currentKey) {
								this.currentKey = "";
								this.refs["float-header"].innerText = "";
								NodeMethods(this.refs["float-header"]).style = {};
							}
							return;
						}
			
						var y = e.scrollTop;
						var currentIndex = -1;
						var currentAnchor = this.anchorList.find(function (anchor, index) {
							if (anchor.y <= y) {
								currentIndex = index;
								return true;
							}
						});
						var nextAnchor = this.anchorList[currentIndex - 1];
			
						if (currentAnchor) {
							var setY = function setY() {
								var translateY = nextAnchor ? Math.min(0, nextAnchor.y - currentAnchor.height - y) : 0;
								if (translateY !== _this4.translateY) {
									_this4.translateY = translateY;
									NodeMethods(_this4.refs["float-header"]).style = Object.assign({
										top: translateY + "px"
									}, currentAnchor.style);
								}
							};
			
							var setKey = function setKey() {
								var key = currentAnchor.key;
								if (key !== _this4.currentKey) {
									_this4.currentKey = key;
									_this4.refs["float-header"].innerText = {
										current: "当前位置",
										hot: "热门城市"
									}[key] || key;
									NodeMethods(_this4.refs["float-header"]).style = currentAnchor.style;
								}
							};
			
							if (y > this.lastScrollTop) {
								setY();
								setKey();
							} else {
								setKey();
								setY();
							}
						} else {
							this.currentKey = "";
							this.refs["float-header"].innerText = "";
							this.translateY = 0;
							NodeMethods(this.refs["float-header"]).style = {};
						}
			
						this.lastScrollTop = y;
					}
			
					// 为数据分段，3个一段
			
				}, {
					key: "subsection",
					value: function subsection(list, render) {
						if (list) {
							return new Array(Math.ceil(list.length / 3) + 1).join("|").split("").map(function (item, index) {
								var items = list.slice(index * 3, index * 3 + 3);
								var count = items.length;
								if (count !== 3) {
									items.length = 3;
									for (; count < 3; count++) {
										items[count] = null;
									}
									//items.fill(null, count, 3);
								}
								return render(items);
							});
						} else {
							return null;
						}
					}
				}]);
				return CitySelector;
			}(Component), _class.View = __inner_require__(1 /*components/city-selector/index-html.js*/).default, _class.Styles = [__inner_require__(12 /*components/city-selector/index-css.js*/).default], _class.Data = _data2.default, _class.__start_list__ = [function () {
				this._styles = CitySelector.Styles;
			}, function () {
				this.view = CitySelector.View.call(this);
			}], _temp);
			exports.default = CitySelector;
		},
		// components/city-selector/index-html.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = View;
			
			var _reactNative = require("react-native@0.21/Libraries/react-native/react-native.js");
			
			var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);
			
			var _enjoyRnSupport = require("enjoy-rn-support@0.0.47/dist/index.js");
			
			var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);
			
			var _index = __inner_require__(2 /*components/city-selector/SearchBar/index.js*/);
			
			var _index2 = babelHelpers.interopRequireDefault(_index);
			
			var _index3 = __inner_require__(6 /*components/city-selector/SearchMatch/index.js*/);
			
			var _index4 = babelHelpers.interopRequireDefault(_index3);
			
			var _index5 = __inner_require__(9 /*components/city-selector/Index/index.js*/);
			
			var _index6 = babelHelpers.interopRequireDefault(_index5);
			
			var Body = _enjoyRnSupport2.default.Body;
			var Box = _enjoyRnSupport2.default.Box;
			var ScrollView = _enjoyRnSupport2.default.ScrollView;
			var A = _enjoyRnSupport2.default.A;
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil(__project + "/components/city-selector/index");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			function View() {
				var __view__ = {};
			
				__view__.render = function (components) {
					var _this = this;
			
					return __dom__(Body, {
						_component_id: this.props._id,
						_styles: this._styles,
						css: [".rn-body"],
						_id: __getKey__()
					}, __dom__(_index2.default, {
						ref: "searchBar",
						onStart: function onStart(key) {
							_this.refs.searchMatch.open(key);
			
							if (_this.trap) {
								_this.trap.click(_this.traps["1"].params);
							}
						},
						onEnd: function onEnd() {
							_this.refs.searchMatch.close();
						},
						onChange: function onChange(key) {
							_this.refs.searchMatch.search(key);
			
							_this.onSearchChange(key);
						},
						onClose: function onClose() {
							_this.props.layer.hide();
						}, css: [".rn-search-bar"],
						_id: __getKey__(),
						_pageInfo: this.props._pageInfo
					}), __dom__(Box, {
						css: [".rn-div", ".city-panel"],
						_id: __getKey__()
					}, __dom__(ScrollView, {
						ref: "container",
						onLayout: this.bindAnchor.bind(this),
						onScroll: this.cityScroll.bind(this), css: [".rn-scroll-view"],
						_id: __getKey__()
					}, __dom__(Box, {
						css: [".rn-section", ".mod", ".section-mod", ".current"],
						_id: __getKey__()
					}, __dom__(Box, { ref: "current", css: [".rn-h3"],
						_id: __getKey__()
					}, "当前位置"), this.state.currentCity ? __dom__(Box, {
						css: [".rn-p"],
						_id: __getKey__()
					}, __dom__(A, { onClick: function onClick() {
							_this.select(_this.state.currentCity);
						}, css: [".rn-a"],
						_id: __getKey__()
					}, this.state.currentCity.name), __dom__(Box, {
						css: [".rn-span", ".placeholder"],
						_id: __getKey__()
					}), __dom__(Box, {
						css: [".rn-span", ".placeholder"],
						_id: __getKey__()
					})) : __dom__(Box, {
						css: [".rn-p", ".being-positioned"],
						_id: __getKey__()
					}, "定位中...")), __dom__(Box, {
						css: [".rn-section", ".mod", ".section-mod"],
						_id: __getKey__()
					}, __dom__(Box, { ref: "hot", css: [".rn-h3"],
						_id: __getKey__()
					}, "热门城市"), this.subsection(this.state.data["热门"], function (items) {
						return __dom__(Box, {
							css: [".rn-p"],
							_id: __getKey__()
						}, items.map(function (item) {
							if (item) {
								return __dom__(A, {
									onClick: function onClick() {
										_this.select({
											id: item[2],
											name: item[0]
										});
									}, css: [".rn-a"],
									_id: __getKey__()
								}, item[0]);
							} else {
								return __dom__(Box, {
									css: [".rn-span", ".placeholder"],
									_id: __getKey__()
								});
							}
						}));
					})), __dom__(Box, {
						css: [".rn-dl", ".indexs"],
						_id: __getKey__()
					}, "AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZ".split("").map(function (key, index) {
						if (_this.state.data[key]) {
							if (index % 2 === 0) {
								return __dom__(Box, { ref: key, css: [".rn-dt"],
									_id: __getKey__()
								}, key);
							} else {
								return __dom__(Box, {
									css: [".rn-dd"],
									_id: __getKey__()
								}, _this.state.data[key].map(function (city) {
									return __dom__(A, {
										onClick: function onClick() {
											_this.select({
												id: city[3],
												name: city[0]
											});
										}, css: [".rn-a"],
										_id: __getKey__()
									}, __dom__(Box, {
										css: [".rn-span"],
										_id: __getKey__()
									}, city[0]));
								}));
							}
						} else {
							return null;
						}
					}))), __dom__(Box, { ref: "float-header", css: __class__(["rn-div", {
							"float-index": true
						}]),
						_id: __getKey__()
					}), __dom__(_index6.default, { ref: "index", data: this.state.data, onIndexTo: this.onIndexTo.bind(this), css: [".rn-index"],
						_id: __getKey__(),
						_pageInfo: this.props._pageInfo
					})), __dom__(_index4.default, {
						ref: "searchMatch",
						source: this.state.data,
						onSelect: function onSelect(item) {
							_this.select(item);
			
							_this.refs.searchBar.clear();
			
							_this.trap.info(Object.assign(_this.traps["3"].params, {
								hcty: item.id
							}));
						},
						onCancel: function onCancel() {
							_this.refs.searchBar.blur();
						}, css: [".rn-search-match"],
						_id: __getKey__(),
						_pageInfo: this.props._pageInfo
					}), components);
				}.bind(this);
			
				return __view__;
			}
		},
		// components/city-selector/SearchBar/index.js
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
			var __util__ = Util.pageUtil(__project + "/components/city-selector/SearchBar/index");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			var Component = _enjoyRnSupport2.default.Component;
			
			var SearchBar = (_temp = _class = function (_Component) {
				babelHelpers.inherits(SearchBar, _Component);
			
				function SearchBar(props) {
					babelHelpers.classCallCheck(this, SearchBar);
			
					var _this = babelHelpers.possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));
			
					_this.state = {
						// 输入中
						inputing: false
					};
			
					if (SearchBar.__start_list__) {
						SearchBar.__start_list__.forEach(function (item) {
							item.call(_this);
						});
					}
					return _this;
				}
			
				babelHelpers.createClass(SearchBar, [{
					key: "onStart",
					value: function onStart() {
						this.setState({
							inputing: true
						});
			
						if (this.props.onStart) {
							this.props.onStart(this.refs.searchInput.value);
						}
					}
				}, {
					key: "onEnd",
					value: function onEnd() {
						this.setState({
							inputing: false
						});
			
						if (this.props.onEnd) {
							this.props.onEnd();
						}
					}
				}, {
					key: "focus",
					value: function focus() {
						this.refs.searchInput.focus();
					}
				}, {
					key: "blur",
					value: function blur() {
						this.refs.searchInput.blur();
					}
				}, {
					key: "onInput",
					value: function onInput() {
						if (this.props.onChange) {
							this.props.onChange(this.refs.searchInput.value);
						}
					}
				}, {
					key: "clear",
					value: function clear() {
						this.refs.searchInput.value = "";
					}
				}]);
				return SearchBar;
			}(Component), _class.View = __inner_require__(3 /*components/city-selector/SearchBar/index-html.js*/).default, _class.Styles = [__inner_require__(4 /*components/city-selector/SearchBar/index-css.js*/).default], _class.propTypes = {
				onStart: _reactNative2.default.PropTypes.func,
				onEnd: _reactNative2.default.PropTypes.func,
				onChange: _reactNative2.default.PropTypes.func,
				onClose: _reactNative2.default.PropTypes.func
			}, _class.defaultProps = {
				onStart: null,
				onEnd: null,
				onChange: null,
				onClose: null
			}, _class.__start_list__ = [function () {
				this._styles = SearchBar.Styles;
			}, function () {
				this.view = SearchBar.View.call(this);
			}], _temp);
			exports.default = SearchBar;
		},
		// components/city-selector/SearchBar/index-html.js
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
			var SearchInput = _enjoyRnSupport2.default.SearchInput;
			var A = _enjoyRnSupport2.default.A;
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil(__project + "/components/city-selector/SearchBar/index");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			function View() {
				var _this = this;
			
				return {
					render: function render(components) {
						return __dom__(Box, { _component_id: _this.props._id,
							_styles: _this._styles,
							css: [".rn-div", ".navbar"],
							_id: __getKey__()
						}, __dom__(SearchInput, {
							ref: "searchInput",
			
							placeholder: "搜索城市",
							onFocus: _this.onStart.bind(_this),
							onBlur: _this.onEnd.bind(_this),
							onChange: _this.onInput.bind(_this), css: [".rn-search-input", ".input"],
							_id: __getKey__()
						}), __dom__(A, {
							onClick: function onClick() {
								if (_this.props.onClose) {
									_this.props.onClose();
								}
							}, css: __class__(["rn-a", {
								"close": true,
								"fn-hide": _this.state.inputing
							}]),
							_id: __getKey__()
						}), __dom__(A, {
							onClick: function onClick() {
								_this.refs.searchInput.blur();
							}, css: __class__(["rn-a", {
								"cancel": true,
								"fn-hide": !_this.state.inputing
							}]),
							_id: __getKey__()
						}, "取消"), components);
					}
				};
			}
		},
		// components/city-selector/SearchBar/index-css.js
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
						borderBottomWidth: "1px",
						borderStyle: "solid",
						borderBottomColor: "#ddd",
						"ios-borderBottomWidth": "0.5px"
					},
					"1": {
						flex: "1",
						height: "30px",
						lineHeight: "30px",
						borderWidth: 0,
						borderRadius: "5px",
						backgroundColor: "#f4f4f4",
						marginTop: "7px",
						marginRight: "0",
						marginBottom: "7px",
						marginLeft: "7px",
						fontSize: "12px",
						textAlign: "left"
					},
					"2": {
						width: "44px",
						height: "44px",
						backgroundImage: __inner_require__(5 /*components/city-selector/SearchBar/close.png*/),
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center center",
						backgroundSize: "16px 16px"
					},
					"3": {
						paddingVertical: "0",
						paddingHorizontal: "10px",
						height: "44px",
						lineHeight: "44px",
						textAlign: "center",
						color: "#38f"
					}
				},
				index: {
					".navbar": [{
						key: "0"
					}],
					".input": [{
						key: "1"
					}],
					".close": [{
						key: "2"
					}],
					".cancel": [{
						key: "3"
					}]
				}
			});
		},
		// components/city-selector/SearchBar/close.png
		function(__inner_require__, exports, module){
			var images = require("FindHotel@0.0.1/__base64_image_sprite_mod_id__");
			module.exports = ["", images["e3a27e0bca12237b688c22d0d16c80824d2df3d6.png"], images["be370a73c0b2a48114ced12acd0f7ed5393fd5b2.png"], images["07b6317fb71c4e6bf6dcdceb4f2baa9be9ba132a.png"]][__pixel_ratio];
		},
		// components/city-selector/SearchMatch/index.js
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
			var __util__ = Util.pageUtil(__project + "/components/city-selector/SearchMatch/index");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			var Component = _enjoyRnSupport2.default.Component;
			
			var SearchMatch = (_temp = _class = function (_Component) {
				babelHelpers.inherits(SearchMatch, _Component);
			
				function SearchMatch(props) {
					babelHelpers.classCallCheck(this, SearchMatch);
			
					var _this = babelHelpers.possibleConstructorReturn(this, (SearchMatch.__proto__ || Object.getPrototypeOf(SearchMatch)).call(this, props));
			
					_this.state = {
						// 是否是搜索模式
						isOpen: false,
						// 用户输入的关键字
						searchKey: "",
						// 匹配结果
						matchData: []
					};
			
					_this.transData(_this.props.source);
			
					if (SearchMatch.__start_list__) {
						SearchMatch.__start_list__.forEach(function (item) {
							item.call(_this);
						});
					}
					return _this;
				}
			
				babelHelpers.createClass(SearchMatch, [{
					key: "componentWillReceiveProps",
					value: function componentWillReceiveProps(nextProps) {
						this.transData(nextProps.source);
					}
			
					// 格式化数据源，方便正则匹配
			
				}, {
					key: "transData",
					value: function transData(source) {
						var datas = [];
			
						if (source) {
							Object.keys(source).forEach(function (key) {
								if (key !== "热门") {
									datas.push(source[key].map(function (item) {
										return item.join("|");
									}).join("@"));
								}
							});
						}
			
						this.source = "@" + datas.join("@") + "@";
					}
				}, {
					key: "open",
					value: function open() {
						this.setState({
							isOpen: true
						});
					}
				}, {
					key: "close",
					value: function close() {
						this.setState({
							isOpen: false
						});
					}
				}, {
					key: "search",
					value: function search(key) {
						var _this2 = this;
			
						this.setState({
							searchKey: key
						});
			
						if (key) {
							(function () {
								var regexs = void 0;
								key = key.toLowerCase();
			
								if (/^[a-z]+$/.test(key)) {
									// 按字母匹配
									regexs = [
									// 简写全匹配
									new RegExp("@([^\\|]+\\|[^\\|]+\\|" + key + "\\|[^\\|]+)@", "gi"),
									// 拼音全匹配
									new RegExp("@([^\\|]+\\|" + key + "\\|[^\\|]*\\|[^\\|]+)@", "gi"),
									// 简写开头匹配
									new RegExp("@([^\\|]+\\|[^\\|]+\\|" + key + "[^\\|]+\\|[^\\|]+)@", "gi"),
									// 拼音开头匹配
									new RegExp("@([^\\|]+\\|" + key + "[^\\|]+\\|[^\\|]*\\|[^\\|]+)@", "gi"),
									// 拼音包含匹配
									new RegExp("@([^\\|]+\\|[^\\|]+" + key + "[^\\|]*\\|[^\\|]*\\|[^\\|]+)@", "gi")];
								} else {
									// 按汉字匹配
									regexs = [
									// 完全匹配
									new RegExp("@(" + key + "\\|[^@]+)@", "gi"),
									// 开头匹配
									new RegExp("@(" + key + "[^\\|]+\\|[^@]+)@", "gi"),
									// 包含匹配
									new RegExp("@([^\\|]+" + key + "[^\\|]*\\|[^@]+)@", "gi")];
								}
			
								var result = [];
								var source = _this2.source;
								var checkHash = {};
								regexs.some(function (regex) {
									var item = void 0;
									while (item = regex.exec(source)) {
										item = item[1].split("|");
			
										if (!checkHash[item[3]]) {
											checkHash[item[3]] = true;
			
											result.push({
												id: +item[3],
												name: item[0]
											});
			
											if (result.length > 9) {
												return true;
											}
										}
									}
								});
								checkHash = null;
			
								_this2.setState({
									matchData: result
								});
							})();
						} else {
							this.setState({
								matchData: []
							});
						}
					}
				}, {
					key: "select",
					value: function select(item) {
						if (this.props.onSelect) {
							this.props.onSelect(item);
						}
					}
				}, {
					key: "cancel",
					value: function cancel() {
						if (this.props.onCancel) {
							this.props.onCancel();
						}
					}
				}]);
				return SearchMatch;
			}(Component), _class.View = __inner_require__(7 /*components/city-selector/SearchMatch/index-html.js*/).default, _class.Styles = [__inner_require__(8 /*components/city-selector/SearchMatch/index-css.js*/).default], _class.propTypes = {
				// 城市数据源
				source: _reactNative2.default.PropTypes.object,
				// 用户选择一项搜索结果时触发
				onSelect: _reactNative2.default.PropTypes.func,
				// 用户取消搜索的时候触发
				onCancel: _reactNative2.default.PropTypes.func
			}, _class.defaultProps = {
				source: null,
				onSelect: null
			}, _class.__start_list__ = [function () {
				this._styles = SearchMatch.Styles;
			}, function () {
				this.view = SearchMatch.View.call(this);
			}], _temp);
			exports.default = SearchMatch;
		},
		// components/city-selector/SearchMatch/index-html.js
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
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil(__project + "/components/city-selector/SearchMatch/index");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			function View() {
				var _this = this;
			
				return {
					render: function render(components) {
						return __dom__(Box, { _component_id: _this.props._id,
							_styles: _this._styles,
							css: __class__(["rn-div", {
								"search-match": true,
								"show": _this.state.isOpen
							}]),
							_id: __getKey__()
						}, __dom__(Box, {
							onClick: _this.cancel.bind(_this), css: __class__(["rn-div", {
								"bg": true,
								"bg-show": _this.state.isOpen && !_this.state.searchKey
							}]),
							_id: __getKey__()
						}), __dom__(Box, {
							css: __class__(["rn-div", {
								"content": true,
								"fn-hide": !_this.state.isOpen || !_this.state.searchKey
							}]),
							_id: __getKey__()
						}, __dom__(Box, {
							css: __class__(["rn-div", {
								"list": true,
								"fn-hide": _this.state.matchData.length === 0
							}]),
							_id: __getKey__()
						}, _this.state.matchData.map(function (item) {
							return __dom__(A, {
								onClick: function onClick() {
									_this.select(item);
								}, css: [".rn-a", ".item"],
								_id: __getKey__()
							}, __dom__(Box, {
								css: [".rn-span"],
								_id: __getKey__()
							}, item.name));
						})), __dom__(Box, {
							css: __class__(["rn-div", {
								"no-data": true,
								"fn-hide": _this.state.matchData.length > 0
							}]),
							_id: __getKey__()
						}, "小主，没有您想要的结果呢~")), components);
					}
				};
			}
		},
		// components/city-selector/SearchMatch/index-css.js
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
						position: "absolute",
						left: "0",
						right: "0",
						top: "44px",
						"ios-top": "64px",
						bottom: "0",
						pointerEvents: "none"
					},
					"1": {
						pointerEvents: "auto"
					},
					"2": {
						position: "absolute",
						left: "0",
						right: "0",
						top: "0",
						bottom: "0"
					},
					"3": {
						backgroundColor: "#000",
						opacity: "0",
						transition: [{
							property: ["opacity"],
							duration: 100,
							timingFunction: "ease",
							delay: 0
						}]
					},
					"4": {
						opacity: "0.6"
					},
					"5": {
						display: "flex",
						flexDirection: "column",
						backgroundColor: "#fff"
					},
					"6": {
						display: "block",
						paddingLeft: "12px"
					},
					"7": {
						backgroundColor: "#e8e8e8"
					},
					"8": {
						display: "block",
						fontSize: "14px",
						fontWeight: "normal",
						color: "#333",
						borderBottomWidth: "1px",
						borderStyle: "solid",
						borderBottomColor: "#ddd",
						"ios-borderBottomWidth": "0.5px",
						"ios-borderStyle": "solid",
						"ios-borderBottomColor": "#ddd",
						height: "44px",
						lineHeight: "44px"
					},
					"9": {
						color: "#999",
						fontSize: "16px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}
				},
				index: {
					".search-match": [{
						key: "0"
					}, {
						selector: ".search-match.show",
						key: "1"
					}],
					".show": [{
						selector: ".search-match.show",
						key: "1"
					}],
					".bg": [{
						key: "2"
					}, {
						key: "3"
					}],
					".content": [{
						key: "2"
					}, {
						key: "5"
					}],
					".list": [{
						key: "2"
					}],
					".no-data": [{
						key: "2"
					}, {
						key: "9"
					}],
					".bg-show": [{
						key: "4"
					}],
					".item": [{
						selector: ".list .item",
						key: "6"
					}, {
						selector: ".list .item:active",
						key: "7"
					}],
					".rn-span": [{
						selector: ".list .item .rn-span",
						key: "8"
					}]
				}
			});
		},
		// components/city-selector/Index/index.js
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
			var __util__ = Util.pageUtil(__project + "/components/city-selector/Index/index");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			var Component = _enjoyRnSupport2.default.Component;
			var NodeMethods = _enjoyRnSupport2.default.NodeMethods;
			
			var Index = (_temp = _class = function (_Component) {
				babelHelpers.inherits(Index, _Component);
			
				function Index(props) {
					babelHelpers.classCallCheck(this, Index);
			
					var _this = babelHelpers.possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
			
					_this.state = {
						touching: false
					};
			
					if (Index.__start_list__) {
						Index.__start_list__.forEach(function (item) {
							item.call(_this);
						});
					}
					return _this;
				}
			
				babelHelpers.createClass(Index, [{
					key: "onCityIndexTouchStart",
					value: function onCityIndexTouchStart(e) {
						var _this2 = this;
			
						var top = e.nativeEvent.pageY || e.nativeEvent.touches[0].pageY;
			
						if (this.indexPos) {
							this.indexToY(top);
						} else {
							(function () {
								var pos = _this2.indexPos = [];
			
								Array.from(_this2.refs["city-index"].childNodes).forEach(function (node) {
									NodeMethods(node).measure(function (x, y, width, height) {
										var key = node.innerText;
										key = {
											"当前": "current",
											"热门": "hot"
										}[key] || key;
			
										pos.push({
											key: key,
											top: y,
											bottom: y + height
										});
			
										if (top >= y && top <= y + height) {
											_this2.props.onIndexTo && _this2.props.onIndexTo(key);
										}
									});
								});
							})();
						}
			
						this.setState({
							touching: true
						});
					}
				}, {
					key: "indexToY",
					value: function indexToY(y) {
						var item = this.indexPos.find(function (item) {
							return y >= item.top && y <= item.bottom;
						});
			
						if (item) {
							this.props.onIndexTo && this.props.onIndexTo(item.key);
						}
					}
				}, {
					key: "onCityIndexTouchMove",
					value: function onCityIndexTouchMove(e) {
						var y = e.nativeEvent.pageY || e.nativeEvent.touches[0].pageY;
			
						this.indexToY(y);
						// e.stopPropagation();
						// e.preventDefault();
					}
				}, {
					key: "onCityIndexTouchEnd",
					value: function onCityIndexTouchEnd(e) {
						this.setState({
							touching: false
						});
					}
				}, {
					key: "touching",
					get: function get() {
						return this.state.touching;
					}
				}]);
				return Index;
			}(Component), _class.View = __inner_require__(10 /*components/city-selector/Index/index-html.js*/).default, _class.Styles = [__inner_require__(11 /*components/city-selector/Index/index-css.js*/).default], _class.propTypes = {
				data: _reactNative2.default.PropTypes.object,
				onIndexTo: _reactNative2.default.PropTypes.func
			}, _class.defaultProps = {
				data: {},
				onIndexTo: null
			}, _class.__start_list__ = [function () {
				this._styles = Index.Styles;
			}, function () {
				this.view = Index.View.call(this);
			}], _temp);
			exports.default = Index;
		},
		// components/city-selector/Index/index-html.js
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
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil(__project + "/components/city-selector/Index/index");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			function View() {
				var _this = this;
			
				return {
					render: function render(components) {
						return __dom__(Box, { _component_id: _this.props._id,
							_styles: _this._styles,
							css: [".rn-div", ".container"],
							_id: __getKey__()
						}, __dom__(Box, { ref: "city-index-mask", css: __class__(["rn-div", {
								"mask": true,
								"fn-hide": !_this.state.touching
							}]),
							_id: __getKey__()
						}), __dom__(Box, {
							ref: "city-index",
							onTouchStart: _this.onCityIndexTouchStart.bind(_this),
							onTouchMove: _this.onCityIndexTouchMove.bind(_this),
							onTouchEnd: _this.onCityIndexTouchEnd.bind(_this), css: __class__(["rn-div", {
								"index": true,
								"index-middle": _enjoyRnSupport2.default.Screen.size.height < 550
							}]),
							_id: __getKey__()
						}, __dom__(A, {
							css: [".rn-a"],
							_id: __getKey__()
						}, "当前"), __dom__(A, {
							css: [".rn-a"],
							_id: __getKey__()
						}, "热门"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(function (key) {
							if (_this.props.data[key]) {
								return __dom__(A, {
									css: [".rn-a"],
									_id: __getKey__()
								}, key);
							} else {
								return null;
							}
						})), components);
					}
				};
			}
		},
		// components/city-selector/Index/index-css.js
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
						position: "absolute",
						left: "0",
						right: "0",
						top: "0",
						bottom: "0"
					},
					"1": {
						pointerEvents: "box-none"
					},
					"2": {
						position: "absolute",
						top: "0",
						bottom: "0",
						right: "0",
						width: "24px",
						paddingTop: "125px"
					},
					"3": {
						paddingTop: "0",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center"
					},
					"4": {
						display: "block",
						fontSize: "10px",
						fontWeight: "bold",
						lineHeight: "1.5",
						textAlign: "center",
						color: "#5994fe"
					},
					"5": {
						backgroundColor: "rgba(255, 255, 255, 0.01)"
					}
				},
				index: {
					".container": [{
						key: "0"
					}, {
						key: "1"
					}],
					".mask": [{
						key: "0"
					}, {
						key: "5"
					}],
					".index": [{
						key: "2"
					}],
					".index-middle": [{
						key: "3"
					}],
					".rn-a": [{
						selector: ".index .rn-a",
						key: "4"
					}]
				}
			});
		},
		// components/city-selector/index-css.js
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
						backgroundColor: "#f4f4f4"
					},
					"1": {
						position: "relative",
						flex: "1",
						display: "flex",
						flexDirection: "column",
						overflow: "hidden"
					},
					"2": {
						position: "absolute",
						left: "0",
						right: "0",
						top: "0"
					},
					"3": {
						paddingRight: "24px"
					},
					"4": {
						height: "37px",
						lineHeight: "37px",
						fontSize: "12px",
						fontWeight: "normal",
						color: "#888",
						paddingVertical: "0",
						paddingHorizontal: "12px",
						backgroundColor: "#f4f4f4"
					},
					"5": {
						borderBottomWidth: "1px",
						borderStyle: "solid",
						borderBottomColor: "#ebebeb",
						"ios-borderBottomWidth": "0.5px"
					},
					"6": {
						display: "flex",
						flexDirection: "row",
						paddingVertical: "0",
						paddingHorizontal: "6px"
					},
					"7": {
						flex: "1",
						marginTop: "0",
						marginHorizontal: "6px",
						marginBottom: "12px",
						height: "40px",
						fontSize: "14px",
						fontWeight: "normal",
						lineHeight: "40px",
						textAlign: "center",
						borderRadius: "3px",
						backgroundColor: "#fff",
						color: "#333"
					},
					"8": {
						backgroundColor: "#e8e8e8"
					},
					"9": {
						flex: "1",
						marginTop: "0",
						marginHorizontal: "6px",
						marginBottom: "12px"
					},
					A: {
						marginTop: "0",
						marginHorizontal: "6px",
						marginBottom: "12px",
						fontSize: "12px",
						color: "#888"
					},
					B: {
						backgroundColor: "#fff"
					},
					C: {
						paddingVertical: "0",
						paddingHorizontal: "12px",
						height: "22px",
						lineHeight: "22px",
						fontSize: "15px",
						fontWeight: "normal",
						color: "#444",
						backgroundColor: "#ecf1f8"
					},
					D: {},
					E: {
						display: "block",
						paddingLeft: "12px"
					},
					F: {
						display: "block",
						borderBottomWidth: "1px",
						borderStyle: "solid",
						borderBottomColor: "#f2f2f2",
						"ios-borderBottomWidth": "0.5px",
						fontSize: "15px",
						fontWeight: "normal",
						color: "#333",
						height: "44px",
						lineHeight: "44px"
					},
					G: {
						backgroundColor: "#e8e8e8"
					},
					H: {
						borderBottomWidth: 0
					}
				},
				index: {
					".rn-body": [{
						key: "0"
					}],
					".city-panel": [{
						key: "1"
					}],
					".float-index": [{
						selector: ".city-panel .float-index",
						key: "2"
					}],
					".mod": [{
						selector: ".city-panel .mod",
						key: "3"
					}],
					".rn-h3": [{
						selector: ".mod .rn-h3",
						key: "4"
					}],
					".current": [{
						selector: ".city-panel .current",
						key: "5"
					}],
					".rn-p": [{
						selector: ".section-mod .rn-p",
						key: "6"
					}],
					".rn-a": [{
						selector: ".section-mod .rn-a",
						key: "7"
					}, {
						selector: ".section-mod .rn-a:active",
						key: "8"
					}, {
						selector: ".city-panel .indexs .rn-a",
						key: "E"
					}, {
						selector: ".city-panel .indexs .rn-a:active",
						key: "G"
					}, {
						selector: ".city-panel .indexs .rn-a:last-child",
						key: "H"
					}],
					".placeholder": [{
						selector: ".section-mod .placeholder",
						key: "9"
					}],
					".being-positioned": [{
						selector: ".section-mod .being-positioned",
						key: "A"
					}],
					".indexs": [{
						selector: ".city-panel .indexs",
						key: "B"
					}],
					".rn-dt": [{
						selector: ".city-panel .indexs .rn-dt",
						key: "C"
					}],
					".rn-dd": [{
						selector: ".city-panel .indexs .rn-dd",
						key: "D"
					}],
					".rn-span": [{
						selector: ".city-panel .indexs .rn-span",
						key: "F"
					}]
				}
			});
		}
	];
});