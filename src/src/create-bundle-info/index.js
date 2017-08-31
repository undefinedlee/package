import fs from "fs";
import path from "path";
import utils from "node-pearls";
import console from "cli-console";

export default function(bundleInfo, callback){
	let files = Object.keys(bundleInfo.md5Hash).map(function(file){
		return {
			file: path.join(bundleInfo.packageName, file),
			md5: bundleInfo.md5Hash[file],
			size: bundleInfo.sizeHash[file],
			deps: bundleInfo.depsHash[file].sync,
			asyncDeps: bundleInfo.depsHash[file].async
		};
	});

	return new Promise(function(resolve, reject){
		fs.writeFile(
			path.join(bundleInfo.output, "deps.json"),
			JSON.stringify({
				files
			}),
			function(err){
				if(err){
					console.error(`创建项目${bundleInfo.packageName}打包信息文件时出错`);
					console.log(err);
					reject(err);
				}
				resolve();
			}
		);
	});
}