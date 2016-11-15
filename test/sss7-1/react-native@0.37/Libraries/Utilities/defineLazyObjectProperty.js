__d("react-native@0.37/Libraries/Utilities/defineLazyObjectProperty.js", [], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Utilities/defineLazyObjectProperty.js
	function (__inner_require__, exports, module) {
		function defineLazyObjectProperty(object, name, descriptor) {
			var get = descriptor.get;
			var enumerable = descriptor.enumerable !== false;
			var writable = descriptor.writable !== false;

			var value = void 0;
			var valueSet = false;
			function getValue() {

				if (!valueSet) {
					setValue(get());
				}
				return value;
			}
			function setValue(newValue) {
				value = newValue;
				valueSet = true;
				Object.defineProperty(object, name, {
					value: newValue,
					configurable: true,
					enumerable: enumerable,
					writable: writable });
			}

			Object.defineProperty(object, name, {
				get: getValue,
				set: setValue,
				configurable: true,
				enumerable: enumerable });
		}

		module.exports = defineLazyObjectProperty;
	}];
});