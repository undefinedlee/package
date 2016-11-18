const babel = require("babel-core");

export default function(content){
	return babel.transform(content, {
		compact: false,
		env: "production",
		presets: [['es2015', {"loose": true,"modules": false}], 'stage-0'],
		plugins: [
			[require("babel-plugin-transform-es2015-modules-commonjs"), {
				"allowTopLevelThis": true
			}],
			require("babel-plugin-external-helpers"),
			require("babel-plugin-transform-react-jsx"),
			require("babel-plugin-transform-decorators-legacy").default
		]
	}).code;
};