import path from "path";
import pack from "../index";
import packageReactNative from "../../package-react-native/index";

var tpl = `loader.define("#id#", [#deps#], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
#mods#
	];
});`

pack("/Users/lifan/work-test/sss3/rn", null, null, function(){
}, {
	config: {
		relativePath: "build",
		entry: [
			"index.js",
			"views/**/!(*-css|*-html).js"
		],
		output: path.join(__dirname, "sss3"),
		useVersion: false,
		plugins: [packageReactNative("ios"), function(){
			this.plugin("before-render-code", function(info){
				return tpl.replace(/#([a-zA-Z\-]+)#/g, function(match, key){
					return {
						id: [info.project, info.path].join("/"),
						deps: info.deps.map(item => '"' + item + '"').join(", "),
						mods: info.codes.join(",")
					}[key];
				});
			});
		}]
	}
});