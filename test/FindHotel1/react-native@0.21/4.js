// react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/PooledClass.js
loader.define("react-native@0.21", "Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/PooledClass.js", "4", function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/PooledClass.js
	function (__inner_require__, exports, module) {
		var invariant = require('react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/fbjs/lib/invariant.js');

		var oneArgumentPooler = function oneArgumentPooler(copyFieldsFrom) {
			var Klass = this;
			if (Klass.instancePool.length) {
				var instance = Klass.instancePool.pop();
				Klass.call(instance, copyFieldsFrom);
				return instance;
			} else {
				return new Klass(copyFieldsFrom);
			}
		};

		var twoArgumentPooler = function twoArgumentPooler(a1, a2) {
			var Klass = this;
			if (Klass.instancePool.length) {
				var instance = Klass.instancePool.pop();
				Klass.call(instance, a1, a2);
				return instance;
			} else {
				return new Klass(a1, a2);
			}
		};

		var threeArgumentPooler = function threeArgumentPooler(a1, a2, a3) {
			var Klass = this;
			if (Klass.instancePool.length) {
				var instance = Klass.instancePool.pop();
				Klass.call(instance, a1, a2, a3);
				return instance;
			} else {
				return new Klass(a1, a2, a3);
			}
		};

		var fourArgumentPooler = function fourArgumentPooler(a1, a2, a3, a4) {
			var Klass = this;
			if (Klass.instancePool.length) {
				var instance = Klass.instancePool.pop();
				Klass.call(instance, a1, a2, a3, a4);
				return instance;
			} else {
				return new Klass(a1, a2, a3, a4);
			}
		};

		var fiveArgumentPooler = function fiveArgumentPooler(a1, a2, a3, a4, a5) {
			var Klass = this;
			if (Klass.instancePool.length) {
				var instance = Klass.instancePool.pop();
				Klass.call(instance, a1, a2, a3, a4, a5);
				return instance;
			} else {
				return new Klass(a1, a2, a3, a4, a5);
			}
		};

		var standardReleaser = function standardReleaser(instance) {
			var Klass = this;
			!(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : invariant(false) : undefined;
			instance.destructor();
			if (Klass.instancePool.length < Klass.poolSize) {
				Klass.instancePool.push(instance);
			}
		};

		var DEFAULT_POOL_SIZE = 10;
		var DEFAULT_POOLER = oneArgumentPooler;

		var addPoolingTo = function addPoolingTo(CopyConstructor, pooler) {
			var NewKlass = CopyConstructor;
			NewKlass.instancePool = [];
			NewKlass.getPooled = pooler || DEFAULT_POOLER;
			if (!NewKlass.poolSize) {
				NewKlass.poolSize = DEFAULT_POOL_SIZE;
			}
			NewKlass.release = standardReleaser;
			return NewKlass;
		};

		var PooledClass = {
			addPoolingTo: addPoolingTo,
			oneArgumentPooler: oneArgumentPooler,
			twoArgumentPooler: twoArgumentPooler,
			threeArgumentPooler: threeArgumentPooler,
			fourArgumentPooler: fourArgumentPooler,
			fiveArgumentPooler: fiveArgumentPooler };

		module.exports = PooledClass;
	}];
});