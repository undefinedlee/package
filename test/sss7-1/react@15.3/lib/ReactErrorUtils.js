__d("react@15.3/lib/ReactErrorUtils.js", [], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/ReactErrorUtils.js
		function(__inner_require__, exports, module){
			var caughtError = null;
			
			/**
			 * Call a function while guarding against errors that happens within it.
			 *
			 * @param {?String} name of the guard to use for logging or debugging
			 * @param {Function} func The function to invoke
			 * @param {*} a First argument
			 * @param {*} b Second argument
			 */
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
			
			  /**
			   * Invoked by ReactTestUtils.Simulate so that any errors thrown by the event
			   * handler are sure to be rethrown by rethrowCaughtError.
			   */
			  invokeGuardedCallbackWithCatch: invokeGuardedCallback,
			
			  /**
			   * During execution of guarded functions we will capture the first error which
			   * we will rethrow to be handled by the top level error handler.
			   */
			  rethrowCaughtError: function rethrowCaughtError() {
			    if (caughtError) {
			      var error = caughtError;
			      caughtError = null;
			      throw error;
			    }
			  }
			};
			
			if (process.env.NODE_ENV !== 'production') {
			  /**
			   * To help development we can get better devtools integration by simulating a
			   * real browser event.
			   */
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
		}
	];
});