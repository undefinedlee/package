const babel = require("babel-core");

export default function(content){
	var result = babel.transform(content, {
		plugins: [
			function ({ types: t }) {
				return {
					visitor: {
						// 处理Image标签对图片的引用
						CallExpression: {
							enter(path){
								let node = path.node;
							}
						}
					}
				};
			}
		]
	});

	return result.code;
}