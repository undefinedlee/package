;(function(){
	var __FILE__ = (document.currentScript || document.scripts[document.scripts.length - 1]).src;

	define("#modId#", [#deps#], function(require, exports, module){
		var mods = [#mods#];
		
		function __inner_require__(id){
			var factory = mods[id];
			var module;

			if(!factory.isInitialized){
				module = {exports: {}};
				factory(__inner_require__, module.exports, module);
				factory.exports = module.exports;
				factory.isInitialized = true;
			}

			return factory.exports;
		}

		module.exports = __inner_require__(0);
	});
})();