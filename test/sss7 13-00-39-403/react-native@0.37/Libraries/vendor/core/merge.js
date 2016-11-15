loader.define("react-native@0.37/Libraries/vendor/core/merge.js", ["fbjs@0.8/lib/invariant.js", "fbjs@0.8/lib/keyMirror.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/vendor/core/merge.js
	function (__inner_require__, exports, module) {
		var mergeInto = __inner_require__(1 /*Libraries/vendor/core/mergeInto.js*/);

		var merge = function merge(one, two) {
			var result = {};
			mergeInto(result, one);
			mergeInto(result, two);
			return result;
		};

		module.exports = merge;
	}, // Libraries/vendor/core/mergeInto.js
	function (__inner_require__, exports, module) {
		var mergeHelpers = __inner_require__(2 /*Libraries/vendor/core/mergeHelpers.js*/);

		var checkMergeObjectArg = mergeHelpers.checkMergeObjectArg;
		var checkMergeIntoObjectArg = mergeHelpers.checkMergeIntoObjectArg;

		function mergeInto(one, two) {
			checkMergeIntoObjectArg(one);
			if (two != null) {
				checkMergeObjectArg(two);
				for (var key in two) {
					if (!two.hasOwnProperty(key)) {
						continue;
					}
					one[key] = two[key];
				}
			}
		}

		module.exports = mergeInto;
	}, // Libraries/vendor/core/mergeHelpers.js
	function (__inner_require__, exports, module) {
		var invariant = require('fbjs@0.8/lib/invariant.js');
		var keyMirror = require('fbjs@0.8/lib/keyMirror.js');

		var MAX_MERGE_DEPTH = 36;

		var isTerminal = function isTerminal(o) {
			return typeof o !== 'object' || o === null;
		};

		var mergeHelpers = {

			MAX_MERGE_DEPTH: MAX_MERGE_DEPTH,

			isTerminal: isTerminal,

			normalizeMergeArg: function normalizeMergeArg(arg) {
				return arg === undefined || arg === null ? {} : arg;
			},

			checkMergeArrayArgs: function checkMergeArrayArgs(one, two) {
				invariant(Array.isArray(one) && Array.isArray(two), 'Tried to merge arrays, instead got %s and %s.', one, two);
			},

			checkMergeObjectArgs: function checkMergeObjectArgs(one, two) {
				mergeHelpers.checkMergeObjectArg(one);
				mergeHelpers.checkMergeObjectArg(two);
			},

			checkMergeObjectArg: function checkMergeObjectArg(arg) {
				invariant(!isTerminal(arg) && !Array.isArray(arg), 'Tried to merge an object, instead got %s.', arg);
			},

			checkMergeIntoObjectArg: function checkMergeIntoObjectArg(arg) {
				invariant((!isTerminal(arg) || typeof arg === 'function') && !Array.isArray(arg), 'Tried to merge into an object, instead got %s.', arg);
			},

			checkMergeLevel: function checkMergeLevel(level) {
				invariant(level < MAX_MERGE_DEPTH, 'Maximum deep merge depth exceeded. You may be attempting to merge ' + 'circular structures in an unsupported way.');
			},

			checkArrayStrategy: function checkArrayStrategy(strategy) {
				invariant(strategy === undefined || strategy in mergeHelpers.ArrayStrategies, 'You must provide an array strategy to deep merge functions to ' + 'instruct the deep merge how to resolve merging two arrays.');
			},

			ArrayStrategies: keyMirror({
				Clobber: true,
				IndexByIndex: true }) };

		module.exports = mergeHelpers;
	}];
});