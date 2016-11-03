import fs from "fs";
import path from "path";

const root = path.join(__dirname, "sss3");
const output = path.join(root, "combo.js");
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
	path.join(__dirname, "polyfills", "String.prototype.es6.js")
];

fs.readdir(root, function(err, dirs){
	var preCode = pres
					.map(function(file){
						var code = fs.readFileSync(file).toString("utf8");
						return `(function(global) {
								${code}
							})(typeof global !== 'undefined' ? global: typeof self !== 'undefined' ? self: this);`;
					}).join("\n");
	var code = dirs
					.map(dir => path.join(root, dir))
					.filter(function(dir){
						return fs.statSync(dir).isDirectory();
					})
					.map(function(dir){
						var versionFile = path.join(dir, "version.json");
						if(fs.existsSync(versionFile)){
							let version = JSON.parse(fs.readFileSync(versionFile).toString("utf8"));
							versionFile = path.join(dir, version["version.json"]);
							if(fs.existsSync(versionFile)){
								version = JSON.parse(fs.readFileSync(versionFile).toString("utf8"));
								return Object.keys(version).map(function(file){
									file = path.join(dir, version[file]) + ".js";
									return fs.readFileSync(file).toString("utf8");
								}).join("\n");
							}else{
								console.error(`${versionFile}不存在`);
							}
						}else{
							console.error(`${versionFile}不存在`);
						}
						return "";
					}).join("\n");
	var initCode = `
			loader.require("react-native@0.21/Libraries/JavaScriptAppEngine/Initialization/InitializeJavaScriptAppEngine.js");
			loader.require("sss3@0.0.1/index.ios.js");
		`;
	fs.writeFileSync(output, [preCode, code, initCode].join("\n"));
});