function loader(code){
	return `module.exports = code`;
};

loader.$name = "json";

module.exports = loader;