"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (bundleInfo, callback) {
	let files = Object.keys(bundleInfo.md5Hash).map(function (file) {
		return {
			file: _path2.default.join(bundleInfo.packageName, file),
			md5: bundleInfo.md5Hash[file],
			size: bundleInfo.sizeHash[file],
			deps: bundleInfo.depsHash[file].sync,
			asyncDeps: bundleInfo.depsHash[file].async
		};
	});

	return new Promise(function (resolve, reject) {
		_fs2.default.writeFile(_path2.default.join(bundleInfo.output, "deps.json"), JSON.stringify({
			files
		}), function (err) {
			if (err) {
				_cliConsole2.default.error(`创建项目${bundleInfo.packageName}打包信息文件时出错`);
				_cliConsole2.default.log(err);
				reject(err);
			}
			resolve();
		});
	});
};

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _nodePearls = require("node-pearls");

var _nodePearls2 = _interopRequireDefault(_nodePearls);

var _cliConsole = require("cli-console");

var _cliConsole2 = _interopRequireDefault(_cliConsole);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }