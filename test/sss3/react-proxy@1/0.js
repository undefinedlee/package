// react-proxy@1/modules/index.js
loader.define("react-proxy@1", "modules/index.js", "0", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// modules/index.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
			  value: true
			});
			exports.getForceUpdate = exports.createProxy = undefined;
			
			var _supportsProtoAssignment = __inner_require__(1 /*modules/supportsProtoAssignment.js*/);
			
			var _supportsProtoAssignment2 = _interopRequireDefault(_supportsProtoAssignment);
			
			var _createClassProxy = __inner_require__(2 /*modules/createClassProxy.js*/);
			
			var _createClassProxy2 = _interopRequireDefault(_createClassProxy);
			
			var _reactDeepForceUpdate = require('react-deep-force-update@1/lib/index.js');
			
			var _reactDeepForceUpdate2 = _interopRequireDefault(_reactDeepForceUpdate);
			
			function _interopRequireDefault(obj) {
			  return obj && obj.__esModule ? obj : { default: obj };
			}
			
			if (!(0, _supportsProtoAssignment2.default)()) {
			  console.warn('This JavaScript environment does not support __proto__. ' + 'This means that react-proxy is unable to proxy React components. ' + 'Features that rely on react-proxy, such as react-transform-hmr, ' + 'will not function as expected.');
			}
			
			exports.createProxy = _createClassProxy2.default;
			exports.getForceUpdate = _reactDeepForceUpdate2.default;
		},
		// modules/supportsProtoAssignment.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
			  value: true
			});
			exports.default = supportsProtoAssignment;
			var x = {};
			var y = { supports: true };
			try {
			  x.__proto__ = y;
			} catch (err) {}
			
			function supportsProtoAssignment() {
			  return x.supports || false;
			};
		},
		// modules/createClassProxy.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
			  value: true
			});
			
			var _extends = Object.assign || function (target) {
			  for (var i = 1; i < arguments.length; i++) {
			    var source = arguments[i];for (var key in source) {
			      if (Object.prototype.hasOwnProperty.call(source, key)) {
			        target[key] = source[key];
			      }
			    }
			  }return target;
			};
			
			var _slicedToArray = function () {
			  function sliceIterator(arr, i) {
			    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
			      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
			        _arr.push(_s.value);if (i && _arr.length === i) break;
			      }
			    } catch (err) {
			      _d = true;_e = err;
			    } finally {
			      try {
			        if (!_n && _i["return"]) _i["return"]();
			      } finally {
			        if (_d) throw _e;
			      }
			    }return _arr;
			  }return function (arr, i) {
			    if (Array.isArray(arr)) {
			      return arr;
			    } else if (Symbol.iterator in Object(arr)) {
			      return sliceIterator(arr, i);
			    } else {
			      throw new TypeError("Invalid attempt to destructure non-iterable instance");
			    }
			  };
			}();
			
			exports.default = proxyClass;
			exports.default = createClassProxy;
			
			var _find = require("lodash@4/find.js");
			
			var _find2 = _interopRequireDefault(_find);
			
			var _createPrototypeProxy = __inner_require__(3 /*modules/createPrototypeProxy.js*/);
			
			var _createPrototypeProxy2 = _interopRequireDefault(_createPrototypeProxy);
			
			var _bindAutoBindMethods = __inner_require__(4 /*modules/bindAutoBindMethods.js*/);
			
			var _bindAutoBindMethods2 = _interopRequireDefault(_bindAutoBindMethods);
			
			var _deleteUnknownAutoBindMethods = __inner_require__(5 /*modules/deleteUnknownAutoBindMethods.js*/);
			
			var _deleteUnknownAutoBindMethods2 = _interopRequireDefault(_deleteUnknownAutoBindMethods);
			
			var _supportsProtoAssignment = __inner_require__(1 /*modules/supportsProtoAssignment.js*/);
			
			var _supportsProtoAssignment2 = _interopRequireDefault(_supportsProtoAssignment);
			
			function _interopRequireDefault(obj) {
			  return obj && obj.__esModule ? obj : { default: obj };
			}
			
			function _toConsumableArray(arr) {
			  if (Array.isArray(arr)) {
			    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
			      arr2[i] = arr[i];
			    }return arr2;
			  } else {
			    return Array.from(arr);
			  }
			}
			
			var RESERVED_STATICS = ['length', 'name', 'arguments', 'caller', 'prototype', 'toString'];
			
			function isEqualDescriptor(a, b) {
			  if (!a && !b) {
			    return true;
			  }
			  if (!a || !b) {
			    return false;
			  }
			  for (var key in a) {
			    if (a[key] !== b[key]) {
			      return false;
			    }
			  }
			  return true;
			}
			
			// This was originally a WeakMap but we had issues with React Native:
			// https://github.com/gaearon/react-proxy/issues/50#issuecomment-192928066
			var allProxies = [];
			function findProxy(Component) {
			  var pair = (0, _find2.default)(allProxies, function (_ref) {
			    var _ref2 = _slicedToArray(_ref, 1);
			
			    var key = _ref2[0];
			    return key === Component;
			  });
			  return pair ? pair[1] : null;
			}
			function addProxy(Component, proxy) {
			  allProxies.push([Component, proxy]);
			}
			
			function proxyClass(InitialComponent) {
			  // Prevent double wrapping.
			  // Given a proxy class, return the existing proxy managing it.
			  var existingProxy = findProxy(InitialComponent);
			  if (existingProxy) {
			    return existingProxy;
			  }
			
			  var prototypeProxy = (0, _createPrototypeProxy2.default)();
			  var CurrentComponent = undefined;
			  var ProxyComponent = undefined;
			
			  var staticDescriptors = {};
			  function wasStaticModifiedByUser(key) {
			    // Compare the descriptor with the one we previously set ourselves.
			    var currentDescriptor = Object.getOwnPropertyDescriptor(ProxyComponent, key);
			    return !isEqualDescriptor(staticDescriptors[key], currentDescriptor);
			  }
			
			  function instantiate(factory, context, params) {
			    var component = factory();
			
			    try {
			      return component.apply(context, params);
			    } catch (err) {
			      (function () {
			        // Native ES6 class instantiation
			        var instance = new (Function.prototype.bind.apply(component, [null].concat(_toConsumableArray(params))))();
			
			        Object.keys(instance).forEach(function (key) {
			          if (RESERVED_STATICS.indexOf(key) > -1) {
			            return;
			          }
			          context[key] = instance[key];
			        });
			      })();
			    }
			  }
			
			  try {
			    // Create a proxy constructor with matching name
			    ProxyComponent = new Function('factory', 'instantiate', 'return function ' + (InitialComponent.name || 'ProxyComponent') + '() {\n         return instantiate(factory, this, arguments);\n      }')(function () {
			      return CurrentComponent;
			    }, instantiate);
			  } catch (err) {
			    // Some environments may forbid dynamic evaluation
			    ProxyComponent = function ProxyComponent() {
			      return instantiate(function () {
			        return CurrentComponent;
			      }, this, arguments);
			    };
			  }
			
			  // Point proxy constructor to the proxy prototype
			  ProxyComponent.prototype = prototypeProxy.get();
			
			  // Proxy toString() to the current constructor
			  ProxyComponent.toString = function toString() {
			    return CurrentComponent.toString();
			  };
			
			  function update(NextComponent) {
			    if (typeof NextComponent !== 'function') {
			      throw new Error('Expected a constructor.');
			    }
			
			    // Prevent proxy cycles
			    var existingProxy = findProxy(NextComponent);
			    if (existingProxy) {
			      return update(existingProxy.__getCurrent());
			    }
			
			    // Save the next constructor so we call it
			    CurrentComponent = NextComponent;
			
			    // Update the prototype proxy with new methods
			    var mountedInstances = prototypeProxy.update(NextComponent.prototype);
			
			    // Set up the constructor property so accessing the statics work
			    ProxyComponent.prototype.constructor = ProxyComponent;
			
			    // Set up the same prototype for inherited statics
			    ProxyComponent.__proto__ = NextComponent.__proto__;
			
			    // Copy static methods and properties
			    Object.getOwnPropertyNames(NextComponent).forEach(function (key) {
			      if (RESERVED_STATICS.indexOf(key) > -1) {
			        return;
			      }
			
			      var staticDescriptor = _extends({}, Object.getOwnPropertyDescriptor(NextComponent, key), {
			        configurable: true
			      });
			
			      // Copy static unless user has redefined it at runtime
			      if (!wasStaticModifiedByUser(key)) {
			        Object.defineProperty(ProxyComponent, key, staticDescriptor);
			        staticDescriptors[key] = staticDescriptor;
			      }
			    });
			
			    // Remove old static methods and properties
			    Object.getOwnPropertyNames(ProxyComponent).forEach(function (key) {
			      if (RESERVED_STATICS.indexOf(key) > -1) {
			        return;
			      }
			
			      // Skip statics that exist on the next class
			      if (NextComponent.hasOwnProperty(key)) {
			        return;
			      }
			
			      // Skip non-configurable statics
			      var descriptor = Object.getOwnPropertyDescriptor(ProxyComponent, key);
			      if (descriptor && !descriptor.configurable) {
			        return;
			      }
			
			      // Delete static unless user has redefined it at runtime
			      if (!wasStaticModifiedByUser(key)) {
			        delete ProxyComponent[key];
			        delete staticDescriptors[key];
			      }
			    });
			
			    // Try to infer displayName
			    ProxyComponent.displayName = NextComponent.displayName || NextComponent.name;
			
			    // We might have added new methods that need to be auto-bound
			    mountedInstances.forEach(_bindAutoBindMethods2.default);
			    mountedInstances.forEach(_deleteUnknownAutoBindMethods2.default);
			
			    // Let the user take care of redrawing
			    return mountedInstances;
			  };
			
			  function get() {
			    return ProxyComponent;
			  }
			
			  function getCurrent() {
			    return CurrentComponent;
			  }
			
			  update(InitialComponent);
			
			  var proxy = { get: get, update: update };
			  addProxy(ProxyComponent, proxy);
			
			  Object.defineProperty(proxy, '__getCurrent', {
			    configurable: false,
			    writable: false,
			    enumerable: false,
			    value: getCurrent
			  });
			
			  return proxy;
			}
			
			function createFallback(Component) {
			  var CurrentComponent = Component;
			
			  return {
			    get: function get() {
			      return CurrentComponent;
			    },
			    update: function update(NextComponent) {
			      CurrentComponent = NextComponent;
			    }
			  };
			}
			
			function createClassProxy(Component) {
			  return Component.__proto__ && (0, _supportsProtoAssignment2.default)() ? proxyClass(Component) : createFallback(Component);
			}
		},
		// modules/createPrototypeProxy.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
			  value: true
			});
			exports.default = createPrototypeProxy;
			
			var _assign = require('lodash@4/assign.js');
			
			var _assign2 = _interopRequireDefault(_assign);
			
			var _difference = require('lodash@4/difference.js');
			
			var _difference2 = _interopRequireDefault(_difference);
			
			function _interopRequireDefault(obj) {
			  return obj && obj.__esModule ? obj : { default: obj };
			}
			
			function createPrototypeProxy() {
			  var proxy = {};
			  var current = null;
			  var mountedInstances = [];
			
			  /**
			   * Creates a proxied toString() method pointing to the current version's toString().
			   */
			  function proxyToString(name) {
			    // Wrap to always call the current version
			    return function toString() {
			      if (typeof current[name] === 'function') {
			        return current[name].toString();
			      } else {
			        return '<method was deleted>';
			      }
			    };
			  }
			
			  /**
			   * Creates a proxied method that calls the current version, whenever available.
			   */
			  function proxyMethod(name) {
			    // Wrap to always call the current version
			    var proxiedMethod = function proxiedMethod() {
			      if (typeof current[name] === 'function') {
			        return current[name].apply(this, arguments);
			      }
			    };
			
			    // Copy properties of the original function, if any
			    (0, _assign2.default)(proxiedMethod, current[name]);
			    proxiedMethod.toString = proxyToString(name);
			
			    return proxiedMethod;
			  }
			
			  /**
			   * Augments the original componentDidMount with instance tracking.
			   */
			  function proxiedComponentDidMount() {
			    mountedInstances.push(this);
			    if (typeof current.componentDidMount === 'function') {
			      return current.componentDidMount.apply(this, arguments);
			    }
			  }
			  proxiedComponentDidMount.toString = proxyToString('componentDidMount');
			
			  /**
			   * Augments the original componentWillUnmount with instance tracking.
			   */
			  function proxiedComponentWillUnmount() {
			    var index = mountedInstances.indexOf(this);
			    // Unless we're in a weird environment without componentDidMount
			    if (index !== -1) {
			      mountedInstances.splice(index, 1);
			    }
			    if (typeof current.componentWillUnmount === 'function') {
			      return current.componentWillUnmount.apply(this, arguments);
			    }
			  }
			  proxiedComponentWillUnmount.toString = proxyToString('componentWillUnmount');
			
			  /**
			   * Defines a property on the proxy.
			   */
			  function defineProxyProperty(name, descriptor) {
			    Object.defineProperty(proxy, name, descriptor);
			  }
			
			  /**
			   * Defines a property, attempting to keep the original descriptor configuration.
			   */
			  function defineProxyPropertyWithValue(name, value) {
			    var _ref = Object.getOwnPropertyDescriptor(current, name) || {};
			
			    var _ref$enumerable = _ref.enumerable;
			    var enumerable = _ref$enumerable === undefined ? false : _ref$enumerable;
			    var _ref$writable = _ref.writable;
			    var writable = _ref$writable === undefined ? true : _ref$writable;
			
			    defineProxyProperty(name, {
			      configurable: true,
			      enumerable: enumerable,
			      writable: writable,
			      value: value
			    });
			  }
			
			  /**
			   * Creates an auto-bind map mimicking the original map, but directed at proxy.
			   */
			  function createAutoBindMap() {
			    if (!current.__reactAutoBindMap) {
			      return;
			    }
			
			    var __reactAutoBindMap = {};
			    for (var name in current.__reactAutoBindMap) {
			      if (typeof proxy[name] === 'function' && current.__reactAutoBindMap.hasOwnProperty(name)) {
			        __reactAutoBindMap[name] = proxy[name];
			      }
			    }
			
			    return __reactAutoBindMap;
			  }
			
			  /**
			   * Creates an auto-bind map mimicking the original map, but directed at proxy.
			   */
			  function createAutoBindPairs() {
			    var __reactAutoBindPairs = [];
			
			    for (var i = 0; i < current.__reactAutoBindPairs.length; i += 2) {
			      var name = current.__reactAutoBindPairs[i];
			      var method = proxy[name];
			
			      if (typeof method === 'function') {
			        __reactAutoBindPairs.push(name, method);
			      }
			    }
			
			    return __reactAutoBindPairs;
			  }
			
			  /**
			   * Applies the updated prototype.
			   */
			  function update(next) {
			    // Save current source of truth
			    current = next;
			
			    // Find changed property names
			    var currentNames = Object.getOwnPropertyNames(current);
			    var previousName = Object.getOwnPropertyNames(proxy);
			    var removedNames = (0, _difference2.default)(previousName, currentNames);
			
			    // Remove properties and methods that are no longer there
			    removedNames.forEach(function (name) {
			      delete proxy[name];
			    });
			
			    // Copy every descriptor
			    currentNames.forEach(function (name) {
			      var descriptor = Object.getOwnPropertyDescriptor(current, name);
			      if (typeof descriptor.value === 'function') {
			        // Functions require additional wrapping so they can be bound later
			        defineProxyPropertyWithValue(name, proxyMethod(name));
			      } else {
			        // Other values can be copied directly
			        defineProxyProperty(name, descriptor);
			      }
			    });
			
			    // Track mounting and unmounting
			    defineProxyPropertyWithValue('componentDidMount', proxiedComponentDidMount);
			    defineProxyPropertyWithValue('componentWillUnmount', proxiedComponentWillUnmount);
			
			    if (current.hasOwnProperty('__reactAutoBindMap')) {
			      defineProxyPropertyWithValue('__reactAutoBindMap', createAutoBindMap());
			    }
			
			    if (current.hasOwnProperty('__reactAutoBindPairs')) {
			      defineProxyPropertyWithValue('__reactAutoBindPairs', createAutoBindPairs());
			    }
			
			    // Set up the prototype chain
			    proxy.__proto__ = next;
			
			    return mountedInstances;
			  }
			
			  /**
			   * Returns the up-to-date proxy prototype.
			   */
			  function get() {
			    return proxy;
			  }
			
			  return {
			    update: update,
			    get: get
			  };
			};
		},
		// modules/bindAutoBindMethods.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
			  value: true
			});
			exports.default = bindAutoBindMethods;
			/**
			 * Copyright 2013-2015, Facebook, Inc.
			 * All rights reserved.
			 *
			 * This source code is licensed under the BSD-style license found in the
			 * LICENSE file in the root directory of React source tree. An additional grant
			 * of patent rights can be found in the PATENTS file in the same directory.
			 *
			 * Original:
			 * https://github.com/facebook/react/blob/6508b1ad273a6f371e8d90ae676e5390199461b4/src/isomorphic/classic/class/ReactClass.js#L650-L713
			 */
			
			function bindAutoBindMethod(component, method) {
			  var boundMethod = method.bind(component);
			
			  boundMethod.__reactBoundContext = component;
			  boundMethod.__reactBoundMethod = method;
			  boundMethod.__reactBoundArguments = null;
			
			  var componentName = component.constructor.displayName,
			      _bind = boundMethod.bind;
			
			  boundMethod.bind = function (newThis) {
			    var args = Array.prototype.slice.call(arguments, 1);
			    if (newThis !== component && newThis !== null) {
			      console.warn('bind(): React component methods may only be bound to the ' + 'component instance. See ' + componentName);
			    } else if (!args.length) {
			      console.warn('bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See ' + componentName);
			      return boundMethod;
			    }
			
			    var reboundMethod = _bind.apply(boundMethod, arguments);
			    reboundMethod.__reactBoundContext = component;
			    reboundMethod.__reactBoundMethod = method;
			    reboundMethod.__reactBoundArguments = args;
			
			    return reboundMethod;
			  };
			
			  return boundMethod;
			}
			
			function bindAutoBindMethodsFromMap(component) {
			  for (var autoBindKey in component.__reactAutoBindMap) {
			    if (!component.__reactAutoBindMap.hasOwnProperty(autoBindKey)) {
			      return;
			    }
			
			    // Tweak: skip methods that are already bound.
			    // This is to preserve method reference in case it is used
			    // as a subscription handler that needs to be detached later.
			    if (component.hasOwnProperty(autoBindKey) && component[autoBindKey].__reactBoundContext === component) {
			      continue;
			    }
			
			    var method = component.__reactAutoBindMap[autoBindKey];
			    component[autoBindKey] = bindAutoBindMethod(component, method);
			  }
			}
			
			function bindAutoBindMethods(component) {
			  if (component.__reactAutoBindPairs) {
			    bindAutoBindMethodsFromArray(component);
			  } else if (component.__reactAutoBindMap) {
			    bindAutoBindMethodsFromMap(component);
			  }
			}
			
			function bindAutoBindMethodsFromArray(component) {
			  var pairs = component.__reactAutoBindPairs;
			
			  if (!pairs) {
			    return;
			  }
			
			  for (var i = 0; i < pairs.length; i += 2) {
			    var autoBindKey = pairs[i];
			
			    if (component.hasOwnProperty(autoBindKey) && component[autoBindKey].__reactBoundContext === component) {
			      continue;
			    }
			
			    var method = pairs[i + 1];
			
			    component[autoBindKey] = bindAutoBindMethod(component, method);
			  }
			}
		},
		// modules/deleteUnknownAutoBindMethods.js
		function(__inner_require__, exports, module){
			Object.defineProperty(exports, "__esModule", {
			  value: true
			});
			exports.default = deleteUnknownAutoBindMethods;
			function shouldDeleteClassicInstanceMethod(component, name) {
			  if (component.__reactAutoBindMap && component.__reactAutoBindMap.hasOwnProperty(name)) {
			    // It's a known autobound function, keep it
			    return false;
			  }
			
			  if (component.__reactAutoBindPairs && component.__reactAutoBindPairs.indexOf(name) >= 0) {
			    // It's a known autobound function, keep it
			    return false;
			  }
			
			  if (component[name].__reactBoundArguments !== null) {
			    // It's a function bound to specific args, keep it
			    return false;
			  }
			
			  // It's a cached bound method for a function
			  // that was deleted by user, so we delete it from component.
			  return true;
			}
			
			function shouldDeleteModernInstanceMethod(component, name) {
			  var prototype = component.constructor.prototype;
			
			  var prototypeDescriptor = Object.getOwnPropertyDescriptor(prototype, name);
			
			  if (!prototypeDescriptor || !prototypeDescriptor.get) {
			    // This is definitely not an autobinding getter
			    return false;
			  }
			
			  if (prototypeDescriptor.get().length !== component[name].length) {
			    // The length doesn't match, bail out
			    return false;
			  }
			
			  // This seems like a method bound using an autobinding getter on the prototype
			  // Hopefully we won't run into too many false positives.
			  return true;
			}
			
			function shouldDeleteInstanceMethod(component, name) {
			  var descriptor = Object.getOwnPropertyDescriptor(component, name);
			  if (typeof descriptor.value !== 'function') {
			    // Not a function, or something fancy: bail out
			    return;
			  }
			
			  if (component.__reactAutoBindMap || component.__reactAutoBindPairs) {
			    // Classic
			    return shouldDeleteClassicInstanceMethod(component, name);
			  } else {
			    // Modern
			    return shouldDeleteModernInstanceMethod(component, name);
			  }
			}
			
			/**
			 * Deletes autobound methods from the instance.
			 *
			 * For classic React classes, we only delete the methods that no longer exist in map.
			 * This means the user actually deleted them in code.
			 *
			 * For modern classes, we delete methods that exist on prototype with the same length,
			 * and which have getters on prototype, but are normal values on the instance.
			 * This is usually an indication that an autobinding decorator is being used,
			 * and the getter will re-generate the memoized handler on next access.
			 */
			function deleteUnknownAutoBindMethods(component) {
			  var names = Object.getOwnPropertyNames(component);
			
			  names.forEach(function (name) {
			    if (shouldDeleteInstanceMethod(component, name)) {
			      delete component[name];
			    }
			  });
			}
		}
	];
});