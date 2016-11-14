loader.define("fbjs@0.8/lib/focusNode.js", [], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/focusNode.js
		function(__inner_require__, exports, module){
			/**
			 * @param {DOMElement} node input/textarea to focus
			 */
			
			function focusNode(node) {
			  // IE8 can throw "Can't move focus to the control because it is invisible,
			  // not enabled, or of a type that does not accept the focus." for all kinds of
			  // reasons that are too expensive and fragile to test.
			  try {
			    node.focus();
			  } catch (e) {}
			}
			
			module.exports = focusNode;
		}
	];
});