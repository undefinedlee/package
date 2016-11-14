loader.define("react-native@0.21/__fbjs__/lib/keyMirror.js", ["react-native@0.21/__fbjs__/lib/invariant.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// __fbjs__/lib/keyMirror.js
	function (__inner_require__, exports, module) {
		var invariant = require('react-native@0.21/__fbjs__/lib/invariant.js');

		var keyMirror = function keyMirror(obj) {
			var ret = {};
			var key;
			!(obj instanceof Object && !Array.isArray(obj)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'keyMirror(...): Argument must be an object.') : invariant(false) : undefined;
			for (key in obj) {
				if (!obj.hasOwnProperty(key)) {
					continue;
				}
				ret[key] = key;
			}
			return ret;
		};

		module.exports = keyMirror;
	}];
});