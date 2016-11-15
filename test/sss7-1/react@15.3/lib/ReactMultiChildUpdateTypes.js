__d("react@15.3/lib/ReactMultiChildUpdateTypes.js", ["fbjs@0.8/lib/keyMirror.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/ReactMultiChildUpdateTypes.js
		function(__inner_require__, exports, module){
			var keyMirror = require('fbjs@0.8/lib/keyMirror.js');
			
			/**
			 * When a component's children are updated, a series of update configuration
			 * objects are created in order to batch and serialize the required changes.
			 *
			 * Enumerates all the possible types of update configurations.
			 *
			 * @internal
			 */
			var ReactMultiChildUpdateTypes = keyMirror({
			  INSERT_MARKUP: null,
			  MOVE_EXISTING: null,
			  REMOVE_NODE: null,
			  SET_MARKUP: null,
			  TEXT_CONTENT: null
			});
			
			module.exports = ReactMultiChildUpdateTypes;
		}
	];
});