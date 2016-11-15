__d("promise@7/setimmediate/done.js", ["promise@7/setimmediate/core.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// setimmediate/done.js
		function(__inner_require__, exports, module){
			var Promise = require('promise@7/setimmediate/core.js');
			
			module.exports = Promise;
			Promise.prototype.done = function (onFulfilled, onRejected) {
			  var self = arguments.length ? this.then.apply(this, arguments) : this;
			  self.then(null, function (err) {
			    setTimeout(function () {
			      throw err;
			    }, 0);
			  });
			};
		}
	];
});