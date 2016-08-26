import fs from "fs";
import path from "path";
import hex from "../util/hex";
import console from "../util/console";
import readJson from "../util/read-json";
import mkdirs from "../util/mkdirs";

const VERSION_FILE = ".version";
const VERSION_MD5_HASH_FILE = ".version_md5_hash";
var versionCache = {};
var versionMd5HashCache = {};

export default function (output, md5){
	const versionMd5HashFile = path.join(output, VERSION_MD5_HASH_FILE);

	var versionMd5Hash = versionMd5HashCache[output];
	if(!versionMd5Hash){
		versionMd5Hash = readJson.sync(versionMd5HashFile) || {};
	}

	if(versionMd5Hash[md5]){
		return versionMd5Hash[md5];
	}

	const versionFile = path.join(output, VERSION_FILE);

	if(!versionCache[output]){
		if(fs.existsSync(versionFile)){
			versionCache[output] = parseInt(fs.readFileSync(versionFile, {
				encoding: "utf8"
			})) || 0;
		}else{
			versionCache[output] = 0;
		}
	}

	const version = hex(versionCache[output]++);

	versionMd5Hash[md5] = version;

	mkdirs.sync(output);
	fs.writeFileSync(versionFile, versionCache[output]);
	fs.writeFileSync(versionMd5HashFile, JSON.stringify(versionMd5Hash));

	return version;
}