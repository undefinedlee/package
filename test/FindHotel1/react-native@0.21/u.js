// react-native@0.21/Libraries/Promise.js
loader.define("react-native@0.21", "Libraries/Promise.js", "u", function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Promise.js
	function (__inner_require__, exports, module) {
		global.setImmediate = require('react-native@0.21/Libraries/vendor/core/setImmediate.js');
		var Promise = require('promise@7/setimmediate/es6-extensions.js');
		require('promise@7/setimmediate/done.js');
		if (__DEV__) {
			require('promise@7/setimmediate/rejection-tracking.js').enable({
				allRejections: true,
				onUnhandled: function onUnhandled(id, error) {
					var message = error.message,
					    stack = error.stack;
					var warning = 'Possible Unhandled Promise Rejection (id: ' + id + '):\n' + (message == null ? '' : message + '\n') + (stack == null ? '' : stack);
					console.warn(warning);
				},
				onHandled: function onHandled(id) {
					var warning = 'Promise Rejection Handled (id: ' + id + ')\n' + 'This means you can ignore any previous messages of the form ' + ('"Possible Unhandled Promise Rejection (id: ' + id + '):"');
					console.warn(warning);
				} });
		}

		Promise.prototype.finally = function (onSettled) {
			return this.then(onSettled, onSettled);
		};

		module.exports = Promise;
	}];
});