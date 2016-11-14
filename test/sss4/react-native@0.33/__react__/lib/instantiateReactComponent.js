loader.define("react-native@0.33/__react__/lib/instantiateReactComponent.js", ["react-native@0.33/__react__/lib/reactProdInvariant.js", "object-assign@4/index.js", "react-native@0.33/__react__/lib/ReactCompositeComponent.js", "react-native@0.33/__react__/lib/ReactEmptyComponent.js", "react-native@0.33/__react__/lib/ReactHostComponent.js", "react-native@0.33/__fbjs__/lib/invariant.js", "react-native@0.33/__fbjs__/lib/warning.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// __react__/lib/instantiateReactComponent.js
	function (__inner_require__, exports, module) {
		var _prodInvariant = require('react-native@0.33/__react__/lib/reactProdInvariant.js'),
		    _assign = require('object-assign@4/index.js');

		var ReactCompositeComponent = require('react-native@0.33/__react__/lib/ReactCompositeComponent.js');
		var ReactEmptyComponent = require('react-native@0.33/__react__/lib/ReactEmptyComponent.js');
		var ReactHostComponent = require('react-native@0.33/__react__/lib/ReactHostComponent.js');

		var invariant = require('react-native@0.33/__fbjs__/lib/invariant.js');
		var warning = require('react-native@0.33/__fbjs__/lib/warning.js');

		var ReactCompositeComponentWrapper = function ReactCompositeComponentWrapper(element) {
			this.construct(element);
		};
		_assign(ReactCompositeComponentWrapper.prototype, ReactCompositeComponent.Mixin, {
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

		var nextDebugID = 1;

		function instantiateReactComponent(node, shouldHaveDebugID) {
			var instance;

			if (node === null || node === false) {
				instance = ReactEmptyComponent.create(instantiateReactComponent);
			} else if (typeof node === 'object') {
				var element = node;
				!(element && (typeof element.type === 'function' || typeof element.type === 'string')) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s', element.type == null ? element.type : typeof element.type, getDeclarationErrorAddendum(element._owner)) : _prodInvariant('130', element.type == null ? element.type : typeof element.type, getDeclarationErrorAddendum(element._owner)) : void 0;

				if (typeof element.type === 'string') {
					instance = ReactHostComponent.createInternalComponent(element);
				} else if (isInternalComponentType(element.type)) {

					instance = new element.type(element);

					if (!instance.getHostNode) {
						instance.getHostNode = instance.getNativeNode;
					}
				} else {
					instance = new ReactCompositeComponentWrapper(element);
				}
			} else if (typeof node === 'string' || typeof node === 'number') {
				instance = ReactHostComponent.createInstanceForText(node);
			} else {
				!false ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Encountered invalid React node of type %s', typeof node) : _prodInvariant('131', typeof node) : void 0;
			}

			if (process.env.NODE_ENV !== 'production') {
				process.env.NODE_ENV !== 'production' ? warning(typeof instance.mountComponent === 'function' && typeof instance.receiveComponent === 'function' && typeof instance.getHostNode === 'function' && typeof instance.unmountComponent === 'function', 'Only React Components can be mounted.') : void 0;
			}

			instance._mountIndex = 0;
			instance._mountImage = null;

			if (process.env.NODE_ENV !== 'production') {
				instance._debugID = shouldHaveDebugID ? nextDebugID++ : 0;
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