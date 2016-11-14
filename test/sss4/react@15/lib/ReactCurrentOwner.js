loader.define("react@15/lib/ReactCurrentOwner.js", [], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/ReactCurrentOwner.js
		function(__inner_require__, exports, module){
			/**
			 * Keeps track of the current owner.
			 *
			 * The current owner is the component who should own any components that are
			 * currently being constructed.
			 */
			
			var ReactCurrentOwner = {
			
			  /**
			   * @internal
			   * @type {ReactComponent}
			   */
			  current: null
			
			};
			
			module.exports = ReactCurrentOwner;
		}
	];
});