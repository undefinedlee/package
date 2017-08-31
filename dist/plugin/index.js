"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (configPlugins) {
	var tasks = {};

	(configPlugins || []).forEach(plugin => {
		var params;
		if (typeof plugin === "object") {
			params = plugin.params || {};
			plugin = plugin.plugin;
		} else {
			params = {};
		}

		plugin.call({
			plugin(pointName, task) {
				if (!tasks[pointName]) {
					tasks[pointName] = [];
				}

				task.pluginName = plugin.$name;

				tasks[pointName].push(task);
			},
			params
		});
	});

	return {
		task: function task(pointName, info) {
			if (!tasks[pointName]) {
				return Promise.resolve();
			}

			return new Promise(function (resolve, reject) {
				_nodePearls2.default.pipe(tasks[pointName].map(task => {
					return function () {
						try {
							return task.call(this, info, info.customerInfo);
						} catch (e) {
							_cliConsole2.default.error("插件[" + (task.pluginName || "anonymous") + "]在'" + pointName + "'时运行报错");
							_cliConsole2.default.log(e);
						}
					};
				})).start().end(resolve);
			});
		}
	};
};

var _cliConsole = require("cli-console");

var _cliConsole2 = _interopRequireDefault(_cliConsole);

var _nodePearls = require("node-pearls");

var _nodePearls2 = _interopRequireDefault(_nodePearls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;