loader.define("react@15/lib/traverseAllChildren.js", ["react@15/lib/reactProdInvariant.js", "react@15/lib/ReactCurrentOwner.js", "react@15/lib/ReactElement.js", "react@15/lib/getIteratorFn.js", "fbjs@0.8/lib/invariant.js", "react@15/lib/KeyEscapeUtils.js", "fbjs@0.8/lib/warning.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/traverseAllChildren.js
		function(__inner_require__, exports, module){
			var _prodInvariant = require('react@15/lib/reactProdInvariant.js');
			
			var ReactCurrentOwner = require('react@15/lib/ReactCurrentOwner.js');
			var ReactElement = require('react@15/lib/ReactElement.js');
			
			var getIteratorFn = require('react@15/lib/getIteratorFn.js');
			var invariant = require('fbjs@0.8/lib/invariant.js');
			var KeyEscapeUtils = require('react@15/lib/KeyEscapeUtils.js');
			var warning = require('fbjs@0.8/lib/warning.js');
			
			var SEPARATOR = '.';
			var SUBSEPARATOR = ':';
			
			/**
			 * TODO: Test that a single child and an array with one item have the same key
			 * pattern.
			 */
			
			var didWarnAboutMaps = false;
			
			/**
			 * Generate a key string that identifies a component within a set.
			 *
			 * @param {*} component A component that could contain a manual key.
			 * @param {number} index Index that is used if a manual key is not provided.
			 * @return {string}
			 */
			function getComponentKey(component, index) {
			  // Do some typechecking here since we call this blindly. We want to ensure
			  // that we don't block potential future ES APIs.
			  if (component && (typeof component === 'undefined' ? 'undefined' : babelHelpers.typeof(component)) === 'object' && component.key != null) {
			    // Explicit key
			    return KeyEscapeUtils.escape(component.key);
			  }
			  // Implicit key determined by the index in the set
			  return index.toString(36);
			}
			
			/**
			 * @param {?*} children Children tree container.
			 * @param {!string} nameSoFar Name of the key path so far.
			 * @param {!function} callback Callback to invoke with each child found.
			 * @param {?*} traverseContext Used to pass information throughout the traversal
			 * process.
			 * @return {!number} The number of children in this subtree.
			 */
			function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
			  var type = typeof children === 'undefined' ? 'undefined' : babelHelpers.typeof(children);
			
			  if (type === 'undefined' || type === 'boolean') {
			    // All of the above are perceived as null.
			    children = null;
			  }
			
			  if (children === null || type === 'string' || type === 'number' || ReactElement.isValidElement(children)) {
			    callback(traverseContext, children,
			    // If it's the only child, treat the name as if it was wrapped in an array
			    // so that it's consistent if the number of children grows.
			    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
			    return 1;
			  }
			
			  var child;
			  var nextName;
			  var subtreeCount = 0; // Count of children found in the current subtree.
			  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
			
			  if (Array.isArray(children)) {
			    for (var i = 0; i < children.length; i++) {
			      child = children[i];
			      nextName = nextNamePrefix + getComponentKey(child, i);
			      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
			    }
			  } else {
			    var iteratorFn = getIteratorFn(children);
			    if (iteratorFn) {
			      var iterator = iteratorFn.call(children);
			      var step;
			      if (iteratorFn !== children.entries) {
			        var ii = 0;
			        while (!(step = iterator.next()).done) {
			          child = step.value;
			          nextName = nextNamePrefix + getComponentKey(child, ii++);
			          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
			        }
			      } else {
			        if (process.env.NODE_ENV !== 'production') {
			          var mapsAsChildrenAddendum = '';
			          if (ReactCurrentOwner.current) {
			            var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
			            if (mapsAsChildrenOwnerName) {
			              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
			            }
			          }
			          process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
			          didWarnAboutMaps = true;
			        }
			        // Iterator will provide entry [k,v] tuples rather than values.
			        while (!(step = iterator.next()).done) {
			          var entry = step.value;
			          if (entry) {
			            child = entry[1];
			            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
			            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
			          }
			        }
			      }
			    } else if (type === 'object') {
			      var addendum = '';
			      if (process.env.NODE_ENV !== 'production') {
			        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
			        if (children._isReactElement) {
			          addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
			        }
			        if (ReactCurrentOwner.current) {
			          var name = ReactCurrentOwner.current.getName();
			          if (name) {
			            addendum += ' Check the render method of `' + name + '`.';
			          }
			        }
			      }
			      var childrenString = String(children);
			      !false ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
			    }
			  }
			
			  return subtreeCount;
			}
			
			/**
			 * Traverses children that are typically specified as `props.children`, but
			 * might also be specified through attributes:
			 *
			 * - `traverseAllChildren(this.props.children, ...)`
			 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
			 *
			 * The `traverseContext` is an optional argument that is passed through the
			 * entire traversal. It can be used to store accumulations or anything else that
			 * the callback might find relevant.
			 *
			 * @param {?*} children Children tree object.
			 * @param {!function} callback To invoke upon traversing each child.
			 * @param {?*} traverseContext Context for traversal.
			 * @return {!number} The number of children in this subtree.
			 */
			function traverseAllChildren(children, callback, traverseContext) {
			  if (children == null) {
			    return 0;
			  }
			
			  return traverseAllChildrenImpl(children, '', callback, traverseContext);
			}
			
			module.exports = traverseAllChildren;
		}
	];
});