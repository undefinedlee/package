loader.define("react-native@0.33/__react__/lib/ReactReconciler.js", ["react-native@0.33/__react__/lib/ReactInstrumentation.js", "react-native@0.33/__fbjs__/lib/warning.js", "react-native@0.33/__react__/lib/reactProdInvariant.js", "react-native@0.33/__fbjs__/lib/invariant.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// __react__/lib/ReactReconciler.js
	function (__inner_require__, exports, module) {
		var ReactRef = __inner_require__(1 /*__react__/lib/ReactRef.js*/);
		var ReactInstrumentation = require('react-native@0.33/__react__/lib/ReactInstrumentation.js');

		var warning = require('react-native@0.33/__fbjs__/lib/warning.js');

		function attachRefs() {
			ReactRef.attachRefs(this, this._currentElement);
		}

		var ReactReconciler = {

			mountComponent: function mountComponent(internalInstance, transaction, hostParent, hostContainerInfo, context, parentDebugID) {
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

			getHostNode: function getHostNode(internalInstance) {
				return internalInstance.getHostNode();
			},

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

			receiveComponent: function receiveComponent(internalInstance, nextElement, transaction, context) {
				var prevElement = internalInstance._currentElement;

				if (nextElement === prevElement && context === internalInstance._context) {

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

			performUpdateIfNecessary: function performUpdateIfNecessary(internalInstance, transaction, updateBatchNumber) {
				if (internalInstance._updateBatchNumber !== updateBatchNumber) {

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
			} };

		module.exports = ReactReconciler;
	}, // __react__/lib/ReactRef.js
	function (__inner_require__, exports, module) {
		var ReactOwner = __inner_require__(2 /*__react__/lib/ReactOwner.js*/);

		var ReactRef = {};

		function attachRef(ref, component, owner) {
			if (typeof ref === 'function') {
				ref(component.getPublicInstance());
			} else {

				ReactOwner.addComponentAsRefTo(component, ref, owner);
			}
		}

		function detachRef(ref, component, owner) {
			if (typeof ref === 'function') {
				ref(null);
			} else {

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

			var prevEmpty = prevElement === null || prevElement === false;
			var nextEmpty = nextElement === null || nextElement === false;

			return prevEmpty || nextEmpty || nextElement.ref !== prevElement.ref || typeof nextElement.ref === 'string' && nextElement._owner !== prevElement._owner;
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
	}, // __react__/lib/ReactOwner.js
	function (__inner_require__, exports, module) {
		var _prodInvariant = require('react-native@0.33/__react__/lib/reactProdInvariant.js');

		var invariant = require('react-native@0.33/__fbjs__/lib/invariant.js');

		var ReactOwner = {

			isValidOwner: function isValidOwner(object) {
				return !!(object && typeof object.attachRef === 'function' && typeof object.detachRef === 'function');
			},

			addComponentAsRefTo: function addComponentAsRefTo(component, ref, owner) {
				!ReactOwner.isValidOwner(owner) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'addComponentAsRefTo(...): Only a ReactOwner can have refs. You might be adding a ref to a component that was not created inside a component\'s `render` method, or you have multiple copies of React loaded (details: https://fb.me/react-refs-must-have-owner).') : _prodInvariant('119') : void 0;
				owner.attachRef(ref, component);
			},

			removeComponentAsRefFrom: function removeComponentAsRefFrom(component, ref, owner) {
				!ReactOwner.isValidOwner(owner) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'removeComponentAsRefFrom(...): Only a ReactOwner can have refs. You might be removing a ref to a component that was not created inside a component\'s `render` method, or you have multiple copies of React loaded (details: https://fb.me/react-refs-must-have-owner).') : _prodInvariant('120') : void 0;
				var ownerPublicInstance = owner.getPublicInstance();

				if (ownerPublicInstance && ownerPublicInstance.refs[ref] === component.getPublicInstance()) {
					owner.detachRef(ref);
				}
			} };

		module.exports = ReactOwner;
	}];
});