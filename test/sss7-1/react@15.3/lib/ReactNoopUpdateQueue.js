__d("react@15.3/lib/ReactNoopUpdateQueue.js", ["fbjs@0.8/lib/warning.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/ReactNoopUpdateQueue.js
		function(__inner_require__, exports, module){
			var warning = require('fbjs@0.8/lib/warning.js');
			
			function warnNoop(publicInstance, callerName) {
			  if (process.env.NODE_ENV !== 'production') {
			    var constructor = publicInstance.constructor;
			    process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
			  }
			}
			
			/**
			 * This is the abstract API for an update queue.
			 */
			var ReactNoopUpdateQueue = {
			
			  /**
			   * Checks whether or not this composite component is mounted.
			   * @param {ReactClass} publicInstance The instance we want to test.
			   * @return {boolean} True if mounted, false otherwise.
			   * @protected
			   * @final
			   */
			  isMounted: function isMounted(publicInstance) {
			    return false;
			  },
			
			  /**
			   * Enqueue a callback that will be executed after all the pending updates
			   * have processed.
			   *
			   * @param {ReactClass} publicInstance The instance to use as `this` context.
			   * @param {?function} callback Called after state is updated.
			   * @internal
			   */
			  enqueueCallback: function enqueueCallback(publicInstance, callback) {},
			
			  /**
			   * Forces an update. This should only be invoked when it is known with
			   * certainty that we are **not** in a DOM transaction.
			   *
			   * You may want to call this when you know that some deeper aspect of the
			   * component's state has changed but `setState` was not called.
			   *
			   * This will not invoke `shouldComponentUpdate`, but it will invoke
			   * `componentWillUpdate` and `componentDidUpdate`.
			   *
			   * @param {ReactClass} publicInstance The instance that should rerender.
			   * @internal
			   */
			  enqueueForceUpdate: function enqueueForceUpdate(publicInstance) {
			    warnNoop(publicInstance, 'forceUpdate');
			  },
			
			  /**
			   * Replaces all of the state. Always use this or `setState` to mutate state.
			   * You should treat `this.state` as immutable.
			   *
			   * There is no guarantee that `this.state` will be immediately updated, so
			   * accessing `this.state` after calling this method may return the old value.
			   *
			   * @param {ReactClass} publicInstance The instance that should rerender.
			   * @param {object} completeState Next state.
			   * @internal
			   */
			  enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState) {
			    warnNoop(publicInstance, 'replaceState');
			  },
			
			  /**
			   * Sets a subset of the state. This only exists because _pendingState is
			   * internal. This provides a merging strategy that is not available to deep
			   * properties which is confusing. TODO: Expose pendingState or don't use it
			   * during the merge.
			   *
			   * @param {ReactClass} publicInstance The instance that should rerender.
			   * @param {object} partialState Next partial state to be merged with state.
			   * @internal
			   */
			  enqueueSetState: function enqueueSetState(publicInstance, partialState) {
			    warnNoop(publicInstance, 'setState');
			  }
			};
			
			module.exports = ReactNoopUpdateQueue;
		}
	];
});