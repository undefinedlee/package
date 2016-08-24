const babel = require("babel-core");

export default function(content){
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
										deps.push(url.value);
								}
							}
						}
					}
				};
			}
		]
	});
};