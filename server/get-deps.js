import fs from "fs";
import path from "path";
import readJson from "../util/read-json";

var vJsonCache = {};
var depsJsonCache = {};
var versionJsonCache = {};

export default function parse(modId, root, status){
	status = status || {};

	let sepIndex = modId.indexOf("/");
	let projectName = modId.substring(0, sepIndex);
	let file = modId.slice(sepIndex + 1);

	let vJson = vJsonCache[projectName] = vJsonCache[projectName] || readJson.sync(path.join(root, projectName, "version.json"));
	let depsJson = depsJsonCache[projectName] = depsJsonCache[projectName] || readJson.sync(path.join(root, projectName, vJson["deps.json"]));
	let versionJson = versionJsonCache[projectName] = versionJsonCache[projectName] || readJson.sync(path.join(root, projectName, vJson["version.json"]));

	modId = [projectName, versionJson[file]].join("/");

	if(status[modId]){
		return [];
	}else{
		let mods = [modId];
		status[modId] = true;

		(depsJson[file] || []).forEach(modId => {
			mods = mods.concat(parse(modId, root, status));
		});

		return mods;
	}
};