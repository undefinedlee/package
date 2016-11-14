loader.define("fbjs@0.8/lib/keyMirror.js", ["fbjs@0.8/lib/invariant.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/keyMirror.js
		function(__inner_require__, exports, module){
			var invariant = require('fbjs@0.8/lib/invariant.js');
			
			/**
			 * Constructs an enumeration with keys equal to their value.
			 *
			 * For example:
			 *
			 *   var COLORS = keyMirror({blue: null, red: null});
			 *   var myColor = COLORS.blue;
			 *   var isColorValid = !!COLORS[myColor];
			 *
			 * The last line could not be performed if the values of the generated enum were
			 * not equal to their keys.
			 *
			 *   Input:  {key1: val1, key2: val2}
			 *   Output: {key1: key1, key2: key2}
			 *
			 * @param {object} obj
			 * @return {object}
			 */
			var keyMirror = function keyMirror(obj) {
			  var ret = {};
			  var key;
			  !(obj instanceof Object && !Array.isArray(obj)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'keyMirror(...): Argument must be an object.') : invariant(false) : void 0;
			  for (key in obj) {
			    if (!obj.hasOwnProperty(key)) {
			      continue;
			    }
			    ret[key] = key;
			  }
			  return ret;
			};
			
			module.exports = keyMirror;
		}
	];
});