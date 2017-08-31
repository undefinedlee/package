"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (projectPath, versionRule) {
	// 项目配置
	const packageJson = _nodePearls2.default.readJson.sync(_path2.default.resolve(projectPath, "package.json"));
	if (!packageJson) {
		_cliConsole2.default.error(`在${projectPath}目录下找不到package.json文件`);
		return;
	}

	// 检测版本号
	if (versionRule) {
		// 如果当前安装的项目版本不是需要的版本，则退出打包
		if (!_semver2.default.satisfies(packageJson.version, versionRule)) {
			_cliConsole2.default.error(`当前安装的项目${packageJson.name}的版本为${packageJson.version}，与打包需要的版本${versionRule}不匹配`);
			return;
		}
	}

	return packageJson;
};

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _semver = require("semver");

var _semver2 = _interopRequireDefault(_semver);

var _cliConsole = require("cli-console");

var _cliConsole2 = _interopRequireDefault(_cliConsole);

var _nodePearls = require("node-pearls");

var _nodePearls2 = _interopRequireDefault(_nodePearls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

/**
 * 检测当前项目项目版本是否符合需要打包的版本，并返回项目描述文件
 * @param {string} projectPath 
 * @param {string} versionRule 
 * @returns {object}
 */