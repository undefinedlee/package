const tpl = `
// #file#
loader.define("#project#/#path#", __url, function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
#mods#
	];
});
`;

function plugin(){
    this.plugin("before-render-code", function (info) {
        var data = {
            file: [info.packageName, info.file].join("/"),
            project: info.packageName,
            path: info.file,
            mods: info.codes.join(",\n")
        };
        return tpl.replace(/#([a-z]+)#/g, function(match, key){
            return data[key];
        });
    });
};

plugin.$name = "package";

module.exports = plugin;