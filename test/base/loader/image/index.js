function loader(code){
	return `module.exports = "data:image/${this.file.split(".").pop()};base64,${code.toString("base64")}";`;
};
loader.raw = true;
loader.$name = "image";

module.exports = loader;