const babel = require("babel-core");

export default function(content){
	return babel.transform(content, {
		presets: ['es2015', 'stage-0']
	}).code;
};