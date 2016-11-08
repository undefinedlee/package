// react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactNativeComponent.js
loader.define("react-native@0.21", "Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactNativeComponent.js", "d", function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactNativeComponent.js
	function (__inner_require__, exports, module) {
		var assign = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/Object.assign.js');
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');

		var autoGenerateWrapperClass = null;
		var genericComponentClass = null;

		var tagToComponentClass = {};
		var textComponentClass = null;

		var ReactNativeComponentInjection = {

			injectGenericComponentClass: function injectGenericComponentClass(componentClass) {
				genericComponentClass = componentClass;
			},

			injectTextComponentClass: function injectTextComponentClass(componentClass) {
				textComponentClass = componentClass;
			},

			injectComponentClasses: function injectComponentClasses(componentClasses) {
				assign(tagToComponentClass, componentClasses);
			} };

		function getComponentClassForElement(element) {
			if (typeof element.type === 'function') {
				return element.type;
			}
			var tag = element.type;
			var componentClass = tagToComponentClass[tag];
			if (componentClass == null) {
				tagToComponentClass[tag] = componentClass = autoGenerateWrapperClass(tag);
			}
			return componentClass;
		}

		function createInternalComponent(element) {
			!genericComponentClass ? process.env.NODE_ENV !== 'production' ? invariant(false, 'There is no registered component for the tag %s', element.type) : invariant(false) : undefined;
			return new genericComponentClass(element.type, element.props);
		}

		function createInstanceForText(text) {
			return new textComponentClass(text);
		}

		function isTextComponent(component) {
			return component instanceof textComponentClass;
		}

		var ReactNativeComponent = {
			getComponentClassForElement: getComponentClassForElement,
			createInternalComponent: createInternalComponent,
			createInstanceForText: createInstanceForText,
			isTextComponent: isTextComponent,
			injection: ReactNativeComponentInjection };

		module.exports = ReactNativeComponent;
	}];
});