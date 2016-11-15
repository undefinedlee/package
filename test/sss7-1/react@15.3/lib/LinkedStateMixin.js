__d("react@15.3/lib/LinkedStateMixin.js", ["react@15.3/lib/React.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/LinkedStateMixin.js
		function(__inner_require__, exports, module){
			var ReactLink = __inner_require__(1 /*lib/ReactLink.js*/);
			var ReactStateSetters = __inner_require__(2 /*lib/ReactStateSetters.js*/);
			
			/**
			 * A simple mixin around ReactLink.forState().
			 * See https://facebook.github.io/react/docs/two-way-binding-helpers.html
			 */
			var LinkedStateMixin = {
			  /**
			   * Create a ReactLink that's linked to part of this component's state. The
			   * ReactLink will have the current value of this.state[key] and will call
			   * setState() when a change is requested.
			   *
			   * @param {string} key state key to update. Note: you may want to use keyOf()
			   * if you're using Google Closure Compiler advanced mode.
			   * @return {ReactLink} ReactLink instance linking to the state.
			   */
			  linkState: function linkState(key) {
			    return new ReactLink(this.state[key], ReactStateSetters.createStateKeySetter(this, key));
			  }
			};
			
			module.exports = LinkedStateMixin;
		},		// lib/ReactLink.js
		function(__inner_require__, exports, module){
			/**
			 * ReactLink encapsulates a common pattern in which a component wants to modify
			 * a prop received from its parent. ReactLink allows the parent to pass down a
			 * value coupled with a callback that, when invoked, expresses an intent to
			 * modify that value. For example:
			 *
			 * React.createClass({
			 *   getInitialState: function() {
			 *     return {value: ''};
			 *   },
			 *   render: function() {
			 *     var valueLink = new ReactLink(this.state.value, this._handleValueChange);
			 *     return <input valueLink={valueLink} />;
			 *   },
			 *   _handleValueChange: function(newValue) {
			 *     this.setState({value: newValue});
			 *   }
			 * });
			 *
			 * We have provided some sugary mixins to make the creation and
			 * consumption of ReactLink easier; see LinkedValueUtils and LinkedStateMixin.
			 */
			
			var React = require('react@15.3/lib/React.js');
			
			/**
			 * Deprecated: An an easy way to express two-way binding with React. 
			 * See https://facebook.github.io/react/docs/two-way-binding-helpers.html
			 *
			 * @param {*} value current value of the link
			 * @param {function} requestChange callback to request a change
			 */
			function ReactLink(value, requestChange) {
			  this.value = value;
			  this.requestChange = requestChange;
			}
			
			/**
			 * Creates a PropType that enforces the ReactLink API and optionally checks the
			 * type of the value being passed inside the link. Example:
			 *
			 * MyComponent.propTypes = {
			 *   tabIndexLink: ReactLink.PropTypes.link(React.PropTypes.number)
			 * }
			 */
			function createLinkTypeChecker(linkType) {
			  var shapes = {
			    value: linkType === undefined ? React.PropTypes.any.isRequired : linkType.isRequired,
			    requestChange: React.PropTypes.func.isRequired
			  };
			  return React.PropTypes.shape(shapes);
			}
			
			ReactLink.PropTypes = {
			  link: createLinkTypeChecker
			};
			
			module.exports = ReactLink;
		},		// lib/ReactStateSetters.js
		function(__inner_require__, exports, module){
			var ReactStateSetters = {
			  /**
			   * Returns a function that calls the provided function, and uses the result
			   * of that to set the component's state.
			   *
			   * @param {ReactCompositeComponent} component
			   * @param {function} funcReturningState Returned callback uses this to
			   *                                      determine how to update state.
			   * @return {function} callback that when invoked uses funcReturningState to
			   *                    determined the object literal to setState.
			   */
			  createStateSetter: function createStateSetter(component, funcReturningState) {
			    return function (a, b, c, d, e, f) {
			      var partialState = funcReturningState.call(component, a, b, c, d, e, f);
			      if (partialState) {
			        component.setState(partialState);
			      }
			    };
			  },
			
			  /**
			   * Returns a single-argument callback that can be used to update a single
			   * key in the component's state.
			   *
			   * Note: this is memoized function, which makes it inexpensive to call.
			   *
			   * @param {ReactCompositeComponent} component
			   * @param {string} key The key in the state that you should update.
			   * @return {function} callback of 1 argument which calls setState() with
			   *                    the provided keyName and callback argument.
			   */
			  createStateKeySetter: function createStateKeySetter(component, key) {
			    // Memoize the setters.
			    var cache = component.__keySetters || (component.__keySetters = {});
			    return cache[key] || (cache[key] = _createStateKeySetter(component, key));
			  }
			};
			
			function _createStateKeySetter(component, key) {
			  // Partial state is allocated outside of the function closure so it can be
			  // reused with every call, avoiding memory allocation when this function
			  // is called.
			  var partialState = {};
			  return function stateKeySetter(value) {
			    partialState[key] = value;
			    component.setState(partialState);
			  };
			}
			
			ReactStateSetters.Mixin = {
			  /**
			   * Returns a function that calls the provided function, and uses the result
			   * of that to set the component's state.
			   *
			   * For example, these statements are equivalent:
			   *
			   *   this.setState({x: 1});
			   *   this.createStateSetter(function(xValue) {
			   *     return {x: xValue};
			   *   })(1);
			   *
			   * @param {function} funcReturningState Returned callback uses this to
			   *                                      determine how to update state.
			   * @return {function} callback that when invoked uses funcReturningState to
			   *                    determined the object literal to setState.
			   */
			  createStateSetter: function createStateSetter(funcReturningState) {
			    return ReactStateSetters.createStateSetter(this, funcReturningState);
			  },
			
			  /**
			   * Returns a single-argument callback that can be used to update a single
			   * key in the component's state.
			   *
			   * For example, these statements are equivalent:
			   *
			   *   this.setState({x: 1});
			   *   this.createStateKeySetter('x')(1);
			   *
			   * Note: this is memoized function, which makes it inexpensive to call.
			   *
			   * @param {string} key The key in the state that you should update.
			   * @return {function} callback of 1 argument which calls setState() with
			   *                    the provided keyName and callback argument.
			   */
			  createStateKeySetter: function createStateKeySetter(key) {
			    return ReactStateSetters.createStateKeySetter(this, key);
			  }
			};
			
			module.exports = ReactStateSetters;
		}
	];
});