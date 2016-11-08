loader.define("react-native@0.21/Libraries/ReactNative/ReactNativeTagHandles.js", ["react-native@0.21/Users/lifan/work-test/sss3/rn/node_modules/fbjs/lib/invariant.js", "react-native@0.21/Users/lifan/work-test/sss3/rn/node_modules/fbjs/lib/warning.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/ReactNative/ReactNativeTagHandles.js
	function (__inner_require__, exports, module) {
		var invariant = require('react-native@0.21/Users/lifan/work-test/sss3/rn/node_modules/fbjs/lib/invariant.js');
		var warning = require('react-native@0.21/Users/lifan/work-test/sss3/rn/node_modules/fbjs/lib/warning.js');

		var INITIAL_TAG_COUNT = 1;
		var NATIVE_TOP_ROOT_ID_SEPARATOR = '{TOP_LEVEL}';
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

			associateRootNodeIDWithMountedNodeHandle: function associateRootNodeIDWithMountedNodeHandle(rootNodeID, tag) {
				warning(rootNodeID && tag, 'Root node or tag is null when associating');
				if (rootNodeID && tag) {
					ReactNativeTagHandles.tagToRootNodeID[tag] = rootNodeID;
					ReactNativeTagHandles.rootNodeIDToTag[rootNodeID] = tag;
				}
			},

			allocateRootNodeIDForTag: function allocateRootNodeIDForTag(tag) {
				invariant(this.reactTagIsNativeTopRootID(tag), 'Expect a native root tag, instead got ', tag);

				return '.r[' + tag + ']' + NATIVE_TOP_ROOT_ID_SEPARATOR;
			},

			reactTagIsNativeTopRootID: function reactTagIsNativeTopRootID(reactTag) {

				return reactTag % 10 === 1;
			},

			getNativeTopRootIDFromNodeID: function getNativeTopRootIDFromNodeID(nodeID) {
				if (!nodeID) {
					return null;
				}
				var index = nodeID.indexOf(NATIVE_TOP_ROOT_ID_SEPARATOR);
				if (index === -1) {
					return null;
				}
				return nodeID.substr(0, index + NATIVE_TOP_ROOT_ID_SEPARATOR.length);
			},

			mostRecentMountedNodeHandleForRootNodeID: function mostRecentMountedNodeHandleForRootNodeID(rootNodeID) {
				return ReactNativeTagHandles.rootNodeIDToTag[rootNodeID];
			},

			tagToRootNodeID: [],

			rootNodeIDToTag: {} };

		module.exports = ReactNativeTagHandles;
	}];
});