loader.define("react@15.3/lib/ReactFragment.js", ["react@15.3/lib/reactProdInvariant.js", "react@15.3/lib/ReactChildren.js", "react@15.3/lib/ReactElement.js", "fbjs@0.8/lib/emptyFunction.js", "fbjs@0.8/lib/invariant.js", "fbjs@0.8/lib/warning.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/ReactFragment.js
		function(__inner_require__, exports, module){
			var _prodInvariant = require('react@15.3/lib/reactProdInvariant.js');
			
			var ReactChildren = require('react@15.3/lib/ReactChildren.js');
			var ReactElement = require('react@15.3/lib/ReactElement.js');
			
			var emptyFunction = require('fbjs@0.8/lib/emptyFunction.js');
			var invariant = require('fbjs@0.8/lib/invariant.js');
			var warning = require('fbjs@0.8/lib/warning.js');
			
			/**
			 * We used to allow keyed objects to serve as a collection of ReactElements,
			 * or nested sets. This allowed us a way to explicitly key a set or fragment of
			 * components. This is now being replaced with an opaque data structure.
			 * The upgrade path is to call React.addons.createFragment({ key: value }) to
			 * create a keyed fragment. The resulting data structure is an array.
			 */
			
			var numericPropertyRegex = /^\d+$/;
			
			var warnedAboutNumeric = false;
			
			var ReactFragment = {
			  /**
			   * Wrap a keyed object in an opaque proxy that warns you if you access any
			   * of its properties.
			   * See https://facebook.github.io/react/docs/create-fragment.html
			   */
			  create: function create(object) {
			    if ((typeof object === 'undefined' ? 'undefined' : babelHelpers.typeof(object)) !== 'object' || !object || Array.isArray(object)) {
			      process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment only accepts a single object. Got: %s', object) : void 0;
			      return object;
			    }
			    if (ReactElement.isValidElement(object)) {
			      process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment does not accept a ReactElement ' + 'without a wrapper object.') : void 0;
			      return object;
			    }
			
			    !(object.nodeType !== 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.') : _prodInvariant('0') : void 0;
			
			    var result = [];
			
			    for (var key in object) {
			      if (process.env.NODE_ENV !== 'production') {
			        if (!warnedAboutNumeric && numericPropertyRegex.test(key)) {
			          process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment(...): Child objects should have ' + 'non-numeric keys so ordering is preserved.') : void 0;
			          warnedAboutNumeric = true;
			        }
			      }
			      ReactChildren.mapIntoWithKeyPrefixInternal(object[key], result, key, emptyFunction.thatReturnsArgument);
			    }
			
			    return result;
			  }
			};
			
			module.exports = ReactFragment;
		}
	];
});