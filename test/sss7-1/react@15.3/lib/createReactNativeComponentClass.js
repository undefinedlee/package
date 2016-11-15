__d("react@15.3/lib/createReactNativeComponentClass.js", ["object-assign@4/index.js", "react@15.3/lib/NativeMethodsMixin.js", "react@15.3/lib/ReactNativeAttributePayload.js", "react@15.3/lib/ReactNativeComponentTree.js", "react@15.3/lib/ReactNativeEventEmitter.js", "react@15.3/lib/ReactNativeTagHandles.js", "react@15.3/lib/ReactMultiChild.js", "react-native@0.37/lib/UIManager.js", "react-native@0.37/lib/deepFreezeAndThrowOnMutationInDev.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/createReactNativeComponentClass.js
		function(__inner_require__, exports, module){
			var ReactNativeBaseComponent = __inner_require__(1 /*lib/ReactNativeBaseComponent.js*/);
			
			// See also ReactNativeBaseComponent
			
			
			/**
			 * @param {string} config iOS View configuration.
			 * @private
			 */
			var createReactNativeComponentClass = function createReactNativeComponentClass(viewConfig) {
			  var Constructor = function Constructor(element) {
			    this._currentElement = element;
			    this._topLevelWrapper = null;
			    this._hostParent = null;
			    this._hostContainerInfo = null;
			    this._rootNodeID = 0;
			    this._renderedChildren = null;
			  };
			  Constructor.displayName = viewConfig.uiViewClassName;
			  Constructor.viewConfig = viewConfig;
			  Constructor.propTypes = viewConfig.propTypes;
			  Constructor.prototype = new ReactNativeBaseComponent(viewConfig);
			  Constructor.prototype.constructor = Constructor;
			
			  return Constructor;
			};
			
			module.exports = createReactNativeComponentClass;
		},		// lib/ReactNativeBaseComponent.js
		function(__inner_require__, exports, module){
			var _assign = require('object-assign@4/index.js');
			
			var NativeMethodsMixin = require('react@15.3/lib/NativeMethodsMixin.js');
			var ReactNativeAttributePayload = require('react@15.3/lib/ReactNativeAttributePayload.js');
			var ReactNativeComponentTree = require('react@15.3/lib/ReactNativeComponentTree.js');
			var ReactNativeEventEmitter = require('react@15.3/lib/ReactNativeEventEmitter.js');
			var ReactNativeTagHandles = require('react@15.3/lib/ReactNativeTagHandles.js');
			var ReactMultiChild = require('react@15.3/lib/ReactMultiChild.js');
			var UIManager = require('react-native@0.37/lib/UIManager.js');
			
			var deepFreezeAndThrowOnMutationInDev = require('react-native@0.37/lib/deepFreezeAndThrowOnMutationInDev.js');
			
			var registrationNames = ReactNativeEventEmitter.registrationNames;
			var putListener = ReactNativeEventEmitter.putListener;
			var deleteListener = ReactNativeEventEmitter.deleteListener;
			var deleteAllListeners = ReactNativeEventEmitter.deleteAllListeners;
			
			// require('UIManagerStatTracker').install(); // uncomment to enable
			
			/**
			 * @constructor ReactNativeBaseComponent
			 * @extends ReactComponent
			 * @extends ReactMultiChild
			 * @param {!object} UIKit View Configuration.
			 */
			var ReactNativeBaseComponent = function ReactNativeBaseComponent(viewConfig) {
			  this.viewConfig = viewConfig;
			};
			
			/**
			 * Mixin for containers that contain UIViews. NOTE: markup is rendered markup
			 * which is a `viewID` ... see the return value for `mountComponent` !
			 */
			ReactNativeBaseComponent.Mixin = {
			  getPublicInstance: function getPublicInstance() {
			    // TODO: This should probably use a composite wrapper
			    return this;
			  },
			
			  unmountComponent: function unmountComponent() {
			    ReactNativeComponentTree.uncacheNode(this);
			    deleteAllListeners(this);
			    this.unmountChildren();
			    this._rootNodeID = 0;
			  },
			
			  /**
			   * Every native component is responsible for allocating its own `tag`, and
			   * issuing the native `createView` command. But it is not responsible for
			   * recording the fact that its own `rootNodeID` is associated with a
			   * `nodeHandle`. Only the code that actually adds its `nodeHandle` (`tag`) as
			   * a child of a container can confidently record that in
			   * `ReactNativeTagHandles`.
			   */
			  initializeChildren: function initializeChildren(children, containerTag, transaction, context) {
			    var mountImages = this.mountChildren(children, transaction, context);
			    // In a well balanced tree, half of the nodes are in the bottom row and have
			    // no children - let's avoid calling out to the native bridge for a large
			    // portion of the children.
			    if (mountImages.length) {
			
			      // TODO: Pool these per platform view class. Reusing the `mountImages`
			      // array would likely be a jit deopt.
			      var createdTags = [];
			      for (var i = 0, l = mountImages.length; i < l; i++) {
			        var mountImage = mountImages[i];
			        var childTag = mountImage;
			        createdTags[i] = childTag;
			      }
			      UIManager.setChildren(containerTag, createdTags);
			    }
			  },
			
			  /**
			   * Updates the component's currently mounted representation.
			   *
			   * @param {object} nextElement
			   * @param {ReactReconcileTransaction} transaction
			   * @param {object} context
			   * @internal
			   */
			  receiveComponent: function receiveComponent(nextElement, transaction, context) {
			    var prevElement = this._currentElement;
			    this._currentElement = nextElement;
			
			    if (process.env.NODE_ENV !== 'production') {
			      for (var key in this.viewConfig.validAttributes) {
			        if (nextElement.props.hasOwnProperty(key)) {
			          deepFreezeAndThrowOnMutationInDev(nextElement.props[key]);
			        }
			      }
			    }
			
			    var updatePayload = ReactNativeAttributePayload.diff(prevElement.props, nextElement.props, this.viewConfig.validAttributes);
			
			    if (updatePayload) {
			      UIManager.updateView(this._rootNodeID, this.viewConfig.uiViewClassName, updatePayload);
			    }
			
			    this._reconcileListenersUponUpdate(prevElement.props, nextElement.props);
			    this.updateChildren(nextElement.props.children, transaction, context);
			  },
			
			  /**
			   * @param {object} initialProps Native component props.
			   */
			  _registerListenersUponCreation: function _registerListenersUponCreation(initialProps) {
			    for (var key in initialProps) {
			      // NOTE: The check for `!props[key]`, is only possible because this method
			      // registers listeners the *first* time a component is created.
			      if (registrationNames[key] && initialProps[key]) {
			        var listener = initialProps[key];
			        putListener(this, key, listener);
			      }
			    }
			  },
			
			  /**
			   * Reconciles event listeners, adding or removing if necessary.
			   * @param {object} prevProps Native component props including events.
			   * @param {object} nextProps Next native component props including events.
			   */
			  _reconcileListenersUponUpdate: function _reconcileListenersUponUpdate(prevProps, nextProps) {
			    for (var key in nextProps) {
			      if (registrationNames[key] && nextProps[key] !== prevProps[key]) {
			        if (nextProps[key]) {
			          putListener(this, key, nextProps[key]);
			        } else {
			          deleteListener(this, key);
			        }
			      }
			    }
			  },
			
			  /**
			   * Currently this still uses IDs for reconciliation so this can return null.
			   *
			   * @return {null} Null.
			   */
			  getHostNode: function getHostNode() {
			    return this._rootNodeID;
			  },
			
			  /**
			   * @param {ReactNativeReconcileTransaction} transaction
			   * @param {?ReactNativeBaseComponent} the parent component instance
			   * @param {?object} info about the host container
			   * @param {object} context
			   * @return {string} Unique iOS view tag.
			   */
			  mountComponent: function mountComponent(transaction, hostParent, hostContainerInfo, context) {
			    var tag = ReactNativeTagHandles.allocateTag();
			
			    this._rootNodeID = tag;
			    this._hostParent = hostParent;
			    this._hostContainerInfo = hostContainerInfo;
			
			    if (process.env.NODE_ENV !== 'production') {
			      for (var key in this.viewConfig.validAttributes) {
			        if (this._currentElement.props.hasOwnProperty(key)) {
			          deepFreezeAndThrowOnMutationInDev(this._currentElement.props[key]);
			        }
			      }
			    }
			
			    var updatePayload = ReactNativeAttributePayload.create(this._currentElement.props, this.viewConfig.validAttributes);
			
			    var nativeTopRootTag = hostContainerInfo._tag;
			    UIManager.createView(tag, this.viewConfig.uiViewClassName, nativeTopRootTag, updatePayload);
			
			    ReactNativeComponentTree.precacheNode(this, tag);
			
			    this._registerListenersUponCreation(this._currentElement.props);
			    this.initializeChildren(this._currentElement.props.children, tag, transaction, context);
			    return tag;
			  }
			};
			
			/**
			 * Order of mixins is important. ReactNativeBaseComponent overrides methods in
			 * ReactMultiChild.
			 */
			_assign(ReactNativeBaseComponent.prototype, ReactMultiChild.Mixin, ReactNativeBaseComponent.Mixin, NativeMethodsMixin);
			
			module.exports = ReactNativeBaseComponent;
		}
	];
});