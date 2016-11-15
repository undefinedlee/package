__d("react@15.3/lib/ReactComponentWithPureRenderMixin.js", ["fbjs@0.8/lib/shallowEqual.js"], function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// lib/ReactComponentWithPureRenderMixin.js
		function(__inner_require__, exports, module){
			var shallowCompare = __inner_require__(1 /*lib/shallowCompare.js*/);
			
			/**
			 * If your React component's render function is "pure", e.g. it will render the
			 * same result given the same props and state, provide this mixin for a
			 * considerable performance boost.
			 *
			 * Most React components have pure render functions.
			 *
			 * Example:
			 *
			 *   var ReactComponentWithPureRenderMixin =
			 *     require('ReactComponentWithPureRenderMixin');
			 *   React.createClass({
			 *     mixins: [ReactComponentWithPureRenderMixin],
			 *
			 *     render: function() {
			 *       return <div className={this.props.className}>foo</div>;
			 *     }
			 *   });
			 *
			 * Note: This only checks shallow equality for props and state. If these contain
			 * complex data structures this mixin may have false-negatives for deeper
			 * differences. Only mixin to components which have simple props and state, or
			 * use `forceUpdate()` when you know deep data structures have changed.
			 *
			 * See https://facebook.github.io/react/docs/pure-render-mixin.html
			 */
			var ReactComponentWithPureRenderMixin = {
			  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
			    return shallowCompare(this, nextProps, nextState);
			  }
			};
			
			module.exports = ReactComponentWithPureRenderMixin;
		},		// lib/shallowCompare.js
		function(__inner_require__, exports, module){
			var shallowEqual = require('fbjs@0.8/lib/shallowEqual.js');
			
			/**
			 * Does a shallow comparison for props and state.
			 * See ReactComponentWithPureRenderMixin
			 * See also https://facebook.github.io/react/docs/shallow-compare.html
			 */
			function shallowCompare(instance, nextProps, nextState) {
			  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
			}
			
			module.exports = shallowCompare;
		}
	];
});