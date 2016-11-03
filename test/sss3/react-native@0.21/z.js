// react-native@0.21/Libraries/ReactNative/findNodeHandle.js
loader.define("react-native@0.21", "Libraries/ReactNative/findNodeHandle.js", "z", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// Libraries/ReactNative/findNodeHandle.js
		function(__inner_require__, exports, module){
			var ReactCurrentOwner = require('react-native@0.21/Users/lifan/work-test/sss3/rn/node_modules/react/lib/ReactCurrentOwner.js');
			var ReactInstanceMap = require('react-native@0.21/Users/lifan/work-test/sss3/rn/node_modules/react/lib/ReactInstanceMap.js');
			var ReactNativeTagHandles = require('react-native@0.21/Libraries/ReactNative/ReactNativeTagHandles.js');
			
			var invariant = require('react-native@0.21/Users/lifan/work-test/sss3/rn/node_modules/fbjs/lib/invariant.js');
			var warning = require('react-native@0.21/Users/lifan/work-test/sss3/rn/node_modules/fbjs/lib/warning.js');
			
			function findNodeHandle(componentOrHandle) {
			  if (__DEV__) {
			    var owner = ReactCurrentOwner.current;
			    if (owner !== null) {
			      warning(owner._warnedAboutRefsInRender, '%s is accessing findNodeHandle inside its render(). ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component');
			
			      owner._warnedAboutRefsInRender = true;
			    }
			  }
			  if (componentOrHandle == null) {
			    return null;
			  }
			  if (typeof componentOrHandle === 'number') {
			
			    return componentOrHandle;
			  }
			
			  var component = componentOrHandle;
			
			  var internalInstance = ReactInstanceMap.get(component);
			  if (internalInstance) {
			    return ReactNativeTagHandles.rootNodeIDToTag[internalInstance._rootNodeID];
			  } else {
			    var rootNodeID = component._rootNodeID;
			    if (rootNodeID) {
			      return ReactNativeTagHandles.rootNodeIDToTag[rootNodeID];
			    } else {
			      invariant(typeof component === 'object' && '_rootNodeID' in component || component.render != null && typeof component.render === 'function', 'findNodeHandle(...): Argument is not a component ' + '(type: %s, keys: %s)', typeof component, Object.keys(component));
			
			      invariant(false, 'findNodeHandle(...): Unable to find node handle for unmounted ' + 'component.');
			    }
			  }
			}
			
			module.exports = findNodeHandle;
		}
	];
});