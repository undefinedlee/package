import fs from "fs";
import path from "path";
import glob from "glob";
import readJson from "./util/read-json";
import Loader from "./loader/index";

export default function main(path){
	// 项目配置
	const packageJson = readJson.sync(path.resolve(path, "package.json"));
	if(!packageJson){
		throw `在${path}目录下找不到package.json文件`;
	}

	// 打包配置
	const configPath = path.resolve(path, "pack.config.js");
	var config;
	if(fs.existsSync(configPath)){
		config = require(configPath);
	}else{
		config = {};
	}

	// 打包入口
	const entries = config.entry || [packageJson.main || "index.js"];
	// 加载器列表
	const loader = Loader(path, config.loaders);

	entries.forEach(function(entry){
		glob(entry, {}, function(err, files){
			files.forEach(function(file){
				loader(file, function(content){});
			});
		});
	});
};