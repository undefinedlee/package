// react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/instantiateReactComponent.js
loader.define("react-native@0.21", "Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/instantiateReactComponent.js", "m", function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/instantiateReactComponent.js
	function (__inner_require__, exports, module) {
		var ReactCompositeComponent = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactCompositeComponent.js');
		var ReactEmptyComponent = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactEmptyComponent.js');
		var ReactNativeComponent = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactNativeComponent.js');

		var assign = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/Object.assign.js');
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var warning = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/warning.js');

		var ReactCompositeComponentWrapper = function ReactCompositeComponentWrapper() {};
		assign(ReactCompositeComponentWrapper.prototype, ReactCompositeComponent.Mixin, {
			_instantiateReactComponent: instantiateReactComponent });

		function getDeclarationErrorAddendum(owner) {
			if (owner) {
				var name = owner.getName();
				if (name) {
					return ' Check the render method of `' + name + '`.';
				}
			}
			return '';
		}

		function isInternalComponentType(type) {
			return typeof type === 'function' && typeof type.prototype !== 'undefined' && typeof type.prototype.mountComponent === 'function' && typeof type.prototype.receiveComponent === 'function';
		}

		function instantiateReactComponent(node) {
			var instance;

			if (node === null || node === false) {
				instance = new ReactEmptyComponent(instantiateReactComponent);
			} else if (typeof node === 'object') {
				var element = node;
				!(element && (typeof element.type === 'function' || typeof element.type === 'string')) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Element type is invalid: expected a string (for built-in components) ' + 'or a class/function (for composite components) but got: %s.%s', element.type == null ? element.type : typeof element.type, getDeclarationErrorAddendum(element._owner)) : invariant(false) : undefined;

				if (typeof element.type === 'string') {
					instance = ReactNativeComponent.createInternalComponent(element);
				} else if (isInternalComponentType(element.type)) {

					instance = new element.type(element);
				} else {
					instance = new ReactCompositeComponentWrapper();
				}
			} else if (typeof node === 'string' || typeof node === 'number') {
				instance = ReactNativeComponent.createInstanceForText(node);
			} else {
				!false ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Encountered invalid React node of type %s', typeof node) : invariant(false) : undefined;
			}

			if (process.env.NODE_ENV !== 'production') {
				process.env.NODE_ENV !== 'production' ? warning(typeof instance.construct === 'function' && typeof instance.mountComponent === 'function' && typeof instance.receiveComponent === 'function' && typeof instance.unmountComponent === 'function', 'Only React Components can be mounted.') : undefined;
			}

			instance.construct(node);

			instance._mountIndex = 0;
			instance._mountImage = null;

			if (process.env.NODE_ENV !== 'production') {
				instance._isOwnerNecessary = false;
				instance._warnedAboutRefsInRender = false;
			}

			if (process.env.NODE_ENV !== 'production') {
				if (Object.preventExtensions) {
					Object.preventExtensions(instance);
				}
			}

			return instance;
		}

		module.exports = instantiateReactComponent;
	}];
});