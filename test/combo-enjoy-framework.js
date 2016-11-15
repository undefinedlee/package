import fs from "fs";
import path from "path";
const babel = require("babel-core");
import uglify from "uglify-js";

const root = path.join(__dirname, "sss7");
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
	path.join(root, "react-native@0.37/Libraries/react-native/react-native.js"),
	// path.join(root, "react-native@0.37/Libraries/JavaScriptAppEngine/Initialization/InitializeJavaScriptAppEngine.js"),
	path.join(root, "react-native@0.37/Libraries/Core/InitializeCore.js"),
	// path.join(root, "react-native@0.37/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js"),
	path.join(root, "react-native@0.37/Libraries/BatchedBridge/NativeModules.js"),
	path.join(root, "enjoy-rn-support@0.2/index.js")
];
const initCode = `
// loader.require("react-native@0.37/Libraries/JavaScriptAppEngine/Initialization/InitializeJavaScriptAppEngine.js");
loader.require("react-native@0.37/Libraries/Core/InitializeCore.js");
__loadNativeModules(loader.require("NativeModules"));
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
									if(node.callee.type === "Identifier" &&
										node.callee.name === "__d" &&
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
					code = babel.transform(code, {
						compact: false,
						env: "production",
						presets: ['es2015', 'stage-0'],
						plugins: [
							function ({ types: t }) {
								return {
									visitor: {
										// 删除生成文件头部的"use strict"
										Directive: {
											enter(path){
												if(path.node.value.value === "use strict"){
													path.remove();
												}
											}
										}
									}
								};
							}
						]
					}).code;
					code = `(function(global) {
							${code}
						})(typeof global !== 'undefined' ? global: typeof self !== 'undefined' ? self: this);`;
					return code;
				}).join("\n");

var code = [preCode, codes, initCode].join("\n");

// 框架打包文件需要对外暴露的模块
var exports = [
	"react-native@0.37/Libraries/react-native/react-native.js",
	"NativeModules",
	"react@15.3/react.js",
	"enjoy-rn-support@0.2/index.js"
];
var modIndex = [];
code = babel.transform(code, {
	compact: false,
	plugins: [function({types: t}){
		return {
			visitor: {
				// 移除__DEV__判断分支
				IfStatement: {
					enter(path){
						let node = path.node;
						if(node.test.type === "Identifier" &&
							node.test.name === "__DEV__"){
							if(node.alternate){
								path.replaceWith(node.alternate);
							}else{
								path.remove();
							}
						}else if(node.test.type === "UnaryExpression" &&
							node.test.operator === "!" &&
							node.test.argument.type === "Identifier" &&
							node.test.argument.name === "__DEV__"){
							path.replaceWith(node.consequent);
						}
					}
				},
				// 移除__DEV__判断三元运算
				ConditionalExpression: {
					enter(path){
						let node = path.node;
						if(node.test.type === "Identifier" &&
							node.test.name === "__DEV__"){
							if(node.alternate){
								path.replaceWith(node.alternate);
							}else{
								path.remove();
							}
						}
					}
				},
				// 压缩非对外暴露模块的模块ID
				CallExpression(path){
					let node = path.node;
					if((node.callee.type === "Identifier" &&
						(node.callee.name === "__d" || node.callee.name === "require")) &&
						node.arguments[0].type === "StringLiteral" &&
						/^[a-zA-Z0-9\-]+@/.test(node.arguments[0].value)){
						// 转换__d("xxx", require("xxx"模块ID
						let modId = node.arguments[0].value;
						if(exports.indexOf(modId) === -1){
							let index = modIndex.indexOf(modId);
							if(index === -1){
								node.arguments[0] = t.NumericLiteral(modIndex.push(modId) - 1);
							}else{
								node.arguments[0] = t.NumericLiteral(index);
							}
						}
						// 删除模块的deps
						if(node.arguments[1] && node.arguments[1].type === "ArrayExpression"){
							node.arguments.splice(1,1);
							// node.arguments[1].elements = node.arguments[1].elements.map(function(element){
							// 	if(element.type === "StringLiteral"){
							// 		let modId = element.value;
							// 		if(exports.indexOf(modId) === -1){
							// 			let index = modIndex.indexOf(modId);
							// 			if(index === -1){
							// 				return t.NumericLiteral(modIndex.push(modId) - 1);
							// 			}else{
							// 				return t.NumericLiteral(index);
							// 			}
							// 		}else{
							// 			return element;
							// 		}
							// 	}else{
							// 		return element;
							// 	}
							// });
						}
					}
				}
			}
		};
	}]
}).code;

// 压缩js
code = uglify.minify(code, {
	fromString: true
}).code;

fs.writeFileSync(output, code);
