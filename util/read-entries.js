import path from "path";
import glob from "glob";
import asyncList from "./async-list";

export default function(projectPath, entries, callback){
	asyncList(entries.map(entry => {
		return function(callback){
			glob(entry, {
				cwd: projectPath
			}, function(err, files){
				if(err){
					throw err;
				}

				callback(files.map(file => path.join(projectPath, file)));
			});
		};
	})).complete(function(...params){
		var entries = [];
		params.forEach(files => {
			entries = entries.concat(files || []);
		});

		callback(entries);
	});
};