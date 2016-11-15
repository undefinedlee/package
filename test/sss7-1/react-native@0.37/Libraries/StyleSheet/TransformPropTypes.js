__d("react-native@0.37/Libraries/StyleSheet/TransformPropTypes.js", ["react-native@0.37/Libraries/Utilities/deprecatedPropType.js", "react-native@0.37/Libraries/react-native/React.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/StyleSheet/TransformPropTypes.js
	function (__inner_require__, exports, module) {
		var deprecatedPropType = require('react-native@0.37/Libraries/Utilities/deprecatedPropType.js');

		var ReactPropTypes = require('react-native@0.37/Libraries/react-native/React.js').PropTypes;

		var TransformMatrixPropType = function TransformMatrixPropType(props, propName, componentName) {
			if (props[propName]) {
				return new Error('The transformMatrix style property is deprecated. ' + 'Use `transform: [{ matrix: ... }]` instead.');
			}
		};

		var DecomposedMatrixPropType = function DecomposedMatrixPropType(props, propName, componentName) {
			if (props[propName]) {
				return new Error('The decomposedMatrix style property is deprecated. ' + 'Use `transform: [...]` instead.');
			}
		};

		var TransformPropTypes = {
			transform: ReactPropTypes.arrayOf(ReactPropTypes.oneOfType([ReactPropTypes.shape({ perspective: ReactPropTypes.number }), ReactPropTypes.shape({ rotate: ReactPropTypes.string }), ReactPropTypes.shape({ rotateX: ReactPropTypes.string }), ReactPropTypes.shape({ rotateY: ReactPropTypes.string }), ReactPropTypes.shape({ rotateZ: ReactPropTypes.string }), ReactPropTypes.shape({ scale: ReactPropTypes.number }), ReactPropTypes.shape({ scaleX: ReactPropTypes.number }), ReactPropTypes.shape({ scaleY: ReactPropTypes.number }), ReactPropTypes.shape({ translateX: ReactPropTypes.number }), ReactPropTypes.shape({ translateY: ReactPropTypes.number }), ReactPropTypes.shape({ skewX: ReactPropTypes.string }), ReactPropTypes.shape({ skewY: ReactPropTypes.string })])),

			transformMatrix: TransformMatrixPropType,
			decomposedMatrix: DecomposedMatrixPropType,

			scaleX: deprecatedPropType(ReactPropTypes.number, 'Use the transform prop instead.'),
			scaleY: deprecatedPropType(ReactPropTypes.number, 'Use the transform prop instead.'),
			rotation: deprecatedPropType(ReactPropTypes.number, 'Use the transform prop instead.'),
			translateX: deprecatedPropType(ReactPropTypes.number, 'Use the transform prop instead.'),
			translateY: deprecatedPropType(ReactPropTypes.number, 'Use the transform prop instead.') };

		module.exports = TransformPropTypes;
	}];
});