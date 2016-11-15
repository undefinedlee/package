__d("fbjs@0.8/lib/performanceNow.js", ["fbjs@0.8/lib/ExecutionEnvironment.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/performanceNow.js
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
			
			var performance = __inner_require__(1 /*lib/performance.js*/);
			
			var performanceNow;
			
			/**
			 * Detect if we can use `window.performance.now()` and gracefully fallback to
			 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
			 * because of Facebook's testing infrastructure.
			 */
			if (performance.now) {
			  performanceNow = function performanceNow() {
			    return performance.now();
			  };
			} else {
			  performanceNow = function performanceNow() {
			    return Date.now();
			  };
			}
			
			module.exports = performanceNow;
		},		// lib/performance.js
		function(__inner_require__, exports, module){
			var ExecutionEnvironment = require('fbjs@0.8/lib/ExecutionEnvironment.js');
			
			var performance;
			
			if (ExecutionEnvironment.canUseDOM) {
			  performance = window.performance || window.msPerformance || window.webkitPerformance;
			}
			
			module.exports = performance || {};
		}
	];
});