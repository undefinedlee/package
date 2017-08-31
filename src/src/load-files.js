import fs from "fs";
import path from "path";
import console from "cli-console";
import glob from "glob";
import utils from "node-pearls";

const LoadStatus = {
	loading: 1,
	complete: 2
};

export default async function(entries, extensions, loader, config, bundleInfo){
	var loadCache = {};
	var extensionFileHash = {};

	await (function load(items, depChain){
		return Promise.all(items.map(async (item, index) => {
			var {
				isAsync,
				value: file
			} = item;

			var existsFile = false;
			for(let ext of extensions){
				if(fs.existsSync(file + ext) && fs.statSync(file + ext).isFile()){
					if(ext){
						// 这里之所以要重新设置item.value
						// 是因为这里的items是上一层依赖文件的innerDeps
						// 这里需要同步修改
						item.value = extensionFileHash[file] = file = file + ext;
					}
					existsFile = true;
					break;
				}
			}

			if(!existsFile){
				// 这里放个插件点
				// 用户可以自定义一些路径查找、补全规则
				let tempBundleInfo = bundleInfo.createTemp({
					file
				});
				let _files = await bundleInfo.plugin.task("dep-no-found", tempBundleInfo);

				if(_files && _files.length){
					// 这里的原因与上面的innerDeps一样
					_files.forEach(function(file, _index){
						if(_index === 0){
							item.value = file;
						}else{
							items.push({
								isAsync,
								value: file
							});
						}

						// 异步加载的模块单独打包
						if(isAsync && entries.indexOf(file) === -1){
							entries.push(file);
						}
					});
					extensionFileHash[file] = _files;
					await load(_files, depChain);
				}else{
					console.error(`文件${file}不存在`);
					if(depChain.length){
						console.log(`被文件${depChain[depChain.length - 1]}依赖`);
					}
				}
				return;
			}else if(isAsync && entries.indexOf(item.value) === -1){
				// 异步加载的模块单独打包
				entries.push(item.value);
			}

			if(loadCache[file]){
				loadCache[file].depChains.push(depChain);
				return;
			}

			var mod = loadCache[file] = {
				status: LoadStatus.loading,
				depChains: [depChain]
			};

			var content = await loader(file);
			
			// 如果有预设信息，则移除在预设信息条件下不会执行到的条件分支
			if(config.presets){
				content = utils.removeInvalid(content, config.presets);
			}

			var innerDeps = [];
			var outerDeps = [];
			var fileDir = path.dirname(file);
			config.depsAnalyzer.find(content).forEach(function(item){
				var { isAsync, value } = item;

				if(/^\.{1,2}\//.test(value)){
					if(/\.[a-z]+$/.test(value)){
						// 如果依赖路径带文件类型后缀，则进行多匹配尝试
						// 主要用在运行时动态加载一批文件中的某个文件
						// 例如，pic文件夹下有很多图片，但是具体使用某个文件，需要运行时才能决定
						// 这时候，就需要通过require("./pic/*.png")通配的方式，把pic下的图片全部打包进来
						// 运行时再动态决定使用哪一个
						try{
							// 处理相对路径
							let prefix = value.match(/^(\.{1,2}\/)+/)[0];
							value = value.replace(/^(\.{1,2}\/)+/, "");
							let relativePath = path.resolve(fileDir, prefix);

							// 使用glob语法进行多匹配查找
							let files = {};
							glob.sync(value, {
								cwd: relativePath
							}).forEach(function(file){
								file = path.join(relativePath, file);
								files[file] = true;
							});
							files = Object.keys(files);

							if(files.length === 1){
								// 如果结果只有一个文件，则说明不是多匹配
								// 这样判断其实不严谨，例如./pic/*.png，但是pic下确实只有一个png文件
								// 这样其实是期望是多匹配，但是匹配结果只有一个
								extensionFileHash[path.join(relativePath, value)] = files[0];
								innerDeps.push({
									isAsync,
									value: files[0]
								});
							}else if(files.length > 1){
								// 如果有多个结果，则说明是多匹配
								extensionFileHash[path.join(relativePath, value)] = files;
								innerDeps = innerDeps.concat(files.map(file => ({
									isAsync,
									value: file
								})));
							}else{
								// 如果没匹配到结果，则抛到下一步进行补全后缀再次匹配
								innerDeps.push({
									isAsync,
									value: path.join(relativePath, value)
								});
							}
						}catch(e){
							console.error(e);
						}
					}else{
						innerDeps.push({
							isAsync,
							value: path.resolve(fileDir, value)
						});
					}
				}else{
					outerDeps.push({
						isAsync,
						value
					});
				}
			});

			mod.content = content;
			mod.innerDeps = innerDeps;
			mod.outerDeps = outerDeps;
			mod.status = LoadStatus.complete;

			await load(innerDeps, [].concat(depChain, file));
		}));
	})(entries.map((file, index) => ({
		isAsync: false,
		get value(){
			return entries[index];
		},
		set value(value){
			entries[index] = value;
		}
	})), []);

	return {
		loadCache,
		extensionFileHash
	};
};