"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _glob = require("glob");

var _glob2 = _interopRequireDefault(_glob);

var _nodePearls = require("node-pearls");

var _nodePearls2 = _interopRequireDefault(_nodePearls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (() => {
	var _ref = _asyncToGenerator(function* (projectPath, entries) {
		return Promise.all(entries.map(function (entry) {
			return new Promise(function (resolve, reject) {
				(0, _glob2.default)(entry, {
					cwd: projectPath,
					ignore: "node_modules/**/*"
				}, function (err, files) {
					if (err) {
						reject(err);
						return;
					}

					resolve(files.map(file => _path2.default.join(projectPath, file)));
				});
			});
		})).then(function (params) {
			var entries = [];
			params.forEach(files => {
				entries = entries.concat(files || []);
			});

			return entries;
		});
	});

	return function (_x, _x2) {
		return _ref.apply(this, arguments);
	};
})();