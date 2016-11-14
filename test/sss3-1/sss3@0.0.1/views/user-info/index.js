loader.define("sss3@0.0.1/views/user-info/index.js", ["react-native@0.21/Libraries/react-native/react-native.js", "enjoy-rn-support@0.2/dist/index.js", "sss3@0.0.1/service/user.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// views/user-info/index.js
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
			
			var _user = require("sss3@0.0.1/service/user.js");
			
			var _user2 = babelHelpers.interopRequireDefault(_user);
			
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil(__project + "/views/user-info/index");
			
			var __htmlIndex__ = Util.getHtmlIndex();
			var __keyIndex__ = 0;
			function __getKey__() {
				return __htmlIndex__ + __keyIndex__++;
			}
			
			var Component = _enjoyRnSupport2.default.Component;
			
			var UserInfo = (_temp = _class = function (_Component) {
				babelHelpers.inherits(UserInfo, _Component);
			
				function UserInfo(props) {
					babelHelpers.classCallCheck(this, UserInfo);
			
					var _this = babelHelpers.possibleConstructorReturn(this, (UserInfo.__proto__ || Object.getPrototypeOf(UserInfo)).call(this, props));
			
					_this.state = {
						user: null
					};
			
					if (UserInfo.__start_list__) {
						UserInfo.__start_list__.forEach(function (item) {
							item.call(_this);
						});
					}
					return _this;
				}
			
				babelHelpers.createClass(UserInfo, [{
					key: "componentWillMount",
					value: function componentWillMount() {
						babelHelpers.get(UserInfo.prototype.__proto__ || Object.getPrototypeOf(UserInfo.prototype), "componentWillMount", this).call(this);
			
						this.loadUserInfo();
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
											return _user2.default.UserInfo(this.props.userId);
			
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
				}]);
				return UserInfo;
			}(Component), _class.View = __inner_require__(1 /*views/user-info/index-html.js*/).default, _class.Styles = [__inner_require__(2 /*views/user-info/index-css.js*/).default], _class.__start_list__ = [function () {
				this._styles = UserInfo.Styles;
			}, function () {
				this.view = UserInfo.View.call(this);
			}], _temp);
			exports.default = UserInfo;
		},		// views/user-info/index-html.js
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
			var Body = _enjoyRnSupport2.default.Body;
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil(__project + "/views/user-info/index");
			
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
								return __dom__(Box, {
									_styles: this._styles,
									css: [".rn-head", ".navbar"],
									_id: __getKey__()
								}, __dom__(Box, {
									css: [".rn-title", ".navbar-title"],
									_id: __getKey__()
								}, "用户信息"), __dom__(Box, {
									css: [".rn-left", ".navbar-left"],
									_id: __getKey__()
								}, __nav_util__.canBack ? __dom__(Box, {
									css: [".rn-back"],
									_id: __getKey__(),
									onClick: function onClick() {
										__nav_util__.back();
									}
								}, "返回") : null));
							}.bind(this)
						});
						a = this._styles;
					}.bind(this),
					check: function () {
						return this._styles !== a;
					}.bind(this)
				};
			
				__view__.render = function (components) {
					return __dom__(Body, {
						_component_id: this.props._id,
						_styles: this._styles,
						css: [".rn-body"],
						_id: __getKey__()
					}, this.state.user ? __dom__(Box, {
						css: [".rn-ul", ".user-info"],
						_id: __getKey__()
					}, __dom__(Box, {
						css: [".rn-li"],
						_id: __getKey__()
					}, "ID：", this.state.user.id), __dom__(Box, {
						css: [".rn-li"],
						_id: __getKey__()
					}, "姓名：", this.state.user.name), __dom__(Box, {
						css: [".rn-li"],
						_id: __getKey__()
					}, "性别：", this.state.user.sex), __dom__(Box, {
						css: [".rn-li"],
						_id: __getKey__()
					}, "年龄：", this.state.user.old)) : __dom__(Box, {
						css: [".rn-p", ".loading"],
						_id: __getKey__()
					}, "加载中..."), components);
				}.bind(this);
			
				return __view__;
			}
		},		// views/user-info/index-css.js
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
						alignItems: "center"
					},
					"1": {
						backgroundColor: "#f6f6f6",
						borderBottomWidth: "1px",
						borderStyle: "solid",
						borderBottomColor: "#eee"
					},
					"2": {
						fontSize: "16px",
						color: "#ccc"
					}
				},
				index: {
					".rn-body": [{
						key: "0"
					}],
					".navbar": [{
						key: "1"
					}],
					".loading": [{
						key: "2"
					}]
				}
			});
		}
	];
});