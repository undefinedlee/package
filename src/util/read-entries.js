import path from "path";
import glob from "glob";
import utils from "node-pearls";

export default async function(projectPath, entries){
	return Promise.all(entries.map(entry => {
		return new Promise(function(resolve, reject){
			glob(entry, {
				cwd: projectPath,
				ignore: "node_modules/**/*"
			}, function(err, files){
				if(err){
					reject(err);
					return;
				}

				resolve(files.map(file => path.join(projectPath, file)));
			});
		});
	})).then(function(params){
		var entries = [];
		params.forEach(files => {
			entries = entries.concat(files || []);
		});

		return entries;
	});
};