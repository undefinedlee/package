// sss3@0.0.1/build/views/user-info/index-css.js
loader.define("sss3@0.0.1", "build/views/user-info/index-css.js", "8", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// build/views/user-info/index-css.js
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