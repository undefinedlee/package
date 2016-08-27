export default function(content){
	return content.replace(/url\s*\(\s*(["']?)(\.{1,2}\/.+?)\1\s*\)/g, function(all, quote, url){
		return `url(" + require("${url}") + ")`;
	});
};