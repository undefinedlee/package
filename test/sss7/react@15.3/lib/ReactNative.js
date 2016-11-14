loader.define("react@15.3/lib/ReactNative.js", ["react@15.3/lib/ReactNativeComponentTree.js", "react@15.3/lib/ReactElement.js", "react@15.3/lib/ReactNativeMount.js", "react@15.3/lib/ReactUpdates.js", "react@15.3/lib/findNodeHandle.js", "react@15.3/lib/ReactReconciler.js", "react@15.3/lib/reactProdInvariant.js", "react-native@0.37/lib/InitializeJavaScriptAppEngine.js", "react@15.3/lib/EventPluginHub.js", "react@15.3/lib/EventPluginUtils.js", "react-native@0.37/lib/RCTEventEmitter.js", "react@15.3/lib/ReactComponentEnvironment.js", "react@15.3/lib/ReactDefaultBatchingStrategy.js", "react@15.3/lib/ReactEmptyComponent.js", "react@15.3/lib/ReactHostComponent.js", "react@15.3/lib/ReactNativeEventEmitter.js", "fbjs@0.8/lib/invariant.js", "react-native@0.37/lib/View.js", "object-assign@4/index.js", "react@15.3/lib/EventPropagators.js", "react@15.3/lib/SyntheticEvent.js", "react-native@0.37/lib/UIManager.js", "fbjs@0.8/lib/warning.js", "react@15.3/lib/ReactMultiChildUpdateTypes.js", "react@15.3/lib/CallbackQueue.js", "react@15.3/lib/PooledClass.js", "react@15.3/lib/Transaction.js", "react@15.3/lib/ReactInstrumentation.js", "react@15.3/lib/ReactUpdateQueue.js", "react@15.3/lib/ReactNativeTagHandles.js", "react@15.3/lib/EventConstants.js", "fbjs@0.8/lib/keyOf.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/ReactNative.js
		function(__inner_require__, exports, module){
			// Require ReactNativeDefaultInjection first for its side effects of setting up
			// the JS environment
			
			var ReactNativeComponentTree = require('react@15.3/lib/ReactNativeComponentTree.js');
			var ReactNativeDefaultInjection = __inner_require__(1 /*lib/ReactNativeDefaultInjection.js*/);
			
			var ReactElement = require('react@15.3/lib/ReactElement.js');
			var ReactNativeMount = require('react@15.3/lib/ReactNativeMount.js');
			var ReactUpdates = require('react@15.3/lib/ReactUpdates.js');
			
			var findNodeHandle = require('react@15.3/lib/findNodeHandle.js');
			
			ReactNativeDefaultInjection.inject();
			
			var render = function render(element, mountInto, callback) {
			  return ReactNativeMount.renderComponent(element, mountInto, callback);
			};
			
			var ReactNative = {
			  hasReactNativeInitialized: false,
			  findNodeHandle: findNodeHandle,
			  render: render,
			  unmountComponentAtNode: ReactNativeMount.unmountComponentAtNode,
			
			  /* eslint-disable camelcase */
			  unstable_batchedUpdates: ReactUpdates.batchedUpdates,
			  /* eslint-enable camelcase */
			
			  unmountComponentAtNodeAndRemoveContainer: ReactNativeMount.unmountComponentAtNodeAndRemoveContainer
			};
			
			// Inject the runtime into a devtools global hook regardless of browser.
			// Allows for debugging when the hook is injected on the page.
			/* globals __REACT_DEVTOOLS_GLOBAL_HOOK__ */
			if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
			  __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
			    ComponentTree: {
			      getClosestInstanceFromNode: function getClosestInstanceFromNode(node) {
			        return ReactNativeComponentTree.getClosestInstanceFromNode(node);
			      },
			      getNodeFromInstance: function getNodeFromInstance(inst) {
			        // inst is an internal instance (but could be a composite)
			        while (inst._renderedComponent) {
			          inst = inst._renderedComponent;
			        }
			        if (inst) {
			          return ReactNativeComponentTree.getNodeFromInstance(inst);
			        } else {
			          return null;
			        }
			      }
			    },
			    Mount: ReactNativeMount,
			    Reconciler: require('react@15.3/lib/ReactReconciler.js')
			  });
			}
			
			module.exports = ReactNative;
		},		// lib/ReactNativeDefaultInjection.js
		function(__inner_require__, exports, module){
			/**
			 * Make sure essential globals are available and are patched correctly. Please don't remove this
			 * line. Bundles created by react-packager `require` it before executing any application code. This
			 * ensures it exists in the dependency graph and can be `require`d.
			 * TODO: require this in packager, not in React #10932517
			 */
			
			var _prodInvariant = require('react@15.3/lib/reactProdInvariant.js');
			
			require('react-native@0.37/lib/InitializeJavaScriptAppEngine.js');
			
			var EventPluginHub = require('react@15.3/lib/EventPluginHub.js');
			var EventPluginUtils = require('react@15.3/lib/EventPluginUtils.js');
			var RCTEventEmitter = require('react-native@0.37/lib/RCTEventEmitter.js');
			var ReactComponentEnvironment = require('react@15.3/lib/ReactComponentEnvironment.js');
			var ReactDefaultBatchingStrategy = require('react@15.3/lib/ReactDefaultBatchingStrategy.js');
			var ReactElement = require('react@15.3/lib/ReactElement.js');
			var ReactEmptyComponent = require('react@15.3/lib/ReactEmptyComponent.js');
			var ReactNativeBridgeEventPlugin = __inner_require__(2 /*lib/ReactNativeBridgeEventPlugin.js*/);
			var ReactHostComponent = require('react@15.3/lib/ReactHostComponent.js');
			var ReactNativeComponentEnvironment = __inner_require__(3 /*lib/ReactNativeComponentEnvironment.js*/);
			var ReactNativeComponentTree = require('react@15.3/lib/ReactNativeComponentTree.js');
			var ReactNativeEventEmitter = require('react@15.3/lib/ReactNativeEventEmitter.js');
			var ReactNativeEventPluginOrder = __inner_require__(6 /*lib/ReactNativeEventPluginOrder.js*/);
			var ReactNativeGlobalResponderHandler = __inner_require__(7 /*lib/ReactNativeGlobalResponderHandler.js*/);
			var ReactNativeTextComponent = __inner_require__(8 /*lib/ReactNativeTextComponent.js*/);
			var ReactNativeTreeTraversal = __inner_require__(9 /*lib/ReactNativeTreeTraversal.js*/);
			var ReactSimpleEmptyComponent = __inner_require__(10 /*lib/ReactSimpleEmptyComponent.js*/);
			var ReactUpdates = require('react@15.3/lib/ReactUpdates.js');
			var ResponderEventPlugin = __inner_require__(11 /*lib/ResponderEventPlugin.js*/);
			
			var invariant = require('fbjs@0.8/lib/invariant.js');
			
			function inject() {
			  /**
			   * Register the event emitter with the native bridge
			   */
			  RCTEventEmitter.register(ReactNativeEventEmitter);
			
			  /**
			   * Inject module for resolving DOM hierarchy and plugin ordering.
			   */
			  EventPluginHub.injection.injectEventPluginOrder(ReactNativeEventPluginOrder);
			  EventPluginUtils.injection.injectComponentTree(ReactNativeComponentTree);
			  EventPluginUtils.injection.injectTreeTraversal(ReactNativeTreeTraversal);
			
			  ResponderEventPlugin.injection.injectGlobalResponderHandler(ReactNativeGlobalResponderHandler);
			
			  /**
			   * Some important event plugins included by default (without having to require
			   * them).
			   */
			  EventPluginHub.injection.injectEventPluginsByName({
			    'ResponderEventPlugin': ResponderEventPlugin,
			    'ReactNativeBridgeEventPlugin': ReactNativeBridgeEventPlugin
			  });
			
			  ReactUpdates.injection.injectReconcileTransaction(ReactNativeComponentEnvironment.ReactReconcileTransaction);
			
			  ReactUpdates.injection.injectBatchingStrategy(ReactDefaultBatchingStrategy);
			
			  ReactComponentEnvironment.injection.injectEnvironment(ReactNativeComponentEnvironment);
			
			  var EmptyComponent = function EmptyComponent(instantiate) {
			    // Can't import View at the top because it depends on React to make its composite
			    var View = require('react-native@0.37/lib/View.js');
			    return new ReactSimpleEmptyComponent(ReactElement.createElement(View, {
			      collapsable: true,
			      style: { position: 'absolute' }
			    }), instantiate);
			  };
			
			  ReactEmptyComponent.injection.injectEmptyComponentFactory(EmptyComponent);
			
			  ReactHostComponent.injection.injectTextComponentClass(ReactNativeTextComponent);
			  ReactHostComponent.injection.injectGenericComponentClass(function (tag) {
			    // Show a nicer error message for non-function tags
			    var info = '';
			    if (typeof tag === 'string' && /^[a-z]/.test(tag)) {
			      info += ' Each component name should start with an uppercase letter.';
			    }
			    !false ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected a component class, got %s.%s', tag, info) : _prodInvariant('18', tag, info) : void 0;
			  });
			}
			
			module.exports = {
			  inject: inject
			};
		},		// lib/ReactNativeBridgeEventPlugin.js
		function(__inner_require__, exports, module){
			var _assign = require('object-assign@4/index.js');
			
			var _extends = _assign || function (target) {
			  for (var i = 1; i < arguments.length; i++) {
			    var source = arguments[i];for (var key in source) {
			      if (Object.prototype.hasOwnProperty.call(source, key)) {
			        target[key] = source[key];
			      }
			    }
			  }return target;
			};
			
			var EventPropagators = require('react@15.3/lib/EventPropagators.js');
			var SyntheticEvent = require('react@15.3/lib/SyntheticEvent.js');
			var UIManager = require('react-native@0.37/lib/UIManager.js');
			
			var warning = require('fbjs@0.8/lib/warning.js');
			
			var customBubblingEventTypes = UIManager.customBubblingEventTypes;
			var customDirectEventTypes = UIManager.customDirectEventTypes;
			
			var allTypesByEventName = {};
			
			for (var bubblingTypeName in customBubblingEventTypes) {
			  allTypesByEventName[bubblingTypeName] = customBubblingEventTypes[bubblingTypeName];
			}
			
			for (var directTypeName in customDirectEventTypes) {
			  process.env.NODE_ENV !== 'production' ? warning(!customBubblingEventTypes[directTypeName], 'Event cannot be both direct and bubbling: %s', directTypeName) : void 0;
			  allTypesByEventName[directTypeName] = customDirectEventTypes[directTypeName];
			}
			
			var ReactNativeBridgeEventPlugin = {
			
			  eventTypes: _extends({}, customBubblingEventTypes, customDirectEventTypes),
			
			  /**
			   * @see {EventPluginHub.extractEvents}
			   */
			  extractEvents: function extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
			    var bubbleDispatchConfig = customBubblingEventTypes[topLevelType];
			    var directDispatchConfig = customDirectEventTypes[topLevelType];
			    var event = SyntheticEvent.getPooled(bubbleDispatchConfig || directDispatchConfig, targetInst, nativeEvent, nativeEventTarget);
			    if (bubbleDispatchConfig) {
			      EventPropagators.accumulateTwoPhaseDispatches(event);
			    } else if (directDispatchConfig) {
			      EventPropagators.accumulateDirectDispatches(event);
			    } else {
			      return null;
			    }
			    return event;
			  }
			};
			
			module.exports = ReactNativeBridgeEventPlugin;
		},		// lib/ReactNativeComponentEnvironment.js
		function(__inner_require__, exports, module){
			var ReactNativeDOMIDOperations = __inner_require__(4 /*lib/ReactNativeDOMIDOperations.js*/);
			var ReactNativeReconcileTransaction = __inner_require__(5 /*lib/ReactNativeReconcileTransaction.js*/);
			
			var ReactNativeComponentEnvironment = {
			
			  processChildrenUpdates: ReactNativeDOMIDOperations.dangerouslyProcessChildrenUpdates,
			
			  replaceNodeWithMarkup: ReactNativeDOMIDOperations.dangerouslyReplaceNodeWithMarkupByID,
			
			  /**
			   * @param {DOMElement} Element to clear.
			   */
			  clearNode: function clearNode() /*containerView*/{},
			
			  ReactReconcileTransaction: ReactNativeReconcileTransaction
			};
			
			module.exports = ReactNativeComponentEnvironment;
		},		// lib/ReactNativeDOMIDOperations.js
		function(__inner_require__, exports, module){
			var ReactNativeComponentTree = require('react@15.3/lib/ReactNativeComponentTree.js');
			var ReactMultiChildUpdateTypes = require('react@15.3/lib/ReactMultiChildUpdateTypes.js');
			var UIManager = require('react-native@0.37/lib/UIManager.js');
			
			/**
			 * Updates a component's children by processing a series of updates.
			 * For each of the update/create commands, the `fromIndex` refers to the index
			 * that the item existed at *before* any of the updates are applied, and the
			 * `toIndex` refers to the index after *all* of the updates are applied
			 * (including deletes/moves). TODO: refactor so this can be shared with
			 * DOMChildrenOperations.
			 *
			 * @param {ReactNativeBaseComponent} updates List of update configurations.
			 * @param {array<string>} markup List of markup strings - in the case of React
			 * IOS, the ids of new components assumed to be already created.
			 */
			var dangerouslyProcessChildrenUpdates = function dangerouslyProcessChildrenUpdates(inst, childrenUpdates) {
			  if (!childrenUpdates.length) {
			    return;
			  }
			
			  var containerTag = ReactNativeComponentTree.getNodeFromInstance(inst);
			
			  var moveFromIndices;
			  var moveToIndices;
			  var addChildTags;
			  var addAtIndices;
			  var removeAtIndices;
			
			  for (var i = 0; i < childrenUpdates.length; i++) {
			    var update = childrenUpdates[i];
			    if (update.type === ReactMultiChildUpdateTypes.MOVE_EXISTING) {
			      (moveFromIndices || (moveFromIndices = [])).push(update.fromIndex);
			      (moveToIndices || (moveToIndices = [])).push(update.toIndex);
			    } else if (update.type === ReactMultiChildUpdateTypes.REMOVE_NODE) {
			      (removeAtIndices || (removeAtIndices = [])).push(update.fromIndex);
			    } else if (update.type === ReactMultiChildUpdateTypes.INSERT_MARKUP) {
			      var mountImage = update.content;
			      var tag = mountImage;
			      (addAtIndices || (addAtIndices = [])).push(update.toIndex);
			      (addChildTags || (addChildTags = [])).push(tag);
			    }
			  }
			
			  UIManager.manageChildren(containerTag, moveFromIndices, moveToIndices, addChildTags, addAtIndices, removeAtIndices);
			};
			
			/**
			 * Operations used to process updates to DOM nodes. This is made injectable via
			 * `ReactComponent.DOMIDOperations`.
			 */
			var ReactNativeDOMIDOperations = {
			  dangerouslyProcessChildrenUpdates: dangerouslyProcessChildrenUpdates,
			
			  /**
			   * Replaces a view that exists in the document with markup.
			   *
			   * @param {string} id ID of child to be replaced.
			   * @param {string} markup Mount image to replace child with id.
			   */
			  dangerouslyReplaceNodeWithMarkupByID: function dangerouslyReplaceNodeWithMarkupByID(id, mountImage) {
			    var oldTag = id;
			    UIManager.replaceExistingNonRootView(oldTag, mountImage);
			  }
			};
			
			module.exports = ReactNativeDOMIDOperations;
		},		// lib/ReactNativeReconcileTransaction.js
		function(__inner_require__, exports, module){
			var _assign = require('object-assign@4/index.js');
			
			var CallbackQueue = require('react@15.3/lib/CallbackQueue.js');
			var PooledClass = require('react@15.3/lib/PooledClass.js');
			var Transaction = require('react@15.3/lib/Transaction.js');
			var ReactInstrumentation = require('react@15.3/lib/ReactInstrumentation.js');
			var ReactUpdateQueue = require('react@15.3/lib/ReactUpdateQueue.js');
			
			/**
			 * Provides a `CallbackQueue` queue for collecting `onDOMReady` callbacks during
			 * the performing of the transaction.
			 */
			var ON_DOM_READY_QUEUEING = {
			  /**
			   * Initializes the internal `onDOMReady` queue.
			   */
			  initialize: function initialize() {
			    this.reactMountReady.reset();
			  },
			
			  /**
			   * After DOM is flushed, invoke all registered `onDOMReady` callbacks.
			   */
			  close: function close() {
			    this.reactMountReady.notifyAll();
			  }
			};
			
			/**
			 * Executed within the scope of the `Transaction` instance. Consider these as
			 * being member methods, but with an implied ordering while being isolated from
			 * each other.
			 */
			var TRANSACTION_WRAPPERS = [ON_DOM_READY_QUEUEING];
			
			if (process.env.NODE_ENV !== 'production') {
			  TRANSACTION_WRAPPERS.push({
			    initialize: ReactInstrumentation.debugTool.onBeginFlush,
			    close: ReactInstrumentation.debugTool.onEndFlush
			  });
			}
			
			/**
			 * Currently:
			 * - The order that these are listed in the transaction is critical:
			 * - Suppresses events.
			 * - Restores selection range.
			 *
			 * Future:
			 * - Restore document/overflow scroll positions that were unintentionally
			 *   modified via DOM insertions above the top viewport boundary.
			 * - Implement/integrate with customized constraint based layout system and keep
			 *   track of which dimensions must be remeasured.
			 *
			 * @class ReactNativeReconcileTransaction
			 */
			function ReactNativeReconcileTransaction() {
			  this.reinitializeTransaction();
			  this.reactMountReady = CallbackQueue.getPooled(null);
			}
			
			var Mixin = {
			  /**
			   * @see Transaction
			   * @abstract
			   * @final
			   * @return {array<object>} List of operation wrap procedures.
			   *   TODO: convert to array<TransactionWrapper>
			   */
			  getTransactionWrappers: function getTransactionWrappers() {
			    return TRANSACTION_WRAPPERS;
			  },
			
			  /**
			   * @return {object} The queue to collect `onDOMReady` callbacks with.
			   *   TODO: convert to ReactMountReady
			   */
			  getReactMountReady: function getReactMountReady() {
			    return this.reactMountReady;
			  },
			
			  /**
			   * @return {object} The queue to collect React async events.
			   */
			  getUpdateQueue: function getUpdateQueue() {
			    return ReactUpdateQueue;
			  },
			
			  /**
			   * Save current transaction state -- if the return value from this method is
			   * passed to `rollback`, the transaction will be reset to that state.
			   */
			  checkpoint: function checkpoint() {
			    // reactMountReady is the our only stateful wrapper
			    return this.reactMountReady.checkpoint();
			  },
			
			  rollback: function rollback(checkpoint) {
			    this.reactMountReady.rollback(checkpoint);
			  },
			
			  /**
			   * `PooledClass` looks for this, and will invoke this before allowing this
			   * instance to be reused.
			   */
			  destructor: function destructor() {
			    CallbackQueue.release(this.reactMountReady);
			    this.reactMountReady = null;
			  }
			};
			
			_assign(ReactNativeReconcileTransaction.prototype, Transaction.Mixin, ReactNativeReconcileTransaction, Mixin);
			
			PooledClass.addPoolingTo(ReactNativeReconcileTransaction);
			
			module.exports = ReactNativeReconcileTransaction;
		},		// lib/ReactNativeEventPluginOrder.js
		function(__inner_require__, exports, module){
			var ReactNativeEventPluginOrder = ['ResponderEventPlugin', 'ReactNativeBridgeEventPlugin'];
			
			module.exports = ReactNativeEventPluginOrder;
		},		// lib/ReactNativeGlobalResponderHandler.js
		function(__inner_require__, exports, module){
			var UIManager = require('react-native@0.37/lib/UIManager.js');
			
			var ReactNativeGlobalResponderHandler = {
			  onChange: function onChange(from, to, blockNativeResponder) {
			    if (to !== null) {
			      UIManager.setJSResponder(to._rootNodeID, blockNativeResponder);
			    } else {
			      UIManager.clearJSResponder();
			    }
			  }
			};
			
			module.exports = ReactNativeGlobalResponderHandler;
		},		// lib/ReactNativeTextComponent.js
		function(__inner_require__, exports, module){
			var _prodInvariant = require('react@15.3/lib/reactProdInvariant.js'),
			    _assign = require('object-assign@4/index.js');
			
			var ReactNativeComponentTree = require('react@15.3/lib/ReactNativeComponentTree.js');
			var ReactNativeTagHandles = require('react@15.3/lib/ReactNativeTagHandles.js');
			var UIManager = require('react-native@0.37/lib/UIManager.js');
			
			var invariant = require('fbjs@0.8/lib/invariant.js');
			
			var ReactNativeTextComponent = function ReactNativeTextComponent(text) {
			  // This is really a ReactText (ReactNode), not a ReactElement
			  this._currentElement = text;
			  this._stringText = '' + text;
			  this._hostParent = null;
			  this._rootNodeID = 0;
			};
			
			_assign(ReactNativeTextComponent.prototype, {
			
			  mountComponent: function mountComponent(transaction, hostParent, hostContainerInfo, context) {
			    // TODO: hostParent should have this context already. Stop abusing context.
			    !context.isInAParentText ? process.env.NODE_ENV !== 'production' ? invariant(false, 'RawText "%s" must be wrapped in an explicit <Text> component.', this._stringText) : _prodInvariant('20', this._stringText) : void 0;
			    this._hostParent = hostParent;
			    var tag = ReactNativeTagHandles.allocateTag();
			    this._rootNodeID = tag;
			    var nativeTopRootTag = hostContainerInfo._tag;
			    UIManager.createView(tag, 'RCTRawText', nativeTopRootTag, { text: this._stringText });
			
			    ReactNativeComponentTree.precacheNode(this, tag);
			
			    return tag;
			  },
			
			  getHostNode: function getHostNode() {
			    return this._rootNodeID;
			  },
			
			  receiveComponent: function receiveComponent(nextText, transaction, context) {
			    if (nextText !== this._currentElement) {
			      this._currentElement = nextText;
			      var nextStringText = '' + nextText;
			      if (nextStringText !== this._stringText) {
			        this._stringText = nextStringText;
			        UIManager.updateView(this._rootNodeID, 'RCTRawText', { text: this._stringText });
			      }
			    }
			  },
			
			  unmountComponent: function unmountComponent() {
			    ReactNativeComponentTree.uncacheNode(this);
			    this._currentElement = null;
			    this._stringText = null;
			    this._rootNodeID = 0;
			  }
			
			});
			
			module.exports = ReactNativeTextComponent;
		},		// lib/ReactNativeTreeTraversal.js
		function(__inner_require__, exports, module){
			// Same as ReactDOMTreeTraversal without the invariants.
			
			/**
			 * Return the lowest common ancestor of A and B, or null if they are in
			 * different trees.
			 */
			
			function getLowestCommonAncestor(instA, instB) {
			  var depthA = 0;
			  for (var tempA = instA; tempA; tempA = tempA._hostParent) {
			    depthA++;
			  }
			  var depthB = 0;
			  for (var tempB = instB; tempB; tempB = tempB._hostParent) {
			    depthB++;
			  }
			
			  // If A is deeper, crawl up.
			  while (depthA - depthB > 0) {
			    instA = instA._hostParent;
			    depthA--;
			  }
			
			  // If B is deeper, crawl up.
			  while (depthB - depthA > 0) {
			    instB = instB._hostParent;
			    depthB--;
			  }
			
			  // Walk in lockstep until we find a match.
			  var depth = depthA;
			  while (depth--) {
			    if (instA === instB) {
			      return instA;
			    }
			    instA = instA._hostParent;
			    instB = instB._hostParent;
			  }
			  return null;
			}
			
			/**
			 * Return if A is an ancestor of B.
			 */
			function isAncestor(instA, instB) {
			  while (instB) {
			    if (instB === instA) {
			      return true;
			    }
			    instB = instB._hostParent;
			  }
			  return false;
			}
			
			/**
			 * Return the parent instance of the passed-in instance.
			 */
			function getParentInstance(inst) {
			  return inst._hostParent;
			}
			
			/**
			 * Simulates the traversal of a two-phase, capture/bubble event dispatch.
			 */
			function traverseTwoPhase(inst, fn, arg) {
			  var path = [];
			  while (inst) {
			    path.push(inst);
			    inst = inst._hostParent;
			  }
			  var i;
			  for (i = path.length; i-- > 0;) {
			    fn(path[i], false, arg);
			  }
			  for (i = 0; i < path.length; i++) {
			    fn(path[i], true, arg);
			  }
			}
			
			/**
			 * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
			 * should would receive a `mouseEnter` or `mouseLeave` event.
			 *
			 * Does not invoke the callback on the nearest common ancestor because nothing
			 * "entered" or "left" that element.
			 */
			function traverseEnterLeave(from, to, fn, argFrom, argTo) {
			  var common = from && to ? getLowestCommonAncestor(from, to) : null;
			  var pathFrom = [];
			  while (from && from !== common) {
			    pathFrom.push(from);
			    from = from._hostParent;
			  }
			  var pathTo = [];
			  while (to && to !== common) {
			    pathTo.push(to);
			    to = to._hostParent;
			  }
			  var i;
			  for (i = 0; i < pathFrom.length; i++) {
			    fn(pathFrom[i], true, argFrom);
			  }
			  for (i = pathTo.length; i-- > 0;) {
			    fn(pathTo[i], false, argTo);
			  }
			}
			
			module.exports = {
			  isAncestor: isAncestor,
			  getLowestCommonAncestor: getLowestCommonAncestor,
			  getParentInstance: getParentInstance,
			  traverseTwoPhase: traverseTwoPhase,
			  traverseEnterLeave: traverseEnterLeave
			};
		},		// lib/ReactSimpleEmptyComponent.js
		function(__inner_require__, exports, module){
			var _assign = require('object-assign@4/index.js');
			
			var ReactReconciler = require('react@15.3/lib/ReactReconciler.js');
			
			var ReactSimpleEmptyComponent = function ReactSimpleEmptyComponent(placeholderElement, instantiate) {
			  this._currentElement = null;
			  this._renderedComponent = instantiate(placeholderElement);
			};
			_assign(ReactSimpleEmptyComponent.prototype, {
			  mountComponent: function mountComponent(transaction, hostParent, hostContainerInfo, context, parentDebugID // 0 in production and for roots
			  ) {
			    return ReactReconciler.mountComponent(this._renderedComponent, transaction, hostParent, hostContainerInfo, context, parentDebugID);
			  },
			  receiveComponent: function receiveComponent() {},
			  getHostNode: function getHostNode() {
			    return ReactReconciler.getHostNode(this._renderedComponent);
			  },
			  unmountComponent: function unmountComponent() {
			    ReactReconciler.unmountComponent(this._renderedComponent);
			    this._renderedComponent = null;
			  }
			});
			
			module.exports = ReactSimpleEmptyComponent;
		},		// lib/ResponderEventPlugin.js
		function(__inner_require__, exports, module){
			var EventConstants = require('react@15.3/lib/EventConstants.js');
			var EventPluginUtils = require('react@15.3/lib/EventPluginUtils.js');
			var EventPropagators = require('react@15.3/lib/EventPropagators.js');
			var ResponderSyntheticEvent = __inner_require__(12 /*lib/ResponderSyntheticEvent.js*/);
			var ResponderTouchHistoryStore = __inner_require__(13 /*lib/ResponderTouchHistoryStore.js*/);
			
			var accumulate = __inner_require__(14 /*lib/accumulate.js*/);
			var keyOf = require('fbjs@0.8/lib/keyOf.js');
			
			var isStartish = EventPluginUtils.isStartish;
			var isMoveish = EventPluginUtils.isMoveish;
			var isEndish = EventPluginUtils.isEndish;
			var executeDirectDispatch = EventPluginUtils.executeDirectDispatch;
			var hasDispatches = EventPluginUtils.hasDispatches;
			var executeDispatchesInOrderStopAtTrue = EventPluginUtils.executeDispatchesInOrderStopAtTrue;
			
			/**
			 * Instance of element that should respond to touch/move types of interactions,
			 * as indicated explicitly by relevant callbacks.
			 */
			var responderInst = null;
			
			/**
			 * Count of current touches. A textInput should become responder iff the
			 * selection changes while there is a touch on the screen.
			 */
			var trackedTouchCount = 0;
			
			/**
			 * Last reported number of active touches.
			 */
			var previousActiveTouches = 0;
			
			var changeResponder = function changeResponder(nextResponderInst, blockHostResponder) {
			  var oldResponderInst = responderInst;
			  responderInst = nextResponderInst;
			  if (ResponderEventPlugin.GlobalResponderHandler !== null) {
			    ResponderEventPlugin.GlobalResponderHandler.onChange(oldResponderInst, nextResponderInst, blockHostResponder);
			  }
			};
			
			var eventTypes = {
			  /**
			   * On a `touchStart`/`mouseDown`, is it desired that this element become the
			   * responder?
			   */
			  startShouldSetResponder: {
			    phasedRegistrationNames: {
			      bubbled: keyOf({ onStartShouldSetResponder: null }),
			      captured: keyOf({ onStartShouldSetResponderCapture: null })
			    }
			  },
			
			  /**
			   * On a `scroll`, is it desired that this element become the responder? This
			   * is usually not needed, but should be used to retroactively infer that a
			   * `touchStart` had occurred during momentum scroll. During a momentum scroll,
			   * a touch start will be immediately followed by a scroll event if the view is
			   * currently scrolling.
			   *
			   * TODO: This shouldn't bubble.
			   */
			  scrollShouldSetResponder: {
			    phasedRegistrationNames: {
			      bubbled: keyOf({ onScrollShouldSetResponder: null }),
			      captured: keyOf({ onScrollShouldSetResponderCapture: null })
			    }
			  },
			
			  /**
			   * On text selection change, should this element become the responder? This
			   * is needed for text inputs or other views with native selection, so the
			   * JS view can claim the responder.
			   *
			   * TODO: This shouldn't bubble.
			   */
			  selectionChangeShouldSetResponder: {
			    phasedRegistrationNames: {
			      bubbled: keyOf({ onSelectionChangeShouldSetResponder: null }),
			      captured: keyOf({ onSelectionChangeShouldSetResponderCapture: null })
			    }
			  },
			
			  /**
			   * On a `touchMove`/`mouseMove`, is it desired that this element become the
			   * responder?
			   */
			  moveShouldSetResponder: {
			    phasedRegistrationNames: {
			      bubbled: keyOf({ onMoveShouldSetResponder: null }),
			      captured: keyOf({ onMoveShouldSetResponderCapture: null })
			    }
			  },
			
			  /**
			   * Direct responder events dispatched directly to responder. Do not bubble.
			   */
			  responderStart: { registrationName: keyOf({ onResponderStart: null }) },
			  responderMove: { registrationName: keyOf({ onResponderMove: null }) },
			  responderEnd: { registrationName: keyOf({ onResponderEnd: null }) },
			  responderRelease: { registrationName: keyOf({ onResponderRelease: null }) },
			  responderTerminationRequest: {
			    registrationName: keyOf({ onResponderTerminationRequest: null })
			  },
			  responderGrant: { registrationName: keyOf({ onResponderGrant: null }) },
			  responderReject: { registrationName: keyOf({ onResponderReject: null }) },
			  responderTerminate: { registrationName: keyOf({ onResponderTerminate: null }) }
			};
			
			/**
			 *
			 * Responder System:
			 * ----------------
			 *
			 * - A global, solitary "interaction lock" on a view.
			 * - If a node becomes the responder, it should convey visual feedback
			 *   immediately to indicate so, either by highlighting or moving accordingly.
			 * - To be the responder means, that touches are exclusively important to that
			 *   responder view, and no other view.
			 * - While touches are still occurring, the responder lock can be transferred to
			 *   a new view, but only to increasingly "higher" views (meaning ancestors of
			 *   the current responder).
			 *
			 * Responder being granted:
			 * ------------------------
			 *
			 * - Touch starts, moves, and scrolls can cause an ID to become the responder.
			 * - We capture/bubble `startShouldSetResponder`/`moveShouldSetResponder` to
			 *   the "appropriate place".
			 * - If nothing is currently the responder, the "appropriate place" is the
			 *   initiating event's `targetID`.
			 * - If something *is* already the responder, the "appropriate place" is the
			 *   first common ancestor of the event target and the current `responderInst`.
			 * - Some negotiation happens: See the timing diagram below.
			 * - Scrolled views automatically become responder. The reasoning is that a
			 *   platform scroll view that isn't built on top of the responder system has
			 *   began scrolling, and the active responder must now be notified that the
			 *   interaction is no longer locked to it - the system has taken over.
			 *
			 * - Responder being released:
			 *   As soon as no more touches that *started* inside of descendants of the
			 *   *current* responderInst, an `onResponderRelease` event is dispatched to the
			 *   current responder, and the responder lock is released.
			 *
			 * TODO:
			 * - on "end", a callback hook for `onResponderEndShouldRemainResponder` that
			 *   determines if the responder lock should remain.
			 * - If a view shouldn't "remain" the responder, any active touches should by
			 *   default be considered "dead" and do not influence future negotiations or
			 *   bubble paths. It should be as if those touches do not exist.
			 * -- For multitouch: Usually a translate-z will choose to "remain" responder
			 *  after one out of many touches ended. For translate-y, usually the view
			 *  doesn't wish to "remain" responder after one of many touches end.
			 * - Consider building this on top of a `stopPropagation` model similar to
			 *   `W3C` events.
			 * - Ensure that `onResponderTerminate` is called on touch cancels, whether or
			 *   not `onResponderTerminationRequest` returns `true` or `false`.
			 *
			 */
			
			/*                                             Negotiation Performed
			                                             +-----------------------+
			                                            /                         \
			Process low level events to    +     Current Responder      +   wantsResponderID
			determine who to perform negot-|   (if any exists at all)   |
			iation/transition              | Otherwise just pass through|
			-------------------------------+----------------------------+------------------+
			Bubble to find first ID        |                            |
			to return true:wantsResponderID|                            |
			                               |                            |
			     +-------------+           |                            |
			     | onTouchStart|           |                            |
			     +------+------+     none  |                            |
			            |            return|                            |
			+-----------v-------------+true| +------------------------+ |
			|onStartShouldSetResponder|----->|onResponderStart (cur)  |<-----------+
			+-----------+-------------+    | +------------------------+ |          |
			            |                  |                            | +--------+-------+
			            | returned true for|       false:REJECT +-------->|onResponderReject
			            | wantsResponderID |                    |       | +----------------+
			            | (now attempt     | +------------------+-----+ |
			            |  handoff)        | |   onResponder          | |
			            +------------------->|      TerminationRequest| |
			                               | +------------------+-----+ |
			                               |                    |       | +----------------+
			                               |         true:GRANT +-------->|onResponderGrant|
			                               |                            | +--------+-------+
			                               | +------------------------+ |          |
			                               | |   onResponderTerminate |<-----------+
			                               | +------------------+-----+ |
			                               |                    |       | +----------------+
			                               |                    +-------->|onResponderStart|
			                               |                            | +----------------+
			Bubble to find first ID        |                            |
			to return true:wantsResponderID|                            |
			                               |                            |
			     +-------------+           |                            |
			     | onTouchMove |           |                            |
			     +------+------+     none  |                            |
			            |            return|                            |
			+-----------v-------------+true| +------------------------+ |
			|onMoveShouldSetResponder |----->|onResponderMove (cur)   |<-----------+
			+-----------+-------------+    | +------------------------+ |          |
			            |                  |                            | +--------+-------+
			            | returned true for|       false:REJECT +-------->|onResponderRejec|
			            | wantsResponderID |                    |       | +----------------+
			            | (now attempt     | +------------------+-----+ |
			            |  handoff)        | |   onResponder          | |
			            +------------------->|      TerminationRequest| |
			                               | +------------------+-----+ |
			                               |                    |       | +----------------+
			                               |         true:GRANT +-------->|onResponderGrant|
			                               |                            | +--------+-------+
			                               | +------------------------+ |          |
			                               | |   onResponderTerminate |<-----------+
			                               | +------------------+-----+ |
			                               |                    |       | +----------------+
			                               |                    +-------->|onResponderMove |
			                               |                            | +----------------+
			                               |                            |
			                               |                            |
			      Some active touch started|                            |
			      inside current responder | +------------------------+ |
			      +------------------------->|      onResponderEnd    | |
			      |                        | +------------------------+ |
			  +---+---------+              |                            |
			  | onTouchEnd  |              |                            |
			  +---+---------+              |                            |
			      |                        | +------------------------+ |
			      +------------------------->|     onResponderEnd     | |
			      No active touches started| +-----------+------------+ |
			      inside current responder |             |              |
			                               |             v              |
			                               | +------------------------+ |
			                               | |    onResponderRelease  | |
			                               | +------------------------+ |
			                               |                            |
			                               +                            + */
			
			/**
			 * A note about event ordering in the `EventPluginHub`.
			 *
			 * Suppose plugins are injected in the following order:
			 *
			 * `[R, S, C]`
			 *
			 * To help illustrate the example, assume `S` is `SimpleEventPlugin` (for
			 * `onClick` etc) and `R` is `ResponderEventPlugin`.
			 *
			 * "Deferred-Dispatched Events":
			 *
			 * - The current event plugin system will traverse the list of injected plugins,
			 *   in order, and extract events by collecting the plugin's return value of
			 *   `extractEvents()`.
			 * - These events that are returned from `extractEvents` are "deferred
			 *   dispatched events".
			 * - When returned from `extractEvents`, deferred-dispatched events contain an
			 *   "accumulation" of deferred dispatches.
			 * - These deferred dispatches are accumulated/collected before they are
			 *   returned, but processed at a later time by the `EventPluginHub` (hence the
			 *   name deferred).
			 *
			 * In the process of returning their deferred-dispatched events, event plugins
			 * themselves can dispatch events on-demand without returning them from
			 * `extractEvents`. Plugins might want to do this, so that they can use event
			 * dispatching as a tool that helps them decide which events should be extracted
			 * in the first place.
			 *
			 * "On-Demand-Dispatched Events":
			 *
			 * - On-demand-dispatched events are not returned from `extractEvents`.
			 * - On-demand-dispatched events are dispatched during the process of returning
			 *   the deferred-dispatched events.
			 * - They should not have side effects.
			 * - They should be avoided, and/or eventually be replaced with another
			 *   abstraction that allows event plugins to perform multiple "rounds" of event
			 *   extraction.
			 *
			 * Therefore, the sequence of event dispatches becomes:
			 *
			 * - `R`s on-demand events (if any)   (dispatched by `R` on-demand)
			 * - `S`s on-demand events (if any)   (dispatched by `S` on-demand)
			 * - `C`s on-demand events (if any)   (dispatched by `C` on-demand)
			 * - `R`s extracted events (if any)   (dispatched by `EventPluginHub`)
			 * - `S`s extracted events (if any)   (dispatched by `EventPluginHub`)
			 * - `C`s extracted events (if any)   (dispatched by `EventPluginHub`)
			 *
			 * In the case of `ResponderEventPlugin`: If the `startShouldSetResponder`
			 * on-demand dispatch returns `true` (and some other details are satisfied) the
			 * `onResponderGrant` deferred dispatched event is returned from
			 * `extractEvents`. The sequence of dispatch executions in this case
			 * will appear as follows:
			 *
			 * - `startShouldSetResponder` (`ResponderEventPlugin` dispatches on-demand)
			 * - `touchStartCapture`       (`EventPluginHub` dispatches as usual)
			 * - `touchStart`              (`EventPluginHub` dispatches as usual)
			 * - `responderGrant/Reject`   (`EventPluginHub` dispatches as usual)
			 */
			
			function setResponderAndExtractTransfer(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
			  var shouldSetEventType = isStartish(topLevelType) ? eventTypes.startShouldSetResponder : isMoveish(topLevelType) ? eventTypes.moveShouldSetResponder : topLevelType === EventConstants.topLevelTypes.topSelectionChange ? eventTypes.selectionChangeShouldSetResponder : eventTypes.scrollShouldSetResponder;
			
			  // TODO: stop one short of the current responder.
			  var bubbleShouldSetFrom = !responderInst ? targetInst : EventPluginUtils.getLowestCommonAncestor(responderInst, targetInst);
			
			  // When capturing/bubbling the "shouldSet" event, we want to skip the target
			  // (deepest ID) if it happens to be the current responder. The reasoning:
			  // It's strange to get an `onMoveShouldSetResponder` when you're *already*
			  // the responder.
			  var skipOverBubbleShouldSetFrom = bubbleShouldSetFrom === responderInst;
			  var shouldSetEvent = ResponderSyntheticEvent.getPooled(shouldSetEventType, bubbleShouldSetFrom, nativeEvent, nativeEventTarget);
			  shouldSetEvent.touchHistory = ResponderTouchHistoryStore.touchHistory;
			  if (skipOverBubbleShouldSetFrom) {
			    EventPropagators.accumulateTwoPhaseDispatchesSkipTarget(shouldSetEvent);
			  } else {
			    EventPropagators.accumulateTwoPhaseDispatches(shouldSetEvent);
			  }
			  var wantsResponderInst = executeDispatchesInOrderStopAtTrue(shouldSetEvent);
			  if (!shouldSetEvent.isPersistent()) {
			    shouldSetEvent.constructor.release(shouldSetEvent);
			  }
			
			  if (!wantsResponderInst || wantsResponderInst === responderInst) {
			    return null;
			  }
			  var extracted;
			  var grantEvent = ResponderSyntheticEvent.getPooled(eventTypes.responderGrant, wantsResponderInst, nativeEvent, nativeEventTarget);
			  grantEvent.touchHistory = ResponderTouchHistoryStore.touchHistory;
			
			  EventPropagators.accumulateDirectDispatches(grantEvent);
			  var blockHostResponder = executeDirectDispatch(grantEvent) === true;
			  if (responderInst) {
			
			    var terminationRequestEvent = ResponderSyntheticEvent.getPooled(eventTypes.responderTerminationRequest, responderInst, nativeEvent, nativeEventTarget);
			    terminationRequestEvent.touchHistory = ResponderTouchHistoryStore.touchHistory;
			    EventPropagators.accumulateDirectDispatches(terminationRequestEvent);
			    var shouldSwitch = !hasDispatches(terminationRequestEvent) || executeDirectDispatch(terminationRequestEvent);
			    if (!terminationRequestEvent.isPersistent()) {
			      terminationRequestEvent.constructor.release(terminationRequestEvent);
			    }
			
			    if (shouldSwitch) {
			      var terminateEvent = ResponderSyntheticEvent.getPooled(eventTypes.responderTerminate, responderInst, nativeEvent, nativeEventTarget);
			      terminateEvent.touchHistory = ResponderTouchHistoryStore.touchHistory;
			      EventPropagators.accumulateDirectDispatches(terminateEvent);
			      extracted = accumulate(extracted, [grantEvent, terminateEvent]);
			      changeResponder(wantsResponderInst, blockHostResponder);
			    } else {
			      var rejectEvent = ResponderSyntheticEvent.getPooled(eventTypes.responderReject, wantsResponderInst, nativeEvent, nativeEventTarget);
			      rejectEvent.touchHistory = ResponderTouchHistoryStore.touchHistory;
			      EventPropagators.accumulateDirectDispatches(rejectEvent);
			      extracted = accumulate(extracted, rejectEvent);
			    }
			  } else {
			    extracted = accumulate(extracted, grantEvent);
			    changeResponder(wantsResponderInst, blockHostResponder);
			  }
			  return extracted;
			}
			
			/**
			 * A transfer is a negotiation between a currently set responder and the next
			 * element to claim responder status. Any start event could trigger a transfer
			 * of responderInst. Any move event could trigger a transfer.
			 *
			 * @param {string} topLevelType Record from `EventConstants`.
			 * @return {boolean} True if a transfer of responder could possibly occur.
			 */
			function canTriggerTransfer(topLevelType, topLevelInst, nativeEvent) {
			  return topLevelInst && (
			  // responderIgnoreScroll: We are trying to migrate away from specifically
			  // tracking native scroll events here and responderIgnoreScroll indicates we
			  // will send topTouchCancel to handle canceling touch events instead
			  topLevelType === EventConstants.topLevelTypes.topScroll && !nativeEvent.responderIgnoreScroll || trackedTouchCount > 0 && topLevelType === EventConstants.topLevelTypes.topSelectionChange || isStartish(topLevelType) || isMoveish(topLevelType));
			}
			
			/**
			 * Returns whether or not this touch end event makes it such that there are no
			 * longer any touches that started inside of the current `responderInst`.
			 *
			 * @param {NativeEvent} nativeEvent Native touch end event.
			 * @return {boolean} Whether or not this touch end event ends the responder.
			 */
			function noResponderTouches(nativeEvent) {
			  var touches = nativeEvent.touches;
			  if (!touches || touches.length === 0) {
			    return true;
			  }
			  for (var i = 0; i < touches.length; i++) {
			    var activeTouch = touches[i];
			    var target = activeTouch.target;
			    if (target !== null && target !== undefined && target !== 0) {
			      // Is the original touch location inside of the current responder?
			      var targetInst = EventPluginUtils.getInstanceFromNode(target);
			      if (EventPluginUtils.isAncestor(responderInst, targetInst)) {
			        return false;
			      }
			    }
			  }
			  return true;
			}
			
			var ResponderEventPlugin = {
			
			  /* For unit testing only */
			  _getResponderID: function _getResponderID() {
			    return responderInst ? responderInst._rootNodeID : null;
			  },
			
			  eventTypes: eventTypes,
			
			  /**
			   * We must be resilient to `targetInst` being `null` on `touchMove` or
			   * `touchEnd`. On certain platforms, this means that a native scroll has
			   * assumed control and the original touch targets are destroyed.
			   */
			  extractEvents: function extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
			    if (isStartish(topLevelType)) {
			      trackedTouchCount += 1;
			    } else if (isEndish(topLevelType)) {
			      if (trackedTouchCount >= 0) {
			        trackedTouchCount -= 1;
			      } else {
			        console.error('Ended a touch event which was not counted in `trackedTouchCount`.');
			        return null;
			      }
			    }
			
			    ResponderTouchHistoryStore.recordTouchTrack(topLevelType, nativeEvent);
			
			    var extracted = canTriggerTransfer(topLevelType, targetInst, nativeEvent) ? setResponderAndExtractTransfer(topLevelType, targetInst, nativeEvent, nativeEventTarget) : null;
			    // Responder may or may not have transferred on a new touch start/move.
			    // Regardless, whoever is the responder after any potential transfer, we
			    // direct all touch start/move/ends to them in the form of
			    // `onResponderMove/Start/End`. These will be called for *every* additional
			    // finger that move/start/end, dispatched directly to whoever is the
			    // current responder at that moment, until the responder is "released".
			    //
			    // These multiple individual change touch events are are always bookended
			    // by `onResponderGrant`, and one of
			    // (`onResponderRelease/onResponderTerminate`).
			    var isResponderTouchStart = responderInst && isStartish(topLevelType);
			    var isResponderTouchMove = responderInst && isMoveish(topLevelType);
			    var isResponderTouchEnd = responderInst && isEndish(topLevelType);
			    var incrementalTouch = isResponderTouchStart ? eventTypes.responderStart : isResponderTouchMove ? eventTypes.responderMove : isResponderTouchEnd ? eventTypes.responderEnd : null;
			
			    if (incrementalTouch) {
			      var gesture = ResponderSyntheticEvent.getPooled(incrementalTouch, responderInst, nativeEvent, nativeEventTarget);
			      gesture.touchHistory = ResponderTouchHistoryStore.touchHistory;
			      EventPropagators.accumulateDirectDispatches(gesture);
			      extracted = accumulate(extracted, gesture);
			    }
			
			    var isResponderTerminate = responderInst && topLevelType === EventConstants.topLevelTypes.topTouchCancel;
			    var isResponderRelease = responderInst && !isResponderTerminate && isEndish(topLevelType) && noResponderTouches(nativeEvent);
			    var finalTouch = isResponderTerminate ? eventTypes.responderTerminate : isResponderRelease ? eventTypes.responderRelease : null;
			    if (finalTouch) {
			      var finalEvent = ResponderSyntheticEvent.getPooled(finalTouch, responderInst, nativeEvent, nativeEventTarget);
			      finalEvent.touchHistory = ResponderTouchHistoryStore.touchHistory;
			      EventPropagators.accumulateDirectDispatches(finalEvent);
			      extracted = accumulate(extracted, finalEvent);
			      changeResponder(null);
			    }
			
			    var numberActiveTouches = ResponderTouchHistoryStore.touchHistory.numberActiveTouches;
			    if (ResponderEventPlugin.GlobalInteractionHandler && numberActiveTouches !== previousActiveTouches) {
			      ResponderEventPlugin.GlobalInteractionHandler.onChange(numberActiveTouches);
			    }
			    previousActiveTouches = numberActiveTouches;
			
			    return extracted;
			  },
			
			  GlobalResponderHandler: null,
			  GlobalInteractionHandler: null,
			
			  injection: {
			    /**
			     * @param {{onChange: (ReactID, ReactID) => void} GlobalResponderHandler
			     * Object that handles any change in responder. Use this to inject
			     * integration with an existing touch handling system etc.
			     */
			    injectGlobalResponderHandler: function injectGlobalResponderHandler(GlobalResponderHandler) {
			      ResponderEventPlugin.GlobalResponderHandler = GlobalResponderHandler;
			    },
			
			    /**
			     * @param {{onChange: (numberActiveTouches) => void} GlobalInteractionHandler
			     * Object that handles any change in the number of active touches.
			     */
			    injectGlobalInteractionHandler: function injectGlobalInteractionHandler(GlobalInteractionHandler) {
			      ResponderEventPlugin.GlobalInteractionHandler = GlobalInteractionHandler;
			    }
			  }
			};
			
			module.exports = ResponderEventPlugin;
		},		// lib/ResponderSyntheticEvent.js
		function(__inner_require__, exports, module){
			var SyntheticEvent = require('react@15.3/lib/SyntheticEvent.js');
			
			/**
			 * `touchHistory` isn't actually on the native event, but putting it in the
			 * interface will ensure that it is cleaned up when pooled/destroyed. The
			 * `ResponderEventPlugin` will populate it appropriately.
			 */
			var ResponderEventInterface = {
			  touchHistory: function touchHistory(nativeEvent) {
			    return null; // Actually doesn't even look at the native event.
			  }
			};
			
			/**
			 * @param {object} dispatchConfig Configuration used to dispatch this event.
			 * @param {string} dispatchMarker Marker identifying the event target.
			 * @param {object} nativeEvent Native event.
			 * @extends {SyntheticEvent}
			 */
			function ResponderSyntheticEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
			  return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
			}
			
			SyntheticEvent.augmentClass(ResponderSyntheticEvent, ResponderEventInterface);
			
			module.exports = ResponderSyntheticEvent;
		},		// lib/ResponderTouchHistoryStore.js
		function(__inner_require__, exports, module){
			var _prodInvariant = require('react@15.3/lib/reactProdInvariant.js');
			
			var EventPluginUtils = require('react@15.3/lib/EventPluginUtils.js');
			
			var invariant = require('fbjs@0.8/lib/invariant.js');
			var warning = require('fbjs@0.8/lib/warning.js');
			
			var isEndish = EventPluginUtils.isEndish;
			var isMoveish = EventPluginUtils.isMoveish;
			var isStartish = EventPluginUtils.isStartish;
			
			/**
			 * Tracks the position and time of each active touch by `touch.identifier`. We
			 * should typically only see IDs in the range of 1-20 because IDs get recycled
			 * when touches end and start again.
			 */
			
			var MAX_TOUCH_BANK = 20;
			var touchBank = [];
			var touchHistory = {
			  touchBank: touchBank,
			  numberActiveTouches: 0,
			  // If there is only one active touch, we remember its location. This prevents
			  // us having to loop through all of the touches all the time in the most
			  // common case.
			  indexOfSingleActiveTouch: -1,
			  mostRecentTimeStamp: 0
			};
			
			function timestampForTouch(touch) {
			  // The legacy internal implementation provides "timeStamp", which has been
			  // renamed to "timestamp". Let both work for now while we iron it out
			  // TODO (evv): rename timeStamp to timestamp in internal code
			  return touch.timeStamp || touch.timestamp;
			}
			
			/**
			 * TODO: Instead of making gestures recompute filtered velocity, we could
			 * include a built in velocity computation that can be reused globally.
			 */
			function createTouchRecord(touch) {
			  return {
			    touchActive: true,
			    startPageX: touch.pageX,
			    startPageY: touch.pageY,
			    startTimeStamp: timestampForTouch(touch),
			    currentPageX: touch.pageX,
			    currentPageY: touch.pageY,
			    currentTimeStamp: timestampForTouch(touch),
			    previousPageX: touch.pageX,
			    previousPageY: touch.pageY,
			    previousTimeStamp: timestampForTouch(touch)
			  };
			}
			
			function resetTouchRecord(touchRecord, touch) {
			  touchRecord.touchActive = true;
			  touchRecord.startPageX = touch.pageX;
			  touchRecord.startPageY = touch.pageY;
			  touchRecord.startTimeStamp = timestampForTouch(touch);
			  touchRecord.currentPageX = touch.pageX;
			  touchRecord.currentPageY = touch.pageY;
			  touchRecord.currentTimeStamp = timestampForTouch(touch);
			  touchRecord.previousPageX = touch.pageX;
			  touchRecord.previousPageY = touch.pageY;
			  touchRecord.previousTimeStamp = timestampForTouch(touch);
			}
			
			function getTouchIdentifier(_ref) {
			  var identifier = _ref.identifier;
			
			  !(identifier != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Touch object is missing identifier.') : _prodInvariant('138') : void 0;
			  process.env.NODE_ENV !== 'production' ? warning(identifier <= MAX_TOUCH_BANK, 'Touch identifier %s is greater than maximum supported %s which causes ' + 'performance issues backfilling array locations for all of the indices.', identifier, MAX_TOUCH_BANK) : void 0;
			  return identifier;
			}
			
			function recordTouchStart(touch) {
			  var identifier = getTouchIdentifier(touch);
			  var touchRecord = touchBank[identifier];
			  if (touchRecord) {
			    resetTouchRecord(touchRecord, touch);
			  } else {
			    touchBank[identifier] = createTouchRecord(touch);
			  }
			  touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
			}
			
			function recordTouchMove(touch) {
			  var touchRecord = touchBank[getTouchIdentifier(touch)];
			  if (touchRecord) {
			    touchRecord.touchActive = true;
			    touchRecord.previousPageX = touchRecord.currentPageX;
			    touchRecord.previousPageY = touchRecord.currentPageY;
			    touchRecord.previousTimeStamp = touchRecord.currentTimeStamp;
			    touchRecord.currentPageX = touch.pageX;
			    touchRecord.currentPageY = touch.pageY;
			    touchRecord.currentTimeStamp = timestampForTouch(touch);
			    touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
			  } else {
			    console.error('Cannot record touch move without a touch start.\n' + 'Touch Move: %s\n', 'Touch Bank: %s', printTouch(touch), printTouchBank());
			  }
			}
			
			function recordTouchEnd(touch) {
			  var touchRecord = touchBank[getTouchIdentifier(touch)];
			  if (touchRecord) {
			    touchRecord.touchActive = false;
			    touchRecord.previousPageX = touchRecord.currentPageX;
			    touchRecord.previousPageY = touchRecord.currentPageY;
			    touchRecord.previousTimeStamp = touchRecord.currentTimeStamp;
			    touchRecord.currentPageX = touch.pageX;
			    touchRecord.currentPageY = touch.pageY;
			    touchRecord.currentTimeStamp = timestampForTouch(touch);
			    touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
			  } else {
			    console.error('Cannot record touch end without a touch start.\n' + 'Touch End: %s\n', 'Touch Bank: %s', printTouch(touch), printTouchBank());
			  }
			}
			
			function printTouch(touch) {
			  return JSON.stringify({
			    identifier: touch.identifier,
			    pageX: touch.pageX,
			    pageY: touch.pageY,
			    timestamp: timestampForTouch(touch)
			  });
			}
			
			function printTouchBank() {
			  var printed = JSON.stringify(touchBank.slice(0, MAX_TOUCH_BANK));
			  if (touchBank.length > MAX_TOUCH_BANK) {
			    printed += ' (original size: ' + touchBank.length + ')';
			  }
			  return printed;
			}
			
			var ResponderTouchHistoryStore = {
			  recordTouchTrack: function recordTouchTrack(topLevelType, nativeEvent) {
			    if (isMoveish(topLevelType)) {
			      nativeEvent.changedTouches.forEach(recordTouchMove);
			    } else if (isStartish(topLevelType)) {
			      nativeEvent.changedTouches.forEach(recordTouchStart);
			      touchHistory.numberActiveTouches = nativeEvent.touches.length;
			      if (touchHistory.numberActiveTouches === 1) {
			        touchHistory.indexOfSingleActiveTouch = nativeEvent.touches[0].identifier;
			      }
			    } else if (isEndish(topLevelType)) {
			      nativeEvent.changedTouches.forEach(recordTouchEnd);
			      touchHistory.numberActiveTouches = nativeEvent.touches.length;
			      if (touchHistory.numberActiveTouches === 1) {
			        for (var i = 0; i < touchBank.length; i++) {
			          var touchTrackToCheck = touchBank[i];
			          if (touchTrackToCheck != null && touchTrackToCheck.touchActive) {
			            touchHistory.indexOfSingleActiveTouch = i;
			            break;
			          }
			        }
			        if (process.env.NODE_ENV !== 'production') {
			          var activeRecord = touchBank[touchHistory.indexOfSingleActiveTouch];
			          process.env.NODE_ENV !== 'production' ? warning(activeRecord != null && activeRecord.touchActive, 'Cannot find single active touch.') : void 0;
			        }
			      }
			    }
			  },
			
			  touchHistory: touchHistory
			};
			
			module.exports = ResponderTouchHistoryStore;
		},		// lib/accumulate.js
		function(__inner_require__, exports, module){
			var _prodInvariant = require('react@15.3/lib/reactProdInvariant.js');
			
			var invariant = require('fbjs@0.8/lib/invariant.js');
			
			/**
			 * Accumulates items that must not be null or undefined.
			 *
			 * This is used to conserve memory by avoiding array allocations.
			 *
			 * @return {*|array<*>} An accumulation of items.
			 */
			function accumulate(current, next) {
			  !(next != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'accumulate(...): Accumulated items must be not be null or undefined.') : _prodInvariant('29') : void 0;
			
			  if (current == null) {
			    return next;
			  }
			
			  // Both are not empty. Warning: Never call x.concat(y) when you are not
			  // certain that x is an Array (x could be a string with concat method).
			  if (Array.isArray(current)) {
			    return current.concat(next);
			  }
			
			  if (Array.isArray(next)) {
			    return [current].concat(next);
			  }
			
			  return [current, next];
			}
			
			module.exports = accumulate;
		}
	];
});