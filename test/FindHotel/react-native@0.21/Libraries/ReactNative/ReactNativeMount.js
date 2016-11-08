// react-native@0.21/Libraries/ReactNative/ReactNativeMount.js
loader.define("react-native@0.21", "Libraries/ReactNative/ReactNativeMount.js", "", function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/ReactNative/ReactNativeMount.js
	function (__inner_require__, exports, module) {
		var ReactElement = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactElement.js');
		var ReactNativeTagHandles = require('react-native@0.21/Libraries/ReactNative/ReactNativeTagHandles.js');
		var ReactPerf = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPerf.js');
		var ReactReconciler = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactReconciler.js');
		var ReactUpdateQueue = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactUpdateQueue.js');
		var ReactUpdates = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactUpdates.js');
		var UIManager = require('react-native@0.21/Libraries/Utilities/UIManager.js');

		var emptyObject = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/emptyObject.js');
		var instantiateReactComponent = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/instantiateReactComponent.js');
		var shouldUpdateReactComponent = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/shouldUpdateReactComponent.js');

		function instanceNumberToChildRootID(rootNodeID, instanceNumber) {
			return rootNodeID + '[' + instanceNumber + ']';
		}

		var TopLevelWrapper = function TopLevelWrapper() {};
		TopLevelWrapper.prototype.isReactComponent = {};
		if (__DEV__) {
			TopLevelWrapper.displayName = 'TopLevelWrapper';
		}
		TopLevelWrapper.prototype.render = function () {

			return this.props;
		};

		function mountComponentIntoNode(componentInstance, rootID, container, transaction) {
			var markup = ReactReconciler.mountComponent(componentInstance, rootID, transaction, emptyObject);

			componentInstance._renderedComponent._topLevelWrapper = componentInstance;
			ReactNativeMount._mountImageIntoNode(markup, container);
		}

		function batchedMountComponentIntoNode(componentInstance, rootID, container) {
			var transaction = ReactUpdates.ReactReconcileTransaction.getPooled();
			transaction.perform(mountComponentIntoNode, null, componentInstance, rootID, container, transaction);

			ReactUpdates.ReactReconcileTransaction.release(transaction);
		}

		var ReactNativeMount = {
			instanceCount: 0,

			_instancesByContainerID: {},

			findNodeHandle: require('react-native@0.21/Libraries/ReactNative/findNodeHandle.js'),
			nativeTagToRootNodeID: function nativeTagToRootNodeID(nativeTag) {
				return ReactNativeTagHandles.tagToRootNodeID[nativeTag];
			},

			renderComponent: function renderComponent(nextElement, containerTag, callback) {
				var nextWrappedElement = new ReactElement(TopLevelWrapper, null, null, null, null, null, nextElement);

				var topRootNodeID = ReactNativeTagHandles.tagToRootNodeID[containerTag];
				if (topRootNodeID) {
					var prevComponent = ReactNativeMount._instancesByContainerID[topRootNodeID];
					if (prevComponent) {
						var prevWrappedElement = prevComponent._currentElement;
						var prevElement = prevWrappedElement.props;
						if (shouldUpdateReactComponent(prevElement, nextElement)) {
							ReactUpdateQueue.enqueueElementInternal(prevComponent, nextWrappedElement);
							if (callback) {
								ReactUpdateQueue.enqueueCallbackInternal(prevComponent, callback);
							}
							return prevComponent;
						} else {
							ReactNativeMount.unmountComponentAtNode(containerTag);
						}
					}
				}

				if (!ReactNativeTagHandles.reactTagIsNativeTopRootID(containerTag)) {
					console.error('You cannot render into anything but a top root');
					return;
				}

				var topRootNodeID = ReactNativeTagHandles.allocateRootNodeIDForTag(containerTag);
				ReactNativeTagHandles.associateRootNodeIDWithMountedNodeHandle(topRootNodeID, containerTag);

				var instance = instantiateReactComponent(nextWrappedElement);
				ReactNativeMount._instancesByContainerID[topRootNodeID] = instance;

				var childRootNodeID = instanceNumberToChildRootID(topRootNodeID, ReactNativeMount.instanceCount++);

				ReactUpdates.batchedUpdates(batchedMountComponentIntoNode, instance, childRootNodeID, topRootNodeID);

				var component = instance.getPublicInstance();
				if (callback) {
					callback.call(component);
				}
				return component;
			},

			_mountImageIntoNode: ReactPerf.measure('ReactComponentBrowserEnvironment', 'mountImageIntoNode', function (mountImage, containerID) {

				ReactNativeTagHandles.associateRootNodeIDWithMountedNodeHandle(mountImage.rootNodeID, mountImage.tag);

				UIManager.setChildren(ReactNativeTagHandles.mostRecentMountedNodeHandleForRootNodeID(containerID), [mountImage.tag]);
			}),

			unmountComponentAtNodeAndRemoveContainer: function unmountComponentAtNodeAndRemoveContainer(containerTag) {
				ReactNativeMount.unmountComponentAtNode(containerTag);

				UIManager.removeRootView(containerTag);
			},

			unmountComponentAtNode: function unmountComponentAtNode(containerTag) {
				if (!ReactNativeTagHandles.reactTagIsNativeTopRootID(containerTag)) {
					console.error('You cannot render into anything but a top root');
					return false;
				}

				var containerID = ReactNativeTagHandles.tagToRootNodeID[containerTag];
				var instance = ReactNativeMount._instancesByContainerID[containerID];
				if (!instance) {
					return false;
				}
				ReactNativeMount.unmountComponentFromNode(instance, containerID);
				delete ReactNativeMount._instancesByContainerID[containerID];
				return true;
			},

			unmountComponentFromNode: function unmountComponentFromNode(instance, containerID) {

				ReactReconciler.unmountComponent(instance);
				var containerTag = ReactNativeTagHandles.mostRecentMountedNodeHandleForRootNodeID(containerID);
				UIManager.removeSubviewsFromContainerWithID(containerTag);
			},

			getNode: function getNode(rootNodeID) {
				return ReactNativeTagHandles.rootNodeIDToTag[rootNodeID];
			},

			getID: function getID(nativeTag) {
				return ReactNativeTagHandles.tagToRootNodeID[nativeTag];
			} };

		ReactNativeMount.renderComponent = ReactPerf.measure('ReactMount', '_renderNewRootComponent', ReactNativeMount.renderComponent);

		module.exports = ReactNativeMount;
	}];
});