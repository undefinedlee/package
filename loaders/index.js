import fs from "fs";
import path from "path";
import jsLoader from "./js-loader/index";
import babelLoader from "./babel-loader/index";
import enjoyCssLoader from "./enjoy-css-loader/index";
import enjoyHtmlLoader from "./enjoy-html-loader/index";
import imageLoader from "./image-loader/index";
import jsonLoader from "./json-loader/index";
import pipe from "../util/pipe";
import console from "../util/console";

// 默认加载器列表
const defaultLoaders = [{
	// 处理普通的JS文件
	test: /\.js$/,
	loader: [babelLoader, jsLoader]
}, {
	// 处理enjoy转换的css文件
	test: /\-css\.js$/,
	loader: [babelLoader, enjoyCssLoader]
}, {
	// 处理enjoy转换的html文件
	test: /\-html\.js$/,
	loader: [babelLoader, enjoyHtmlLoader]
}, {
	// 处理json文件
	test: /\.json$/,
	loader: jsonLoader
}, {
	// 处理图片
	test: /\.(png|jpg|jpeg|gif)$/,
	loader: {
		loader: imageLoader,
		params: {
			limit: 8000
		}
	}
}];

export default async function(configLoaders, projectInfo, plugin){
	// 当前可使用的所有加载器
	// 用户自定义的加载器优先级高于默认加载器
	var loaders = [].concat((configLoaders || []).reverse(), defaultLoaders.reverse());

	await plugin.task("init-loader", Object.assign(projectInfo, {
		loaders: loaders
	}));

	var base64Images = {};

	function loader(file, callback){
		// 查找可处理file文件的第一个加载器配置
		var loader = loaders.find(function(loader){
			return loader.test.test(file);
		});

		if(!loader){
			console.error(`没有找到可以处理文件${file}的loader`);
			return "";
		}

		var loadFile = async function(content){
			// 将单个loader转换为数组
			if(!(loader.loader instanceof Array)){
				loader.loader = [loader.loader];
			}
			
			await plugin.task("before-loader", Object.assign({}, projectInfo, {
				file: file,
				content: content,
				useLoaders: loader.loader
			}));

			// 进入管道模式顺序调用loader
			pipe(loader.loader.map(function(loader){
				return function(content){
					var params;
					// 带参数的loader
					if(typeof loader === "object"){
						params = loader.params;
						loader = loader.loader;
					}
					// 如果模块需要的不是原始数据，则一律转换为字符串
					if(!loader.raw && typeof content !== "string"){
						content = content.toString("utf8");
					}

					var callback = this.async();

					var isSync = true;

					var result = loader.call({
						...projectInfo,
						file: file,
						params: params || {},
						base64Images: base64Images,
						async: function(){
							isSync = false;

							return function(result){
								callback(result);
							};
						}
					}, content);

					if(isSync){
						callback(result);
					}
				};
			}))
			.start(content)
			.end(async function(_content){
				// console.log(content);
				await plugin.task("after-loader", Object.assign({}, projectInfo, {
					file: file,
					originalContent: content,
					content: _content,
					useLoaders: loader.loader
				}));
				callback(_content);
			});
		}; 

		if(fs.existsSync(file)){
			fs.readFile(file, null, function(err, content){
				if(err){
					throw err;
				}

				loadFile(content);
			});
		}else{
			if(/^\.(png|jpg|jpeg|gif)$/.test(path.extname(file))){
				console.warn(`找不到文件${file}`);
			}else{
				console.error(`找不到文件${file}`);
			}

			callback("");
		}
	}

	loader.base64Images = base64Images;

	return loader;
};