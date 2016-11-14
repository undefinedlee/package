loader.define("sss3@0.0.1/views/home/index.js", ["react-native@0.21/Libraries/react-native/react-native.js", "enjoy-rn-support@0.2/dist/index.js", "sss3@0.0.1/service/user.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
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
			
			var _enjoyRnSupport = require("enjoy-rn-support@0.2/dist/index.js");
			
			var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);
			
			var _index = __inner_require__(1 /*components/calendar/index.js*/);
			
			var _index2 = babelHelpers.interopRequireDefault(_index);
			
			var _user = require("sss3@0.0.1/service/user.js");
			
			var _user2 = babelHelpers.interopRequireDefault(_user);
			
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
			
			var Home = (_dec = layers({
				calendar: _index2.default
			}), _dec(_class = (_temp = _class2 = function (_Component) {
				babelHelpers.inherits(Home, _Component);
			
				function Home(props) {
					babelHelpers.classCallCheck(this, Home);
			
					var _this = babelHelpers.possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
			
					_this.state = {
						user: null,
						date: "",
						height: 100
					};
			
					if (Home.__start_list__) {
						Home.__start_list__.forEach(function (item) {
							item.call(_this);
						});
					}
					return _this;
				}
			
				babelHelpers.createClass(Home, [{
					key: "componentWillMount",
					value: function componentWillMount() {
						babelHelpers.get(Home.prototype.__proto__ || Object.getPrototypeOf(Home.prototype), "componentWillMount", this).call(this);
			
						this.loadUserInfo();
					}
				}, {
					key: "componentDidMount",
					value: function componentDidMount() {
						var _this2 = this;
			
						babelHelpers.get(Home.prototype.__proto__ || Object.getPrototypeOf(Home.prototype), "componentDidMount", this).call(this);
			
						this.calendar.onReady(function () {
							_this2.calendar.component.onSelect(function (date) {
								_this2.setState({
									date: date
								});
							});
						});
			
						setTimeout(function () {
							_this2.setState({
								height: 200
							});
						});
					}
				}, {
					key: "loadUserInfo",
					value: function () {
						var _ref = babelHelpers.asyncToGenerator(regeneratorRuntime.mark(function _callee() {
							return regeneratorRuntime.wrap(function _callee$(_context) {
								while (1) {
									switch (_context.prev = _context.next) {
										case 0:
											_context.t0 = this;
											_context.next = 3;
											return _user2.default.UserInfo();
			
										case 3:
											_context.t1 = _context.sent;
											_context.t2 = {
												user: _context.t1
											};
			
											_context.t0.setState.call(_context.t0, _context.t2);
			
										case 6:
										case "end":
											return _context.stop();
									}
								}
							}, _callee, this);
						}));
			
						function loadUserInfo() {
							return _ref.apply(this, arguments);
						}
			
						return loadUserInfo;
					}()
				}, {
					key: "openCalendar",
					value: function openCalendar() {
						this.calendar.show();
					}
				}]);
				return Home;
			}(Component), _class2.View = __inner_require__(7 /*views/home/index-html.js*/).default, _class2.Styles = [__inner_require__(8 /*views/home/index-css.js*/).default], _class2.__start_list__ = [function () {
				this._styles = Home.Styles;
			}, function () {
				this.view = Home.View.call(this);
			}], _temp)) || _class);
			exports.default = Home;
		},		// components/calendar/index.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = undefined;
			
			var _class2, _temp;
			
			var _reactNative = require("react-native@0.21/Libraries/react-native/react-native.js");
			
			var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);
			
			var _enjoyRnSupport = require("enjoy-rn-support@0.2/dist/index.js");
			
			var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);
			
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil(__project + "/components/calendar/index");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			var _dec, _class;
			
			var Component = _enjoyRnSupport2.default.Component;
			var events = _enjoyRnSupport2.default.events;
			
			function doubel(num) {
				return (num < 10 ? "0" : "") + num;
			}
			
			var Calendar = (_dec = events(["select", "async"]), _dec(_class = (_temp = _class2 = function (_Component) {
				babelHelpers.inherits(Calendar, _Component);
			
				function Calendar(props) {
					babelHelpers.classCallCheck(this, Calendar);
			
					var _this = babelHelpers.possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));
			
					var dates = [];
			
					var date = new Date();
					for (var i = 0; i < 100; i++) {
						dates.push({
							date: [date.getFullYear(), doubel(date.getMonth() + 1), doubel(date.getDate())].join("-"),
							weekday: "日一二三四五六"[date.getDay()]
						});
						date.setDate(date.getDate() + 1);
					}
			
					_this.state = {
						dates: dates
					};
			
					if (Calendar.__start_list__) {
						Calendar.__start_list__.forEach(function (item) {
							item.call(_this);
						});
					}
					return _this;
				}
			
				babelHelpers.createClass(Calendar, [{
					key: "selectDate",
					value: function selectDate(date) {
						this.props.layer.hide();
						this.fireSelect(date);
					}
				}]);
				return Calendar;
			}(Component), _class2.View = __inner_require__(2 /*components/calendar/index-html.js*/).default, _class2.Styles = [__inner_require__(6 /*components/calendar/index-css.js*/).default], _class2.__start_list__ = [function () {
				this._styles = Calendar.Styles;
			}, function () {
				this.view = Calendar.View.call(this);
			}], _temp)) || _class);
			exports.default = Calendar;
		},		// components/calendar/index-html.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = View;
			
			var _reactNative = require("react-native@0.21/Libraries/react-native/react-native.js");
			
			var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);
			
			var _enjoyRnSupport = require("enjoy-rn-support@0.2/dist/index.js");
			
			var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);
			
			var _index = __inner_require__(3 /*components/calendar/item/index.js*/);
			
			var _index2 = babelHelpers.interopRequireDefault(_index);
			
			var Body = _enjoyRnSupport2.default.Body;
			var Box = _enjoyRnSupport2.default.Box;
			var A = _enjoyRnSupport2.default.A;
			var ScrollView = _enjoyRnSupport2.default.ScrollView;
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil(__project + "/components/calendar/index");
			
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
					}, __dom__(Box, {
						css: [".rn-div", ".navbar"],
						_id: __getKey__()
					}, __dom__(Box, {
						css: [".rn-div", ".navbar-title"],
						_id: __getKey__()
					}, "选择日期"), __dom__(Box, {
						css: [".rn-div", ".navbar-right"],
						_id: __getKey__()
					}, __dom__(A, { onClick: function onClick() {
							_this.props.layer.hide();
						}, css: [".rn-a"],
						_id: __getKey__()
					}, "关闭"))), __dom__(ScrollView, {
						css: [".rn-scroll-view", ".container"],
						_id: __getKey__()
					}, this.state.dates.map(function (date) {
						return __dom__(_index2.default, { date: date, onSelect: _this.selectDate.bind(_this) });
					})), components);
				}.bind(this);
			
				return __view__;
			}
		},		// components/calendar/item/index.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = undefined;
			
			var _class, _temp;
			
			var _reactNative = require("react-native@0.21/Libraries/react-native/react-native.js");
			
			var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);
			
			var _enjoyRnSupport = require("enjoy-rn-support@0.2/dist/index.js");
			
			var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);
			
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil(__project + "/components/calendar/item/index");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			var Component = _enjoyRnSupport2.default.Component;
			
			var Item = (_temp = _class = function (_Component) {
				babelHelpers.inherits(Item, _Component);
			
				function Item(props) {
					babelHelpers.classCallCheck(this, Item);
			
					var _this = babelHelpers.possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props));
			
					if (Item.__start_list__) {
						Item.__start_list__.forEach(function (item) {
							item.call(_this);
						});
					}
					return _this;
				}
			
				return Item;
			}(Component), _class.View = __inner_require__(4 /*components/calendar/item/index-html.js*/).default, _class.Styles = [__inner_require__(5 /*components/calendar/item/index-css.js*/).default], _class.__start_list__ = [function () {
				this._styles = Item.Styles;
			}, function () {
				this.view = Item.View.call(this);
			}], _temp);
			exports.default = Item;
		},		// components/calendar/item/index-html.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = View;
			
			var _reactNative = require("react-native@0.21/Libraries/react-native/react-native.js");
			
			var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);
			
			var _enjoyRnSupport = require("enjoy-rn-support@0.2/dist/index.js");
			
			var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);
			
			var A = _enjoyRnSupport2.default.A;
			var Box = _enjoyRnSupport2.default.Box;
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil(__project + "/components/calendar/item/index");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			function View() {
				var _this = this;
			
				return {
					render: function render(components) {
						return __dom__(A, { onClick: function onClick() {
								_this.props.onSelect(_this.props.date.date);
							}, _component_id: _this.props._id,
							_styles: _this._styles,
							css: [".rn-a"],
							_id: __getKey__()
						}, _this.props.date.date, __dom__(Box, {
							css: [".rn-span"],
							_id: __getKey__()
						}, "周", _this.props.date.weekday), components);
					}
				};
			}
		},		// components/calendar/item/index-css.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			
			var _enjoyRnSupport = require("enjoy-rn-support@0.2/dist/index.js");
			
			var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);
			
			var StyleSheet = _enjoyRnSupport2.default.StyleSheet;
			exports.default = new StyleSheet({
				rules: {
					"0": {
						height: "40px",
						fontSize: "18px",
						color: "#333",
						backgroundColor: "#eee",
						marginBottom: "2px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						borderRadius: "2px"
					},
					"1": {
						marginBottom: "none"
					},
					"2": {
						fontSize: "12px",
						color: "#999",
						marginLeft: "10px"
					}
				},
				index: {
					".rn-a": [{
						key: "0"
					}, {
						selector: ".rn-a:last-child",
						key: "1"
					}],
					".rn-span": [{
						key: "2"
					}]
				}
			});
		},		// components/calendar/index-css.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			
			var _enjoyRnSupport = require("enjoy-rn-support@0.2/dist/index.js");
			
			var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);
			
			var StyleSheet = _enjoyRnSupport2.default.StyleSheet;
			exports.default = new StyleSheet({
				rules: {
					"0": {
						backgroundColor: "#fff"
					},
					"1": {
						backgroundColor: "#f6f6f6",
						borderBottomWidth: "1px",
						borderStyle: "solid",
						borderBottomColor: "#eee"
					},
					"2": {
						padding: "10px"
					}
				},
				index: {
					".rn-body": [{
						key: "0"
					}],
					".navbar": [{
						key: "1"
					}],
					".container": [{
						key: "2"
					}]
				}
			});
		},		// views/home/index-html.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = View;
			
			var _reactNative = require("react-native@0.21/Libraries/react-native/react-native.js");
			
			var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);
			
			var _enjoyRnSupport = require("enjoy-rn-support@0.2/dist/index.js");
			
			var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);
			
			var Box = _enjoyRnSupport2.default.Box;
			var A = _enjoyRnSupport2.default.A;
			var Body = _enjoyRnSupport2.default.Body;
			var Swiper = _enjoyRnSupport2.default.Swiper;
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
								return __dom__(Box, {
									_styles: this._styles,
									css: [".rn-head", ".navbar"],
									_id: __getKey__()
								}, __dom__(Box, {
									css: [".rn-title", ".navbar-title"],
									_id: __getKey__()
								}, "首页"), __dom__(Box, {
									css: [".rn-left", ".navbar-left"],
									_id: __getKey__()
								}, __dom__(A, { onClick: this.openCalendar.bind(this), css: [".rn-a"],
									_id: __getKey__()
								}, this.state.date || "日历")), __dom__(Box, {
									css: [".rn-right", ".navbar-right"],
									_id: __getKey__()
								}, this.state.user ? __dom__(Box, {
									css: [".rn-span", ".user"],
									_id: __getKey__()
								}, "你好", __dom__(A, { href: "/user-info?userId=" + this.state.user.id, css: [".rn-a"],
									_id: __getKey__(),
									_util: __util__,
									_navigator: this.page
								}, this.state.user.name)) : __dom__(Box, {
									css: [".rn-span", ".logining"],
									_id: __getKey__()
								}, "登陆中...")));
							}.bind(this)
						});
						a = this._styles;
						b = this.state.date;
						c = this.state.user ? __dom__(Box, {
							css: [".rn-span", ".user"],
							_id: __getKey__()
						}, "你好", __dom__(A, { href: "/user-info?userId=" + this.state.user.id, css: [".rn-a"],
							_id: __getKey__(),
							_util: __util__,
							_navigator: this.page
						}, this.state.user.name)) : __dom__(Box, {
							css: [".rn-span", ".logining"],
							_id: __getKey__()
						}, "登陆中...");
					}.bind(this),
					check: function () {
						return (this.state.user ? __dom__(Box, {
							css: [".rn-span", ".user"],
							_id: __getKey__()
						}, "你好", __dom__(A, { href: "/user-info?userId=" + this.state.user.id, css: [".rn-a"],
							_id: __getKey__(),
							_util: __util__,
							_navigator: this.page
						}, this.state.user.name)) : __dom__(Box, {
							css: [".rn-span", ".logining"],
							_id: __getKey__()
						}, "登陆中...")) !== c || this.state.date !== b || this._styles !== a;
					}.bind(this)
				};
			
				__view__.render = function (components) {
					return __dom__(Body, {
						_component_id: this.props._id,
						_styles: this._styles,
						css: [".rn-body"],
						_id: __getKey__()
					}, __dom__(Box, {
						css: [".rn-p"],
						_id: __getKey__()
					}, "Hello Enjoy!"), __dom__(Swiper, {
						loop: true,
						autoplay: true,
						style: {
							height: this.state.height
						}, css: [".rn-swiper", ".banner"],
						_id: __getKey__()
					}, __dom__(A, {
						style: {
							height: this.state.height
						}, css: [".rn-a", ".item"],
						_id: __getKey__()
					}, "1"), __dom__(A, {
						style: {
							height: this.state.height
						}, css: [".rn-a", ".item"],
						_id: __getKey__()
					}, "2"), __dom__(A, {
						style: {
							height: this.state.height
						}, css: [".rn-a", ".item"],
						_id: __getKey__()
					}, "3")), components);
				}.bind(this);
			
				return __view__;
			}
		},		// views/home/index-css.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			
			var _enjoyRnSupport = require("enjoy-rn-support@0.2/dist/index.js");
			
			var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);
			
			var StyleSheet = _enjoyRnSupport2.default.StyleSheet;
			exports.default = new StyleSheet({
				rules: {
					"0": {
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: "#fcfcfc"
					},
					"1": {
						backgroundColor: "#f6f6f6",
						borderBottomWidth: "1px",
						borderStyle: "solid",
						borderBottomColor: "#eee"
					},
					"2": {
						color: "#666"
					},
					"3": {
						color: "#38f"
					},
					"4": {
						color: "#999"
					},
					"5": {
						fontSize: "60px",
						fontWeight: "100",
						color: "#aaa",
						textAlign: "center"
					},
					"6": {
						backgroundColor: "#f00"
					},
					"7": {
						backgroundColor: "#00f"
					}
				},
				index: {
					".rn-body": [{
						key: "0"
					}],
					".navbar": [{
						key: "1"
					}],
					".user": [{
						key: "2"
					}],
					".rn-a": [{
						selector: ".user .rn-a",
						key: "3"
					}],
					".logining": [{
						key: "4"
					}],
					".rn-p": [{
						key: "5"
					}],
					".banner": [{
						key: "6"
					}],
					".item": [{
						key: "7"
					}]
				}
			});
		}
	];
});