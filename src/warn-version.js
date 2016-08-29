//import semver from "semver";
import console from "../util/console";

export default function(packageJson){
	// 由于1.0.0以下的版本属于非稳定版本，所以打包时会有警告提示
	//if(semver.lt(packageJson.version, "1.0.0")){
	if(packageJson.version && packageJson.version.split(".")[0] === "0"){
		console.warn(`依赖的项目${packageJson.name}的版本为${packageJson.originalVersion || packageJson.version}，属于非稳定版本，请谨慎使用`);
	}
}