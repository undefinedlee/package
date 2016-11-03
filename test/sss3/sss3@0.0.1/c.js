// sss3@0.0.1/build/components/calendar/item/index-css.js
loader.define("sss3@0.0.1", "build/components/calendar/item/index-css.js", "c", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// build/components/calendar/item/index-css.js
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
						height: "40px",
						fontSize: "18px",
						color: "#333",
						backgroundColor: "#eee",
						marginBottom: "2px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						borderRadius: "2px"
					},
					"1": {
						marginBottom: "none"
					},
					"2": {
						fontSize: "12px",
						color: "#999",
						marginLeft: "10px"
					}
				},
				index: {
					".rn-a": [{
						key: "0"
					}, {
						selector: ".rn-a:last-child",
						key: "1"
					}],
					".rn-span": [{
						key: "2"
					}]
				}
			});
		}
	];
});