loader.define("react-native@0.33/__react__/lib/ReactErrorUtils.js", [], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// __react__/lib/ReactErrorUtils.js
	function (__inner_require__, exports, module) {
		var caughtError = null;

		function invokeGuardedCallback(name, func, a, b) {
			try {
				return func(a, b);
			} catch (x) {
				if (caughtError === null) {
					caughtError = x;
				}
				return undefined;
			}
		}

		var ReactErrorUtils = {
			invokeGuardedCallback: invokeGuardedCallback,

			invokeGuardedCallbackWithCatch: invokeGuardedCallback,

			rethrowCaughtError: function rethrowCaughtError() {
				if (caughtError) {
					var error = caughtError;
					caughtError = null;
					throw error;
				}
			} };

		if (process.env.NODE_ENV !== 'production') {

			if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function' && typeof document !== 'undefined' && typeof document.createEvent === 'function') {
				var fakeNode = document.createElement('react');
				ReactErrorUtils.invokeGuardedCallback = function (name, func, a, b) {
					var boundFunc = func.bind(null, a, b);
					var evtType = 'react-' + name;
					fakeNode.addEventListener(evtType, boundFunc, false);
					var evt = document.createEvent('Event');
					evt.initEvent(evtType, false, false);
					fakeNode.dispatchEvent(evt);
					fakeNode.removeEventListener(evtType, boundFunc, false);
				};
			}
		}

		module.exports = ReactErrorUtils;
	}];
});