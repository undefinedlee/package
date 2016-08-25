var fs = require("fs");
var path = require("path");
var pack = require("../index");

pack(path.join(fs.realpathSync("."), "base"));