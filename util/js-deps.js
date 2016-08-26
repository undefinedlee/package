const babel = require("babel-core");

// 查找代码里的所有依赖
function findDeps(content){
	var deps = [];

	// 提取依赖
	babel.transform(content, {
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

	return deps;
};

// 转换代码里的依赖地址
findDeps.transDeps = function(content, transFn){
	content = babel.transform(content, {
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

										node.arguments[0].value = modInfo.modId;

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

	return content.code;
};

export default findDeps;