loader.define("react@15.3/lib/ReactComponentEnvironment.js", ["react@15.3/lib/reactProdInvariant.js", "fbjs@0.8/lib/invariant.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/ReactComponentEnvironment.js
		function(__inner_require__, exports, module){
			var _prodInvariant = require('react@15.3/lib/reactProdInvariant.js');
			
			var invariant = require('fbjs@0.8/lib/invariant.js');
			
			var injected = false;
			
			var ReactComponentEnvironment = {
			
			  /**
			   * Optionally injectable hook for swapping out mount images in the middle of
			   * the tree.
			   */
			  replaceNodeWithMarkup: null,
			
			  /**
			   * Optionally injectable hook for processing a queue of child updates. Will
			   * later move into MultiChildComponents.
			   */
			  processChildrenUpdates: null,
			
			  injection: {
			    injectEnvironment: function injectEnvironment(environment) {
			      !!injected ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactCompositeComponent: injectEnvironment() can only be called once.') : _prodInvariant('104') : void 0;
			      ReactComponentEnvironment.replaceNodeWithMarkup = environment.replaceNodeWithMarkup;
			      ReactComponentEnvironment.processChildrenUpdates = environment.processChildrenUpdates;
			      injected = true;
			    }
			  }
			
			};
			
			module.exports = ReactComponentEnvironment;
		}
	];
});