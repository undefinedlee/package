import console from "../util/console";
/**
 * 将版本规则解析为固定的打包版本号
 * @param {string} version - 版本规则
 * @param {string} packageVersion - 当前安装项目的版本
 * @description
 		目前支持的版本规则如下（参见语义化版本semver）：
 			1.2.3			-	指定版本，模块打包后为 name/1.2.3/...
 			波浪线~			-	自动升级版本，例如 ~1.2.3 模块打包后为 name/1.2/...
 			补注号^(默认)		-	自动升级版本，例如 ^1.2.3 模块打包后为 name/1/...
 			x范围			-	自动升级版本，例如 1.2.x 模块打包后为 name/1.2/...
 			其他规则			-	转换为当前安装项目的版本，不自动升级
 */
export default function (version, packageVersion){
	if(/^\d+\.\d+\.\d+$/.test(version)){
		return version;
	}else if(/^\~\d+(\.\d+){0,2}$/.test(version)){
		return version.replace(/^\~/, "").split(".").slice(0, 2).join(".");
	}else if(/^\^\d+(\.\d+){0,2}$/.test(version)){
		version = version.replace(/^\^/, "").split(".");
		return version.slice(0, version.findIndex(item=>item!=0) + 1).join(".");
	}else if(/^\d+(\.\d+)?\.x$/.test(version)){
		return version.replace(/\.x$/, "");
	}else{
		console.warn(`版本规则${version}暂时不支持，转换为指定版本${packageVersion}进行打包`);
		return packageVersion;
	}
}