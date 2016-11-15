__d("fbjs@0.8/lib/hyphenateStyleName.js", [], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/hyphenateStyleName.js
		function(__inner_require__, exports, module){
			var hyphenate = __inner_require__(1 /*lib/hyphenate.js*/);
			
			var msPattern = /^ms-/;
			
			/**
			 * Hyphenates a camelcased CSS property name, for example:
			 *
			 *   > hyphenateStyleName('backgroundColor')
			 *   < "background-color"
			 *   > hyphenateStyleName('MozTransition')
			 *   < "-moz-transition"
			 *   > hyphenateStyleName('msTransition')
			 *   < "-ms-transition"
			 *
			 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
			 * is converted to `-ms-`.
			 *
			 * @param {string} string
			 * @return {string}
			 */
			function hyphenateStyleName(string) {
			  return hyphenate(string).replace(msPattern, '-ms-');
			}
			
			module.exports = hyphenateStyleName;
		},		// lib/hyphenate.js
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
			
			var _uppercasePattern = /([A-Z])/g;
			
			/**
			 * Hyphenates a camelcased string, for example:
			 *
			 *   > hyphenate('backgroundColor')
			 *   < "background-color"
			 *
			 * For CSS style names, use `hyphenateStyleName` instead which works properly
			 * with all vendor prefixes, including `ms`.
			 *
			 * @param {string} string
			 * @return {string}
			 */
			function hyphenate(string) {
			  return string.replace(_uppercasePattern, '-$1').toLowerCase();
			}
			
			module.exports = hyphenate;
		}
	];
});