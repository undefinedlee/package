import fs from "fs";
import path from "path";
import tpl from "../../util/tpl";
import asyncList from "../../util/async-list";
import createVersion from "../create-version";
import console from "../../util/console";
import md5 from "../../util/md5";
import constConfig from "../const";
import sortJsonKey from "../../util/sort-json";
// 客户端版本文件模板
const versionTpl = fs.readFileSync(path.resolve(__dirname, "version-tpl.js"), {
				encoding: "utf8"
			});

export default function(depsHash, versionHash, output, packageName, imageSpriteModId, projectInfo, plugin, callback){
	asyncList([function(callback){
		// 生成依赖关系文件
		var code = JSON.stringify(sortJsonKey(depsHash), null, "	");
		//var codeMd5 = md5(code);
		var codeMd5 = createVersion(output, md5(code));
		fs.writeFile(path.join(output, /*"deps." + */codeMd5 + ".json"), code, function(err){
			if(err){
				console.error("生成依赖关系表失败");
			}
			callback({
				name: "deps.json",
				version: codeMd5 + ".json"
			});
		});
	}, function(callback){
		// 生成客户端版本文件
		var version = sortJsonKey(versionHash);

		if(imageSpriteModId){
			version[constConfig.base64ImageSpriteModId] = "__base64_image_sprite_placeholder__";
		}

		var code = tpl(versionTpl, {
			packageName: packageName,
			versions: JSON.stringify(version, null, "	")
		});

		if(imageSpriteModId){
			code = code.replace(`"__base64_image_sprite_placeholder__"`, `[${[1,2,3].map(pixelRatio => `"${imageSpriteModId}@${pixelRatio}x.js"`).join(",")}][Math.min(3, window.devicePixelRatio || 1)]`);
		}
		
		//var codeMd5 = md5(code);
		var codeMd5 = createVersion(output, md5(code));
		fs.writeFile(path.join(output, /*"version." + */codeMd5 + ".js"), code, function(err){
			if(err){
				console.error("生成客户端版本文件失败");
			}
			callback({
				name: "version.js",
				version: codeMd5 + ".js"
			});
		});
	}, function(callback){
		// 生成服务端版本文件
		var code = JSON.stringify(sortJsonKey(versionHash), null, "	");
		//var codeMd5 = md5(code);
		var codeMd5 = createVersion(output, md5(code));
		fs.writeFile(path.join(output, /*"version." + */codeMd5 + ".json"), code, function(err){
			if(err){
				console.error("生成服务端版本文件失败");
			}
			callback({
				name: "version.json",
				version: codeMd5 + ".json"
			});
		});
	}]).complete(function(...files){
		// 此文件中记录最新一版的deps.js、version.js、version.json的版本
		var newestVersion = {};
		files.forEach(file => {
			newestVersion[file.name] = file.version;
		});

		fs.writeFile(path.join(output, "version.json"), JSON.stringify(sortJsonKey(newestVersion), null, "	"), async function(err){
			if(err){
				console.error("生成版本最新记录文件失败");
			}

			await plugin.task("complete", Object.assign(projectInfo, {
				newestVersion: newestVersion
			}));

			callback();
		});
	});
}