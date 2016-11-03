// react-native@0.21/Users/lifan/work-test/sss3/rn/node_modules/fbjs/lib/isNode.js
loader.define("react-native@0.21", "Users/lifan/work-test/sss3/rn/node_modules/fbjs/lib/isNode.js", "q", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// Users/lifan/work-test/sss3/rn/node_modules/fbjs/lib/isNode.js
		function(__inner_require__, exports, module){
			function isNode(object) {
			  return !!(object && (typeof Node === 'function' ? object instanceof Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
			}
			
			module.exports = isNode;
		}
	];
});