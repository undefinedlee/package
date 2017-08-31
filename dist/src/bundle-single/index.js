"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _tpl = require("../../util/tpl");

var _tpl2 = _interopRequireDefault(_tpl);

var _nodePearls = require("node-pearls");

var _nodePearls2 = _interopRequireDefault(_nodePearls);

var _parseOuterDeps = require("../parse-outer-deps");

var _parseOuterDeps2 = _interopRequireDefault(_parseOuterDeps);

var _cliConsole = require("cli-console");

var _cliConsole2 = _interopRequireDefault(_cliConsole);

var _convertSourceMap = require("convert-source-map");

var _convertSourceMap2 = _interopRequireDefault(_convertSourceMap);

var _enjoySourceMap = require("enjoy-source-map");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// 替换开头的分隔符
var prefixSepReg = new RegExp("^\\" + _path2.default.sep);

// // 获取count个TAB键
// function getTab(count) {
//     return new Array(count + 1).join("	");
// }

// 内部模块模板
const innerModTpl = _fs2.default.readFileSync(_path2.default.resolve(__dirname, "inner-mod.tpl"), {
    encoding: "utf8"
});
// 独立模块模板
const singleModTpl = _fs2.default.readFileSync(_path2.default.resolve(__dirname, "single-mod.tpl"), {
    encoding: "utf8"
});

exports.default = (() => {
    var _ref = _asyncToGenerator(function* (file, bundleInfo) {
        function parseModId(file) {
            if (file.indexOf(bundleInfo.packagePath) === 0) {
                // 同一个包内的文件
                file = file.replace(bundleInfo.packagePath, "").replace(prefixSepReg, "");
            } else {
                // 非当前npm包以内的相对依赖
                // 常用于一些特殊模块打包，如react-native，会把react、fbjs模块作为相对模块打进来
                let projectDir = _path2.default.dirname(bundleInfo.projectPath);
                if (file.indexOf(projectDir) === 0) {
                    file = file.replace(projectDir, "");
                } else {
                    let projectPaths = bundleInfo.projectPath.split("/");
                    let filePaths = file.split("/");
                    for (let i = 0; i < projectPaths.length; i++) {
                        if (filePaths[i] === projectPaths[i]) {
                            filePaths[i] = null;
                        } else {
                            break;
                        }
                    }
                    file = filePaths.filter(item => item).join("/");
                }

                file = file.replace(prefixSepReg, "");

                file = file.split("/");
                file[0] = "__" + file[0] + "__";
                file = file.join("/");
            }

            return file;
        }

        // 找到所有内部依赖的文件
        var mods = [];
        (function parseDeps(file) {
            let mod = bundleInfo.loadCache[file];

            if (mod) {
                mods.push(file);

                mod.innerDeps.forEach(({
                    value: file
                }) => {
                    // 检测mods中是否存在，是为了避免循环依赖
                    if ((!bundleInfo.isCohesion || bundleInfo.singleFiles.indexOf(file) === -1) && mods.indexOf(file) === -1) {
                        parseDeps(file);
                    }
                });
            } else {
                _cliConsole2.default.error(`没有找到加载的文件${file}`);
            }
        })(file);

        var tempBundleInfo = bundleInfo.createTemp({
            mods: mods
        });
        yield bundleInfo.plugin.task("bundle-mods", tempBundleInfo);
        mods = tempBundleInfo.mods;

        var deps = [];
        var asyncDeps = [];
        var dynamicDeps = {};
        var codes = yield Promise.all(mods.map((() => {
            var _ref2 = _asyncToGenerator(function* (mod) {
                let modDir = _path2.default.dirname(mod);

                let file = parseModId(mod);
                let content = bundleInfo.config.depsAnalyzer.replace(bundleInfo.loadCache[mod].content, function (info) {
                    var isAsync = info.isAsync,
                        depPath = info.value;

                    // 加入依赖列表

                    function pushDeps(modId) {
                        if (isAsync) {
                            if (asyncDeps.indexOf(modId) === -1) {
                                asyncDeps.push(modId);
                            }
                        } else {
                            if (deps.indexOf(modId) === -1) {
                                deps.push(modId);
                            }
                        }
                    }

                    // 如果绝对依赖的是当前项目，则转为相对依赖
                    var _depPath = depPath.split("/");
                    if (_depPath.shift() === bundleInfo.packageJson.name) {
                        if (_depPath.length === 0) {
                            _depPath[0] = bundleInfo.packageJson.main || "index.js";
                        }

                        _depPath = _path2.default.join(bundleInfo.projectPath, _depPath.join("/"));
                        depPath = _path2.default.relative(modDir, _depPath);
                        if (!/^\.{1,2}\//.test(depPath)) {
                            depPath = "./" + depPath;
                        }
                    }

                    if (/^\.{1,2}\//.test(depPath)) {
                        depPath = _path2.default.resolve(modDir, depPath);
                        depPath = bundleInfo.extensionFileHash[depPath] || depPath;

                        let parse = function parse(depPath) {
                            if (!bundleInfo.isCohesion || bundleInfo.singleFiles.indexOf(depPath) === -1) {
                                return {
                                    isInner: true,
                                    value: mods.indexOf(depPath),
                                    comments: parseModId(depPath)
                                };
                            } else {
                                let modId = [bundleInfo.packageName, parseModId(depPath)].join("/");
                                pushDeps(modId);
                                return {
                                    value: modId
                                };
                            }
                        };

                        if (depPath instanceof Array) {
                            // 如果是多匹配
                            let hasDynamicDep = false;
                            let multipleDeps = depPath.map(function (_file) {
                                if (!bundleInfo.isCohesion || bundleInfo.singleFiles.indexOf(_file) === -1) {
                                    // 内部依赖
                                    hasDynamicDep = true;
                                    let index = mods.indexOf(_file);
                                    if (index === -1) {
                                        // 内部依赖未发现模块
                                        // dynamicDeps[parseModId(file)] = mods.length;
                                        _cliConsole2.default.error(`动态依赖文件${_file}在独立文件${file}内未发现`);
                                        // return null;
                                    } else {
                                        // 内部依赖已发现模块
                                        dynamicDeps[parseModId(_file)] = index;
                                        // return {
                                        //     isInner: true,
                                        //     value: index
                                        // };
                                    }
                                    return null;
                                } else {
                                    // 外部依赖
                                    let modId = [bundleInfo.packageName, parseModId(_file)].join("/");
                                    pushDeps(modId);
                                    return {
                                        value: modId
                                    };
                                }
                            }).filter(item => !!item);

                            if (hasDynamicDep) {
                                return {
                                    isInner: true,
                                    value: mods.length,
                                    comments: "内部动态依赖对应表"
                                };
                            } else {
                                return multipleDeps;
                            }
                        } else {
                            return parse(depPath);
                        }
                    } else {
                        // 外部依赖
                        let modId = (0, _parseOuterDeps2.default)(depPath, bundleInfo.projectPath, bundleInfo.packageJson, mod);
                        if (modId) {
                            pushDeps(modId);

                            return {
                                value: modId
                            };
                        } else {
                            return {
                                value: depPath
                            };
                        }
                    }
                });

                let tempBundleInfo = bundleInfo.createTemp({
                    file,
                    content
                });

                let code = yield bundleInfo.plugin.task("before-render-inner-code", tempBundleInfo);

                file = tempBundleInfo.file;
                content = tempBundleInfo.content;

                if (typeof code === "string") {
                    return code;
                }

                return (0, _tpl2.default)(innerModTpl, {
                    file,
                    content
                });
            });

            return function (_x3) {
                return _ref2.apply(this, arguments);
            };
        })()));

        if (Object.keys(dynamicDeps).length) {
            let code = (0, _tpl2.default)(innerModTpl, {
                file: "内部动态依赖对应表",
                content: "__inner_require__.dynamicHash = " + JSON.stringify(dynamicDeps)
            });

            let sourcemapComment = "";
            if (process.env.SM) {
                let relativeFile = "/" + _path2.default.join(bundleInfo.packageJson.name, file.replace(bundleInfo.packagePath, ""));
                relativeFile = _path2.default.join(relativeFile.substring(0, relativeFile.lastIndexOf(_path2.default.sep) + 1), "__dynamic_deps_hash__");

                sourcemapComment = "\n" + _convertSourceMap2.default.fromObject({
                    version: 3,
                    file: relativeFile,
                    sourceRoot: "",
                    sources: [relativeFile],
                    names: [],
                    mappings: "AAAA",
                    sourcesContent: [code]
                }).toComment();
            }

            codes.push(code + sourcemapComment);
        }

        file = parseModId(file);

        // 过滤掉同步依赖的模块
        asyncDeps = asyncDeps.filter(function (item) {
            return deps.indexOf(item) === -1;
        });

        var tempBundleInfo = bundleInfo.createTemp({
            file,
            codes,
            deps,
            asyncDeps
        });

        var code = yield bundleInfo.plugin.task("before-render-code", tempBundleInfo);

        file = tempBundleInfo.file;
        codes = tempBundleInfo.codes;
        deps = tempBundleInfo.deps;
        asyncDeps = tempBundleInfo.asyncDeps;

        if (typeof code !== "string") {
            code = (0, _tpl2.default)(singleModTpl, {
                modId: [bundleInfo.packageName, file].join("/"),
                mods: (0, _enjoySourceMap.overWriteJoin)(codes, ",\n")
            });
        }

        var tempBundleInfo = bundleInfo.createTemp({
            file,
            code
        });
        var newCode = yield bundleInfo.plugin.task("before-write-bundle", tempBundleInfo);
        file = tempBundleInfo.file;
        code = tempBundleInfo.code;

        if (typeof newCode === "string") {
            code = newCode;
        }

        return yield new Promise(function (resolve, reject) {
            let writeFile = _path2.default.join(bundleInfo.output, file);
            _nodePearls2.default.mkdirs(_path2.default.dirname(writeFile), function () {
                _fs2.default.writeFile(writeFile, code, function (err) {
                    if (err) {
                        _cliConsole2.default.error(`文件${writeFile}写入失败`);
                        reject(err);
                    }

                    resolve({
                        relativeFile: file,
                        md5: _nodePearls2.default.md5(code),
                        size: code.length,
                        deps,
                        asyncDeps
                    });
                });
            });
        });
    });

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
})();