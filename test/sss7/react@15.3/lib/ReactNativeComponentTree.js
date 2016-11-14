loader.define("react@15.3/lib/ReactNativeComponentTree.js", ["react@15.3/lib/reactProdInvariant.js", "fbjs@0.8/lib/invariant.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/ReactNativeComponentTree.js
		function(__inner_require__, exports, module){
			var _prodInvariant = require('react@15.3/lib/reactProdInvariant.js');
			
			var invariant = require('fbjs@0.8/lib/invariant.js');
			
			var instanceCache = {};
			
			/**
			 * Drill down (through composites and empty components) until we get a host or
			 * host text component.
			 *
			 * This is pretty polymorphic but unavoidable with the current structure we have
			 * for `_renderedChildren`.
			 */
			function getRenderedHostOrTextFromComponent(component) {
			  var rendered;
			  while (rendered = component._renderedComponent) {
			    component = rendered;
			  }
			  return component;
			}
			
			/**
			 * Populate `_hostNode` on the rendered host/text component with the given
			 * DOM node. The passed `inst` can be a composite.
			 */
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
			  uncacheNode: uncacheNode
			};
			
			module.exports = ReactNativeComponentTree;
		}
	];
});