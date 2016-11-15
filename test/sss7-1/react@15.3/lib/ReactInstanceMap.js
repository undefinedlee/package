__d("react@15.3/lib/ReactInstanceMap.js", [], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/ReactInstanceMap.js
		function(__inner_require__, exports, module){
			/**
			 * `ReactInstanceMap` maintains a mapping from a public facing stateful
			 * instance (key) and the internal representation (value). This allows public
			 * methods to accept the user facing instance as an argument and map them back
			 * to internal methods.
			 */
			
			// TODO: Replace this with ES6: var ReactInstanceMap = new Map();
			
			var ReactInstanceMap = {
			
			  /**
			   * This API should be called `delete` but we'd have to make sure to always
			   * transform these to strings for IE support. When this transform is fully
			   * supported we can rename it.
			   */
			  remove: function remove(key) {
			    key._reactInternalInstance = undefined;
			  },
			
			  get: function get(key) {
			    return key._reactInternalInstance;
			  },
			
			  has: function has(key) {
			    return key._reactInternalInstance !== undefined;
			  },
			
			  set: function set(key, value) {
			    key._reactInternalInstance = value;
			  }
			
			};
			
			module.exports = ReactInstanceMap;
		}
	];
});