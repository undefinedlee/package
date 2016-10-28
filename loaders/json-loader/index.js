import fs from "fs";
import path from "path";
import Tpl from "../../util/tpl";
const tpl = fs.readFileSync(path.resolve(__dirname, "index.tpl"), {
				encoding: "utf8"
			});

export default function(content){
	return Tpl(tpl, {
		content: content
	});
};