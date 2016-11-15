loader.define("fbjs@0.8/lib/requestAnimationFrame.js", ["fbjs@0.8/lib/emptyFunction.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/requestAnimationFrame.js
		function(__inner_require__, exports, module){
			/**
			 * Copyright 2014-2015, Facebook, Inc.
			 * All rights reserved.
			 *
			 * This source code is licensed under the BSD-style license found in the
			 * LICENSE file in the root directory of this source tree. An additional grant
			 * of patent rights can be found in the PATENTS file in the same directory.
			 *
			 */
			
			var emptyFunction = require('fbjs@0.8/lib/emptyFunction.js');
			var nativeRequestAnimationFrame = __inner_require__(1 /*lib/nativeRequestAnimationFrame.js*/);
			
			var lastTime = 0;
			
			var requestAnimationFrame = nativeRequestAnimationFrame || function (callback) {
			  var currTime = Date.now();
			  var timeDelay = Math.max(0, 16 - (currTime - lastTime));
			  lastTime = currTime + timeDelay;
			  return global.setTimeout(function () {
			    callback(Date.now());
			  }, timeDelay);
			};
			
			// Works around a rare bug in Safari 6 where the first request is never invoked.
			requestAnimationFrame(emptyFunction);
			
			module.exports = requestAnimationFrame;
		},		// lib/nativeRequestAnimationFrame.js
		function(__inner_require__, exports, module){
			/**
			 * Copyright (c) 2013-present, Facebook, Inc.
			 * All rights reserved.
			 *
			 * This source code is licensed under the BSD-style license found in the
			 * LICENSE file in the root directory of this source tree. An additional grant
			 * of patent rights can be found in the PATENTS file in the same directory.
			 *
			 */
			
			var nativeRequestAnimationFrame = global.requestAnimationFrame || global.webkitRequestAnimationFrame || global.mozRequestAnimationFrame || global.oRequestAnimationFrame || global.msRequestAnimationFrame;
			
			module.exports = nativeRequestAnimationFrame;
		}
	];
});