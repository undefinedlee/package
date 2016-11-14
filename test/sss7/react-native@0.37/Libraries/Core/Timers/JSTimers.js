loader.define("react-native@0.37/Libraries/Core/Timers/JSTimers.js", ["react-native@0.37/Libraries/BatchedBridge/NativeModules.js", "react-native@0.37/Libraries/Core/Timers/JSTimersExecution.js", "react-native@0.37/Libraries/Core/Devtools/parseErrorStack.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Core/Timers/JSTimers.js
	function (__inner_require__, exports, module) {
		var RCTTiming = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js').Timing;
		var JSTimersExecution = require('react-native@0.37/Libraries/Core/Timers/JSTimersExecution.js');

		var parseErrorStack = require('react-native@0.37/Libraries/Core/Devtools/parseErrorStack.js');

		function _getFreeIndex() {
			var freeIndex = JSTimersExecution.timerIDs.indexOf(null);
			if (freeIndex === -1) {
				freeIndex = JSTimersExecution.timerIDs.length;
			}
			return freeIndex;
		}

		function _allocateCallback(func, type) {
			var id = JSTimersExecution.GUID++;
			var freeIndex = _getFreeIndex();
			JSTimersExecution.timerIDs[freeIndex] = id;
			JSTimersExecution.callbacks[freeIndex] = func;
			JSTimersExecution.types[freeIndex] = type;

			return id;
		}

		function _freeCallback(timerID) {

			if (timerID == null) {
				return;
			}

			var index = JSTimersExecution.timerIDs.indexOf(timerID);

			if (index !== -1) {
				JSTimersExecution._clearIndex(index);
				var type = JSTimersExecution.types[index];
				if (type !== 'setImmediate' && type !== 'requestIdleCallback') {
					RCTTiming.deleteTimer(timerID);
				}
			}
		}

		var JSTimers = {

			setTimeout: function setTimeout(func, duration) {
				for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
					args[_key - 2] = arguments[_key];
				}
				var id = _allocateCallback(function () {
					return func.apply(undefined, args);
				}, 'setTimeout');
				RCTTiming.createTimer(id, duration || 0, Date.now(), false);
				return id;
			},

			setInterval: function setInterval(func, duration) {
				for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
					args[_key2 - 2] = arguments[_key2];
				}
				var id = _allocateCallback(function () {
					return func.apply(undefined, args);
				}, 'setInterval');
				RCTTiming.createTimer(id, duration || 0, Date.now(), true);
				return id;
			},

			setImmediate: function setImmediate(func) {
				for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
					args[_key3 - 1] = arguments[_key3];
				}
				var id = _allocateCallback(function () {
					return func.apply(undefined, args);
				}, 'setImmediate');
				JSTimersExecution.immediates.push(id);
				return id;
			},

			requestAnimationFrame: function requestAnimationFrame(func) {
				var id = _allocateCallback(func, 'requestAnimationFrame');
				RCTTiming.createTimer(id, 1, Date.now(), false);
				return id;
			},

			requestIdleCallback: function requestIdleCallback(func) {
				if (JSTimersExecution.requestIdleCallbacks.length === 0) {
					RCTTiming.setSendIdleEvents(true);
				}

				var id = _allocateCallback(func, 'requestIdleCallback');
				JSTimersExecution.requestIdleCallbacks.push(id);
				return id;
			},

			cancelIdleCallback: function cancelIdleCallback(timerID) {
				_freeCallback(timerID);
				var index = JSTimersExecution.requestIdleCallbacks.indexOf(timerID);
				if (index !== -1) {
					JSTimersExecution.requestIdleCallbacks.splice(index, 1);
				}

				if (JSTimersExecution.requestIdleCallbacks.length === 0) {
					RCTTiming.setSendIdleEvents(false);
				}
			},

			clearTimeout: function clearTimeout(timerID) {
				_freeCallback(timerID);
			},

			clearInterval: function clearInterval(timerID) {
				_freeCallback(timerID);
			},

			clearImmediate: function clearImmediate(timerID) {
				_freeCallback(timerID);
				var index = JSTimersExecution.immediates.indexOf(timerID);
				if (index !== -1) {
					JSTimersExecution.immediates.splice(index, 1);
				}
			},

			cancelAnimationFrame: function cancelAnimationFrame(timerID) {
				_freeCallback(timerID);
			} };

		module.exports = JSTimers;
	}];
});