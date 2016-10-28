const babel = require("babel-core");

export default function(content){
	return babel.transform(content, {
		compact: false,
		env: "production",
		presets: ['es2015', 'stage-0'],
		plugins: [
			require("babel-plugin-external-helpers"),
			function ({ types: t }) {
				return {
					visitor: {
						VariableDeclarator: {
							enter(path){
								let node = path.node;
								if(node.id.type === "Identifier" &&
									["_createClass", "_get"].indexOf(node.id.name) !== -1 &&
									(node.init.type === "CallExpression" &&
									node.init.callee.type === "FunctionExpression" ||
									node.init.type === "FunctionExpression")){
									node.init = t.memberExpression(
													t.identifier("ES6SyntaxPolyfill"),
													node.id
												);
								}
							}
						},
						FunctionDeclaration: {
							enter(path){
								let node = path.node;
								if(node.id &&
									node.id.type === "Identifier" &&
									["_classCallCheck", "_inherits", "_possibleConstructorReturn", "_interopRequireDefault", "_asyncToGenerator"].indexOf(node.id.name) !== -1){
									let newNode = t.VariableDeclaration(
											"var",
											[
												t.VariableDeclarator(
													node.id,
													t.memberExpression(
														t.identifier("ES6SyntaxPolyfill"),
														node.id
													)
												)
											]
										);
								
									let parentPath = path.parentPath;

									if(parentPath && parentPath.node && (parentPath.node.body instanceof Array)){
										parentPath.node.body.unshift(newNode);
										path.remove();
									}else{
										path.replaceWith(newNode);
									}
								}
							}
						}
					}
				};
			}
		]
	}).code;
};