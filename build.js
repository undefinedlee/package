var path = require("path");
var filesToEs5 = require("files-to-es5");

filesToEs5({
	src: path.join(__dirname, "src"),
	output: path.join(__dirname, "dist")
});