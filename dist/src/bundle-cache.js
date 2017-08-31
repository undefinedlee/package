"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.check = check;
exports.update = update;

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _semver = require("semver");

var _semver2 = _interopRequireDefault(_semver);

var _nodePearls = require("node-pearls");

var _nodePearls2 = _interopRequireDefault(_nodePearls);

var _cliConsole = require("cli-console");

var _cliConsole2 = _interopRequireDefault(_cliConsole);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const cacheFileName = ".package-list.json";
/**
 * 判断是否需要打包
 * @param {string} output - 打包输出的目录
 * @param {string} packageName - 要检测的包名（projectName@version）
 * @param {string} version - 要检测的项目的版本
 * @param {string[]} [entries] - 要检测的包的入口文件列表
 * @returns {boolean|string[]} - false or all entries
 */
function check(output, packageName, version, entries) {
  const file = _path2.default.resolve(output, cacheFileName);

  if (!_fs2.default.existsSync(file)) {
    return entries;
  } else {
    let lastVersion = require(file)[packageName];
    if (lastVersion) {
      let hasNewEntry = false;
      entries.forEach(function (entry) {
        if (lastVersion.entries.indexOf(entry) === -1) {
          hasNewEntry = true;
          lastVersion.entries.push(entry);
        }
      });

      // 上次打包版本>=当前版本
      if (_semver2.default.gte(lastVersion.version, version)) {
        if (hasNewEntry) {
          if (_semver2.default.gt(lastVersion.version, version)) {
            _cliConsole2.default.warn(`打${packageName}包时，当前版本${version}低于上次打包版本${lastVersion.version}`);
          }
          return lastVersion.entries;
        } else {
          return false;
        }
      } else {
        return lastVersion.entries;
      }
    } else {
      return entries;
    }
  }
}
/**
 * 更新模块打包信息
 * @param {string} output - 打包输出的目录
 * @param {string} packageName - 要检测的包名
 * @param {string} version - 要检测的包的版本
 * @param {string[]} [entries] - 要检测的包的入口文件列表
 */
function update(output, packageName, version, entries) {
  const file = _path2.default.resolve(output, cacheFileName);

  var hash;
  if (_fs2.default.existsSync(file)) {
    hash = require(file);
  } else {
    hash = {};
  }

  hash[packageName] = {
    version: version,
    entries: entries
  };

  _nodePearls2.default.mkdirs.sync(_path2.default.dirname(file));
  _fs2.default.writeFileSync(file, JSON.stringify(hash));
}