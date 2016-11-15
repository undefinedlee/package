__d("react@15.3/lib/EventConstants.js", ["fbjs@0.8/lib/keyMirror.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/EventConstants.js
		function(__inner_require__, exports, module){
			var keyMirror = require('fbjs@0.8/lib/keyMirror.js');
			
			var PropagationPhases = keyMirror({ bubbled: null, captured: null });
			
			/**
			 * Types of raw signals from the browser caught at the top level.
			 */
			var topLevelTypes = keyMirror({
			  topAbort: null,
			  topAnimationEnd: null,
			  topAnimationIteration: null,
			  topAnimationStart: null,
			  topBlur: null,
			  topCanPlay: null,
			  topCanPlayThrough: null,
			  topChange: null,
			  topClick: null,
			  topCompositionEnd: null,
			  topCompositionStart: null,
			  topCompositionUpdate: null,
			  topContextMenu: null,
			  topCopy: null,
			  topCut: null,
			  topDoubleClick: null,
			  topDrag: null,
			  topDragEnd: null,
			  topDragEnter: null,
			  topDragExit: null,
			  topDragLeave: null,
			  topDragOver: null,
			  topDragStart: null,
			  topDrop: null,
			  topDurationChange: null,
			  topEmptied: null,
			  topEncrypted: null,
			  topEnded: null,
			  topError: null,
			  topFocus: null,
			  topInput: null,
			  topInvalid: null,
			  topKeyDown: null,
			  topKeyPress: null,
			  topKeyUp: null,
			  topLoad: null,
			  topLoadedData: null,
			  topLoadedMetadata: null,
			  topLoadStart: null,
			  topMouseDown: null,
			  topMouseMove: null,
			  topMouseOut: null,
			  topMouseOver: null,
			  topMouseUp: null,
			  topPaste: null,
			  topPause: null,
			  topPlay: null,
			  topPlaying: null,
			  topProgress: null,
			  topRateChange: null,
			  topReset: null,
			  topScroll: null,
			  topSeeked: null,
			  topSeeking: null,
			  topSelectionChange: null,
			  topStalled: null,
			  topSubmit: null,
			  topSuspend: null,
			  topTextInput: null,
			  topTimeUpdate: null,
			  topTouchCancel: null,
			  topTouchEnd: null,
			  topTouchMove: null,
			  topTouchStart: null,
			  topTransitionEnd: null,
			  topVolumeChange: null,
			  topWaiting: null,
			  topWheel: null
			});
			
			var EventConstants = {
			  topLevelTypes: topLevelTypes,
			  PropagationPhases: PropagationPhases
			};
			
			module.exports = EventConstants;
		}
	];
});