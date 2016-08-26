export default function(entries, loadCache){
	// 需要单独打包的文件列表
	var singleFiles = [].concat(entries);
	
	// 查找需要单独打包的文件
	function findSingleFile(){
		var hasNewSingleFile = false;
		for(let file in loadCache){
			if(singleFiles.indexOf(file) === -1){
				let nearestDeps = {};
				// 遍历当前文件的被依赖链列表，找出所有最短依赖
				loadCache[file].depChains.forEach(depChain => {
					for(let i = depChain.length - 1; i >= 0; i --){
						let file = depChain[i];
						if(singleFiles.indexOf(file) !== -1){
							nearestDeps[file] = true;
							break;
						}
					}
				});

				// 如果有两个以上单独打包的文件依赖，则此文件也单独打包
				if(Object.keys(nearestDeps).length > 1){
					singleFiles.push(file);
					hasNewSingleFile = true;
				}
			}
		}

		return hasNewSingleFile;
	}

	// 重复遍历直到所有需要单独打包的文件被找出
	var hasNewSingleFile;
	do{
		hasNewSingleFile = findSingleFile();
	}while(hasNewSingleFile);

	return singleFiles;
};