loader.define("react-native@0.37/lib/UIManagerStatTracker.js", ["react-native@0.37/Libraries/ReactNative/UIManager.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// lib/UIManagerStatTracker.js
	function (__inner_require__, exports, module) {
		module.exports = __inner_require__(1 /*Libraries/ReactNative/UIManagerStatTracker.js*/);
	}, // Libraries/ReactNative/UIManagerStatTracker.js
	function (__inner_require__, exports, module) {
		var UIManager = require('react-native@0.37/Libraries/ReactNative/UIManager.js');

		var installed = false;
		var UIManagerStatTracker = {
			install: function install() {
				if (installed) {
					return;
				}
				installed = true;
				var statLogHandle;
				var stats = {};
				function printStats() {
					console.log({ UIManagerStatTracker: stats });
					statLogHandle = null;
				}
				function incStat(key, increment) {
					stats[key] = (stats[key] || 0) + increment;
					if (!statLogHandle) {
						statLogHandle = setImmediate(printStats);
					}
				}
				var createViewOrig = UIManager.createView;
				UIManager.createView = function (tag, className, rootTag, props) {
					incStat('createView', 1);
					incStat('setProp', Object.keys(props || []).length);
					createViewOrig(tag, className, rootTag, props);
				};
				var updateViewOrig = UIManager.updateView;
				UIManager.updateView = function (tag, className, props) {
					incStat('updateView', 1);
					incStat('setProp', Object.keys(props || []).length);
					updateViewOrig(tag, className, props);
				};
				var manageChildrenOrig = UIManager.manageChildren;
				UIManager.manageChildren = function (tag, moveFrom, moveTo, addTags, addIndices, remove) {
					incStat('manageChildren', 1);
					incStat('move', Object.keys(moveFrom || []).length);
					incStat('remove', Object.keys(remove || []).length);
					manageChildrenOrig(tag, moveFrom, moveTo, addTags, addIndices, remove);
				};
			} };

		module.exports = UIManagerStatTracker;
	}];
});