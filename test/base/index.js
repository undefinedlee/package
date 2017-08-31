var path = require("path");
var bundle = require("../../dist");
var loaderCss = require("./loader/css");
var loaderJs = require("./loader/js");
var loaderHtml = require("./loader/html");
var loaderJson = require("./loader/json");
var loaderImage = require("./loader/image");
var loaderFont = require("./loader/font");
var pluginPackage = require("./plugin/package");

bundle({
    // 项目根目录
    root: path.join(__dirname, "src"),
    // 打包入口（支持glob语法）
    entries: [
        "views/*/index.js",
        // "components/*/index.js"
    ],
    // 打包输出地址
    output: path.join(__dirname, "output"),
    // 各种文件对应的加载器
    loaders: [{
        test: /\.css$/,
        loader: [
            loaderCss
        ]
    }, {
        test: /\.js$/,
        loader: [
            loaderJs
        ]
    }, {
        test: /\.html$/,
        loader: [
            loaderHtml
        ]
    }, {
        test: /\.json$/,
        loader: [
            loaderJson
        ]
    }, {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: [
            loaderImage
        ]
    }, {
        test: /\.ttf$/,
        loader: [
            loaderFont
        ]
    }],
    // 插件
    plugins: []
}).then(function () {
    console.log("打包成功");
});