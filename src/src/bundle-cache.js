import fs from "fs";
import path from "path";
import semver from "semver";
import utils from "node-pearls";
import console from "cli-console";
const cacheFileName = ".package-list.json";
/**
 * 判断是否需要打包
 * @param {string} output - 打包输出的目录
 * @param {string} packageName - 要检测的包名（projectName@version）
 * @param {string} version - 要检测的项目的版本
 * @param {string[]} [entries] - 要检测的包的入口文件列表
 * @returns {boolean|string[]} - false or all entries
 */
export function check(output, packageName, version, entries){
    const file = path.resolve(output, cacheFileName);

	if(!fs.existsSync(file)){
		return entries;
	}else{
		let lastVersion = require(file)[packageName];
		if(lastVersion){
            let hasNewEntry = false;
            entries.forEach(function(entry){
                if(lastVersion.entries.indexOf(entry) === -1){
                    hasNewEntry = true;
                    lastVersion.entries.push(entry);
                }
            });

            // 上次打包版本>=当前版本
            if(semver.gte(lastVersion.version, version)){
                if(hasNewEntry){
                    if(semver.gt(lastVersion.version, version)){
                        console.warn(`打${packageName}包时，当前版本${version}低于上次打包版本${lastVersion.version}`);
                    }
                    return lastVersion.entries;
                }else{
                    return false;
                }
            }else{
                return lastVersion.entries;
            }
		}else{
			return entries;
		}
	}
}
/**
 * 更新模块打包信息
 * @param {string} output - 打包输出的目录
 * @param {string} packageName - 要检测的包名
 * @param {string} version - 要检测的包的版本
 * @param {string[]} [entries] - 要检测的包的入口文件列表
 */
export function update(output, packageName, version, entries){
	const file = path.resolve(output, cacheFileName);

	var hash;
	if(fs.existsSync(file)){
		hash = require(file);
	}else{
		hash = {};
	}

    hash[packageName] = {
        version: version,
        entries: entries
    };

	utils.mkdirs.sync(path.dirname(file));
	fs.writeFileSync(file, JSON.stringify(hash));
}