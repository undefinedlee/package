// react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js
loader.define("react-native@0.21", "Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js", "p", function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js
	function (__inner_require__, exports, module) {
		function invariant(condition, format, a, b, c, d, e, f) {
			if (process.env.NODE_ENV !== 'production') {
				if (format === undefined) {
					throw new Error('invariant requires an error message argument');
				}
			}

			if (!condition) {
				var error;
				if (format === undefined) {
					error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
				} else {
					var args = [a, b, c, d, e, f];
					var argIndex = 0;
					error = new Error(format.replace(/%s/g, function () {
						return args[argIndex++];
					}));
					error.name = 'Invariant Violation';
				}

				error.framesToPop = 1;
				throw error;
			}
		}

		module.exports = invariant;
	}];
});