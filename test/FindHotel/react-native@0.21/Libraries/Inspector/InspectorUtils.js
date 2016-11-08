// react-native@0.21/Libraries/Inspector/InspectorUtils.js
loader.define("react-native@0.21", "Libraries/Inspector/InspectorUtils.js", "", function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Inspector/InspectorUtils.js
	function (__inner_require__, exports, module) {
		var ReactInstanceHandles = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactInstanceHandles.js');
		var ReactInstanceMap = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactInstanceMap.js');
		var ReactNativeMount = require('react-native@0.21/Libraries/ReactNative/ReactNativeMount.js');
		var ReactNativeTagHandles = require('react-native@0.21/Libraries/ReactNative/ReactNativeTagHandles.js');

		function traverseOwnerTreeUp(hierarchy, instance) {
			if (instance) {
				hierarchy.unshift(instance);
				traverseOwnerTreeUp(hierarchy, instance._currentElement._owner);
			}
		}

		function findInstance(component, targetID) {
			if (targetID === findRootNodeID(component)) {
				return component;
			}
			if (component._renderedComponent) {
				return findInstance(component._renderedComponent, targetID);
			} else {
				for (var key in component._renderedChildren) {
					var child = component._renderedChildren[key];
					if (ReactInstanceHandles.isAncestorIDOf(findRootNodeID(child), targetID)) {
						var instance = findInstance(child, targetID);
						if (instance) {
							return instance;
						}
					}
				}
			}
		}

		function findRootNodeID(component) {
			var internalInstance = ReactInstanceMap.get(component);
			return internalInstance ? internalInstance._rootNodeID : component._rootNodeID;
		}

		function findInstanceByNativeTag(rootTag, nativeTag) {
			var containerID = ReactNativeTagHandles.tagToRootNodeID[rootTag];
			var rootInstance = ReactNativeMount._instancesByContainerID[containerID];
			var targetID = ReactNativeTagHandles.tagToRootNodeID[nativeTag];
			if (!targetID) {
				return undefined;
			}
			return findInstance(rootInstance, targetID);
		}

		function getOwnerHierarchy(instance) {
			var hierarchy = [];
			traverseOwnerTreeUp(hierarchy, instance);
			return hierarchy;
		}

		module.exports = { findInstanceByNativeTag: findInstanceByNativeTag, getOwnerHierarchy: getOwnerHierarchy };
	}];
});