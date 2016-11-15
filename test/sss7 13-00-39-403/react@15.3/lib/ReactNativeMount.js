loader.define("react@15.3/lib/ReactNativeMount.js", ["react@15.3/lib/ReactElement.js", "react@15.3/lib/ReactInstrumentation.js", "react@15.3/lib/ReactNativeTagHandles.js", "react@15.3/lib/ReactReconciler.js", "react@15.3/lib/ReactUpdateQueue.js", "react@15.3/lib/ReactUpdates.js", "react-native@0.37/lib/UIManager.js", "fbjs@0.8/lib/emptyObject.js", "react@15.3/lib/instantiateReactComponent.js", "react@15.3/lib/shouldUpdateReactComponent.js", "react@15.3/lib/findNodeHandle.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/ReactNativeMount.js
		function(__inner_require__, exports, module){
			var ReactElement = require('react@15.3/lib/ReactElement.js');
			var ReactInstrumentation = require('react@15.3/lib/ReactInstrumentation.js');
			var ReactNativeContainerInfo = __inner_require__(1 /*lib/ReactNativeContainerInfo.js*/);
			var ReactNativeTagHandles = require('react@15.3/lib/ReactNativeTagHandles.js');
			var ReactReconciler = require('react@15.3/lib/ReactReconciler.js');
			var ReactUpdateQueue = require('react@15.3/lib/ReactUpdateQueue.js');
			var ReactUpdates = require('react@15.3/lib/ReactUpdates.js');
			var UIManager = require('react-native@0.37/lib/UIManager.js');
			
			var emptyObject = require('fbjs@0.8/lib/emptyObject.js');
			var instantiateReactComponent = require('react@15.3/lib/instantiateReactComponent.js');
			var shouldUpdateReactComponent = require('react@15.3/lib/shouldUpdateReactComponent.js');
			
			/**
			 * Temporary (?) hack so that we can store all top-level pending updates on
			 * composites instead of having to worry about different types of components
			 * here.
			 */
			var TopLevelWrapper = function TopLevelWrapper() {};
			TopLevelWrapper.prototype.isReactComponent = {};
			if (process.env.NODE_ENV !== 'production') {
			  TopLevelWrapper.displayName = 'TopLevelWrapper';
			}
			TopLevelWrapper.prototype.render = function () {
			  // this.props is actually a ReactElement
			  return this.props;
			};
			
			/**
			 * Mounts this component and inserts it into the DOM.
			 *
			 * @param {ReactComponent} componentInstance The instance to mount.
			 * @param {number} rootID ID of the root node.
			 * @param {number} containerTag container element to mount into.
			 * @param {ReactReconcileTransaction} transaction
			 */
			function mountComponentIntoNode(componentInstance, containerTag, transaction) {
			  var markup = ReactReconciler.mountComponent(componentInstance, transaction, null, ReactNativeContainerInfo(containerTag), emptyObject, 0 /* parentDebugID */
			  );
			  componentInstance._renderedComponent._topLevelWrapper = componentInstance;
			  ReactNativeMount._mountImageIntoNode(markup, containerTag);
			}
			
			/**
			 * Batched mount.
			 *
			 * @param {ReactComponent} componentInstance The instance to mount.
			 * @param {number} rootID ID of the root node.
			 * @param {number} containerTag container element to mount into.
			 */
			function batchedMountComponentIntoNode(componentInstance, containerTag) {
			  var transaction = ReactUpdates.ReactReconcileTransaction.getPooled();
			  transaction.perform(mountComponentIntoNode, null, componentInstance, containerTag, transaction);
			  ReactUpdates.ReactReconcileTransaction.release(transaction);
			}
			
			/**
			 * As soon as `ReactMount` is refactored to not rely on the DOM, we can share
			 * code between the two. For now, we'll hard code the ID logic.
			 */
			var ReactNativeMount = {
			  _instancesByContainerID: {},
			
			  // these two functions are needed by React Devtools
			  findNodeHandle: require('react@15.3/lib/findNodeHandle.js'),
			
			  /**
			   * @param {ReactComponent} instance Instance to render.
			   * @param {containerTag} containerView Handle to native view tag
			   */
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
			
			    // The initial render is synchronous but any updates that happen during
			    // rendering, in componentWillMount or componentDidMount, will be batched
			    // according to the current batching strategy.
			
			    ReactUpdates.batchedUpdates(batchedMountComponentIntoNode, instance, containerTag);
			    var component = instance.getPublicInstance();
			    if (callback) {
			      callback.call(component);
			    }
			    return component;
			  },
			
			  /**
			   * @param {View} view View tree image.
			   * @param {number} containerViewID View to insert sub-view into.
			   */
			  _mountImageIntoNode: function _mountImageIntoNode(mountImage, containerID) {
			    // Since we now know that the `mountImage` has been mounted, we can
			    // mark it as such.
			    var childTag = mountImage;
			    UIManager.setChildren(containerID, [childTag]);
			  },
			
			  /**
			   * Standard unmounting of the component that is rendered into `containerID`,
			   * but will also execute a command to remove the actual container view
			   * itself. This is useful when a client is cleaning up a React tree, and also
			   * knows that the container will no longer be needed. When executing
			   * asynchronously, it's easier to just have this method be the one that calls
			   * for removal of the view.
			   */
			  unmountComponentAtNodeAndRemoveContainer: function unmountComponentAtNodeAndRemoveContainer(containerTag) {
			    ReactNativeMount.unmountComponentAtNode(containerTag);
			    // call back into native to remove all of the subviews from this container
			    UIManager.removeRootView(containerTag);
			  },
			
			  /**
			   * Unmount component at container ID by iterating through each child component
			   * that has been rendered and unmounting it. There should just be one child
			   * component at this time.
			   */
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
			
			  /**
			   * Unmounts a component and sends messages back to iOS to remove its subviews.
			   *
			   * @param {ReactComponent} instance React component instance.
			   * @param {string} containerID ID of container we're removing from.
			   * @final
			   * @internal
			   * @see {ReactNativeMount.unmountComponentAtNode}
			   */
			  unmountComponentFromNode: function unmountComponentFromNode(instance, containerID) {
			    // Call back into native to remove all of the subviews from this container
			    ReactReconciler.unmountComponent(instance);
			    UIManager.removeSubviewsFromContainerWithID(containerID);
			  }
			
			};
			
			module.exports = ReactNativeMount;
		},		// lib/ReactNativeContainerInfo.js
		function(__inner_require__, exports, module){
			function ReactNativeContainerInfo(tag) {
			  var info = {
			    _tag: tag
			  };
			  return info;
			}
			
			module.exports = ReactNativeContainerInfo;
		}
	];
});