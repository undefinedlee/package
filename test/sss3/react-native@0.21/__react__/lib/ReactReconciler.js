loader.define("react-native@0.21/__react__/lib/ReactReconciler.js", ["react-native@0.21/__fbjs__/lib/invariant.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// __react__/lib/ReactReconciler.js
	function (__inner_require__, exports, module) {
		var ReactRef = __inner_require__(1 /*__react__/lib/ReactRef.js*/);

		function attachRefs() {
			ReactRef.attachRefs(this, this._currentElement);
		}

		var ReactReconciler = {

			mountComponent: function mountComponent(internalInstance, rootID, transaction, context) {
				var markup = internalInstance.mountComponent(rootID, transaction, context);
				if (internalInstance._currentElement && internalInstance._currentElement.ref != null) {
					transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
				}
				return markup;
			},

			unmountComponent: function unmountComponent(internalInstance) {
				ReactRef.detachRefs(internalInstance, internalInstance._currentElement);
				internalInstance.unmountComponent();
			},

			receiveComponent: function receiveComponent(internalInstance, nextElement, transaction, context) {
				var prevElement = internalInstance._currentElement;

				if (nextElement === prevElement && context === internalInstance._context) {

					return;
				}

				var refsChanged = ReactRef.shouldUpdateRefs(prevElement, nextElement);

				if (refsChanged) {
					ReactRef.detachRefs(internalInstance, prevElement);
				}

				internalInstance.receiveComponent(nextElement, transaction, context);

				if (refsChanged && internalInstance._currentElement && internalInstance._currentElement.ref != null) {
					transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
				}
			},

			performUpdateIfNecessary: function performUpdateIfNecessary(internalInstance, transaction) {
				internalInstance.performUpdateIfNecessary(transaction);
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

			return prevEmpty || nextEmpty || nextElement._owner !== prevElement._owner || nextElement.ref !== prevElement.ref;
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
		var invariant = require('react-native@0.21/__fbjs__/lib/invariant.js');

		var ReactOwner = {

			isValidOwner: function isValidOwner(object) {
				return !!(object && typeof object.attachRef === 'function' && typeof object.detachRef === 'function');
			},

			addComponentAsRefTo: function addComponentAsRefTo(component, ref, owner) {
				!ReactOwner.isValidOwner(owner) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'addComponentAsRefTo(...): Only a ReactOwner can have refs. You might ' + 'be adding a ref to a component that was not created inside a component\'s ' + '`render` method, or you have multiple copies of React loaded ' + '(details: https://fb.me/react-refs-must-have-owner).') : invariant(false) : undefined;
				owner.attachRef(ref, component);
			},

			removeComponentAsRefFrom: function removeComponentAsRefFrom(component, ref, owner) {
				!ReactOwner.isValidOwner(owner) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'removeComponentAsRefFrom(...): Only a ReactOwner can have refs. You might ' + 'be removing a ref to a component that was not created inside a component\'s ' + '`render` method, or you have multiple copies of React loaded ' + '(details: https://fb.me/react-refs-must-have-owner).') : invariant(false) : undefined;

				if (owner.getPublicInstance().refs[ref] === component.getPublicInstance()) {
					owner.detachRef(ref);
				}
			} };

		module.exports = ReactOwner;
	}];
});