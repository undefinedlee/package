// react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactEmptyComponent.js
loader.define("react-native@0.21", "Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactEmptyComponent.js", "9", function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactEmptyComponent.js
	function (__inner_require__, exports, module) {
		var ReactElement = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactElement.js');
		var ReactEmptyComponentRegistry = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactEmptyComponentRegistry.js');
		var ReactReconciler = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactReconciler.js');

		var assign = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/Object.assign.js');

		var placeholderElement;

		var ReactEmptyComponentInjection = {
			injectEmptyComponent: function injectEmptyComponent(component) {
				placeholderElement = ReactElement.createElement(component);
			} };

		function registerNullComponentID() {
			ReactEmptyComponentRegistry.registerNullComponentID(this._rootNodeID);
		}

		var ReactEmptyComponent = function ReactEmptyComponent(instantiate) {
			this._currentElement = null;
			this._rootNodeID = null;
			this._renderedComponent = instantiate(placeholderElement);
		};
		assign(ReactEmptyComponent.prototype, {
			construct: function construct(element) {},
			mountComponent: function mountComponent(rootID, transaction, context) {
				transaction.getReactMountReady().enqueue(registerNullComponentID, this);
				this._rootNodeID = rootID;
				return ReactReconciler.mountComponent(this._renderedComponent, rootID, transaction, context);
			},
			receiveComponent: function receiveComponent() {},
			unmountComponent: function unmountComponent(rootID, transaction, context) {
				ReactReconciler.unmountComponent(this._renderedComponent);
				ReactEmptyComponentRegistry.deregisterNullComponentID(this._rootNodeID);
				this._rootNodeID = null;
				this._renderedComponent = null;
			} });

		ReactEmptyComponent.injection = ReactEmptyComponentInjection;

		module.exports = ReactEmptyComponent;
	}];
});