__d("react@15.3/lib/ReactMultiChild.js", ["react@15.3/lib/reactProdInvariant.js", "react@15.3/lib/ReactComponentEnvironment.js", "react@15.3/lib/ReactInstanceMap.js", "react@15.3/lib/ReactInstrumentation.js", "react@15.3/lib/ReactMultiChildUpdateTypes.js", "react@15.3/lib/ReactCurrentOwner.js", "react@15.3/lib/ReactReconciler.js", "fbjs@0.8/lib/emptyFunction.js", "fbjs@0.8/lib/invariant.js", "react@15.3/lib/instantiateReactComponent.js", "react@15.3/lib/KeyEscapeUtils.js", "react@15.3/lib/shouldUpdateReactComponent.js", "react@15.3/lib/traverseAllChildren.js", "fbjs@0.8/lib/warning.js", "react@15.3/lib/ReactComponentTreeHook.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/ReactMultiChild.js
		function(__inner_require__, exports, module){
			var _prodInvariant = require('react@15.3/lib/reactProdInvariant.js');
			
			var ReactComponentEnvironment = require('react@15.3/lib/ReactComponentEnvironment.js');
			var ReactInstanceMap = require('react@15.3/lib/ReactInstanceMap.js');
			var ReactInstrumentation = require('react@15.3/lib/ReactInstrumentation.js');
			var ReactMultiChildUpdateTypes = require('react@15.3/lib/ReactMultiChildUpdateTypes.js');
			
			var ReactCurrentOwner = require('react@15.3/lib/ReactCurrentOwner.js');
			var ReactReconciler = require('react@15.3/lib/ReactReconciler.js');
			var ReactChildReconciler = __inner_require__(1 /*lib/ReactChildReconciler.js*/);
			
			var emptyFunction = require('fbjs@0.8/lib/emptyFunction.js');
			var flattenChildren = __inner_require__(2 /*lib/flattenChildren.js*/);
			var invariant = require('fbjs@0.8/lib/invariant.js');
			
			/**
			 * Make an update for markup to be rendered and inserted at a supplied index.
			 *
			 * @param {string} markup Markup that renders into an element.
			 * @param {number} toIndex Destination index.
			 * @private
			 */
			function makeInsertMarkup(markup, afterNode, toIndex) {
			  // NOTE: Null values reduce hidden classes.
			  return {
			    type: ReactMultiChildUpdateTypes.INSERT_MARKUP,
			    content: markup,
			    fromIndex: null,
			    fromNode: null,
			    toIndex: toIndex,
			    afterNode: afterNode
			  };
			}
			
			/**
			 * Make an update for moving an existing element to another index.
			 *
			 * @param {number} fromIndex Source index of the existing element.
			 * @param {number} toIndex Destination index of the element.
			 * @private
			 */
			function makeMove(child, afterNode, toIndex) {
			  // NOTE: Null values reduce hidden classes.
			  return {
			    type: ReactMultiChildUpdateTypes.MOVE_EXISTING,
			    content: null,
			    fromIndex: child._mountIndex,
			    fromNode: ReactReconciler.getHostNode(child),
			    toIndex: toIndex,
			    afterNode: afterNode
			  };
			}
			
			/**
			 * Make an update for removing an element at an index.
			 *
			 * @param {number} fromIndex Index of the element to remove.
			 * @private
			 */
			function makeRemove(child, node) {
			  // NOTE: Null values reduce hidden classes.
			  return {
			    type: ReactMultiChildUpdateTypes.REMOVE_NODE,
			    content: null,
			    fromIndex: child._mountIndex,
			    fromNode: node,
			    toIndex: null,
			    afterNode: null
			  };
			}
			
			/**
			 * Make an update for setting the markup of a node.
			 *
			 * @param {string} markup Markup that renders into an element.
			 * @private
			 */
			function makeSetMarkup(markup) {
			  // NOTE: Null values reduce hidden classes.
			  return {
			    type: ReactMultiChildUpdateTypes.SET_MARKUP,
			    content: markup,
			    fromIndex: null,
			    fromNode: null,
			    toIndex: null,
			    afterNode: null
			  };
			}
			
			/**
			 * Make an update for setting the text content.
			 *
			 * @param {string} textContent Text content to set.
			 * @private
			 */
			function makeTextContent(textContent) {
			  // NOTE: Null values reduce hidden classes.
			  return {
			    type: ReactMultiChildUpdateTypes.TEXT_CONTENT,
			    content: textContent,
			    fromIndex: null,
			    fromNode: null,
			    toIndex: null,
			    afterNode: null
			  };
			}
			
			/**
			 * Push an update, if any, onto the queue. Creates a new queue if none is
			 * passed and always returns the queue. Mutative.
			 */
			function enqueue(queue, update) {
			  if (update) {
			    queue = queue || [];
			    queue.push(update);
			  }
			  return queue;
			}
			
			/**
			 * Processes any enqueued updates.
			 *
			 * @private
			 */
			function processQueue(inst, updateQueue) {
			  ReactComponentEnvironment.processChildrenUpdates(inst, updateQueue);
			}
			
			var setChildrenForInstrumentation = emptyFunction;
			if (process.env.NODE_ENV !== 'production') {
			  var getDebugID = function getDebugID(inst) {
			    if (!inst._debugID) {
			      // Check for ART-like instances. TODO: This is silly/gross.
			      var internal;
			      if (internal = ReactInstanceMap.get(inst)) {
			        inst = internal;
			      }
			    }
			    return inst._debugID;
			  };
			  setChildrenForInstrumentation = function setChildrenForInstrumentation(children) {
			    var debugID = getDebugID(this);
			    // TODO: React Native empty components are also multichild.
			    // This means they still get into this method but don't have _debugID.
			    if (debugID !== 0) {
			      ReactInstrumentation.debugTool.onSetChildren(debugID, children ? Object.keys(children).map(function (key) {
			        return children[key]._debugID;
			      }) : []);
			    }
			  };
			}
			
			/**
			 * ReactMultiChild are capable of reconciling multiple children.
			 *
			 * @class ReactMultiChild
			 * @internal
			 */
			var ReactMultiChild = {
			
			  /**
			   * Provides common functionality for components that must reconcile multiple
			   * children. This is used by `ReactDOMComponent` to mount, update, and
			   * unmount child components.
			   *
			   * @lends {ReactMultiChild.prototype}
			   */
			  Mixin: {
			
			    _reconcilerInstantiateChildren: function _reconcilerInstantiateChildren(nestedChildren, transaction, context) {
			      if (process.env.NODE_ENV !== 'production') {
			        var selfDebugID = getDebugID(this);
			        if (this._currentElement) {
			          try {
			            ReactCurrentOwner.current = this._currentElement._owner;
			            return ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context, selfDebugID);
			          } finally {
			            ReactCurrentOwner.current = null;
			          }
			        }
			      }
			      return ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context);
			    },
			
			    _reconcilerUpdateChildren: function _reconcilerUpdateChildren(prevChildren, nextNestedChildrenElements, mountImages, removedNodes, transaction, context) {
			      var nextChildren;
			      var selfDebugID = 0;
			      if (process.env.NODE_ENV !== 'production') {
			        selfDebugID = getDebugID(this);
			        if (this._currentElement) {
			          try {
			            ReactCurrentOwner.current = this._currentElement._owner;
			            nextChildren = flattenChildren(nextNestedChildrenElements, selfDebugID);
			          } finally {
			            ReactCurrentOwner.current = null;
			          }
			          ReactChildReconciler.updateChildren(prevChildren, nextChildren, mountImages, removedNodes, transaction, this, this._hostContainerInfo, context, selfDebugID);
			          return nextChildren;
			        }
			      }
			      nextChildren = flattenChildren(nextNestedChildrenElements, selfDebugID);
			      ReactChildReconciler.updateChildren(prevChildren, nextChildren, mountImages, removedNodes, transaction, this, this._hostContainerInfo, context, selfDebugID);
			      return nextChildren;
			    },
			
			    /**
			     * Generates a "mount image" for each of the supplied children. In the case
			     * of `ReactDOMComponent`, a mount image is a string of markup.
			     *
			     * @param {?object} nestedChildren Nested child maps.
			     * @return {array} An array of mounted representations.
			     * @internal
			     */
			    mountChildren: function mountChildren(nestedChildren, transaction, context) {
			      var children = this._reconcilerInstantiateChildren(nestedChildren, transaction, context);
			      this._renderedChildren = children;
			
			      var mountImages = [];
			      var index = 0;
			      for (var name in children) {
			        if (children.hasOwnProperty(name)) {
			          var child = children[name];
			          var selfDebugID = 0;
			          if (process.env.NODE_ENV !== 'production') {
			            selfDebugID = getDebugID(this);
			          }
			          var mountImage = ReactReconciler.mountComponent(child, transaction, this, this._hostContainerInfo, context, selfDebugID);
			          child._mountIndex = index++;
			          mountImages.push(mountImage);
			        }
			      }
			
			      if (process.env.NODE_ENV !== 'production') {
			        setChildrenForInstrumentation.call(this, children);
			      }
			
			      return mountImages;
			    },
			
			    /**
			     * Replaces any rendered children with a text content string.
			     *
			     * @param {string} nextContent String of content.
			     * @internal
			     */
			    updateTextContent: function updateTextContent(nextContent) {
			      var prevChildren = this._renderedChildren;
			      // Remove any rendered children.
			      ReactChildReconciler.unmountChildren(prevChildren, false);
			      for (var name in prevChildren) {
			        if (prevChildren.hasOwnProperty(name)) {
			          !false ? process.env.NODE_ENV !== 'production' ? invariant(false, 'updateTextContent called on non-empty component.') : _prodInvariant('118') : void 0;
			        }
			      }
			      // Set new text content.
			      var updates = [makeTextContent(nextContent)];
			      processQueue(this, updates);
			    },
			
			    /**
			     * Replaces any rendered children with a markup string.
			     *
			     * @param {string} nextMarkup String of markup.
			     * @internal
			     */
			    updateMarkup: function updateMarkup(nextMarkup) {
			      var prevChildren = this._renderedChildren;
			      // Remove any rendered children.
			      ReactChildReconciler.unmountChildren(prevChildren, false);
			      for (var name in prevChildren) {
			        if (prevChildren.hasOwnProperty(name)) {
			          !false ? process.env.NODE_ENV !== 'production' ? invariant(false, 'updateTextContent called on non-empty component.') : _prodInvariant('118') : void 0;
			        }
			      }
			      var updates = [makeSetMarkup(nextMarkup)];
			      processQueue(this, updates);
			    },
			
			    /**
			     * Updates the rendered children with new children.
			     *
			     * @param {?object} nextNestedChildrenElements Nested child element maps.
			     * @param {ReactReconcileTransaction} transaction
			     * @internal
			     */
			    updateChildren: function updateChildren(nextNestedChildrenElements, transaction, context) {
			      // Hook used by React ART
			      this._updateChildren(nextNestedChildrenElements, transaction, context);
			    },
			
			    /**
			     * @param {?object} nextNestedChildrenElements Nested child element maps.
			     * @param {ReactReconcileTransaction} transaction
			     * @final
			     * @protected
			     */
			    _updateChildren: function _updateChildren(nextNestedChildrenElements, transaction, context) {
			      var prevChildren = this._renderedChildren;
			      var removedNodes = {};
			      var mountImages = [];
			      var nextChildren = this._reconcilerUpdateChildren(prevChildren, nextNestedChildrenElements, mountImages, removedNodes, transaction, context);
			      if (!nextChildren && !prevChildren) {
			        return;
			      }
			      var updates = null;
			      var name;
			      // `nextIndex` will increment for each child in `nextChildren`, but
			      // `lastIndex` will be the last index visited in `prevChildren`.
			      var nextIndex = 0;
			      var lastIndex = 0;
			      // `nextMountIndex` will increment for each newly mounted child.
			      var nextMountIndex = 0;
			      var lastPlacedNode = null;
			      for (name in nextChildren) {
			        if (!nextChildren.hasOwnProperty(name)) {
			          continue;
			        }
			        var prevChild = prevChildren && prevChildren[name];
			        var nextChild = nextChildren[name];
			        if (prevChild === nextChild) {
			          updates = enqueue(updates, this.moveChild(prevChild, lastPlacedNode, nextIndex, lastIndex));
			          lastIndex = Math.max(prevChild._mountIndex, lastIndex);
			          prevChild._mountIndex = nextIndex;
			        } else {
			          if (prevChild) {
			            // Update `lastIndex` before `_mountIndex` gets unset by unmounting.
			            lastIndex = Math.max(prevChild._mountIndex, lastIndex);
			            // The `removedNodes` loop below will actually remove the child.
			          }
			          // The child must be instantiated before it's mounted.
			          updates = enqueue(updates, this._mountChildAtIndex(nextChild, mountImages[nextMountIndex], lastPlacedNode, nextIndex, transaction, context));
			          nextMountIndex++;
			        }
			        nextIndex++;
			        lastPlacedNode = ReactReconciler.getHostNode(nextChild);
			      }
			      // Remove children that are no longer present.
			      for (name in removedNodes) {
			        if (removedNodes.hasOwnProperty(name)) {
			          updates = enqueue(updates, this._unmountChild(prevChildren[name], removedNodes[name]));
			        }
			      }
			      if (updates) {
			        processQueue(this, updates);
			      }
			      this._renderedChildren = nextChildren;
			
			      if (process.env.NODE_ENV !== 'production') {
			        setChildrenForInstrumentation.call(this, nextChildren);
			      }
			    },
			
			    /**
			     * Unmounts all rendered children. This should be used to clean up children
			     * when this component is unmounted. It does not actually perform any
			     * backend operations.
			     *
			     * @internal
			     */
			    unmountChildren: function unmountChildren(safely) {
			      var renderedChildren = this._renderedChildren;
			      ReactChildReconciler.unmountChildren(renderedChildren, safely);
			      this._renderedChildren = null;
			    },
			
			    /**
			     * Moves a child component to the supplied index.
			     *
			     * @param {ReactComponent} child Component to move.
			     * @param {number} toIndex Destination index of the element.
			     * @param {number} lastIndex Last index visited of the siblings of `child`.
			     * @protected
			     */
			    moveChild: function moveChild(child, afterNode, toIndex, lastIndex) {
			      // If the index of `child` is less than `lastIndex`, then it needs to
			      // be moved. Otherwise, we do not need to move it because a child will be
			      // inserted or moved before `child`.
			      if (child._mountIndex < lastIndex) {
			        return makeMove(child, afterNode, toIndex);
			      }
			    },
			
			    /**
			     * Creates a child component.
			     *
			     * @param {ReactComponent} child Component to create.
			     * @param {string} mountImage Markup to insert.
			     * @protected
			     */
			    createChild: function createChild(child, afterNode, mountImage) {
			      return makeInsertMarkup(mountImage, afterNode, child._mountIndex);
			    },
			
			    /**
			     * Removes a child component.
			     *
			     * @param {ReactComponent} child Child to remove.
			     * @protected
			     */
			    removeChild: function removeChild(child, node) {
			      return makeRemove(child, node);
			    },
			
			    /**
			     * Mounts a child with the supplied name.
			     *
			     * NOTE: This is part of `updateChildren` and is here for readability.
			     *
			     * @param {ReactComponent} child Component to mount.
			     * @param {string} name Name of the child.
			     * @param {number} index Index at which to insert the child.
			     * @param {ReactReconcileTransaction} transaction
			     * @private
			     */
			    _mountChildAtIndex: function _mountChildAtIndex(child, mountImage, afterNode, index, transaction, context) {
			      child._mountIndex = index;
			      return this.createChild(child, afterNode, mountImage);
			    },
			
			    /**
			     * Unmounts a rendered child.
			     *
			     * NOTE: This is part of `updateChildren` and is here for readability.
			     *
			     * @param {ReactComponent} child Component to unmount.
			     * @private
			     */
			    _unmountChild: function _unmountChild(child, node) {
			      var update = this.removeChild(child, node);
			      child._mountIndex = null;
			      return update;
			    }
			
			  }
			
			};
			
			module.exports = ReactMultiChild;
		},		// lib/ReactChildReconciler.js
		function(__inner_require__, exports, module){
			var ReactReconciler = require('react@15.3/lib/ReactReconciler.js');
			
			var instantiateReactComponent = require('react@15.3/lib/instantiateReactComponent.js');
			var KeyEscapeUtils = require('react@15.3/lib/KeyEscapeUtils.js');
			var shouldUpdateReactComponent = require('react@15.3/lib/shouldUpdateReactComponent.js');
			var traverseAllChildren = require('react@15.3/lib/traverseAllChildren.js');
			var warning = require('fbjs@0.8/lib/warning.js');
			
			var ReactComponentTreeHook;
			
			if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test') {
			  // Temporary hack.
			  // Inline requires don't work well with Jest:
			  // https://github.com/facebook/react/issues/7240
			  // Remove the inline requires when we don't need them anymore:
			  // https://github.com/facebook/react/pull/7178
			  ReactComponentTreeHook = require('react@15.3/lib/ReactComponentTreeHook.js');
			}
			
			function instantiateChild(childInstances, child, name, selfDebugID) {
			  // We found a component instance.
			  var keyUnique = childInstances[name] === undefined;
			  if (process.env.NODE_ENV !== 'production') {
			    if (!ReactComponentTreeHook) {
			      ReactComponentTreeHook = require('react@15.3/lib/ReactComponentTreeHook.js');
			    }
			    if (!keyUnique) {
			      process.env.NODE_ENV !== 'production' ? warning(false, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.%s', KeyEscapeUtils.unescape(name), ReactComponentTreeHook.getStackAddendumByID(selfDebugID)) : void 0;
			    }
			  }
			  if (child != null && keyUnique) {
			    childInstances[name] = instantiateReactComponent(child, true);
			  }
			}
			
			/**
			 * ReactChildReconciler provides helpers for initializing or updating a set of
			 * children. Its output is suitable for passing it onto ReactMultiChild which
			 * does diffed reordering and insertion.
			 */
			var ReactChildReconciler = {
			  /**
			   * Generates a "mount image" for each of the supplied children. In the case
			   * of `ReactDOMComponent`, a mount image is a string of markup.
			   *
			   * @param {?object} nestedChildNodes Nested child maps.
			   * @return {?object} A set of child instances.
			   * @internal
			   */
			  instantiateChildren: function instantiateChildren(nestedChildNodes, transaction, context, selfDebugID // 0 in production and for roots
			  ) {
			    if (nestedChildNodes == null) {
			      return null;
			    }
			    var childInstances = {};
			
			    if (process.env.NODE_ENV !== 'production') {
			      traverseAllChildren(nestedChildNodes, function (childInsts, child, name) {
			        return instantiateChild(childInsts, child, name, selfDebugID);
			      }, childInstances);
			    } else {
			      traverseAllChildren(nestedChildNodes, instantiateChild, childInstances);
			    }
			    return childInstances;
			  },
			
			  /**
			   * Updates the rendered children and returns a new set of children.
			   *
			   * @param {?object} prevChildren Previously initialized set of children.
			   * @param {?object} nextChildren Flat child element maps.
			   * @param {ReactReconcileTransaction} transaction
			   * @param {object} context
			   * @return {?object} A new set of child instances.
			   * @internal
			   */
			  updateChildren: function updateChildren(prevChildren, nextChildren, mountImages, removedNodes, transaction, hostParent, hostContainerInfo, context, selfDebugID // 0 in production and for roots
			  ) {
			    // We currently don't have a way to track moves here but if we use iterators
			    // instead of for..in we can zip the iterators and check if an item has
			    // moved.
			    // TODO: If nothing has changed, return the prevChildren object so that we
			    // can quickly bailout if nothing has changed.
			    if (!nextChildren && !prevChildren) {
			      return;
			    }
			    var name;
			    var prevChild;
			    for (name in nextChildren) {
			      if (!nextChildren.hasOwnProperty(name)) {
			        continue;
			      }
			      prevChild = prevChildren && prevChildren[name];
			      var prevElement = prevChild && prevChild._currentElement;
			      var nextElement = nextChildren[name];
			      if (prevChild != null && shouldUpdateReactComponent(prevElement, nextElement)) {
			        ReactReconciler.receiveComponent(prevChild, nextElement, transaction, context);
			        nextChildren[name] = prevChild;
			      } else {
			        if (prevChild) {
			          removedNodes[name] = ReactReconciler.getHostNode(prevChild);
			          ReactReconciler.unmountComponent(prevChild, false);
			        }
			        // The child must be instantiated before it's mounted.
			        var nextChildInstance = instantiateReactComponent(nextElement, true);
			        nextChildren[name] = nextChildInstance;
			        // Creating mount image now ensures refs are resolved in right order
			        // (see https://github.com/facebook/react/pull/7101 for explanation).
			        var nextChildMountImage = ReactReconciler.mountComponent(nextChildInstance, transaction, hostParent, hostContainerInfo, context, selfDebugID);
			        mountImages.push(nextChildMountImage);
			      }
			    }
			    // Unmount children that are no longer present.
			    for (name in prevChildren) {
			      if (prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))) {
			        prevChild = prevChildren[name];
			        removedNodes[name] = ReactReconciler.getHostNode(prevChild);
			        ReactReconciler.unmountComponent(prevChild, false);
			      }
			    }
			  },
			
			  /**
			   * Unmounts all rendered children. This should be used to clean up children
			   * when this component is unmounted.
			   *
			   * @param {?object} renderedChildren Previously initialized set of children.
			   * @internal
			   */
			  unmountChildren: function unmountChildren(renderedChildren, safely) {
			    for (var name in renderedChildren) {
			      if (renderedChildren.hasOwnProperty(name)) {
			        var renderedChild = renderedChildren[name];
			        ReactReconciler.unmountComponent(renderedChild, safely);
			      }
			    }
			  }
			
			};
			
			module.exports = ReactChildReconciler;
		},		// lib/flattenChildren.js
		function(__inner_require__, exports, module){
			var KeyEscapeUtils = require('react@15.3/lib/KeyEscapeUtils.js');
			var traverseAllChildren = require('react@15.3/lib/traverseAllChildren.js');
			var warning = require('fbjs@0.8/lib/warning.js');
			
			var ReactComponentTreeHook;
			
			if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test') {
			  // Temporary hack.
			  // Inline requires don't work well with Jest:
			  // https://github.com/facebook/react/issues/7240
			  // Remove the inline requires when we don't need them anymore:
			  // https://github.com/facebook/react/pull/7178
			  ReactComponentTreeHook = require('react@15.3/lib/ReactComponentTreeHook.js');
			}
			
			/**
			 * @param {function} traverseContext Context passed through traversal.
			 * @param {?ReactComponent} child React child component.
			 * @param {!string} name String name of key path to child.
			 * @param {number=} selfDebugID Optional debugID of the current internal instance.
			 */
			function flattenSingleChildIntoContext(traverseContext, child, name, selfDebugID) {
			  // We found a component instance.
			  if (traverseContext && (typeof traverseContext === 'undefined' ? 'undefined' : babelHelpers.typeof(traverseContext)) === 'object') {
			    var result = traverseContext;
			    var keyUnique = result[name] === undefined;
			    if (process.env.NODE_ENV !== 'production') {
			      if (!ReactComponentTreeHook) {
			        ReactComponentTreeHook = require('react@15.3/lib/ReactComponentTreeHook.js');
			      }
			      if (!keyUnique) {
			        process.env.NODE_ENV !== 'production' ? warning(false, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.%s', KeyEscapeUtils.unescape(name), ReactComponentTreeHook.getStackAddendumByID(selfDebugID)) : void 0;
			      }
			    }
			    if (keyUnique && child != null) {
			      result[name] = child;
			    }
			  }
			}
			
			/**
			 * Flattens children that are typically specified as `props.children`. Any null
			 * children will not be included in the resulting object.
			 * @return {!object} flattened children keyed by name.
			 */
			function flattenChildren(children, selfDebugID) {
			  if (children == null) {
			    return children;
			  }
			  var result = {};
			
			  if (process.env.NODE_ENV !== 'production') {
			    traverseAllChildren(children, function (traverseContext, child, name) {
			      return flattenSingleChildIntoContext(traverseContext, child, name, selfDebugID);
			    }, result);
			  } else {
			    traverseAllChildren(children, flattenSingleChildIntoContext, result);
			  }
			  return result;
			}
			
			module.exports = flattenChildren;
		}
	];
});