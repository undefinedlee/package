const babel = require("babel-core");

export default function(content){
	const elementFactory = this.params.elementFactory || "__dom__";
	
	return content;
	// var result = babel.transform(content, {
	// 	plugins: [
	// 		function ({ types: t }) {
	// 			return {
	// 				visitor: {
	// 					// 处理Image标签对图片的引用
	// 					CallExpression: {
	// 						enter(path){
	// 							let node = path.node;
	// 							if(node.callee.type === "Identifier" &&
	// 								node.callee.name === "__dom__" &&
	// 								node.arguments[0] &&
	// 								node.arguments[0].type === "Identifier" &&
	// 								node.arguments[0].name === "Image"){
	// 								let properties = node.arguments[1].properties;

	// 								let srcProperty = properties.find(property => {
	// 									return property.key.name === "src";
	// 								});

	// 								if(srcProperty && srcProperty.value.type === "StringLiteral"){
	// 								}
	// 							}
	// 						}
	// 					}
	// 				}
	// 			};
	// 		}
	// 	]
	// });

	// return result.code;
}