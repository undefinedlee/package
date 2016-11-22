import fs from "fs";
import path from "path";
import createVersion from "../create-version";
import console from "../../util/console";
import sortJson from "../../util/sort-json";
import md5 from "../../util/md5";
import constConfig from "../const";
import Tpl from "../../util/tpl";
import asyncList from "../../util/async-list";
const tpl = fs.readFileSync(path.resolve(__dirname, "index.tpl"), {
				encoding: "utf8"
			});

export default function(base64Images, output, packageName, useVersion, projectInfo, plugin){
	return new Promise(function(resolve, reject){
		let pixelRatio1Images = base64Images[1];
		if(!pixelRatio1Images){
			// console.warn(`项目${packageName}中没有@1x图片`);
			resolve("");
			return;
		}

		delete base64Images[1];

		pixelRatio1Images = JSON.stringify(sortJson(pixelRatio1Images));

		let fileMd5 = md5(pixelRatio1Images);
		let version = useVersion ? createVersion(output, fileMd5) : constConfig.base64ImageSpriteModId;
		let modId = [packageName, version].join("/");

		var write = async function(info, callback){
			var code = await plugin.task("before-render-image-sprite", Object.assign({}, projectInfo, {
				project: packageName,
				path: constConfig.base64ImageSpriteModId,
				fileName: version + "@" + info.pixelRatio + "x",
				content: info.content
			}));

			if(typeof code !== "string"){
				code = Tpl(tpl, {
					project: packageName,
					path: constConfig.base64ImageSpriteModId,
					version: version + "@" + info.pixelRatio + "x",
					content: info.content
				});
			}

			var file = path.join(output, version + "@" + info.pixelRatio + "x.js");

			fs.writeFile(file, code, function(err){
				if(err){
					throw err;
				}

				callback();
			});
		}

		let writeFileList = [function(callback){
			write({
				pixelRatio: 1,
				content: pixelRatio1Images
			}, callback);
			// fs.writeFile(path.join(output, version + "@1x.js"), Tpl(tpl, {
			// 	project: packageName,
			// 	path: constConfig.base64ImageSpriteModId,
			// 	version: version + "@1x",
			// 	content: pixelRatio1Images
			// }), function(err){
			// 	if(err){
			// 		throw err;
			// 	}

			// 	callback();
			// });
		}];

		asyncList(writeFileList.concat(Object.keys(base64Images).map(pixelRatio => {
			var content = JSON.stringify(sortJson(base64Images[pixelRatio]));
			return function(callback){
				write({
					pixelRatio: pixelRatio,
					content: content
				}, callback);
				// fs.writeFile(path.join(output, version + "@" + pixelRatio + "x.js"), Tpl(tpl, {
				// 	project: packageName,
				// 	path: constConfig.base64ImageSpriteModId,
				// 	version: version + "@" + pixelRatio + "x",
				// 	modId: modId,
				// 	content: content
				// }), function(err){
				// 	if(err){
				// 		throw err;
				// 	}

				// 	callback();
				// });
			};
		}))).complete(function(){
			resolve(modId);
		});
	});
}