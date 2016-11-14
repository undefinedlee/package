caches['business.js']='loader.define("sss4@0.0.1/index.js", ["react-native@0.33/Libraries/react-native/react-native.js", "enjoy-rn-support@0.2/dist/index.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){	"use strict";		return [				function(__inner_require__, exports, module){			var _reactNative = require(\'react-native@0.33/Libraries/react-native/react-native.js\');						var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);						var _main = __inner_require__(1 /*main.js*/);						var _main2 = babelHelpers.interopRequireDefault(_main);						_reactNative.AppRegistry.registerComponent("sss4", function () {			  return _main2.default;			});		},				function(__inner_require__, exports, module){			Object.defineProperty(exports, "__esModule", {				value: true			});			exports.default = undefined;						var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");						var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);						var _enjoyRnSupport = require("enjoy-rn-support@0.2/dist/index.js");						var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);						var _commonCss = __inner_require__(2 /*common-css.js*/);						var _commonCss2 = babelHelpers.interopRequireDefault(_commonCss);						var Container = _enjoyRnSupport2.default.Container;			var Router = _enjoyRnSupport2.default.Router;			var Util = _enjoyRnSupport2.default.Util;			var document = _enjoyRnSupport2.default.document;						var __dom__ = _reactNative2.default.createElement;			var __class__ = Util.arrayClass;			var __util__ = Util.pageUtil(__project + "/main");						var __htmlIndex__ = Util.getHtmlIndex();			var __keyIndex__ = 0;			function __getKey__() {				return __htmlIndex__ + __keyIndex__++;			}						_enjoyRnSupport2.default.StyleSheet.globalStylesheets.push(_commonCss2.default);						var Main = function (_React$Component) {				babelHelpers.inherits(Main, _React$Component);							function Main() {					babelHelpers.classCallCheck(this, Main);					return babelHelpers.possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));				}							babelHelpers.createClass(Main, [{					key: "render",					value: function render() {						return __dom__(Container, {							css: [".rn-container"],							_id: __getKey__()						}, __dom__(Router, {							href: "/home",							map: function map(url, util) {								url = url.split("?");								var params = url[1] ? "?" + url[1] : "";								url = url[0];											if (/^[a-zA-Z\\-0-9]\\:\\/\\//.test(url)) {									return url + params;								} else if (/^\\.{1,2}\\//.test(url)) {									return util.resolve(url) + params;								} else if (/^\\//.test(url)) {									return __project + "/views" + url + "/index.js" + params;								} else {									return url + params;								}							},							reverseMap: function reverseMap(url, util) {								if (/^[a-zA-Z\\-0-9]\\:\\/\\//.test(url)) {									return url;								} else {									url = url.split("?");									var params = url[1] ? "?" + url[1] : "";									url = url[0];												url = url.replace(__project + "/views", "").replace(/\\/index\\.js$/, "");												return url + params;								}							}, css: [".rn-router"],							_id: __getKey__(),							_util: __util__						}));					}				}]);				return Main;			}(_reactNative2.default.Component);			exports.default = Main;		},				function(__inner_require__, exports, module){			Object.defineProperty(exports, "__esModule", {				value: true			});						var _enjoyRnSupport = require("enjoy-rn-support@0.2/dist/index.js");						var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);						var StyleSheet = _enjoyRnSupport2.default.StyleSheet;			exports.default = new StyleSheet({				rules: {					"0": {						color: "#f00"					}				},				index: {					"*": [{						key: "0"					}]				}			});		}	];});loader.define("sss4@0.0.1/service/user.js", ["react-native@0.33/Libraries/react-native/react-native.js", "enjoy-rn-support@0.2/dist/index.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){	"use strict";		return [				function(__inner_require__, exports, module){			Object.defineProperty(exports, "__esModule", {				value: true			});						var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");						var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);						var _enjoyRnSupport = require("enjoy-rn-support@0.2/dist/index.js");						var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);						var Util = _enjoyRnSupport2.default.Util;			var document = _enjoyRnSupport2.default.document;						var __dom__ = _reactNative2.default.createElement;			var __class__ = Util.arrayClass;			var __util__ = Util.pageUtil(__project + "/service/user");						var __htmlIndex__ = Util.getHtmlIndex();			var __keyIndex__ = 0;			function __getKey__() {				return __htmlIndex__ + __keyIndex__++;			}						var Service = _enjoyRnSupport2.default.Service;			exports.default = {				UserInfo: Service({					url: "xxx",					params: ["userId"],					method: "GET",					cache: true,					dataTransform: function dataTransform(data) {						return {							id: data.userId,							name: data.userName,							sex: data.userSex,							old: data.userOld						};					},					mockData: function mockData(params) {						return new Promise(function (resolve, reject) {							setTimeout(function () {								resolve({									userId: params.userId || 123456,									userName: "张三",									userSex: "男",									userOld: 26								});							}, 2000);						});					}				})			};		}	];});loader.define("sss4@0.0.1/views/home/index.js", ["react-native@0.33/Libraries/react-native/react-native.js", "enjoy-rn-support@0.2/dist/index.js", "sss4@0.0.1/service/user.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){	"use strict";		return [				function(__inner_require__, exports, module){			Object.defineProperty(exports, "__esModule", {				value: true			});			exports.default = undefined;						var _class2, _temp;						var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");						var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);						var _enjoyRnSupport = require("enjoy-rn-support@0.2/dist/index.js");						var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);						var _index = __inner_require__(1 /*components/calendar/index.js*/);						var _index2 = babelHelpers.interopRequireDefault(_index);						var _user = require("sss4@0.0.1/service/user.js");						var _user2 = babelHelpers.interopRequireDefault(_user);						var Util = _enjoyRnSupport2.default.Util;			var document = _enjoyRnSupport2.default.document;						var __dom__ = _reactNative2.default.createElement;			var __class__ = Util.arrayClass;			var __util__ = Util.pageUtil(__project + "/views/home/index");						var __htmlIndex__ = Util.getHtmlIndex();			var __keyIndex__ = 0;			function __getKey__() {				return __htmlIndex__ + __keyIndex__++;			}						var _dec, _class;						var Component = _enjoyRnSupport2.default.Component;			var layers = _enjoyRnSupport2.default.layers;						var Home = (_dec = layers({				calendar: _index2.default			}), _dec(_class = (_temp = _class2 = function (_Component) {				babelHelpers.inherits(Home, _Component);							function Home(props) {					babelHelpers.classCallCheck(this, Home);								var _this = babelHelpers.possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));								_this.state = {						user: null,						date: ""					};								if (Home.__start_list__) {						Home.__start_list__.forEach(function (item) {							item.call(_this);						});					}					return _this;				}							babelHelpers.createClass(Home, [{					key: "componentWillMount",					value: function componentWillMount() {						babelHelpers.get(Home.prototype.__proto__ || Object.getPrototypeOf(Home.prototype), "componentWillMount", this).call(this);									this.loadUserInfo();					}				}, {					key: "componentDidMount",					value: function componentDidMount() {						var _this2 = this;									babelHelpers.get(Home.prototype.__proto__ || Object.getPrototypeOf(Home.prototype), "componentDidMount", this).call(this);									this.calendar.onReady(function () {							_this2.calendar.component.onSelect(function (date) {								_this2.setState({									date: date								});							});						});					}				}, {					key: "loadUserInfo",					value: function () {						var _ref = babelHelpers.asyncToGenerator(regeneratorRuntime.mark(function _callee() {							return regeneratorRuntime.wrap(function _callee$(_context) {								while (1) {									switch (_context.prev = _context.next) {										case 0:											_context.t0 = this;											_context.next = 3;											return _user2.default.UserInfo();													case 3:											_context.t1 = _context.sent;											_context.t2 = {												user: _context.t1											};														_context.t0.setState.call(_context.t0, _context.t2);													case 6:										case "end":											return _context.stop();									}								}							}, _callee, this);						}));									function loadUserInfo() {							return _ref.apply(this, arguments);						}									return loadUserInfo;					}()				}, {					key: "openCalendar",					value: function openCalendar() {						this.calendar.show();					}				}]);				return Home;			}(Component), _class2.View = __inner_require__(7 /*views/home/index-html.js*/).default, _class2.Styles = [__inner_require__(8 /*views/home/index-css.js*/).default], _class2.__start_list__ = [function () {				this._styles = Home.Styles;			}, function () {				this.view = Home.View.call(this);			}], _temp)) || _class);			exports.default = Home;		},				function(__inner_require__, exports, module){			Object.defineProperty(exports, "__esModule", {				value: true			});			exports.default = undefined;						var _class2, _temp;						var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");						var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);						var _enjoyRnSupport = require("enjoy-rn-support@0.2/dist/index.js");						var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);						var Util = _enjoyRnSupport2.default.Util;			var document = _enjoyRnSupport2.default.document;						var __dom__ = _reactNative2.default.createElement;			var __class__ = Util.arrayClass;			var __util__ = Util.pageUtil(__project + "/components/calendar/index");						var __htmlIndex__ = Util.getHtmlIndex();			var __keyIndex__ = 0;			function __getKey__() {				return __htmlIndex__ + __keyIndex__++;			}						var _dec, _class;						var Component = _enjoyRnSupport2.default.Component;			var events = _enjoyRnSupport2.default.events;						function doubel(num) {				return (num < 10 ? "0" : "") + num;			}						var Calendar = (_dec = events(["select", "async"]), _dec(_class = (_temp = _class2 = function (_Component) {				babelHelpers.inherits(Calendar, _Component);							function Calendar(props) {					babelHelpers.classCallCheck(this, Calendar);								var _this = babelHelpers.possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));								var dates = [];								var date = new Date();					for (var i = 0; i < 100; i++) {						dates.push({							date: [date.getFullYear(), doubel(date.getMonth() + 1), doubel(date.getDate())].join("-"),							weekday: "日一二三四五六"[date.getDay()]						});						date.setDate(date.getDate() + 1);					}								_this.state = {						dates: dates					};								if (Calendar.__start_list__) {						Calendar.__start_list__.forEach(function (item) {							item.call(_this);						});					}					return _this;				}							babelHelpers.createClass(Calendar, [{					key: "selectDate",					value: function selectDate(date) {						this.props.layer.hide();						this.fireSelect(date);					}				}]);				return Calendar;			}(Component), _class2.View = __inner_require__(2 /*components/calendar/index-html.js*/).default, _class2.Styles = [__inner_require__(6 /*components/calendar/index-css.js*/).default], _class2.__start_list__ = [function () {				this._styles = Calendar.Styles;			}, function () {				this.view = Calendar.View.call(this);			}], _temp)) || _class);			exports.default = Calendar;		},				function(__inner_require__, exports, module){			Object.defineProperty(exports, "__esModule", {				value: true			});			exports.default = View;						var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");						var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);						var _enjoyRnSupport = require("enjoy-rn-support@0.2/dist/index.js");						var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);						var _index = __inner_require__(3 /*components/calendar/item/index.js*/);						var _index2 = babelHelpers.interopRequireDefault(_index);						var Body = _enjoyRnSupport2.default.Body;			var Box = _enjoyRnSupport2.default.Box;			var A = _enjoyRnSupport2.default.A;			var ScrollView = _enjoyRnSupport2.default.ScrollView;			var Util = _enjoyRnSupport2.default.Util;			var document = _enjoyRnSupport2.default.document;						var __dom__ = _reactNative2.default.createElement;			var __class__ = Util.arrayClass;			var __util__ = Util.pageUtil(__project + "/components/calendar/index");						var __htmlIndex__ = Util.getHtmlIndex();			var __keyIndex__ = 0;			function __getKey__() {				return __htmlIndex__ + __keyIndex__++;			}						function View() {				var __view__ = {};							__view__.render = function (components) {					var _this = this;								return __dom__(Body, {						_component_id: this.props._id,						_styles: this._styles,						css: [".rn-body"],						_id: __getKey__()					}, __dom__(Box, {						css: [".rn-div", ".navbar"],						_id: __getKey__()					}, __dom__(Box, {						css: [".rn-div", ".navbar-title"],						_id: __getKey__()					}, "选择日期"), __dom__(Box, {						css: [".rn-div", ".navbar-right"],						_id: __getKey__()					}, __dom__(A, { onClick: function onClick() {							_this.props.layer.hide();						}, css: [".rn-a"],						_id: __getKey__()					}, "关闭"))), __dom__(ScrollView, {						css: [".rn-scroll-view", ".container"],						_id: __getKey__()					}, this.state.dates.map(function (date) {						return __dom__(_index2.default, { date: date, onSelect: _this.selectDate.bind(_this) });					})), components);				}.bind(this);							return __view__;			}		},				function(__inner_require__, exports, module){			Object.defineProperty(exports, "__esModule", {				value: true			});			exports.default = undefined;						var _class, _temp;						var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");						var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);						var _enjoyRnSupport = require("enjoy-rn-support@0.2/dist/index.js");						var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);						var Util = _enjoyRnSupport2.default.Util;			var document = _enjoyRnSupport2.default.document;						var __dom__ = _reactNative2.default.createElement;			var __class__ = Util.arrayClass;			var __util__ = Util.pageUtil(__project + "/components/calendar/item/index");						var __htmlIndex__ = Util.getHtmlIndex();			var __keyIndex__ = 0;			function __getKey__() {				return __htmlIndex__ + __keyIndex__++;			}						var Component = _enjoyRnSupport2.default.Component;						var Item = (_temp = _class = function (_Component) {				babelHelpers.inherits(Item, _Component);							function Item(props) {					babelHelpers.classCallCheck(this, Item);								var _this = babelHelpers.possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props));								if (Item.__start_list__) {						Item.__start_list__.forEach(function (item) {							item.call(_this);						});					}					return _this;				}							return Item;			}(Component), _class.View = __inner_require__(4 /*components/calendar/item/index-html.js*/).default, _class.Styles = [__inner_require__(5 /*components/calendar/item/index-css.js*/).default], _class.__start_list__ = [function () {				this._styles = Item.Styles;			}, function () {				this.view = Item.View.call(this);			}], _temp);			exports.default = Item;		},				function(__inner_require__, exports, module){			Object.defineProperty(exports, "__esModule", {				value: true			});			exports.default = View;						var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");						var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);						var _enjoyRnSupport = require("enjoy-rn-support@0.2/dist/index.js");						var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);						var A = _enjoyRnSupport2.default.A;			var Box = _enjoyRnSupport2.default.Box;			var Util = _enjoyRnSupport2.default.Util;			var document = _enjoyRnSupport2.default.document;						var __dom__ = _reactNative2.default.createElement;			var __class__ = Util.arrayClass;			var __util__ = Util.pageUtil(__project + "/components/calendar/item/index");						var __htmlIndex__ = Util.getHtmlIndex();			var __keyIndex__ = 0;			function __getKey__() {				return __htmlIndex__ + __keyIndex__++;			}						function View() {				var _this = this;							return {					render: function render(components) {						return __dom__(A, { onClick: function onClick() {								_this.props.onSelect(_this.props.date.date);							}, _component_id: _this.props._id,							_styles: _this._styles,							css: [".rn-a"],							_id: __getKey__()						}, _this.props.date.date, __dom__(Box, {							css: [".rn-span"],							_id: __getKey__()						}, "周", _this.props.date.weekday), components);					}				};			}		},				function(__inner_require__, exports, module){			Object.defineProperty(exports, "__esModule", {				value: true			});						var _enjoyRnSupport = require("enjoy-rn-support@0.2/dist/index.js");						var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);						var StyleSheet = _enjoyRnSupport2.default.StyleSheet;			exports.default = new StyleSheet({				rules: {					"0": {						height: "40px",						fontSize: "18px",						color: "#333",						backgroundColor: "#eee",						marginBottom: "2px",						display: "flex",						justifyContent: "center",						alignItems: "center",						borderRadius: "2px"					},					"1": {						marginBottom: "none"					},					"2": {						fontSize: "12px",						color: "#999",						marginLeft: "10px"					}				},				index: {					".rn-a": [{						key: "0"					}, {						selector: ".rn-a:last-child",						key: "1"					}],					".rn-span": [{						key: "2"					}]				}			});		},				function(__inner_require__, exports, module){			Object.defineProperty(exports, "__esModule", {				value: true			});						var _enjoyRnSupport = require("enjoy-rn-support@0.2/dist/index.js");						var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);						var StyleSheet = _enjoyRnSupport2.default.StyleSheet;			exports.default = new StyleSheet({				rules: {					"0": {						backgroundColor: "#fff"					},					"1": {						backgroundColor: "#f6f6f6",						borderBottomWidth: "1px",						borderStyle: "solid",						borderBottomColor: "#eee"					},					"2": {						padding: "10px"					}				},				index: {					".rn-body": [{						key: "0"					}],					".navbar": [{						key: "1"					}],					".container": [{						key: "2"					}]				}			});		},				function(__inner_require__, exports, module){			Object.defineProperty(exports, "__esModule", {				value: true			});			exports.default = View;						var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");						var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);						var _enjoyRnSupport = require("enjoy-rn-support@0.2/dist/index.js");						var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);						var Box = _enjoyRnSupport2.default.Box;			var A = _enjoyRnSupport2.default.A;			var Body = _enjoyRnSupport2.default.Body;			var Util = _enjoyRnSupport2.default.Util;			var document = _enjoyRnSupport2.default.document;						var __dom__ = _reactNative2.default.createElement;			var __class__ = Util.arrayClass;			var __util__ = Util.pageUtil(__project + "/views/home/index");						var __htmlIndex__ = Util.getHtmlIndex();			var __keyIndex__ = 0;			function __getKey__() {				return __htmlIndex__ + __keyIndex__++;			}						__util__.header({});						function View() {				var __view__ = {};				var a, b, c;				__view__.header = {					render: function () {						this.page.navbar.view({							url: this.page.url,							render: function (__nav_util__) {								return __dom__(Box, {									_styles: this._styles,									css: [".rn-head", ".navbar"],									_id: __getKey__()								}, __dom__(Box, {									css: [".rn-title", ".navbar-title"],									_id: __getKey__()								}, "首页"), __dom__(Box, {									css: [".rn-left", ".navbar-left"],									_id: __getKey__()								}, __dom__(A, { onClick: this.openCalendar.bind(this), css: [".rn-a"],									_id: __getKey__()								}, this.state.date || "日历")), __dom__(Box, {									css: [".rn-right", ".navbar-right"],									_id: __getKey__()								}, this.state.user ? __dom__(Box, {									css: [".rn-span", ".user"],									_id: __getKey__()								}, "你好", __dom__(A, { href: "/user-info?userId=" + this.state.user.id, css: [".rn-a"],									_id: __getKey__(),									_util: __util__,									_navigator: this.page								}, this.state.user.name)) : __dom__(Box, {									css: [".rn-span", ".logining"],									_id: __getKey__()								}, "登陆中...")));							}.bind(this)						});						a = this._styles;						b = this.state.date;						c = this.state.user ? __dom__(Box, {							css: [".rn-span", ".user"],							_id: __getKey__()						}, "你好", __dom__(A, { href: "/user-info?userId=" + this.state.user.id, css: [".rn-a"],							_id: __getKey__(),							_util: __util__,							_navigator: this.page						}, this.state.user.name)) : __dom__(Box, {							css: [".rn-span", ".logining"],							_id: __getKey__()						}, "登陆中...");					}.bind(this),					check: function () {						return (this.state.user ? __dom__(Box, {							css: [".rn-span", ".user"],							_id: __getKey__()						}, "你好", __dom__(A, { href: "/user-info?userId=" + this.state.user.id, css: [".rn-a"],							_id: __getKey__(),							_util: __util__,							_navigator: this.page						}, this.state.user.name)) : __dom__(Box, {							css: [".rn-span", ".logining"],							_id: __getKey__()						}, "登陆中...")) !== c || this.state.date !== b || this._styles !== a;					}.bind(this)				};							__view__.render = function (components) {					return __dom__(Body, {						_component_id: this.props._id,						_styles: this._styles,						css: [".rn-body"],						_id: __getKey__()					}, __dom__(Box, {						css: [".rn-p"],						_id: __getKey__()					}, "Hello Enjoy!"), components);				}.bind(this);							return __view__;			}		},				function(__inner_require__, exports, module){			Object.defineProperty(exports, "__esModule", {				value: true			});						var _enjoyRnSupport = require("enjoy-rn-support@0.2/dist/index.js");						var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);						var StyleSheet = _enjoyRnSupport2.default.StyleSheet;			exports.default = new StyleSheet({				rules: {					"0": {						justifyContent: "center",						alignItems: "center",						backgroundColor: "#fcfcfc"					},					"1": {						backgroundColor: "#f6f6f6",						borderBottomWidth: "1px",						borderStyle: "solid",						borderBottomColor: "#eee"					},					"2": {						color: "#666"					},					"3": {						color: "#38f"					},					"4": {						color: "#999"					},					"5": {						fontSize: "60px",						fontWeight: "100",						color: "#aaa",						textAlign: "center"					}				},				index: {					".rn-body": [{						key: "0"					}],					".navbar": [{						key: "1"					}],					".user": [{						key: "2"					}],					".rn-a": [{						selector: ".user .rn-a",						key: "3"					}],					".logining": [{						key: "4"					}],					".rn-p": [{						key: "5"					}]				}			});		}	];});loader.define("sss4@0.0.1/views/user-info/index.js", ["react-native@0.33/Libraries/react-native/react-native.js", "enjoy-rn-support@0.2/dist/index.js", "sss4@0.0.1/service/user.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){	"use strict";		return [				function(__inner_require__, exports, module){			Object.defineProperty(exports, "__esModule", {				value: true			});			exports.default = undefined;						var _class, _temp;						var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");						var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);						var _enjoyRnSupport = require("enjoy-rn-support@0.2/dist/index.js");						var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);						var _user = require("sss4@0.0.1/service/user.js");						var _user2 = babelHelpers.interopRequireDefault(_user);						var Util = _enjoyRnSupport2.default.Util;			var document = _enjoyRnSupport2.default.document;						var __dom__ = _reactNative2.default.createElement;			var __class__ = Util.arrayClass;			var __util__ = Util.pageUtil(__project + "/views/user-info/index");						var __htmlIndex__ = Util.getHtmlIndex();			var __keyIndex__ = 0;			function __getKey__() {				return __htmlIndex__ + __keyIndex__++;			}						var Component = _enjoyRnSupport2.default.Component;						var UserInfo = (_temp = _class = function (_Component) {				babelHelpers.inherits(UserInfo, _Component);							function UserInfo(props) {					babelHelpers.classCallCheck(this, UserInfo);								var _this = babelHelpers.possibleConstructorReturn(this, (UserInfo.__proto__ || Object.getPrototypeOf(UserInfo)).call(this, props));								_this.state = {						user: null					};								if (UserInfo.__start_list__) {						UserInfo.__start_list__.forEach(function (item) {							item.call(_this);						});					}					return _this;				}							babelHelpers.createClass(UserInfo, [{					key: "componentWillMount",					value: function componentWillMount() {						babelHelpers.get(UserInfo.prototype.__proto__ || Object.getPrototypeOf(UserInfo.prototype), "componentWillMount", this).call(this);									this.loadUserInfo();					}				}, {					key: "loadUserInfo",					value: function () {						var _ref = babelHelpers.asyncToGenerator(regeneratorRuntime.mark(function _callee() {							return regeneratorRuntime.wrap(function _callee$(_context) {								while (1) {									switch (_context.prev = _context.next) {										case 0:											_context.t0 = this;											_context.next = 3;											return _user2.default.UserInfo(this.props.userId);													case 3:											_context.t1 = _context.sent;											_context.t2 = {												user: _context.t1											};														_context.t0.setState.call(_context.t0, _context.t2);													case 6:										case "end":											return _context.stop();									}								}							}, _callee, this);						}));									function loadUserInfo() {							return _ref.apply(this, arguments);						}									return loadUserInfo;					}()				}]);				return UserInfo;			}(Component), _class.View = __inner_require__(1 /*views/user-info/index-html.js*/).default, _class.Styles = [__inner_require__(2 /*views/user-info/index-css.js*/).default], _class.__start_list__ = [function () {				this._styles = UserInfo.Styles;			}, function () {				this.view = UserInfo.View.call(this);			}], _temp);			exports.default = UserInfo;		},				function(__inner_require__, exports, module){			Object.defineProperty(exports, "__esModule", {				value: true			});			exports.default = View;						var _reactNative = require("react-native@0.33/Libraries/react-native/react-native.js");						var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);						var _enjoyRnSupport = require("enjoy-rn-support@0.2/dist/index.js");						var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);						var Box = _enjoyRnSupport2.default.Box;			var Body = _enjoyRnSupport2.default.Body;			var Util = _enjoyRnSupport2.default.Util;			var document = _enjoyRnSupport2.default.document;						var __dom__ = _reactNative2.default.createElement;			var __class__ = Util.arrayClass;			var __util__ = Util.pageUtil(__project + "/views/user-info/index");						var __htmlIndex__ = Util.getHtmlIndex();			var __keyIndex__ = 0;			function __getKey__() {				return __htmlIndex__ + __keyIndex__++;			}						__util__.header({});						function View() {				var __view__ = {};				var a;				__view__.header = {					render: function () {						this.page.navbar.view({							url: this.page.url,							render: function (__nav_util__) {								return __dom__(Box, {									_styles: this._styles,									css: [".rn-head", ".navbar"],									_id: __getKey__()								}, __dom__(Box, {									css: [".rn-title", ".navbar-title"],									_id: __getKey__()								}, "用户信息"), __dom__(Box, {									css: [".rn-left", ".navbar-left"],									_id: __getKey__()								}, __nav_util__.canBack ? __dom__(Box, {									css: [".rn-back"],									_id: __getKey__(),									onClick: function onClick() {										__nav_util__.back();									}								}, "返回") : null));							}.bind(this)						});						a = this._styles;					}.bind(this),					check: function () {						return this._styles !== a;					}.bind(this)				};							__view__.render = function (components) {					return __dom__(Body, {						_component_id: this.props._id,						_styles: this._styles,						css: [".rn-body"],						_id: __getKey__()					}, this.state.user ? __dom__(Box, {						css: [".rn-ul", ".user-info"],						_id: __getKey__()					}, __dom__(Box, {						css: [".rn-li"],						_id: __getKey__()					}, "ID：", this.state.user.id), __dom__(Box, {						css: [".rn-li"],						_id: __getKey__()					}, "姓名：", this.state.user.name), __dom__(Box, {						css: [".rn-li"],						_id: __getKey__()					}, "性别：", this.state.user.sex), __dom__(Box, {						css: [".rn-li"],						_id: __getKey__()					}, "年龄：", this.state.user.old)) : __dom__(Box, {						css: [".rn-p", ".loading"],						_id: __getKey__()					}, "加载中..."), components);				}.bind(this);							return __view__;			}		},				function(__inner_require__, exports, module){			Object.defineProperty(exports, "__esModule", {				value: true			});						var _enjoyRnSupport = require("enjoy-rn-support@0.2/dist/index.js");						var _enjoyRnSupport2 = babelHelpers.interopRequireDefault(_enjoyRnSupport);						var StyleSheet = _enjoyRnSupport2.default.StyleSheet;			exports.default = new StyleSheet({				rules: {					"0": {						justifyContent: "center",						alignItems: "center"					},					"1": {						backgroundColor: "#f6f6f6",						borderBottomWidth: "1px",						borderStyle: "solid",						borderBottomColor: "#eee"					},					"2": {						fontSize: "16px",						color: "#ccc"					}				},				index: {					".rn-body": [{						key: "0"					}],					".navbar": [{						key: "1"					}],					".loading": [{						key: "2"					}]				}			});		}	];});loader.require("sss4@0.0.1/index.js");loader.require("react-native@0.33/Libraries/react-native/react-native.js").AppRegistry.runApplication("sss4", { rootTag: 1, initialProps: {} });';