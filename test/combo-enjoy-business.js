import fs from "fs";
import path from "path";
const babel = require("babel-core");
import glob from "glob";

const root = path.join(__dirname, "sss3");
const output = path.join(root, "business.js");
const initCode = `
loader.require("sss3@0.0.1/index.js");
loader.require("react-native@0.21/Libraries/react-native/react-native.js").AppRegistry.runApplication("sss3", { rootTag: 1, initialProps: {} });
`;

const businessRoot = path.join(root, "sss3@0.0.1");
const entries = glob.sync("**/*.js", {
	cwd: businessRoot
}).map(function(file){
	return path.join(businessRoot, file);
});

const ignores = [
	"react-native@0.21/Libraries/react-native/react-native.js",
	"enjoy-rn-support@0.2/dist/index.js"
];

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
				if(!codes[id] && ignores.indexOf(id) === -1){
					read(path.join(root, id));
				}
			});
		}else{
			console.error(`${file}打包的文件格式不对`);
		}
	})(entry);
});

codes = Object.keys(codes).map(id => codes[id]).join("\n");

// fs.writeFileSync(output, "caches['business.js']='" + [codes, initCode].join("\n").replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\/(?:\\\/|[^/\r\n])+\/(?=[^\/])|\/\/.*/g, function(match){
// 	if(/^\/\//.test(match)){
// 		return "";
// 	}
// 	return match;
// }).replace(/\n/g, "") + "';");

fs.writeFileSync(output, [codes, initCode].join("\n"));
