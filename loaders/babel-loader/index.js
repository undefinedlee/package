const babel = require("babel-core");

export default function(content){
	return babel.transform(content, {
		compact: false,
		env: "production",
		presets: ['es2015', 'stage-0'],
		plugins: [
			require("babel-plugin-external-helpers")
		]
	}).code;
};