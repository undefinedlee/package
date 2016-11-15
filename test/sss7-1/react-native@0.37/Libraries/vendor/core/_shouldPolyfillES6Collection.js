__d("react-native@0.37/Libraries/vendor/core/_shouldPolyfillES6Collection.js", [], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/vendor/core/_shouldPolyfillES6Collection.js
	function (__inner_require__, exports, module) {
		function shouldPolyfillES6Collection(collectionName) {
			var Collection = global[collectionName];
			if (Collection == null) {
				return true;
			}

			if (typeof global.Symbol !== 'function') {
				return true;
			}

			var proto = Collection.prototype;

			return Collection == null || typeof Collection !== 'function' || typeof proto.clear !== 'function' || new Collection().size !== 0 || typeof proto.keys !== 'function' || typeof proto.forEach !== 'function';
		}

		module.exports = shouldPolyfillES6Collection;
	}];
});