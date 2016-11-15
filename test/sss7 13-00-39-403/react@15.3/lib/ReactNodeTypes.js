loader.define("react@15.3/lib/ReactNodeTypes.js", ["react@15.3/lib/reactProdInvariant.js", "react@15.3/lib/ReactElement.js", "fbjs@0.8/lib/invariant.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/ReactNodeTypes.js
		function(__inner_require__, exports, module){
			var _prodInvariant = require('react@15.3/lib/reactProdInvariant.js');
			
			var ReactElement = require('react@15.3/lib/ReactElement.js');
			
			var invariant = require('fbjs@0.8/lib/invariant.js');
			
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
			  }
			};
			
			module.exports = ReactNodeTypes;
		}
	];
});