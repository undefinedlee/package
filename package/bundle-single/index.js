import fs from "fs";
import path from "path";
import tpl from "../../util/tpl";
import jsDeps from "../../util/js-deps";
import parseOuterDep from "../parse-outer-deps";
import md5 from "../../util/md5";
import createVersion from "../create-version";
import mkdirs from "../../util/mkdirs";
import console from "../../util/console";
import constConfig from "../../package/const";

// 替换开头的分隔符
var prefixSepReg = new RegExp("^\\" + path.sep);

// 获取count个TAB键
function getTab(count){
	return new Array(count + 1).join("	");
}

// 内部模块模板
const innerModTpl = fs.readFileSync(path.resolve(__dirname, "inner-mod-tpl.js"), {
				encoding: "utf8"
			});
// 独立模块模板
const singleModTpl = fs.readFileSync(path.resolve(__dirname, "single-mod-tpl.js"), {
				encoding: "utf8"
			});

export default async function(file, projectConfig, singleFiles, loadCache, extensionFileHash, callback){
	const {projectPath, packageName, output, packageJson, plugin, projectInfo} = projectConfig;
	var mods = [];
	(function parseDeps(file){
		mods.push(file);

		let mod = loadCache[file];

		mod.innerDeps.forEach(file => {
			// 检测mods中是否存在，是为了避免循环依赖
			if(singleFiles.indexOf(file) === -1 && mods.indexOf(file) === -1){
				parseDeps(file);
			}
		});
	})(file);

	await plugin.task("bundle-mods", Object.assign({}, projectInfo, {
		mods: mods
	}));

	var deps = [];
	mods = mods.map(mod => {
		let modDir = path.dirname(mod);

		/**
		 * 这里应该有个插件注入点，修改内部模块的生成规则
		 */

		return tpl(innerModTpl, {
			file: mod.replace(projectPath, "").replace(prefixSepReg, ""),
			content: jsDeps.transDeps(loadCache[mod].content, function(depPath){
				/**
				 * 这里应该有个插件注入点，修改引用
				 */

				if(/^\.{1,2}\//.test(depPath)){
					depPath = path.resolve(modDir, depPath);
					depPath = extensionFileHash[depPath] || depPath;

					if(singleFiles.indexOf(depPath) === -1){
						return {
							requireName: "__inner_require__",
							modId: mods.indexOf(depPath),
							modIdComments: depPath.replace(projectPath, "").replace(prefixSepReg, "")
						};
					}else{
						let modId = [packageName, depPath.replace(projectPath, "").replace(prefixSepReg, "")].join("/");
						if(deps.indexOf(modId) === -1){
							deps.push(modId);
						}
						return {
							modId: modId
						};
					}
				}else if(depPath === constConfig.base64ImageSpriteModId){
					let modId = [packageName, constConfig.base64ImageSpriteModId].join("/");
					if(deps.indexOf(modId) === -1){
						deps.push(modId);
					}
					return {
						modId: modId
					};
				}else{
					let modId = parseOuterDep(depPath, projectPath, packageJson);
					if(deps.indexOf(modId) === -1){
						deps.push(modId);
					}
					return {
						modId: modId
					};
				}
			}).replace(/^(\s*\n)+/g, "").split("\n").join("\n" + getTab(3))
		});
	});

	mods = mods.join(",\n");

	file = file.replace(projectPath, "").replace(prefixSepReg, "");

	var code = tpl(singleModTpl, {
		file: [packageName, file].join("/"),
		modId: "__mod_id_placeholder__",
		mods: mods
	});

	var newCode = await plugin.task("before-write-bundle", Object.assign({}, projectInfo, {
		content: code
	}));

	if(typeof newCode !== "undefined"){
		code = newCode;
	}

	var fileMd5 = createVersion(output, md5(code));

	/**
	 * 这里应该有个插件注入点，修改版本规则，修改打包文件
	 */

	code = code.replace("__mod_id_placeholder__", [packageName, fileMd5].join("/"));

	var writeFile = path.join(output, fileMd5 + ".js");
	mkdirs(path.dirname(writeFile), function(){
		fs.writeFile(writeFile, code, function(err){
			if(err){
				console.error(`文件${writeFile}写入失败`);
			}
			callback(file, fileMd5, deps);
		});
	});
};