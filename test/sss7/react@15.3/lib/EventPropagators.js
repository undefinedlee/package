loader.define("react@15.3/lib/EventPropagators.js", ["react@15.3/lib/EventConstants.js", "react@15.3/lib/EventPluginHub.js", "react@15.3/lib/EventPluginUtils.js", "react@15.3/lib/accumulateInto.js", "react@15.3/lib/forEachAccumulated.js", "fbjs@0.8/lib/warning.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/EventPropagators.js
		function(__inner_require__, exports, module){
			var EventConstants = require('react@15.3/lib/EventConstants.js');
			var EventPluginHub = require('react@15.3/lib/EventPluginHub.js');
			var EventPluginUtils = require('react@15.3/lib/EventPluginUtils.js');
			
			var accumulateInto = require('react@15.3/lib/accumulateInto.js');
			var forEachAccumulated = require('react@15.3/lib/forEachAccumulated.js');
			var warning = require('fbjs@0.8/lib/warning.js');
			
			var PropagationPhases = EventConstants.PropagationPhases;
			var getListener = EventPluginHub.getListener;
			
			/**
			 * Some event types have a notion of different registration names for different
			 * "phases" of propagation. This finds listeners by a given phase.
			 */
			function listenerAtPhase(inst, event, propagationPhase) {
			  var registrationName = event.dispatchConfig.phasedRegistrationNames[propagationPhase];
			  return getListener(inst, registrationName);
			}
			
			/**
			 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
			 * here, allows us to not have to bind or create functions for each event.
			 * Mutating the event's members allows us to not have to create a wrapping
			 * "dispatch" object that pairs the event with the listener.
			 */
			function accumulateDirectionalDispatches(inst, upwards, event) {
			  if (process.env.NODE_ENV !== 'production') {
			    process.env.NODE_ENV !== 'production' ? warning(inst, 'Dispatching inst must not be null') : void 0;
			  }
			  var phase = upwards ? PropagationPhases.bubbled : PropagationPhases.captured;
			  var listener = listenerAtPhase(inst, event, phase);
			  if (listener) {
			    event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
			    event._dispatchInstances = accumulateInto(event._dispatchInstances, inst);
			  }
			}
			
			/**
			 * Collect dispatches (must be entirely collected before dispatching - see unit
			 * tests). Lazily allocate the array to conserve memory.  We must loop through
			 * each event and perform the traversal for each one. We cannot perform a
			 * single traversal for the entire collection of events because each event may
			 * have a different target.
			 */
			function accumulateTwoPhaseDispatchesSingle(event) {
			  if (event && event.dispatchConfig.phasedRegistrationNames) {
			    EventPluginUtils.traverseTwoPhase(event._targetInst, accumulateDirectionalDispatches, event);
			  }
			}
			
			/**
			 * Same as `accumulateTwoPhaseDispatchesSingle`, but skips over the targetID.
			 */
			function accumulateTwoPhaseDispatchesSingleSkipTarget(event) {
			  if (event && event.dispatchConfig.phasedRegistrationNames) {
			    var targetInst = event._targetInst;
			    var parentInst = targetInst ? EventPluginUtils.getParentInstance(targetInst) : null;
			    EventPluginUtils.traverseTwoPhase(parentInst, accumulateDirectionalDispatches, event);
			  }
			}
			
			/**
			 * Accumulates without regard to direction, does not look for phased
			 * registration names. Same as `accumulateDirectDispatchesSingle` but without
			 * requiring that the `dispatchMarker` be the same as the dispatched ID.
			 */
			function accumulateDispatches(inst, ignoredDirection, event) {
			  if (event && event.dispatchConfig.registrationName) {
			    var registrationName = event.dispatchConfig.registrationName;
			    var listener = getListener(inst, registrationName);
			    if (listener) {
			      event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
			      event._dispatchInstances = accumulateInto(event._dispatchInstances, inst);
			    }
			  }
			}
			
			/**
			 * Accumulates dispatches on an `SyntheticEvent`, but only for the
			 * `dispatchMarker`.
			 * @param {SyntheticEvent} event
			 */
			function accumulateDirectDispatchesSingle(event) {
			  if (event && event.dispatchConfig.registrationName) {
			    accumulateDispatches(event._targetInst, null, event);
			  }
			}
			
			function accumulateTwoPhaseDispatches(events) {
			  forEachAccumulated(events, accumulateTwoPhaseDispatchesSingle);
			}
			
			function accumulateTwoPhaseDispatchesSkipTarget(events) {
			  forEachAccumulated(events, accumulateTwoPhaseDispatchesSingleSkipTarget);
			}
			
			function accumulateEnterLeaveDispatches(leave, enter, from, to) {
			  EventPluginUtils.traverseEnterLeave(from, to, accumulateDispatches, leave, enter);
			}
			
			function accumulateDirectDispatches(events) {
			  forEachAccumulated(events, accumulateDirectDispatchesSingle);
			}
			
			/**
			 * A small set of propagation patterns, each of which will accept a small amount
			 * of information, and generate a set of "dispatch ready event objects" - which
			 * are sets of events that have already been annotated with a set of dispatched
			 * listener functions/ids. The API is designed this way to discourage these
			 * propagation strategies from actually executing the dispatches, since we
			 * always want to collect the entire set of dispatches before executing event a
			 * single one.
			 *
			 * @constructor EventPropagators
			 */
			var EventPropagators = {
			  accumulateTwoPhaseDispatches: accumulateTwoPhaseDispatches,
			  accumulateTwoPhaseDispatchesSkipTarget: accumulateTwoPhaseDispatchesSkipTarget,
			  accumulateDirectDispatches: accumulateDirectDispatches,
			  accumulateEnterLeaveDispatches: accumulateEnterLeaveDispatches
			};
			
			module.exports = EventPropagators;
		}
	];
});