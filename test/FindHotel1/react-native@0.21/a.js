// react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactEmptyComponentRegistry.js
loader.define("react-native@0.21", "Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactEmptyComponentRegistry.js", "a", function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactEmptyComponentRegistry.js
	function (__inner_require__, exports, module) {
		var nullComponentIDsRegistry = {};

		function isNullComponentID(id) {
			return !!nullComponentIDsRegistry[id];
		}

		function registerNullComponentID(id) {
			nullComponentIDsRegistry[id] = true;
		}

		function deregisterNullComponentID(id) {
			delete nullComponentIDsRegistry[id];
		}

		var ReactEmptyComponentRegistry = {
			isNullComponentID: isNullComponentID,
			registerNullComponentID: registerNullComponentID,
			deregisterNullComponentID: deregisterNullComponentID };

		module.exports = ReactEmptyComponentRegistry;
	}];
});