loader.define("react-native@0.37/Libraries/Utilities/differ/sizesDiffer.js", [], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Utilities/differ/sizesDiffer.js
	function (__inner_require__, exports, module) {
		var dummySize = { width: undefined, height: undefined };

		var sizesDiffer = function sizesDiffer(one, two) {
			one = one || dummySize;
			two = two || dummySize;
			return one !== two && (one.width !== two.width || one.height !== two.height);
		};

		module.exports = sizesDiffer;
	}];
});