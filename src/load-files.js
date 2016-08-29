import fs from "fs";
import path from "path";
import asyncList from "../util/async-list";
import console from "../util/console";
import jsDeps from "../util/js-deps";

const LoadStatus = {
	loading: 1,
	complete: 2
};

export default function(files, extensions, loader, callback){
	var loadCache = {};

	var extensionFileHash = {};

	(function load(files, depChain, callback){
		asyncList(files.map((file, index) => {
			return function(callback){
				var existsFile = false;
				for(let ext of extensions){
					if(fs.existsSync(file + ext) && fs.statSync(file + ext).isFile()){
						if(ext){
							files[index] = extensionFileHash[file] = file = file + ext;
						}
						existsFile = true;
						break;
					}
				}

				if(!existsFile){
					console.error(`文件${file}不存在`);
					if(depChain.length){
						console.log(`被文件${depChain[depChain.length - 1]}依赖`);
					}
					callback();
					return;
				}

				if(loadCache[file]){
					loadCache[file].depChains.push(depChain);
					callback();
					return;
				}

				var mod = loadCache[file] = {
					status: LoadStatus.loading,
					depChains: [depChain]
				};

				loader(file, function(content){
					var innerDeps = [];
					var outerDeps = [];
					var fileDir = path.dirname(file);
					jsDeps(content).forEach(function(item){
						if(/^\.{1,2}\//.test(item)){
							innerDeps.push(path.resolve(fileDir, item));
						}else{
							outerDeps.push(item);
						}
					});

					mod.content = content;
					mod.innerDeps = innerDeps;
					mod.outerDeps = outerDeps;
					mod.status = LoadStatus.complete;

					load(innerDeps, [].concat(depChain, file), callback);
				});
			};
		})).complete(callback);
	})(files, [], function(){
		callback(loadCache, extensionFileHash);
	});
};