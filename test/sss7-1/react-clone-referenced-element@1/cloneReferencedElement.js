__d("react-clone-referenced-element@1/cloneReferencedElement.js", ["react@15.3/react.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// cloneReferencedElement.js
		function(__inner_require__, exports, module){
			var React = require('react@15.3/react.js');
			
			function cloneReferencedElement(element, config) {
			  var cloneRef = config.ref;
			  var originalRef = element.ref;
			
			  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
			    children[_key - 2] = arguments[_key];
			  }
			
			  if (originalRef == null || cloneRef == null) {
			    return React.cloneElement.apply(React, [element, config].concat(children));
			  }
			
			  if (typeof originalRef !== 'function') {
			    if (__DEV__) {
			      console.warn('Cloning an element with a ref that will be overwritten because it ' + 'is not a function. Use a composable callback-style ref instead. ' + 'Ignoring ref: ' + originalRef);
			    }
			    return React.cloneElement.apply(React, [element, config].concat(children));
			  }
			
			  return React.cloneElement.apply(React, [element, babelHelpers.extends({}, config, {
			    ref: function ref(component) {
			      cloneRef(component);
			      originalRef(component);
			    }
			  })].concat(children));
			}
			
			module.exports = cloneReferencedElement;
		}
	];
});