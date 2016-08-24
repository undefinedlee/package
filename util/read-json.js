import fs from "fs";

function parseJson(content, file){
	// 删除注释
	content = content.replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/\/.*/g, function(match){
		if(/^["']/.test(match)){
			// 排除字符串中的注释符
			return match;
		}else{
			return "";
		}
	});

	// 解析json
	try{
		content = JSON.parse(content.trim());
	}catch(e){
		console.log("解析json文件错误");
		console.log(file);
		console.log(content);
		throw e;
	}

	return content;
}

// 异步读取json文件
function readJson(file, callback){
	fs.exists(file, function(isExists){
		if(isExists){
			fs.readFile(file, {
				encoding: "utf8"
			}, function(err, content){
				if(err){
					throw err;
				}

				callback(parseJson(content, file));
			});
		}else{
			callback(null);
		}
	});
}

// 同步读取json文件
readJson.sync = function(file){
	if(fs.existsSync(file)){
		let content = fs.readFileSync(file, {
			encoding: "utf8"
		});

		return parseJson(content, file);
	}else{
		return null;
	}
};

export default readJson;