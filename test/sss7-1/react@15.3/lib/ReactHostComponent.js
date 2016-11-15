__d("react@15.3/lib/ReactHostComponent.js", ["react@15.3/lib/reactProdInvariant.js", "object-assign@4/index.js", "fbjs@0.8/lib/invariant.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/ReactHostComponent.js
		function(__inner_require__, exports, module){
			var _prodInvariant = require('react@15.3/lib/reactProdInvariant.js'),
			    _assign = require('object-assign@4/index.js');
			
			var invariant = require('fbjs@0.8/lib/invariant.js');
			
			var genericComponentClass = null;
			// This registry keeps track of wrapper classes around host tags.
			var tagToComponentClass = {};
			var textComponentClass = null;
			
			var ReactHostComponentInjection = {
			  // This accepts a class that receives the tag string. This is a catch all
			  // that can render any kind of tag.
			  injectGenericComponentClass: function injectGenericComponentClass(componentClass) {
			    genericComponentClass = componentClass;
			  },
			  // This accepts a text component class that takes the text string to be
			  // rendered as props.
			  injectTextComponentClass: function injectTextComponentClass(componentClass) {
			    textComponentClass = componentClass;
			  },
			  // This accepts a keyed object with classes as values. Each key represents a
			  // tag. That particular tag will use this class instead of the generic one.
			  injectComponentClasses: function injectComponentClasses(componentClasses) {
			    _assign(tagToComponentClass, componentClasses);
			  }
			};
			
			/**
			 * Get a host internal component class for a specific tag.
			 *
			 * @param {ReactElement} element The element to create.
			 * @return {function} The internal class constructor function.
			 */
			function createInternalComponent(element) {
			  !genericComponentClass ? process.env.NODE_ENV !== 'production' ? invariant(false, 'There is no registered component for the tag %s', element.type) : _prodInvariant('111', element.type) : void 0;
			  return new genericComponentClass(element);
			}
			
			/**
			 * @param {ReactText} text
			 * @return {ReactComponent}
			 */
			function createInstanceForText(text) {
			  return new textComponentClass(text);
			}
			
			/**
			 * @param {ReactComponent} component
			 * @return {boolean}
			 */
			function isTextComponent(component) {
			  return component instanceof textComponentClass;
			}
			
			var ReactHostComponent = {
			  createInternalComponent: createInternalComponent,
			  createInstanceForText: createInstanceForText,
			  isTextComponent: isTextComponent,
			  injection: ReactHostComponentInjection
			};
			
			module.exports = ReactHostComponent;
		}
	];
});