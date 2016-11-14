loader.define("react-native@0.21/__react__/lib/ReactInstanceMap.js", [], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// __react__/lib/ReactInstanceMap.js
	function (__inner_require__, exports, module) {
		var ReactInstanceMap = {

			remove: function remove(key) {
				key._reactInternalInstance = undefined;
			},

			get: function get(key) {
				return key._reactInternalInstance;
			},

			has: function has(key) {
				return key._reactInternalInstance !== undefined;
			},

			set: function set(key, value) {
				key._reactInternalInstance = value;
			} };

		module.exports = ReactInstanceMap;
	}];
});