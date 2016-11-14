loader.define("react@15.3/lib/ReactDefaultBatchingStrategy.js", ["object-assign@4/index.js", "react@15.3/lib/ReactUpdates.js", "react@15.3/lib/Transaction.js", "fbjs@0.8/lib/emptyFunction.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/ReactDefaultBatchingStrategy.js
		function(__inner_require__, exports, module){
			var _assign = require('object-assign@4/index.js');
			
			var ReactUpdates = require('react@15.3/lib/ReactUpdates.js');
			var Transaction = require('react@15.3/lib/Transaction.js');
			
			var emptyFunction = require('fbjs@0.8/lib/emptyFunction.js');
			
			var RESET_BATCHED_UPDATES = {
			  initialize: emptyFunction,
			  close: function close() {
			    ReactDefaultBatchingStrategy.isBatchingUpdates = false;
			  }
			};
			
			var FLUSH_BATCHED_UPDATES = {
			  initialize: emptyFunction,
			  close: ReactUpdates.flushBatchedUpdates.bind(ReactUpdates)
			};
			
			var TRANSACTION_WRAPPERS = [FLUSH_BATCHED_UPDATES, RESET_BATCHED_UPDATES];
			
			function ReactDefaultBatchingStrategyTransaction() {
			  this.reinitializeTransaction();
			}
			
			_assign(ReactDefaultBatchingStrategyTransaction.prototype, Transaction.Mixin, {
			  getTransactionWrappers: function getTransactionWrappers() {
			    return TRANSACTION_WRAPPERS;
			  }
			});
			
			var transaction = new ReactDefaultBatchingStrategyTransaction();
			
			var ReactDefaultBatchingStrategy = {
			  isBatchingUpdates: false,
			
			  /**
			   * Call the provided function in a context within which calls to `setState`
			   * and friends are batched such that components aren't updated unnecessarily.
			   */
			  batchedUpdates: function batchedUpdates(callback, a, b, c, d, e) {
			    var alreadyBatchingUpdates = ReactDefaultBatchingStrategy.isBatchingUpdates;
			
			    ReactDefaultBatchingStrategy.isBatchingUpdates = true;
			
			    // The code is written this way to avoid extra allocations
			    if (alreadyBatchingUpdates) {
			      callback(a, b, c, d, e);
			    } else {
			      transaction.perform(callback, null, a, b, c, d, e);
			    }
			  }
			};
			
			module.exports = ReactDefaultBatchingStrategy;
		}
	];
});