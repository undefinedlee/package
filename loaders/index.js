import fs from "fs";
import path from "path";
import jsLoader from "./js-loader/index";
import cssLoader from "./css-loader/index";
import babelLoader from "./babel-loader/index";
import enjoyCssLoader from "./enjoy-css-loader/index";
import enjoyHtmlLoader from "./enjoy-html-loader/index";
import imageLoader from "./image-loader/index";
import jsonLoader from "./json-loader/index";
import emptyLoader from "./empty-loader/index";
import pipe from "../util/pipe";
import console from "../util/console";

const defaultLoaderHash = {
	"js": jsLoader,
	"css": cssLoader,
	"babel": babelLoader,
	"enjoy-css": enjoyCssLoader,
	"enjoy-html": enjoyHtmlLoader,
	"json": jsonLoader,
	"image": imageLoader,
	"empty": emptyLoader
};

// 默认加载器列表
const defaultLoaders = [{
	// 处理普通的JS文件
	test: /\.js$/,
	loader: ["babel", "js"]
}, {
	// 处理普通的CSS文件
	test: /\.css$/,
	loader: [{
		loader: "css",
		params: {
			browsers: [
				"ChromeAndroid >= 30"
				,"iOS >= 6"
				,"and_uc >= 10"
				,"Samsung >= 3.3"
				,"Android >= 4.0"
				,"and_ff >= 6.0"
			]
		}
	}]
}, {
	// 处理enjoy转换的css文件
	test: /\-css\.js$/,
	loader: ["babel", "enjoy-css"]
}, {
	// 处理enjoy转换的html文件
	test: /\-html\.js$/,
	loader: ["babel", {
		loader: "enjoy-html",
		params: {
			elementFactory: "__dom__"
		}
	}]
}, {
	// 处理json文件
	test: /\.json$/,
	loader: "json"
}, {
	// 处理图片
	test: /\.(png|jpg|jpeg|gif)$/,
	loader: {
		loader: "image",
		params: {
			limit: 8000,
			pixelRatios: [1, 2, 3],
			defaultPixelRatio: 2
		}
	}
}];

export default async function(configLoaders, projectInfo, plugin){
	var hooks = [];
	if(projectInfo.config.hooks && projectInfo.config.hooks.file){
		hooks = projectInfo.config.hooks.file;
	}
	// 当前可使用的所有加载器
	// 用户自定义的加载器优先级高于默认加载器
	var loaders = [].concat((configLoaders || []).reverse(), defaultLoaders.reverse());

	loaders.forEach(loader => {
		// 将单个loader转换为数组
		if(!(loader.loader instanceof Array)){
			loader.loader = [loader.loader];
		}

		loader.loader = loader.loader.map(loader => {
			let type = typeof loader;

			if(type === "string"){
				if(defaultLoaderHash[loader]){
					return defaultLoaderHash[loader];
				}else{
					console.error(`未找到loader: ${loader}`);
					return emptyLoader;
				}
			}else if(type === "object"){
				if(typeof loader.loader === "string"){
					if(defaultLoaderHash[loader.loader]){
						loader.loader = defaultLoaderHash[loader.loader]
					}else{
						console.error(`未找到loader: ${loader.loader}`);
						loader.loader = emptyLoader;
					}
				}
				return loader;
			}else if(type === "function"){
				return loader;
			}else{
				console.error("loader必须是一个函数");
				console.log(loader);
				return emptyLoader;
			}
		});
	});

	await plugin.task("init-loader", Object.assign(projectInfo, {
		loaders: loaders
	}));

	var base64Images = {};

	function loader(file, options, callback){
		options = options || {};
		// 查找可处理file文件的第一个加载器配置
		var loader = loaders.find(function(loader){
			return loader.test.test(file);
		});

		if(!loader){
			console.error(`没有找到可以处理文件${file}的loader`);
			callback("");
			return "";
		}

		var loadFile = async function(content){
			if(options.raw){
				callback(content);
				return;
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

					var result = "";
					try{
						result = loader.call({
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
					}catch(e){
						console.error(`loader file ${file} error`);
						console.log(e);

						if(!isSync){
							callback("");
						}
					}

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
			let hook = hooks.find(hook => typeof hook.test === "string" ? file.indexOf(hook.test) !== -1 : hook.test.test(file));
			if(hook){
				if(typeof hook.content === "function"){
					// 如果hook.content是一个函数，则采用依赖注入的方式传递参数
					let args;
					if(hook.params){
						args = hook.params;
					}else{
						args = hook.content.toString().match(/^function\s*([^\(]+)?\(([^\)]*)\)/);
						if(args && (args = args[2].trim())){
							args = args[1].split(",").map(item => item.trim());
						}else{
							args = [];
						}
					}

					args = args.map(item => {
						switch(item){
							case "file":
								return file;
							case "content":
								if(hook.raw){
									return fs.readFileSync(file);
								}else{
									return fs.readFileSync(file).toString("utf8");
								}
						}
						return null;
					});

					loadFile(hook.content.apply(hook, args));
				}else{
					loadFile(hook.content);
				}
			}else{
				fs.readFile(file, null, function(err, content){
					if(err){
						throw err;
					}

					loadFile(content);
				});
			}
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