export default function(mods){
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
	};

	return __inner_require__(0);
}