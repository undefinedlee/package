loader.define("react-native@0.33/__react__/lib/ReactHostComponent.js", ["react-native@0.33/__react__/lib/reactProdInvariant.js", "object-assign@4/index.js", "react-native@0.33/__fbjs__/lib/invariant.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// __react__/lib/ReactHostComponent.js
	function (__inner_require__, exports, module) {
		var _prodInvariant = require('react-native@0.33/__react__/lib/reactProdInvariant.js'),
		    _assign = require('object-assign@4/index.js');

		var invariant = require('react-native@0.33/__fbjs__/lib/invariant.js');

		var genericComponentClass = null;

		var tagToComponentClass = {};
		var textComponentClass = null;

		var ReactHostComponentInjection = {

			injectGenericComponentClass: function injectGenericComponentClass(componentClass) {
				genericComponentClass = componentClass;
			},

			injectTextComponentClass: function injectTextComponentClass(componentClass) {
				textComponentClass = componentClass;
			},

			injectComponentClasses: function injectComponentClasses(componentClasses) {
				_assign(tagToComponentClass, componentClasses);
			} };

		function createInternalComponent(element) {
			!genericComponentClass ? process.env.NODE_ENV !== 'production' ? invariant(false, 'There is no registered component for the tag %s', element.type) : _prodInvariant('111', element.type) : void 0;
			return new genericComponentClass(element);
		}

		function createInstanceForText(text) {
			return new textComponentClass(text);
		}

		function isTextComponent(component) {
			return component instanceof textComponentClass;
		}

		var ReactHostComponent = {
			createInternalComponent: createInternalComponent,
			createInstanceForText: createInstanceForText,
			isTextComponent: isTextComponent,
			injection: ReactHostComponentInjection };

		module.exports = ReactHostComponent;
	}];
});