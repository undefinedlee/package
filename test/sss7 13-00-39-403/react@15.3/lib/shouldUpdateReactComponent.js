loader.define("react@15.3/lib/shouldUpdateReactComponent.js", [], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/shouldUpdateReactComponent.js
		function(__inner_require__, exports, module){
			/**
			 * Given a `prevElement` and `nextElement`, determines if the existing
			 * instance should be updated as opposed to being destroyed or replaced by a new
			 * instance. Both arguments are elements. This ensures that this logic can
			 * operate on stateless trees without any backing instance.
			 *
			 * @param {?object} prevElement
			 * @param {?object} nextElement
			 * @return {boolean} True if the existing instance should be updated.
			 * @protected
			 */
			
			function shouldUpdateReactComponent(prevElement, nextElement) {
			  var prevEmpty = prevElement === null || prevElement === false;
			  var nextEmpty = nextElement === null || nextElement === false;
			  if (prevEmpty || nextEmpty) {
			    return prevEmpty === nextEmpty;
			  }
			
			  var prevType = typeof prevElement === 'undefined' ? 'undefined' : babelHelpers.typeof(prevElement);
			  var nextType = typeof nextElement === 'undefined' ? 'undefined' : babelHelpers.typeof(nextElement);
			  if (prevType === 'string' || prevType === 'number') {
			    return nextType === 'string' || nextType === 'number';
			  } else {
			    return nextType === 'object' && prevElement.type === nextElement.type && prevElement.key === nextElement.key;
			  }
			}
			
			module.exports = shouldUpdateReactComponent;
		}
	];
});