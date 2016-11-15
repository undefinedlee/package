__d("react-native@0.37/Libraries/Components/View/ReactNativeViewAttributes.js", ["react-native@0.37/Libraries/Components/View/ReactNativeStyleAttributes.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Components/View/ReactNativeViewAttributes.js
	function (__inner_require__, exports, module) {
		var ReactNativeStyleAttributes = require('react-native@0.37/Libraries/Components/View/ReactNativeStyleAttributes.js');

		var ReactNativeViewAttributes = {};

		ReactNativeViewAttributes.UIView = {
			pointerEvents: true,
			accessible: true,
			accessibilityLabel: true,
			accessibilityComponentType: true,
			accessibilityLiveRegion: true,
			accessibilityTraits: true,
			importantForAccessibility: true,
			testID: true,
			renderToHardwareTextureAndroid: true,
			shouldRasterizeIOS: true,
			onLayout: true,
			onAccessibilityTap: true,
			onMagicTap: true,
			collapsable: true,
			needsOffscreenAlphaCompositing: true,
			style: ReactNativeStyleAttributes };

		ReactNativeViewAttributes.RCTView = babelHelpers.extends({}, ReactNativeViewAttributes.UIView, {

			removeClippedSubviews: true });

		module.exports = ReactNativeViewAttributes;
	}];
});