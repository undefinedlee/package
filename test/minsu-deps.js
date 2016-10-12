import getDeps from "../server/get-deps";
var express = require('express');
var app = express();
var compress = require('compression')();
var Mime = require("mime");
import fs from "fs";
import path from "path";
var sep = path.sep;
var root = "/Users/lifan/work-elong/h5-eroom-enjoy/MinSu/web/h5";


function getMime(file){
	return Mime.lookup(path.extname(file).replace(/^\./, "")) ||  "text/panel";
}

// 请求一个文件
// 如果本地有，读取本地的
// 如果本地没有，读取测试环境
function read(file, callback){
	file = file.split("?")[0];
	
	// 如果不是开发环境，则直接从本地读取
	fs.readFile(path.join(root, file.replace(/\//g, sep)), function(err, data){
		callback(err, {
			contentType: getMime(file),
			data: data
		});
	});
}

// 读取一个combo文件
function combo(path, files, callback){
        files.forEach(function(file, index){
                files[index] = [path, file + ".js"].join("/").replace(/\/+/g, "/");
        });
        var code = [];

        (function _read(){
                var file = files.shift();
                if(file){
                		read(file, function(err, res){
                            if(err){
                                code.push("/* " + file + " read fail! */");
                                console.error(file + " read fail!");
                            }else{
                                code.push("/* " + file + " */");
                                code.push(res.data);
                            }

                            _read();
                        });
                }else{
                        callback(code.join("\n"));
                }
        })();
}

var comboRemark = "??",
	splitRemark = ",";

app.use(compress);

app.get('/deps', function (req, res) {
	var url = req.query.url;
	console.log(url);
	var list = getDeps(url, root + "/_bundle");
	res.send(`loader.jsonp["${url}"](${JSON.stringify(list)})`);
});

app.use(function(req, res){
	var url = req.originalUrl.replace(/static/, "");
	if(url.indexOf(comboRemark) !== -1){
		// combo请求
		url = url.replace(comboRemark, "___comboRemark___").split("?")[0].replace("___comboRemark___", comboRemark);
		//res.set("Content-Type", getMime(url));
		url = url.split(comboRemark);
		combo(url[0].replace(/^(\\|\/)/, ""), url[1].split(splitRemark), function(code){
			res.send(code);
		});
	} else {
		// 单文件请求
		//res.set("Access-Control-Allow-Origin", "*");
		if(!/\.(png|jpg|gif)$/.test(url)){
			url += ".js";
		}
		read(url.replace(/\/+/g, "/"), function(err, data){
			if(err){
				console.log(url);
				console.log(err);
			}else{
				res.set("Content-Type", data.contentType);
				res.send(data.data);
			}
		});
	}
});

app.listen(9999);