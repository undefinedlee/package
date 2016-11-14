loader.define("react-native@0.33/__react__/lib/ReactNativeMount.js", ["react-native@0.33/__react__/lib/ReactElement.js", "react-native@0.33/__react__/lib/ReactInstrumentation.js", "react-native@0.33/__react__/lib/ReactNativeTagHandles.js", "react-native@0.33/__react__/lib/ReactReconciler.js", "react-native@0.33/__react__/lib/ReactUpdateQueue.js", "react-native@0.33/__react__/lib/ReactUpdates.js", "react-native@0.33/lib/UIManager.js", "react-native@0.33/__fbjs__/lib/emptyObject.js", "react-native@0.33/__react__/lib/instantiateReactComponent.js", "react-native@0.33/__react__/lib/shouldUpdateReactComponent.js", "react-native@0.33/__react__/lib/findNodeHandle.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// __react__/lib/ReactNativeMount.js
	function (__inner_require__, exports, module) {
		var ReactElement = require('react-native@0.33/__react__/lib/ReactElement.js');
		var ReactInstrumentation = require('react-native@0.33/__react__/lib/ReactInstrumentation.js');
		var ReactNativeContainerInfo = __inner_require__(1 /*__react__/lib/ReactNativeContainerInfo.js*/);
		var ReactNativeTagHandles = require('react-native@0.33/__react__/lib/ReactNativeTagHandles.js');
		var ReactReconciler = require('react-native@0.33/__react__/lib/ReactReconciler.js');
		var ReactUpdateQueue = require('react-native@0.33/__react__/lib/ReactUpdateQueue.js');
		var ReactUpdates = require('react-native@0.33/__react__/lib/ReactUpdates.js');
		var UIManager = require('react-native@0.33/lib/UIManager.js');

		var emptyObject = require('react-native@0.33/__fbjs__/lib/emptyObject.js');
		var instantiateReactComponent = require('react-native@0.33/__react__/lib/instantiateReactComponent.js');
		var shouldUpdateReactComponent = require('react-native@0.33/__react__/lib/shouldUpdateReactComponent.js');

		var TopLevelWrapper = function TopLevelWrapper() {};
		TopLevelWrapper.prototype.isReactComponent = {};
		if (process.env.NODE_ENV !== 'production') {
			TopLevelWrapper.displayName = 'TopLevelWrapper';
		}
		TopLevelWrapper.prototype.render = function () {

			return this.props;
		};

		function mountComponentIntoNode(componentInstance, containerTag, transaction) {
			var markup = ReactReconciler.mountComponent(componentInstance, transaction, null, ReactNativeContainerInfo(containerTag), emptyObject, 0);

			componentInstance._renderedComponent._topLevelWrapper = componentInstance;
			ReactNativeMount._mountImageIntoNode(markup, containerTag);
		}

		function batchedMountComponentIntoNode(componentInstance, containerTag) {
			var transaction = ReactUpdates.ReactReconcileTransaction.getPooled();
			transaction.perform(mountComponentIntoNode, null, componentInstance, containerTag, transaction);
			ReactUpdates.ReactReconcileTransaction.release(transaction);
		}

		var ReactNativeMount = {
			_instancesByContainerID: {},

			findNodeHandle: require('react-native@0.33/__react__/lib/findNodeHandle.js'),

			renderComponent: function renderComponent(nextElement, containerTag, callback) {
				var nextWrappedElement = new ReactElement(TopLevelWrapper, null, null, null, null, null, nextElement);

				var topRootNodeID = containerTag;
				var prevComponent = ReactNativeMount._instancesByContainerID[topRootNodeID];
				if (prevComponent) {
					var prevWrappedElement = prevComponent._currentElement;
					var prevElement = prevWrappedElement.props;
					if (shouldUpdateReactComponent(prevElement, nextElement)) {
						ReactUpdateQueue.enqueueElementInternal(prevComponent, nextWrappedElement, emptyObject);
						if (callback) {
							ReactUpdateQueue.enqueueCallbackInternal(prevComponent, callback);
						}
						return prevComponent;
					} else {
						ReactNativeMount.unmountComponentAtNode(containerTag);
					}
				}

				if (!ReactNativeTagHandles.reactTagIsNativeTopRootID(containerTag)) {
					console.error('You cannot render into anything but a top root');
					return null;
				}

				ReactNativeTagHandles.assertRootTag(containerTag);

				var instance = instantiateReactComponent(nextWrappedElement, false);
				ReactNativeMount._instancesByContainerID[containerTag] = instance;

				ReactUpdates.batchedUpdates(batchedMountComponentIntoNode, instance, containerTag);
				var component = instance.getPublicInstance();
				if (callback) {
					callback.call(component);
				}
				return component;
			},

			_mountImageIntoNode: function _mountImageIntoNode(mountImage, containerID) {

				var childTag = mountImage;
				UIManager.setChildren(containerID, [childTag]);
			},

			unmountComponentAtNodeAndRemoveContainer: function unmountComponentAtNodeAndRemoveContainer(containerTag) {
				ReactNativeMount.unmountComponentAtNode(containerTag);

				UIManager.removeRootView(containerTag);
			},

			unmountComponentAtNode: function unmountComponentAtNode(containerTag) {
				if (!ReactNativeTagHandles.reactTagIsNativeTopRootID(containerTag)) {
					console.error('You cannot render into anything but a top root');
					return false;
				}

				var instance = ReactNativeMount._instancesByContainerID[containerTag];
				if (!instance) {
					return false;
				}
				if (process.env.NODE_ENV !== 'production') {
					ReactInstrumentation.debugTool.onBeginFlush();
				}
				ReactNativeMount.unmountComponentFromNode(instance, containerTag);
				delete ReactNativeMount._instancesByContainerID[containerTag];
				if (process.env.NODE_ENV !== 'production') {
					ReactInstrumentation.debugTool.onEndFlush();
				}
				return true;
			},

			unmountComponentFromNode: function unmountComponentFromNode(instance, containerID) {

				ReactReconciler.unmountComponent(instance);
				UIManager.removeSubviewsFromContainerWithID(containerID);
			} };

		module.exports = ReactNativeMount;
	}, // __react__/lib/ReactNativeContainerInfo.js
	function (__inner_require__, exports, module) {
		function ReactNativeContainerInfo(tag) {
			var info = {
				_tag: tag };

			return info;
		}

		module.exports = ReactNativeContainerInfo;
	}];
});