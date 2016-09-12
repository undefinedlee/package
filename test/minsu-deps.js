import getDeps from "../server/get-deps";
var express = require('express');
var app = express();

// app.use(function(req, res, next){
//         var path = req.originalUrl;
//         if(path.indexOf(comboRemark) !== -1){
//         	// combo请求
//     		path = path.replace(comboRemark, "___comboRemark___").split("?")[0].replace("___comboRemark___", comboRemark);
//             res.set("Content-Type", getMime(path));
//             path = path.split(comboRemark);
//             combo(path[0].replace(/^(\\|\/)/, ""), path[1].split(splitRemark), function(code){
//                     res.send(code);
//             });
//         } else {
//         	// 单文件请求
//         	res.set("Access-Control-Allow-Origin", "*");
//         	read(path, function(err, data){
//         		if(err){
//         			console.log(path);
//         			console.log(err);
//         		}else{
// 	        		res.set("Content-Type", data.contentType);
// 	        		res.send(data.data);
// 	        	}
//         	});
//         }
// });
app.get('/', function (req, res) {
	var url = req.query.url;
	console.log(url);
	var list = getDeps(url, "/Users/lifan/work-elong/h5-eroom-enjoy/MinSu/web/h5/_bundle");
	res.send(`loader.jsonp["${url}"](${JSON.stringify(list)})`);
});

app.listen(9999);

//console.log(getDeps("MinSu@0.0.1/_build/views/list/index.js", "/Users/lifan/work-elong/h5-eroom-enjoy/MinSu/web/h5/_bundle"));