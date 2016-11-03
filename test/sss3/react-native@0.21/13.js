// react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js
loader.define("react-native@0.21", "Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js", "13", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js
		function(__inner_require__, exports, module){
			var BatchedBridge = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridge.js');
			var RemoteModules = BatchedBridge.RemoteModules;
			
			function normalizePrefix(moduleName) {
			  return moduleName.replace(/^(RCT|RK)/, '');
			}
			
			Object.keys(RemoteModules).forEach(function (moduleName) {
			  var strippedName = normalizePrefix(moduleName);
			  if (RemoteModules['RCT' + strippedName] && RemoteModules['RK' + strippedName]) {
			    throw new Error('Module cannot be registered as both RCT and RK: ' + moduleName);
			  }
			  if (strippedName !== moduleName) {
			    RemoteModules[strippedName] = RemoteModules[moduleName];
			    delete RemoteModules[moduleName];
			  }
			});
			
			var NativeModules = {};
			Object.keys(RemoteModules).forEach(function (moduleName) {
			  Object.defineProperty(NativeModules, moduleName, {
			    enumerable: true,
			    get: function get() {
			      var module = RemoteModules[moduleName];
			      if (module && typeof module.moduleID === 'number' && global.nativeRequireModuleConfig) {
			        var json = global.nativeRequireModuleConfig(moduleName);
			        var config = json && JSON.parse(json);
			        module = config && BatchedBridge.processModuleConfig(config, module.moduleID);
			        RemoteModules[moduleName] = module;
			      }
			      return module;
			    } });
			});
			
			var UIManager = NativeModules.UIManager;
			UIManager && Object.keys(UIManager).forEach(function (viewName) {
			  var viewConfig = UIManager[viewName];
			  if (viewConfig.Manager) {
			    (function () {
			      var constants = void 0;
			
			      Object.defineProperty(viewConfig, 'Constants', {
			        enumerable: true,
			        get: function get() {
			          if (constants) {
			            return constants;
			          }
			          constants = {};
			          var viewManager = NativeModules[normalizePrefix(viewConfig.Manager)];
			          viewManager && Object.keys(viewManager).forEach(function (key) {
			            var value = viewManager[key];
			            if (typeof value !== 'function') {
			              constants[key] = value;
			            }
			          });
			          return constants;
			        } });
			
			      var commands = void 0;
			
			      Object.defineProperty(viewConfig, 'Commands', {
			        enumerable: true,
			        get: function get() {
			          if (commands) {
			            return commands;
			          }
			          commands = {};
			          var viewManager = NativeModules[normalizePrefix(viewConfig.Manager)];
			          viewManager && Object.keys(viewManager).forEach(function (key, index) {
			            var value = viewManager[key];
			            if (typeof value === 'function') {
			              commands[key] = index;
			            }
			          });
			          return commands;
			        } });
			    })();
			  }
			});
			
			module.exports = NativeModules;
		}
	];
});