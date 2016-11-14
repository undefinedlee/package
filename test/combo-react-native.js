import fs from "fs";
import path from "path";
import uglify from "uglify-js";

const files = [
	"enjoy.js",
	"business.js"
].map(function(item){
	return path.join(__dirname, "sss7", item);
});

var code = files.map(function(file){
	return fs.readFileSync(file).toString("utf8");
}).join("\n");

code = uglify.minify(code, {
	fromString: true
}).code;

fs.writeFile(path.join(__dirname, "sss7", "combo.min.js"), code, function(err){
	if(err){
		throw err;
	}
	console.log("combo完成")
});