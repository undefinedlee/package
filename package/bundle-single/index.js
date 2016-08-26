import fs from "fs";
import path from "path";
import tpl from "../../util/tpl";
import jsDeps from "../../util/js-deps";
import parseOuterDep from "../parse-outer-deps";
import md5 from "../../util/md5";
import mkdirs from "../../util/mkdirs";
import console from "../../util/console";

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

export default function(file, projectConfig, singleFiles, loadCache, extensionFileHash, callback){
	const {projectPath, packageName, output, packageJson} = projectConfig;
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

	var deps = [];
	mods = mods.map(mod => {
		let modDir = path.dirname(mod);
		return tpl(innerModTpl, {
			file: mod.replace(projectPath, "").replace(prefixSepReg, ""),
			content: jsDeps.transDeps(loadCache[mod].content, function(depPath){
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
						let modId = path.join(packageName, depPath.replace(projectPath, ""));
						if(deps.indexOf(modId) === -1){
							deps.push(modId);
						}
						return {
							modId: modId
						};
					}
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
	var fileMd5 = md5(mods);
	file = file.replace(projectPath, "").replace(prefixSepReg, "");

	var code = tpl(singleModTpl, {
		file: path.join(packageName, file),
		modId: path.join(packageName, fileMd5),
		mods: mods
	});

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