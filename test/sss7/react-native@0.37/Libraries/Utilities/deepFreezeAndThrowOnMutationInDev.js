loader.define("react-native@0.37/Libraries/Utilities/deepFreezeAndThrowOnMutationInDev.js", [], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Utilities/deepFreezeAndThrowOnMutationInDev.js
	function (__inner_require__, exports, module) {
		function deepFreezeAndThrowOnMutationInDev(object) {}

		function throwOnImmutableMutation(key, value) {
			throw Error('You attempted to set the key `' + key + '` with the value `' + JSON.stringify(value) + '` on an object that is meant to be immutable ' + 'and has been frozen.');
		}

		function identity(value) {
			return value;
		}

		module.exports = deepFreezeAndThrowOnMutationInDev;
	}];
});