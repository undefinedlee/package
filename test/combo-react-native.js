import fs from "fs";
import path from "path";

const files = [
	"enjoy.js",
	"business.js"
].map(function(item){
	return path.join(__dirname, "sss3", item);
});

var code = files.map(function(file){
	return fs.readFileSync(file).toString("utf8");
}).join("\n");

fs.writeFile(path.join(__dirname, "sss3", "combo.js"), code, function(err){
	if(err){
		throw err;
	}
	console.log("combo完成")
});