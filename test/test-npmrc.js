import fs from "fs";
import path from "path";

const registryKey = "registry";
const registryUrl = "https://registry.npm.taobao.org";
const checkRegex = new RegExp(registryKey + "\\s*=\\s*" + registryUrl.replace(/([\/\.])/g, "\\$1"));
const multipleLine = /\n+/g;

function checkRegistry(content){
	return checkRegex.test(content);
}

function addRegistry(file){
	if(!fs.existsSync(file)){
		fs.writeFileSync(file, [registryKey, registryUrl].join("=") + "\n");
		return true;
	}else{
		let content = fs.readFileSync(file).toString("utf8");
		if(checkRegistry(content)){
			return false;
		}else{
			content += (content && !/\n$/.test(content) ? "\n" : "") + [registryKey, registryUrl].join("=") + "\n";
			fs.writeFileSync(file, content);
			return true;
		}
	}
}

function removeRegistry(file){
	if(fs.existsSync(file)){
		let content = fs.readFileSync(file).toString("utf8");
		if(checkRegistry(content)){
			content = content.replace(checkRegex, "").replace(multipleLine, "\n");
			fs.writeFileSync(file, content);
		}
	}
}

if(process.env.HOME){
	let file = path.join(process.env.HOME, ".npmrc");
	let result = addRegistry(file);
	console.log(result);
	// removeRegistry(file);
}