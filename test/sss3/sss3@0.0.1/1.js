// sss3@0.0.1/build/views/home/index.js
loader.define("sss3@0.0.1", "build/views/home/index.js", "1", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// build/views/home/index.js
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
			
			var _index = require("sss3@0.0.1/build/components/calendar/index.js");
			
			var _index2 = babelHelpers.interopRequireDefault(_index);
			
			var _user = require("sss3@0.0.1/build/service/user.js");
			
			var _user2 = babelHelpers.interopRequireDefault(_user);
			
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil("sss3/build/views/home/index");
			
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
						date: ""
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
			}(Component), _class2.View = require("sss3@0.0.1/build/views/home/index-html.js").default, _class2.Styles = [require("sss3@0.0.1/build/views/home/index-css.js").default], _class2.__start_list__ = [function () {
				this._styles = Home.Styles;
			}, function () {
				this.view = Home.View.call(this);
			}], _temp)) || _class);
			exports.default = Home;
		}
	];
});