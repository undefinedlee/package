import fs from "fs";
import path from "path";
import tpl from "../../util/tpl";
import jsDeps from "../../util/js-deps";
import parseOuterDep from "../parse-outer-deps";
import md5 from "../../util/md5";
import createVersion from "../create-version";
import mkdirs from "../../util/mkdirs";
import console from "../../util/console";
import constConfig from "../const";

// 替换开头的分隔符
var prefixSepReg = new RegExp("^\\" + path.sep);

// 获取count个TAB键
function getTab(count){
	return new Array(count + 1).join("	");
}

// 内部模块模板
const innerModTpl = fs.readFileSync(path.resolve(__dirname, "inner-mod.tpl"), {
				encoding: "utf8"
			});
// 独立模块模板
const singleModTpl = fs.readFileSync(path.resolve(__dirname, "single-mod.tpl"), {
				encoding: "utf8"
			});

export default async function(file, projectConfig, singleFiles, loadCache, extensionFileHash, isExtractedCommon, callback){
	const {projectPath, packagePath, packageName, output, packageJson, plugin, projectInfo} = projectConfig;

	function parseModId(file){
		return file.replace(packagePath, "").replace(prefixSepReg, "");
	}

	var mods = [];
	(function parseDeps(file){
		let mod = loadCache[file];

		if(mod){
			mods.push(file);
			
			mod.innerDeps.forEach(file => {
				// 检测mods中是否存在，是为了避免循环依赖
				if((!isExtractedCommon || singleFiles.indexOf(file) === -1) && mods.indexOf(file) === -1){
					parseDeps(file);
				}
			});
		}else{
			console.error(`没有找到加载的文件${file}`);
		}
	})(file);

	await plugin.task("bundle-mods", Object.assign({}, projectInfo, {
		mods: mods
	}));

	var deps = [];
	var codes = mods.map(mod => {
		let modDir = path.dirname(mod);

		/**
		 * 这里应该有个插件注入点，修改内部模块的生成规则
		 */

		return tpl(innerModTpl, {
			file: parseModId(mod),
			content: jsDeps.transDeps(loadCache[mod].content, function(depPath){
				/**
				 * 这里应该有个插件注入点，修改引用
				 */

				if(/^\.{1,2}\//.test(depPath)){
					depPath = path.resolve(modDir, depPath);
					depPath = extensionFileHash[depPath] || depPath;

					let parse = function(depPath){
						if(!isExtractedCommon || singleFiles.indexOf(depPath) === -1){
							return {
								requireName: "__inner_require__",
								modId: mods.indexOf(depPath),
								modIdComments: parseModId(depPath)
							};
						}else{
							let modId = [packageName, parseModId(depPath)].join("/");
							if(deps.indexOf(modId) === -1){
								deps.push(modId);
							}
							return {
								modId: modId
							};
						}
					};

					if(depPath instanceof Array){
						return depPath.map(depPath => {
							return parse(depPath);
						});
					}else{
						return parse(depPath);
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
					if(modId){
						if(deps.indexOf(modId) === -1){
							deps.push(modId);
						}
						return {
							modId: modId
						};
					}else{
						return {
							modId: depPath
						};
					}
				}
			}).replace(/^(\s*\n)+/g, "").split("\n").join("\n" + getTab(3))
		});
	});

	codes = codes.join(",\n");

	file = parseModId(file);

	var code = tpl(singleModTpl, {
		file: [packageName, file].join("/"),
		project: packageName,
		path: file,
		version: "__mod_version_placeholder__",
		mods: codes
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

	code = code.replace("__mod_version_placeholder__", fileMd5);

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