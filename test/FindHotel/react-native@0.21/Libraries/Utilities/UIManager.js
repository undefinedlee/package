// react-native@0.21/Libraries/Utilities/UIManager.js
loader.define("react-native@0.21", "Libraries/Utilities/UIManager.js", "", function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Utilities/UIManager.js
	function (__inner_require__, exports, module) {
		var UIManager = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').UIManager;

		if (!UIManager.setChildren) {

			UIManager._cachedIndexArray = function (size) {
				var cachedResult = this._cachedIndexArray._cache[size];
				if (!cachedResult) {
					var arr = [];
					for (var i = 0; i < size; i++) {
						arr[i] = i;
					}
					this._cachedIndexArray._cache[size] = arr;
					return arr;
				} else {
					return cachedResult;
				}
			};
			UIManager._cachedIndexArray._cache = {};

			UIManager.setChildren = function (containerTag, createdTags) {
				var indexes = this._cachedIndexArray(createdTags.length);
				UIManager.manageChildren(containerTag, null, null, createdTags, indexes, null);
			};
		}

		module.exports = UIManager;
	}];
});