loader.define("react-native@0.33/__react__/lib/reactProdInvariant.js", [], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// __react__/lib/reactProdInvariant.js
	function (__inner_require__, exports, module) {
		function reactProdInvariant(code) {
			var argCount = arguments.length - 1;

			var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

			for (var argIdx = 0; argIdx < argCount; argIdx++) {
				message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
			}

			message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

			var error = new Error(message);
			error.name = 'Invariant Violation';
			error.framesToPop = 1;

			throw error;
		}

		module.exports = reactProdInvariant;
	}];
});