loader.define("react@15.3/lib/CallbackQueue.js", ["react@15.3/lib/reactProdInvariant.js", "object-assign@4/index.js", "react@15.3/lib/PooledClass.js", "fbjs@0.8/lib/invariant.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/CallbackQueue.js
		function(__inner_require__, exports, module){
			var _prodInvariant = require('react@15.3/lib/reactProdInvariant.js'),
			    _assign = require('object-assign@4/index.js');
			
			var PooledClass = require('react@15.3/lib/PooledClass.js');
			
			var invariant = require('fbjs@0.8/lib/invariant.js');
			
			/**
			 * A specialized pseudo-event module to help keep track of components waiting to
			 * be notified when their DOM representations are available for use.
			 *
			 * This implements `PooledClass`, so you should never need to instantiate this.
			 * Instead, use `CallbackQueue.getPooled()`.
			 *
			 * @class ReactMountReady
			 * @implements PooledClass
			 * @internal
			 */
			function CallbackQueue() {
			  this._callbacks = null;
			  this._contexts = null;
			}
			
			_assign(CallbackQueue.prototype, {
			
			  /**
			   * Enqueues a callback to be invoked when `notifyAll` is invoked.
			   *
			   * @param {function} callback Invoked when `notifyAll` is invoked.
			   * @param {?object} context Context to call `callback` with.
			   * @internal
			   */
			  enqueue: function enqueue(callback, context) {
			    this._callbacks = this._callbacks || [];
			    this._contexts = this._contexts || [];
			    this._callbacks.push(callback);
			    this._contexts.push(context);
			  },
			
			  /**
			   * Invokes all enqueued callbacks and clears the queue. This is invoked after
			   * the DOM representation of a component has been created or updated.
			   *
			   * @internal
			   */
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
			
			  /**
			   * Resets the internal queue.
			   *
			   * @internal
			   */
			  reset: function reset() {
			    this._callbacks = null;
			    this._contexts = null;
			  },
			
			  /**
			   * `PooledClass` looks for this.
			   */
			  destructor: function destructor() {
			    this.reset();
			  }
			
			});
			
			PooledClass.addPoolingTo(CallbackQueue);
			
			module.exports = CallbackQueue;
		}
	];
});