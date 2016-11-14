loader.define("react-native@0.33/__react__/lib/ReactComponentEnvironment.js", ["react-native@0.33/__react__/lib/reactProdInvariant.js", "react-native@0.33/__fbjs__/lib/invariant.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// __react__/lib/ReactComponentEnvironment.js
	function (__inner_require__, exports, module) {
		var _prodInvariant = require('react-native@0.33/__react__/lib/reactProdInvariant.js');

		var invariant = require('react-native@0.33/__fbjs__/lib/invariant.js');

		var injected = false;

		var ReactComponentEnvironment = {

			replaceNodeWithMarkup: null,

			processChildrenUpdates: null,

			injection: {
				injectEnvironment: function injectEnvironment(environment) {
					!!injected ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactCompositeComponent: injectEnvironment() can only be called once.') : _prodInvariant('104') : void 0;
					ReactComponentEnvironment.replaceNodeWithMarkup = environment.replaceNodeWithMarkup;
					ReactComponentEnvironment.processChildrenUpdates = environment.processChildrenUpdates;
					injected = true;
				} } };

		module.exports = ReactComponentEnvironment;
	}];
});