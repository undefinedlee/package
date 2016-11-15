__d("react@15.3/lib/ReactNativeTagHandles.js", ["react@15.3/lib/reactProdInvariant.js", "fbjs@0.8/lib/invariant.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/ReactNativeTagHandles.js
		function(__inner_require__, exports, module){
			var _prodInvariant = require('react@15.3/lib/reactProdInvariant.js');
			
			var invariant = require('fbjs@0.8/lib/invariant.js');
			
			/**
			 * Keeps track of allocating and associating native "tags" which are numeric,
			 * unique view IDs. All the native tags are negative numbers, to avoid
			 * collisions, but in the JS we keep track of them as positive integers to store
			 * them effectively in Arrays. So we must refer to them as "inverses" of the
			 * native tags (that are * normally negative).
			 *
			 * It *must* be the case that every `rootNodeID` always maps to the exact same
			 * `tag` forever. The easiest way to accomplish this is to never delete
			 * anything from this table.
			 * Why: Because `dangerouslyReplaceNodeWithMarkupByID` relies on being able to
			 * unmount a component with a `rootNodeID`, then mount a new one in its place,
			 */
			var INITIAL_TAG_COUNT = 1;
			var ReactNativeTagHandles = {
			  tagsStartAt: INITIAL_TAG_COUNT,
			  tagCount: INITIAL_TAG_COUNT,
			
			  allocateTag: function allocateTag() {
			    // Skip over root IDs as those are reserved for native
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
			    // We reserve all tags that are 1 mod 10 for native root views
			    return reactTag % 10 === 1;
			  }
			};
			
			module.exports = ReactNativeTagHandles;
		}
	];
});