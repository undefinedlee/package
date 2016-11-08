import fs from "fs";
import path from "path";
const babel = require("babel-core");

const root = path.join(__dirname, "sss3");
const output = path.join(root, "enjoy.js");
const pres = [
	path.join(__dirname, "polyfills", "prelude.js"),
	path.join(__dirname, "polyfills", "Array.es6.js"),
	path.join(__dirname, "polyfills", "Array.prototype.es6.js"),
	path.join(__dirname, "polyfills", "babelHelpers.js"),
	path.join(__dirname, "polyfills", "console.js"),
	path.join(__dirname, "polyfills", "error-guard.js"),
	path.join(__dirname, "polyfills", "Object.es7.js"),
	path.join(__dirname, "polyfills", "polyfills.js"),
	path.join(__dirname, "polyfills", "require.js"),
	path.join(__dirname, "polyfills", "String.prototype.es6.js"),
	path.join(__dirname, "polyfills", "NativeModules.js")
];
const entries = [
	path.join(root, "react-native@0.21/Libraries/react-native/react-native.js"),
	path.join(root, "react-native@0.21/Libraries/JavaScriptAppEngine/Initialization/InitializeJavaScriptAppEngine.js"),
	path.join(root, "react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js"),
	path.join(root, "enjoy-rn-support@0.2/dist/index.js")
];
const initCode = `
loader.require("react-native@0.21/Libraries/JavaScriptAppEngine/Initialization/InitializeJavaScriptAppEngine.js");

__fbBatchedBridge.registerCallableModule("NativeMessage", NativeMessage);
`;

var codes = {};

entries.forEach(function(entry){
	(function read(file){
		var code = fs.readFileSync(file).toString("utf8");
		var id,
			deps;
		babel.transform(code, {
			compact: false,
			plugins: [
				function ({ types: t }) {
					return {
						visitor: {
							CallExpression: {
								enter(path){
									let node = path.node;
									// 匹配require(string)
									if(node.callee.type === "MemberExpression" &&
										node.callee.object.type === "Identifier" &&
										node.callee.object.name === "loader" &&
										node.callee.property.type === "Identifier" &&
										node.callee.property.name === "define" &&
										node.arguments.length === 3 &&
										node.arguments[0].type === "StringLiteral" &&
										node.arguments[1].type === "ArrayExpression"){
											id = node.arguments[0].value;
											deps = node.arguments[1].elements.map(function(item){
												return item.value;
											});
									}
								}
							}
						}
					};
				}
			]
		});

		if(id && deps){
			codes[id] = code;
			deps.forEach(function(id){
				if(!codes[id]){
					read(path.join(root, id));
				}
			});
		}else{
			throw "打包的文件格式不对";
		}
	})(entry);
});

codes = Object.keys(codes).map(id => codes[id]).join("\n");
var preCode = pres
				.map(function(file){
					var code = fs.readFileSync(file).toString("utf8");
					return `(function(global) {
							${code}
						})(typeof global !== 'undefined' ? global: typeof self !== 'undefined' ? self: this);`;
				}).join("\n");
fs.writeFileSync(output, [preCode, codes, initCode].join("\n"));
