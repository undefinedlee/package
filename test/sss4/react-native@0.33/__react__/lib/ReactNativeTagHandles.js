loader.define("react-native@0.33/__react__/lib/ReactNativeTagHandles.js", ["react-native@0.33/__react__/lib/reactProdInvariant.js", "react-native@0.33/__fbjs__/lib/invariant.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// __react__/lib/ReactNativeTagHandles.js
	function (__inner_require__, exports, module) {
		var _prodInvariant = require('react-native@0.33/__react__/lib/reactProdInvariant.js');

		var invariant = require('react-native@0.33/__fbjs__/lib/invariant.js');

		var INITIAL_TAG_COUNT = 1;
		var ReactNativeTagHandles = {
			tagsStartAt: INITIAL_TAG_COUNT,
			tagCount: INITIAL_TAG_COUNT,

			allocateTag: function allocateTag() {

				while (this.reactTagIsNativeTopRootID(ReactNativeTagHandles.tagCount)) {
					ReactNativeTagHandles.tagCount++;
				}
				var tag = ReactNativeTagHandles.tagCount;
				ReactNativeTagHandles.tagCount++;
				return tag;
			},

			assertRootTag: function assertRootTag(tag) {
				!this.reactTagIsNativeTopRootID(tag) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expect a native root tag, instead got %s', tag) : _prodInvariant('19', tag) : void 0;
			},

			reactTagIsNativeTopRootID: function reactTagIsNativeTopRootID(reactTag) {

				return reactTag % 10 === 1;
			} };

		module.exports = ReactNativeTagHandles;
	}];
});