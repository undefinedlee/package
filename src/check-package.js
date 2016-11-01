import path from "path";
import semver from "semver";
import console from "../util/console";
import readJson from "../util/read-json";

export default function(projectPath, version, isInner){
	// 项目配置
	const packageJson = readJson.sync(path.resolve(projectPath, "package.json"));
	if(!packageJson){
		if(isInner){
			console.error(`在${projectPath}目录下找不到package.json文件`);
		}else{
			console.warn(`在${projectPath}目录下找不到package.json文件`);
		}
		return;
	}

	// 检测版本号
	if(version){
		// 如果当前安装的项目版本不是需要的版本，则退出打包
		if(!semver.satisfies(packageJson.version, version)){
			console.error(`当前安装的项目${packageJson.name}的版本为${packageJson.version}，与打包需要的版本${version}不匹配`);
			return;
		}
	}

	return packageJson;
};