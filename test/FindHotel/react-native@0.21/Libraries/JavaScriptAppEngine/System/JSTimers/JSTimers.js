// react-native@0.21/Libraries/JavaScriptAppEngine/System/JSTimers/JSTimers.js
loader.define("react-native@0.21", "Libraries/JavaScriptAppEngine/System/JSTimers/JSTimers.js", "", function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/JavaScriptAppEngine/System/JSTimers/JSTimers.js
	function (__inner_require__, exports, module) {
		var RCTTiming = require('react-native@0.21/Libraries/BatchedBridge/BatchedBridgedModules/NativeModules.js').Timing;
		var JSTimersExecution = require('react-native@0.21/Libraries/JavaScriptAppEngine/System/JSTimers/JSTimersExecution.js');

		var JSTimers = {
			Types: JSTimersExecution.Types,

			_getFreeIndex: function _getFreeIndex() {
				var freeIndex = JSTimersExecution.timerIDs.indexOf(null);
				if (freeIndex === -1) {
					freeIndex = JSTimersExecution.timerIDs.length;
				}
				return freeIndex;
			},

			setTimeout: function setTimeout(func, duration) {
				for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
					args[_key - 2] = arguments[_key];
				}
				var newID = JSTimersExecution.GUID++;
				var freeIndex = JSTimers._getFreeIndex();
				JSTimersExecution.timerIDs[freeIndex] = newID;
				JSTimersExecution.callbacks[freeIndex] = function () {
					return func.apply(undefined, args);
				};
				JSTimersExecution.types[freeIndex] = JSTimersExecution.Type.setTimeout;
				RCTTiming.createTimer(newID, duration || 0, Date.now(), false);
				return newID;
			},

			setInterval: function setInterval(func, duration) {
				for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
					args[_key2 - 2] = arguments[_key2];
				}
				var newID = JSTimersExecution.GUID++;
				var freeIndex = JSTimers._getFreeIndex();
				JSTimersExecution.timerIDs[freeIndex] = newID;
				JSTimersExecution.callbacks[freeIndex] = function () {
					return func.apply(undefined, args);
				};
				JSTimersExecution.types[freeIndex] = JSTimersExecution.Type.setInterval;
				RCTTiming.createTimer(newID, duration || 0, Date.now(), true);
				return newID;
			},

			setImmediate: function setImmediate(func) {
				for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
					args[_key3 - 1] = arguments[_key3];
				}
				var newID = JSTimersExecution.GUID++;
				var freeIndex = JSTimers._getFreeIndex();
				JSTimersExecution.timerIDs[freeIndex] = newID;
				JSTimersExecution.callbacks[freeIndex] = function () {
					return func.apply(undefined, args);
				};
				JSTimersExecution.types[freeIndex] = JSTimersExecution.Type.setImmediate;
				JSTimersExecution.immediates.push(newID);
				return newID;
			},

			requestAnimationFrame: function requestAnimationFrame(func) {
				var newID = JSTimersExecution.GUID++;
				var freeIndex = JSTimers._getFreeIndex();
				JSTimersExecution.timerIDs[freeIndex] = newID;
				JSTimersExecution.callbacks[freeIndex] = func;
				JSTimersExecution.types[freeIndex] = JSTimersExecution.Type.requestAnimationFrame;
				RCTTiming.createTimer(newID, 1, Date.now(), false);
				return newID;
			},

			clearTimeout: function clearTimeout(timerID) {
				JSTimers._clearTimerID(timerID);
			},

			clearInterval: function clearInterval(timerID) {
				JSTimers._clearTimerID(timerID);
			},

			clearImmediate: function clearImmediate(timerID) {
				JSTimers._clearTimerID(timerID);
				JSTimersExecution.immediates.splice(JSTimersExecution.immediates.indexOf(timerID), 1);
			},

			cancelAnimationFrame: function cancelAnimationFrame(timerID) {
				JSTimers._clearTimerID(timerID);
			},

			_clearTimerID: function _clearTimerID(timerID) {

				if (timerID == null) {
					return;
				}

				var index = JSTimersExecution.timerIDs.indexOf(timerID);

				if (index !== -1) {
					JSTimersExecution._clearIndex(index);
					if (JSTimersExecution.types[index] !== JSTimersExecution.Type.setImmediate) {
						RCTTiming.deleteTimer(timerID);
					}
				}
			} };

		module.exports = JSTimers;
	}];
});