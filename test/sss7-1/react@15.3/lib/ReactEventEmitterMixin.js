__d("react@15.3/lib/ReactEventEmitterMixin.js", ["react@15.3/lib/EventPluginHub.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/ReactEventEmitterMixin.js
		function(__inner_require__, exports, module){
			var EventPluginHub = require('react@15.3/lib/EventPluginHub.js');
			
			function runEventQueueInBatch(events) {
			  EventPluginHub.enqueueEvents(events);
			  EventPluginHub.processEventQueue(false);
			}
			
			var ReactEventEmitterMixin = {
			
			  /**
			   * Streams a fired top-level event to `EventPluginHub` where plugins have the
			   * opportunity to create `ReactEvent`s to be dispatched.
			   */
			  handleTopLevel: function handleTopLevel(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
			    var events = EventPluginHub.extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget);
			    runEventQueueInBatch(events);
			  }
			};
			
			module.exports = ReactEventEmitterMixin;
		}
	];
});