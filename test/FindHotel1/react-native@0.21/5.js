// react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactComponentEnvironment.js
loader.define("react-native@0.21", "Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactComponentEnvironment.js", "5", function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactComponentEnvironment.js
	function (__inner_require__, exports, module) {
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');

		var injected = false;

		var ReactComponentEnvironment = {

			unmountIDFromEnvironment: null,

			replaceNodeWithMarkupByID: null,

			processChildrenUpdates: null,

			injection: {
				injectEnvironment: function injectEnvironment(environment) {
					!!injected ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactCompositeComponent: injectEnvironment() can only be called once.') : invariant(false) : undefined;
					ReactComponentEnvironment.unmountIDFromEnvironment = environment.unmountIDFromEnvironment;
					ReactComponentEnvironment.replaceNodeWithMarkupByID = environment.replaceNodeWithMarkupByID;
					ReactComponentEnvironment.processChildrenUpdates = environment.processChildrenUpdates;
					injected = true;
				} } };

		module.exports = ReactComponentEnvironment;
	}];
});