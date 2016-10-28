const babel = require("babel-core");
import fs from "fs";

export function getCode(whitelist){
	return babel.buildExternalHelpers(whitelist, "global");
};

export default function(outputFile, whitelist, callback){
	var code = getCode(whitelist);
	fs.writeFile(outputFile, code, function(err){
		if(err){
			throw err;
		}

		callback && callback();
	});
};