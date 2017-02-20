import postcss from "postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

const tpl = `
	var styleNode = document.createElement("div");
	styleNode.innerHTML = '<br /><style type="text/css">{content}</style>';
	module.exports = document.getElementsByTagName("head")[0].appendChild(styleNode.lastChild);
	styleNode = null;
`;

// 包装成js模块
function transCss(content){
	return tpl.replace("{content}", content);
}

export default function(content){
	if(this.params.browsers){
		let callback = this.async();

		postcss([
			// 自动添加前缀
			autoprefixer({
				browsers: this.params.browsers
			}),
			// 压缩
			cssnano()
		])
		.process(content)
		.then(function (content) {
			content.warnings().forEach(function (warn) {
				console.warn(warn.toString());
			});

			callback(transCss(content.css));
		});
	}else{
		return transCss(content);
	}
};