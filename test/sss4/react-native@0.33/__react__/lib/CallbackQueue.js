loader.define("react-native@0.33/__react__/lib/CallbackQueue.js", ["react-native@0.33/__react__/lib/reactProdInvariant.js", "object-assign@4/index.js", "react-native@0.33/__react__/lib/PooledClass.js", "react-native@0.33/__fbjs__/lib/invariant.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// __react__/lib/CallbackQueue.js
	function (__inner_require__, exports, module) {
		var _prodInvariant = require('react-native@0.33/__react__/lib/reactProdInvariant.js'),
		    _assign = require('object-assign@4/index.js');

		var PooledClass = require('react-native@0.33/__react__/lib/PooledClass.js');

		var invariant = require('react-native@0.33/__fbjs__/lib/invariant.js');

		function CallbackQueue() {
			this._callbacks = null;
			this._contexts = null;
		}

		_assign(CallbackQueue.prototype, {

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
					!(callbacks.length === contexts.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Mismatched list of contexts in callback queue') : _prodInvariant('24') : void 0;
					this._callbacks = null;
					this._contexts = null;
					for (var i = 0; i < callbacks.length; i++) {
						callbacks[i].call(contexts[i]);
					}
					callbacks.length = 0;
					contexts.length = 0;
				}
			},

			checkpoint: function checkpoint() {
				return this._callbacks ? this._callbacks.length : 0;
			},

			rollback: function rollback(len) {
				if (this._callbacks) {
					this._callbacks.length = len;
					this._contexts.length = len;
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