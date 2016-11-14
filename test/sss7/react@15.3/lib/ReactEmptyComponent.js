loader.define("react@15.3/lib/ReactEmptyComponent.js", [], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/ReactEmptyComponent.js
		function(__inner_require__, exports, module){
			var emptyComponentFactory;
			
			var ReactEmptyComponentInjection = {
			  injectEmptyComponentFactory: function injectEmptyComponentFactory(factory) {
			    emptyComponentFactory = factory;
			  }
			};
			
			var ReactEmptyComponent = {
			  create: function create(instantiate) {
			    return emptyComponentFactory(instantiate);
			  }
			};
			
			ReactEmptyComponent.injection = ReactEmptyComponentInjection;
			
			module.exports = ReactEmptyComponent;
		}
	];
});