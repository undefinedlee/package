loader.define("react-native@0.33/Libraries/JavaScriptAppEngine/System/JSTimers/JSTimersExecution.js", ["react-native@0.33/Libraries/Utilities/Systrace.js", "react-native@0.33/__fbjs__/lib/invariant.js", "react-native@0.33/__fbjs__/lib/keyMirror.js", "react-native@0.33/__fbjs__/lib/performanceNow.js", "react-native@0.33/__fbjs__/lib/warning.js", "react-native@0.33/Libraries/JavaScriptAppEngine/System/JSTimers/JSTimers.js", "react-native@0.33/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/JavaScriptAppEngine/System/JSTimers/JSTimersExecution.js
	function (__inner_require__, exports, module) {
		var Systrace = require('react-native@0.33/Libraries/Utilities/Systrace.js');

		var invariant = require('react-native@0.33/__fbjs__/lib/invariant.js');
		var keyMirror = require('react-native@0.33/__fbjs__/lib/keyMirror.js');
		var performanceNow = require('react-native@0.33/__fbjs__/lib/performanceNow.js');
		var warning = require('react-native@0.33/__fbjs__/lib/warning.js');

		var FRAME_DURATION = 1000 / 60;
		var IDLE_CALLBACK_FRAME_DEADLINE = 1;

		var hasEmittedTimeDriftWarning = false;

		var JSTimersExecution = {
			GUID: 1,
			Type: keyMirror({
				setTimeout: null,
				setInterval: null,
				requestAnimationFrame: null,
				setImmediate: null,
				requestIdleCallback: null }),

			callbacks: [],
			types: [],
			timerIDs: [],
			immediates: [],
			requestIdleCallbacks: [],

			callTimer: function callTimer(timerID, frameTime) {
				warning(timerID <= JSTimersExecution.GUID, 'Tried to call timer with ID %s but no such timer exists.', timerID);

				var timerIndex = JSTimersExecution.timerIDs.indexOf(timerID);

				if (timerIndex === -1) {
					return;
				}
				var type = JSTimersExecution.types[timerIndex];
				var callback = JSTimersExecution.callbacks[timerIndex];

				if (type === JSTimersExecution.Type.setTimeout || type === JSTimersExecution.Type.setImmediate || type === JSTimersExecution.Type.requestAnimationFrame || type === JSTimersExecution.Type.requestIdleCallback) {
					JSTimersExecution._clearIndex(timerIndex);
				}

				try {
					if (type === JSTimersExecution.Type.setTimeout || type === JSTimersExecution.Type.setInterval || type === JSTimersExecution.Type.setImmediate) {
						callback();
					} else if (type === JSTimersExecution.Type.requestAnimationFrame) {
						var currentTime = performanceNow();
						callback(currentTime);
					} else if (type === JSTimersExecution.Type.requestIdleCallback) {
						callback({
							timeRemaining: function timeRemaining() {

								return Math.max(0, FRAME_DURATION - (performanceNow() - frameTime));
							} });
					} else {
						console.error('Tried to call a callback with invalid type: ' + type);
						return;
					}
				} catch (e) {

					JSTimersExecution.errors = JSTimersExecution.errors || [];
					JSTimersExecution.errors.push(e);
				}
			},

			callTimers: function callTimers(timerIDs) {
				invariant(timerIDs.length !== 0, 'Cannot call `callTimers` with an empty list of IDs.');

				JSTimersExecution.errors = null;
				timerIDs.forEach(function (id) {
					JSTimersExecution.callTimer(id);
				});

				var errors = JSTimersExecution.errors;
				if (errors) {
					var errorCount = errors.length;
					if (errorCount > 1) {

						for (var ii = 1; ii < errorCount; ii++) {
							require('react-native@0.33/Libraries/JavaScriptAppEngine/System/JSTimers/JSTimers.js').setTimeout(function (error) {
								throw error;
							}.bind(null, errors[ii]), 0);
						}
					}
					throw errors[0];
				}
			},

			callIdleCallbacks: function callIdleCallbacks(frameTime) {
				var _require = require('react-native@0.33/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js'),
				    Timing = _require.Timing;

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
					Timing.setSendIdleEvents(false);
				}

				if (JSTimersExecution.errors) {
					JSTimersExecution.errors.forEach(function (error) {
						return require('react-native@0.33/Libraries/JavaScriptAppEngine/System/JSTimers/JSTimers.js').setTimeout(function () {
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
						JSTimersExecution.callTimer(passImmediates[i]);
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
						return require('react-native@0.33/Libraries/JavaScriptAppEngine/System/JSTimers/JSTimers.js').setTimeout(function () {
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
			} };

		module.exports = JSTimersExecution;
	}];
});