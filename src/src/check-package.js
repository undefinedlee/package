import path from "path";
import semver from "semver";
import console from "cli-console";
import utils from "node-pearls";

/**
 * 检测当前项目项目版本是否符合需要打包的版本，并返回项目描述文件
 * @param {string} projectPath 
 * @param {string} versionRule 
 * @returns {object}
 */
export default function(projectPath, versionRule){
	// 项目配置
	const packageJson = utils.readJson.sync(path.resolve(projectPath, "package.json"));
	if(!packageJson){
		console.error(`在${projectPath}目录下找不到package.json文件`);
		return;
	}

	// 检测版本号
	if(versionRule){
		// 如果当前安装的项目版本不是需要的版本，则退出打包
		if(!semver.satisfies(packageJson.version, versionRule)){
			console.error(`当前安装的项目${packageJson.name}的版本为${packageJson.version}，与打包需要的版本${versionRule}不匹配`);
			return;
		}
	}

	return packageJson;
};