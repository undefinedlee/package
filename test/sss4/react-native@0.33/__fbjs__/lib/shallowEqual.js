loader.define("react-native@0.33/__fbjs__/lib/shallowEqual.js", [], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// __fbjs__/lib/shallowEqual.js
	function (__inner_require__, exports, module) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;

		function is(x, y) {

			if (x === y) {

				return x !== 0 || y !== 0 || 1 / x === 1 / y;
			} else {

				return x !== x && y !== y;
			}
		}

		function shallowEqual(objA, objB) {
			if (is(objA, objB)) {
				return true;
			}

			if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
				return false;
			}

			var keysA = Object.keys(objA);
			var keysB = Object.keys(objB);

			if (keysA.length !== keysB.length) {
				return false;
			}

			for (var i = 0; i < keysA.length; i++) {
				if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
					return false;
				}
			}

			return true;
		}

		module.exports = shallowEqual;
	}];
});