"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (versionRule, packageVersion) {
	var originalVersionRule = versionRule;
	versionRule = versionRule.split("-")[0];

	if (/^\d+\.\d+\.\d+$/.test(versionRule)) {
		return originalVersionRule;
	} else if (/^\~\d+(\.\d+){0,2}$/.test(versionRule)) {
		return versionRule.replace(/^\~/, "").split(".").slice(0, 2).join(".");
	} else if (/^\^\d+(\.\d+){0,2}$/.test(versionRule)) {
		versionRule = versionRule.replace(/^\^/, "").split(".");
		return versionRule.slice(0, versionRule.findIndex(item => item != 0) + 1).join(".");
	} else if (/^\d+(\.\d+)?\.x$/.test(versionRule)) {
		return versionRule.replace(/\.x$/, "");
	} else {
		_cliConsole2.default.warn(`版本规则${versionRule}暂时不支持，转换为指定版本${packageVersion}进行打包`);
		return packageVersion;
	}
};

var _cliConsole = require("cli-console");

var _cliConsole2 = _interopRequireDefault(_cliConsole);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }