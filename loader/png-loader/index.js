function pngLoader(content){
	if(this.params.limit && content.length < this.params.limit){
		content = content.toString("base64");
	}
	
	return content;
}

pngLoader.raw = true;

export default pngLoader;