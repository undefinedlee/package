// lodash@4/_root.js
loader.define("lodash@4", "_root.js", "", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// _root.js
		function(__inner_require__, exports, module){
			var checkGlobal = __inner_require__(1 /*_checkGlobal.js*/);
			
			/** Detect free variable `global` from Node.js. */
			var freeGlobal = checkGlobal((typeof global === 'undefined' ? 'undefined' : babelHelpers.typeof(global)) == 'object' && global);
			
			/** Detect free variable `self`. */
			var freeSelf = checkGlobal((typeof self === 'undefined' ? 'undefined' : babelHelpers.typeof(self)) == 'object' && self);
			
			/** Detect `this` as the global object. */
			var thisGlobal = checkGlobal(babelHelpers.typeof(undefined) == 'object' && undefined);
			
			/** Used as a reference to the global object. */
			var root = freeGlobal || freeSelf || thisGlobal || Function('return this')();
			
			module.exports = root;
		},
		// _checkGlobal.js
		function(__inner_require__, exports, module){
			/**
			 * Checks if `value` is a global object.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
			 */
			function checkGlobal(value) {
			  return value && value.Object === Object ? value : null;
			}
			
			module.exports = checkGlobal;
		}
	];
});