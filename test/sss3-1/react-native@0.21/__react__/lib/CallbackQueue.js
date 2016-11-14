loader.define("react-native@0.21/__react__/lib/CallbackQueue.js", ["react-native@0.21/__react__/lib/PooledClass.js", "react-native@0.21/__react__/lib/Object.assign.js", "react-native@0.21/__fbjs__/lib/invariant.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// __react__/lib/CallbackQueue.js
	function (__inner_require__, exports, module) {
		var PooledClass = require('react-native@0.21/__react__/lib/PooledClass.js');

		var assign = require('react-native@0.21/__react__/lib/Object.assign.js');
		var invariant = require('react-native@0.21/__fbjs__/lib/invariant.js');

		function CallbackQueue() {
			this._callbacks = null;
			this._contexts = null;
		}

		assign(CallbackQueue.prototype, {

			enqueue: function enqueue(callback, context) {
				this._callbacks = this._callbacks || [];
				this._contexts = this._contexts || [];
				this._callbacks.push(callback);
				this._contexts.push(context);
			},

			notifyAll: function notifyAll() {
				var callbacks = this._callbacks;
				var contexts = this._contexts;
				if (callbacks) {
					!(callbacks.length === contexts.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Mismatched list of contexts in callback queue') : invariant(false) : undefined;
					this._callbacks = null;
					this._contexts = null;
					for (var i = 0; i < callbacks.length; i++) {
						callbacks[i].call(contexts[i]);
					}
					callbacks.length = 0;
					contexts.length = 0;
				}
			},

			reset: function reset() {
				this._callbacks = null;
				this._contexts = null;
			},

			destructor: function destructor() {
				this.reset();
			} });

		PooledClass.addPoolingTo(CallbackQueue);

		module.exports = CallbackQueue;
	}];
});