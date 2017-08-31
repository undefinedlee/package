"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (packageJson) {
	// 由于1.0.0以下的版本属于非稳定版本，所以打包时会有警告提示
	//if(semver.lt(packageJson.version, "1.0.0")){
	if (packageJson.version && packageJson.version.split(".")[0] === "0") {
		// console.warn(`依赖的项目${packageJson.name}的版本为${packageJson.originalVersion || packageJson.version}，属于非稳定版本，请谨慎使用`);
	}
};

var _cliConsole = require("cli-console");

var _cliConsole2 = _interopRequireDefault(_cliConsole);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }