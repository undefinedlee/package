__d("art@0.10/core/class.js", [], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// core/class.js
		function(__inner_require__, exports, module){
			module.exports = function (mixins) {
				var proto = {};
				for (var i = 0, l = arguments.length; i < l; i++) {
					var mixin = arguments[i];
					if (typeof mixin == 'function') mixin = mixin.prototype;
					for (var key in mixin) {
						proto[key] = mixin[key];
					}
				}
				if (!proto.initialize) proto.initialize = function () {};
				proto.constructor = function (a, b, c, d, e, f, g, h) {
					return new proto.initialize(a, b, c, d, e, f, g, h);
				};
				proto.constructor.prototype = proto.initialize.prototype = proto;
				return proto.constructor;
			};
		}
	];
});