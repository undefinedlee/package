loader.define("fbjs@0.8/lib/Promise.native.js", ["promise@7/setimmediate/es6-extensions.js", "promise@7/setimmediate/done.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/Promise.native.js
		function(__inner_require__, exports, module){
			var Promise = require('promise@7/setimmediate/es6-extensions.js');
			require('promise@7/setimmediate/done.js');
			
			/**
			 * Handle either fulfillment or rejection with the same callback.
			 */
			Promise.prototype['finally'] = function (onSettled) {
			  return this.then(onSettled, onSettled);
			};
			
			module.exports = Promise;
		}
	];
});