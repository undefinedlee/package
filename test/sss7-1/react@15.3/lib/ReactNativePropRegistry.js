__d("react@15.3/lib/ReactNativePropRegistry.js", [], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/ReactNativePropRegistry.js
		function(__inner_require__, exports, module){
			function _classCallCheck(instance, Constructor) {
			  if (!(instance instanceof Constructor)) {
			    throw new TypeError("Cannot call a class as a function");
			  }
			}
			
			var objects = {};
			var uniqueID = 1;
			var emptyObject = {};
			
			var ReactNativePropRegistry = function () {
			  function ReactNativePropRegistry() {
			    _classCallCheck(this, ReactNativePropRegistry);
			  }
			
			  ReactNativePropRegistry.register = function register(object) {
			    var id = ++uniqueID;
			    if (process.env.NODE_ENV !== 'production') {
			      Object.freeze(object);
			    }
			    objects[id] = object;
			    return id;
			  };
			
			  ReactNativePropRegistry.getByID = function getByID(id) {
			    if (!id) {
			      // Used in the style={[condition && id]} pattern,
			      // we want it to be a no-op when the value is false or null
			      return emptyObject;
			    }
			
			    var object = objects[id];
			    if (!object) {
			      console.warn('Invalid style with id `' + id + '`. Skipping ...');
			      return emptyObject;
			    }
			    return object;
			  };
			
			  return ReactNativePropRegistry;
			}();
			
			module.exports = ReactNativePropRegistry;
		}
	];
});