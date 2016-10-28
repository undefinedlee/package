// base-package@1/views/detail/index.js
loader.define("base-package@1", "views/detail/index.js", "1", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// views/detail/index.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			
			var _detail = __inner_require__(1 /*service/detail.js*/);
			
			var _detail2 = babelHelpers.interopRequireDefault(_detail);
			
			var _index = require("base-package@1/components/calendar/index.js");
			
			var _index2 = babelHelpers.interopRequireDefault(_index);
			
			require("babel-polyfill@6/lib/index.js");
			
			var Detail = function (_DetailService) {
				babelHelpers.inherits(Detail, _DetailService);
			
				function Detail() {
					babelHelpers.classCallCheck(this, Detail);
			
					var _this = babelHelpers.possibleConstructorReturn(this, (Detail.__proto__ || Object.getPrototypeOf(Detail)).call(this));
			
					_this.b = 1;
			
					_this.items = Array.from(3);
					return _this;
				}
			
				babelHelpers.createClass(Detail, [{
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