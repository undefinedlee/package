__d("fbjs@0.8/lib/isNode.js", [], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/isNode.js
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