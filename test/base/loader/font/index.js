function loader(code){
	return `module.exports = "data:font/truetype;charset=utf-8;base64,${code.toString("base64")}";`;
};
loader.raw = true;
loader.$name = "font";

module.exports = loader;