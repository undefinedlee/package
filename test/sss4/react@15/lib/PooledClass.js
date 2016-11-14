loader.define("react@15/lib/PooledClass.js", ["react@15/lib/reactProdInvariant.js", "fbjs@0.8/lib/invariant.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/PooledClass.js
		function(__inner_require__, exports, module){
			var _prodInvariant = require('react@15/lib/reactProdInvariant.js');
			
			var invariant = require('fbjs@0.8/lib/invariant.js');
			
			/**
			 * Static poolers. Several custom versions for each potential number of
			 * arguments. A completely generic pooler is easy to implement, but would
			 * require accessing the `arguments` object. In each of these, `this` refers to
			 * the Class itself, not an instance. If any others are needed, simply add them
			 * here, or in their own files.
			 */
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
			  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
			  instance.destructor();
			  if (Klass.instancePool.length < Klass.poolSize) {
			    Klass.instancePool.push(instance);
			  }
			};
			
			var DEFAULT_POOL_SIZE = 10;
			var DEFAULT_POOLER = oneArgumentPooler;
			
			/**
			 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
			 * itself (statically) not adding any prototypical fields. Any CopyConstructor
			 * you give this may have a `poolSize` property, and will look for a
			 * prototypical `destructor` on instances.
			 *
			 * @param {Function} CopyConstructor Constructor that can be used to reset.
			 * @param {Function} pooler Customizable pooler.
			 */
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
			  fiveArgumentPooler: fiveArgumentPooler
			};
			
			module.exports = PooledClass;
		}
	];
});