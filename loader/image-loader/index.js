function imageLoader(content){
	if(this.params.limit && content.length < this.params.limit){
		content = content.toString("base64");
	}
	
	return content;
}

imageLoader.raw = true;

export default imageLoader;