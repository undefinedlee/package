__d("react-native@0.37/Libraries/Components/View/View.js", ["react-native@0.37/Libraries/StyleSheet/EdgeInsetsPropType.js", "react@15.3/lib/NativeMethodsMixin.js", "react-native@0.37/Libraries/react-native/React.js", "react-native@0.37/Libraries/Components/View/ReactNativeStyleAttributes.js", "react-native@0.37/Libraries/Components/View/ReactNativeViewAttributes.js", "react-native@0.37/Libraries/StyleSheet/StyleSheetPropType.js", "react-native@0.37/Libraries/ReactNative/UIManager.js", "react-native@0.37/Libraries/Components/View/ViewStylePropTypes.js", "react-native@0.37/Libraries/ReactNative/requireNativeComponent.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Components/View/View.js
	function (__inner_require__, exports, module) {
		var EdgeInsetsPropType = require('react-native@0.37/Libraries/StyleSheet/EdgeInsetsPropType.js');
		var NativeMethodsMixin = require('react@15.3/lib/NativeMethodsMixin.js');
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var ReactNativeStyleAttributes = require('react-native@0.37/Libraries/Components/View/ReactNativeStyleAttributes.js');
		var ReactNativeViewAttributes = require('react-native@0.37/Libraries/Components/View/ReactNativeViewAttributes.js');
		var StyleSheetPropType = require('react-native@0.37/Libraries/StyleSheet/StyleSheetPropType.js');
		var UIManager = require('react-native@0.37/Libraries/ReactNative/UIManager.js');
		var ViewStylePropTypes = require('react-native@0.37/Libraries/Components/View/ViewStylePropTypes.js');

		var requireNativeComponent = require('react-native@0.37/Libraries/ReactNative/requireNativeComponent.js');

		var PropTypes = React.PropTypes;

		var stylePropType = StyleSheetPropType(ViewStylePropTypes);

		var AccessibilityTraits = ['none', 'button', 'link', 'header', 'search', 'image', 'selected', 'plays', 'key', 'text', 'summary', 'disabled', 'frequentUpdates', 'startsMedia', 'adjustable', 'allowsDirectInteraction', 'pageTurn'];

		var AccessibilityComponentType = ['none', 'button', 'radiobutton_checked', 'radiobutton_unchecked'];

		var forceTouchAvailable = UIManager.RCTView.Constants && UIManager.RCTView.Constants.forceTouchAvailable || false;

		var statics = {
			AccessibilityTraits: AccessibilityTraits,
			AccessibilityComponentType: AccessibilityComponentType,

			forceTouchAvailable: forceTouchAvailable };

		var View = React.createClass({ displayName: 'View',

			mixins: [NativeMethodsMixin],

			viewConfig: {
				uiViewClassName: 'RCTView',
				validAttributes: ReactNativeViewAttributes.RCTView },

			statics: babelHelpers.extends({}, statics),

			propTypes: {

				accessible: PropTypes.bool,

				accessibilityLabel: PropTypes.node,

				accessibilityComponentType: PropTypes.oneOf(AccessibilityComponentType),

				accessibilityLiveRegion: PropTypes.oneOf(['none', 'polite', 'assertive']),

				importantForAccessibility: PropTypes.oneOf(['auto', 'yes', 'no', 'no-hide-descendants']),

				accessibilityTraits: PropTypes.oneOfType([PropTypes.oneOf(AccessibilityTraits), PropTypes.arrayOf(PropTypes.oneOf(AccessibilityTraits))]),

				onAccessibilityTap: PropTypes.func,

				onMagicTap: PropTypes.func,

				testID: PropTypes.string,

				onResponderGrant: PropTypes.func,

				onResponderMove: PropTypes.func,

				onResponderReject: PropTypes.func,

				onResponderRelease: PropTypes.func,

				onResponderTerminate: PropTypes.func,

				onResponderTerminationRequest: PropTypes.func,

				onStartShouldSetResponder: PropTypes.func,

				onStartShouldSetResponderCapture: PropTypes.func,

				onMoveShouldSetResponder: PropTypes.func,

				onMoveShouldSetResponderCapture: PropTypes.func,

				hitSlop: EdgeInsetsPropType,

				onLayout: PropTypes.func,

				pointerEvents: PropTypes.oneOf(['box-none', 'none', 'box-only', 'auto']),

				style: stylePropType,

				removeClippedSubviews: PropTypes.bool,

				renderToHardwareTextureAndroid: PropTypes.bool,

				shouldRasterizeIOS: PropTypes.bool,

				collapsable: PropTypes.bool,

				needsOffscreenAlphaCompositing: PropTypes.bool },

			render: function render() {

				return React.createElement(RCTView, this.props);
			} });

		var RCTView = requireNativeComponent('RCTView', View, {
			nativeOnly: {
				nativeBackgroundAndroid: true,
				nativeForegroundAndroid: true } });

		var ViewToExport = RCTView;
		{
			babelHelpers.extends(RCTView, statics);
		}

		module.exports = ViewToExport;
	}];
});