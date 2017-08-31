import path from "path";
import console from "cli-console";
import utils from "node-pearls";

var packageJsonCache = {};

export default function (projectPath, modName){
	return packageJsonCache[modName] || (function(){
		let modPath = utils.findNodeModules(projectPath, modName);
		if(!modPath){
			console.error(`从路径${projectPath}找不到模块${modName}`);
		}else{
			let packageJson = utils.readJson.sync(path.resolve(modPath, "package.json"));
			if(!packageJson){
				console.error(`在${modPath}目录下找不到package.json文件`);
			}

			return packageJsonCache[modName] = packageJson;
		}

		return packageJsonCache[modName] = {};
	})();
}