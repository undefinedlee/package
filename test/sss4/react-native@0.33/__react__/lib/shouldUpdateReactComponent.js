loader.define("react-native@0.33/__react__/lib/shouldUpdateReactComponent.js", [], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// __react__/lib/shouldUpdateReactComponent.js
	function (__inner_require__, exports, module) {
		function shouldUpdateReactComponent(prevElement, nextElement) {
			var prevEmpty = prevElement === null || prevElement === false;
			var nextEmpty = nextElement === null || nextElement === false;
			if (prevEmpty || nextEmpty) {
				return prevEmpty === nextEmpty;
			}

			var prevType = typeof prevElement;
			var nextType = typeof nextElement;
			if (prevType === 'string' || prevType === 'number') {
				return nextType === 'string' || nextType === 'number';
			} else {
				return nextType === 'object' && prevElement.type === nextElement.type && prevElement.key === nextElement.key;
			}
		}

		module.exports = shouldUpdateReactComponent;
	}];
});