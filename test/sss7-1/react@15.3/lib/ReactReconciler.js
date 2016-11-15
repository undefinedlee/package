__d("react@15.3/lib/ReactReconciler.js", ["react@15.3/lib/ReactInstrumentation.js", "fbjs@0.8/lib/warning.js", "react@15.3/lib/reactProdInvariant.js", "fbjs@0.8/lib/invariant.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/ReactReconciler.js
		function(__inner_require__, exports, module){
			var ReactRef = __inner_require__(1 /*lib/ReactRef.js*/);
			var ReactInstrumentation = require('react@15.3/lib/ReactInstrumentation.js');
			
			var warning = require('fbjs@0.8/lib/warning.js');
			
			/**
			 * Helper to call ReactRef.attachRefs with this composite component, split out
			 * to avoid allocations in the transaction mount-ready queue.
			 */
			function attachRefs() {
			  ReactRef.attachRefs(this, this._currentElement);
			}
			
			var ReactReconciler = {
			
			  /**
			   * Initializes the component, renders markup, and registers event listeners.
			   *
			   * @param {ReactComponent} internalInstance
			   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
			   * @param {?object} the containing host component instance
			   * @param {?object} info about the host container
			   * @return {?string} Rendered markup to be inserted into the DOM.
			   * @final
			   * @internal
			   */
			  mountComponent: function mountComponent(internalInstance, transaction, hostParent, hostContainerInfo, context, parentDebugID // 0 in production and for roots
			  ) {
			    if (process.env.NODE_ENV !== 'production') {
			      if (internalInstance._debugID !== 0) {
			        ReactInstrumentation.debugTool.onBeforeMountComponent(internalInstance._debugID, internalInstance._currentElement, parentDebugID);
			      }
			    }
			    var markup = internalInstance.mountComponent(transaction, hostParent, hostContainerInfo, context, parentDebugID);
			    if (internalInstance._currentElement && internalInstance._currentElement.ref != null) {
			      transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
			    }
			    if (process.env.NODE_ENV !== 'production') {
			      if (internalInstance._debugID !== 0) {
			        ReactInstrumentation.debugTool.onMountComponent(internalInstance._debugID);
			      }
			    }
			    return markup;
			  },
			
			  /**
			   * Returns a value that can be passed to
			   * ReactComponentEnvironment.replaceNodeWithMarkup.
			   */
			  getHostNode: function getHostNode(internalInstance) {
			    return internalInstance.getHostNode();
			  },
			
			  /**
			   * Releases any resources allocated by `mountComponent`.
			   *
			   * @final
			   * @internal
			   */
			  unmountComponent: function unmountComponent(internalInstance, safely) {
			    if (process.env.NODE_ENV !== 'production') {
			      if (internalInstance._debugID !== 0) {
			        ReactInstrumentation.debugTool.onBeforeUnmountComponent(internalInstance._debugID);
			      }
			    }
			    ReactRef.detachRefs(internalInstance, internalInstance._currentElement);
			    internalInstance.unmountComponent(safely);
			    if (process.env.NODE_ENV !== 'production') {
			      if (internalInstance._debugID !== 0) {
			        ReactInstrumentation.debugTool.onUnmountComponent(internalInstance._debugID);
			      }
			    }
			  },
			
			  /**
			   * Update a component using a new element.
			   *
			   * @param {ReactComponent} internalInstance
			   * @param {ReactElement} nextElement
			   * @param {ReactReconcileTransaction} transaction
			   * @param {object} context
			   * @internal
			   */
			  receiveComponent: function receiveComponent(internalInstance, nextElement, transaction, context) {
			    var prevElement = internalInstance._currentElement;
			
			    if (nextElement === prevElement && context === internalInstance._context) {
			      // Since elements are immutable after the owner is rendered,
			      // we can do a cheap identity compare here to determine if this is a
			      // superfluous reconcile. It's possible for state to be mutable but such
			      // change should trigger an update of the owner which would recreate
			      // the element. We explicitly check for the existence of an owner since
			      // it's possible for an element created outside a composite to be
			      // deeply mutated and reused.
			
			      // TODO: Bailing out early is just a perf optimization right?
			      // TODO: Removing the return statement should affect correctness?
			      return;
			    }
			
			    if (process.env.NODE_ENV !== 'production') {
			      if (internalInstance._debugID !== 0) {
			        ReactInstrumentation.debugTool.onBeforeUpdateComponent(internalInstance._debugID, nextElement);
			      }
			    }
			
			    var refsChanged = ReactRef.shouldUpdateRefs(prevElement, nextElement);
			
			    if (refsChanged) {
			      ReactRef.detachRefs(internalInstance, prevElement);
			    }
			
			    internalInstance.receiveComponent(nextElement, transaction, context);
			
			    if (refsChanged && internalInstance._currentElement && internalInstance._currentElement.ref != null) {
			      transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
			    }
			
			    if (process.env.NODE_ENV !== 'production') {
			      if (internalInstance._debugID !== 0) {
			        ReactInstrumentation.debugTool.onUpdateComponent(internalInstance._debugID);
			      }
			    }
			  },
			
			  /**
			   * Flush any dirty changes in a component.
			   *
			   * @param {ReactComponent} internalInstance
			   * @param {ReactReconcileTransaction} transaction
			   * @internal
			   */
			  performUpdateIfNecessary: function performUpdateIfNecessary(internalInstance, transaction, updateBatchNumber) {
			    if (internalInstance._updateBatchNumber !== updateBatchNumber) {
			      // The component's enqueued batch number should always be the current
			      // batch or the following one.
			      process.env.NODE_ENV !== 'production' ? warning(internalInstance._updateBatchNumber == null || internalInstance._updateBatchNumber === updateBatchNumber + 1, 'performUpdateIfNecessary: Unexpected batch number (current %s, ' + 'pending %s)', updateBatchNumber, internalInstance._updateBatchNumber) : void 0;
			      return;
			    }
			    if (process.env.NODE_ENV !== 'production') {
			      if (internalInstance._debugID !== 0) {
			        ReactInstrumentation.debugTool.onBeforeUpdateComponent(internalInstance._debugID, internalInstance._currentElement);
			      }
			    }
			    internalInstance.performUpdateIfNecessary(transaction);
			    if (process.env.NODE_ENV !== 'production') {
			      if (internalInstance._debugID !== 0) {
			        ReactInstrumentation.debugTool.onUpdateComponent(internalInstance._debugID);
			      }
			    }
			  }
			
			};
			
			module.exports = ReactReconciler;
		},		// lib/ReactRef.js
		function(__inner_require__, exports, module){
			var ReactOwner = __inner_require__(2 /*lib/ReactOwner.js*/);
			
			var ReactRef = {};
			
			function attachRef(ref, component, owner) {
			  if (typeof ref === 'function') {
			    ref(component.getPublicInstance());
			  } else {
			    // Legacy ref
			    ReactOwner.addComponentAsRefTo(component, ref, owner);
			  }
			}
			
			function detachRef(ref, component, owner) {
			  if (typeof ref === 'function') {
			    ref(null);
			  } else {
			    // Legacy ref
			    ReactOwner.removeComponentAsRefFrom(component, ref, owner);
			  }
			}
			
			ReactRef.attachRefs = function (instance, element) {
			  if (element === null || element === false) {
			    return;
			  }
			  var ref = element.ref;
			  if (ref != null) {
			    attachRef(ref, instance, element._owner);
			  }
			};
			
			ReactRef.shouldUpdateRefs = function (prevElement, nextElement) {
			  // If either the owner or a `ref` has changed, make sure the newest owner
			  // has stored a reference to `this`, and the previous owner (if different)
			  // has forgotten the reference to `this`. We use the element instead
			  // of the public this.props because the post processing cannot determine
			  // a ref. The ref conceptually lives on the element.
			
			  // TODO: Should this even be possible? The owner cannot change because
			  // it's forbidden by shouldUpdateReactComponent. The ref can change
			  // if you swap the keys of but not the refs. Reconsider where this check
			  // is made. It probably belongs where the key checking and
			  // instantiateReactComponent is done.
			
			  var prevEmpty = prevElement === null || prevElement === false;
			  var nextEmpty = nextElement === null || nextElement === false;
			
			  return (
			    // This has a few false positives w/r/t empty components.
			    prevEmpty || nextEmpty || nextElement.ref !== prevElement.ref ||
			    // If owner changes but we have an unchanged function ref, don't update refs
			    typeof nextElement.ref === 'string' && nextElement._owner !== prevElement._owner
			  );
			};
			
			ReactRef.detachRefs = function (instance, element) {
			  if (element === null || element === false) {
			    return;
			  }
			  var ref = element.ref;
			  if (ref != null) {
			    detachRef(ref, instance, element._owner);
			  }
			};
			
			module.exports = ReactRef;
		},		// lib/ReactOwner.js
		function(__inner_require__, exports, module){
			var _prodInvariant = require('react@15.3/lib/reactProdInvariant.js');
			
			var invariant = require('fbjs@0.8/lib/invariant.js');
			
			/**
			 * ReactOwners are capable of storing references to owned components.
			 *
			 * All components are capable of //being// referenced by owner components, but
			 * only ReactOwner components are capable of //referencing// owned components.
			 * The named reference is known as a "ref".
			 *
			 * Refs are available when mounted and updated during reconciliation.
			 *
			 *   var MyComponent = React.createClass({
			 *     render: function() {
			 *       return (
			 *         <div onClick={this.handleClick}>
			 *           <CustomComponent ref="custom" />
			 *         </div>
			 *       );
			 *     },
			 *     handleClick: function() {
			 *       this.refs.custom.handleClick();
			 *     },
			 *     componentDidMount: function() {
			 *       this.refs.custom.initialize();
			 *     }
			 *   });
			 *
			 * Refs should rarely be used. When refs are used, they should only be done to
			 * control data that is not handled by React's data flow.
			 *
			 * @class ReactOwner
			 */
			var ReactOwner = {
			
			  /**
			   * @param {?object} object
			   * @return {boolean} True if `object` is a valid owner.
			   * @final
			   */
			  isValidOwner: function isValidOwner(object) {
			    return !!(object && typeof object.attachRef === 'function' && typeof object.detachRef === 'function');
			  },
			
			  /**
			   * Adds a component by ref to an owner component.
			   *
			   * @param {ReactComponent} component Component to reference.
			   * @param {string} ref Name by which to refer to the component.
			   * @param {ReactOwner} owner Component on which to record the ref.
			   * @final
			   * @internal
			   */
			  addComponentAsRefTo: function addComponentAsRefTo(component, ref, owner) {
			    !ReactOwner.isValidOwner(owner) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'addComponentAsRefTo(...): Only a ReactOwner can have refs. You might be adding a ref to a component that was not created inside a component\'s `render` method, or you have multiple copies of React loaded (details: https://fb.me/react-refs-must-have-owner).') : _prodInvariant('119') : void 0;
			    owner.attachRef(ref, component);
			  },
			
			  /**
			   * Removes a component by ref from an owner component.
			   *
			   * @param {ReactComponent} component Component to dereference.
			   * @param {string} ref Name of the ref to remove.
			   * @param {ReactOwner} owner Component on which the ref is recorded.
			   * @final
			   * @internal
			   */
			  removeComponentAsRefFrom: function removeComponentAsRefFrom(component, ref, owner) {
			    !ReactOwner.isValidOwner(owner) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'removeComponentAsRefFrom(...): Only a ReactOwner can have refs. You might be removing a ref to a component that was not created inside a component\'s `render` method, or you have multiple copies of React loaded (details: https://fb.me/react-refs-must-have-owner).') : _prodInvariant('120') : void 0;
			    var ownerPublicInstance = owner.getPublicInstance();
			    // Check that `component`'s owner is still alive and that `component` is still the current ref
			    // because we do not want to detach the ref if another component stole it.
			    if (ownerPublicInstance && ownerPublicInstance.refs[ref] === component.getPublicInstance()) {
			      owner.detachRef(ref);
			    }
			  }
			
			};
			
			module.exports = ReactOwner;
		}
	];
});