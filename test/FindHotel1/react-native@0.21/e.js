// react-native@0.21/Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPerf.js
loader.define("react-native@0.21", "Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPerf.js", "e", function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Users/lifan/work-elong/enjoy/examples/FindHotel/rn/node_modules/react/lib/ReactPerf.js
	function (__inner_require__, exports, module) {
		var ReactPerf = {

			enableMeasure: false,

			storedMeasure: _noMeasure,

			measureMethods: function measureMethods(object, objectName, methodNames) {
				if (process.env.NODE_ENV !== 'production') {
					for (var key in methodNames) {
						if (!methodNames.hasOwnProperty(key)) {
							continue;
						}
						object[key] = ReactPerf.measure(objectName, methodNames[key], object[key]);
					}
				}
			},

			measure: function measure(objName, fnName, func) {
				if (process.env.NODE_ENV !== 'production') {
					var measuredFunc = null;
					var wrapper = function wrapper() {
						if (ReactPerf.enableMeasure) {
							if (!measuredFunc) {
								measuredFunc = ReactPerf.storedMeasure(objName, fnName, func);
							}
							return measuredFunc.apply(this, arguments);
						}
						return func.apply(this, arguments);
					};
					wrapper.displayName = objName + '_' + fnName;
					return wrapper;
				}
				return func;
			},

			injection: {

				injectMeasure: function injectMeasure(measure) {
					ReactPerf.storedMeasure = measure;
				} } };

		function _noMeasure(objName, fnName, func) {
			return func;
		}

		module.exports = ReactPerf;
	}];
});