import fs from "fs";
import path from "path";
import utils from "node-pearls";
import console from "cli-console";
import ConvertSourceMap from "convert-source-map";

export default async function(configLoaders, bundleInfo){
	var hooks = [];
	if(bundleInfo.config.loaderHooks && bundleInfo.config.loaderHooks.file){
		hooks = bundleInfo.config.loaderHooks.file;
	}
	var plugin = bundleInfo.plugin;
	// 当前可使用的所有加载器
	// 用户自定义的加载器优先级高于默认加载器
	var loaders = (configLoaders || []).reverse();

	loaders.forEach(loader => {
		// 将单个loader转换为数组
		if(!(loader.loader instanceof Array)){
			loader.loader = [loader.loader];
		}
	});

	bundleInfo.loaders = loaders;
	await plugin.task("init-loader", bundleInfo);

	return async function(file, options){
		options = options || {};
		// 查找可处理file文件的第一个加载器配置
		var loader = loaders.find(function(loader){
			return loader.test.test(file);
		});

		if(!loader){
			console.error(`没有找到可以处理文件${file}的loader`);
			return "";
		}

		var loadFile = async function(content){
			if(options.raw){
				return content;
			}

			var tempBundleInfo = bundleInfo.createTemp({
				file: file,
				content: content,
				useLoaders: loader.loader
			});
			await plugin.task("before-loader", tempBundleInfo);
			file = tempBundleInfo.file;
			content = tempBundleInfo.content;
			loader.loader = tempBundleInfo.useLoaders;

			return await new Promise(function(resolve){
				// 进入管道模式顺序调用loader
				utils.pipe(loader.loader.map(function(loader){
					return function(content){
						var callback = this.async();

						(async () => {
							var params;
							// 带参数的loader
							if(typeof loader === "object"){
								params = loader.params;
								loader = loader.loader;
							}
							// 如果模块需要的不是原始数据，则一律转换为字符串
							if(!loader.raw && typeof content !== "string"){
								content = content.toString("utf8");

								if(process.env.SM){
									let tempBundleInfo = bundleInfo.createTemp({
										file: file,
										content: content
									});
									await plugin.task("before-inject-source-map", tempBundleInfo);
									file = tempBundleInfo.file;
									content = tempBundleInfo.content;

									// 生成最初的sourcemap
									let relativeRoot = bundleInfo.customerInfo.originalProjectPath || bundleInfo.projectPath;
									relativeRoot = relativeRoot.substring(0, relativeRoot.lastIndexOf(path.sep));
									let relativeFile = file.replace(relativeRoot, "");
									content += "\n" + ConvertSourceMap.fromObject({
										version: 3,
										file: relativeFile,
										sourceRoot: "",
										sources: [relativeFile],
										names: [],
										mappings: "AAAA",
										sourcesContent: [content]
									}).toComment({
										// css文件使用多行注释
										multiline: /\.css$/.test(file)
									});

									tempBundleInfo = bundleInfo.createTemp({
										file: file,
										content: content
									});
									await plugin.task("after-inject-source-map", tempBundleInfo);
									file = tempBundleInfo.file;
									content = tempBundleInfo.content;
								}
							}

							var isSync = true;

							var result = "";
							try{
								result = loader.call({
									...bundleInfo,
									file: file,
									params: params || {},
									async: function(){
										isSync = false;

										return function(result){
											callback(result);
										};
									}
								}, content);
							}catch(e){
								console.error(`[${loader.$name}] loader file ${file} error`);
								console.log(e);

								if(!isSync){
									callback("");
								}
							}

							if(isSync){
								callback(result);
							}
						})();
					};
				}))
				.start(content)
				.end(async function(_content){
					var tempBundleInfo = bundleInfo.createTemp({
						file: file,
						originalContent: content,
						content: _content,
						useLoaders: loader.loader
					});
					await plugin.task("after-loader", tempBundleInfo);
					file = tempBundleInfo.file;
					content = tempBundleInfo.originalContent;
					_content = tempBundleInfo.content;
					loader.loader = tempBundleInfo.useLoaders;
					resolve(_content);
				});
			});
		};

		var content = "";
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

					content = await loadFile(hook.content.apply(hook, args));
				}else{
					content = await loadFile(hook.content);
				}
			}else{
				content = await new Promise(function(resolve, reject){
					fs.readFile(file, null, async function(err, content){
						if(err){
							reject(err);
							return;
						}

						resolve(await loadFile(content));
					});
				});
			}
		}else{
			if(/^\.(png|jpg|jpeg|gif)$/.test(path.extname(file))){
				console.warn(`找不到文件${file}`);
			}else{
				console.error(`找不到文件${file}`);
			}
		}

		return content;
	}
};