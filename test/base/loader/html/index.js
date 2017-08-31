function loader(code){
    code = code.replace(/[\r\n\t]/g, " ")
                .replace(/\\/g, "\\\\")
                .replace(/"/g, "\\\"");
	return `module.exports = "${code}";`;
};

loader.$name = "html";

module.exports = loader;