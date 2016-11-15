__d("fbjs@0.8/lib/getActiveElement.js", [], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/getActiveElement.js
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
			
			/* eslint-disable fb-www/typeof-undefined */
			
			/**
			 * Same as document.activeElement but wraps in a try-catch block. In IE it is
			 * not safe to call document.activeElement if there is nothing focused.
			 *
			 * The activeElement will be null only if the document or document body is not
			 * yet defined.
			 */
			
			function getActiveElement() /*?DOMElement*/{
			  if (typeof document === 'undefined') {
			    return null;
			  }
			  try {
			    return document.activeElement || document.body;
			  } catch (e) {
			    return document.body;
			  }
			}
			
			module.exports = getActiveElement;
		}
	];
});