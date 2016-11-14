loader.define("react-native@0.33/__react__/lib/ReactNativeComponentTree.js", ["react-native@0.33/__react__/lib/reactProdInvariant.js", "react-native@0.33/__fbjs__/lib/invariant.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// __react__/lib/ReactNativeComponentTree.js
	function (__inner_require__, exports, module) {
		var _prodInvariant = require('react-native@0.33/__react__/lib/reactProdInvariant.js');

		var invariant = require('react-native@0.33/__fbjs__/lib/invariant.js');

		var instanceCache = {};

		function getRenderedHostOrTextFromComponent(component) {
			var rendered;
			while (rendered = component._renderedComponent) {
				component = rendered;
			}
			return component;
		}

		function precacheNode(inst, tag) {
			var nativeInst = getRenderedHostOrTextFromComponent(inst);
			instanceCache[tag] = nativeInst;
		}

		function uncacheNode(inst) {
			var tag = inst._rootNodeID;
			if (tag) {
				delete instanceCache[tag];
			}
		}

		function getInstanceFromTag(tag) {
			return instanceCache[tag] || null;
		}

		function getTagFromInstance(inst) {
			!inst._rootNodeID ? process.env.NODE_ENV !== 'production' ? invariant(false, 'All native instances should have a tag.') : _prodInvariant('17') : void 0;
			return inst._rootNodeID;
		}

		var ReactNativeComponentTree = {
			getClosestInstanceFromNode: getInstanceFromTag,
			getInstanceFromNode: getInstanceFromTag,
			getNodeFromInstance: getTagFromInstance,
			precacheNode: precacheNode,
			uncacheNode: uncacheNode };

		module.exports = ReactNativeComponentTree;
	}];
});