__d("fbjs@0.8/lib/getUnboundedScrollPosition.js", [], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/getUnboundedScrollPosition.js
		function(__inner_require__, exports, module){
			/**
			 * Gets the scroll position of the supplied element or window.
			 *
			 * The return values are unbounded, unlike `getScrollPosition`. This means they
			 * may be negative or exceed the element boundaries (which is possible using
			 * inertial scrolling).
			 *
			 * @param {DOMWindow|DOMElement} scrollable
			 * @return {object} Map with `x` and `y` keys.
			 */
			
			function getUnboundedScrollPosition(scrollable) {
			  if (scrollable === window) {
			    return {
			      x: window.pageXOffset || document.documentElement.scrollLeft,
			      y: window.pageYOffset || document.documentElement.scrollTop
			    };
			  }
			  return {
			    x: scrollable.scrollLeft,
			    y: scrollable.scrollTop
			  };
			}
			
			module.exports = getUnboundedScrollPosition;
		}
	];
});