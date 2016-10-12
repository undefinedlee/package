const babel = require("babel-core");
import console from "./console";

// 查找代码里的所有依赖
function findDeps(content){
	var deps = [];

	try{
		// 提取依赖
		babel.transform(content, {
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
										node.callee.name === "require" &&
										node.arguments[0] &&
										node.arguments[0].type === "StringLiteral"){
											deps.push(node.arguments[0].value);
									}
								}
							}
						}
					};
				}
			]
		});
	}catch(e){
		console.error("find deps error");
		console.log(e);
	}

	return deps;
};

// 转换代码里的依赖地址
findDeps.transDeps = function(content, transFn){
	try{
		content = babel.transform(content, {
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
										node.callee.name === "require" &&
										node.arguments[0] &&
										node.arguments[0].type === "StringLiteral"){
											let modInfo = transFn(node.arguments[0].value);

											if(modInfo instanceof Array){
												path.node = t.NullLiteral();
											}else{
												if(typeof modInfo.modId === "number"){
													node.arguments[0] = t.NumericLiteral(modInfo.modId);
												}else if(typeof modInfo.modId === "string"){
													node.arguments[0].value = modInfo.modId;
												}

												if(modInfo.requireName){
													node.callee.name = modInfo.requireName;
												}

												if(modInfo.modIdComments){
													//console.log(t);
													node.arguments[0].trailingComments = [
														t.StringLiteral(modInfo.modIdComments)
													];
												}
											}
									}
								}
							},
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
		});
	}catch(e){
		console.error("trans deps error");
		console.log(e);
	}

	return content.code;
};

export default findDeps;