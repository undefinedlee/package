loader.define("react@15.3/lib/accumulateInto.js", ["react@15.3/lib/reactProdInvariant.js", "fbjs@0.8/lib/invariant.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/accumulateInto.js
		function(__inner_require__, exports, module){
			var _prodInvariant = require('react@15.3/lib/reactProdInvariant.js');
			
			var invariant = require('fbjs@0.8/lib/invariant.js');
			
			/**
			 * Accumulates items that must not be null or undefined into the first one. This
			 * is used to conserve memory by avoiding array allocations, and thus sacrifices
			 * API cleanness. Since `current` can be null before being passed in and not
			 * null after this function, make sure to assign it back to `current`:
			 *
			 * `a = accumulateInto(a, b);`
			 *
			 * This API should be sparingly used. Try `accumulate` for something cleaner.
			 *
			 * @return {*|array<*>} An accumulation of items.
			 */
			
			function accumulateInto(current, next) {
			  !(next != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'accumulateInto(...): Accumulated items must not be null or undefined.') : _prodInvariant('30') : void 0;
			
			  if (current == null) {
			    return next;
			  }
			
			  // Both are not empty. Warning: Never call x.concat(y) when you are not
			  // certain that x is an Array (x could be a string with concat method).
			  if (Array.isArray(current)) {
			    if (Array.isArray(next)) {
			      current.push.apply(current, next);
			      return current;
			    }
			    current.push(next);
			    return current;
			  }
			
			  if (Array.isArray(next)) {
			    // A bit too dangerous to mutate `next`.
			    return [current].concat(next);
			  }
			
			  return [current, next];
			}
			
			module.exports = accumulateInto;
		}
	];
});