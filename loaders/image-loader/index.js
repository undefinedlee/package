import fs from "fs";
import path from "path";
import Tpl from "../../util/tpl";
import md5 from "../../util/md5";
import console from "../../util/console";
import asyncList from "../../util/async-list";
import constConfig from "../../src/const";
import mkdirs from "../../util/mkdirs";
import images from "images";
const tpl = fs.readFileSync(path.resolve(__dirname, "index.tpl"), {
				encoding: "utf8"
			});

function imageLoader(content){
	const limit = this.params.limit || 0;
	const pixelRatios = this.params.pixelRatios || [1, 2, 3];

	const callback = this.async();
	const dirname = path.dirname(this.file);
	const ext = path.extname(this.file);
	var filename = path.basename(this.file, ext);

	var defaultPixelRatio = filename.match(/@(\d+)x$/);
	if(defaultPixelRatio){
		defaultPixelRatio = +defaultPixelRatio[1];
	}else{
		defaultPixelRatio = this.params.defaultPixelRatio || pixelRatios[pixelRatios.length - 1];
	}
	filename = filename.replace(/@(\d+)x$/, "");
	const outputPath = this.output;
	const base64ImageSpriteModId = constConfig.base64ImageSpriteModId;
	var base64Images = this.base64Images;

	pixelRatios.forEach(pixelRatio => {
		if(!base64Images[pixelRatio]){
			base64Images[pixelRatio] = {};
		}
	});

	asyncList(pixelRatios.map(pixelRatio => {
		return function(callback){
			function output(content){
				if(content.length < limit){
					content = content.toString("base64");
					let fileMd5Name = md5(content) + ext;

					base64Images[pixelRatio][fileMd5Name] = "data:image/" + ext.replace(".", "") + ";base64," + content;

					callback({
						type: "base64",
						content: fileMd5Name
					});
				}else{
					let fileMd5Name = md5(content) + ext;
					let file = path.join(outputPath, fileMd5Name);
					mkdirs.sync(outputPath);
					fs.writeFile(file, content, function(err){
						if(err){
							console.error(`图片${file}写入失败`);
						}
						callback({
							type: "url",
							content: fileMd5Name
						});
					});
				}
			}


			if(pixelRatio >= defaultPixelRatio || ext === ".gif"){
				output(content);
			}else{
				let pixelRatioFile = path.join(dirname, filename + "@" + pixelRatio + "x" + ext);

				if(fs.existsSync(pixelRatioFile)){
					fs.readFile(pixelRatioFile, null, function(err, content){
						if(err){
							throw err;
						}

						output(content);
					});
				}else{
					let img = images(content);
					let newImg = img.resize((img.width() * pixelRatio / defaultPixelRatio) | 0).encode(ext.replace(/^\./, ""));
					output(newImg);
				}
			}
		};
	})).complete(function(...imgs){
		images.gc();

		callback(Tpl(tpl, {
			images: base64ImageSpriteModId,
			content: imgs.map(img => {
				if(img.type === "base64"){
					return `images["${img.content}"]`;
				}else{
					return `__dirname + "/${img.content}"`;
				}
			}).join(",")
		}));
	});
}

imageLoader.raw = true;

export default imageLoader;