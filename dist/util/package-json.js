"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (projectPath, modName) {
	return packageJsonCache[modName] || function () {
		let modPath = _nodePearls2.default.findNodeModules(projectPath, modName);
		if (!modPath) {
			_cliConsole2.default.error(`从路径${projectPath}找不到模块${modName}`);
		} else {
			let packageJson = _nodePearls2.default.readJson.sync(_path2.default.resolve(modPath, "package.json"));
			if (!packageJson) {
				_cliConsole2.default.error(`在${modPath}目录下找不到package.json文件`);
			}

			return packageJsonCache[modName] = packageJson;
		}

		return packageJsonCache[modName] = {};
	}();
};

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _cliConsole = require("cli-console");

var _cliConsole2 = _interopRequireDefault(_cliConsole);

var _nodePearls = require("node-pearls");

var _nodePearls2 = _interopRequireDefault(_nodePearls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var packageJsonCache = {};