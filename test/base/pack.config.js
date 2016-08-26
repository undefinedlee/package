var path = require("path");

module.exports = {
	entry: [
		"views/*/**.js"
	],
	output: path.join(__dirname, "../base-output")
};