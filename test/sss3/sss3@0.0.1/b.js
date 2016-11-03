// sss3@0.0.1/build/components/calendar/item/index.js
loader.define("sss3@0.0.1", "build/components/calendar/item/index.js", "b", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// build/components/calendar/item/index.js
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
			var __util__ = Util.pageUtil("sss3/build/components/calendar/item/index");
			
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
			}(Component), _class.View = require("sss3@0.0.1/build/components/calendar/item/index-html.js").default, _class.Styles = [require("sss3@0.0.1/build/components/calendar/item/index-css.js").default], _class.__start_list__ = [function () {
				this._styles = Item.Styles;
			}, function () {
				this.view = Item.View.call(this);
			}], _temp);
			exports.default = Item;
		}
	];
});