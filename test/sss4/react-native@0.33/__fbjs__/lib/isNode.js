loader.define("react-native@0.33/__fbjs__/lib/isNode.js", [], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// __fbjs__/lib/isNode.js
	function (__inner_require__, exports, module) {
		function isNode(object) {
			return !!(object && (typeof Node === 'function' ? object instanceof Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
		}

		module.exports = isNode;
	}];
});