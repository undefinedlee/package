var cleanCSS = require("clean-css");

function replaceUrl(code){
    return code.replace(/url\s*\(\s*(["']?)(.+?)\1\s*\)/g, function(all, quote, url){
        if(/^(https?\:)?\/\//.test(url)){
            return all;
        }else{
            if(!/^\.{1,2}\//.test(url)){
                url = "./" + url;
            }
            return `url(" + require("${url}") + ")`;
        }
    });
}

function loader(code){
    code = new cleanCSS().minify(code).styles
                .replace(/\\/g, "\\\\")
                .replace(/"/g, "\\\"");
                
    code = replaceUrl(code);

	return `
        var styleNode = document.createElement("div");
        styleNode.innerHTML = "<br /><style type='text/css' data-src='${this.file}'>${code}</style>";
        module.exports = document.getElementsByTagName("head")[0].appendChild(styleNode.lastChild);
        styleNode = null;
    `.trim();
};
loader.$name = "css";

module.exports = loader;