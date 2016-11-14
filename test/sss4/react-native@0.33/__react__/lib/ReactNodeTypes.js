loader.define("react-native@0.33/__react__/lib/ReactNodeTypes.js", ["react-native@0.33/__react__/lib/reactProdInvariant.js", "react-native@0.33/__react__/lib/ReactElement.js", "react-native@0.33/__fbjs__/lib/invariant.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// __react__/lib/ReactNodeTypes.js
	function (__inner_require__, exports, module) {
		var _prodInvariant = require('react-native@0.33/__react__/lib/reactProdInvariant.js');

		var ReactElement = require('react-native@0.33/__react__/lib/ReactElement.js');

		var invariant = require('react-native@0.33/__fbjs__/lib/invariant.js');

		var ReactNodeTypes = {
			HOST: 0,
			COMPOSITE: 1,
			EMPTY: 2,

			getType: function getType(node) {
				if (node === null || node === false) {
					return ReactNodeTypes.EMPTY;
				} else if (ReactElement.isValidElement(node)) {
					if (typeof node.type === 'function') {
						return ReactNodeTypes.COMPOSITE;
					} else {
						return ReactNodeTypes.HOST;
					}
				}
				!false ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Unexpected node: %s', node) : _prodInvariant('26', node) : void 0;
			} };

		module.exports = ReactNodeTypes;
	}];
});