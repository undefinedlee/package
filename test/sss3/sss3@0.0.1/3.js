// sss3@0.0.1/build/components/calendar/index.js
loader.define("sss3@0.0.1", "build/components/calendar/index.js", "3", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// build/components/calendar/index.js
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
			var __util__ = Util.pageUtil("sss3/build/components/calendar/index");
			
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
			}(Component), _class2.View = require("sss3@0.0.1/build/components/calendar/index-html.js").default, _class2.Styles = [require("sss3@0.0.1/build/components/calendar/index-css.js").default], _class2.__start_list__ = [function () {
				this._styles = Calendar.Styles;
			}, function () {
				this.view = Calendar.View.call(this);
			}], _temp)) || _class);
			exports.default = Calendar;
		}
	];
});