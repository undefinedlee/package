// sss3@0.0.1/build/views/user-info/index.js
loader.define("sss3@0.0.1", "build/views/user-info/index.js", "2", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// build/views/user-info/index.js
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
			
			var _user = require("sss3@0.0.1/build/service/user.js");
			
			var _user2 = babelHelpers.interopRequireDefault(_user);
			
			var Util = _enjoyRnSupport2.default.Util;
			var document = _enjoyRnSupport2.default.document;
			
			var __dom__ = _reactNative2.default.createElement;
			var __class__ = Util.arrayClass;
			var __util__ = Util.pageUtil("sss3/build/views/user-info/index");
			
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
			}(Component), _class.View = require("sss3@0.0.1/build/views/user-info/index-html.js").default, _class.Styles = [require("sss3@0.0.1/build/views/user-info/index-css.js").default], _class.__start_list__ = [function () {
				this._styles = UserInfo.Styles;
			}, function () {
				this.view = UserInfo.View.call(this);
			}], _temp);
			exports.default = UserInfo;
		}
	];
});