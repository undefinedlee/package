// base-package@1/views/detail/index.js
loader.define("base-package@1/8", function(require, __filename, __dirname, __base){
	"use strict";
	
	return [
		// views/detail/index.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			var _createClass = ES6SyntaxPolyfill._createClass;
			
			var _detail = __inner_require__(1 /*service/detail.js*/);
			
			var _detail2 = _interopRequireDefault(_detail);
			
			var _index = require("base-package@1/components/calendar/index.js");
			
			var _index2 = _interopRequireDefault(_index);
			
			require("babel-polyfill@6/lib/index.js");
			
			var _interopRequireDefault = ES6SyntaxPolyfill._interopRequireDefault;
			var _classCallCheck = ES6SyntaxPolyfill._classCallCheck;
			var _possibleConstructorReturn = ES6SyntaxPolyfill._possibleConstructorReturn;
			var _inherits = ES6SyntaxPolyfill._inherits;
			
			var Detail = function (_DetailService) {
				_inherits(Detail, _DetailService);
			
				function Detail() {
					_classCallCheck(this, Detail);
			
					var _this = _possibleConstructorReturn(this, (Detail.__proto__ || Object.getPrototypeOf(Detail)).call(this));
			
					_this.b = 1;
			
					_this.items = Array.from(3);
					return _this;
				}
			
				_createClass(Detail, [{
					key: "a",
					value: function a() {
						this.b = 2;
					}
				}]);
			
				return Detail;
			}(_detail2.default);
			
			exports.default = Detail;
		},
		// service/detail.js
		function(__inner_require__, exports, module){
			module.exports = "detail-service";
		}
	];
});