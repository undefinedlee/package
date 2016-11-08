// react-native@0.21/Libraries/JavaScriptAppEngine/System/JSTimers/JSTimersExecution.js
loader.define("react-native@0.21", "Libraries/JavaScriptAppEngine/System/JSTimers/JSTimersExecution.js", "16", function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/JavaScriptAppEngine/System/JSTimers/JSTimersExecution.js
	function (__inner_require__, exports, module) {
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');
		var keyMirror = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/keyMirror.js');
		var performanceNow = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/performanceNow.js');
		var warning = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/warning.js');
		var Systrace = require('react-native@0.21/Libraries/Utilities/Systrace.js');

		var JSTimersExecution = {
			GUID: 1,
			Type: keyMirror({
				setTimeout: null,
				setInterval: null,
				requestAnimationFrame: null,
				setImmediate: null }),

			callbacks: [],
			types: [],
			timerIDs: [],
			immediates: [],

			callTimer: function callTimer(timerID) {
				warning(timerID <= JSTimersExecution.GUID, 'Tried to call timer with ID ' + timerID + ' but no such timer exists');
				var timerIndex = JSTimersExecution.timerIDs.indexOf(timerID);

				if (timerIndex === -1) {
					return;
				}
				var type = JSTimersExecution.types[timerIndex];
				var callback = JSTimersExecution.callbacks[timerIndex];

				if (type === JSTimersExecution.Type.setTimeout || type === JSTimersExecution.Type.setImmediate || type === JSTimersExecution.Type.requestAnimationFrame) {
					JSTimersExecution._clearIndex(timerIndex);
				}

				try {
					if (type === JSTimersExecution.Type.setTimeout || type === JSTimersExecution.Type.setInterval || type === JSTimersExecution.Type.setImmediate) {
						callback();
					} else if (type === JSTimersExecution.Type.requestAnimationFrame) {
						var currentTime = performanceNow();
						callback(currentTime);
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
				invariant(timerIDs.length !== 0, 'Probably shouldn\'t call "callTimers" with no timerIDs');

				JSTimersExecution.errors = null;
				timerIDs.forEach(JSTimersExecution.callTimer);

				var errors = JSTimersExecution.errors;
				if (errors) {
					var errorCount = errors.length;
					if (errorCount > 1) {

						for (var ii = 1; ii < errorCount; ii++) {
							require('react-native@0.21/Libraries/JavaScriptAppEngine/System/JSTimers/JSTimers.js').setTimeout(function (error) {
								throw error;
							}.bind(null, errors[ii]), 0);
						}
					}
					throw errors[0];
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
						return require('react-native@0.21/Libraries/JavaScriptAppEngine/System/JSTimers/JSTimers.js').setTimeout(function () {
							throw error;
						}, 0);
					});
				}
			},

			_clearIndex: function _clearIndex(i) {
				JSTimersExecution.timerIDs[i] = null;
				JSTimersExecution.callbacks[i] = null;
				JSTimersExecution.types[i] = null;
			} };

		module.exports = JSTimersExecution;
	}];
});