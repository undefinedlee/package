__d("react-native@0.37/Libraries/Core/Timers/JSTimersExecution.js", ["react-native@0.37/Libraries/Performance/Systrace.js", "fbjs@0.8/lib/invariant.js", "fbjs@0.8/lib/performanceNow.js", "fbjs@0.8/lib/warning.js", "react-native@0.37/Libraries/Core/Timers/JSTimers.js", "react-native@0.37/Libraries/BatchedBridge/NativeModules.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Core/Timers/JSTimersExecution.js
	function (__inner_require__, exports, module) {
		var Systrace = require('react-native@0.37/Libraries/Performance/Systrace.js');

		var invariant = require('fbjs@0.8/lib/invariant.js');
		var performanceNow = require('fbjs@0.8/lib/performanceNow.js');
		var warning = require('fbjs@0.8/lib/warning.js');

		var FRAME_DURATION = 1000 / 60;
		var IDLE_CALLBACK_FRAME_DEADLINE = 1;

		var hasEmittedTimeDriftWarning = false;

		var JSTimersExecution = {
			GUID: 1,

			callbacks: [],
			types: [],
			timerIDs: [],
			immediates: [],
			requestIdleCallbacks: [],
			identifiers: [],

			errors: null,

			callTimer: function callTimer(timerID, frameTime) {
				warning(timerID <= JSTimersExecution.GUID, 'Tried to call timer with ID %s but no such timer exists.', timerID);

				var timerIndex = JSTimersExecution.timerIDs.indexOf(timerID);
				if (timerIndex === -1) {
					return;
				}

				var type = JSTimersExecution.types[timerIndex];
				var callback = JSTimersExecution.callbacks[timerIndex];
				if (!callback || !type) {
					console.error('No callback found for timerID ' + timerID);
					return;
				}

				if (type === 'setTimeout' || type === 'setImmediate' || type === 'requestAnimationFrame' || type === 'requestIdleCallback') {
					JSTimersExecution._clearIndex(timerIndex);
				}

				try {
					if (type === 'setTimeout' || type === 'setInterval' || type === 'setImmediate') {
						callback();
					} else if (type === 'requestAnimationFrame') {
						callback(performanceNow());
					} else if (type === 'requestIdleCallback') {
						callback({
							timeRemaining: function timeRemaining() {

								return Math.max(0, FRAME_DURATION - (performanceNow() - frameTime));
							} });
					} else {
						console.error('Tried to call a callback with invalid type: ' + type);
					}
				} catch (e) {

					if (!JSTimersExecution.errors) {
						JSTimersExecution.errors = [e];
					} else {
						JSTimersExecution.errors.push(e);
					}
				}
			},

			callTimers: function callTimers(timerIDs) {
				invariant(timerIDs.length !== 0, 'Cannot call `callTimers` with an empty list of IDs.');

				JSTimersExecution.errors = null;
				for (var i = 0; i < timerIDs.length; i++) {
					JSTimersExecution.callTimer(timerIDs[i], 0);
				}

				var errors = JSTimersExecution.errors;
				if (errors) {
					var errorCount = errors.length;
					if (errorCount > 1) {

						for (var ii = 1; ii < errorCount; ii++) {
							require('react-native@0.37/Libraries/Core/Timers/JSTimers.js').setTimeout(function (error) {
								throw error;
							}.bind(null, errors[ii]), 0);
						}
					}
					throw errors[0];
				}
			},

			callIdleCallbacks: function callIdleCallbacks(frameTime) {
				if (FRAME_DURATION - (performanceNow() - frameTime) < IDLE_CALLBACK_FRAME_DEADLINE) {
					return;
				}

				JSTimersExecution.errors = null;
				if (JSTimersExecution.requestIdleCallbacks.length > 0) {
					var passIdleCallbacks = JSTimersExecution.requestIdleCallbacks.slice();
					JSTimersExecution.requestIdleCallbacks = [];

					for (var i = 0; i < passIdleCallbacks.length; ++i) {
						JSTimersExecution.callTimer(passIdleCallbacks[i], frameTime);
					}
				}

				if (JSTimersExecution.requestIdleCallbacks.length === 0) {
					var _require = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js'),
					    Timing = _require.Timing;
					Timing.setSendIdleEvents(false);
				}

				if (JSTimersExecution.errors) {
					JSTimersExecution.errors.forEach(function (error) {
						return require('react-native@0.37/Libraries/Core/Timers/JSTimers.js').setTimeout(function () {
							throw error;
						}, 0);
					});
				}
			},

			callImmediatesPass: function callImmediatesPass() {
				Systrace.beginEvent('JSTimersExecution.callImmediatesPass()');

				if (JSTimersExecution.immediates.length > 0) {
					var passImmediates = JSTimersExecution.immediates.slice();
					JSTimersExecution.immediates = [];

					for (var i = 0; i < passImmediates.length; ++i) {
						JSTimersExecution.callTimer(passImmediates[i], 0);
					}
				}

				Systrace.endEvent();

				return JSTimersExecution.immediates.length > 0;
			},

			callImmediates: function callImmediates() {
				JSTimersExecution.errors = null;
				while (JSTimersExecution.callImmediatesPass()) {}
				if (JSTimersExecution.errors) {
					JSTimersExecution.errors.forEach(function (error) {
						return require('react-native@0.37/Libraries/Core/Timers/JSTimers.js').setTimeout(function () {
							throw error;
						}, 0);
					});
				}
			},

			emitTimeDriftWarning: function emitTimeDriftWarning(warningMessage) {
				if (hasEmittedTimeDriftWarning) {
					return;
				}
				hasEmittedTimeDriftWarning = true;
				console.warn(warningMessage);
			},

			_clearIndex: function _clearIndex(i) {
				JSTimersExecution.timerIDs[i] = null;
				JSTimersExecution.callbacks[i] = null;
				JSTimersExecution.types[i] = null;
				JSTimersExecution.identifiers[i] = null;
			} };

		module.exports = JSTimersExecution;
	}];
});