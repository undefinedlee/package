loader.define("fbjs@0.8/lib/camelizeStyleName.js", [], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/camelizeStyleName.js
		function(__inner_require__, exports, module){
			var camelize = __inner_require__(1 /*lib/camelize.js*/);
			
			var msPattern = /^-ms-/;
			
			/**
			 * Camelcases a hyphenated CSS property name, for example:
			 *
			 *   > camelizeStyleName('background-color')
			 *   < "backgroundColor"
			 *   > camelizeStyleName('-moz-transition')
			 *   < "MozTransition"
			 *   > camelizeStyleName('-ms-transition')
			 *   < "msTransition"
			 *
			 * As Andi Smith suggests
			 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
			 * is converted to lowercase `ms`.
			 *
			 * @param {string} string
			 * @return {string}
			 */
			function camelizeStyleName(string) {
			  return camelize(string.replace(msPattern, 'ms-'));
			}
			
			module.exports = camelizeStyleName;
		},		// lib/camelize.js
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
			
			var _hyphenPattern = /-(.)/g;
			
			/**
			 * Camelcases a hyphenated string, for example:
			 *
			 *   > camelize('background-color')
			 *   < "backgroundColor"
			 *
			 * @param {string} string
			 * @return {string}
			 */
			function camelize(string) {
			  return string.replace(_hyphenPattern, function (_, character) {
			    return character.toUpperCase();
			  });
			}
			
			module.exports = camelize;
		}
	];
});