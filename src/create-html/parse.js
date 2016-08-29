import fs from "fs";
import path from "path";

function getProject(id){
	return id.split("/")[0];
}

function getPath(id){
	return id.split("/").pop();
}

function transDeps(projectName, hash){
	var newHash = {};
	for(let key in hash){
		newHash[[projectName, key].join("/")] = hash[key];
	}
	return newHash;
}

function transVersion(projectName, hash){
	var newHash = {};
	for(let key in hash){
		newHash[[projectName, key].join("/")] = [projectName, hash[key]].join("/") + ".js";
	}
	return newHash;
}

var depsHash = {};
var versionHash = {};
var cacheList = {};

function parseDeps(dir, entry){
	var projectName = getProject(entry);
	if(!cacheList[projectName]){
		let newVersions = require(path.join(dir, projectName, "version.json"));
		Object.assign(
			depsHash,
			transDeps(
				projectName,
				require(path.join(dir, projectName, newVersions["deps.json"]))
			)
		);
		Object.assign(
			versionHash,
			transVersion(
				projectName,
				require(path.join(dir, projectName, newVersions["version.json"]))
			)
		);
		cacheList[projectName] = true;
	}

	var deps = depsHash[entry];
	var list = [entry];

	if(deps){
		deps.forEach(dep => {
			parseDeps(dir, dep).forEach(item => {
				if(list.indexOf(item) === -1){
					list.push(item);
				}
			});
		});
	}

	return list;
}

export default function parse(dir, entry){
	var list = parseDeps(dir, entry);
	console.log(list);
	
	list = list.map(item => versionHash[item]);

	console.log(list);
}