// sss3@0.0.1/build/views/home/index-css.js
loader.define("sss3@0.0.1", "build/views/home/index-css.js", "6", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// build/views/home/index-css.js
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
					}]
				}
			});
		}
	];
});