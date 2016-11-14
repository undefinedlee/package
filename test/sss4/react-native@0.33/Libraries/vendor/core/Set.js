loader.define("react-native@0.33/Libraries/vendor/core/Set.js", ["react-native@0.33/Libraries/vendor/core/Map.js", "react-native@0.33/Libraries/vendor/core/toIterator.js", "react-native@0.33/Libraries/vendor/core/_shouldPolyfillES6Collection.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/vendor/core/Set.js
	function (__inner_require__, exports, module) {
		var Map = require('react-native@0.33/Libraries/vendor/core/Map.js');
		var toIterator = require('react-native@0.33/Libraries/vendor/core/toIterator.js');
		var _shouldPolyfillES6Collection = require('react-native@0.33/Libraries/vendor/core/_shouldPolyfillES6Collection.js');

		module.exports = function (global, undefined) {

			if (!_shouldPolyfillES6Collection('Set')) {
				return global.Set;
			}var Set = function () {

				function Set(iterable) {
					babelHelpers.classCallCheck(this, Set);
					if (this == null || typeof this !== 'object' && typeof this !== 'function') {
						throw new TypeError('Wrong set object type.');
					}

					initSet(this);

					if (iterable != null) {
						var it = toIterator(iterable);
						var next;
						while (!(next = it.next()).done) {
							this.add(next.value);
						}
					}
				}babelHelpers.createClass(Set, [{ key: 'add', value: function add(value) {
						this._map.set(value, value);
						this.size = this._map.size;
						return this;
					} }, { key: 'clear', value: function clear() {
						initSet(this);
					} }, { key: 'delete', value: function _delete(value) {
						var ret = this._map.delete(value);
						this.size = this._map.size;
						return ret;
					} }, { key: 'entries', value: function entries() {
						return this._map.entries();
					} }, { key: 'forEach', value: function forEach(callback) {
						var thisArg = arguments[1];
						var it = this._map.keys();
						var next;
						while (!(next = it.next()).done) {
							callback.call(thisArg, next.value, next.value, this);
						}
					} }, { key: 'has', value: function has(value) {
						return this._map.has(value);
					} }, { key: 'values', value: function values() {
						return this._map.values();
					} }]);return Set;
			}();

			Set.prototype[toIterator.ITERATOR_SYMBOL] = Set.prototype.values;

			Set.prototype.keys = Set.prototype.values;

			function initSet(set) {
				set._map = new Map();
				set.size = set._map.size;
			}

			return Set;
		}(Function('return this')());
	}];
});