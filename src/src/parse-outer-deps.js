import path from "path";
import parseVersion from "./parse-version";
import getPackageJson from "../util/package-json";
import warnVersion from "./warn-version";
import projectDeps from "./project-deps";
import console from "cli-console";

var outerDepCache = {};
var modVersionCache = {};
// 转换对外依赖路径，增加版本号
export default function(outerUrl, projectPath, packageJson, fromMod){
	if(!outerDepCache[projectPath]){
		outerDepCache[projectPath] = {};
	}
	
	return outerDepCache[projectPath][outerUrl] || (function(){
		var url = outerUrl.split("/");
		var modName = url.shift();
		url = url.join("/");

		if(!modVersionCache[projectPath]){
			modVersionCache[projectPath] = {};
		}

		var version = modVersionCache[projectPath][modName] || (function(){
			// 依赖项目
			const dependencies = projectDeps(packageJson);

			var version = dependencies[modName];

			if(!version){
				console.warn(`在项目${packageJson.name}的package.json中没有发现对项目${modName}的依赖定义，这可能是一个运行在node环境下的内置模块. 来自模块${fromMod}的依赖.`);
				return null;
			}

			version = parseVersion(version, "");

			if(version){
				// 非稳定版本提示
				warnVersion({
					name: modName,
					version: version,
					originalVersion: dependencies[modName]
				});
			} else {
				// 对于无法解析的依赖规则，则使用当前安装的模块的版本
				// 暂时使用简单查找，其中有一个问题
				// 当查找路径中存在当前模块的多个版本时，如果第一个找到的版本不是当前需要的版本，则会有问题
				let packageJson = getPackageJson(projectPath, modName);

				version = packageJson.version;

				// 非稳定版本提示
				warnVersion({
					name: modName,
					version: version
				});
			}


			return modVersionCache[projectPath][modName] = version;
		})();

		if(!version){
			// console.error(`在项目${projectPath}中找不到对模块${modName}的依赖信息，来自文件${fromMod}`);
			return null;
		}

		url = url || (function(){
			let packageJson = getPackageJson(projectPath, modName);
			return packageJson.main || "index.js";
		})();

		if(!/\.js$/.test(url)){
			url += ".js";
		}

		return outerDepCache[projectPath][outerUrl] = path.join(modName + "@" + version, url);
	})();
}