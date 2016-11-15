__d("react-deep-force-update@1/lib/index.js", [], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/index.js
		function(__inner_require__, exports, module){
			exports.__esModule = true;
			exports["default"] = getForceUpdate;
			function traverseRenderedChildren(internalInstance, callback, argument) {
			  callback(internalInstance, argument);
			
			  if (internalInstance._renderedComponent) {
			    traverseRenderedChildren(internalInstance._renderedComponent, callback, argument);
			  } else {
			    for (var key in internalInstance._renderedChildren) {
			      if (internalInstance._renderedChildren.hasOwnProperty(key)) {
			        traverseRenderedChildren(internalInstance._renderedChildren[key], callback, argument);
			      }
			    }
			  }
			}
			
			function setPendingForceUpdate(internalInstance) {
			  if (internalInstance._pendingForceUpdate === false) {
			    internalInstance._pendingForceUpdate = true;
			  }
			}
			
			function forceUpdateIfPending(internalInstance, React) {
			  if (internalInstance._pendingForceUpdate === true) {
			    var publicInstance = internalInstance._instance;
			    React.Component.prototype.forceUpdate.call(publicInstance);
			  }
			}
			
			function getForceUpdate(React) {
			  return function (instance) {
			    var internalInstance = instance._reactInternalInstance;
			    traverseRenderedChildren(internalInstance, setPendingForceUpdate);
			    traverseRenderedChildren(internalInstance, forceUpdateIfPending, React);
			  };
			}
			
			module.exports = exports["default"];
		}
	];
});