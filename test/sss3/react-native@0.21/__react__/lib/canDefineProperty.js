loader.define("react-native@0.21/__react__/lib/canDefineProperty.js", [], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// __react__/lib/canDefineProperty.js
	function (__inner_require__, exports, module) {
		var canDefineProperty = false;
		if (process.env.NODE_ENV !== 'production') {
			try {
				Object.defineProperty({}, 'x', { get: function get() {} });
				canDefineProperty = true;
			} catch (x) {}
		}

		module.exports = canDefineProperty;
	}];
});