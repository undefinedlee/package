loader.define("fbjs@0.8/lib/containsNode.js", [], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/containsNode.js
		function(__inner_require__, exports, module){
			/**
			 * Copyright (c) 2013-present, Facebook, Inc.
			 * All rights reserved.
			 *
			 * This source code is licensed under the BSD-style license found in the
			 * LICENSE file in the root directory of this source tree. An additional grant
			 * of patent rights can be found in the PATENTS file in the same directory.
			 *
			 * 
			 */
			
			var isTextNode = __inner_require__(1 /*lib/isTextNode.js*/);
			
			/*eslint-disable no-bitwise */
			
			/**
			 * Checks if a given DOM node contains or is another DOM node.
			 */
			function containsNode(outerNode, innerNode) {
			  if (!outerNode || !innerNode) {
			    return false;
			  } else if (outerNode === innerNode) {
			    return true;
			  } else if (isTextNode(outerNode)) {
			    return false;
			  } else if (isTextNode(innerNode)) {
			    return containsNode(outerNode, innerNode.parentNode);
			  } else if ('contains' in outerNode) {
			    return outerNode.contains(innerNode);
			  } else if (outerNode.compareDocumentPosition) {
			    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
			  } else {
			    return false;
			  }
			}
			
			module.exports = containsNode;
		},		// lib/isTextNode.js
		function(__inner_require__, exports, module){
			/**
			 * Copyright (c) 2013-present, Facebook, Inc.
			 * All rights reserved.
			 *
			 * This source code is licensed under the BSD-style license found in the
			 * LICENSE file in the root directory of this source tree. An additional grant
			 * of patent rights can be found in the PATENTS file in the same directory.
			 *
			 * @typechecks
			 */
			
			var isNode = __inner_require__(2 /*lib/isNode.js*/);
			
			/**
			 * @param {*} object The object to check.
			 * @return {boolean} Whether or not the object is a DOM text node.
			 */
			function isTextNode(object) {
			  return isNode(object) && object.nodeType == 3;
			}
			
			module.exports = isTextNode;
		},		// lib/isNode.js
		function(__inner_require__, exports, module){
			/**
			 * Copyright (c) 2013-present, Facebook, Inc.
			 * All rights reserved.
			 *
			 * This source code is licensed under the BSD-style license found in the
			 * LICENSE file in the root directory of this source tree. An additional grant
			 * of patent rights can be found in the PATENTS file in the same directory.
			 *
			 * @typechecks
			 */
			
			/**
			 * @param {*} object The object to check.
			 * @return {boolean} Whether or not the object is a DOM node.
			 */
			
			function isNode(object) {
			  return !!(object && (typeof Node === 'function' ? object instanceof Node : (typeof object === 'undefined' ? 'undefined' : babelHelpers.typeof(object)) === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
			}
			
			module.exports = isNode;
		}
	];
});