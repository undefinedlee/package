// react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactUpdates.js
loader.define("react-native@0.21", "Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactUpdates.js", "j", function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactUpdates.js
	function (__inner_require__, exports, module) {
		var CallbackQueue = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/CallbackQueue.js');
		var PooledClass = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/PooledClass.js');
		var ReactPerf = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPerf.js');
		var ReactReconciler = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactReconciler.js');
		var Transaction = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/Transaction.js');

		var assign = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/Object.assign.js');
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');

		var dirtyComponents = [];
		var asapCallbackQueue = CallbackQueue.getPooled();
		var asapEnqueued = false;

		var batchingStrategy = null;

		function ensureInjected() {
			!(ReactUpdates.ReactReconcileTransaction && batchingStrategy) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must inject a reconcile transaction class and batching ' + 'strategy') : invariant(false) : undefined;
		}

		var NESTED_UPDATES = {
			initialize: function initialize() {
				this.dirtyComponentsLength = dirtyComponents.length;
			},
			close: function close() {
				if (this.dirtyComponentsLength !== dirtyComponents.length) {

					dirtyComponents.splice(0, this.dirtyComponentsLength);
					flushBatchedUpdates();
				} else {
					dirtyComponents.length = 0;
				}
			} };

		var UPDATE_QUEUEING = {
			initialize: function initialize() {
				this.callbackQueue.reset();
			},
			close: function close() {
				this.callbackQueue.notifyAll();
			} };

		var TRANSACTION_WRAPPERS = [NESTED_UPDATES, UPDATE_QUEUEING];

		function ReactUpdatesFlushTransaction() {
			this.reinitializeTransaction();
			this.dirtyComponentsLength = null;
			this.callbackQueue = CallbackQueue.getPooled();
			this.reconcileTransaction = ReactUpdates.ReactReconcileTransaction.getPooled(false);
		}

		assign(ReactUpdatesFlushTransaction.prototype, Transaction.Mixin, {
			getTransactionWrappers: function getTransactionWrappers() {
				return TRANSACTION_WRAPPERS;
			},

			destructor: function destructor() {
				this.dirtyComponentsLength = null;
				CallbackQueue.release(this.callbackQueue);
				this.callbackQueue = null;
				ReactUpdates.ReactReconcileTransaction.release(this.reconcileTransaction);
				this.reconcileTransaction = null;
			},

			perform: function perform(method, scope, a) {

				return Transaction.Mixin.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, method, scope, a);
			} });

		PooledClass.addPoolingTo(ReactUpdatesFlushTransaction);

		function batchedUpdates(callback, a, b, c, d, e) {
			ensureInjected();
			batchingStrategy.batchedUpdates(callback, a, b, c, d, e);
		}

		function mountOrderComparator(c1, c2) {
			return c1._mountOrder - c2._mountOrder;
		}

		function runBatchedUpdates(transaction) {
			var len = transaction.dirtyComponentsLength;
			!(len === dirtyComponents.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected flush transaction\'s stored dirty-components length (%s) to ' + 'match dirty-components array length (%s).', len, dirtyComponents.length) : invariant(false) : undefined;

			dirtyComponents.sort(mountOrderComparator);

			for (var i = 0; i < len; i++) {

				var component = dirtyComponents[i];

				var callbacks = component._pendingCallbacks;
				component._pendingCallbacks = null;

				ReactReconciler.performUpdateIfNecessary(component, transaction.reconcileTransaction);

				if (callbacks) {
					for (var j = 0; j < callbacks.length; j++) {
						transaction.callbackQueue.enqueue(callbacks[j], component.getPublicInstance());
					}
				}
			}
		}

		var flushBatchedUpdates = function flushBatchedUpdates() {

			while (dirtyComponents.length || asapEnqueued) {
				if (dirtyComponents.length) {
					var transaction = ReactUpdatesFlushTransaction.getPooled();
					transaction.perform(runBatchedUpdates, null, transaction);
					ReactUpdatesFlushTransaction.release(transaction);
				}

				if (asapEnqueued) {
					asapEnqueued = false;
					var queue = asapCallbackQueue;
					asapCallbackQueue = CallbackQueue.getPooled();
					queue.notifyAll();
					CallbackQueue.release(queue);
				}
			}
		};
		flushBatchedUpdates = ReactPerf.measure('ReactUpdates', 'flushBatchedUpdates', flushBatchedUpdates);

		function enqueueUpdate(component) {
			ensureInjected();

			if (!batchingStrategy.isBatchingUpdates) {
				batchingStrategy.batchedUpdates(enqueueUpdate, component);
				return;
			}

			dirtyComponents.push(component);
		}

		function asap(callback, context) {
			!batchingStrategy.isBatchingUpdates ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates.asap: Can\'t enqueue an asap callback in a context where' + 'updates are not being batched.') : invariant(false) : undefined;
			asapCallbackQueue.enqueue(callback, context);
			asapEnqueued = true;
		}

		var ReactUpdatesInjection = {
			injectReconcileTransaction: function injectReconcileTransaction(ReconcileTransaction) {
				!ReconcileTransaction ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must provide a reconcile transaction class') : invariant(false) : undefined;
				ReactUpdates.ReactReconcileTransaction = ReconcileTransaction;
			},

			injectBatchingStrategy: function injectBatchingStrategy(_batchingStrategy) {
				!_batchingStrategy ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must provide a batching strategy') : invariant(false) : undefined;
				!(typeof _batchingStrategy.batchedUpdates === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must provide a batchedUpdates() function') : invariant(false) : undefined;
				!(typeof _batchingStrategy.isBatchingUpdates === 'boolean') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must provide an isBatchingUpdates boolean attribute') : invariant(false) : undefined;
				batchingStrategy = _batchingStrategy;
			} };

		var ReactUpdates = {

			ReactReconcileTransaction: null,

			batchedUpdates: batchedUpdates,
			enqueueUpdate: enqueueUpdate,
			flushBatchedUpdates: flushBatchedUpdates,
			injection: ReactUpdatesInjection,
			asap: asap };

		module.exports = ReactUpdates;
	}];
});