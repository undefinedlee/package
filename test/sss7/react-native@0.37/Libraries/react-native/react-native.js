__d("react-native@0.37/Libraries/react-native/react-native.js", ["fbjs@0.8/lib/warning.js", "react-native@0.37/Libraries/Components/View/View.js", "react-native@0.37/Libraries/Alert/Alert.js", "react-native@0.37/Libraries/Alert/AlertIOS.js", "react-native@0.37/Libraries/AppState/AppState.js", "react-native@0.37/Libraries/Utilities/Dimensions.js", "react-native@0.37/Libraries/Components/Keyboard/Keyboard.js", "react-native@0.37/Libraries/EventEmitter/NativeEventEmitter.js", "react-native@0.37/Libraries/Utilities/PixelRatio.js", "react-native@0.37/Libraries/Components/StatusBar/StatusBarIOS.ios.js", "react-native@0.37/Libraries/StyleSheet/StyleSheet.js", "react-native@0.37/Libraries/Performance/Systrace.js", "react-native@0.37/Libraries/ReactNative/UIManager.js", "react-native@0.37/Libraries/EventEmitter/RCTDeviceEventEmitter.js", "react-native@0.37/Libraries/EventEmitter/RCTNativeAppEventEmitter.js", "react-native@0.37/Libraries/BatchedBridge/NativeModules.js", "react-native@0.37/Libraries/Utilities/Platform.ios.js", "react-native@0.37/Libraries/StyleSheet/processColor.js", "react-native@0.37/Libraries/ReactNative/requireNativeComponent.js", "react-native@0.37/Libraries/StyleSheet/ColorPropType.js", "react-native@0.37/Libraries/StyleSheet/EdgeInsetsPropType.js", "react@15.3/lib/LinkedStateMixin.js", "react@15.3/lib/ReactComponentWithPureRenderMixin.js", "react@15.3/lib/ReactUpdates.js", "react@15.3/lib/ReactFragment.js", "react@15.3/lib/update.js", "react@15.3/lib/NativeMethodsMixin.js", "react-native@0.37/Libraries/react-native/React.js", "art@0.10/core/color.js", "art@0.10/core/transform.js", "react-native@0.37/Libraries/Components/View/ReactNativeViewAttributes.js", "react@15.3/lib/createReactNativeComponentClass.js", "react-native@0.37/Libraries/vendor/core/merge.js", "art@0.10/core/class.js", "art@0.10/core/path.js", "fbjs@0.8/lib/invariant.js", "react-native@0.37/Libraries/StyleSheet/StyleSheetPropType.js", "react-native@0.37/Libraries/Text/TextStylePropTypes.js", "fbjs@0.8/lib/TouchEventUtils.js", "fbjs@0.8/lib/keyMirror.js", "react-native@0.37/Libraries/StyleSheet/normalizeColor.js", "react@15.3/lib/PooledClass.js", "react-timer-mixin@0.13/TimerMixin.js", "react-native@0.37/Libraries/StyleSheet/flattenStyle.js", "react-native@0.37/Libraries/vendor/core/Set.js", "react-native@0.37/Libraries/Components/View/ViewStylePropTypes.js", "react@15.3/lib/findNodeHandle.js", "fbjs@0.8/lib/requestAnimationFrame.js", "react-native@0.37/Libraries/BatchedBridge/BatchedBridge.js", "react-native@0.37/Libraries/EventEmitter/EventEmitter.js", "react-native@0.37/Libraries/Image/ImageResizeMode.js", "react-native@0.37/Libraries/Image/ImageStylePropTypes.js", "react-native@0.37/Libraries/Image/resolveAssetSource.js", "react-native@0.37/Libraries/Utilities/dismissKeyboard.js", "react-native@0.37/Libraries/Utilities/createStrictShapeTypeChecker.js", "react@15.3/lib/ReactNative.js", "react-native@0.37/Libraries/Components/TextInput/TextInputState.js", "react-native@0.37/Libraries/Components/UnimplementedViews/UnimplementedView.js", "react-clone-referenced-element@1/cloneReferencedElement.js", "react-native@0.37/Libraries/Utilities/deprecatedPropType.js", "rebound@0.0.13/rebound.js", "fbjs@0.8/lib/emptyFunction.js", "immutable@3.7/dist/immutable.js", "react-native@0.37/Libraries/vendor/core/guid.js", "fbjs@0.8/lib/keyOf.js", "react@15.3/lib/TouchHistoryMath.js", "react-native@0.37/Libraries/Utilities/logError.js", "react-native@0.37/Libraries/vendor/core/Map.js", "react@15.3/lib/ReactNativeMount.js", "react-native@0.37/Libraries/Utilities/deepFreezeAndThrowOnMutationInDev.js", "fbjs@0.8/lib/shallowEqual.js", "react-native@0.37/Libraries/react-native/react-native.js", "react@15.3/react.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/react-native/react-native.js
	function (__inner_require__, exports, module) {
		var warning = require('fbjs@0.8/lib/warning.js');

		var ReactNative = {

			get ActivityIndicator() {
				return __inner_require__(1 /*Libraries/Components/ActivityIndicator/ActivityIndicator.js*/);
			},
			get ART() {
				return __inner_require__(2 /*Libraries/ART/ReactNativeART.js*/);
			},
			get Button() {
				return __inner_require__(4 /*Libraries/Components/Button.js*/);
			},
			get DatePickerIOS() {
				return __inner_require__(32 /*Libraries/Components/DatePicker/DatePickerIOS.ios.js*/);
			},
			get DrawerLayoutAndroid() {
				return __inner_require__(33 /*Libraries/Components/DrawerAndroid/DrawerLayoutAndroid.ios.js*/);
			},
			get Image() {
				return __inner_require__(22 /*Libraries/Image/Image.ios.js*/);
			},
			get ImageEditor() {
				return __inner_require__(34 /*Libraries/Image/ImageEditor.js*/);
			},
			get ImageStore() {
				return __inner_require__(35 /*Libraries/Image/ImageStore.js*/);
			},
			get KeyboardAvoidingView() {
				return __inner_require__(36 /*Libraries/Components/Keyboard/KeyboardAvoidingView.js*/);
			},
			get ListView() {
				return __inner_require__(38 /*Libraries/CustomComponents/ListView/ListView.js*/);
			},
			get MapView() {
				return __inner_require__(42 /*Libraries/Components/MapView/MapView.js*/);
			},
			get Modal() {
				return __inner_require__(43 /*Libraries/Modal/Modal.js*/);
			},
			get Navigator() {
				return __inner_require__(46 /*Libraries/CustomComponents/Navigator/Navigator.js*/);
			},
			get NavigatorIOS() {
				return __inner_require__(61 /*Libraries/Components/Navigation/NavigatorIOS.ios.js*/);
			},
			get Picker() {
				return __inner_require__(63 /*Libraries/Components/Picker/Picker.js*/);
			},
			get PickerIOS() {
				return __inner_require__(64 /*Libraries/Components/Picker/PickerIOS.ios.js*/);
			},
			get ProgressBarAndroid() {
				return __inner_require__(66 /*Libraries/Components/ProgressBarAndroid/ProgressBarAndroid.ios.js*/);
			},
			get ProgressViewIOS() {
				return __inner_require__(67 /*Libraries/Components/ProgressViewIOS/ProgressViewIOS.ios.js*/);
			},
			get ScrollView() {
				return __inner_require__(24 /*Libraries/Components/ScrollView/ScrollView.js*/);
			},
			get SegmentedControlIOS() {
				return __inner_require__(68 /*Libraries/Components/SegmentedControlIOS/SegmentedControlIOS.ios.js*/);
			},
			get Slider() {
				return __inner_require__(69 /*Libraries/Components/Slider/Slider.js*/);
			},
			get SnapshotViewIOS() {
				return __inner_require__(70 /*Libraries/RCTTest/SnapshotViewIOS.ios.js*/);
			},
			get Switch() {
				return __inner_require__(71 /*Libraries/Components/Switch/Switch.js*/);
			},
			get RecyclerViewBackedScrollView() {
				return __inner_require__(72 /*Libraries/Components/ScrollView/RecyclerViewBackedScrollView.ios.js*/);
			},
			get RefreshControl() {
				return __inner_require__(73 /*Libraries/Components/RefreshControl/RefreshControl.js*/);
			},
			get StatusBar() {
				return __inner_require__(74 /*Libraries/Components/StatusBar/StatusBar.js*/);
			},
			get SwipeableListView() {
				return __inner_require__(75 /*Libraries/Experimental/SwipeableRow/SwipeableListView.js*/);
			},
			get TabBarIOS() {
				return __inner_require__(78 /*Libraries/Components/TabBarIOS/TabBarIOS.ios.js*/);
			},
			get Text() {
				return __inner_require__(5 /*Libraries/Text/Text.js*/);
			},
			get TextInput() {
				return __inner_require__(80 /*Libraries/Components/TextInput/TextInput.js*/);
			},
			get ToastAndroid() {
				return __inner_require__(87 /*Libraries/Components/ToastAndroid/ToastAndroid.ios.js*/);
			},
			get ToolbarAndroid() {
				return __inner_require__(88 /*Libraries/Components/ToolbarAndroid/ToolbarAndroid.ios.js*/);
			},
			get Touchable() {
				return __inner_require__(6 /*Libraries/Components/Touchable/Touchable.js*/);
			},
			get TouchableHighlight() {
				return __inner_require__(89 /*Libraries/Components/Touchable/TouchableHighlight.js*/);
			},
			get TouchableNativeFeedback() {
				return __inner_require__(10 /*Libraries/Components/Touchable/TouchableNativeFeedback.ios.js*/);
			},
			get TouchableOpacity() {
				return __inner_require__(11 /*Libraries/Components/Touchable/TouchableOpacity.js*/);
			},
			get TouchableWithoutFeedback() {
				return __inner_require__(30 /*Libraries/Components/Touchable/TouchableWithoutFeedback.js*/);
			},
			get View() {
				return require('react-native@0.37/Libraries/Components/View/View.js');
			},
			get ViewPagerAndroid() {
				return __inner_require__(91 /*Libraries/Components/ViewPager/ViewPagerAndroid.ios.js*/);
			},
			get WebView() {
				return __inner_require__(92 /*Libraries/Components/WebView/WebView.ios.js*/);
			},

			get ActionSheetIOS() {
				return __inner_require__(93 /*Libraries/ActionSheetIOS/ActionSheetIOS.js*/);
			},
			get AdSupportIOS() {
				return __inner_require__(94 /*Libraries/AdSupport/AdSupportIOS.js*/);
			},
			get Alert() {
				return require('react-native@0.37/Libraries/Alert/Alert.js');
			},
			get AlertIOS() {
				return require('react-native@0.37/Libraries/Alert/AlertIOS.js');
			},
			get Animated() {
				return __inner_require__(12 /*Libraries/Animated/src/Animated.js*/);
			},
			get AppRegistry() {
				return __inner_require__(95 /*Libraries/ReactNative/AppRegistry.js*/);
			},
			get AppState() {
				return require('react-native@0.37/Libraries/AppState/AppState.js');
			},
			get AsyncStorage() {
				return __inner_require__(101 /*Libraries/Storage/AsyncStorage.js*/);
			},
			get BackAndroid() {
				return __inner_require__(100 /*Libraries/Utilities/BackAndroid.ios.js*/);
			},
			get CameraRoll() {
				return __inner_require__(102 /*Libraries/CameraRoll/CameraRoll.js*/);
			},
			get Clipboard() {
				return __inner_require__(103 /*Libraries/Components/Clipboard/Clipboard.js*/);
			},
			get DatePickerAndroid() {
				return __inner_require__(104 /*Libraries/Components/DatePickerAndroid/DatePickerAndroid.ios.js*/);
			},
			get Dimensions() {
				return require('react-native@0.37/Libraries/Utilities/Dimensions.js');
			},
			get Easing() {
				return __inner_require__(20 /*Libraries/Animated/src/Easing.js*/);
			},
			get I18nManager() {
				return __inner_require__(45 /*Libraries/ReactNative/I18nManager.js*/);
			},
			get ImagePickerIOS() {
				return __inner_require__(105 /*Libraries/CameraRoll/ImagePickerIOS.js*/);
			},
			get InteractionManager() {
				return __inner_require__(14 /*Libraries/Interaction/InteractionManager.js*/);
			},
			get Keyboard() {
				return require('react-native@0.37/Libraries/Components/Keyboard/Keyboard.js');
			},
			get LayoutAnimation() {
				return __inner_require__(37 /*Libraries/LayoutAnimation/LayoutAnimation.js*/);
			},
			get Linking() {
				return __inner_require__(106 /*Libraries/Linking/Linking.js*/);
			},
			get NativeEventEmitter() {
				return require('react-native@0.37/Libraries/EventEmitter/NativeEventEmitter.js');
			},
			get NavigationExperimental() {
				return __inner_require__(107 /*Libraries/NavigationExperimental/NavigationExperimental.js*/);
			},
			get NetInfo() {
				return __inner_require__(125 /*Libraries/Network/NetInfo.js*/);
			},
			get PanResponder() {
				return __inner_require__(59 /*Libraries/Interaction/PanResponder.js*/);
			},
			get PermissionsAndroid() {
				return __inner_require__(126 /*Libraries/PermissionsAndroid/PermissionsAndroid.js*/);
			},
			get PixelRatio() {
				return require('react-native@0.37/Libraries/Utilities/PixelRatio.js');
			},
			get PushNotificationIOS() {
				return __inner_require__(127 /*Libraries/PushNotificationIOS/PushNotificationIOS.js*/);
			},
			get Settings() {
				return __inner_require__(128 /*Libraries/Settings/Settings.ios.js*/);
			},
			get Share() {
				return __inner_require__(129 /*Libraries/Share/Share.js*/);
			},
			get StatusBarIOS() {
				return require('react-native@0.37/Libraries/Components/StatusBar/StatusBarIOS.ios.js');
			},
			get StyleSheet() {
				return require('react-native@0.37/Libraries/StyleSheet/StyleSheet.js');
			},
			get Systrace() {
				return require('react-native@0.37/Libraries/Performance/Systrace.js');
			},
			get TimePickerAndroid() {
				return __inner_require__(130 /*Libraries/Components/TimePickerAndroid/TimePickerAndroid.ios.js*/);
			},
			get UIManager() {
				return require('react-native@0.37/Libraries/ReactNative/UIManager.js');
			},
			get Vibration() {
				return __inner_require__(131 /*Libraries/Vibration/Vibration.js*/);
			},
			get VibrationIOS() {
				return __inner_require__(132 /*Libraries/Vibration/VibrationIOS.ios.js*/);
			},

			get DeviceEventEmitter() {
				return require('react-native@0.37/Libraries/EventEmitter/RCTDeviceEventEmitter.js');
			},
			get NativeAppEventEmitter() {
				return require('react-native@0.37/Libraries/EventEmitter/RCTNativeAppEventEmitter.js');
			},
			get NativeModules() {
				return require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js');
			},
			get Platform() {
				return require('react-native@0.37/Libraries/Utilities/Platform.ios.js');
			},
			get processColor() {
				return require('react-native@0.37/Libraries/StyleSheet/processColor.js');
			},
			get requireNativeComponent() {
				return require('react-native@0.37/Libraries/ReactNative/requireNativeComponent.js');
			},

			get ColorPropType() {
				return require('react-native@0.37/Libraries/StyleSheet/ColorPropType.js');
			},
			get EdgeInsetsPropType() {
				return require('react-native@0.37/Libraries/StyleSheet/EdgeInsetsPropType.js');
			},
			get PointPropType() {
				return __inner_require__(25 /*Libraries/StyleSheet/PointPropType.js*/);
			},

			addons: {
				get LinkedStateMixin() {
					return require('react@15.3/lib/LinkedStateMixin.js');
				},
				get PureRenderMixin() {
					return require('react@15.3/lib/ReactComponentWithPureRenderMixin.js');
				},
				get TestModule() {
					return require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js').TestModule;
				},
				get batchedUpdates() {
					return require('react@15.3/lib/ReactUpdates.js').batchedUpdates;
				},
				get createFragment() {
					return require('react@15.3/lib/ReactFragment.js').create;
				},
				get update() {
					return require('react@15.3/lib/update.js');
				} } };

		var ReactNativeInternal = __inner_require__(26 /*Libraries/react-native/ReactNative.js*/);
		function applyForwarding(key) {
			ReactNative[key] = ReactNativeInternal[key];
		}
		for (var key in ReactNativeInternal) {
			applyForwarding(key);
		}
		module.exports = ReactNative;
	}, // Libraries/Components/ActivityIndicator/ActivityIndicator.js
	function (__inner_require__, exports, module) {
		var ColorPropType = require('react-native@0.37/Libraries/StyleSheet/ColorPropType.js');
		var NativeMethodsMixin = require('react@15.3/lib/NativeMethodsMixin.js');
		var Platform = require('react-native@0.37/Libraries/Utilities/Platform.ios.js');
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var StyleSheet = require('react-native@0.37/Libraries/StyleSheet/StyleSheet.js');
		var View = require('react-native@0.37/Libraries/Components/View/View.js');

		var requireNativeComponent = require('react-native@0.37/Libraries/ReactNative/requireNativeComponent.js');

		var PropTypes = React.PropTypes;

		var GRAY = '#999999';

		var ActivityIndicator = React.createClass({ displayName: 'ActivityIndicator',
			mixins: [NativeMethodsMixin],

			propTypes: babelHelpers.extends({}, View.propTypes, {

				animating: PropTypes.bool,

				color: ColorPropType,

				size: PropTypes.oneOfType([PropTypes.oneOf(['small', 'large']), PropTypes.number]),

				hidesWhenStopped: PropTypes.bool }),

			getDefaultProps: function getDefaultProps() {
				return {
					animating: true,
					color: Platform.OS === 'ios' ? GRAY : undefined,
					hidesWhenStopped: true,
					size: 'small' };
			},

			render: function render() {
				var _props = this.props,
				    onLayout = _props.onLayout,
				    style = _props.style,
				    props = babelHelpers.objectWithoutProperties(_props, ['onLayout', 'style']);
				var sizeStyle = void 0;

				switch (props.size) {
					case 'small':
						sizeStyle = styles.sizeSmall;
						break;
					case 'large':
						sizeStyle = styles.sizeLarge;
						break;
					default:
						sizeStyle = { height: props.size, width: props.size };
						break;}

				return React.createElement(View, {
					onLayout: onLayout,
					style: [styles.container, style] }, React.createElement(RCTActivityIndicator, babelHelpers.extends({}, props, {
					style: sizeStyle,
					styleAttr: 'Normal',
					indeterminate: true })));
			} });

		var styles = StyleSheet.create({
			container: {
				alignItems: 'center',
				justifyContent: 'center' },

			sizeSmall: {
				width: 20,
				height: 20 },

			sizeLarge: {
				width: 36,
				height: 36 } });

		if (Platform.OS === 'ios') {
			var RCTActivityIndicator = requireNativeComponent('RCTActivityIndicatorView', ActivityIndicator, { nativeOnly: { activityIndicatorViewStyle: true } });
		} else if (Platform.OS === 'android') {
			var RCTActivityIndicator = requireNativeComponent('AndroidProgressBar', ActivityIndicator, { nativeOnly: {
					indeterminate: true,
					progress: true,
					styleAttr: true } });
		}

		module.exports = ActivityIndicator;
	}, // Libraries/ART/ReactNativeART.js
	function (__inner_require__, exports, module) {
		var Color = require('art@0.10/core/color.js');
		var Path = __inner_require__(3 /*Libraries/ART/ARTSerializablePath.js*/);
		var Transform = require('art@0.10/core/transform.js');

		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var ReactNativeViewAttributes = require('react-native@0.37/Libraries/Components/View/ReactNativeViewAttributes.js');

		var createReactNativeComponentClass = require('react@15.3/lib/createReactNativeComponentClass.js');
		var merge = require('react-native@0.37/Libraries/vendor/core/merge.js');

		function arrayDiffer(a, b) {
			if (a == null || b == null) {
				return true;
			}
			if (a.length !== b.length) {
				return true;
			}
			for (var i = 0; i < a.length; i++) {
				if (a[i] !== b[i]) {
					return true;
				}
			}
			return false;
		}

		function fontAndLinesDiffer(a, b) {
			if (a === b) {
				return false;
			}
			if (a.font !== b.font) {
				if (a.font === null) {
					return true;
				}
				if (b.font === null) {
					return true;
				}

				if (a.font.fontFamily !== b.font.fontFamily || a.font.fontSize !== b.font.fontSize || a.font.fontWeight !== b.font.fontWeight || a.font.fontStyle !== b.font.fontStyle) {
					return true;
				}
			}
			return arrayDiffer(a.lines, b.lines);
		}

		var SurfaceViewAttributes = merge(ReactNativeViewAttributes.UIView, {});

		var NodeAttributes = {
			transform: { diff: arrayDiffer },
			opacity: true };

		var GroupAttributes = merge(NodeAttributes, {
			clipping: { diff: arrayDiffer } });

		var RenderableAttributes = merge(NodeAttributes, {
			fill: { diff: arrayDiffer },
			stroke: { diff: arrayDiffer },
			strokeWidth: true,
			strokeCap: true,
			strokeJoin: true,
			strokeDash: { diff: arrayDiffer } });

		var ShapeAttributes = merge(RenderableAttributes, {
			d: { diff: arrayDiffer } });

		var TextAttributes = merge(RenderableAttributes, {
			alignment: true,
			frame: { diff: fontAndLinesDiffer },
			path: { diff: arrayDiffer } });

		var NativeSurfaceView = createReactNativeComponentClass({
			validAttributes: SurfaceViewAttributes,
			uiViewClassName: 'ARTSurfaceView' });

		var NativeGroup = createReactNativeComponentClass({
			validAttributes: GroupAttributes,
			uiViewClassName: 'ARTGroup' });

		var NativeShape = createReactNativeComponentClass({
			validAttributes: ShapeAttributes,
			uiViewClassName: 'ARTShape' });

		var NativeText = createReactNativeComponentClass({
			validAttributes: TextAttributes,
			uiViewClassName: 'ARTText' });

		function childrenAsString(children) {
			if (!children) {
				return '';
			}
			if (typeof children === 'string') {
				return children;
			}
			if (children.length) {
				return children.join('\n');
			}
			return '';
		}var Surface = function (_React$Component) {
			babelHelpers.inherits(Surface, _React$Component);function Surface() {
				babelHelpers.classCallCheck(this, Surface);return babelHelpers.possibleConstructorReturn(this, (Surface.__proto__ || Object.getPrototypeOf(Surface)).apply(this, arguments));
			}babelHelpers.createClass(Surface, [{ key: 'render', value: function render() {
					var props = this.props;
					var w = extractNumber(props.width, 0);
					var h = extractNumber(props.height, 0);
					return React.createElement(NativeSurfaceView, { style: [props.style, { width: w, height: h }] }, this.props.children);
				} }]);return Surface;
		}(React.Component);

		function extractNumber(value, defaultValue) {
			if (value == null) {
				return defaultValue;
			}
			return +value;
		}

		var pooledTransform = new Transform();

		function extractTransform(props) {
			var scaleX = props.scaleX != null ? props.scaleX : props.scale != null ? props.scale : 1;
			var scaleY = props.scaleY != null ? props.scaleY : props.scale != null ? props.scale : 1;

			pooledTransform.transformTo(1, 0, 0, 1, 0, 0).move(props.x || 0, props.y || 0).rotate(props.rotation || 0, props.originX, props.originY).scale(scaleX, scaleY, props.originX, props.originY);

			if (props.transform != null) {
				pooledTransform.transform(props.transform);
			}

			return [pooledTransform.xx, pooledTransform.yx, pooledTransform.xy, pooledTransform.yy, pooledTransform.x, pooledTransform.y];
		}

		function extractOpacity(props) {

			if (props.visible === false) {
				return 0;
			}
			if (props.opacity == null) {
				return 1;
			}
			return +props.opacity;
		}var Group = function (_React$Component2) {
			babelHelpers.inherits(Group, _React$Component2);function Group() {
				babelHelpers.classCallCheck(this, Group);return babelHelpers.possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).apply(this, arguments));
			}babelHelpers.createClass(Group, [{ key: 'render', value: function render() {
					var props = this.props;
					return React.createElement(NativeGroup, {
						opacity: extractOpacity(props),
						transform: extractTransform(props) }, this.props.children);
				} }]);return Group;
		}(React.Component);var ClippingRectangle = function (_React$Component3) {
			babelHelpers.inherits(ClippingRectangle, _React$Component3);function ClippingRectangle() {
				babelHelpers.classCallCheck(this, ClippingRectangle);return babelHelpers.possibleConstructorReturn(this, (ClippingRectangle.__proto__ || Object.getPrototypeOf(ClippingRectangle)).apply(this, arguments));
			}babelHelpers.createClass(ClippingRectangle, [{ key: 'render', value: function render() {
					var props = this.props;
					var x = extractNumber(props.x, 0);
					var y = extractNumber(props.y, 0);
					var w = extractNumber(props.width, 0);
					var h = extractNumber(props.height, 0);
					var clipping = [x, y, w, h];

					var propsExcludingXAndY = merge(props);
					delete propsExcludingXAndY.x;
					delete propsExcludingXAndY.y;
					return React.createElement(NativeGroup, {
						clipping: clipping,
						opacity: extractOpacity(props),
						transform: extractTransform(propsExcludingXAndY) }, this.props.children);
				} }]);return ClippingRectangle;
		}(React.Component);

		var SOLID_COLOR = 0;
		var LINEAR_GRADIENT = 1;
		var RADIAL_GRADIENT = 2;
		var PATTERN = 3;

		function insertColorIntoArray(color, targetArray, atIndex) {
			var c = new Color(color);
			targetArray[atIndex + 0] = c.red / 255;
			targetArray[atIndex + 1] = c.green / 255;
			targetArray[atIndex + 2] = c.blue / 255;
			targetArray[atIndex + 3] = c.alpha;
		}

		function insertColorsIntoArray(stops, targetArray, atIndex) {
			var i = 0;
			if ('length' in stops) {
				while (i < stops.length) {
					insertColorIntoArray(stops[i], targetArray, atIndex + i * 4);
					i++;
				}
			} else {
				for (var offset in stops) {
					insertColorIntoArray(stops[offset], targetArray, atIndex + i * 4);
					i++;
				}
			}
			return atIndex + i * 4;
		}

		function insertOffsetsIntoArray(stops, targetArray, atIndex, multi, reverse) {
			var offsetNumber;
			var i = 0;
			if ('length' in stops) {
				while (i < stops.length) {
					offsetNumber = i / (stops.length - 1) * multi;
					targetArray[atIndex + i] = reverse ? 1 - offsetNumber : offsetNumber;
					i++;
				}
			} else {
				for (var offsetString in stops) {
					offsetNumber = +offsetString * multi;
					targetArray[atIndex + i] = reverse ? 1 - offsetNumber : offsetNumber;
					i++;
				}
			}
			return atIndex + i;
		}

		function insertColorStopsIntoArray(stops, targetArray, atIndex) {
			var lastIndex = insertColorsIntoArray(stops, targetArray, atIndex);
			insertOffsetsIntoArray(stops, targetArray, lastIndex, 1, false);
		}

		function insertDoubleColorStopsIntoArray(stops, targetArray, atIndex) {
			var lastIndex = insertColorsIntoArray(stops, targetArray, atIndex);
			lastIndex = insertColorsIntoArray(stops, targetArray, lastIndex);
			lastIndex = insertOffsetsIntoArray(stops, targetArray, lastIndex, 0.5, false);
			insertOffsetsIntoArray(stops, targetArray, lastIndex, 0.5, true);
		}

		function applyBoundingBoxToBrushData(brushData, props) {
			var type = brushData[0];
			var width = +props.width;
			var height = +props.height;
			if (type === LINEAR_GRADIENT) {
				brushData[1] *= width;
				brushData[2] *= height;
				brushData[3] *= width;
				brushData[4] *= height;
			} else if (type === RADIAL_GRADIENT) {
				brushData[1] *= width;
				brushData[2] *= height;
				brushData[3] *= width;
				brushData[4] *= height;
				brushData[5] *= width;
				brushData[6] *= height;
			} else if (type === PATTERN) {}
		}

		function extractBrush(colorOrBrush, props) {
			if (colorOrBrush == null) {
				return null;
			}
			if (colorOrBrush._brush) {
				if (colorOrBrush._bb) {

					applyBoundingBoxToBrushData(colorOrBrush._brush, props);
					colorOrBrush._bb = false;
				}
				return colorOrBrush._brush;
			}
			var c = new Color(colorOrBrush);
			return [SOLID_COLOR, c.red / 255, c.green / 255, c.blue / 255, c.alpha];
		}

		function extractColor(color) {
			if (color == null) {
				return null;
			}
			var c = new Color(color);
			return [c.red / 255, c.green / 255, c.blue / 255, c.alpha];
		}

		function extractStrokeCap(strokeCap) {
			switch (strokeCap) {
				case 'butt':
					return 0;
				case 'square':
					return 2;
				default:
					return 1;}
		}

		function extractStrokeJoin(strokeJoin) {
			switch (strokeJoin) {
				case 'miter':
					return 0;
				case 'bevel':
					return 2;
				default:
					return 1;}
		}var Shape = function (_React$Component4) {
			babelHelpers.inherits(Shape, _React$Component4);function Shape() {
				babelHelpers.classCallCheck(this, Shape);return babelHelpers.possibleConstructorReturn(this, (Shape.__proto__ || Object.getPrototypeOf(Shape)).apply(this, arguments));
			}babelHelpers.createClass(Shape, [{ key: 'render', value: function render() {
					var props = this.props;
					var path = props.d || childrenAsString(props.children);
					var d = new Path(path).toJSON();
					return React.createElement(NativeShape, {
						fill: extractBrush(props.fill, props),
						opacity: extractOpacity(props),
						stroke: extractColor(props.stroke),
						strokeCap: extractStrokeCap(props.strokeCap),
						strokeDash: props.strokeDash || null,
						strokeJoin: extractStrokeJoin(props.strokeJoin),
						strokeWidth: extractNumber(props.strokeWidth, 1),
						transform: extractTransform(props),

						d: d });
				} }]);return Shape;
		}(React.Component);

		var cachedFontObjectsFromString = {};

		var fontFamilyPrefix = /^[\s"']*/;
		var fontFamilySuffix = /[\s"']*$/;

		function extractSingleFontFamily(fontFamilyString) {

			return fontFamilyString.split(',')[0].replace(fontFamilyPrefix, '').replace(fontFamilySuffix, '');
		}

		function parseFontString(font) {
			if (cachedFontObjectsFromString.hasOwnProperty(font)) {
				return cachedFontObjectsFromString[font];
			}
			var regexp = /^\s*((?:(?:normal|bold|italic)\s+)*)(?:(\d+(?:\.\d+)?)[ptexm\%]*(?:\s*\/.*?)?\s+)?\s*\"?([^\"]*)/i;
			var match = regexp.exec(font);
			if (!match) {
				return null;
			}
			var fontFamily = extractSingleFontFamily(match[3]);
			var fontSize = +match[2] || 12;
			var isBold = /bold/.exec(match[1]);
			var isItalic = /italic/.exec(match[1]);
			cachedFontObjectsFromString[font] = {
				fontFamily: fontFamily,
				fontSize: fontSize,
				fontWeight: isBold ? 'bold' : 'normal',
				fontStyle: isItalic ? 'italic' : 'normal' };

			return cachedFontObjectsFromString[font];
		}

		function extractFont(font) {
			if (font == null) {
				return null;
			}
			if (typeof font === 'string') {
				return parseFontString(font);
			}
			var fontFamily = extractSingleFontFamily(font.fontFamily);
			var fontSize = +font.fontSize || 12;
			return {

				fontFamily: fontFamily,
				fontSize: fontSize,
				fontWeight: font.fontWeight,
				fontStyle: font.fontStyle };
		}

		var newLine = /\n/g;
		function extractFontAndLines(font, text) {
			return { font: extractFont(font), lines: text.split(newLine) };
		}

		function extractAlignment(alignment) {
			switch (alignment) {
				case 'right':
					return 1;
				case 'center':
					return 2;
				default:
					return 0;}
		}var Text = function (_React$Component5) {
			babelHelpers.inherits(Text, _React$Component5);function Text() {
				babelHelpers.classCallCheck(this, Text);return babelHelpers.possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
			}babelHelpers.createClass(Text, [{ key: 'render', value: function render() {
					var props = this.props;
					var textPath = props.path ? new Path(props.path).toJSON() : null;
					var textFrame = extractFontAndLines(props.font, childrenAsString(props.children));

					return React.createElement(NativeText, {
						fill: extractBrush(props.fill, props),
						opacity: extractOpacity(props),
						stroke: extractColor(props.stroke),
						strokeCap: extractStrokeCap(props.strokeCap),
						strokeDash: props.strokeDash || null,
						strokeJoin: extractStrokeJoin(props.strokeJoin),
						strokeWidth: extractNumber(props.strokeWidth, 1),
						transform: extractTransform(props),

						alignment: extractAlignment(props.alignment),
						frame: textFrame,
						path: textPath });
				} }]);return Text;
		}(React.Component);

		function LinearGradient(stops, x1, y1, x2, y2) {
			var type = LINEAR_GRADIENT;

			if (arguments.length < 5) {
				var angle = (x1 == null ? 270 : x1) * Math.PI / 180;

				var x = Math.cos(angle);
				var y = -Math.sin(angle);
				var l = (Math.abs(x) + Math.abs(y)) / 2;

				x *= l;y *= l;

				x1 = 0.5 - x;
				x2 = 0.5 + x;
				y1 = 0.5 - y;
				y2 = 0.5 + y;
				this._bb = true;
			} else {
				this._bb = false;
			}

			var brushData = [type, +x1, +y1, +x2, +y2];
			insertColorStopsIntoArray(stops, brushData, 5);
			this._brush = brushData;
		}

		function RadialGradient(stops, fx, fy, rx, ry, cx, cy) {
			if (ry == null) {
				ry = rx;
			}
			if (cx == null) {
				cx = fx;
			}
			if (cy == null) {
				cy = fy;
			}
			if (fx == null) {

				fx = fy = rx = ry = cx = cy = 0.5;
				this._bb = true;
			} else {
				this._bb = false;
			}

			var brushData = [RADIAL_GRADIENT, +fx, +fy, +rx * 2, +ry * 2, +cx, +cy];
			insertDoubleColorStopsIntoArray(stops, brushData, 7);
			this._brush = brushData;
		}

		function Pattern(url, width, height, left, top) {
			this._brush = [PATTERN, url, +left || 0, +top || 0, +width, +height];
		}

		var ReactART = {
			LinearGradient: LinearGradient,
			RadialGradient: RadialGradient,
			Pattern: Pattern,
			Transform: Transform,
			Path: Path,
			Surface: Surface,
			Group: Group,
			ClippingRectangle: ClippingRectangle,
			Shape: Shape,
			Text: Text };

		module.exports = ReactART;
	}, // Libraries/ART/ARTSerializablePath.js
	function (__inner_require__, exports, module) {
		var Class = require('art@0.10/core/class.js');
		var Path = require('art@0.10/core/path.js');

		var MOVE_TO = 0;
		var CLOSE = 1;
		var LINE_TO = 2;
		var CURVE_TO = 3;
		var ARC = 4;

		var SerializablePath = Class(Path, {

			initialize: function initialize(path) {
				this.reset();
				if (path instanceof SerializablePath) {
					this.path = path.path.slice(0);
				} else if (path) {
					if (path.applyToPath) {
						path.applyToPath(this);
					} else {
						this.push(path);
					}
				}
			},

			onReset: function onReset() {
				this.path = [];
			},

			onMove: function onMove(sx, sy, x, y) {
				this.path.push(MOVE_TO, x, y);
			},

			onLine: function onLine(sx, sy, x, y) {
				this.path.push(LINE_TO, x, y);
			},

			onBezierCurve: function onBezierCurve(sx, sy, p1x, p1y, p2x, p2y, x, y) {
				this.path.push(CURVE_TO, p1x, p1y, p2x, p2y, x, y);
			},

			_arcToBezier: Path.prototype.onArc,

			onArc: function onArc(sx, sy, ex, ey, cx, cy, rx, ry, sa, ea, ccw, rotation) {
				if (rx !== ry || rotation) {
					return this._arcToBezier(sx, sy, ex, ey, cx, cy, rx, ry, sa, ea, ccw, rotation);
				}
				this.path.push(ARC, cx, cy, rx, sa, ea, ccw ? 0 : 1);
			},

			onClose: function onClose() {
				this.path.push(CLOSE);
			},

			toJSON: function toJSON() {
				return this.path;
			} });

		module.exports = SerializablePath;
	}, // Libraries/Components/Button.js
	function (__inner_require__, exports, module) {
		var ColorPropType = require('react-native@0.37/Libraries/StyleSheet/ColorPropType.js');
		var Platform = require('react-native@0.37/Libraries/Utilities/Platform.ios.js');
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var StyleSheet = require('react-native@0.37/Libraries/StyleSheet/StyleSheet.js');
		var Text = __inner_require__(5 /*Libraries/Text/Text.js*/);
		var TouchableNativeFeedback = __inner_require__(10 /*Libraries/Components/Touchable/TouchableNativeFeedback.ios.js*/);
		var TouchableOpacity = __inner_require__(11 /*Libraries/Components/Touchable/TouchableOpacity.js*/);
		var View = require('react-native@0.37/Libraries/Components/View/View.js');

		var invariant = require('fbjs@0.8/lib/invariant.js');var Button = function (_React$Component) {
			babelHelpers.inherits(Button, _React$Component);function Button() {
				babelHelpers.classCallCheck(this, Button);return babelHelpers.possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
			}babelHelpers.createClass(Button, [{ key: 'render', value: function render() {
					var _props = this.props,
					    accessibilityLabel = _props.accessibilityLabel,
					    color = _props.color,
					    onPress = _props.onPress,
					    title = _props.title,
					    disabled = _props.disabled;
					var buttonStyles = [styles.button];
					var textStyles = [styles.text];
					var Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
					if (color && Platform.OS === 'ios') {
						textStyles.push({ color: color });
					} else if (color) {
						buttonStyles.push({ backgroundColor: color });
					}
					if (disabled) {
						buttonStyles.push(styles.buttonDisabled);
						textStyles.push(styles.textDisabled);
					}
					invariant(typeof title === 'string', 'The title prop of a Button must be a string');

					var formattedTitle = Platform.OS === 'android' ? title.toUpperCase() : title;
					return React.createElement(Touchable, {
						accessibilityComponentType: 'button',
						accessibilityLabel: accessibilityLabel,
						accessibilityTraits: ['button'],
						disabled: disabled,
						onPress: onPress }, React.createElement(View, { style: buttonStyles }, React.createElement(Text, { style: textStyles }, formattedTitle)));
				} }]);return Button;
		}(React.Component);Button.propTypes = { title: React.PropTypes.string.isRequired, accessibilityLabel: React.PropTypes.string, color: ColorPropType, disabled: React.PropTypes.bool, onPress: React.PropTypes.func.isRequired };

		var defaultBlue = '#2196F3';
		if (Platform.OS === 'ios') {

			defaultBlue = '#0C42FD';
		}

		var styles = StyleSheet.create({
			button: Platform.select({
				ios: {},
				android: {
					elevation: 4,
					backgroundColor: defaultBlue,
					borderRadius: 2 } }),

			text: Platform.select({
				ios: {
					color: defaultBlue,
					textAlign: 'center',
					padding: 8,
					fontSize: 18 },

				android: {
					textAlign: 'center',
					color: 'white',
					padding: 8,
					fontWeight: '500' } }),

			buttonDisabled: Platform.select({
				ios: {},
				android: {
					elevation: 0,
					backgroundColor: '#dfdfdf' } }),

			textDisabled: Platform.select({
				ios: {
					color: '#cdcdcd' },

				android: {
					color: '#a1a1a1' } }) });

		module.exports = Button;
	}, // Libraries/Text/Text.js
	function (__inner_require__, exports, module) {
		var NativeMethodsMixin = require('react@15.3/lib/NativeMethodsMixin.js');
		var Platform = require('react-native@0.37/Libraries/Utilities/Platform.ios.js');
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var ReactNativeViewAttributes = require('react-native@0.37/Libraries/Components/View/ReactNativeViewAttributes.js');
		var StyleSheetPropType = require('react-native@0.37/Libraries/StyleSheet/StyleSheetPropType.js');
		var TextStylePropTypes = require('react-native@0.37/Libraries/Text/TextStylePropTypes.js');
		var Touchable = __inner_require__(6 /*Libraries/Components/Touchable/Touchable.js*/);

		var createReactNativeComponentClass = require('react@15.3/lib/createReactNativeComponentClass.js');
		var mergeFast = __inner_require__(9 /*Libraries/Utilities/mergeFast.js*/);

		var stylePropType = StyleSheetPropType(TextStylePropTypes);

		var viewConfig = {
			validAttributes: mergeFast(ReactNativeViewAttributes.UIView, {
				isHighlighted: true,
				numberOfLines: true,
				ellipsizeMode: true,
				allowFontScaling: true,
				selectable: true,
				adjustsFontSizeToFit: true,
				minimumFontScale: true }),

			uiViewClassName: 'RCTText' };

		var Text = React.createClass({ displayName: 'Text',
			propTypes: {

				ellipsizeMode: React.PropTypes.oneOf(['head', 'middle', 'tail', 'clip']),

				numberOfLines: React.PropTypes.number,

				onLayout: React.PropTypes.func,

				onPress: React.PropTypes.func,

				onLongPress: React.PropTypes.func,

				selectable: React.PropTypes.bool,

				suppressHighlighting: React.PropTypes.bool,
				style: stylePropType,

				testID: React.PropTypes.string,

				allowFontScaling: React.PropTypes.bool,

				accessible: React.PropTypes.bool,

				adjustsFontSizeToFit: React.PropTypes.bool,

				minimumFontScale: React.PropTypes.number },

			getDefaultProps: function getDefaultProps() {
				return {
					accessible: true,
					allowFontScaling: true,
					ellipsizeMode: 'tail' };
			},
			getInitialState: function getInitialState() {
				return mergeFast(Touchable.Mixin.touchableGetInitialState(), {
					isHighlighted: false });
			},
			mixins: [NativeMethodsMixin],
			viewConfig: viewConfig,
			getChildContext: function getChildContext() {
				return { isInAParentText: true };
			},
			childContextTypes: {
				isInAParentText: React.PropTypes.bool },

			contextTypes: {
				isInAParentText: React.PropTypes.bool },

			_handlers: null,
			_hasPressHandler: function _hasPressHandler() {
				return !!this.props.onPress || !!this.props.onLongPress;
			},

			touchableHandleActivePressIn: null,
			touchableHandleActivePressOut: null,
			touchableHandlePress: null,
			touchableHandleLongPress: null,
			touchableGetPressRectOffset: null,
			render: function render() {
				var _this = this;
				var newProps = this.props;
				if (this.props.onStartShouldSetResponder || this._hasPressHandler()) {
					if (!this._handlers) {
						this._handlers = {
							onStartShouldSetResponder: function onStartShouldSetResponder() {
								var shouldSetFromProps = _this.props.onStartShouldSetResponder && _this.props.onStartShouldSetResponder();
								var setResponder = shouldSetFromProps || _this._hasPressHandler();
								if (setResponder && !_this.touchableHandleActivePressIn) {

									for (var key in Touchable.Mixin) {
										if (typeof Touchable.Mixin[key] === 'function') {
											_this[key] = Touchable.Mixin[key].bind(_this);
										}
									}
									_this.touchableHandleActivePressIn = function () {
										if (_this.props.suppressHighlighting || !_this._hasPressHandler()) {
											return;
										}
										_this.setState({
											isHighlighted: true });
									};

									_this.touchableHandleActivePressOut = function () {
										if (_this.props.suppressHighlighting || !_this._hasPressHandler()) {
											return;
										}
										_this.setState({
											isHighlighted: false });
									};

									_this.touchableHandlePress = function (e) {
										_this.props.onPress && _this.props.onPress(e);
									};

									_this.touchableHandleLongPress = function (e) {
										_this.props.onLongPress && _this.props.onLongPress(e);
									};

									_this.touchableGetPressRectOffset = function () {
										return PRESS_RECT_OFFSET;
									};
								}
								return setResponder;
							},
							onResponderGrant: function (e, dispatchID) {
								this.touchableHandleResponderGrant(e, dispatchID);
								this.props.onResponderGrant && this.props.onResponderGrant.apply(this, arguments);
							}.bind(this),
							onResponderMove: function (e) {
								this.touchableHandleResponderMove(e);
								this.props.onResponderMove && this.props.onResponderMove.apply(this, arguments);
							}.bind(this),
							onResponderRelease: function (e) {
								this.touchableHandleResponderRelease(e);
								this.props.onResponderRelease && this.props.onResponderRelease.apply(this, arguments);
							}.bind(this),
							onResponderTerminate: function (e) {
								this.touchableHandleResponderTerminate(e);
								this.props.onResponderTerminate && this.props.onResponderTerminate.apply(this, arguments);
							}.bind(this),
							onResponderTerminationRequest: function () {

								var allowTermination = this.touchableHandleResponderTerminationRequest();
								if (allowTermination && this.props.onResponderTerminationRequest) {
									allowTermination = this.props.onResponderTerminationRequest.apply(this, arguments);
								}
								return allowTermination;
							}.bind(this) };
					}
					newProps = babelHelpers.extends({}, this.props, this._handlers, {
						isHighlighted: this.state.isHighlighted });
				}
				if (Touchable.TOUCH_TARGET_DEBUG && newProps.onPress) {
					newProps = babelHelpers.extends({}, newProps, {
						style: [this.props.style, { color: 'magenta' }] });
				}
				if (this.context.isInAParentText) {
					return React.createElement(RCTVirtualText, newProps);
				} else {
					return React.createElement(RCTText, newProps);
				}
			} });

		var PRESS_RECT_OFFSET = { top: 20, left: 20, right: 20, bottom: 30 };

		var RCTText = createReactNativeComponentClass(viewConfig);
		var RCTVirtualText = RCTText;

		if (Platform.OS === 'android') {
			RCTVirtualText = createReactNativeComponentClass({
				validAttributes: mergeFast(ReactNativeViewAttributes.UIView, {
					isHighlighted: true }),

				uiViewClassName: 'RCTVirtualText' });
		}

		module.exports = Text;
	}, // Libraries/Components/Touchable/Touchable.js
	function (__inner_require__, exports, module) {
		var BoundingDimensions = __inner_require__(7 /*Libraries/Components/Touchable/BoundingDimensions.js*/);
		var Position = __inner_require__(8 /*Libraries/Components/Touchable/Position.js*/);
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var TouchEventUtils = require('fbjs@0.8/lib/TouchEventUtils.js');
		var UIManager = require('react-native@0.37/Libraries/ReactNative/UIManager.js');
		var View = require('react-native@0.37/Libraries/Components/View/View.js');

		var keyMirror = require('fbjs@0.8/lib/keyMirror.js');
		var normalizeColor = require('react-native@0.37/Libraries/StyleSheet/normalizeColor.js');

		var States = keyMirror({
			NOT_RESPONDER: null,
			RESPONDER_INACTIVE_PRESS_IN: null,
			RESPONDER_INACTIVE_PRESS_OUT: null,
			RESPONDER_ACTIVE_PRESS_IN: null,
			RESPONDER_ACTIVE_PRESS_OUT: null,
			RESPONDER_ACTIVE_LONG_PRESS_IN: null,
			RESPONDER_ACTIVE_LONG_PRESS_OUT: null,
			ERROR: null });

		var IsActive = {
			RESPONDER_ACTIVE_PRESS_OUT: true,
			RESPONDER_ACTIVE_PRESS_IN: true };

		var IsPressingIn = {
			RESPONDER_INACTIVE_PRESS_IN: true,
			RESPONDER_ACTIVE_PRESS_IN: true,
			RESPONDER_ACTIVE_LONG_PRESS_IN: true };

		var IsLongPressingIn = {
			RESPONDER_ACTIVE_LONG_PRESS_IN: true };

		var Signals = keyMirror({
			DELAY: null,
			RESPONDER_GRANT: null,
			RESPONDER_RELEASE: null,
			RESPONDER_TERMINATED: null,
			ENTER_PRESS_RECT: null,
			LEAVE_PRESS_RECT: null,
			LONG_PRESS_DETECTED: null });

		var Transitions = {
			NOT_RESPONDER: {
				DELAY: States.ERROR,
				RESPONDER_GRANT: States.RESPONDER_INACTIVE_PRESS_IN,
				RESPONDER_RELEASE: States.ERROR,
				RESPONDER_TERMINATED: States.ERROR,
				ENTER_PRESS_RECT: States.ERROR,
				LEAVE_PRESS_RECT: States.ERROR,
				LONG_PRESS_DETECTED: States.ERROR },

			RESPONDER_INACTIVE_PRESS_IN: {
				DELAY: States.RESPONDER_ACTIVE_PRESS_IN,
				RESPONDER_GRANT: States.ERROR,
				RESPONDER_RELEASE: States.NOT_RESPONDER,
				RESPONDER_TERMINATED: States.NOT_RESPONDER,
				ENTER_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_IN,
				LEAVE_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_OUT,
				LONG_PRESS_DETECTED: States.ERROR },

			RESPONDER_INACTIVE_PRESS_OUT: {
				DELAY: States.RESPONDER_ACTIVE_PRESS_OUT,
				RESPONDER_GRANT: States.ERROR,
				RESPONDER_RELEASE: States.NOT_RESPONDER,
				RESPONDER_TERMINATED: States.NOT_RESPONDER,
				ENTER_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_IN,
				LEAVE_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_OUT,
				LONG_PRESS_DETECTED: States.ERROR },

			RESPONDER_ACTIVE_PRESS_IN: {
				DELAY: States.ERROR,
				RESPONDER_GRANT: States.ERROR,
				RESPONDER_RELEASE: States.NOT_RESPONDER,
				RESPONDER_TERMINATED: States.NOT_RESPONDER,
				ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_IN,
				LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_OUT,
				LONG_PRESS_DETECTED: States.RESPONDER_ACTIVE_LONG_PRESS_IN },

			RESPONDER_ACTIVE_PRESS_OUT: {
				DELAY: States.ERROR,
				RESPONDER_GRANT: States.ERROR,
				RESPONDER_RELEASE: States.NOT_RESPONDER,
				RESPONDER_TERMINATED: States.NOT_RESPONDER,
				ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_IN,
				LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_OUT,
				LONG_PRESS_DETECTED: States.ERROR },

			RESPONDER_ACTIVE_LONG_PRESS_IN: {
				DELAY: States.ERROR,
				RESPONDER_GRANT: States.ERROR,
				RESPONDER_RELEASE: States.NOT_RESPONDER,
				RESPONDER_TERMINATED: States.NOT_RESPONDER,
				ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_IN,
				LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_OUT,
				LONG_PRESS_DETECTED: States.RESPONDER_ACTIVE_LONG_PRESS_IN },

			RESPONDER_ACTIVE_LONG_PRESS_OUT: {
				DELAY: States.ERROR,
				RESPONDER_GRANT: States.ERROR,
				RESPONDER_RELEASE: States.NOT_RESPONDER,
				RESPONDER_TERMINATED: States.NOT_RESPONDER,
				ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_IN,
				LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_OUT,
				LONG_PRESS_DETECTED: States.ERROR },

			error: {
				DELAY: States.NOT_RESPONDER,
				RESPONDER_GRANT: States.RESPONDER_INACTIVE_PRESS_IN,
				RESPONDER_RELEASE: States.NOT_RESPONDER,
				RESPONDER_TERMINATED: States.NOT_RESPONDER,
				ENTER_PRESS_RECT: States.NOT_RESPONDER,
				LEAVE_PRESS_RECT: States.NOT_RESPONDER,
				LONG_PRESS_DETECTED: States.NOT_RESPONDER } };

		var HIGHLIGHT_DELAY_MS = 130;

		var PRESS_EXPAND_PX = 20;

		var LONG_PRESS_THRESHOLD = 500;

		var LONG_PRESS_DELAY_MS = LONG_PRESS_THRESHOLD - HIGHLIGHT_DELAY_MS;

		var LONG_PRESS_ALLOWED_MOVEMENT = 10;

		var TouchableMixin = {

			componentWillUnmount: function componentWillUnmount() {
				this.touchableDelayTimeout && clearTimeout(this.touchableDelayTimeout);
				this.longPressDelayTimeout && clearTimeout(this.longPressDelayTimeout);
				this.pressOutDelayTimeout && clearTimeout(this.pressOutDelayTimeout);
			},

			touchableGetInitialState: function touchableGetInitialState() {
				return {
					touchable: { touchState: undefined, responderID: null } };
			},

			touchableHandleResponderTerminationRequest: function touchableHandleResponderTerminationRequest() {
				return !this.props.rejectResponderTermination;
			},

			touchableHandleStartShouldSetResponder: function touchableHandleStartShouldSetResponder() {
				return !this.props.disabled;
			},

			touchableLongPressCancelsPress: function touchableLongPressCancelsPress() {
				return true;
			},

			touchableHandleResponderGrant: function touchableHandleResponderGrant(e) {
				var dispatchID = e.currentTarget;

				e.persist();

				this.pressOutDelayTimeout && clearTimeout(this.pressOutDelayTimeout);
				this.pressOutDelayTimeout = null;

				this.state.touchable.touchState = States.NOT_RESPONDER;
				this.state.touchable.responderID = dispatchID;
				this._receiveSignal(Signals.RESPONDER_GRANT, e);
				var delayMS = this.touchableGetHighlightDelayMS !== undefined ? Math.max(this.touchableGetHighlightDelayMS(), 0) : HIGHLIGHT_DELAY_MS;
				delayMS = isNaN(delayMS) ? HIGHLIGHT_DELAY_MS : delayMS;
				if (delayMS !== 0) {
					this.touchableDelayTimeout = setTimeout(this._handleDelay.bind(this, e), delayMS);
				} else {
					this._handleDelay(e);
				}

				var longDelayMS = this.touchableGetLongPressDelayMS !== undefined ? Math.max(this.touchableGetLongPressDelayMS(), 10) : LONG_PRESS_DELAY_MS;
				longDelayMS = isNaN(longDelayMS) ? LONG_PRESS_DELAY_MS : longDelayMS;
				this.longPressDelayTimeout = setTimeout(this._handleLongDelay.bind(this, e), longDelayMS + delayMS);
			},

			touchableHandleResponderRelease: function touchableHandleResponderRelease(e) {
				this._receiveSignal(Signals.RESPONDER_RELEASE, e);
			},

			touchableHandleResponderTerminate: function touchableHandleResponderTerminate(e) {
				this._receiveSignal(Signals.RESPONDER_TERMINATED, e);
			},

			touchableHandleResponderMove: function touchableHandleResponderMove(e) {

				if (this.state.touchable.touchState === States.RESPONDER_INACTIVE_PRESS_IN) {
					return;
				}

				if (!this.state.touchable.positionOnActivate) {
					return;
				}

				var positionOnActivate = this.state.touchable.positionOnActivate;
				var dimensionsOnActivate = this.state.touchable.dimensionsOnActivate;
				var pressRectOffset = this.touchableGetPressRectOffset ? this.touchableGetPressRectOffset() : {
					left: PRESS_EXPAND_PX,
					right: PRESS_EXPAND_PX,
					top: PRESS_EXPAND_PX,
					bottom: PRESS_EXPAND_PX };

				var pressExpandLeft = pressRectOffset.left;
				var pressExpandTop = pressRectOffset.top;
				var pressExpandRight = pressRectOffset.right;
				var pressExpandBottom = pressRectOffset.bottom;

				var hitSlop = this.touchableGetHitSlop ? this.touchableGetHitSlop() : null;

				if (hitSlop) {
					pressExpandLeft += hitSlop.left;
					pressExpandTop += hitSlop.top;
					pressExpandRight += hitSlop.right;
					pressExpandBottom += hitSlop.bottom;
				}

				var touch = TouchEventUtils.extractSingleTouch(e.nativeEvent);
				var pageX = touch && touch.pageX;
				var pageY = touch && touch.pageY;

				if (this.pressInLocation) {
					var movedDistance = this._getDistanceBetweenPoints(pageX, pageY, this.pressInLocation.pageX, this.pressInLocation.pageY);
					if (movedDistance > LONG_PRESS_ALLOWED_MOVEMENT) {
						this._cancelLongPressDelayTimeout();
					}
				}

				var isTouchWithinActive = pageX > positionOnActivate.left - pressExpandLeft && pageY > positionOnActivate.top - pressExpandTop && pageX < positionOnActivate.left + dimensionsOnActivate.width + pressExpandRight && pageY < positionOnActivate.top + dimensionsOnActivate.height + pressExpandBottom;
				if (isTouchWithinActive) {
					this._receiveSignal(Signals.ENTER_PRESS_RECT, e);
					var curState = this.state.touchable.touchState;
					if (curState === States.RESPONDER_INACTIVE_PRESS_IN) {

						this._cancelLongPressDelayTimeout();
					}
				} else {
					this._cancelLongPressDelayTimeout();
					this._receiveSignal(Signals.LEAVE_PRESS_RECT, e);
				}
			},

			_remeasureMetricsOnActivation: function _remeasureMetricsOnActivation() {
				var tag = this.state.touchable.responderID;
				if (tag == null) {
					return;
				}

				UIManager.measure(tag, this._handleQueryLayout);
			},

			_handleQueryLayout: function _handleQueryLayout(l, t, w, h, globalX, globalY) {
				this.state.touchable.positionOnActivate && Position.release(this.state.touchable.positionOnActivate);
				this.state.touchable.dimensionsOnActivate && BoundingDimensions.release(this.state.touchable.dimensionsOnActivate);
				this.state.touchable.positionOnActivate = Position.getPooled(globalX, globalY);
				this.state.touchable.dimensionsOnActivate = BoundingDimensions.getPooled(w, h);
			},

			_handleDelay: function _handleDelay(e) {
				this.touchableDelayTimeout = null;
				this._receiveSignal(Signals.DELAY, e);
			},

			_handleLongDelay: function _handleLongDelay(e) {
				this.longPressDelayTimeout = null;
				var curState = this.state.touchable.touchState;
				if (curState !== States.RESPONDER_ACTIVE_PRESS_IN && curState !== States.RESPONDER_ACTIVE_LONG_PRESS_IN) {
					console.error('Attempted to transition from state `' + curState + '` to `' + States.RESPONDER_ACTIVE_LONG_PRESS_IN + '`, which is not supported. This is ' + 'most likely due to `Touchable.longPressDelayTimeout` not being cancelled.');
				} else {
					this._receiveSignal(Signals.LONG_PRESS_DETECTED, e);
				}
			},

			_receiveSignal: function _receiveSignal(signal, e) {
				var responderID = this.state.touchable.responderID;
				var curState = this.state.touchable.touchState;
				var nextState = Transitions[curState] && Transitions[curState][signal];
				if (!responderID && signal === Signals.RESPONDER_RELEASE) {
					return;
				}
				if (!nextState) {
					throw new Error('Unrecognized signal `' + signal + '` or state `' + curState + '` for Touchable responder `' + responderID + '`');
				}
				if (nextState === States.ERROR) {
					throw new Error('Touchable cannot transition from `' + curState + '` to `' + signal + '` for responder `' + responderID + '`');
				}
				if (curState !== nextState) {
					this._performSideEffectsForTransition(curState, nextState, signal, e);
					this.state.touchable.touchState = nextState;
				}
			},

			_cancelLongPressDelayTimeout: function _cancelLongPressDelayTimeout() {
				this.longPressDelayTimeout && clearTimeout(this.longPressDelayTimeout);
				this.longPressDelayTimeout = null;
			},

			_isHighlight: function _isHighlight(state) {
				return state === States.RESPONDER_ACTIVE_PRESS_IN || state === States.RESPONDER_ACTIVE_LONG_PRESS_IN;
			},

			_savePressInLocation: function _savePressInLocation(e) {
				var touch = TouchEventUtils.extractSingleTouch(e.nativeEvent);
				var pageX = touch && touch.pageX;
				var pageY = touch && touch.pageY;
				var locationX = touch && touch.locationX;
				var locationY = touch && touch.locationY;
				this.pressInLocation = { pageX: pageX, pageY: pageY, locationX: locationX, locationY: locationY };
			},

			_getDistanceBetweenPoints: function _getDistanceBetweenPoints(aX, aY, bX, bY) {
				var deltaX = aX - bX;
				var deltaY = aY - bY;
				return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
			},

			_performSideEffectsForTransition: function _performSideEffectsForTransition(curState, nextState, signal, e) {
				var curIsHighlight = this._isHighlight(curState);
				var newIsHighlight = this._isHighlight(nextState);

				var isFinalSignal = signal === Signals.RESPONDER_TERMINATED || signal === Signals.RESPONDER_RELEASE;

				if (isFinalSignal) {
					this._cancelLongPressDelayTimeout();
				}

				if (!IsActive[curState] && IsActive[nextState]) {
					this._remeasureMetricsOnActivation();
				}

				if (IsPressingIn[curState] && signal === Signals.LONG_PRESS_DETECTED) {
					this.touchableHandleLongPress && this.touchableHandleLongPress(e);
				}

				if (newIsHighlight && !curIsHighlight) {
					this._startHighlight(e);
				} else if (!newIsHighlight && curIsHighlight) {
					this._endHighlight(e);
				}

				if (IsPressingIn[curState] && signal === Signals.RESPONDER_RELEASE) {
					var hasLongPressHandler = !!this.props.onLongPress;
					var pressIsLongButStillCallOnPress = IsLongPressingIn[curState] && (!hasLongPressHandler || !this.touchableLongPressCancelsPress());

					var shouldInvokePress = !IsLongPressingIn[curState] || pressIsLongButStillCallOnPress;
					if (shouldInvokePress && this.touchableHandlePress) {
						if (!newIsHighlight && !curIsHighlight) {

							this._startHighlight(e);
							this._endHighlight(e);
						}
						this.touchableHandlePress(e);
					}
				}

				this.touchableDelayTimeout && clearTimeout(this.touchableDelayTimeout);
				this.touchableDelayTimeout = null;
			},

			_startHighlight: function _startHighlight(e) {
				this._savePressInLocation(e);
				this.touchableHandleActivePressIn && this.touchableHandleActivePressIn(e);
			},

			_endHighlight: function _endHighlight(e) {
				var _this = this;
				if (this.touchableHandleActivePressOut) {
					if (this.touchableGetPressOutDelayMS && this.touchableGetPressOutDelayMS()) {
						this.pressOutDelayTimeout = setTimeout(function () {
							_this.touchableHandleActivePressOut(e);
						}, this.touchableGetPressOutDelayMS());
					} else {
						this.touchableHandleActivePressOut(e);
					}
				}
			} };

		var Touchable = {
			Mixin: TouchableMixin,
			TOUCH_TARGET_DEBUG: false,

			renderDebugView: function renderDebugView(_ref) {
				var color = _ref.color,
				    hitSlop = _ref.hitSlop;
				if (!Touchable.TOUCH_TARGET_DEBUG) {
					return null;
				}
				if (!__DEV__) {
					throw Error('Touchable.TOUCH_TARGET_DEBUG should not be enabled in prod!');
				}
				var debugHitSlopStyle = {};
				hitSlop = hitSlop || { top: 0, bottom: 0, left: 0, right: 0 };
				for (var key in hitSlop) {
					debugHitSlopStyle[key] = -hitSlop[key];
				}
				var hexColor = '#' + ('00000000' + normalizeColor(color).toString(16)).substr(-8);
				return React.createElement(View, {
					pointerEvents: 'none',
					style: babelHelpers.extends({
						position: 'absolute',
						borderColor: hexColor.slice(0, -2) + '55',
						borderWidth: 1,
						borderStyle: 'dashed',
						backgroundColor: hexColor.slice(0, -2) + '0F' }, debugHitSlopStyle) });
			} };

		module.exports = Touchable;
	}, // Libraries/Components/Touchable/BoundingDimensions.js
	function (__inner_require__, exports, module) {
		var PooledClass = require('react@15.3/lib/PooledClass.js');

		var twoArgumentPooler = PooledClass.twoArgumentPooler;

		function BoundingDimensions(width, height) {
			this.width = width;
			this.height = height;
		}

		BoundingDimensions.prototype.destructor = function () {
			this.width = null;
			this.height = null;
		};

		BoundingDimensions.getPooledFromElement = function (element) {
			return BoundingDimensions.getPooled(element.offsetWidth, element.offsetHeight);
		};

		PooledClass.addPoolingTo(BoundingDimensions, twoArgumentPooler);

		module.exports = BoundingDimensions;
	}, // Libraries/Components/Touchable/Position.js
	function (__inner_require__, exports, module) {
		var PooledClass = require('react@15.3/lib/PooledClass.js');

		var twoArgumentPooler = PooledClass.twoArgumentPooler;

		function Position(left, top) {
			this.left = left;
			this.top = top;
		}

		Position.prototype.destructor = function () {
			this.left = null;
			this.top = null;
		};

		PooledClass.addPoolingTo(Position, twoArgumentPooler);

		module.exports = Position;
	}, // Libraries/Utilities/mergeFast.js
	function (__inner_require__, exports, module) {
		var mergeFast = function mergeFast(one, two) {
			var ret = {};
			for (var keyOne in one) {
				ret[keyOne] = one[keyOne];
			}
			for (var keyTwo in two) {
				ret[keyTwo] = two[keyTwo];
			}
			return ret;
		};

		module.exports = mergeFast;
	}, // Libraries/Components/Touchable/TouchableNativeFeedback.ios.js
	function (__inner_require__, exports, module) {
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var StyleSheet = require('react-native@0.37/Libraries/StyleSheet/StyleSheet.js');
		var Text = __inner_require__(5 /*Libraries/Text/Text.js*/);
		var View = require('react-native@0.37/Libraries/Components/View/View.js');var DummyTouchableNativeFeedback = function (_React$Component) {
			babelHelpers.inherits(DummyTouchableNativeFeedback, _React$Component);function DummyTouchableNativeFeedback() {
				babelHelpers.classCallCheck(this, DummyTouchableNativeFeedback);return babelHelpers.possibleConstructorReturn(this, (DummyTouchableNativeFeedback.__proto__ || Object.getPrototypeOf(DummyTouchableNativeFeedback)).apply(this, arguments));
			}babelHelpers.createClass(DummyTouchableNativeFeedback, [{ key: 'render', value: function render() {
					return React.createElement(View, { style: [styles.container, this.props.style] }, React.createElement(Text, { style: styles.info }, 'TouchableNativeFeedback is not supported on this platform!'));
				} }]);return DummyTouchableNativeFeedback;
		}(React.Component);

		var styles = StyleSheet.create({
			container: {
				height: 100,
				width: 300,
				backgroundColor: '#ffbcbc',
				borderWidth: 1,
				borderColor: 'red',
				alignItems: 'center',
				justifyContent: 'center',
				margin: 10 },

			info: {
				color: '#333333',
				margin: 20 } });

		module.exports = DummyTouchableNativeFeedback;
	}, // Libraries/Components/Touchable/TouchableOpacity.js
	function (__inner_require__, exports, module) {
		var Animated = __inner_require__(12 /*Libraries/Animated/src/Animated.js*/);
		var NativeMethodsMixin = require('react@15.3/lib/NativeMethodsMixin.js');
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var TimerMixin = require('react-timer-mixin@0.13/TimerMixin.js');
		var Touchable = __inner_require__(6 /*Libraries/Components/Touchable/Touchable.js*/);
		var TouchableWithoutFeedback = __inner_require__(30 /*Libraries/Components/Touchable/TouchableWithoutFeedback.js*/);

		var ensurePositiveDelayProps = __inner_require__(31 /*Libraries/Components/Touchable/ensurePositiveDelayProps.js*/);
		var flattenStyle = require('react-native@0.37/Libraries/StyleSheet/flattenStyle.js');

		var PRESS_RETENTION_OFFSET = { top: 20, left: 20, right: 20, bottom: 30 };

		var TouchableOpacity = React.createClass({ displayName: 'TouchableOpacity',
			mixins: [TimerMixin, Touchable.Mixin, NativeMethodsMixin],

			propTypes: babelHelpers.extends({}, TouchableWithoutFeedback.propTypes, {

				activeOpacity: React.PropTypes.number }),

			getDefaultProps: function getDefaultProps() {
				return {
					activeOpacity: 0.2 };
			},

			getInitialState: function getInitialState() {
				return babelHelpers.extends({}, this.touchableGetInitialState(), {
					anim: new Animated.Value(1) });
			},

			componentDidMount: function componentDidMount() {
				ensurePositiveDelayProps(this.props);
			},

			componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
				ensurePositiveDelayProps(nextProps);
			},

			setOpacityTo: function setOpacityTo(value) {
				Animated.timing(this.state.anim, { toValue: value, duration: 150 }).start();
			},

			touchableHandleActivePressIn: function touchableHandleActivePressIn(e) {
				this.clearTimeout(this._hideTimeout);
				this._hideTimeout = null;
				this._opacityActive();
				this.props.onPressIn && this.props.onPressIn(e);
			},

			touchableHandleActivePressOut: function touchableHandleActivePressOut(e) {
				if (!this._hideTimeout) {
					this._opacityInactive();
				}
				this.props.onPressOut && this.props.onPressOut(e);
			},

			touchableHandlePress: function touchableHandlePress(e) {
				this.clearTimeout(this._hideTimeout);
				this._opacityActive();
				this._hideTimeout = this.setTimeout(this._opacityInactive, this.props.delayPressOut || 100);

				this.props.onPress && this.props.onPress(e);
			},

			touchableHandleLongPress: function touchableHandleLongPress(e) {
				this.props.onLongPress && this.props.onLongPress(e);
			},

			touchableGetPressRectOffset: function touchableGetPressRectOffset() {
				return this.props.pressRetentionOffset || PRESS_RETENTION_OFFSET;
			},

			touchableGetHitSlop: function touchableGetHitSlop() {
				return this.props.hitSlop;
			},

			touchableGetHighlightDelayMS: function touchableGetHighlightDelayMS() {
				return this.props.delayPressIn || 0;
			},

			touchableGetLongPressDelayMS: function touchableGetLongPressDelayMS() {
				return this.props.delayLongPress === 0 ? 0 : this.props.delayLongPress || 500;
			},

			touchableGetPressOutDelayMS: function touchableGetPressOutDelayMS() {
				return this.props.delayPressOut;
			},

			_opacityActive: function _opacityActive() {
				this.setOpacityTo(this.props.activeOpacity);
			},

			_opacityInactive: function _opacityInactive() {
				this.clearTimeout(this._hideTimeout);
				this._hideTimeout = null;
				var childStyle = flattenStyle(this.props.style) || {};
				this.setOpacityTo(childStyle.opacity === undefined ? 1 : childStyle.opacity);
			},

			render: function render() {
				return React.createElement(Animated.View, {
					accessible: this.props.accessible !== false,
					accessibilityLabel: this.props.accessibilityLabel,
					accessibilityComponentType: this.props.accessibilityComponentType,
					accessibilityTraits: this.props.accessibilityTraits,
					style: [this.props.style, { opacity: this.state.anim }],
					testID: this.props.testID,
					onLayout: this.props.onLayout,
					hitSlop: this.props.hitSlop,
					onStartShouldSetResponder: this.touchableHandleStartShouldSetResponder,
					onResponderTerminationRequest: this.touchableHandleResponderTerminationRequest,
					onResponderGrant: this.touchableHandleResponderGrant,
					onResponderMove: this.touchableHandleResponderMove,
					onResponderRelease: this.touchableHandleResponderRelease,
					onResponderTerminate: this.touchableHandleResponderTerminate }, this.props.children, Touchable.renderDebugView({ color: 'cyan', hitSlop: this.props.hitSlop }));
			} });

		module.exports = TouchableOpacity;
	}, // Libraries/Animated/src/Animated.js
	function (__inner_require__, exports, module) {
		var AnimatedImplementation = __inner_require__(13 /*Libraries/Animated/src/AnimatedImplementation.js*/);
		var Image = __inner_require__(22 /*Libraries/Image/Image.ios.js*/);
		var Text = __inner_require__(5 /*Libraries/Text/Text.js*/);
		var View = require('react-native@0.37/Libraries/Components/View/View.js');
		var ScrollView = __inner_require__(24 /*Libraries/Components/ScrollView/ScrollView.js*/);

		module.exports = babelHelpers.extends({}, AnimatedImplementation, {
			View: AnimatedImplementation.createAnimatedComponent(View),
			Text: AnimatedImplementation.createAnimatedComponent(Text),
			Image: AnimatedImplementation.createAnimatedComponent(Image),
			ScrollView: AnimatedImplementation.createAnimatedComponent(ScrollView) });
	}, // Libraries/Animated/src/AnimatedImplementation.js
	function (__inner_require__, exports, module) {
		var InteractionManager = __inner_require__(14 /*Libraries/Interaction/InteractionManager.js*/);
		var Interpolation = __inner_require__(17 /*Libraries/Animated/src/Interpolation.js*/);
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var Set = require('react-native@0.37/Libraries/vendor/core/Set.js');
		var SpringConfig = __inner_require__(18 /*Libraries/Animated/src/SpringConfig.js*/);
		var ViewStylePropTypes = require('react-native@0.37/Libraries/Components/View/ViewStylePropTypes.js');
		var NativeAnimatedHelper = __inner_require__(19 /*Libraries/Animated/src/NativeAnimatedHelper.js*/);

		var findNodeHandle = require('react@15.3/lib/findNodeHandle.js');
		var flattenStyle = require('react-native@0.37/Libraries/StyleSheet/flattenStyle.js');
		var invariant = require('fbjs@0.8/lib/invariant.js');
		var requestAnimationFrame = require('fbjs@0.8/lib/requestAnimationFrame.js');

		var NativeAnimatedAPI = NativeAnimatedHelper.API;var Animated = function () {
			function Animated() {
				babelHelpers.classCallCheck(this, Animated);
			}babelHelpers.createClass(Animated, [{ key: '__attach', value: function __attach() {} }, { key: '__detach', value: function __detach() {
					if (this.__isNative && this.__nativeTag != null) {
						NativeAnimatedAPI.dropAnimatedNode(this.__nativeTag);
						this.__nativeTag = undefined;
					}
				} }, { key: '__getValue', value: function __getValue() {} }, { key: '__getAnimatedValue', value: function __getAnimatedValue() {
					return this.__getValue();
				} }, { key: '__addChild', value: function __addChild(child) {} }, { key: '__removeChild', value: function __removeChild(child) {} }, { key: '__getChildren', value: function __getChildren() {
					return [];
				} }, { key: '__makeNative', value: function __makeNative() {
					if (!this.__isNative) {
						throw new Error('This node cannot be made a "native" animated node');
					}
				} }, { key: '__getNativeTag', value: function __getNativeTag() {
					NativeAnimatedHelper.assertNativeAnimatedModule();
					invariant(this.__isNative, 'Attempt to get native tag from node not marked as "native"');
					if (this.__nativeTag == null) {
						var nativeTag = NativeAnimatedHelper.generateNewNodeTag();
						NativeAnimatedAPI.createAnimatedNode(nativeTag, this.__getNativeConfig());
						this.__nativeTag = nativeTag;
					}
					return this.__nativeTag;
				} }, { key: '__getNativeConfig', value: function __getNativeConfig() {
					throw new Error('This JS animated node type cannot be used as native animated node');
				} }, { key: 'toJSON', value: function toJSON() {
					return this.__getValue();
				} }]);return Animated;
		}();var Animation = function () {
			function Animation() {
				babelHelpers.classCallCheck(this, Animation);
			}babelHelpers.createClass(Animation, [{ key: 'start', value: function start(fromValue, onUpdate, onEnd, previousAnimation, animatedValue) {} }, { key: 'stop', value: function stop() {
					if (this.__nativeId) {
						NativeAnimatedAPI.stopAnimation(this.__nativeId);
					}
				} }, { key: '__getNativeAnimationConfig', value: function __getNativeAnimationConfig() {

					throw new Error('This animation type cannot be offloaded to native');
				} }, { key: '__debouncedOnEnd', value: function __debouncedOnEnd(result) {
					var onEnd = this.__onEnd;
					this.__onEnd = null;
					onEnd && onEnd(result);
				} }, { key: '__startNativeAnimation', value: function __startNativeAnimation(animatedValue) {
					animatedValue.__makeNative();
					this.__nativeId = NativeAnimatedHelper.generateNewAnimationId();
					NativeAnimatedAPI.startAnimatingNode(this.__nativeId, animatedValue.__getNativeTag(), this.__getNativeAnimationConfig(), this.__debouncedOnEnd.bind(this));
				} }]);return Animation;
		}();var AnimatedWithChildren = function (_Animated) {
			babelHelpers.inherits(AnimatedWithChildren, _Animated);

			function AnimatedWithChildren() {
				babelHelpers.classCallCheck(this, AnimatedWithChildren);var _this = babelHelpers.possibleConstructorReturn(this, (AnimatedWithChildren.__proto__ || Object.getPrototypeOf(AnimatedWithChildren)).call(this));

				_this._children = [];return _this;
			}babelHelpers.createClass(AnimatedWithChildren, [{ key: '__makeNative', value: function __makeNative() {
					if (!this.__isNative) {
						this.__isNative = true;
						for (var _iterator = this._children, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();;) {
							var _ref;if (_isArray) {
								if (_i >= _iterator.length) break;_ref = _iterator[_i++];
							} else {
								_i = _iterator.next();if (_i.done) break;_ref = _i.value;
							}var child = _ref;
							child.__makeNative();
							NativeAnimatedAPI.connectAnimatedNodes(this.__getNativeTag(), child.__getNativeTag());
						}
					}
				} }, { key: '__addChild', value: function __addChild(child) {
					if (this._children.length === 0) {
						this.__attach();
					}
					this._children.push(child);
					if (this.__isNative) {

						child.__makeNative();
						NativeAnimatedAPI.connectAnimatedNodes(this.__getNativeTag(), child.__getNativeTag());
					}
				} }, { key: '__removeChild', value: function __removeChild(child) {
					var index = this._children.indexOf(child);
					if (index === -1) {
						console.warn('Trying to remove a child that doesn\'t exist');
						return;
					}
					if (this.__isNative && child.__isNative) {
						NativeAnimatedAPI.disconnectAnimatedNodes(this.__getNativeTag(), child.__getNativeTag());
					}
					this._children.splice(index, 1);
					if (this._children.length === 0) {
						this.__detach();
					}
				} }, { key: '__getChildren', value: function __getChildren() {
					return this._children;
				} }]);return AnimatedWithChildren;
		}(Animated);

		function _flush(rootNode) {
			var animatedStyles = new Set();
			function findAnimatedStyles(node) {
				if (typeof node.update === 'function') {
					animatedStyles.add(node);
				} else {
					node.__getChildren().forEach(findAnimatedStyles);
				}
			}
			findAnimatedStyles(rootNode);

			animatedStyles.forEach(function (animatedStyle) {
				return animatedStyle.update();
			});
		}

		var _easeInOut = void 0;
		function easeInOut() {
			if (!_easeInOut) {
				var Easing = __inner_require__(20 /*Libraries/Animated/src/Easing.js*/);
				_easeInOut = Easing.inOut(Easing.ease);
			}
			return _easeInOut;
		}var TimingAnimation = function (_Animation) {
			babelHelpers.inherits(TimingAnimation, _Animation);

			function TimingAnimation(config) {
				babelHelpers.classCallCheck(this, TimingAnimation);var _this2 = babelHelpers.possibleConstructorReturn(this, (TimingAnimation.__proto__ || Object.getPrototypeOf(TimingAnimation)).call(this));

				_this2._toValue = config.toValue;
				_this2._easing = config.easing !== undefined ? config.easing : easeInOut();
				_this2._duration = config.duration !== undefined ? config.duration : 500;
				_this2._delay = config.delay !== undefined ? config.delay : 0;
				_this2.__isInteraction = config.isInteraction !== undefined ? config.isInteraction : true;
				_this2._useNativeDriver = config.useNativeDriver !== undefined ? config.useNativeDriver : false;return _this2;
			}babelHelpers.createClass(TimingAnimation, [{ key: '__getNativeAnimationConfig', value: function __getNativeAnimationConfig() {
					var frameDuration = 1000.0 / 60.0;
					var frames = [];
					for (var dt = 0.0; dt < this._duration; dt += frameDuration) {
						frames.push(this._easing(dt / this._duration));
					}
					frames.push(this._easing(1));
					return {
						type: 'frames',
						frames: frames,
						toValue: this._toValue,
						delay: this._delay };
				} }, { key: 'start', value: function start(fromValue, onUpdate, onEnd, previousAnimation, animatedValue) {
					var _this3 = this;
					this.__active = true;
					this._fromValue = fromValue;
					this._onUpdate = onUpdate;
					this.__onEnd = onEnd;

					var start = function start() {
						if (_this3._duration === 0) {
							_this3._onUpdate(_this3._toValue);
							_this3.__debouncedOnEnd({ finished: true });
						} else {
							_this3._startTime = Date.now();
							if (_this3._useNativeDriver) {
								_this3.__startNativeAnimation(animatedValue);
							} else {
								_this3._animationFrame = requestAnimationFrame(_this3.onUpdate.bind(_this3));
							}
						}
					};
					if (this._delay) {
						this._timeout = setTimeout(start, this._delay);
					} else {
						start();
					}
				} }, { key: 'onUpdate', value: function onUpdate() {
					var now = Date.now();
					if (now >= this._startTime + this._duration) {
						if (this._duration === 0) {
							this._onUpdate(this._toValue);
						} else {
							this._onUpdate(this._fromValue + this._easing(1) * (this._toValue - this._fromValue));
						}
						this.__debouncedOnEnd({ finished: true });
						return;
					}

					this._onUpdate(this._fromValue + this._easing((now - this._startTime) / this._duration) * (this._toValue - this._fromValue));

					if (this.__active) {
						this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
					}
				} }, { key: 'stop', value: function stop() {
					babelHelpers.get(TimingAnimation.prototype.__proto__ || Object.getPrototypeOf(TimingAnimation.prototype), 'stop', this).call(this);
					this.__active = false;
					clearTimeout(this._timeout);
					global.cancelAnimationFrame(this._animationFrame);
					this.__debouncedOnEnd({ finished: false });
				} }]);return TimingAnimation;
		}(Animation);var DecayAnimation = function (_Animation2) {
			babelHelpers.inherits(DecayAnimation, _Animation2);

			function DecayAnimation(config) {
				babelHelpers.classCallCheck(this, DecayAnimation);var _this4 = babelHelpers.possibleConstructorReturn(this, (DecayAnimation.__proto__ || Object.getPrototypeOf(DecayAnimation)).call(this));

				_this4._deceleration = config.deceleration !== undefined ? config.deceleration : 0.998;
				_this4._velocity = config.velocity;
				_this4._useNativeDriver = config.useNativeDriver !== undefined ? config.useNativeDriver : false;
				_this4.__isInteraction = config.isInteraction !== undefined ? config.isInteraction : true;return _this4;
			}babelHelpers.createClass(DecayAnimation, [{ key: '__getNativeAnimationConfig', value: function __getNativeAnimationConfig() {
					return {
						type: 'decay',
						deceleration: this._deceleration,
						velocity: this._velocity };
				} }, { key: 'start', value: function start(fromValue, onUpdate, onEnd, previousAnimation, animatedValue) {
					this.__active = true;
					this._lastValue = fromValue;
					this._fromValue = fromValue;
					this._onUpdate = onUpdate;
					this.__onEnd = onEnd;
					this._startTime = Date.now();
					if (this._useNativeDriver) {
						this.__startNativeAnimation(animatedValue);
					} else {
						this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
					}
				} }, { key: 'onUpdate', value: function onUpdate() {
					var now = Date.now();

					var value = this._fromValue + this._velocity / (1 - this._deceleration) * (1 - Math.exp(-(1 - this._deceleration) * (now - this._startTime)));

					this._onUpdate(value);

					if (Math.abs(this._lastValue - value) < 0.1) {
						this.__debouncedOnEnd({ finished: true });
						return;
					}

					this._lastValue = value;
					if (this.__active) {
						this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
					}
				} }, { key: 'stop', value: function stop() {
					babelHelpers.get(DecayAnimation.prototype.__proto__ || Object.getPrototypeOf(DecayAnimation.prototype), 'stop', this).call(this);
					this.__active = false;
					global.cancelAnimationFrame(this._animationFrame);
					this.__debouncedOnEnd({ finished: false });
				} }]);return DecayAnimation;
		}(Animation);

		function withDefault(value, defaultValue) {
			if (value === undefined || value === null) {
				return defaultValue;
			}
			return value;
		}var SpringAnimation = function (_Animation3) {
			babelHelpers.inherits(SpringAnimation, _Animation3);

			function SpringAnimation(config) {
				babelHelpers.classCallCheck(this, SpringAnimation);var _this5 = babelHelpers.possibleConstructorReturn(this, (SpringAnimation.__proto__ || Object.getPrototypeOf(SpringAnimation)).call(this));

				_this5._overshootClamping = withDefault(config.overshootClamping, false);
				_this5._restDisplacementThreshold = withDefault(config.restDisplacementThreshold, 0.001);
				_this5._restSpeedThreshold = withDefault(config.restSpeedThreshold, 0.001);
				_this5._initialVelocity = config.velocity;
				_this5._lastVelocity = withDefault(config.velocity, 0);
				_this5._toValue = config.toValue;
				_this5._useNativeDriver = config.useNativeDriver !== undefined ? config.useNativeDriver : false;
				_this5.__isInteraction = config.isInteraction !== undefined ? config.isInteraction : true;

				var springConfig;
				if (config.bounciness !== undefined || config.speed !== undefined) {
					invariant(config.tension === undefined && config.friction === undefined, 'You can only define bounciness/speed or tension/friction but not both');

					springConfig = SpringConfig.fromBouncinessAndSpeed(withDefault(config.bounciness, 8), withDefault(config.speed, 12));
				} else {
					springConfig = SpringConfig.fromOrigamiTensionAndFriction(withDefault(config.tension, 40), withDefault(config.friction, 7));
				}
				_this5._tension = springConfig.tension;
				_this5._friction = springConfig.friction;return _this5;
			}babelHelpers.createClass(SpringAnimation, [{ key: '__getNativeAnimationConfig', value: function __getNativeAnimationConfig() {
					return {
						type: 'spring',
						overshootClamping: this._overshootClamping,
						restDisplacementThreshold: this._restDisplacementThreshold,
						restSpeedThreshold: this._restSpeedThreshold,
						tension: this._tension,
						friction: this._friction,
						initialVelocity: withDefault(this._initialVelocity, this._lastVelocity),
						toValue: this._toValue };
				} }, { key: 'start', value: function start(fromValue, onUpdate, onEnd, previousAnimation, animatedValue) {
					this.__active = true;
					this._startPosition = fromValue;
					this._lastPosition = this._startPosition;

					this._onUpdate = onUpdate;
					this.__onEnd = onEnd;
					this._lastTime = Date.now();

					if (previousAnimation instanceof SpringAnimation) {
						var internalState = previousAnimation.getInternalState();
						this._lastPosition = internalState.lastPosition;
						this._lastVelocity = internalState.lastVelocity;
						this._lastTime = internalState.lastTime;
					}
					if (this._initialVelocity !== undefined && this._initialVelocity !== null) {
						this._lastVelocity = this._initialVelocity;
					}
					if (this._useNativeDriver) {
						this.__startNativeAnimation(animatedValue);
					} else {
						this.onUpdate();
					}
				} }, { key: 'getInternalState', value: function getInternalState() {
					return {
						lastPosition: this._lastPosition,
						lastVelocity: this._lastVelocity,
						lastTime: this._lastTime };
				} }, { key: 'onUpdate', value: function onUpdate() {
					var position = this._lastPosition;
					var velocity = this._lastVelocity;

					var tempPosition = this._lastPosition;
					var tempVelocity = this._lastVelocity;

					var MAX_STEPS = 64;
					var now = Date.now();
					if (now > this._lastTime + MAX_STEPS) {
						now = this._lastTime + MAX_STEPS;
					}

					var TIMESTEP_MSEC = 1;
					var numSteps = Math.floor((now - this._lastTime) / TIMESTEP_MSEC);

					for (var i = 0; i < numSteps; ++i) {

						var step = TIMESTEP_MSEC / 1000;

						var aVelocity = velocity;
						var aAcceleration = this._tension * (this._toValue - tempPosition) - this._friction * tempVelocity;
						var tempPosition = position + aVelocity * step / 2;
						var tempVelocity = velocity + aAcceleration * step / 2;

						var bVelocity = tempVelocity;
						var bAcceleration = this._tension * (this._toValue - tempPosition) - this._friction * tempVelocity;
						tempPosition = position + bVelocity * step / 2;
						tempVelocity = velocity + bAcceleration * step / 2;

						var cVelocity = tempVelocity;
						var cAcceleration = this._tension * (this._toValue - tempPosition) - this._friction * tempVelocity;
						tempPosition = position + cVelocity * step / 2;
						tempVelocity = velocity + cAcceleration * step / 2;

						var dVelocity = tempVelocity;
						var dAcceleration = this._tension * (this._toValue - tempPosition) - this._friction * tempVelocity;
						tempPosition = position + cVelocity * step / 2;
						tempVelocity = velocity + cAcceleration * step / 2;

						var dxdt = (aVelocity + 2 * (bVelocity + cVelocity) + dVelocity) / 6;
						var dvdt = (aAcceleration + 2 * (bAcceleration + cAcceleration) + dAcceleration) / 6;

						position += dxdt * step;
						velocity += dvdt * step;
					}

					this._lastTime = now;
					this._lastPosition = position;
					this._lastVelocity = velocity;

					this._onUpdate(position);
					if (!this.__active) {
						return;
					}

					var isOvershooting = false;
					if (this._overshootClamping && this._tension !== 0) {
						if (this._startPosition < this._toValue) {
							isOvershooting = position > this._toValue;
						} else {
							isOvershooting = position < this._toValue;
						}
					}
					var isVelocity = Math.abs(velocity) <= this._restSpeedThreshold;
					var isDisplacement = true;
					if (this._tension !== 0) {
						isDisplacement = Math.abs(this._toValue - position) <= this._restDisplacementThreshold;
					}

					if (isOvershooting || isVelocity && isDisplacement) {
						if (this._tension !== 0) {

							this._onUpdate(this._toValue);
						}

						this.__debouncedOnEnd({ finished: true });
						return;
					}
					this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
				} }, { key: 'stop', value: function stop() {
					babelHelpers.get(SpringAnimation.prototype.__proto__ || Object.getPrototypeOf(SpringAnimation.prototype), 'stop', this).call(this);
					this.__active = false;
					global.cancelAnimationFrame(this._animationFrame);
					this.__debouncedOnEnd({ finished: false });
				} }]);return SpringAnimation;
		}(Animation);

		var _uniqueId = 1;var AnimatedValue = function (_AnimatedWithChildren) {
			babelHelpers.inherits(AnimatedValue, _AnimatedWithChildren);

			function AnimatedValue(value) {
				babelHelpers.classCallCheck(this, AnimatedValue);var _this6 = babelHelpers.possibleConstructorReturn(this, (AnimatedValue.__proto__ || Object.getPrototypeOf(AnimatedValue)).call(this));

				_this6._startingValue = _this6._value = value;
				_this6._offset = 0;
				_this6._animation = null;
				_this6._listeners = {};return _this6;
			}babelHelpers.createClass(AnimatedValue, [{ key: '__detach', value: function __detach() {
					this.stopAnimation();
					babelHelpers.get(AnimatedValue.prototype.__proto__ || Object.getPrototypeOf(AnimatedValue.prototype), '__detach', this).call(this);
				} }, { key: '__getValue', value: function __getValue() {
					return this._value + this._offset;
				} }, { key: '__makeNative', value: function __makeNative() {
					babelHelpers.get(AnimatedValue.prototype.__proto__ || Object.getPrototypeOf(AnimatedValue.prototype), '__makeNative', this).call(this);

					if (Object.keys(this._listeners).length) {
						this._startListeningToNativeValueUpdates();
					}
				} }, { key: 'setValue', value: function setValue(value) {
					if (this._animation) {
						this._animation.stop();
						this._animation = null;
					}
					this._updateValue(value, !this.__isNative);
					if (this.__isNative) {
						NativeAnimatedAPI.setAnimatedNodeValue(this.__getNativeTag(), value);
					}
				} }, { key: 'setOffset', value: function setOffset(offset) {
					this._offset = offset;
					if (this.__isNative) {
						NativeAnimatedAPI.setAnimatedNodeOffset(this.__getNativeTag(), offset);
					}
				} }, { key: 'flattenOffset', value: function flattenOffset() {
					this._value += this._offset;
					this._offset = 0;
					if (this.__isNative) {
						NativeAnimatedAPI.flattenAnimatedNodeOffset(this.__getNativeTag());
					}
				} }, { key: 'addListener', value: function addListener(callback) {
					var id = String(_uniqueId++);
					this._listeners[id] = callback;
					if (this.__isNative) {
						this._startListeningToNativeValueUpdates();
					}
					return id;
				} }, { key: 'removeListener', value: function removeListener(id) {
					delete this._listeners[id];
					if (this.__isNative && Object.keys(this._listeners).length === 0) {
						this._stopListeningForNativeValueUpdates();
					}
				} }, { key: 'removeAllListeners', value: function removeAllListeners() {
					this._listeners = {};
					if (this.__isNative) {
						this._stopListeningForNativeValueUpdates();
					}
				} }, { key: '_startListeningToNativeValueUpdates', value: function _startListeningToNativeValueUpdates() {
					var _this7 = this;
					if (this.__nativeAnimatedValueListener) {
						return;
					}

					NativeAnimatedAPI.startListeningToAnimatedNodeValue(this.__getNativeTag());
					this.__nativeAnimatedValueListener = NativeAnimatedHelper.nativeEventEmitter.addListener('onAnimatedValueUpdate', function (data) {
						if (data.tag !== _this7.__getNativeTag()) {
							return;
						}
						_this7._updateValue(data.value, false);
					});
				} }, { key: '_stopListeningForNativeValueUpdates', value: function _stopListeningForNativeValueUpdates() {
					if (!this.__nativeAnimatedValueListener) {
						return;
					}

					this.__nativeAnimatedValueListener.remove();
					this.__nativeAnimatedValueListener = null;
					NativeAnimatedAPI.stopListeningToAnimatedNodeValue(this.__getNativeTag());
				} }, { key: 'stopAnimation', value: function stopAnimation(callback) {
					this.stopTracking();
					this._animation && this._animation.stop();
					this._animation = null;
					callback && callback(this.__getValue());
				} }, { key: 'interpolate', value: function interpolate(config) {
					return new AnimatedInterpolation(this, config);
				} }, { key: 'animate', value: function animate(animation, callback) {
					var _this8 = this;
					var handle = null;
					if (animation.__isInteraction) {
						handle = InteractionManager.createInteractionHandle();
					}
					var previousAnimation = this._animation;
					this._animation && this._animation.stop();
					this._animation = animation;
					animation.start(this._value, function (value) {

						_this8._updateValue(value, true);
					}, function (result) {
						_this8._animation = null;
						if (handle !== null) {
							InteractionManager.clearInteractionHandle(handle);
						}
						callback && callback(result);
					}, previousAnimation, this);
				} }, { key: 'stopTracking', value: function stopTracking() {
					this._tracking && this._tracking.__detach();
					this._tracking = null;
				} }, { key: 'track', value: function track(tracking) {
					this.stopTracking();
					this._tracking = tracking;
				} }, { key: '_updateValue', value: function _updateValue(value, flush) {
					this._value = value;
					if (flush) {
						_flush(this);
					}
					for (var key in this._listeners) {
						this._listeners[key]({ value: this.__getValue() });
					}
				} }, { key: '__getNativeConfig', value: function __getNativeConfig() {
					return {
						type: 'value',
						value: this._startingValue };
				} }]);return AnimatedValue;
		}(AnimatedWithChildren);var AnimatedValueXY = function (_AnimatedWithChildren2) {
			babelHelpers.inherits(AnimatedValueXY, _AnimatedWithChildren2);

			function AnimatedValueXY(valueIn) {
				babelHelpers.classCallCheck(this, AnimatedValueXY);var _this9 = babelHelpers.possibleConstructorReturn(this, (AnimatedValueXY.__proto__ || Object.getPrototypeOf(AnimatedValueXY)).call(this));

				var value = valueIn || { x: 0, y: 0 };
				if (typeof value.x === 'number' && typeof value.y === 'number') {
					_this9.x = new AnimatedValue(value.x);
					_this9.y = new AnimatedValue(value.y);
				} else {
					invariant(value.x instanceof AnimatedValue && value.y instanceof AnimatedValue, 'AnimatedValueXY must be initalized with an object of numbers or ' + 'AnimatedValues.');

					_this9.x = value.x;
					_this9.y = value.y;
				}
				_this9._listeners = {};return _this9;
			}babelHelpers.createClass(AnimatedValueXY, [{ key: 'setValue', value: function setValue(value) {
					this.x.setValue(value.x);
					this.y.setValue(value.y);
				} }, { key: 'setOffset', value: function setOffset(offset) {
					this.x.setOffset(offset.x);
					this.y.setOffset(offset.y);
				} }, { key: 'flattenOffset', value: function flattenOffset() {
					this.x.flattenOffset();
					this.y.flattenOffset();
				} }, { key: '__getValue', value: function __getValue() {
					return {
						x: this.x.__getValue(),
						y: this.y.__getValue() };
				} }, { key: 'stopAnimation', value: function stopAnimation(callback) {
					this.x.stopAnimation();
					this.y.stopAnimation();
					callback && callback(this.__getValue());
				} }, { key: 'addListener', value: function addListener(callback) {
					var _this10 = this;
					var id = String(_uniqueId++);
					var jointCallback = function jointCallback(_ref2) {
						var number = _ref2.value;
						callback(_this10.__getValue());
					};
					this._listeners[id] = {
						x: this.x.addListener(jointCallback),
						y: this.y.addListener(jointCallback) };

					return id;
				} }, { key: 'removeListener', value: function removeListener(id) {
					this.x.removeListener(this._listeners[id].x);
					this.y.removeListener(this._listeners[id].y);
					delete this._listeners[id];
				} }, { key: 'getLayout', value: function getLayout() {
					return {
						left: this.x,
						top: this.y };
				} }, { key: 'getTranslateTransform', value: function getTranslateTransform() {
					return [{ translateX: this.x }, { translateY: this.y }];
				} }]);return AnimatedValueXY;
		}(AnimatedWithChildren);var AnimatedInterpolation = function (_AnimatedWithChildren3) {
			babelHelpers.inherits(AnimatedInterpolation, _AnimatedWithChildren3);

			function AnimatedInterpolation(parent, config) {
				babelHelpers.classCallCheck(this, AnimatedInterpolation);var _this11 = babelHelpers.possibleConstructorReturn(this, (AnimatedInterpolation.__proto__ || Object.getPrototypeOf(AnimatedInterpolation)).call(this));

				_this11._parent = parent;
				_this11._config = config;
				_this11._interpolation = Interpolation.create(config);return _this11;
			}babelHelpers.createClass(AnimatedInterpolation, [{ key: '__getValue', value: function __getValue() {
					var parentValue = this._parent.__getValue();
					invariant(typeof parentValue === 'number', 'Cannot interpolate an input which is not a number.');

					return this._interpolation(parentValue);
				} }, { key: 'interpolate', value: function interpolate(config) {
					return new AnimatedInterpolation(this, config);
				} }, { key: '__attach', value: function __attach() {
					this._parent.__addChild(this);
				} }, { key: '__detach', value: function __detach() {
					this._parent.__removeChild(this);
					babelHelpers.get(AnimatedInterpolation.prototype.__proto__ || Object.getPrototypeOf(AnimatedInterpolation.prototype), '__detach', this).call(this);
				} }, { key: '__transformDataType', value: function __transformDataType(range) {

					return range.map(function (value) {
						if (typeof value !== 'string') {
							return value;
						}
						if (/deg$/.test(value)) {
							var degrees = parseFloat(value, 10) || 0;
							var radians = degrees * Math.PI / 180.0;
							return radians;
						} else {

							return parseFloat(value, 10) || 0;
						}
					});
				} }, { key: '__getNativeConfig', value: function __getNativeConfig() {

					return {
						inputRange: this._config.inputRange,

						outputRange: this.__transformDataType(this._config.outputRange),
						extrapolateLeft: this._config.extrapolateLeft || this._config.extrapolate || 'extend',
						extrapolateRight: this._config.extrapolateRight || this._config.extrapolate || 'extend',
						type: 'interpolation' };
				} }]);return AnimatedInterpolation;
		}(AnimatedWithChildren);var AnimatedAddition = function (_AnimatedWithChildren4) {
			babelHelpers.inherits(AnimatedAddition, _AnimatedWithChildren4);

			function AnimatedAddition(a, b) {
				babelHelpers.classCallCheck(this, AnimatedAddition);var _this12 = babelHelpers.possibleConstructorReturn(this, (AnimatedAddition.__proto__ || Object.getPrototypeOf(AnimatedAddition)).call(this));

				_this12._a = typeof a === 'number' ? new AnimatedValue(a) : a;
				_this12._b = typeof b === 'number' ? new AnimatedValue(b) : b;return _this12;
			}babelHelpers.createClass(AnimatedAddition, [{ key: '__makeNative', value: function __makeNative() {
					this._a.__makeNative();
					this._b.__makeNative();
					babelHelpers.get(AnimatedAddition.prototype.__proto__ || Object.getPrototypeOf(AnimatedAddition.prototype), '__makeNative', this).call(this);
				} }, { key: '__getValue', value: function __getValue() {
					return this._a.__getValue() + this._b.__getValue();
				} }, { key: 'interpolate', value: function interpolate(config) {
					return new AnimatedInterpolation(this, config);
				} }, { key: '__attach', value: function __attach() {
					this._a.__addChild(this);
					this._b.__addChild(this);
				} }, { key: '__detach', value: function __detach() {
					this._a.__removeChild(this);
					this._b.__removeChild(this);
					babelHelpers.get(AnimatedAddition.prototype.__proto__ || Object.getPrototypeOf(AnimatedAddition.prototype), '__detach', this).call(this);
				} }, { key: '__getNativeConfig', value: function __getNativeConfig() {
					return {
						type: 'addition',
						input: [this._a.__getNativeTag(), this._b.__getNativeTag()] };
				} }]);return AnimatedAddition;
		}(AnimatedWithChildren);var AnimatedDivision = function (_AnimatedWithChildren5) {
			babelHelpers.inherits(AnimatedDivision, _AnimatedWithChildren5);

			function AnimatedDivision(a, b) {
				babelHelpers.classCallCheck(this, AnimatedDivision);var _this13 = babelHelpers.possibleConstructorReturn(this, (AnimatedDivision.__proto__ || Object.getPrototypeOf(AnimatedDivision)).call(this));

				_this13._a = typeof a === 'number' ? new AnimatedValue(a) : a;
				_this13._b = typeof b === 'number' ? new AnimatedValue(b) : b;return _this13;
			}babelHelpers.createClass(AnimatedDivision, [{ key: '__makeNative', value: function __makeNative() {
					babelHelpers.get(AnimatedDivision.prototype.__proto__ || Object.getPrototypeOf(AnimatedDivision.prototype), '__makeNative', this).call(this);
					this._a.__makeNative();
					this._b.__makeNative();
				} }, { key: '__getValue', value: function __getValue() {
					var a = this._a.__getValue();
					var b = this._b.__getValue();
					if (b === 0) {
						console.error('Detected division by zero in AnimatedDivision');
					}
					return a / b;
				} }, { key: 'interpolate', value: function interpolate(config) {
					return new AnimatedInterpolation(this, config);
				} }, { key: '__attach', value: function __attach() {
					this._a.__addChild(this);
					this._b.__addChild(this);
				} }, { key: '__detach', value: function __detach() {
					this._a.__removeChild(this);
					this._b.__removeChild(this);
					babelHelpers.get(AnimatedDivision.prototype.__proto__ || Object.getPrototypeOf(AnimatedDivision.prototype), '__detach', this).call(this);
				} }, { key: '__getNativeConfig', value: function __getNativeConfig() {
					return {
						type: 'division',
						input: [this._a.__getNativeTag(), this._b.__getNativeTag()] };
				} }]);return AnimatedDivision;
		}(AnimatedWithChildren);var AnimatedMultiplication = function (_AnimatedWithChildren6) {
			babelHelpers.inherits(AnimatedMultiplication, _AnimatedWithChildren6);

			function AnimatedMultiplication(a, b) {
				babelHelpers.classCallCheck(this, AnimatedMultiplication);var _this14 = babelHelpers.possibleConstructorReturn(this, (AnimatedMultiplication.__proto__ || Object.getPrototypeOf(AnimatedMultiplication)).call(this));

				_this14._a = typeof a === 'number' ? new AnimatedValue(a) : a;
				_this14._b = typeof b === 'number' ? new AnimatedValue(b) : b;return _this14;
			}babelHelpers.createClass(AnimatedMultiplication, [{ key: '__makeNative', value: function __makeNative() {
					babelHelpers.get(AnimatedMultiplication.prototype.__proto__ || Object.getPrototypeOf(AnimatedMultiplication.prototype), '__makeNative', this).call(this);
					this._a.__makeNative();
					this._b.__makeNative();
				} }, { key: '__getValue', value: function __getValue() {
					return this._a.__getValue() * this._b.__getValue();
				} }, { key: 'interpolate', value: function interpolate(config) {
					return new AnimatedInterpolation(this, config);
				} }, { key: '__attach', value: function __attach() {
					this._a.__addChild(this);
					this._b.__addChild(this);
				} }, { key: '__detach', value: function __detach() {
					this._a.__removeChild(this);
					this._b.__removeChild(this);
					babelHelpers.get(AnimatedMultiplication.prototype.__proto__ || Object.getPrototypeOf(AnimatedMultiplication.prototype), '__detach', this).call(this);
				} }, { key: '__getNativeConfig', value: function __getNativeConfig() {
					return {
						type: 'multiplication',
						input: [this._a.__getNativeTag(), this._b.__getNativeTag()] };
				} }]);return AnimatedMultiplication;
		}(AnimatedWithChildren);var AnimatedModulo = function (_AnimatedWithChildren7) {
			babelHelpers.inherits(AnimatedModulo, _AnimatedWithChildren7);

			function AnimatedModulo(a, modulus) {
				babelHelpers.classCallCheck(this, AnimatedModulo);var _this15 = babelHelpers.possibleConstructorReturn(this, (AnimatedModulo.__proto__ || Object.getPrototypeOf(AnimatedModulo)).call(this));

				_this15._a = a;
				_this15._modulus = modulus;return _this15;
			}babelHelpers.createClass(AnimatedModulo, [{ key: '__makeNative', value: function __makeNative() {
					babelHelpers.get(AnimatedModulo.prototype.__proto__ || Object.getPrototypeOf(AnimatedModulo.prototype), '__makeNative', this).call(this);
					this._a.__makeNative();
				} }, { key: '__getValue', value: function __getValue() {
					return (this._a.__getValue() % this._modulus + this._modulus) % this._modulus;
				} }, { key: 'interpolate', value: function interpolate(config) {
					return new AnimatedInterpolation(this, config);
				} }, { key: '__attach', value: function __attach() {
					this._a.__addChild(this);
				} }, { key: '__detach', value: function __detach() {
					this._a.__removeChild(this);
				} }, { key: '__getNativeConfig', value: function __getNativeConfig() {
					return {
						type: 'modulus',
						input: this._a.__getNativeTag(),
						modulus: this._modulus };
				} }]);return AnimatedModulo;
		}(AnimatedWithChildren);var AnimatedDiffClamp = function (_AnimatedWithChildren8) {
			babelHelpers.inherits(AnimatedDiffClamp, _AnimatedWithChildren8);

			function AnimatedDiffClamp(a, min, max) {
				babelHelpers.classCallCheck(this, AnimatedDiffClamp);var _this16 = babelHelpers.possibleConstructorReturn(this, (AnimatedDiffClamp.__proto__ || Object.getPrototypeOf(AnimatedDiffClamp)).call(this));

				_this16._a = a;
				_this16._min = min;
				_this16._max = max;
				_this16._value = _this16._lastValue = _this16._a.__getValue();return _this16;
			}babelHelpers.createClass(AnimatedDiffClamp, [{ key: '__makeNative', value: function __makeNative() {
					babelHelpers.get(AnimatedDiffClamp.prototype.__proto__ || Object.getPrototypeOf(AnimatedDiffClamp.prototype), '__makeNative', this).call(this);
					this._a.__makeNative();
				} }, { key: 'interpolate', value: function interpolate(config) {
					return new AnimatedInterpolation(this, config);
				} }, { key: '__getValue', value: function __getValue() {
					var value = this._a.__getValue();
					var diff = value - this._lastValue;
					this._lastValue = value;
					this._value = Math.min(Math.max(this._value + diff, this._min), this._max);
					return this._value;
				} }, { key: '__attach', value: function __attach() {
					this._a.__addChild(this);
				} }, { key: '__detach', value: function __detach() {
					this._a.__removeChild(this);
				} }, { key: '__getNativeConfig', value: function __getNativeConfig() {
					return {
						type: 'diffclamp',
						input: this._a.__getNativeTag(),
						min: this._min,
						max: this._max };
				} }]);return AnimatedDiffClamp;
		}(AnimatedWithChildren);var AnimatedTransform = function (_AnimatedWithChildren9) {
			babelHelpers.inherits(AnimatedTransform, _AnimatedWithChildren9);

			function AnimatedTransform(transforms) {
				babelHelpers.classCallCheck(this, AnimatedTransform);var _this17 = babelHelpers.possibleConstructorReturn(this, (AnimatedTransform.__proto__ || Object.getPrototypeOf(AnimatedTransform)).call(this));

				_this17._transforms = transforms;return _this17;
			}babelHelpers.createClass(AnimatedTransform, [{ key: '__makeNative', value: function __makeNative() {
					babelHelpers.get(AnimatedTransform.prototype.__proto__ || Object.getPrototypeOf(AnimatedTransform.prototype), '__makeNative', this).call(this);
					this._transforms.forEach(function (transform) {
						for (var key in transform) {
							var value = transform[key];
							if (value instanceof Animated) {
								value.__makeNative();
							}
						}
					});
				} }, { key: '__getValue', value: function __getValue() {
					return this._transforms.map(function (transform) {
						var result = {};
						for (var key in transform) {
							var value = transform[key];
							if (value instanceof Animated) {
								result[key] = value.__getValue();
							} else {
								result[key] = value;
							}
						}
						return result;
					});
				} }, { key: '__getAnimatedValue', value: function __getAnimatedValue() {
					return this._transforms.map(function (transform) {
						var result = {};
						for (var key in transform) {
							var value = transform[key];
							if (value instanceof Animated) {
								result[key] = value.__getAnimatedValue();
							} else {

								result[key] = value;
							}
						}
						return result;
					});
				} }, { key: '__attach', value: function __attach() {
					var _this18 = this;
					this._transforms.forEach(function (transform) {
						for (var key in transform) {
							var value = transform[key];
							if (value instanceof Animated) {
								value.__addChild(_this18);
							}
						}
					});
				} }, { key: '__detach', value: function __detach() {
					var _this19 = this;
					this._transforms.forEach(function (transform) {
						for (var key in transform) {
							var value = transform[key];
							if (value instanceof Animated) {
								value.__removeChild(_this19);
							}
						}
					});
				} }, { key: '__getNativeConfig', value: function __getNativeConfig() {
					var transConfigs = [];

					this._transforms.forEach(function (transform) {
						for (var key in transform) {
							var value = transform[key];
							if (value instanceof Animated) {
								transConfigs.push({
									type: 'animated',
									property: key,
									nodeTag: value.__getNativeTag() });
							} else {
								transConfigs.push({
									type: 'static',
									property: key,
									value: value });
							}
						}
					});

					NativeAnimatedHelper.validateTransform(transConfigs);
					return {
						type: 'transform',
						transforms: transConfigs };
				} }]);return AnimatedTransform;
		}(AnimatedWithChildren);var AnimatedStyle = function (_AnimatedWithChildren10) {
			babelHelpers.inherits(AnimatedStyle, _AnimatedWithChildren10);

			function AnimatedStyle(style) {
				babelHelpers.classCallCheck(this, AnimatedStyle);var _this20 = babelHelpers.possibleConstructorReturn(this, (AnimatedStyle.__proto__ || Object.getPrototypeOf(AnimatedStyle)).call(this));

				style = flattenStyle(style) || {};
				if (style.transform) {
					style = babelHelpers.extends({}, style, {
						transform: new AnimatedTransform(style.transform) });
				}
				_this20._style = style;return _this20;
			}babelHelpers.createClass(AnimatedStyle, [{ key: '__getValue', value: function __getValue() {
					var style = {};
					for (var key in this._style) {
						var value = this._style[key];
						if (value instanceof Animated) {
							if (!value.__isNative) {

								style[key] = value.__getValue();
							}
						} else {
							style[key] = value;
						}
					}
					return style;
				} }, { key: '__getAnimatedValue', value: function __getAnimatedValue() {
					var style = {};
					for (var key in this._style) {
						var value = this._style[key];
						if (value instanceof Animated) {
							style[key] = value.__getAnimatedValue();
						}
					}
					return style;
				} }, { key: '__attach', value: function __attach() {
					for (var key in this._style) {
						var value = this._style[key];
						if (value instanceof Animated) {
							value.__addChild(this);
						}
					}
				} }, { key: '__detach', value: function __detach() {
					for (var key in this._style) {
						var value = this._style[key];
						if (value instanceof Animated) {
							value.__removeChild(this);
						}
					}
				} }, { key: '__makeNative', value: function __makeNative() {
					babelHelpers.get(AnimatedStyle.prototype.__proto__ || Object.getPrototypeOf(AnimatedStyle.prototype), '__makeNative', this).call(this);
					for (var key in this._style) {
						var value = this._style[key];
						if (value instanceof Animated) {
							value.__makeNative();
						}
					}
				} }, { key: '__getNativeConfig', value: function __getNativeConfig() {
					var styleConfig = {};
					for (var styleKey in this._style) {
						if (this._style[styleKey] instanceof Animated) {
							styleConfig[styleKey] = this._style[styleKey].__getNativeTag();
						}
					}
					NativeAnimatedHelper.validateStyles(styleConfig);
					return {
						type: 'style',
						style: styleConfig };
				} }]);return AnimatedStyle;
		}(AnimatedWithChildren);var AnimatedProps = function (_Animated2) {
			babelHelpers.inherits(AnimatedProps, _Animated2);

			function AnimatedProps(props, callback) {
				babelHelpers.classCallCheck(this, AnimatedProps);var _this21 = babelHelpers.possibleConstructorReturn(this, (AnimatedProps.__proto__ || Object.getPrototypeOf(AnimatedProps)).call(this));

				if (props.style) {
					props = babelHelpers.extends({}, props, {
						style: new AnimatedStyle(props.style) });
				}
				_this21._props = props;
				_this21._callback = callback;
				_this21.__attach();return _this21;
			}babelHelpers.createClass(AnimatedProps, [{ key: '__getValue', value: function __getValue() {
					var props = {};
					for (var key in this._props) {
						var value = this._props[key];
						if (value instanceof Animated) {
							if (!value.__isNative || value instanceof AnimatedStyle) {

								props[key] = value.__getValue();
							}
						} else if (value instanceof AnimatedEvent) {
							props[key] = value.__getHandler();
						} else {
							props[key] = value;
						}
					}
					return props;
				} }, { key: '__getAnimatedValue', value: function __getAnimatedValue() {
					var props = {};
					for (var key in this._props) {
						var value = this._props[key];
						if (value instanceof Animated) {
							props[key] = value.__getAnimatedValue();
						}
					}
					return props;
				} }, { key: '__attach', value: function __attach() {
					for (var key in this._props) {
						var value = this._props[key];
						if (value instanceof Animated) {
							value.__addChild(this);
						}
					}
				} }, { key: '__detach', value: function __detach() {
					if (this.__isNative && this._animatedView) {
						this.__disconnectAnimatedView();
					}
					for (var key in this._props) {
						var value = this._props[key];
						if (value instanceof Animated) {
							value.__removeChild(this);
						}
					}
					babelHelpers.get(AnimatedProps.prototype.__proto__ || Object.getPrototypeOf(AnimatedProps.prototype), '__detach', this).call(this);
				} }, { key: 'update', value: function update() {
					this._callback();
				} }, { key: '__makeNative', value: function __makeNative() {
					if (!this.__isNative) {
						this.__isNative = true;
						for (var key in this._props) {
							var value = this._props[key];
							if (value instanceof Animated) {
								value.__makeNative();
							}
						}
						if (this._animatedView) {
							this.__connectAnimatedView();
						}
					}
				} }, { key: 'setNativeView', value: function setNativeView(animatedView) {
					invariant(this._animatedView === undefined, 'Animated view already set.');
					this._animatedView = animatedView;
					if (this.__isNative) {
						this.__connectAnimatedView();
					}
				} }, { key: '__connectAnimatedView', value: function __connectAnimatedView() {
					invariant(this.__isNative, 'Expected node to be marked as "native"');
					var nativeViewTag = findNodeHandle(this._animatedView);
					invariant(nativeViewTag != null, 'Unable to locate attached view in the native tree');
					NativeAnimatedAPI.connectAnimatedNodeToView(this.__getNativeTag(), nativeViewTag);
				} }, { key: '__disconnectAnimatedView', value: function __disconnectAnimatedView() {
					invariant(this.__isNative, 'Expected node to be marked as "native"');
					var nativeViewTag = findNodeHandle(this._animatedView);
					invariant(nativeViewTag != null, 'Unable to locate attached view in the native tree');
					NativeAnimatedAPI.disconnectAnimatedNodeFromView(this.__getNativeTag(), nativeViewTag);
				} }, { key: '__getNativeConfig', value: function __getNativeConfig() {
					var propsConfig = {};
					for (var propKey in this._props) {
						var value = this._props[propKey];
						if (value instanceof Animated) {
							propsConfig[propKey] = value.__getNativeTag();
						}
					}
					NativeAnimatedHelper.validateProps(propsConfig);
					return {
						type: 'props',
						props: propsConfig };
				} }]);return AnimatedProps;
		}(Animated);

		function createAnimatedComponent(Component) {
			var AnimatedComponent = function (_React$Component) {
				babelHelpers.inherits(AnimatedComponent, _React$Component);

				function AnimatedComponent(props) {
					babelHelpers.classCallCheck(this, AnimatedComponent);var _this22 = babelHelpers.possibleConstructorReturn(this, (AnimatedComponent.__proto__ || Object.getPrototypeOf(AnimatedComponent)).call(this, props));
					_this22._setComponentRef = _this22._setComponentRef.bind(_this22);return _this22;
				}babelHelpers.createClass(AnimatedComponent, [{ key: 'componentWillUnmount', value: function componentWillUnmount() {
						this._propsAnimated && this._propsAnimated.__detach();
						this._detachNativeEvents(this.props);
					} }, { key: 'setNativeProps', value: function setNativeProps(props) {
						this._component.setNativeProps(props);
					} }, { key: 'componentWillMount', value: function componentWillMount() {
						this._attachProps(this.props);
					} }, { key: 'componentDidMount', value: function componentDidMount() {
						this._propsAnimated.setNativeView(this._component);

						this._attachNativeEvents(this.props);
					} }, { key: '_attachNativeEvents', value: function _attachNativeEvents(newProps) {
						if (newProps !== this.props) {
							this._detachNativeEvents(this.props);
						}

						var ref = this._component.getScrollableNode ? this._component.getScrollableNode() : this._component;

						for (var _key in newProps) {
							var prop = newProps[_key];
							if (prop instanceof AnimatedEvent && prop.__isNative) {
								prop.__attach(ref, _key);
							}
						}
					} }, { key: '_detachNativeEvents', value: function _detachNativeEvents(props) {

						var ref = this._component.getScrollableNode ? this._component.getScrollableNode() : this._component;

						for (var _key2 in props) {
							var prop = props[_key2];
							if (prop instanceof AnimatedEvent && prop.__isNative) {
								prop.__detach(ref, _key2);
							}
						}
					} }, { key: '_attachProps', value: function _attachProps(nextProps) {
						var _this23 = this;
						var oldPropsAnimated = this._propsAnimated;

						var callback = function callback() {
							if (_this23._component.setNativeProps) {
								if (!_this23._propsAnimated.__isNative) {
									if (_this23._component.viewConfig == null) {
										var ctor = _this23._component.constructor;
										var componentName = ctor.displayName || ctor.name || '<Unknown Component>';
										throw new Error(componentName + ' "viewConfig" is not defined.');
									}

									_this23._component.setNativeProps(_this23._propsAnimated.__getAnimatedValue());
								} else {
									throw new Error('Attempting to run JS driven animation on animated ' + 'node that has been moved to "native" earlier by starting an ' + 'animation with `useNativeDriver: true`');
								}
							} else {
								_this23.forceUpdate();
							}
						};

						this._propsAnimated = new AnimatedProps(nextProps, callback);

						if (this._component) {
							this._propsAnimated.setNativeView(this._component);
						}

						oldPropsAnimated && oldPropsAnimated.__detach();
					} }, { key: 'componentWillReceiveProps', value: function componentWillReceiveProps(nextProps) {
						this._attachProps(nextProps);
						this._attachNativeEvents(nextProps);
					} }, { key: 'render', value: function render() {
						return React.createElement(Component, babelHelpers.extends({}, this._propsAnimated.__getValue(), {
							ref: this._setComponentRef }));
					} }, { key: '_setComponentRef', value: function _setComponentRef(c) {
						this._component = c;
					} }, { key: 'getNode', value: function getNode() {
						return this._component;
					} }]);return AnimatedComponent;
			}(React.Component);

			AnimatedComponent.propTypes = {
				style: function style(props, propName, componentName) {
					if (!Component.propTypes) {
						return;
					}

					for (var key in ViewStylePropTypes) {
						if (!Component.propTypes[key] && props[key] !== undefined) {
							console.warn('You are setting the style `{ ' + key + ': ... }` as a prop. You ' + 'should nest it in a style object. ' + 'E.g. `{ style: { ' + key + ': ... } }`');
						}
					}
				} };

			return AnimatedComponent;
		}var AnimatedTracking = function (_Animated3) {
			babelHelpers.inherits(AnimatedTracking, _Animated3);

			function AnimatedTracking(value, parent, animationClass, animationConfig, callback) {
				babelHelpers.classCallCheck(this, AnimatedTracking);var _this24 = babelHelpers.possibleConstructorReturn(this, (AnimatedTracking.__proto__ || Object.getPrototypeOf(AnimatedTracking)).call(this));

				_this24._value = value;
				_this24._parent = parent;
				_this24._animationClass = animationClass;
				_this24._animationConfig = animationConfig;
				_this24._callback = callback;
				_this24.__attach();return _this24;
			}babelHelpers.createClass(AnimatedTracking, [{ key: '__getValue', value: function __getValue() {
					return this._parent.__getValue();
				} }, { key: '__attach', value: function __attach() {
					this._parent.__addChild(this);
				} }, { key: '__detach', value: function __detach() {
					this._parent.__removeChild(this);
					babelHelpers.get(AnimatedTracking.prototype.__proto__ || Object.getPrototypeOf(AnimatedTracking.prototype), '__detach', this).call(this);
				} }, { key: 'update', value: function update() {
					this._value.animate(new this._animationClass(babelHelpers.extends({}, this._animationConfig, {
						toValue: this._animationConfig.toValue.__getValue() })), this._callback);
				} }]);return AnimatedTracking;
		}(Animated);

		var add = function add(a, b) {
			return new AnimatedAddition(a, b);
		};

		var divide = function divide(a, b) {
			return new AnimatedDivision(a, b);
		};

		var multiply = function multiply(a, b) {
			return new AnimatedMultiplication(a, b);
		};

		var modulo = function modulo(a, modulus) {
			return new AnimatedModulo(a, modulus);
		};

		var diffClamp = function diffClamp(a, min, max) {
			return new AnimatedDiffClamp(a, min, max);
		};

		var _combineCallbacks = function _combineCallbacks(callback, config) {
			if (callback && config.onComplete) {
				return function () {
					config.onComplete && config.onComplete.apply(config, arguments);
					callback && callback.apply(undefined, arguments);
				};
			} else {
				return callback || config.onComplete;
			}
		};

		var maybeVectorAnim = function maybeVectorAnim(value, config, anim) {
			if (value instanceof AnimatedValueXY) {
				var configX = babelHelpers.extends({}, config);
				var configY = babelHelpers.extends({}, config);
				for (var key in config) {
					var _config$key = config[key],
					    x = _config$key.x,
					    y = _config$key.y;
					if (x !== undefined && y !== undefined) {
						configX[key] = x;
						configY[key] = y;
					}
				}
				var aX = anim(value.x, configX);
				var aY = anim(value.y, configY);

				return parallel([aX, aY], { stopTogether: false });
			}
			return null;
		};

		var spring = function spring(value, config) {
			return maybeVectorAnim(value, config, spring) || {
				start: function start(callback) {
					callback = _combineCallbacks(callback, config);
					var singleValue = value;
					var singleConfig = config;
					singleValue.stopTracking();
					if (config.toValue instanceof Animated) {
						singleValue.track(new AnimatedTracking(singleValue, config.toValue, SpringAnimation, singleConfig, callback));
					} else {
						singleValue.animate(new SpringAnimation(singleConfig), callback);
					}
				},

				stop: function stop() {
					value.stopAnimation();
				} };
		};

		var timing = function timing(value, config) {
			return maybeVectorAnim(value, config, timing) || {
				start: function start(callback) {
					callback = _combineCallbacks(callback, config);
					var singleValue = value;
					var singleConfig = config;
					singleValue.stopTracking();
					if (config.toValue instanceof Animated) {
						singleValue.track(new AnimatedTracking(singleValue, config.toValue, TimingAnimation, singleConfig, callback));
					} else {
						singleValue.animate(new TimingAnimation(singleConfig), callback);
					}
				},

				stop: function stop() {
					value.stopAnimation();
				} };
		};

		var decay = function decay(value, config) {
			return maybeVectorAnim(value, config, decay) || {
				start: function start(callback) {
					callback = _combineCallbacks(callback, config);
					var singleValue = value;
					var singleConfig = config;
					singleValue.stopTracking();
					singleValue.animate(new DecayAnimation(singleConfig), callback);
				},

				stop: function stop() {
					value.stopAnimation();
				} };
		};

		var sequence = function sequence(animations) {
			var current = 0;
			return {
				start: function start(callback) {
					var onComplete = function onComplete(result) {
						if (!result.finished) {
							callback && callback(result);
							return;
						}

						current++;

						if (current === animations.length) {
							callback && callback(result);
							return;
						}

						animations[current].start(onComplete);
					};

					if (animations.length === 0) {
						callback && callback({ finished: true });
					} else {
						animations[current].start(onComplete);
					}
				},

				stop: function stop() {
					if (current < animations.length) {
						animations[current].stop();
					}
				} };
		};

		var parallel = function parallel(animations, config) {
			var doneCount = 0;

			var hasEnded = {};
			var stopTogether = !(config && config.stopTogether === false);

			var result = {
				start: function start(callback) {
					if (doneCount === animations.length) {
						callback && callback({ finished: true });
						return;
					}

					animations.forEach(function (animation, idx) {
						var cb = function cb(endResult) {
							hasEnded[idx] = true;
							doneCount++;
							if (doneCount === animations.length) {
								doneCount = 0;
								callback && callback(endResult);
								return;
							}

							if (!endResult.finished && stopTogether) {
								result.stop();
							}
						};

						if (!animation) {
							cb({ finished: true });
						} else {
							animation.start(cb);
						}
					});
				},

				stop: function stop() {
					animations.forEach(function (animation, idx) {
						!hasEnded[idx] && animation.stop();
						hasEnded[idx] = true;
					});
				} };

			return result;
		};

		var delay = function delay(time) {

			return timing(new AnimatedValue(0), { toValue: 0, delay: time, duration: 0 });
		};

		var stagger = function stagger(time, animations) {
			return parallel(animations.map(function (animation, i) {
				return sequence([delay(time * i), animation]);
			}));
		};var AnimatedEvent = function () {

			function AnimatedEvent(argMapping) {
				var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};babelHelpers.classCallCheck(this, AnimatedEvent);
				this._argMapping = argMapping;
				this._listener = config.listener;
				this.__isNative = config.useNativeDriver || false;

				if (this.__isNative) {
					invariant(!this._listener, 'Listener is not supported for native driven events.');
				}
			}babelHelpers.createClass(AnimatedEvent, [{ key: '__attach', value: function __attach(viewRef, eventName) {
					invariant(this.__isNative, 'Only native driven events need to be attached.');

					var eventMappings = [];

					var traverse = function traverse(value, path) {
						if (value instanceof AnimatedValue) {
							value.__makeNative();

							eventMappings.push({
								nativeEventPath: path,
								animatedValueTag: value.__getNativeTag() });
						} else if (typeof value === 'object') {
							for (var _key3 in value) {
								traverse(value[_key3], path.concat(_key3));
							}
						}
					};

					invariant(this._argMapping[0] && this._argMapping[0].nativeEvent, 'Native driven events only support animated values contained inside `nativeEvent`.');

					traverse(this._argMapping[0].nativeEvent, []);

					var viewTag = findNodeHandle(viewRef);

					eventMappings.forEach(function (mapping) {
						NativeAnimatedAPI.addAnimatedEventToView(viewTag, eventName, mapping);
					});
				} }, { key: '__detach', value: function __detach(viewTag, eventName) {
					invariant(this.__isNative, 'Only native driven events need to be detached.');

					NativeAnimatedAPI.removeAnimatedEventFromView(viewTag, eventName);
				} }, { key: '__getHandler', value: function __getHandler() {
					var _this25 = this;
					return function () {
						for (var _len = arguments.length, args = Array(_len), _key4 = 0; _key4 < _len; _key4++) {
							args[_key4] = arguments[_key4];
						}
						var traverse = function traverse(recMapping, recEvt, key) {
							if (typeof recEvt === 'number' && recMapping instanceof AnimatedValue) {
								recMapping.setValue(recEvt);
							} else if (typeof recMapping === 'object') {
								for (var mappingKey in recMapping) {
									traverse(recMapping[mappingKey], recEvt[mappingKey], mappingKey);
								}
							}
						};

						if (!_this25.__isNative) {
							_this25._argMapping.forEach(function (mapping, idx) {
								traverse(mapping, args[idx], 'arg' + idx);
							});
						}

						if (_this25._listener) {
							_this25._listener.apply(null, args);
						}
					};
				} }, { key: '_validateMapping', value: function _validateMapping() {
					var traverse = function traverse(recMapping, recEvt, key) {
						if (typeof recEvt === 'number') {
							invariant(recMapping instanceof AnimatedValue, 'Bad mapping of type ' + typeof recMapping + ' for key ' + key + ', event value must map to AnimatedValue');

							return;
						}
						invariant(typeof recMapping === 'object', 'Bad mapping of type ' + typeof recMapping + ' for key ' + key);

						invariant(typeof recEvt === 'object', 'Bad event of type ' + typeof recEvt + ' for key ' + key);

						for (var mappingKey in recMapping) {
							traverse(recMapping[mappingKey], recEvt[mappingKey], mappingKey);
						}
					};
				} }]);return AnimatedEvent;
		}();

		var event = function event(argMapping, config) {
			var animatedEvent = new AnimatedEvent(argMapping, config);
			if (animatedEvent.__isNative) {
				return animatedEvent;
			} else {
				return animatedEvent.__getHandler();
			}
		};

		module.exports = {

			Value: AnimatedValue,

			ValueXY: AnimatedValueXY,

			decay: decay,

			timing: timing,

			spring: spring,

			add: add,

			divide: divide,

			multiply: multiply,

			modulo: modulo,

			diffClamp: diffClamp,

			delay: delay,

			sequence: sequence,

			parallel: parallel,

			stagger: stagger,

			event: event,

			createAnimatedComponent: createAnimatedComponent,

			__PropsOnlyForTests: AnimatedProps };
	}, // Libraries/Interaction/InteractionManager.js
	function (__inner_require__, exports, module) {
		var BatchedBridge = require('react-native@0.37/Libraries/BatchedBridge/BatchedBridge.js');
		var EventEmitter = require('react-native@0.37/Libraries/EventEmitter/EventEmitter.js');
		var Set = require('react-native@0.37/Libraries/vendor/core/Set.js');
		var TaskQueue = __inner_require__(15 /*Libraries/Interaction/TaskQueue.js*/);

		var infoLog = __inner_require__(16 /*Libraries/Utilities/infoLog.js*/);
		var invariant = require('fbjs@0.8/lib/invariant.js');
		var keyMirror = require('fbjs@0.8/lib/keyMirror.js');

		var _emitter = new EventEmitter();

		var DEBUG_DELAY = 0;
		var DEBUG = false;

		var InteractionManager = {
			Events: keyMirror({
				interactionStart: true,
				interactionComplete: true }),

			runAfterInteractions: function runAfterInteractions(task) {
				var tasks = [];
				var promise = new Promise(function (resolve) {
					_scheduleUpdate();
					if (task) {
						tasks.push(task);
					}
					tasks.push({ run: resolve, name: 'resolve ' + (task && task.name || '?') });
					_taskQueue.enqueueTasks(tasks);
				});
				return {
					then: promise.then.bind(promise),
					done: function done() {
						if (promise.done) {
							return promise.done.apply(promise, arguments);
						} else {
							console.warn('Tried to call done when not supported by current Promise implementation.');
						}
					},
					cancel: function cancel() {
						_taskQueue.cancelTasks(tasks);
					} };
			},

			createInteractionHandle: function createInteractionHandle() {
				DEBUG && infoLog('create interaction handle');
				_scheduleUpdate();
				var handle = ++_inc;
				_addInteractionSet.add(handle);
				return handle;
			},

			clearInteractionHandle: function clearInteractionHandle(handle) {
				DEBUG && infoLog('clear interaction handle');
				invariant(!!handle, 'Must provide a handle to clear.');

				_scheduleUpdate();
				_addInteractionSet.delete(handle);
				_deleteInteractionSet.add(handle);
			},

			addListener: _emitter.addListener.bind(_emitter),

			setDeadline: function setDeadline(deadline) {
				_deadline = deadline;
			} };

		var _interactionSet = new Set();
		var _addInteractionSet = new Set();
		var _deleteInteractionSet = new Set();
		var _taskQueue = new TaskQueue({ onMoreTasks: _scheduleUpdate });
		var _nextUpdateHandle = 0;
		var _inc = 0;
		var _deadline = -1;

		function _scheduleUpdate() {
			if (!_nextUpdateHandle) {
				if (_deadline > 0) {
					_nextUpdateHandle = setTimeout(_processUpdate, 0 + DEBUG_DELAY);
				} else {
					_nextUpdateHandle = setImmediate(_processUpdate);
				}
			}
		}

		function _processUpdate() {
			_nextUpdateHandle = 0;

			var interactionCount = _interactionSet.size;
			_addInteractionSet.forEach(function (handle) {
				return _interactionSet.add(handle);
			});

			_deleteInteractionSet.forEach(function (handle) {
				return _interactionSet.delete(handle);
			});

			var nextInteractionCount = _interactionSet.size;

			if (interactionCount !== 0 && nextInteractionCount === 0) {

				_emitter.emit(InteractionManager.Events.interactionComplete);
			} else if (interactionCount === 0 && nextInteractionCount !== 0) {

				_emitter.emit(InteractionManager.Events.interactionStart);
			}

			if (nextInteractionCount === 0) {
				while (_taskQueue.hasTasksToProcess()) {
					_taskQueue.processNext();
					if (_deadline > 0 && BatchedBridge.getEventLoopRunningTime() >= _deadline) {

						_scheduleUpdate();
						break;
					}
				}
			}
			_addInteractionSet.clear();
			_deleteInteractionSet.clear();
		}

		module.exports = InteractionManager;
	}, // Libraries/Interaction/TaskQueue.js
	function (__inner_require__, exports, module) {
		var infoLog = __inner_require__(16 /*Libraries/Utilities/infoLog.js*/);
		var invariant = require('fbjs@0.8/lib/invariant.js');

		var DEBUG = false;var TaskQueue = function () {

			function TaskQueue(_ref) {
				var onMoreTasks = _ref.onMoreTasks;babelHelpers.classCallCheck(this, TaskQueue);
				this._onMoreTasks = onMoreTasks;
				this._queueStack = [{ tasks: [], popable: false }];
			}babelHelpers.createClass(TaskQueue, [{ key: 'enqueue', value: function enqueue(task) {
					this._getCurrentQueue().push(task);
				} }, { key: 'enqueueTasks', value: function enqueueTasks(tasks) {
					var _this = this;
					tasks.forEach(function (task) {
						return _this.enqueue(task);
					});
				} }, { key: 'cancelTasks', value: function cancelTasks(tasksToCancel) {

					this._queueStack = this._queueStack.map(function (queue) {
						return babelHelpers.extends({}, queue, {
							tasks: queue.tasks.filter(function (task) {
								return tasksToCancel.indexOf(task) === -1;
							}) });
					}).filter(function (queue, idx) {
						return queue.tasks.length > 0 || idx === 0;
					});
				} }, { key: 'hasTasksToProcess', value: function hasTasksToProcess() {
					return this._getCurrentQueue().length > 0;
				} }, { key: 'processNext', value: function processNext() {
					var queue = this._getCurrentQueue();
					if (queue.length) {
						var task = queue.shift();
						try {
							if (task.gen) {
								DEBUG && infoLog('genPromise for task ' + task.name);
								this._genPromise(task);
							} else if (task.run) {
								DEBUG && infoLog('run task ' + task.name);
								task.run();
							} else {
								invariant(typeof task === 'function', 'Expected Function, SimpleTask, or PromiseTask, but got:\n' + JSON.stringify(task, null, 2));

								DEBUG && infoLog('run anonymous task');
								task();
							}
						} catch (e) {
							e.message = 'TaskQueue: Error with task ' + (task.name || '') + ': ' + e.message;
							throw e;
						}
					}
				} }, { key: '_getCurrentQueue', value: function _getCurrentQueue() {
					var stackIdx = this._queueStack.length - 1;
					var queue = this._queueStack[stackIdx];
					if (queue.popable && queue.tasks.length === 0 && this._queueStack.length > 1) {
						this._queueStack.pop();
						DEBUG && infoLog('popped queue: ', { stackIdx: stackIdx, queueStackSize: this._queueStack.length });
						return this._getCurrentQueue();
					} else {
						return queue.tasks;
					}
				} }, { key: '_genPromise', value: function _genPromise(task) {
					var _this2 = this;

					this._queueStack.push({ tasks: [], popable: false });
					var stackIdx = this._queueStack.length - 1;
					DEBUG && infoLog('push new queue: ', { stackIdx: stackIdx });
					DEBUG && infoLog('exec gen task ' + task.name);
					task.gen().then(function () {
						DEBUG && infoLog('onThen for gen task ' + task.name, { stackIdx: stackIdx, queueStackSize: _this2._queueStack.length });

						_this2._queueStack[stackIdx].popable = true;
						_this2.hasTasksToProcess() && _this2._onMoreTasks();
					}).catch(function (ex) {
						ex.message = 'TaskQueue: Error resolving Promise in task ' + task.name + ': ' + ex.message;
						throw ex;
					}).done();
				} }]);return TaskQueue;
		}();

		module.exports = TaskQueue;
	}, // Libraries/Utilities/infoLog.js
	function (__inner_require__, exports, module) {
		function infoLog() {
			var _console;
			return (_console = console).log.apply(_console, arguments);
		}

		module.exports = infoLog;
	}, // Libraries/Animated/src/Interpolation.js
	function (__inner_require__, exports, module) {
		var invariant = require('fbjs@0.8/lib/invariant.js');
		var normalizeColor = require('react-native@0.37/Libraries/StyleSheet/normalizeColor.js');

		var linear = function linear(t) {
			return t;
		};var Interpolation = function () {
			function Interpolation() {
				babelHelpers.classCallCheck(this, Interpolation);
			}babelHelpers.createClass(Interpolation, null, [{ key: 'create', value: function create(config) {

					if (config.outputRange && typeof config.outputRange[0] === 'string') {
						return createInterpolationFromStringOutputRange(config);
					}

					var outputRange = config.outputRange;
					checkInfiniteRange('outputRange', outputRange);

					var inputRange = config.inputRange;
					checkInfiniteRange('inputRange', inputRange);
					checkValidInputRange(inputRange);

					invariant(inputRange.length === outputRange.length, 'inputRange (' + inputRange.length + ') and outputRange (' + outputRange.length + ') must have the same length');

					var easing = config.easing || linear;

					var extrapolateLeft = 'extend';
					if (config.extrapolateLeft !== undefined) {
						extrapolateLeft = config.extrapolateLeft;
					} else if (config.extrapolate !== undefined) {
						extrapolateLeft = config.extrapolate;
					}

					var extrapolateRight = 'extend';
					if (config.extrapolateRight !== undefined) {
						extrapolateRight = config.extrapolateRight;
					} else if (config.extrapolate !== undefined) {
						extrapolateRight = config.extrapolate;
					}

					return function (input) {
						invariant(typeof input === 'number', 'Cannot interpolation an input which is not a number');

						var range = findRange(input, inputRange);
						return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight);
					};
				} }]);return Interpolation;
		}();

		function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight) {
			var result = input;

			if (result < inputMin) {
				if (extrapolateLeft === 'identity') {
					return result;
				} else if (extrapolateLeft === 'clamp') {
					result = inputMin;
				} else if (extrapolateLeft === 'extend') {}
			}

			if (result > inputMax) {
				if (extrapolateRight === 'identity') {
					return result;
				} else if (extrapolateRight === 'clamp') {
					result = inputMax;
				} else if (extrapolateRight === 'extend') {}
			}

			if (outputMin === outputMax) {
				return outputMin;
			}

			if (inputMin === inputMax) {
				if (input <= inputMin) {
					return outputMin;
				}
				return outputMax;
			}

			if (inputMin === -Infinity) {
				result = -result;
			} else if (inputMax === Infinity) {
				result = result - inputMin;
			} else {
				result = (result - inputMin) / (inputMax - inputMin);
			}

			result = easing(result);

			if (outputMin === -Infinity) {
				result = -result;
			} else if (outputMax === Infinity) {
				result = result + outputMin;
			} else {
				result = result * (outputMax - outputMin) + outputMin;
			}

			return result;
		}

		function colorToRgba(input) {
			var int32Color = normalizeColor(input);
			if (int32Color === null) {
				return input;
			}

			int32Color = int32Color || 0;

			var r = (int32Color & 0xff000000) >>> 24;
			var g = (int32Color & 0x00ff0000) >>> 16;
			var b = (int32Color & 0x0000ff00) >>> 8;
			var a = (int32Color & 0x000000ff) / 255;

			return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
		}

		var stringShapeRegex = /[0-9\.-]+/g;

		function createInterpolationFromStringOutputRange(config) {
			var outputRange = config.outputRange;
			invariant(outputRange.length >= 2, 'Bad output range');
			outputRange = outputRange.map(colorToRgba);
			checkPattern(outputRange);

			var outputRanges = outputRange[0].match(stringShapeRegex).map(function () {
				return [];
			});
			outputRange.forEach(function (value) {

				value.match(stringShapeRegex).forEach(function (number, i) {
					outputRanges[i].push(+number);
				});
			});

			var interpolations = outputRange[0].match(stringShapeRegex).map(function (value, i) {
				return Interpolation.create(babelHelpers.extends({}, config, {
					outputRange: outputRanges[i] }));
			});

			var shouldRound = isRgbOrRgba(outputRange[0]);

			return function (input) {
				var i = 0;

				return outputRange[0].replace(stringShapeRegex, function () {
					var val = +interpolations[i++](input);
					var rounded = shouldRound && i < 4 ? Math.round(val) : Math.round(val * 1000) / 1000;
					return String(rounded);
				});
			};
		}

		function isRgbOrRgba(range) {
			return typeof range === 'string' && range.startsWith('rgb');
		}

		function checkPattern(arr) {
			var pattern = arr[0].replace(stringShapeRegex, '');
			for (var i = 1; i < arr.length; ++i) {
				invariant(pattern === arr[i].replace(stringShapeRegex, ''), 'invalid pattern ' + arr[0] + ' and ' + arr[i]);
			}
		}

		function findRange(input, inputRange) {
			for (var i = 1; i < inputRange.length - 1; ++i) {
				if (inputRange[i] >= input) {
					break;
				}
			}
			return i - 1;
		}

		function checkValidInputRange(arr) {
			invariant(arr.length >= 2, 'inputRange must have at least 2 elements');
			for (var i = 1; i < arr.length; ++i) {
				invariant(arr[i] >= arr[i - 1], 'inputRange must be monotonically increasing ' + arr);
			}
		}

		function checkInfiniteRange(name, arr) {
			invariant(arr.length >= 2, name + ' must have at least 2 elements');
			invariant(arr.length !== 2 || arr[0] !== -Infinity || arr[1] !== Infinity, name + 'cannot be ]-infinity;+infinity[ ' + arr);
		}

		module.exports = Interpolation;
	}, // Libraries/Animated/src/SpringConfig.js
	function (__inner_require__, exports, module) {
		function tensionFromOrigamiValue(oValue) {
			return (oValue - 30) * 3.62 + 194;
		}

		function frictionFromOrigamiValue(oValue) {
			return (oValue - 8) * 3 + 25;
		}

		function fromOrigamiTensionAndFriction(tension, friction) {
			return {
				tension: tensionFromOrigamiValue(tension),
				friction: frictionFromOrigamiValue(friction) };
		}

		function fromBouncinessAndSpeed(bounciness, speed) {
			function normalize(value, startValue, endValue) {
				return (value - startValue) / (endValue - startValue);
			}

			function projectNormal(n, start, end) {
				return start + n * (end - start);
			}

			function linearInterpolation(t, start, end) {
				return t * end + (1 - t) * start;
			}

			function quadraticOutInterpolation(t, start, end) {
				return linearInterpolation(2 * t - t * t, start, end);
			}

			function b3Friction1(x) {
				return 0.0007 * Math.pow(x, 3) - 0.031 * Math.pow(x, 2) + 0.64 * x + 1.28;
			}

			function b3Friction2(x) {
				return 0.000044 * Math.pow(x, 3) - 0.006 * Math.pow(x, 2) + 0.36 * x + 2;
			}

			function b3Friction3(x) {
				return 0.00000045 * Math.pow(x, 3) - 0.000332 * Math.pow(x, 2) + 0.1078 * x + 5.84;
			}

			function b3Nobounce(tension) {
				if (tension <= 18) {
					return b3Friction1(tension);
				} else if (tension > 18 && tension <= 44) {
					return b3Friction2(tension);
				} else {
					return b3Friction3(tension);
				}
			}

			var b = normalize(bounciness / 1.7, 0, 20);
			b = projectNormal(b, 0, 0.8);
			var s = normalize(speed / 1.7, 0, 20);
			var bouncyTension = projectNormal(s, 0.5, 200);
			var bouncyFriction = quadraticOutInterpolation(b, b3Nobounce(bouncyTension), 0.01);

			return {
				tension: tensionFromOrigamiValue(bouncyTension),
				friction: frictionFromOrigamiValue(bouncyFriction) };
		}

		module.exports = {
			fromOrigamiTensionAndFriction: fromOrigamiTensionAndFriction,
			fromBouncinessAndSpeed: fromBouncinessAndSpeed };
	}, // Libraries/Animated/src/NativeAnimatedHelper.js
	function (__inner_require__, exports, module) {
		var NativeAnimatedModule = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js').NativeAnimatedModule;
		var NativeEventEmitter = require('react-native@0.37/Libraries/EventEmitter/NativeEventEmitter.js');

		var invariant = require('fbjs@0.8/lib/invariant.js');

		var __nativeAnimatedNodeTagCount = 1;
		var __nativeAnimationIdCount = 1;

		var nativeEventEmitter = void 0;

		var API = {
			createAnimatedNode: function createAnimatedNode(tag, config) {
				assertNativeAnimatedModule();
				NativeAnimatedModule.createAnimatedNode(tag, config);
			},
			startListeningToAnimatedNodeValue: function startListeningToAnimatedNodeValue(tag) {
				assertNativeAnimatedModule();
				NativeAnimatedModule.startListeningToAnimatedNodeValue(tag);
			},
			stopListeningToAnimatedNodeValue: function stopListeningToAnimatedNodeValue(tag) {
				assertNativeAnimatedModule();
				NativeAnimatedModule.stopListeningToAnimatedNodeValue(tag);
			},
			connectAnimatedNodes: function connectAnimatedNodes(parentTag, childTag) {
				assertNativeAnimatedModule();
				NativeAnimatedModule.connectAnimatedNodes(parentTag, childTag);
			},
			disconnectAnimatedNodes: function disconnectAnimatedNodes(parentTag, childTag) {
				assertNativeAnimatedModule();
				NativeAnimatedModule.disconnectAnimatedNodes(parentTag, childTag);
			},
			startAnimatingNode: function startAnimatingNode(animationId, nodeTag, config, endCallback) {
				assertNativeAnimatedModule();
				NativeAnimatedModule.startAnimatingNode(animationId, nodeTag, config, endCallback);
			},
			stopAnimation: function stopAnimation(animationId) {
				assertNativeAnimatedModule();
				NativeAnimatedModule.stopAnimation(animationId);
			},
			setAnimatedNodeValue: function setAnimatedNodeValue(nodeTag, value) {
				assertNativeAnimatedModule();
				NativeAnimatedModule.setAnimatedNodeValue(nodeTag, value);
			},
			setAnimatedNodeOffset: function setAnimatedNodeOffset(nodeTag, offset) {
				assertNativeAnimatedModule();
				NativeAnimatedModule.setAnimatedNodeOffset(nodeTag, offset);
			},
			flattenAnimatedNodeOffset: function flattenAnimatedNodeOffset(nodeTag) {
				assertNativeAnimatedModule();
				NativeAnimatedModule.flattenAnimatedNodeOffset(nodeTag);
			},
			connectAnimatedNodeToView: function connectAnimatedNodeToView(nodeTag, viewTag) {
				assertNativeAnimatedModule();
				NativeAnimatedModule.connectAnimatedNodeToView(nodeTag, viewTag);
			},
			disconnectAnimatedNodeFromView: function disconnectAnimatedNodeFromView(nodeTag, viewTag) {
				assertNativeAnimatedModule();
				NativeAnimatedModule.disconnectAnimatedNodeFromView(nodeTag, viewTag);
			},
			dropAnimatedNode: function dropAnimatedNode(tag) {
				assertNativeAnimatedModule();
				NativeAnimatedModule.dropAnimatedNode(tag);
			},
			addAnimatedEventToView: function addAnimatedEventToView(viewTag, eventName, eventMapping) {
				assertNativeAnimatedModule();
				NativeAnimatedModule.addAnimatedEventToView(viewTag, eventName, eventMapping);
			},
			removeAnimatedEventFromView: function removeAnimatedEventFromView(viewTag, eventName) {
				assertNativeAnimatedModule();
				NativeAnimatedModule.removeAnimatedEventFromView(viewTag, eventName);
			} };

		var PROPS_WHITELIST = {
			style: {
				opacity: true,
				transform: true,

				scaleX: true,
				scaleY: true,
				translateX: true,
				translateY: true } };

		var TRANSFORM_WHITELIST = {
			translateX: true,
			translateY: true,
			scale: true,
			scaleX: true,
			scaleY: true,
			rotate: true,
			rotateX: true,
			rotateY: true,
			perspective: true };

		function validateProps(params) {
			for (var key in params) {
				if (!PROPS_WHITELIST.hasOwnProperty(key)) {
					throw new Error('Property \'' + key + '\' is not supported by native animated module');
				}
			}
		}

		function validateTransform(configs) {
			configs.forEach(function (config) {
				if (!TRANSFORM_WHITELIST.hasOwnProperty(config.property)) {
					throw new Error('Property \'' + config.property + '\' is not supported by native animated module');
				}
			});
		}

		function validateStyles(styles) {
			var STYLES_WHITELIST = PROPS_WHITELIST.style || {};
			for (var key in styles) {
				if (!STYLES_WHITELIST.hasOwnProperty(key)) {
					throw new Error('Style property \'' + key + '\' is not supported by native animated module');
				}
			}
		}

		function validateInterpolation(config) {
			var SUPPORTED_INTERPOLATION_PARAMS = {
				inputRange: true,
				outputRange: true,
				extrapolate: true,
				extrapolateRight: true,
				extrapolateLeft: true };

			for (var key in config) {
				if (!SUPPORTED_INTERPOLATION_PARAMS.hasOwnProperty(key)) {
					throw new Error('Interpolation property \'' + key + '\' is not supported by native animated module');
				}
			}
		}

		function generateNewNodeTag() {
			return __nativeAnimatedNodeTagCount++;
		}

		function generateNewAnimationId() {
			return __nativeAnimationIdCount++;
		}

		function assertNativeAnimatedModule() {
			invariant(NativeAnimatedModule, 'Native animated module is not available');
		}

		module.exports = {
			API: API,
			validateProps: validateProps,
			validateStyles: validateStyles,
			validateTransform: validateTransform,
			validateInterpolation: validateInterpolation,
			generateNewNodeTag: generateNewNodeTag,
			generateNewAnimationId: generateNewAnimationId,
			assertNativeAnimatedModule: assertNativeAnimatedModule,
			get nativeEventEmitter() {
				if (!nativeEventEmitter) {
					nativeEventEmitter = new NativeEventEmitter(NativeAnimatedModule);
				}
				return nativeEventEmitter;
			} };
	}, // Libraries/Animated/src/Easing.js
	function (__inner_require__, exports, module) {
		var _ease = void 0;var Easing = function () {
			function Easing() {
				babelHelpers.classCallCheck(this, Easing);
			}babelHelpers.createClass(Easing, null, [{ key: 'step0', value: function step0(n) {
					return n > 0 ? 1 : 0;
				} }, { key: 'step1', value: function step1(n) {
					return n >= 1 ? 1 : 0;
				} }, { key: 'linear', value: function linear(t) {
					return t;
				} }, { key: 'ease', value: function ease(t) {
					if (!_ease) {
						_ease = Easing.bezier(0.42, 0, 1, 1);
					}
					return _ease(t);
				} }, { key: 'quad', value: function quad(t) {
					return t * t;
				} }, { key: 'cubic', value: function cubic(t) {
					return t * t * t;
				} }, { key: 'poly', value: function poly(n) {
					return function (t) {
						return Math.pow(t, n);
					};
				} }, { key: 'sin', value: function sin(t) {
					return 1 - Math.cos(t * Math.PI / 2);
				} }, { key: 'circle', value: function circle(t) {
					return 1 - Math.sqrt(1 - t * t);
				} }, { key: 'exp', value: function exp(t) {
					return Math.pow(2, 10 * (t - 1));
				} }, { key: 'elastic', value: function elastic() {
					var bounciness = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
					var p = bounciness * Math.PI;
					return function (t) {
						return 1 - Math.pow(Math.cos(t * Math.PI / 2), 3) * Math.cos(t * p);
					};
				} }, { key: 'back', value: function back(s) {
					if (s === undefined) {
						s = 1.70158;
					}
					return function (t) {
						return t * t * ((s + 1) * t - s);
					};
				} }, { key: 'bounce', value: function bounce(t) {
					if (t < 1 / 2.75) {
						return 7.5625 * t * t;
					}

					if (t < 2 / 2.75) {
						t -= 1.5 / 2.75;
						return 7.5625 * t * t + 0.75;
					}

					if (t < 2.5 / 2.75) {
						t -= 2.25 / 2.75;
						return 7.5625 * t * t + 0.9375;
					}

					t -= 2.625 / 2.75;
					return 7.5625 * t * t + 0.984375;
				} }, { key: 'bezier', value: function bezier(x1, y1, x2, y2) {
					var _bezier = __inner_require__(21 /*Libraries/Animated/src/bezier.js*/);
					return _bezier(x1, y1, x2, y2);
				} }, { key: 'in', value: function _in(easing) {
					return easing;
				} }, { key: 'out', value: function out(easing) {
					return function (t) {
						return 1 - easing(1 - t);
					};
				} }, { key: 'inOut', value: function inOut(easing) {
					return function (t) {
						if (t < 0.5) {
							return easing(t * 2) / 2;
						}
						return 1 - easing((1 - t) * 2) / 2;
					};
				} }]);return Easing;
		}();

		module.exports = Easing;
	}, // Libraries/Animated/src/bezier.js
	function (__inner_require__, exports, module) {
		var NEWTON_ITERATIONS = 4;
		var NEWTON_MIN_SLOPE = 0.001;
		var SUBDIVISION_PRECISION = 0.0000001;
		var SUBDIVISION_MAX_ITERATIONS = 10;

		var kSplineTableSize = 11;
		var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

		var float32ArraySupported = typeof Float32Array === 'function';

		function A(aA1, aA2) {
			return 1.0 - 3.0 * aA2 + 3.0 * aA1;
		}
		function B(aA1, aA2) {
			return 3.0 * aA2 - 6.0 * aA1;
		}
		function C(aA1) {
			return 3.0 * aA1;
		}

		function calcBezier(aT, aA1, aA2) {
			return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
		}

		function getSlope(aT, aA1, aA2) {
			return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
		}

		function binarySubdivide(aX, aA, aB, mX1, mX2) {
			var currentX,
			    currentT,
			    i = 0;
			do {
				currentT = aA + (aB - aA) / 2.0;
				currentX = calcBezier(currentT, mX1, mX2) - aX;
				if (currentX > 0.0) {
					aB = currentT;
				} else {
					aA = currentT;
				}
			} while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
			return currentT;
		}

		function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
			for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
				var currentSlope = getSlope(aGuessT, mX1, mX2);
				if (currentSlope === 0.0) {
					return aGuessT;
				}
				var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
				aGuessT -= currentX / currentSlope;
			}
			return aGuessT;
		}

		module.exports = function bezier(mX1, mY1, mX2, mY2) {
			if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
				throw new Error('bezier x values must be in [0, 1] range');
			}

			var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
			if (mX1 !== mY1 || mX2 !== mY2) {
				for (var i = 0; i < kSplineTableSize; ++i) {
					sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
				}
			}

			function getTForX(aX) {
				var intervalStart = 0.0;
				var currentSample = 1;
				var lastSample = kSplineTableSize - 1;

				for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
					intervalStart += kSampleStepSize;
				}
				--currentSample;

				var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
				var guessForT = intervalStart + dist * kSampleStepSize;

				var initialSlope = getSlope(guessForT, mX1, mX2);
				if (initialSlope >= NEWTON_MIN_SLOPE) {
					return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
				} else if (initialSlope === 0.0) {
					return guessForT;
				} else {
					return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
				}
			}

			return function BezierEasing(x) {
				if (mX1 === mY1 && mX2 === mY2) {
					return x;
				}

				if (x === 0) {
					return 0;
				}
				if (x === 1) {
					return 1;
				}
				return calcBezier(getTForX(x), mY1, mY2);
			};
		};
	}, // Libraries/Image/Image.ios.js
	function (__inner_require__, exports, module) {
		var EdgeInsetsPropType = require('react-native@0.37/Libraries/StyleSheet/EdgeInsetsPropType.js');
		var ImageResizeMode = require('react-native@0.37/Libraries/Image/ImageResizeMode.js');
		var ImageSourcePropType = __inner_require__(23 /*Libraries/Image/ImageSourcePropType.js*/);
		var ImageStylePropTypes = require('react-native@0.37/Libraries/Image/ImageStylePropTypes.js');
		var NativeMethodsMixin = require('react@15.3/lib/NativeMethodsMixin.js');
		var NativeModules = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js');
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var ReactNativeViewAttributes = require('react-native@0.37/Libraries/Components/View/ReactNativeViewAttributes.js');
		var StyleSheet = require('react-native@0.37/Libraries/StyleSheet/StyleSheet.js');
		var StyleSheetPropType = require('react-native@0.37/Libraries/StyleSheet/StyleSheetPropType.js');

		var flattenStyle = require('react-native@0.37/Libraries/StyleSheet/flattenStyle.js');
		var requireNativeComponent = require('react-native@0.37/Libraries/ReactNative/requireNativeComponent.js');
		var resolveAssetSource = require('react-native@0.37/Libraries/Image/resolveAssetSource.js');

		var PropTypes = React.PropTypes;

		var ImageViewManager = NativeModules.ImageViewManager;

		var Image = React.createClass({ displayName: 'Image',
			propTypes: {

				style: StyleSheetPropType(ImageStylePropTypes),

				source: ImageSourcePropType,

				defaultSource: PropTypes.oneOfType([PropTypes.shape({
					uri: PropTypes.string,
					width: PropTypes.number,
					height: PropTypes.number,
					scale: PropTypes.number }), PropTypes.number]),

				accessible: PropTypes.bool,

				accessibilityLabel: PropTypes.string,

				blurRadius: PropTypes.number,

				capInsets: EdgeInsetsPropType,

				resizeMethod: PropTypes.oneOf(['auto', 'resize', 'scale']),

				resizeMode: PropTypes.oneOf(['cover', 'contain', 'stretch', 'repeat', 'center']),

				testID: PropTypes.string,

				onLayout: PropTypes.func,

				onLoadStart: PropTypes.func,

				onProgress: PropTypes.func,

				onError: PropTypes.func,

				onPartialLoad: PropTypes.func,

				onLoad: PropTypes.func,

				onLoadEnd: PropTypes.func },

			statics: {
				resizeMode: ImageResizeMode,

				getSize: function getSize(uri, success, failure) {
					ImageViewManager.getSize(uri, success, failure || function () {
						console.warn('Failed to get size for image: ' + uri);
					});
				},

				prefetch: function prefetch(url) {
					return ImageViewManager.prefetchImage(url);
				} },

			mixins: [NativeMethodsMixin],

			viewConfig: {
				uiViewClassName: 'UIView',
				validAttributes: ReactNativeViewAttributes.UIView },

			render: function render() {
				var source = resolveAssetSource(this.props.source) || { uri: undefined, width: undefined, height: undefined };

				var sources = void 0;
				var style = void 0;
				if (Array.isArray(source)) {
					style = flattenStyle([styles.base, this.props.style]) || {};
					sources = source;
				} else {
					var _width = source.width,
					    _height = source.height,
					    uri = source.uri;
					style = flattenStyle([{ width: _width, height: _height }, styles.base, this.props.style]) || {};
					sources = [source];

					if (uri === '') {
						console.warn('source.uri should not be an empty string');
					}
				}

				var resizeMode = this.props.resizeMode || (style || {}).resizeMode || 'cover';
				var tintColor = (style || {}).tintColor;

				if (this.props.src) {
					console.warn('The <Image> component requires a `source` property rather than `src`.');
				}

				return React.createElement(RCTImageView, babelHelpers.extends({}, this.props, {
					style: style,
					resizeMode: resizeMode,
					tintColor: tintColor,
					source: sources }));
			} });

		var styles = StyleSheet.create({
			base: {
				overflow: 'hidden' } });

		var RCTImageView = requireNativeComponent('RCTImageView', Image);

		module.exports = Image;
	}, // Libraries/Image/ImageSourcePropType.js
	function (__inner_require__, exports, module) {
		var _require = require('react-native@0.37/Libraries/react-native/React.js'),
		    PropTypes = _require.PropTypes;

		var ImageURISourcePropType = PropTypes.shape({

			uri: PropTypes.string,

			bundle: PropTypes.string,

			method: PropTypes.string,

			headers: PropTypes.objectOf(PropTypes.string),

			body: PropTypes.string,

			width: PropTypes.number,
			height: PropTypes.number,

			scale: PropTypes.number });

		var ImageSourcePropType = PropTypes.oneOfType([ImageURISourcePropType, PropTypes.number, PropTypes.arrayOf(ImageURISourcePropType)]);

		module.exports = ImageSourcePropType;
	}, // Libraries/Components/ScrollView/ScrollView.js
	function (__inner_require__, exports, module) {
		var ColorPropType = require('react-native@0.37/Libraries/StyleSheet/ColorPropType.js');
		var EdgeInsetsPropType = require('react-native@0.37/Libraries/StyleSheet/EdgeInsetsPropType.js');
		var Platform = require('react-native@0.37/Libraries/Utilities/Platform.ios.js');
		var PointPropType = __inner_require__(25 /*Libraries/StyleSheet/PointPropType.js*/);
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var ReactNative = __inner_require__(26 /*Libraries/react-native/ReactNative.js*/);
		var ScrollResponder = __inner_require__(27 /*Libraries/Components/ScrollResponder.js*/);
		var StyleSheet = require('react-native@0.37/Libraries/StyleSheet/StyleSheet.js');
		var StyleSheetPropType = require('react-native@0.37/Libraries/StyleSheet/StyleSheetPropType.js');
		var View = require('react-native@0.37/Libraries/Components/View/View.js');
		var ViewStylePropTypes = require('react-native@0.37/Libraries/Components/View/ViewStylePropTypes.js');

		var dismissKeyboard = require('react-native@0.37/Libraries/Utilities/dismissKeyboard.js');
		var flattenStyle = require('react-native@0.37/Libraries/StyleSheet/flattenStyle.js');
		var invariant = require('fbjs@0.8/lib/invariant.js');
		var processDecelerationRate = __inner_require__(29 /*Libraries/Components/ScrollView/processDecelerationRate.js*/);
		var PropTypes = React.PropTypes;
		var requireNativeComponent = require('react-native@0.37/Libraries/ReactNative/requireNativeComponent.js');

		var ScrollView = React.createClass({ displayName: 'ScrollView',
			propTypes: babelHelpers.extends({}, View.propTypes, {

				automaticallyAdjustContentInsets: PropTypes.bool,

				contentInset: EdgeInsetsPropType,

				contentOffset: PointPropType,

				bounces: PropTypes.bool,

				bouncesZoom: PropTypes.bool,

				alwaysBounceHorizontal: PropTypes.bool,

				alwaysBounceVertical: PropTypes.bool,

				centerContent: PropTypes.bool,

				contentContainerStyle: StyleSheetPropType(ViewStylePropTypes),

				decelerationRate: PropTypes.oneOfType([PropTypes.oneOf(['fast', 'normal']), PropTypes.number]),

				horizontal: PropTypes.bool,

				indicatorStyle: PropTypes.oneOf(['default', 'black', 'white']),

				directionalLockEnabled: PropTypes.bool,

				canCancelContentTouches: PropTypes.bool,

				keyboardDismissMode: PropTypes.oneOf(['none', 'interactive', 'on-drag']),

				keyboardShouldPersistTaps: PropTypes.bool,

				maximumZoomScale: PropTypes.number,

				minimumZoomScale: PropTypes.number,

				onScroll: PropTypes.func,

				onScrollAnimationEnd: PropTypes.func,

				onContentSizeChange: PropTypes.func,

				pagingEnabled: PropTypes.bool,

				scrollEnabled: PropTypes.bool,

				scrollEventThrottle: PropTypes.number,

				scrollIndicatorInsets: EdgeInsetsPropType,

				scrollsToTop: PropTypes.bool,

				showsHorizontalScrollIndicator: PropTypes.bool,

				showsVerticalScrollIndicator: PropTypes.bool,

				stickyHeaderIndices: PropTypes.arrayOf(PropTypes.number),
				style: StyleSheetPropType(ViewStylePropTypes),

				snapToInterval: PropTypes.number,

				snapToAlignment: PropTypes.oneOf(['start', 'center', 'end']),

				removeClippedSubviews: PropTypes.bool,

				zoomScale: PropTypes.number,

				refreshControl: PropTypes.element,

				endFillColor: ColorPropType,

				scrollPerfTag: PropTypes.string }),

			mixins: [ScrollResponder.Mixin],

			getInitialState: function getInitialState() {
				return this.scrollResponderMixinGetInitialState();
			},

			setNativeProps: function setNativeProps(props) {
				this._scrollViewRef && this._scrollViewRef.setNativeProps(props);
			},

			getScrollResponder: function getScrollResponder() {
				return this;
			},

			getScrollableNode: function getScrollableNode() {
				return ReactNative.findNodeHandle(this._scrollViewRef);
			},

			getInnerViewNode: function getInnerViewNode() {
				return ReactNative.findNodeHandle(this._innerViewRef);
			},

			scrollTo: function scrollTo(y, x, animated) {
				if (typeof y === 'number') {
					console.warn('`scrollTo(y, x, animated)` is deprecated. Use `scrollTo({x: 5, y: 5, animated: true})` instead.');
				} else {
					var _ref = y || {};x = _ref.x;y = _ref.y;animated = _ref.animated;
				}
				this.getScrollResponder().scrollResponderScrollTo({ x: x || 0, y: y || 0, animated: animated !== false });
			},

			scrollWithoutAnimationTo: function scrollWithoutAnimationTo() {
				var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
				console.warn('`scrollWithoutAnimationTo` is deprecated. Use `scrollTo` instead');
				this.scrollTo({ x: x, y: y, animated: false });
			},

			_handleScroll: function _handleScroll(e) {
				if (Platform.OS === 'android') {
					if (this.props.keyboardDismissMode === 'on-drag') {
						dismissKeyboard();
					}
				}
				this.scrollResponderHandleScroll(e);
			},

			_handleContentOnLayout: function _handleContentOnLayout(e) {
				var _e$nativeEvent$layout = e.nativeEvent.layout,
				    width = _e$nativeEvent$layout.width,
				    height = _e$nativeEvent$layout.height;
				this.props.onContentSizeChange && this.props.onContentSizeChange(width, height);
			},

			_scrollViewRef: null,
			_setScrollViewRef: function _setScrollViewRef(ref) {
				this._scrollViewRef = ref;
			},

			_innerViewRef: null,
			_setInnerViewRef: function _setInnerViewRef(ref) {
				this._innerViewRef = ref;
			},

			render: function render() {
				var contentContainerStyle = [this.props.horizontal && styles.contentContainerHorizontal, this.props.contentContainerStyle];

				var style = void 0,
				    childLayoutProps = void 0;
				if (__DEV__ && this.props.style) {
					style = flattenStyle(this.props.style);
					childLayoutProps = ['alignItems', 'justifyContent'].filter(function (prop) {
						return style && style[prop] !== undefined;
					});
					invariant(childLayoutProps.length === 0, 'ScrollView child layout (' + JSON.stringify(childLayoutProps) + ') must be applied through the contentContainerStyle prop.');
				}

				var contentSizeChangeProps = {};
				if (this.props.onContentSizeChange) {
					contentSizeChangeProps = {
						onLayout: this._handleContentOnLayout };
				}

				var contentContainer = React.createElement(View, babelHelpers.extends({}, contentSizeChangeProps, {
					ref: this._setInnerViewRef,
					style: contentContainerStyle,
					removeClippedSubviews: this.props.removeClippedSubviews,
					collapsable: false }), this.props.children);

				var alwaysBounceHorizontal = this.props.alwaysBounceHorizontal !== undefined ? this.props.alwaysBounceHorizontal : this.props.horizontal;

				var alwaysBounceVertical = this.props.alwaysBounceVertical !== undefined ? this.props.alwaysBounceVertical : !this.props.horizontal;

				var baseStyle = this.props.horizontal ? styles.baseHorizontal : styles.baseVertical;
				var props = babelHelpers.extends({}, this.props, {
					alwaysBounceHorizontal: alwaysBounceHorizontal,
					alwaysBounceVertical: alwaysBounceVertical,
					style: [baseStyle, this.props.style],

					onContentSizeChange: null,
					onTouchStart: this.scrollResponderHandleTouchStart,
					onTouchMove: this.scrollResponderHandleTouchMove,
					onTouchEnd: this.scrollResponderHandleTouchEnd,
					onScrollBeginDrag: this.scrollResponderHandleScrollBeginDrag,
					onScrollEndDrag: this.scrollResponderHandleScrollEndDrag,
					onMomentumScrollBegin: this.scrollResponderHandleMomentumScrollBegin,
					onMomentumScrollEnd: this.scrollResponderHandleMomentumScrollEnd,
					onStartShouldSetResponder: this.scrollResponderHandleStartShouldSetResponder,
					onStartShouldSetResponderCapture: this.scrollResponderHandleStartShouldSetResponderCapture,
					onScrollShouldSetResponder: this.scrollResponderHandleScrollShouldSetResponder,
					onScroll: this._handleScroll,
					onResponderGrant: this.scrollResponderHandleResponderGrant,
					onResponderTerminationRequest: this.scrollResponderHandleTerminationRequest,
					onResponderTerminate: this.scrollResponderHandleTerminate,
					onResponderRelease: this.scrollResponderHandleResponderRelease,
					onResponderReject: this.scrollResponderHandleResponderReject,
					sendMomentumEvents: this.props.onMomentumScrollBegin || this.props.onMomentumScrollEnd ? true : false });var decelerationRate = this.props.decelerationRate;
				if (decelerationRate) {
					props.decelerationRate = processDecelerationRate(decelerationRate);
				}

				var ScrollViewClass = void 0;
				if (Platform.OS === 'ios') {
					ScrollViewClass = RCTScrollView;
				} else if (Platform.OS === 'android') {
					if (this.props.horizontal) {
						ScrollViewClass = AndroidHorizontalScrollView;
					} else {
						ScrollViewClass = AndroidScrollView;
					}
				}
				invariant(ScrollViewClass !== undefined, 'ScrollViewClass must not be undefined');

				var refreshControl = this.props.refreshControl;
				if (refreshControl) {
					if (Platform.OS === 'ios') {

						return React.createElement(ScrollViewClass, babelHelpers.extends({}, props, { ref: this._setScrollViewRef }), refreshControl, contentContainer);
					} else if (Platform.OS === 'android') {

						return React.cloneElement(refreshControl, { style: props.style }, React.createElement(ScrollViewClass, babelHelpers.extends({}, props, { ref: this._setScrollViewRef }), contentContainer));
					}
				}
				return React.createElement(ScrollViewClass, babelHelpers.extends({}, props, { ref: this._setScrollViewRef }), contentContainer);
			} });

		var styles = StyleSheet.create({
			baseVertical: {
				flexGrow: 1,
				flexShrink: 1,
				flexDirection: 'column',
				overflow: 'scroll' },

			baseHorizontal: {
				flexGrow: 1,
				flexShrink: 1,
				flexDirection: 'row',
				overflow: 'scroll' },

			contentContainerHorizontal: {
				flexDirection: 'row' } });

		var nativeOnlyProps = void 0,
		    AndroidScrollView = void 0,
		    AndroidHorizontalScrollView = void 0,
		    RCTScrollView = void 0;
		if (Platform.OS === 'android') {
			nativeOnlyProps = {
				nativeOnly: {
					sendMomentumEvents: true } };

			AndroidScrollView = requireNativeComponent('RCTScrollView', ScrollView, nativeOnlyProps);
			AndroidHorizontalScrollView = requireNativeComponent('AndroidHorizontalScrollView', ScrollView, nativeOnlyProps);
		} else if (Platform.OS === 'ios') {
			nativeOnlyProps = {
				nativeOnly: {
					onMomentumScrollBegin: true,
					onMomentumScrollEnd: true,
					onScrollBeginDrag: true,
					onScrollEndDrag: true } };

			RCTScrollView = requireNativeComponent('RCTScrollView', ScrollView, nativeOnlyProps);
		}

		module.exports = ScrollView;
	}, // Libraries/StyleSheet/PointPropType.js
	function (__inner_require__, exports, module) {
		var PropTypes = require('react-native@0.37/Libraries/react-native/React.js').PropTypes;

		var createStrictShapeTypeChecker = require('react-native@0.37/Libraries/Utilities/createStrictShapeTypeChecker.js');

		var PointPropType = createStrictShapeTypeChecker({
			x: PropTypes.number,
			y: PropTypes.number });

		module.exports = PointPropType;
	}, // Libraries/react-native/ReactNative.js
	function (__inner_require__, exports, module) {
		module.exports = require('react@15.3/lib/ReactNative.js');
	}, // Libraries/Components/ScrollResponder.js
	function (__inner_require__, exports, module) {
		var Dimensions = require('react-native@0.37/Libraries/Utilities/Dimensions.js');
		var Platform = require('react-native@0.37/Libraries/Utilities/Platform.ios.js');
		var Keyboard = require('react-native@0.37/Libraries/Components/Keyboard/Keyboard.js');
		var ReactNative = __inner_require__(26 /*Libraries/react-native/ReactNative.js*/);
		var Subscribable = __inner_require__(28 /*Libraries/Components/Subscribable.js*/);
		var TextInputState = require('react-native@0.37/Libraries/Components/TextInput/TextInputState.js');
		var UIManager = require('react-native@0.37/Libraries/ReactNative/UIManager.js');var _require = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js'),
		    ScrollViewManager = _require.ScrollViewManager;

		var invariant = require('fbjs@0.8/lib/invariant.js');

		var IS_ANIMATING_TOUCH_START_THRESHOLD_MS = 16;

		var ScrollResponderMixin = {
			mixins: [Subscribable.Mixin],
			scrollResponderMixinGetInitialState: function scrollResponderMixinGetInitialState() {
				return {
					isTouching: false,
					lastMomentumScrollBeginTime: 0,
					lastMomentumScrollEndTime: 0,

					observedScrollSinceBecomingResponder: false,
					becameResponderWhileAnimating: false };
			},

			scrollResponderHandleScrollShouldSetResponder: function scrollResponderHandleScrollShouldSetResponder() {
				return this.state.isTouching;
			},

			scrollResponderHandleStartShouldSetResponder: function scrollResponderHandleStartShouldSetResponder() {
				return false;
			},

			scrollResponderHandleStartShouldSetResponderCapture: function scrollResponderHandleStartShouldSetResponderCapture(e) {

				var currentlyFocusedTextInput = TextInputState.currentlyFocusedField();
				if (!this.props.keyboardShouldPersistTaps && currentlyFocusedTextInput != null && e.target !== currentlyFocusedTextInput) {
					return true;
				}
				return this.scrollResponderIsAnimating();
			},

			scrollResponderHandleResponderReject: function scrollResponderHandleResponderReject() {},

			scrollResponderHandleTerminationRequest: function scrollResponderHandleTerminationRequest() {
				return !this.state.observedScrollSinceBecomingResponder;
			},

			scrollResponderHandleTouchEnd: function scrollResponderHandleTouchEnd(e) {
				var nativeEvent = e.nativeEvent;
				this.state.isTouching = nativeEvent.touches.length !== 0;
				this.props.onTouchEnd && this.props.onTouchEnd(e);
			},

			scrollResponderHandleResponderRelease: function scrollResponderHandleResponderRelease(e) {
				this.props.onResponderRelease && this.props.onResponderRelease(e);

				var currentlyFocusedTextInput = TextInputState.currentlyFocusedField();
				if (!this.props.keyboardShouldPersistTaps && currentlyFocusedTextInput != null && e.target !== currentlyFocusedTextInput && !this.state.observedScrollSinceBecomingResponder && !this.state.becameResponderWhileAnimating) {
					this.props.onScrollResponderKeyboardDismissed && this.props.onScrollResponderKeyboardDismissed(e);
					TextInputState.blurTextInput(currentlyFocusedTextInput);
				}
			},

			scrollResponderHandleScroll: function scrollResponderHandleScroll(e) {
				this.state.observedScrollSinceBecomingResponder = true;
				this.props.onScroll && this.props.onScroll(e);
			},

			scrollResponderHandleResponderGrant: function scrollResponderHandleResponderGrant(e) {
				this.state.observedScrollSinceBecomingResponder = false;
				this.props.onResponderGrant && this.props.onResponderGrant(e);
				this.state.becameResponderWhileAnimating = this.scrollResponderIsAnimating();
			},

			scrollResponderHandleScrollBeginDrag: function scrollResponderHandleScrollBeginDrag(e) {
				this.props.onScrollBeginDrag && this.props.onScrollBeginDrag(e);
			},

			scrollResponderHandleScrollEndDrag: function scrollResponderHandleScrollEndDrag(e) {
				this.props.onScrollEndDrag && this.props.onScrollEndDrag(e);
			},

			scrollResponderHandleMomentumScrollBegin: function scrollResponderHandleMomentumScrollBegin(e) {
				this.state.lastMomentumScrollBeginTime = Date.now();
				this.props.onMomentumScrollBegin && this.props.onMomentumScrollBegin(e);
			},

			scrollResponderHandleMomentumScrollEnd: function scrollResponderHandleMomentumScrollEnd(e) {
				this.state.lastMomentumScrollEndTime = Date.now();
				this.props.onMomentumScrollEnd && this.props.onMomentumScrollEnd(e);
			},

			scrollResponderHandleTouchStart: function scrollResponderHandleTouchStart(e) {
				this.state.isTouching = true;
				this.props.onTouchStart && this.props.onTouchStart(e);
			},

			scrollResponderHandleTouchMove: function scrollResponderHandleTouchMove(e) {
				this.props.onTouchMove && this.props.onTouchMove(e);
			},

			scrollResponderIsAnimating: function scrollResponderIsAnimating() {
				var now = Date.now();
				var timeSinceLastMomentumScrollEnd = now - this.state.lastMomentumScrollEndTime;
				var isAnimating = timeSinceLastMomentumScrollEnd < IS_ANIMATING_TOUCH_START_THRESHOLD_MS || this.state.lastMomentumScrollEndTime < this.state.lastMomentumScrollBeginTime;
				return isAnimating;
			},

			scrollResponderGetScrollableNode: function scrollResponderGetScrollableNode() {
				return this.getScrollableNode ? this.getScrollableNode() : ReactNative.findNodeHandle(this);
			},

			scrollResponderScrollTo: function scrollResponderScrollTo(x, y, animated) {
				if (typeof x === 'number') {
					console.warn('`scrollResponderScrollTo(x, y, animated)` is deprecated. Use `scrollResponderScrollTo({x: 5, y: 5, animated: true})` instead.');
				} else {
					var _ref = x || {};x = _ref.x;y = _ref.y;animated = _ref.animated;
				}
				UIManager.dispatchViewManagerCommand(this.scrollResponderGetScrollableNode(), UIManager.RCTScrollView.Commands.scrollTo, [x || 0, y || 0, animated !== false]);
			},

			scrollResponderScrollWithoutAnimationTo: function scrollResponderScrollWithoutAnimationTo(offsetX, offsetY) {
				console.warn('`scrollResponderScrollWithoutAnimationTo` is deprecated. Use `scrollResponderScrollTo` instead');
				this.scrollResponderScrollTo({ x: offsetX, y: offsetY, animated: false });
			},

			scrollResponderZoomTo: function scrollResponderZoomTo(rect, animated) {
				if (Platform.OS === 'android') {
					invariant('zoomToRect is not implemented');
				} else {
					if ('animated' in rect) {
						var animated = rect.animated,
						    rect = babelHelpers.objectWithoutProperties(rect, ['animated']);
					} else if (typeof animated !== 'undefined') {
						console.warn('`scrollResponderZoomTo` `animated` argument is deprecated. Use `options.animated` instead');
					}
					ScrollViewManager.zoomToRect(this.scrollResponderGetScrollableNode(), rect, animated !== false);
				}
			},

			scrollResponderScrollNativeHandleToKeyboard: function scrollResponderScrollNativeHandleToKeyboard(nodeHandle, additionalOffset, preventNegativeScrollOffset) {
				this.additionalScrollOffset = additionalOffset || 0;
				this.preventNegativeScrollOffset = !!preventNegativeScrollOffset;
				UIManager.measureLayout(nodeHandle, ReactNative.findNodeHandle(this.getInnerViewNode()), this.scrollResponderTextInputFocusError, this.scrollResponderInputMeasureAndScrollToKeyboard);
			},

			scrollResponderInputMeasureAndScrollToKeyboard: function scrollResponderInputMeasureAndScrollToKeyboard(left, top, width, height) {
				var keyboardScreenY = Dimensions.get('window').height;
				if (this.keyboardWillOpenTo) {
					keyboardScreenY = this.keyboardWillOpenTo.endCoordinates.screenY;
				}
				var scrollOffsetY = top - keyboardScreenY + height + this.additionalScrollOffset;

				if (this.preventNegativeScrollOffset) {
					scrollOffsetY = Math.max(0, scrollOffsetY);
				}
				this.scrollResponderScrollTo({ x: 0, y: scrollOffsetY, animated: true });

				this.additionalOffset = 0;
				this.preventNegativeScrollOffset = false;
			},

			scrollResponderTextInputFocusError: function scrollResponderTextInputFocusError(e) {
				console.error('Error measuring text field: ', e);
			},

			componentWillMount: function componentWillMount() {
				this.keyboardWillOpenTo = null;
				this.additionalScrollOffset = 0;
				this.addListenerOn(Keyboard, 'keyboardWillShow', this.scrollResponderKeyboardWillShow);
				this.addListenerOn(Keyboard, 'keyboardWillHide', this.scrollResponderKeyboardWillHide);
				this.addListenerOn(Keyboard, 'keyboardDidShow', this.scrollResponderKeyboardDidShow);
				this.addListenerOn(Keyboard, 'keyboardDidHide', this.scrollResponderKeyboardDidHide);
			},

			scrollResponderKeyboardWillShow: function scrollResponderKeyboardWillShow(e) {
				this.keyboardWillOpenTo = e;
				this.props.onKeyboardWillShow && this.props.onKeyboardWillShow(e);
			},

			scrollResponderKeyboardWillHide: function scrollResponderKeyboardWillHide(e) {
				this.keyboardWillOpenTo = null;
				this.props.onKeyboardWillHide && this.props.onKeyboardWillHide(e);
			},

			scrollResponderKeyboardDidShow: function scrollResponderKeyboardDidShow(e) {

				if (e) {
					this.keyboardWillOpenTo = e;
				}
				this.props.onKeyboardDidShow && this.props.onKeyboardDidShow(e);
			},

			scrollResponderKeyboardDidHide: function scrollResponderKeyboardDidHide(e) {
				this.keyboardWillOpenTo = null;
				this.props.onKeyboardDidHide && this.props.onKeyboardDidHide(e);
			} };

		var ScrollResponder = {
			Mixin: ScrollResponderMixin };

		module.exports = ScrollResponder;
	}, // Libraries/Components/Subscribable.js
	function (__inner_require__, exports, module) {
		var Subscribable = {};

		Subscribable.Mixin = {

			componentWillMount: function componentWillMount() {
				this._subscribableSubscriptions = [];
			},

			componentWillUnmount: function componentWillUnmount() {
				this._subscribableSubscriptions.forEach(function (subscription) {
					return subscription.remove();
				});

				this._subscribableSubscriptions = null;
			},

			addListenerOn: function addListenerOn(eventEmitter, eventType, listener, context) {
				this._subscribableSubscriptions.push(eventEmitter.addListener(eventType, listener, context));
			} };

		module.exports = Subscribable;
	}, // Libraries/Components/ScrollView/processDecelerationRate.js
	function (__inner_require__, exports, module) {
		function processDecelerationRate(decelerationRate) {
			if (decelerationRate === 'normal') {
				decelerationRate = 0.998;
			} else if (decelerationRate === 'fast') {
				decelerationRate = 0.99;
			}
			return decelerationRate;
		}

		module.exports = processDecelerationRate;
	}, // Libraries/Components/Touchable/TouchableWithoutFeedback.js
	function (__inner_require__, exports, module) {
		var EdgeInsetsPropType = require('react-native@0.37/Libraries/StyleSheet/EdgeInsetsPropType.js');
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var TimerMixin = require('react-timer-mixin@0.13/TimerMixin.js');
		var Touchable = __inner_require__(6 /*Libraries/Components/Touchable/Touchable.js*/);
		var View = require('react-native@0.37/Libraries/Components/View/View.js');

		var ensurePositiveDelayProps = __inner_require__(31 /*Libraries/Components/Touchable/ensurePositiveDelayProps.js*/);
		var warning = require('fbjs@0.8/lib/warning.js');

		var PRESS_RETENTION_OFFSET = { top: 20, left: 20, right: 20, bottom: 30 };

		var TouchableWithoutFeedback = React.createClass({ displayName: 'TouchableWithoutFeedback',
			mixins: [TimerMixin, Touchable.Mixin],

			propTypes: {
				accessible: React.PropTypes.bool,
				accessibilityComponentType: React.PropTypes.oneOf(View.AccessibilityComponentType),
				accessibilityTraits: React.PropTypes.oneOfType([React.PropTypes.oneOf(View.AccessibilityTraits), React.PropTypes.arrayOf(React.PropTypes.oneOf(View.AccessibilityTraits))]),

				disabled: React.PropTypes.bool,

				onPress: React.PropTypes.func,
				onPressIn: React.PropTypes.func,
				onPressOut: React.PropTypes.func,

				onLayout: React.PropTypes.func,

				onLongPress: React.PropTypes.func,

				delayPressIn: React.PropTypes.number,

				delayPressOut: React.PropTypes.number,

				delayLongPress: React.PropTypes.number,

				pressRetentionOffset: EdgeInsetsPropType,

				hitSlop: EdgeInsetsPropType },

			getInitialState: function getInitialState() {
				return this.touchableGetInitialState();
			},

			componentDidMount: function componentDidMount() {
				ensurePositiveDelayProps(this.props);
			},

			componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
				ensurePositiveDelayProps(nextProps);
			},

			touchableHandlePress: function touchableHandlePress(e) {
				this.props.onPress && this.props.onPress(e);
			},

			touchableHandleActivePressIn: function touchableHandleActivePressIn(e) {
				this.props.onPressIn && this.props.onPressIn(e);
			},

			touchableHandleActivePressOut: function touchableHandleActivePressOut(e) {
				this.props.onPressOut && this.props.onPressOut(e);
			},

			touchableHandleLongPress: function touchableHandleLongPress(e) {
				this.props.onLongPress && this.props.onLongPress(e);
			},

			touchableGetPressRectOffset: function touchableGetPressRectOffset() {
				return this.props.pressRetentionOffset || PRESS_RETENTION_OFFSET;
			},

			touchableGetHitSlop: function touchableGetHitSlop() {
				return this.props.hitSlop;
			},

			touchableGetHighlightDelayMS: function touchableGetHighlightDelayMS() {
				return this.props.delayPressIn || 0;
			},

			touchableGetLongPressDelayMS: function touchableGetLongPressDelayMS() {
				return this.props.delayLongPress === 0 ? 0 : this.props.delayLongPress || 500;
			},

			touchableGetPressOutDelayMS: function touchableGetPressOutDelayMS() {
				return this.props.delayPressOut || 0;
			},

			render: function render() {

				var child = React.Children.only(this.props.children);
				var children = child.props.children;
				warning(!child.type || child.type.displayName !== 'Text', 'TouchableWithoutFeedback does not work well with Text children. Wrap children in a View instead. See ' + (child._owner && child._owner.getName && child._owner.getName() || '<unknown>'));

				if (Touchable.TOUCH_TARGET_DEBUG && child.type && child.type.displayName === 'View') {
					if (!Array.isArray(children)) {
						children = [children];
					}
					children.push(Touchable.renderDebugView({ color: 'red', hitSlop: this.props.hitSlop }));
				}
				var style = Touchable.TOUCH_TARGET_DEBUG && child.type && child.type.displayName === 'Text' ? [child.props.style, { color: 'red' }] : child.props.style;
				return React.cloneElement(child, {
					accessible: this.props.accessible !== false,
					accessibilityLabel: this.props.accessibilityLabel,
					accessibilityComponentType: this.props.accessibilityComponentType,
					accessibilityTraits: this.props.accessibilityTraits,
					testID: this.props.testID,
					onLayout: this.props.onLayout,
					hitSlop: this.props.hitSlop,
					onStartShouldSetResponder: this.touchableHandleStartShouldSetResponder,
					onResponderTerminationRequest: this.touchableHandleResponderTerminationRequest,
					onResponderGrant: this.touchableHandleResponderGrant,
					onResponderMove: this.touchableHandleResponderMove,
					onResponderRelease: this.touchableHandleResponderRelease,
					onResponderTerminate: this.touchableHandleResponderTerminate,
					style: style,
					children: children });
			} });

		module.exports = TouchableWithoutFeedback;
	}, // Libraries/Components/Touchable/ensurePositiveDelayProps.js
	function (__inner_require__, exports, module) {
		var invariant = require('fbjs@0.8/lib/invariant.js');

		var ensurePositiveDelayProps = function ensurePositiveDelayProps(props) {
			invariant(!(props.delayPressIn < 0 || props.delayPressOut < 0 || props.delayLongPress < 0), 'Touchable components cannot have negative delay properties');
		};

		module.exports = ensurePositiveDelayProps;
	}, // Libraries/Components/DatePicker/DatePickerIOS.ios.js
	function (__inner_require__, exports, module) {
		var NativeMethodsMixin = require('react@15.3/lib/NativeMethodsMixin.js');
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var StyleSheet = require('react-native@0.37/Libraries/StyleSheet/StyleSheet.js');
		var View = require('react-native@0.37/Libraries/Components/View/View.js');

		var requireNativeComponent = require('react-native@0.37/Libraries/ReactNative/requireNativeComponent.js');

		var PropTypes = React.PropTypes;

		var DatePickerIOS = React.createClass({ displayName: 'DatePickerIOS',

			_picker: undefined,

			mixins: [NativeMethodsMixin],

			propTypes: babelHelpers.extends({}, View.propTypes, {

				date: PropTypes.instanceOf(Date).isRequired,

				onDateChange: PropTypes.func.isRequired,

				maximumDate: PropTypes.instanceOf(Date),

				minimumDate: PropTypes.instanceOf(Date),

				mode: PropTypes.oneOf(['date', 'time', 'datetime']),

				minuteInterval: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30]),

				timeZoneOffsetInMinutes: PropTypes.number }),

			getDefaultProps: function getDefaultProps() {
				return {
					mode: 'datetime' };
			},

			_onChange: function _onChange(event) {
				var nativeTimeStamp = event.nativeEvent.timestamp;
				this.props.onDateChange && this.props.onDateChange(new Date(nativeTimeStamp));

				this.props.onChange && this.props.onChange(event);

				var propsTimeStamp = this.props.date.getTime();
				if (this._picker && nativeTimeStamp !== propsTimeStamp) {
					this._picker.setNativeProps({
						date: propsTimeStamp });
				}
			},

			render: function render() {
				var _this = this;
				var props = this.props;
				return React.createElement(View, { style: props.style }, React.createElement(RCTDatePickerIOS, {
					ref: function ref(picker) {
						_this._picker = picker;
					},
					style: styles.datePickerIOS,
					date: props.date.getTime(),
					maximumDate: props.maximumDate ? props.maximumDate.getTime() : undefined,

					minimumDate: props.minimumDate ? props.minimumDate.getTime() : undefined,

					mode: props.mode,
					minuteInterval: props.minuteInterval,
					timeZoneOffsetInMinutes: props.timeZoneOffsetInMinutes,
					onChange: this._onChange }));
			} });

		var styles = StyleSheet.create({
			datePickerIOS: {
				height: 216 } });

		var RCTDatePickerIOS = requireNativeComponent('RCTDatePicker', {
			propTypes: babelHelpers.extends({}, DatePickerIOS.propTypes, {
				date: PropTypes.number,
				minimumDate: PropTypes.number,
				maximumDate: PropTypes.number,
				onDateChange: function onDateChange() {
					return null;
				},
				onChange: PropTypes.func }) });

		module.exports = DatePickerIOS;
	}, // Libraries/Components/DrawerAndroid/DrawerLayoutAndroid.ios.js
	function (__inner_require__, exports, module) {
		module.exports = require('react-native@0.37/Libraries/Components/UnimplementedViews/UnimplementedView.js');
	}, // Libraries/Image/ImageEditor.js
	function (__inner_require__, exports, module) {
		var RCTImageEditingManager = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js').ImageEditingManager;var ImageEditor = function () {
			function ImageEditor() {
				babelHelpers.classCallCheck(this, ImageEditor);
			}babelHelpers.createClass(ImageEditor, null, [{ key: 'cropImage', value: function cropImage(uri, cropData, success, failure) {
					RCTImageEditingManager.cropImage(uri, cropData, success, failure);
				} }]);return ImageEditor;
		}();

		module.exports = ImageEditor;
	}, // Libraries/Image/ImageStore.js
	function (__inner_require__, exports, module) {
		var RCTImageStoreManager = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js').ImageStoreManager;var ImageStore = function () {
			function ImageStore() {
				babelHelpers.classCallCheck(this, ImageStore);
			}babelHelpers.createClass(ImageStore, null, [{ key: 'hasImageForTag', value: function hasImageForTag(uri, callback) {
					if (RCTImageStoreManager.hasImageForTag) {
						RCTImageStoreManager.hasImageForTag(uri, callback);
					} else {
						console.warn('hasImageForTag() not implemented');
					}
				} }, { key: 'removeImageForTag', value: function removeImageForTag(uri) {
					if (RCTImageStoreManager.removeImageForTag) {
						RCTImageStoreManager.removeImageForTag(uri);
					} else {
						console.warn('removeImageForTag() not implemented');
					}
				} }, { key: 'addImageFromBase64', value: function addImageFromBase64(base64ImageData, success, failure) {
					RCTImageStoreManager.addImageFromBase64(base64ImageData, success, failure);
				} }, { key: 'getBase64ForTag', value: function getBase64ForTag(uri, success, failure) {
					RCTImageStoreManager.getBase64ForTag(uri, success, failure);
				} }]);return ImageStore;
		}();

		module.exports = ImageStore;
	}, // Libraries/Components/Keyboard/KeyboardAvoidingView.js
	function (__inner_require__, exports, module) {
		var Keyboard = require('react-native@0.37/Libraries/Components/Keyboard/Keyboard.js');
		var LayoutAnimation = __inner_require__(37 /*Libraries/LayoutAnimation/LayoutAnimation.js*/);
		var Platform = require('react-native@0.37/Libraries/Utilities/Platform.ios.js');
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var TimerMixin = require('react-timer-mixin@0.13/TimerMixin.js');
		var View = require('react-native@0.37/Libraries/Components/View/View.js');

		var PropTypes = React.PropTypes;

		var viewRef = 'VIEW';

		var KeyboardAvoidingView = React.createClass({ displayName: 'KeyboardAvoidingView',
			mixins: [TimerMixin],

			propTypes: babelHelpers.extends({}, View.propTypes, {
				behavior: PropTypes.oneOf(['height', 'position', 'padding']),

				contentContainerStyle: View.propTypes.style,

				keyboardVerticalOffset: PropTypes.number.isRequired }),

			getDefaultProps: function getDefaultProps() {
				return {
					keyboardVerticalOffset: 0 };
			},

			getInitialState: function getInitialState() {
				return {
					bottom: 0 };
			},

			subscriptions: [],
			frame: null,

			relativeKeyboardHeight: function relativeKeyboardHeight(keyboardFrame) {
				var frame = this.frame;
				if (!frame || !keyboardFrame) {
					return 0;
				}

				var y1 = Math.max(frame.y, keyboardFrame.screenY - this.props.keyboardVerticalOffset);
				var y2 = Math.min(frame.y + frame.height, keyboardFrame.screenY + keyboardFrame.height - this.props.keyboardVerticalOffset);
				return Math.max(y2 - y1, 0);
			},

			onKeyboardChange: function onKeyboardChange(event) {
				if (!event) {
					this.setState({ bottom: 0 });
					return;
				}var duration = event.duration,
				    easing = event.easing,
				    endCoordinates = event.endCoordinates;
				var height = this.relativeKeyboardHeight(endCoordinates);

				if (duration && easing) {
					LayoutAnimation.configureNext({
						duration: duration,
						update: {
							duration: duration,
							type: LayoutAnimation.Types[easing] || 'keyboard' } });
				}
				this.setState({ bottom: height });
			},

			onLayout: function onLayout(event) {
				this.frame = event.nativeEvent.layout;
			},

			componentWillUpdate: function componentWillUpdate(nextProps, nextState, nextContext) {
				if (nextState.bottom === this.state.bottom && this.props.behavior === 'height' && nextProps.behavior === 'height') {

					nextState.bottom = 0;
				}
			},

			componentWillMount: function componentWillMount() {
				if (Platform.OS === 'ios') {
					this.subscriptions = [Keyboard.addListener('keyboardWillChangeFrame', this.onKeyboardChange)];
				} else {
					this.subscriptions = [Keyboard.addListener('keyboardDidHide', this.onKeyboardChange), Keyboard.addListener('keyboardDidShow', this.onKeyboardChange)];
				}
			},

			componentWillUnmount: function componentWillUnmount() {
				this.subscriptions.forEach(function (sub) {
					return sub.remove();
				});
			},

			render: function render() {
				var _props = this.props,
				    behavior = _props.behavior,
				    children = _props.children,
				    style = _props.style,
				    props = babelHelpers.objectWithoutProperties(_props, ['behavior', 'children', 'style']);

				switch (behavior) {
					case 'height':
						var heightStyle = void 0;
						if (this.frame) {

							heightStyle = { height: this.frame.height - this.state.bottom, flex: 0 };
						}
						return React.createElement(View, babelHelpers.extends({ ref: viewRef, style: [style, heightStyle], onLayout: this.onLayout }, props), children);

					case 'position':
						var positionStyle = { bottom: this.state.bottom };var contentContainerStyle = this.props.contentContainerStyle;

						return React.createElement(View, babelHelpers.extends({ ref: viewRef, style: style, onLayout: this.onLayout }, props), React.createElement(View, { style: [contentContainerStyle, positionStyle] }, children));

					case 'padding':
						var paddingStyle = { paddingBottom: this.state.bottom };
						return React.createElement(View, babelHelpers.extends({ ref: viewRef, style: [style, paddingStyle], onLayout: this.onLayout }, props), children);

					default:
						return React.createElement(View, babelHelpers.extends({ ref: viewRef, onLayout: this.onLayout, style: style }, props), children);}
			} });

		module.exports = KeyboardAvoidingView;
	}, // Libraries/LayoutAnimation/LayoutAnimation.js
	function (__inner_require__, exports, module) {
		var _require = require('react-native@0.37/Libraries/react-native/React.js'),
		    PropTypes = _require.PropTypes;
		var UIManager = require('react-native@0.37/Libraries/ReactNative/UIManager.js');

		var createStrictShapeTypeChecker = require('react-native@0.37/Libraries/Utilities/createStrictShapeTypeChecker.js');
		var keyMirror = require('fbjs@0.8/lib/keyMirror.js');

		var TypesEnum = {
			spring: true,
			linear: true,
			easeInEaseOut: true,
			easeIn: true,
			easeOut: true,
			keyboard: true };

		var Types = keyMirror(TypesEnum);

		var PropertiesEnum = {
			opacity: true,
			scaleXY: true };

		var Properties = keyMirror(PropertiesEnum);

		var animChecker = createStrictShapeTypeChecker({
			duration: PropTypes.number,
			delay: PropTypes.number,
			springDamping: PropTypes.number,
			initialVelocity: PropTypes.number,
			type: PropTypes.oneOf(Object.keys(Types)).isRequired,
			property: PropTypes.oneOf(Object.keys(Properties)) });

		var configChecker = createStrictShapeTypeChecker({
			duration: PropTypes.number.isRequired,
			create: animChecker,
			update: animChecker,
			delete: animChecker });

		function configureNext(config, onAnimationDidEnd) {
			configChecker({ config: config }, 'config', 'LayoutAnimation.configureNext');
			UIManager.configureNextLayoutAnimation(config, onAnimationDidEnd || function () {}, function () {});
		}

		function create(duration, type, creationProp) {
			return {
				duration: duration,
				create: {
					type: type,
					property: creationProp },

				update: {
					type: type },

				delete: {
					type: type,
					property: creationProp } };
		}

		var Presets = {
			easeInEaseOut: create(300, Types.easeInEaseOut, Properties.opacity),

			linear: create(500, Types.linear, Properties.opacity),

			spring: {
				duration: 700,
				create: {
					type: Types.linear,
					property: Properties.opacity },

				update: {
					type: Types.spring,
					springDamping: 0.4 },

				delete: {
					type: Types.linear,
					property: Properties.opacity } } };

		var LayoutAnimation = {

			configureNext: configureNext,

			create: create,
			Types: Types,
			Properties: Properties,
			configChecker: configChecker,
			Presets: Presets,
			easeInEaseOut: configureNext.bind(null, Presets.easeInEaseOut),

			linear: configureNext.bind(null, Presets.linear),

			spring: configureNext.bind(null, Presets.spring) };

		module.exports = LayoutAnimation;
	}, // Libraries/CustomComponents/ListView/ListView.js
	function (__inner_require__, exports, module) {
		var ListViewDataSource = __inner_require__(39 /*Libraries/CustomComponents/ListView/ListViewDataSource.js*/);
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var ReactNative = __inner_require__(26 /*Libraries/react-native/ReactNative.js*/);
		var RCTScrollViewManager = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js').ScrollViewManager;
		var ScrollView = __inner_require__(24 /*Libraries/Components/ScrollView/ScrollView.js*/);
		var ScrollResponder = __inner_require__(27 /*Libraries/Components/ScrollResponder.js*/);
		var StaticRenderer = __inner_require__(41 /*Libraries/Components/StaticRenderer.js*/);
		var TimerMixin = require('react-timer-mixin@0.13/TimerMixin.js');

		var cloneReferencedElement = require('react-clone-referenced-element@1/cloneReferencedElement.js');
		var isEmpty = __inner_require__(40 /*Libraries/vendor/core/isEmpty.js*/);
		var merge = require('react-native@0.37/Libraries/vendor/core/merge.js');

		var PropTypes = React.PropTypes;

		var DEFAULT_PAGE_SIZE = 1;
		var DEFAULT_INITIAL_ROWS = 10;
		var DEFAULT_SCROLL_RENDER_AHEAD = 1000;
		var DEFAULT_END_REACHED_THRESHOLD = 1000;
		var DEFAULT_SCROLL_CALLBACK_THROTTLE = 50;

		var ListView = React.createClass({ displayName: 'ListView',
			_childFrames: [],
			_sentEndForContentLength: null,
			_scrollComponent: null,
			_prevRenderedRowsCount: 0,
			_visibleRows: {},
			scrollProperties: {},

			mixins: [ScrollResponder.Mixin, TimerMixin],

			statics: {
				DataSource: ListViewDataSource },

			propTypes: babelHelpers.extends({}, ScrollView.propTypes, {

				dataSource: PropTypes.instanceOf(ListViewDataSource).isRequired,

				renderSeparator: PropTypes.func,

				renderRow: PropTypes.func.isRequired,

				initialListSize: PropTypes.number.isRequired,

				onEndReached: PropTypes.func,

				onEndReachedThreshold: PropTypes.number.isRequired,

				pageSize: PropTypes.number.isRequired,

				renderFooter: PropTypes.func,
				renderHeader: PropTypes.func,

				renderSectionHeader: PropTypes.func,

				renderScrollComponent: React.PropTypes.func.isRequired,

				scrollRenderAheadDistance: React.PropTypes.number.isRequired,

				onChangeVisibleRows: React.PropTypes.func,

				removeClippedSubviews: React.PropTypes.bool,

				stickyHeaderIndices: PropTypes.arrayOf(PropTypes.number).isRequired,

				enableEmptySections: PropTypes.bool }),

			getMetrics: function getMetrics() {
				return {
					contentLength: this.scrollProperties.contentLength,
					totalRows: this.props.enableEmptySections ? this.props.dataSource.getRowAndSectionCount() : this.props.dataSource.getRowCount(),
					renderedRows: this.state.curRenderedRowsCount,
					visibleRows: Object.keys(this._visibleRows).length };
			},

			getScrollResponder: function getScrollResponder() {
				if (this._scrollComponent && this._scrollComponent.getScrollResponder) {
					return this._scrollComponent.getScrollResponder();
				}
			},

			scrollTo: function scrollTo() {
				if (this._scrollComponent && this._scrollComponent.scrollTo) {
					var _scrollComponent;
					(_scrollComponent = this._scrollComponent).scrollTo.apply(_scrollComponent, arguments);
				}
			},

			setNativeProps: function setNativeProps(props) {
				if (this._scrollComponent) {
					this._scrollComponent.setNativeProps(props);
				}
			},

			getDefaultProps: function getDefaultProps() {
				return {
					initialListSize: DEFAULT_INITIAL_ROWS,
					pageSize: DEFAULT_PAGE_SIZE,
					renderScrollComponent: function renderScrollComponent(props) {
						return React.createElement(ScrollView, props);
					},
					scrollRenderAheadDistance: DEFAULT_SCROLL_RENDER_AHEAD,
					onEndReachedThreshold: DEFAULT_END_REACHED_THRESHOLD,
					stickyHeaderIndices: [] };
			},

			getInitialState: function getInitialState() {
				return {
					curRenderedRowsCount: this.props.initialListSize,
					highlightedRow: {} };
			},

			getInnerViewNode: function getInnerViewNode() {
				return this._scrollComponent.getInnerViewNode();
			},

			componentWillMount: function componentWillMount() {

				this.scrollProperties = {
					visibleLength: null,
					contentLength: null,
					offset: 0 };

				this._childFrames = [];
				this._visibleRows = {};
				this._prevRenderedRowsCount = 0;
				this._sentEndForContentLength = null;
			},

			componentDidMount: function componentDidMount() {
				var _this = this;

				this.requestAnimationFrame(function () {
					_this._measureAndUpdateScrollProps();
				});
			},

			componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
				var _this2 = this;
				if (this.props.dataSource !== nextProps.dataSource || this.props.initialListSize !== nextProps.initialListSize) {
					this.setState(function (state, props) {
						_this2._prevRenderedRowsCount = 0;
						return {
							curRenderedRowsCount: Math.min(Math.max(state.curRenderedRowsCount, props.initialListSize), props.enableEmptySections ? props.dataSource.getRowAndSectionCount() : props.dataSource.getRowCount()) };
					}, function () {
						return _this2._renderMoreRowsIfNeeded();
					});
				}
			},

			componentDidUpdate: function componentDidUpdate() {
				var _this3 = this;
				this.requestAnimationFrame(function () {
					_this3._measureAndUpdateScrollProps();
				});
			},

			_onRowHighlighted: function _onRowHighlighted(sectionID, rowID) {
				this.setState({ highlightedRow: { sectionID: sectionID, rowID: rowID } });
			},

			render: function render() {
				var bodyComponents = [];

				var dataSource = this.props.dataSource;
				var allRowIDs = dataSource.rowIdentities;
				var rowCount = 0;
				var sectionHeaderIndices = [];

				var header = this.props.renderHeader && this.props.renderHeader();
				var footer = this.props.renderFooter && this.props.renderFooter();
				var totalIndex = header ? 1 : 0;

				for (var sectionIdx = 0; sectionIdx < allRowIDs.length; sectionIdx++) {
					var sectionID = dataSource.sectionIdentities[sectionIdx];
					var rowIDs = allRowIDs[sectionIdx];
					if (rowIDs.length === 0) {
						if (this.props.enableEmptySections === undefined) {
							var warning = require('fbjs@0.8/lib/warning.js');
							warning(false, 'In next release empty section headers will be rendered.' + ' In this release you can use \'enableEmptySections\' flag to render empty section headers.');
							continue;
						} else {
							var invariant = require('fbjs@0.8/lib/invariant.js');
							invariant(this.props.enableEmptySections, 'In next release \'enableEmptySections\' flag will be deprecated, empty section headers will always be rendered.' + ' If empty section headers are not desirable their indices should be excluded from sectionIDs object.' + ' In this release \'enableEmptySections\' may only have value \'true\' to allow empty section headers rendering.');
						}
					}

					if (this.props.renderSectionHeader) {
						var shouldUpdateHeader = rowCount >= this._prevRenderedRowsCount && dataSource.sectionHeaderShouldUpdate(sectionIdx);
						bodyComponents.push(React.createElement(StaticRenderer, {
							key: 's_' + sectionID,
							shouldUpdate: !!shouldUpdateHeader,
							render: this.props.renderSectionHeader.bind(null, dataSource.getSectionHeaderData(sectionIdx), sectionID) }));

						sectionHeaderIndices.push(totalIndex++);
					}

					for (var rowIdx = 0; rowIdx < rowIDs.length; rowIdx++) {
						var rowID = rowIDs[rowIdx];
						var comboID = sectionID + '_' + rowID;
						var shouldUpdateRow = rowCount >= this._prevRenderedRowsCount && dataSource.rowShouldUpdate(sectionIdx, rowIdx);
						var row = React.createElement(StaticRenderer, {
							key: 'r_' + comboID,
							shouldUpdate: !!shouldUpdateRow,
							render: this.props.renderRow.bind(null, dataSource.getRowData(sectionIdx, rowIdx), sectionID, rowID, this._onRowHighlighted) });

						bodyComponents.push(row);
						totalIndex++;

						if (this.props.renderSeparator && (rowIdx !== rowIDs.length - 1 || sectionIdx === allRowIDs.length - 1)) {
							var adjacentRowHighlighted = this.state.highlightedRow.sectionID === sectionID && (this.state.highlightedRow.rowID === rowID || this.state.highlightedRow.rowID === rowIDs[rowIdx + 1]);

							var separator = this.props.renderSeparator(sectionID, rowID, adjacentRowHighlighted);

							if (separator) {
								bodyComponents.push(separator);
								totalIndex++;
							}
						}
						if (++rowCount === this.state.curRenderedRowsCount) {
							break;
						}
					}
					if (rowCount >= this.state.curRenderedRowsCount) {
						break;
					}
				}var _props = this.props,
				    renderScrollComponent = _props.renderScrollComponent,
				    props = babelHelpers.objectWithoutProperties(_props, ['renderScrollComponent']);
				if (!props.scrollEventThrottle) {
					props.scrollEventThrottle = DEFAULT_SCROLL_CALLBACK_THROTTLE;
				}
				if (props.removeClippedSubviews === undefined) {
					props.removeClippedSubviews = true;
				}
				babelHelpers.extends(props, {
					onScroll: this._onScroll,
					stickyHeaderIndices: this.props.stickyHeaderIndices.concat(sectionHeaderIndices),

					onKeyboardWillShow: undefined,
					onKeyboardWillHide: undefined,
					onKeyboardDidShow: undefined,
					onKeyboardDidHide: undefined });

				return cloneReferencedElement(renderScrollComponent(props), {
					ref: this._setScrollComponentRef,
					onContentSizeChange: this._onContentSizeChange,
					onLayout: this._onLayout }, header, bodyComponents, footer);
			},

			_measureAndUpdateScrollProps: function _measureAndUpdateScrollProps() {
				var scrollComponent = this.getScrollResponder();
				if (!scrollComponent || !scrollComponent.getInnerViewNode) {
					return;
				}

				RCTScrollViewManager && RCTScrollViewManager.calculateChildFrames && RCTScrollViewManager.calculateChildFrames(ReactNative.findNodeHandle(scrollComponent), this._updateVisibleRows);
			},

			_setScrollComponentRef: function _setScrollComponentRef(scrollComponent) {
				this._scrollComponent = scrollComponent;
			},

			_onContentSizeChange: function _onContentSizeChange(width, height) {
				var contentLength = !this.props.horizontal ? height : width;
				if (contentLength !== this.scrollProperties.contentLength) {
					this.scrollProperties.contentLength = contentLength;
					this._updateVisibleRows();
					this._renderMoreRowsIfNeeded();
				}
				this.props.onContentSizeChange && this.props.onContentSizeChange(width, height);
			},

			_onLayout: function _onLayout(event) {
				var _event$nativeEvent$la = event.nativeEvent.layout,
				    width = _event$nativeEvent$la.width,
				    height = _event$nativeEvent$la.height;
				var visibleLength = !this.props.horizontal ? height : width;
				if (visibleLength !== this.scrollProperties.visibleLength) {
					this.scrollProperties.visibleLength = visibleLength;
					this._updateVisibleRows();
					this._renderMoreRowsIfNeeded();
				}
				this.props.onLayout && this.props.onLayout(event);
			},

			_maybeCallOnEndReached: function _maybeCallOnEndReached(event) {
				if (this.props.onEndReached && this.scrollProperties.contentLength !== this._sentEndForContentLength && this._getDistanceFromEnd(this.scrollProperties) < this.props.onEndReachedThreshold && this.state.curRenderedRowsCount === (this.props.enableEmptySections ? this.props.dataSource.getRowAndSectionCount() : this.props.dataSource.getRowCount())) {
					this._sentEndForContentLength = this.scrollProperties.contentLength;
					this.props.onEndReached(event);
					return true;
				}
				return false;
			},

			_renderMoreRowsIfNeeded: function _renderMoreRowsIfNeeded() {
				if (this.scrollProperties.contentLength === null || this.scrollProperties.visibleLength === null || this.state.curRenderedRowsCount === (this.props.enableEmptySections ? this.props.dataSource.getRowAndSectionCount() : this.props.dataSource.getRowCount())) {
					this._maybeCallOnEndReached();
					return;
				}

				var distanceFromEnd = this._getDistanceFromEnd(this.scrollProperties);
				if (distanceFromEnd < this.props.scrollRenderAheadDistance) {
					this._pageInNewRows();
				}
			},

			_pageInNewRows: function _pageInNewRows() {
				var _this4 = this;
				this.setState(function (state, props) {
					var rowsToRender = Math.min(state.curRenderedRowsCount + props.pageSize, props.enableEmptySections ? props.dataSource.getRowAndSectionCount() : props.dataSource.getRowCount());

					_this4._prevRenderedRowsCount = state.curRenderedRowsCount;
					return {
						curRenderedRowsCount: rowsToRender };
				}, function () {
					_this4._measureAndUpdateScrollProps();
					_this4._prevRenderedRowsCount = _this4.state.curRenderedRowsCount;
				});
			},

			_getDistanceFromEnd: function _getDistanceFromEnd(scrollProperties) {
				return scrollProperties.contentLength - scrollProperties.visibleLength - scrollProperties.offset;
			},

			_updateVisibleRows: function _updateVisibleRows(updatedFrames) {
				var _this5 = this;
				if (!this.props.onChangeVisibleRows) {
					return;
				}
				if (updatedFrames) {
					updatedFrames.forEach(function (newFrame) {
						_this5._childFrames[newFrame.index] = merge(newFrame);
					});
				}
				var isVertical = !this.props.horizontal;
				var dataSource = this.props.dataSource;
				var visibleMin = this.scrollProperties.offset;
				var visibleMax = visibleMin + this.scrollProperties.visibleLength;
				var allRowIDs = dataSource.rowIdentities;

				var header = this.props.renderHeader && this.props.renderHeader();
				var totalIndex = header ? 1 : 0;
				var visibilityChanged = false;
				var changedRows = {};
				for (var sectionIdx = 0; sectionIdx < allRowIDs.length; sectionIdx++) {
					var rowIDs = allRowIDs[sectionIdx];
					if (rowIDs.length === 0) {
						continue;
					}
					var sectionID = dataSource.sectionIdentities[sectionIdx];
					if (this.props.renderSectionHeader) {
						totalIndex++;
					}
					var visibleSection = this._visibleRows[sectionID];
					if (!visibleSection) {
						visibleSection = {};
					}
					for (var rowIdx = 0; rowIdx < rowIDs.length; rowIdx++) {
						var rowID = rowIDs[rowIdx];
						var frame = this._childFrames[totalIndex];
						totalIndex++;
						if (this.props.renderSeparator && (rowIdx !== rowIDs.length - 1 || sectionIdx === allRowIDs.length - 1)) {
							totalIndex++;
						}
						if (!frame) {
							break;
						}
						var rowVisible = visibleSection[rowID];
						var min = isVertical ? frame.y : frame.x;
						var max = min + (isVertical ? frame.height : frame.width);
						if (!min && !max || min === max) {
							break;
						}
						if (min > visibleMax || max < visibleMin) {
							if (rowVisible) {
								visibilityChanged = true;
								delete visibleSection[rowID];
								if (!changedRows[sectionID]) {
									changedRows[sectionID] = {};
								}
								changedRows[sectionID][rowID] = false;
							}
						} else if (!rowVisible) {
							visibilityChanged = true;
							visibleSection[rowID] = true;
							if (!changedRows[sectionID]) {
								changedRows[sectionID] = {};
							}
							changedRows[sectionID][rowID] = true;
						}
					}
					if (!isEmpty(visibleSection)) {
						this._visibleRows[sectionID] = visibleSection;
					} else if (this._visibleRows[sectionID]) {
						delete this._visibleRows[sectionID];
					}
				}
				visibilityChanged && this.props.onChangeVisibleRows(this._visibleRows, changedRows);
			},

			_onScroll: function _onScroll(e) {
				var isVertical = !this.props.horizontal;
				this.scrollProperties.visibleLength = e.nativeEvent.layoutMeasurement[isVertical ? 'height' : 'width'];

				this.scrollProperties.contentLength = e.nativeEvent.contentSize[isVertical ? 'height' : 'width'];

				this.scrollProperties.offset = e.nativeEvent.contentOffset[isVertical ? 'y' : 'x'];

				this._updateVisibleRows(e.nativeEvent.updatedChildFrames);
				if (!this._maybeCallOnEndReached(e)) {
					this._renderMoreRowsIfNeeded();
				}

				if (this.props.onEndReached && this._getDistanceFromEnd(this.scrollProperties) > this.props.onEndReachedThreshold) {

					this._sentEndForContentLength = null;
				}

				this.props.onScroll && this.props.onScroll(e);
			} });

		module.exports = ListView;
	}, // Libraries/CustomComponents/ListView/ListViewDataSource.js
	function (__inner_require__, exports, module) {
		var invariant = require('fbjs@0.8/lib/invariant.js');
		var isEmpty = __inner_require__(40 /*Libraries/vendor/core/isEmpty.js*/);
		var warning = require('fbjs@0.8/lib/warning.js');

		function defaultGetRowData(dataBlob, sectionID, rowID) {
			return dataBlob[sectionID][rowID];
		}

		function defaultGetSectionHeaderData(dataBlob, sectionID) {
			return dataBlob[sectionID];
		}var ListViewDataSource = function () {

			function ListViewDataSource(params) {
				babelHelpers.classCallCheck(this, ListViewDataSource);
				invariant(params && typeof params.rowHasChanged === 'function', 'Must provide a rowHasChanged function.');

				this._rowHasChanged = params.rowHasChanged;
				this._getRowData = params.getRowData || defaultGetRowData;
				this._sectionHeaderHasChanged = params.sectionHeaderHasChanged;
				this._getSectionHeaderData = params.getSectionHeaderData || defaultGetSectionHeaderData;

				this._dataBlob = null;
				this._dirtyRows = [];
				this._dirtySections = [];
				this._cachedRowCount = 0;

				this.rowIdentities = [];
				this.sectionIdentities = [];
			}babelHelpers.createClass(ListViewDataSource, [{ key: 'cloneWithRows', value: function cloneWithRows(dataBlob, rowIdentities) {
					var rowIds = rowIdentities ? [rowIdentities] : null;
					if (!this._sectionHeaderHasChanged) {
						this._sectionHeaderHasChanged = function () {
							return false;
						};
					}
					return this.cloneWithRowsAndSections({ s1: dataBlob }, ['s1'], rowIds);
				} }, { key: 'cloneWithRowsAndSections', value: function cloneWithRowsAndSections(dataBlob, sectionIdentities, rowIdentities) {
					invariant(typeof this._sectionHeaderHasChanged === 'function', 'Must provide a sectionHeaderHasChanged function with section data.');

					invariant(!sectionIdentities || !rowIdentities || sectionIdentities.length === rowIdentities.length, 'row and section ids lengths must be the same');

					var newSource = new ListViewDataSource({
						getRowData: this._getRowData,
						getSectionHeaderData: this._getSectionHeaderData,
						rowHasChanged: this._rowHasChanged,
						sectionHeaderHasChanged: this._sectionHeaderHasChanged });

					newSource._dataBlob = dataBlob;
					if (sectionIdentities) {
						newSource.sectionIdentities = sectionIdentities;
					} else {
						newSource.sectionIdentities = Object.keys(dataBlob);
					}
					if (rowIdentities) {
						newSource.rowIdentities = rowIdentities;
					} else {
						newSource.rowIdentities = [];
						newSource.sectionIdentities.forEach(function (sectionID) {
							newSource.rowIdentities.push(Object.keys(dataBlob[sectionID]));
						});
					}
					newSource._cachedRowCount = countRows(newSource.rowIdentities);

					newSource._calculateDirtyArrays(this._dataBlob, this.sectionIdentities, this.rowIdentities);

					return newSource;
				} }, { key: 'getRowCount', value: function getRowCount() {
					return this._cachedRowCount;
				} }, { key: 'getRowAndSectionCount', value: function getRowAndSectionCount() {
					return this._cachedRowCount + this.sectionIdentities.length;
				} }, { key: 'rowShouldUpdate', value: function rowShouldUpdate(sectionIndex, rowIndex) {
					var needsUpdate = this._dirtyRows[sectionIndex][rowIndex];
					warning(needsUpdate !== undefined, 'missing dirtyBit for section, row: ' + sectionIndex + ', ' + rowIndex);
					return needsUpdate;
				} }, { key: 'getRowData', value: function getRowData(sectionIndex, rowIndex) {
					var sectionID = this.sectionIdentities[sectionIndex];
					var rowID = this.rowIdentities[sectionIndex][rowIndex];
					warning(sectionID !== undefined && rowID !== undefined, 'rendering invalid section, row: ' + sectionIndex + ', ' + rowIndex);

					return this._getRowData(this._dataBlob, sectionID, rowID);
				} }, { key: 'getRowIDForFlatIndex', value: function getRowIDForFlatIndex(index) {
					var accessIndex = index;
					for (var ii = 0; ii < this.sectionIdentities.length; ii++) {
						if (accessIndex >= this.rowIdentities[ii].length) {
							accessIndex -= this.rowIdentities[ii].length;
						} else {
							return this.rowIdentities[ii][accessIndex];
						}
					}
					return null;
				} }, { key: 'getSectionIDForFlatIndex', value: function getSectionIDForFlatIndex(index) {
					var accessIndex = index;
					for (var ii = 0; ii < this.sectionIdentities.length; ii++) {
						if (accessIndex >= this.rowIdentities[ii].length) {
							accessIndex -= this.rowIdentities[ii].length;
						} else {
							return this.sectionIdentities[ii];
						}
					}
					return null;
				} }, { key: 'getSectionLengths', value: function getSectionLengths() {
					var results = [];
					for (var ii = 0; ii < this.sectionIdentities.length; ii++) {
						results.push(this.rowIdentities[ii].length);
					}
					return results;
				} }, { key: 'sectionHeaderShouldUpdate', value: function sectionHeaderShouldUpdate(sectionIndex) {
					var needsUpdate = this._dirtySections[sectionIndex];
					warning(needsUpdate !== undefined, 'missing dirtyBit for section: ' + sectionIndex);
					return needsUpdate;
				} }, { key: 'getSectionHeaderData', value: function getSectionHeaderData(sectionIndex) {
					if (!this._getSectionHeaderData) {
						return null;
					}
					var sectionID = this.sectionIdentities[sectionIndex];
					warning(sectionID !== undefined, 'renderSection called on invalid section: ' + sectionIndex);
					return this._getSectionHeaderData(this._dataBlob, sectionID);
				} }, { key: '_calculateDirtyArrays', value: function _calculateDirtyArrays(prevDataBlob, prevSectionIDs, prevRowIDs) {

					var prevSectionsHash = keyedDictionaryFromArray(prevSectionIDs);
					var prevRowsHash = {};
					for (var ii = 0; ii < prevRowIDs.length; ii++) {
						var sectionID = prevSectionIDs[ii];
						warning(!prevRowsHash[sectionID], 'SectionID appears more than once: ' + sectionID);

						prevRowsHash[sectionID] = keyedDictionaryFromArray(prevRowIDs[ii]);
					}

					this._dirtySections = [];
					this._dirtyRows = [];

					var dirty;
					for (var sIndex = 0; sIndex < this.sectionIdentities.length; sIndex++) {
						var sectionID = this.sectionIdentities[sIndex];

						dirty = !prevSectionsHash[sectionID];
						var sectionHeaderHasChanged = this._sectionHeaderHasChanged;
						if (!dirty && sectionHeaderHasChanged) {
							dirty = sectionHeaderHasChanged(this._getSectionHeaderData(prevDataBlob, sectionID), this._getSectionHeaderData(this._dataBlob, sectionID));
						}
						this._dirtySections.push(!!dirty);

						this._dirtyRows[sIndex] = [];
						for (var rIndex = 0; rIndex < this.rowIdentities[sIndex].length; rIndex++) {
							var rowID = this.rowIdentities[sIndex][rIndex];

							dirty = !prevSectionsHash[sectionID] || !prevRowsHash[sectionID][rowID] || this._rowHasChanged(this._getRowData(prevDataBlob, sectionID, rowID), this._getRowData(this._dataBlob, sectionID, rowID));

							this._dirtyRows[sIndex].push(!!dirty);
						}
					}
				} }]);return ListViewDataSource;
		}();

		function countRows(allRowIDs) {
			var totalRows = 0;
			for (var sectionIdx = 0; sectionIdx < allRowIDs.length; sectionIdx++) {
				var rowIDs = allRowIDs[sectionIdx];
				totalRows += rowIDs.length;
			}
			return totalRows;
		}

		function keyedDictionaryFromArray(arr) {
			if (isEmpty(arr)) {
				return {};
			}
			var result = {};
			for (var ii = 0; ii < arr.length; ii++) {
				var key = arr[ii];
				warning(!result[key], 'Value appears more than once in array: ' + key);
				result[key] = true;
			}
			return result;
		}

		module.exports = ListViewDataSource;
	}, // Libraries/vendor/core/isEmpty.js
	function (__inner_require__, exports, module) {
		function isEmpty(obj) {
			if (Array.isArray(obj)) {
				return obj.length === 0;
			} else if (typeof obj === 'object') {
				for (var i in obj) {
					return false;
				}
				return true;
			} else {
				return !obj;
			}
		}

		module.exports = isEmpty;
	}, // Libraries/Components/StaticRenderer.js
	function (__inner_require__, exports, module) {
		var React = require('react-native@0.37/Libraries/react-native/React.js');var StaticRenderer = function (_React$Component) {
			babelHelpers.inherits(StaticRenderer, _React$Component);function StaticRenderer() {
				babelHelpers.classCallCheck(this, StaticRenderer);return babelHelpers.possibleConstructorReturn(this, (StaticRenderer.__proto__ || Object.getPrototypeOf(StaticRenderer)).apply(this, arguments));
			}babelHelpers.createClass(StaticRenderer, [{ key: 'shouldComponentUpdate', value: function shouldComponentUpdate(nextProps) {
					return nextProps.shouldUpdate;
				} }, { key: 'render', value: function render() {
					return this.props.render();
				} }]);return StaticRenderer;
		}(React.Component);StaticRenderer.propTypes = { shouldUpdate: React.PropTypes.bool.isRequired, render: React.PropTypes.func.isRequired };

		module.exports = StaticRenderer;
	}, // Libraries/Components/MapView/MapView.js
	function (__inner_require__, exports, module) {
		var ColorPropType = require('react-native@0.37/Libraries/StyleSheet/ColorPropType.js');
		var EdgeInsetsPropType = require('react-native@0.37/Libraries/StyleSheet/EdgeInsetsPropType.js');
		var Image = __inner_require__(22 /*Libraries/Image/Image.ios.js*/);
		var NativeMethodsMixin = require('react@15.3/lib/NativeMethodsMixin.js');
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var StyleSheet = require('react-native@0.37/Libraries/StyleSheet/StyleSheet.js');
		var View = require('react-native@0.37/Libraries/Components/View/View.js');

		var deprecatedPropType = require('react-native@0.37/Libraries/Utilities/deprecatedPropType.js');
		var processColor = require('react-native@0.37/Libraries/StyleSheet/processColor.js');
		var resolveAssetSource = require('react-native@0.37/Libraries/Image/resolveAssetSource.js');
		var requireNativeComponent = require('react-native@0.37/Libraries/ReactNative/requireNativeComponent.js');

		var MapView = React.createClass({ displayName: 'MapView',

			mixins: [NativeMethodsMixin],

			propTypes: babelHelpers.extends({}, View.propTypes, {

				style: View.propTypes.style,

				showsUserLocation: React.PropTypes.bool,

				followUserLocation: React.PropTypes.bool,

				showsPointsOfInterest: React.PropTypes.bool,

				showsCompass: React.PropTypes.bool,

				zoomEnabled: React.PropTypes.bool,

				rotateEnabled: React.PropTypes.bool,

				pitchEnabled: React.PropTypes.bool,

				scrollEnabled: React.PropTypes.bool,

				mapType: React.PropTypes.oneOf(['standard', 'satellite', 'hybrid']),

				region: React.PropTypes.shape({

					latitude: React.PropTypes.number.isRequired,
					longitude: React.PropTypes.number.isRequired,

					latitudeDelta: React.PropTypes.number,
					longitudeDelta: React.PropTypes.number }),

				annotations: React.PropTypes.arrayOf(React.PropTypes.shape({

					latitude: React.PropTypes.number.isRequired,
					longitude: React.PropTypes.number.isRequired,

					animateDrop: React.PropTypes.bool,

					draggable: React.PropTypes.bool,

					onDragStateChange: React.PropTypes.func,

					onFocus: React.PropTypes.func,

					onBlur: React.PropTypes.func,

					title: React.PropTypes.string,
					subtitle: React.PropTypes.string,

					leftCalloutView: React.PropTypes.element,
					rightCalloutView: React.PropTypes.element,
					detailCalloutView: React.PropTypes.element,

					tintColor: ColorPropType,

					image: Image.propTypes.source,

					view: React.PropTypes.element,

					id: React.PropTypes.string,

					hasLeftCallout: deprecatedPropType(React.PropTypes.bool, 'Use `leftCalloutView` instead.'),

					hasRightCallout: deprecatedPropType(React.PropTypes.bool, 'Use `rightCalloutView` instead.'),

					onLeftCalloutPress: deprecatedPropType(React.PropTypes.func, 'Use `leftCalloutView` instead.'),

					onRightCalloutPress: deprecatedPropType(React.PropTypes.func, 'Use `rightCalloutView` instead.') })),

				overlays: React.PropTypes.arrayOf(React.PropTypes.shape({

					coordinates: React.PropTypes.arrayOf(React.PropTypes.shape({
						latitude: React.PropTypes.number.isRequired,
						longitude: React.PropTypes.number.isRequired })),

					lineWidth: React.PropTypes.number,
					strokeColor: ColorPropType,
					fillColor: ColorPropType,

					id: React.PropTypes.string })),

				maxDelta: React.PropTypes.number,

				minDelta: React.PropTypes.number,

				legalLabelInsets: EdgeInsetsPropType,

				onRegionChange: React.PropTypes.func,

				onRegionChangeComplete: React.PropTypes.func,

				onAnnotationPress: React.PropTypes.func,

				active: React.PropTypes.bool }),

			statics: {

				PinColors: {
					RED: '#ff3b30',
					GREEN: '#4cd964',
					PURPLE: '#c969e0' } },

			render: function render() {
				var _this = this;
				var children = [],
				    _props = this.props,
				    annotations = _props.annotations,
				    overlays = _props.overlays,
				    followUserLocation = _props.followUserLocation;
				annotations = annotations && annotations.map(function (annotation) {
					var id = annotation.id,
					    image = annotation.image,
					    tintColor = annotation.tintColor,
					    view = annotation.view,
					    leftCalloutView = annotation.leftCalloutView,
					    rightCalloutView = annotation.rightCalloutView,
					    detailCalloutView = annotation.detailCalloutView;

					if (!view && image && tintColor) {
						view = React.createElement(Image, {
							style: {
								tintColor: processColor(tintColor) },

							source: image });

						image = undefined;
					}
					if (view) {
						if (image) {
							console.warn('`image` and `view` both set on annotation. Image will be ignored.');
						}
						var viewIndex = children.length;
						children.push(React.cloneElement(view, {

							style: [styles.annotationView, view.props.style || {}] }));
					}
					if (leftCalloutView) {
						var leftCalloutViewIndex = children.length;
						children.push(React.cloneElement(leftCalloutView, {
							style: [styles.calloutView, leftCalloutView.props.style || {}] }));
					}
					if (rightCalloutView) {
						var rightCalloutViewIndex = children.length;
						children.push(React.cloneElement(rightCalloutView, {
							style: [styles.calloutView, rightCalloutView.props.style || {}] }));
					}
					if (detailCalloutView) {
						var detailCalloutViewIndex = children.length;
						children.push(React.cloneElement(detailCalloutView, {
							style: [styles.calloutView, detailCalloutView.props.style || {}] }));
					}

					var result = babelHelpers.extends({}, annotation, {
						tintColor: tintColor && processColor(tintColor),
						image: image,
						viewIndex: viewIndex,
						leftCalloutViewIndex: leftCalloutViewIndex,
						rightCalloutViewIndex: rightCalloutViewIndex,
						detailCalloutViewIndex: detailCalloutViewIndex,
						view: undefined,
						leftCalloutView: undefined,
						rightCalloutView: undefined,
						detailCalloutView: undefined });

					result.id = id || encodeURIComponent(JSON.stringify(result));
					result.image = image && resolveAssetSource(image);
					return result;
				});
				overlays = overlays && overlays.map(function (overlay) {
					var id = overlay.id,
					    fillColor = overlay.fillColor,
					    strokeColor = overlay.strokeColor;
					var result = babelHelpers.extends({}, overlay, {
						strokeColor: strokeColor && processColor(strokeColor),
						fillColor: fillColor && processColor(fillColor) });

					result.id = id || encodeURIComponent(JSON.stringify(result));
					return result;
				});

				var findByAnnotationId = function findByAnnotationId(annotationId) {
					if (!annotations) {
						return null;
					}
					for (var i = 0, l = annotations.length; i < l; i++) {
						if (annotations[i].id === annotationId) {
							return annotations[i];
						}
					}
					return null;
				};

				var onPress = void 0,
				    onAnnotationDragStateChange = void 0,
				    onAnnotationFocus = void 0,
				    onAnnotationBlur = void 0;
				if (annotations) {
					onPress = function onPress(event) {
						if (event.nativeEvent.action === 'annotation-click') {

							_this.props.onAnnotationPress && _this.props.onAnnotationPress(event.nativeEvent.annotation);
						} else if (event.nativeEvent.action === 'callout-click') {
							var annotation = findByAnnotationId(event.nativeEvent.annotationId);
							if (annotation) {

								if (event.nativeEvent.side === 'left' && annotation.onLeftCalloutPress) {
									annotation.onLeftCalloutPress(event.nativeEvent);
								} else if (event.nativeEvent.side === 'right' && annotation.onRightCalloutPress) {
									annotation.onRightCalloutPress(event.nativeEvent);
								}
							}
						}
					};
					onAnnotationDragStateChange = function onAnnotationDragStateChange(event) {
						var annotation = findByAnnotationId(event.nativeEvent.annotationId);
						if (annotation) {

							annotation.onDragStateChange && annotation.onDragStateChange(event.nativeEvent);
						}
					};
					onAnnotationFocus = function onAnnotationFocus(event) {
						var annotation = findByAnnotationId(event.nativeEvent.annotationId);
						if (annotation && annotation.onFocus) {
							annotation.onFocus(event.nativeEvent);
						}
					};
					onAnnotationBlur = function onAnnotationBlur(event) {
						var annotation = findByAnnotationId(event.nativeEvent.annotationId);
						if (annotation && annotation.onBlur) {
							annotation.onBlur(event.nativeEvent);
						}
					};
				}

				if (this.props.onRegionChange || this.props.onRegionChangeComplete) {
					var onChange = function onChange(event) {
						if (event.nativeEvent.continuous) {
							_this.props.onRegionChange && _this.props.onRegionChange(event.nativeEvent.region);
						} else {
							_this.props.onRegionChangeComplete && _this.props.onRegionChangeComplete(event.nativeEvent.region);
						}
					};
				}

				if (followUserLocation === undefined) {
					followUserLocation = this.props.showUserLocation;
				}

				return React.createElement(RCTMap, babelHelpers.extends({}, this.props, {
					annotations: annotations,
					children: children,
					followUserLocation: followUserLocation,
					overlays: overlays,
					onPress: onPress,
					onChange: onChange,
					onAnnotationDragStateChange: onAnnotationDragStateChange,
					onAnnotationFocus: onAnnotationFocus,
					onAnnotationBlur: onAnnotationBlur }));
			} });

		var styles = StyleSheet.create({
			annotationView: {
				position: 'absolute',
				backgroundColor: 'transparent' },

			calloutView: {
				position: 'absolute',
				backgroundColor: 'white' } });

		var RCTMap = requireNativeComponent('RCTMap', MapView, {
			nativeOnly: {
				onAnnotationDragStateChange: true,
				onAnnotationFocus: true,
				onAnnotationBlur: true,
				onChange: true,
				onPress: true } });

		module.exports = MapView;
	}, // Libraries/Modal/Modal.js
	function (__inner_require__, exports, module) {
		var _container;

		var AppContainer = __inner_require__(44 /*Libraries/ReactNative/AppContainer.js*/);
		var I18nManager = __inner_require__(45 /*Libraries/ReactNative/I18nManager.js*/);
		var Platform = require('react-native@0.37/Libraries/Utilities/Platform.ios.js');
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var StyleSheet = require('react-native@0.37/Libraries/StyleSheet/StyleSheet.js');
		var View = require('react-native@0.37/Libraries/Components/View/View.js');

		var deprecatedPropType = require('react-native@0.37/Libraries/Utilities/deprecatedPropType.js');
		var requireNativeComponent = require('react-native@0.37/Libraries/ReactNative/requireNativeComponent.js');
		var RCTModalHostView = requireNativeComponent('RCTModalHostView', null);

		var PropTypes = React.PropTypes;var Modal = function (_React$Component) {
			babelHelpers.inherits(Modal, _React$Component);function Modal() {
				babelHelpers.classCallCheck(this, Modal);return babelHelpers.possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
			}babelHelpers.createClass(Modal, [{ key: 'render', value: function render() {
					if (this.props.visible === false) {
						return null;
					}

					var containerStyles = {
						backgroundColor: this.props.transparent ? 'transparent' : 'white' };

					var animationType = this.props.animationType;
					if (!animationType) {

						animationType = 'none';
						if (this.props.animated) {
							animationType = 'slide';
						}
					}

					var innerChildren = this.props.children;

					return React.createElement(RCTModalHostView, {
						animationType: animationType,
						transparent: this.props.transparent,
						onRequestClose: this.props.onRequestClose,
						onShow: this.props.onShow,
						style: styles.modal,
						onStartShouldSetResponder: this._shouldSetResponder,
						supportedOrientations: this.props.supportedOrientations,
						onOrientationChange: this.props.onOrientationChange }, React.createElement(View, { style: [styles.container, containerStyles] }, innerChildren));
				} }, { key: '_shouldSetResponder', value: function _shouldSetResponder() {
					return true;
				} }]);return Modal;
		}(React.Component);Modal.propTypes = { animationType: PropTypes.oneOf(['none', 'slide', 'fade']), transparent: PropTypes.bool, visible: PropTypes.bool, onRequestClose: Platform.OS === 'android' ? PropTypes.func.isRequired : PropTypes.func, onShow: PropTypes.func, animated: deprecatedPropType(PropTypes.bool, 'Use the `animationType` prop instead.'), supportedOrientations: PropTypes.arrayOf(PropTypes.oneOf(['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right'])), onOrientationChange: PropTypes.func };Modal.defaultProps = { visible: true };

		var side = I18nManager.isRTL ? 'right' : 'left';
		var styles = StyleSheet.create({
			modal: {
				position: 'absolute' },

			container: (_container = {
				position: 'absolute' }, babelHelpers.defineProperty(_container, side, 0), babelHelpers.defineProperty(_container, 'top', 0), _container) });

		module.exports = Modal;
	}, // Libraries/ReactNative/AppContainer.js
	function (__inner_require__, exports, module) {
		var RCTDeviceEventEmitter = require('react-native@0.37/Libraries/EventEmitter/RCTDeviceEventEmitter.js');
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var ReactNative = __inner_require__(26 /*Libraries/react-native/ReactNative.js*/);
		var StyleSheet = require('react-native@0.37/Libraries/StyleSheet/StyleSheet.js');
		var Subscribable = __inner_require__(28 /*Libraries/Components/Subscribable.js*/);
		var View = require('react-native@0.37/Libraries/Components/View/View.js');

		var Inspector = null;
		var YellowBox = null;

		var AppContainer = React.createClass({ displayName: 'AppContainer',
			mixins: [Subscribable.Mixin],

			getInitialState: function getInitialState() {
				return { inspector: null, mainKey: 1 };
			},

			toggleElementInspector: function toggleElementInspector() {
				var _this = this;
				var inspector = !__DEV__ || this.state.inspector ? null : React.createElement(Inspector, {
					inspectedViewTag: ReactNative.findNodeHandle(this.refs.main),
					onRequestRerenderApp: function onRequestRerenderApp(updateInspectedViewTag) {
						_this.setState(function (s) {
							return { mainKey: s.mainKey + 1 };
						}, function () {
							return updateInspectedViewTag(ReactNative.findNodeHandle(_this.refs.main));
						});
					} });

				this.setState({ inspector: inspector });
			},

			componentDidMount: function componentDidMount() {
				this.addListenerOn(RCTDeviceEventEmitter, 'toggleElementInspector', this.toggleElementInspector);
			},

			render: function render() {
				var yellowBox = null;

				return React.createElement(View, { style: styles.appContainer }, React.createElement(View, {
					collapsable: !this.state.inspector,
					key: this.state.mainKey,
					style: styles.appContainer, ref: 'main' }, this.props.children), yellowBox, this.state.inspector);
			} });

		var styles = StyleSheet.create({
			appContainer: {
				flex: 1 } });

		module.exports = AppContainer;
	}, // Libraries/ReactNative/I18nManager.js
	function (__inner_require__, exports, module) {
		var I18nManager = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js').I18nManager || {
			isRTL: false,
			allowRTL: function allowRTL() {},
			forceRTL: function forceRTL() {} };

		module.exports = I18nManager;
	}, // Libraries/CustomComponents/Navigator/Navigator.js
	function (__inner_require__, exports, module) {
		var AnimationsDebugModule = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js').AnimationsDebugModule;
		var Dimensions = require('react-native@0.37/Libraries/Utilities/Dimensions.js');
		var InteractionMixin = __inner_require__(47 /*Libraries/Interaction/InteractionMixin.js*/);
		var NavigationContext = __inner_require__(48 /*Libraries/CustomComponents/Navigator/Navigation/NavigationContext.js*/);
		var NavigatorBreadcrumbNavigationBar = __inner_require__(52 /*Libraries/CustomComponents/Navigator/NavigatorBreadcrumbNavigationBar.js*/);
		var NavigatorNavigationBar = __inner_require__(57 /*Libraries/CustomComponents/Navigator/NavigatorNavigationBar.js*/);
		var NavigatorSceneConfigs = __inner_require__(58 /*Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js*/);
		var PanResponder = __inner_require__(59 /*Libraries/Interaction/PanResponder.js*/);
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var StyleSheet = require('react-native@0.37/Libraries/StyleSheet/StyleSheet.js');
		var Subscribable = __inner_require__(28 /*Libraries/Components/Subscribable.js*/);
		var TimerMixin = require('react-timer-mixin@0.13/TimerMixin.js');
		var View = require('react-native@0.37/Libraries/Components/View/View.js');

		var clamp = __inner_require__(60 /*Libraries/Utilities/clamp.js*/);
		var flattenStyle = require('react-native@0.37/Libraries/StyleSheet/flattenStyle.js');
		var invariant = require('fbjs@0.8/lib/invariant.js');
		var rebound = require('rebound@0.0.13/rebound.js');

		var PropTypes = React.PropTypes;

		var SCREEN_WIDTH = Dimensions.get('window').width;
		var SCREEN_HEIGHT = Dimensions.get('window').height;
		var SCENE_DISABLED_NATIVE_PROPS = {
			pointerEvents: 'none',
			style: {
				top: SCREEN_HEIGHT,
				bottom: -SCREEN_HEIGHT,
				opacity: 0 } };

		var __uid = 0;
		function getuid() {
			return __uid++;
		}

		function getRouteID(route) {
			if (route === null || typeof route !== 'object') {
				return String(route);
			}

			var key = '__navigatorRouteID';

			if (!route.hasOwnProperty(key)) {
				Object.defineProperty(route, key, {
					enumerable: false,
					configurable: false,
					writable: false,
					value: getuid() });
			}
			return route[key];
		}

		var styles = StyleSheet.create({
			container: {
				flex: 1,
				overflow: 'hidden' },

			defaultSceneStyle: {
				position: 'absolute',
				left: 0,
				right: 0,
				bottom: 0,
				top: 0 },

			baseScene: {
				position: 'absolute',
				overflow: 'hidden',
				left: 0,
				right: 0,
				bottom: 0,
				top: 0 },

			disabledScene: {
				top: SCREEN_HEIGHT,
				bottom: -SCREEN_HEIGHT },

			transitioner: {
				flex: 1,
				backgroundColor: 'transparent',
				overflow: 'hidden' } });

		var GESTURE_ACTIONS = ['pop', 'jumpBack', 'jumpForward'];

		var Navigator = React.createClass({ displayName: 'Navigator',

			propTypes: {

				configureScene: PropTypes.func,

				renderScene: PropTypes.func.isRequired,

				initialRoute: PropTypes.object,

				initialRouteStack: PropTypes.arrayOf(PropTypes.object),

				onWillFocus: PropTypes.func,

				onDidFocus: PropTypes.func,

				navigationBar: PropTypes.node,

				navigator: PropTypes.object,

				sceneStyle: View.propTypes.style },

			statics: {
				BreadcrumbNavigationBar: NavigatorBreadcrumbNavigationBar,
				NavigationBar: NavigatorNavigationBar,
				SceneConfigs: NavigatorSceneConfigs },

			mixins: [TimerMixin, InteractionMixin, Subscribable.Mixin],

			getDefaultProps: function getDefaultProps() {
				return {
					configureScene: function configureScene() {
						return NavigatorSceneConfigs.PushFromRight;
					},
					sceneStyle: styles.defaultSceneStyle };
			},

			getInitialState: function getInitialState() {
				var _this = this;
				this._navigationBarNavigator = this.props.navigationBarNavigator || this;

				this._renderedSceneMap = new Map();

				var routeStack = this.props.initialRouteStack || [this.props.initialRoute];
				invariant(routeStack.length >= 1, 'Navigator requires props.initialRoute or props.initialRouteStack.');

				var initialRouteIndex = routeStack.length - 1;
				if (this.props.initialRoute) {
					initialRouteIndex = routeStack.indexOf(this.props.initialRoute);
					invariant(initialRouteIndex !== -1, 'initialRoute is not in initialRouteStack.');
				}
				return {
					sceneConfigStack: routeStack.map(function (route) {
						return _this.props.configureScene(route, routeStack);
					}),

					routeStack: routeStack,
					presentedIndex: initialRouteIndex,
					transitionFromIndex: null,
					activeGesture: null,
					pendingGestureProgress: null,
					transitionQueue: [] };
			},

			componentWillMount: function componentWillMount() {
				var _this2 = this;

				this.__defineGetter__('navigationContext', this._getNavigationContext);

				this._subRouteFocus = [];
				this.parentNavigator = this.props.navigator;
				this._handlers = {};
				this.springSystem = new rebound.SpringSystem();
				this.spring = this.springSystem.createSpring();
				this.spring.setRestSpeedThreshold(0.05);
				this.spring.setCurrentValue(0).setAtRest();
				this.spring.addListener({
					onSpringEndStateChange: function onSpringEndStateChange() {
						if (!_this2._interactionHandle) {
							_this2._interactionHandle = _this2.createInteractionHandle();
						}
					},
					onSpringUpdate: function onSpringUpdate() {
						_this2._handleSpringUpdate();
					},
					onSpringAtRest: function onSpringAtRest() {
						_this2._completeTransition();
					} });

				this.panGesture = PanResponder.create({
					onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
					onPanResponderRelease: this._handlePanResponderRelease,
					onPanResponderMove: this._handlePanResponderMove,
					onPanResponderTerminate: this._handlePanResponderTerminate });

				this._interactionHandle = null;
				this._emitWillFocus(this.state.routeStack[this.state.presentedIndex]);
			},

			componentDidMount: function componentDidMount() {
				this._handleSpringUpdate();
				this._emitDidFocus(this.state.routeStack[this.state.presentedIndex]);
			},

			componentWillUnmount: function componentWillUnmount() {
				if (this._navigationContext) {
					this._navigationContext.dispose();
					this._navigationContext = null;
				}

				this.spring.destroy();

				if (this._interactionHandle) {
					this.clearInteractionHandle(this._interactionHandle);
				}
			},

			immediatelyResetRouteStack: function immediatelyResetRouteStack(nextRouteStack) {
				var _this3 = this;
				var destIndex = nextRouteStack.length - 1;
				this._emitWillFocus(nextRouteStack[destIndex]);
				this.setState({
					routeStack: nextRouteStack,
					sceneConfigStack: nextRouteStack.map(function (route) {
						return _this3.props.configureScene(route, nextRouteStack);
					}),

					presentedIndex: destIndex,
					activeGesture: null,
					transitionFromIndex: null,
					transitionQueue: [] }, function () {
					_this3._handleSpringUpdate();
					var navBar = _this3._navBar;
					if (navBar && navBar.immediatelyRefresh) {
						navBar.immediatelyRefresh();
					}
					_this3._emitDidFocus(_this3.state.routeStack[_this3.state.presentedIndex]);
				});
			},

			_transitionTo: function _transitionTo(destIndex, velocity, jumpSpringTo, cb) {
				if (this.state.presentedIndex === destIndex) {
					cb && cb();
					return;
				}

				if (this.state.transitionFromIndex !== null) {

					this.state.transitionQueue.push({
						destIndex: destIndex,
						velocity: velocity,
						cb: cb });

					return;
				}

				this.state.transitionFromIndex = this.state.presentedIndex;
				this.state.presentedIndex = destIndex;
				this.state.transitionCb = cb;
				this._onAnimationStart();
				if (AnimationsDebugModule) {
					AnimationsDebugModule.startRecordingFps();
				}
				var sceneConfig = this.state.sceneConfigStack[this.state.transitionFromIndex] || this.state.sceneConfigStack[this.state.presentedIndex];
				invariant(sceneConfig, 'Cannot configure scene at index ' + this.state.transitionFromIndex);

				if (jumpSpringTo != null) {
					this.spring.setCurrentValue(jumpSpringTo);
				}
				this.spring.setOvershootClampingEnabled(true);
				this.spring.getSpringConfig().friction = sceneConfig.springFriction;
				this.spring.getSpringConfig().tension = sceneConfig.springTension;
				this.spring.setVelocity(velocity || sceneConfig.defaultTransitionVelocity);
				this.spring.setEndValue(1);
			},

			_handleSpringUpdate: function _handleSpringUpdate() {
				if (!this.isMounted()) {
					return;
				}

				if (this.state.transitionFromIndex != null) {
					this._transitionBetween(this.state.transitionFromIndex, this.state.presentedIndex, this.spring.getCurrentValue());
				} else if (this.state.activeGesture != null) {
					var presentedToIndex = this.state.presentedIndex + this._deltaForGestureAction(this.state.activeGesture);
					this._transitionBetween(this.state.presentedIndex, presentedToIndex, this.spring.getCurrentValue());
				}
			},

			_completeTransition: function _completeTransition() {
				if (!this.isMounted()) {
					return;
				}

				if (this.spring.getCurrentValue() !== 1 && this.spring.getCurrentValue() !== 0) {

					if (this.state.pendingGestureProgress) {
						this.state.pendingGestureProgress = null;
					}
					return;
				}
				this._onAnimationEnd();
				var presentedIndex = this.state.presentedIndex;
				var didFocusRoute = this._subRouteFocus[presentedIndex] || this.state.routeStack[presentedIndex];

				if (AnimationsDebugModule) {
					AnimationsDebugModule.stopRecordingFps(Date.now());
				}
				this.state.transitionFromIndex = null;
				this.spring.setCurrentValue(0).setAtRest();
				this._hideScenes();
				if (this.state.transitionCb) {
					this.state.transitionCb();
					this.state.transitionCb = null;
				}

				this._emitDidFocus(didFocusRoute);

				if (this._interactionHandle) {
					this.clearInteractionHandle(this._interactionHandle);
					this._interactionHandle = null;
				}
				if (this.state.pendingGestureProgress) {

					var gestureToIndex = this.state.presentedIndex + this._deltaForGestureAction(this.state.activeGesture);
					this._enableScene(gestureToIndex);
					this.spring.setEndValue(this.state.pendingGestureProgress);
					return;
				}
				if (this.state.transitionQueue.length) {
					var queuedTransition = this.state.transitionQueue.shift();
					this._enableScene(queuedTransition.destIndex);
					this._emitWillFocus(this.state.routeStack[queuedTransition.destIndex]);
					this._transitionTo(queuedTransition.destIndex, queuedTransition.velocity, null, queuedTransition.cb);
				}
			},

			_emitDidFocus: function _emitDidFocus(route) {
				this.navigationContext.emit('didfocus', { route: route });

				if (this.props.onDidFocus) {
					this.props.onDidFocus(route);
				}
			},

			_emitWillFocus: function _emitWillFocus(route) {
				this.navigationContext.emit('willfocus', { route: route });

				var navBar = this._navBar;
				if (navBar && navBar.handleWillFocus) {
					navBar.handleWillFocus(route);
				}
				if (this.props.onWillFocus) {
					this.props.onWillFocus(route);
				}
			},

			_hideScenes: function _hideScenes() {
				var gesturingToIndex = null;
				if (this.state.activeGesture) {
					gesturingToIndex = this.state.presentedIndex + this._deltaForGestureAction(this.state.activeGesture);
				}
				for (var i = 0; i < this.state.routeStack.length; i++) {
					if (i === this.state.presentedIndex || i === this.state.transitionFromIndex || i === gesturingToIndex) {
						continue;
					}
					this._disableScene(i);
				}
			},

			_disableScene: function _disableScene(sceneIndex) {
				this.refs['scene_' + sceneIndex] && this.refs['scene_' + sceneIndex].setNativeProps(SCENE_DISABLED_NATIVE_PROPS);
			},

			_enableScene: function _enableScene(sceneIndex) {

				var sceneStyle = flattenStyle([styles.baseScene, this.props.sceneStyle]);

				var enabledSceneNativeProps = {
					pointerEvents: 'auto',
					style: {
						top: sceneStyle.top,
						bottom: sceneStyle.bottom } };

				if (sceneIndex !== this.state.transitionFromIndex && sceneIndex !== this.state.presentedIndex) {

					enabledSceneNativeProps.style.opacity = 0;
				}
				this.refs['scene_' + sceneIndex] && this.refs['scene_' + sceneIndex].setNativeProps(enabledSceneNativeProps);
			},

			_onAnimationStart: function _onAnimationStart() {
				var fromIndex = this.state.presentedIndex;
				var toIndex = this.state.presentedIndex;
				if (this.state.transitionFromIndex != null) {
					fromIndex = this.state.transitionFromIndex;
				} else if (this.state.activeGesture) {
					toIndex = this.state.presentedIndex + this._deltaForGestureAction(this.state.activeGesture);
				}
				this._setRenderSceneToHardwareTextureAndroid(fromIndex, true);
				this._setRenderSceneToHardwareTextureAndroid(toIndex, true);
				var navBar = this._navBar;
				if (navBar && navBar.onAnimationStart) {
					navBar.onAnimationStart(fromIndex, toIndex);
				}
			},

			_onAnimationEnd: function _onAnimationEnd() {
				var max = this.state.routeStack.length - 1;
				for (var index = 0; index <= max; index++) {
					this._setRenderSceneToHardwareTextureAndroid(index, false);
				}

				var navBar = this._navBar;
				if (navBar && navBar.onAnimationEnd) {
					navBar.onAnimationEnd();
				}
			},

			_setRenderSceneToHardwareTextureAndroid: function _setRenderSceneToHardwareTextureAndroid(sceneIndex, shouldRenderToHardwareTexture) {
				var viewAtIndex = this.refs['scene_' + sceneIndex];
				if (viewAtIndex === null || viewAtIndex === undefined) {
					return;
				}
				viewAtIndex.setNativeProps({ renderToHardwareTextureAndroid: shouldRenderToHardwareTexture });
			},

			_handleTouchStart: function _handleTouchStart() {
				this._eligibleGestures = GESTURE_ACTIONS;
			},

			_handleMoveShouldSetPanResponder: function _handleMoveShouldSetPanResponder(e, gestureState) {
				var sceneConfig = this.state.sceneConfigStack[this.state.presentedIndex];
				if (!sceneConfig) {
					return false;
				}
				this._expectingGestureGrant = this._matchGestureAction(this._eligibleGestures, sceneConfig.gestures, gestureState);
				return !!this._expectingGestureGrant;
			},

			_doesGestureOverswipe: function _doesGestureOverswipe(gestureName) {
				var wouldOverswipeBack = this.state.presentedIndex <= 0 && (gestureName === 'pop' || gestureName === 'jumpBack');
				var wouldOverswipeForward = this.state.presentedIndex >= this.state.routeStack.length - 1 && gestureName === 'jumpForward';
				return wouldOverswipeForward || wouldOverswipeBack;
			},

			_deltaForGestureAction: function _deltaForGestureAction(gestureAction) {
				switch (gestureAction) {
					case 'pop':
					case 'jumpBack':
						return -1;
					case 'jumpForward':
						return 1;
					default:
						invariant(false, 'Unsupported gesture action ' + gestureAction);
						return;}
			},

			_handlePanResponderRelease: function _handlePanResponderRelease(e, gestureState) {
				var _this4 = this;
				var sceneConfig = this.state.sceneConfigStack[this.state.presentedIndex];
				var releaseGestureAction = this.state.activeGesture;
				if (!releaseGestureAction) {

					return;
				}
				var releaseGesture = sceneConfig.gestures[releaseGestureAction];
				var destIndex = this.state.presentedIndex + this._deltaForGestureAction(this.state.activeGesture);
				if (this.spring.getCurrentValue() === 0) {

					this.spring.setCurrentValue(0).setAtRest();
					this._completeTransition();
					return;
				}
				var isTravelVertical = releaseGesture.direction === 'top-to-bottom' || releaseGesture.direction === 'bottom-to-top';
				var isTravelInverted = releaseGesture.direction === 'right-to-left' || releaseGesture.direction === 'bottom-to-top';
				var velocity, gestureDistance;
				if (isTravelVertical) {
					velocity = isTravelInverted ? -gestureState.vy : gestureState.vy;
					gestureDistance = isTravelInverted ? -gestureState.dy : gestureState.dy;
				} else {
					velocity = isTravelInverted ? -gestureState.vx : gestureState.vx;
					gestureDistance = isTravelInverted ? -gestureState.dx : gestureState.dx;
				}
				var transitionVelocity = clamp(-10, velocity, 10);
				if (Math.abs(velocity) < releaseGesture.notMoving) {

					var hasGesturedEnoughToComplete = gestureDistance > releaseGesture.fullDistance * releaseGesture.stillCompletionRatio;
					transitionVelocity = hasGesturedEnoughToComplete ? releaseGesture.snapVelocity : -releaseGesture.snapVelocity;
				}
				if (transitionVelocity < 0 || this._doesGestureOverswipe(releaseGestureAction)) {

					if (this.state.transitionFromIndex == null) {

						var transitionBackToPresentedIndex = this.state.presentedIndex;

						this.state.presentedIndex = destIndex;
						this._transitionTo(transitionBackToPresentedIndex, -transitionVelocity, 1 - this.spring.getCurrentValue());
					}
				} else {

					this._emitWillFocus(this.state.routeStack[destIndex]);
					this._transitionTo(destIndex, transitionVelocity, null, function () {
						if (releaseGestureAction === 'pop') {
							_this4._cleanScenesPastIndex(destIndex);
						}
					});
				}
				this._detachGesture();
			},

			_handlePanResponderTerminate: function _handlePanResponderTerminate(e, gestureState) {
				if (this.state.activeGesture == null) {
					return;
				}
				var destIndex = this.state.presentedIndex + this._deltaForGestureAction(this.state.activeGesture);
				this._detachGesture();
				var transitionBackToPresentedIndex = this.state.presentedIndex;

				this.state.presentedIndex = destIndex;
				this._transitionTo(transitionBackToPresentedIndex, null, 1 - this.spring.getCurrentValue());
			},

			_attachGesture: function _attachGesture(gestureId) {
				this.state.activeGesture = gestureId;
				var gesturingToIndex = this.state.presentedIndex + this._deltaForGestureAction(this.state.activeGesture);
				this._enableScene(gesturingToIndex);
			},

			_detachGesture: function _detachGesture() {
				this.state.activeGesture = null;
				this.state.pendingGestureProgress = null;
				this._hideScenes();
			},

			_handlePanResponderMove: function _handlePanResponderMove(e, gestureState) {
				if (this._isMoveGestureAttached !== undefined) {
					invariant(this._expectingGestureGrant, 'Responder granted unexpectedly.');

					this._attachGesture(this._expectingGestureGrant);
					this._onAnimationStart();
					this._expectingGestureGrant = undefined;
				}

				var sceneConfig = this.state.sceneConfigStack[this.state.presentedIndex];
				if (this.state.activeGesture) {
					var gesture = sceneConfig.gestures[this.state.activeGesture];
					return this._moveAttachedGesture(gesture, gestureState);
				}
				var matchedGesture = this._matchGestureAction(GESTURE_ACTIONS, sceneConfig.gestures, gestureState);
				if (matchedGesture) {
					this._attachGesture(matchedGesture);
				}
			},

			_moveAttachedGesture: function _moveAttachedGesture(gesture, gestureState) {
				var isTravelVertical = gesture.direction === 'top-to-bottom' || gesture.direction === 'bottom-to-top';
				var isTravelInverted = gesture.direction === 'right-to-left' || gesture.direction === 'bottom-to-top';
				var distance = isTravelVertical ? gestureState.dy : gestureState.dx;
				distance = isTravelInverted ? -distance : distance;
				var gestureDetectMovement = gesture.gestureDetectMovement;
				var nextProgress = (distance - gestureDetectMovement) / (gesture.fullDistance - gestureDetectMovement);
				if (nextProgress < 0 && gesture.isDetachable) {
					var gesturingToIndex = this.state.presentedIndex + this._deltaForGestureAction(this.state.activeGesture);
					this._transitionBetween(this.state.presentedIndex, gesturingToIndex, 0);
					this._detachGesture();
					if (this.state.pendingGestureProgress != null) {
						this.spring.setCurrentValue(0);
					}
					return;
				}
				if (this._doesGestureOverswipe(this.state.activeGesture)) {
					var frictionConstant = gesture.overswipe.frictionConstant;
					var frictionByDistance = gesture.overswipe.frictionByDistance;
					var frictionRatio = 1 / (frictionConstant + Math.abs(nextProgress) * frictionByDistance);
					nextProgress *= frictionRatio;
				}
				nextProgress = clamp(0, nextProgress, 1);
				if (this.state.transitionFromIndex != null) {
					this.state.pendingGestureProgress = nextProgress;
				} else if (this.state.pendingGestureProgress) {
					this.spring.setEndValue(nextProgress);
				} else {
					this.spring.setCurrentValue(nextProgress);
				}
			},

			_matchGestureAction: function _matchGestureAction(eligibleGestures, gestures, gestureState) {
				var _this5 = this;
				if (!gestures || !eligibleGestures || !eligibleGestures.some) {
					return null;
				}
				var matchedGesture = null;
				eligibleGestures.some(function (gestureName, gestureIndex) {
					var gesture = gestures[gestureName];
					if (!gesture) {
						return;
					}
					if (gesture.overswipe == null && _this5._doesGestureOverswipe(gestureName)) {

						return false;
					}
					var isTravelVertical = gesture.direction === 'top-to-bottom' || gesture.direction === 'bottom-to-top';
					var isTravelInverted = gesture.direction === 'right-to-left' || gesture.direction === 'bottom-to-top';
					var startedLoc = isTravelVertical ? gestureState.y0 : gestureState.x0;
					var currentLoc = isTravelVertical ? gestureState.moveY : gestureState.moveX;
					var travelDist = isTravelVertical ? gestureState.dy : gestureState.dx;
					var oppositeAxisTravelDist = isTravelVertical ? gestureState.dx : gestureState.dy;
					var edgeHitWidth = gesture.edgeHitWidth;
					if (isTravelInverted) {
						startedLoc = -startedLoc;
						currentLoc = -currentLoc;
						travelDist = -travelDist;
						oppositeAxisTravelDist = -oppositeAxisTravelDist;
						edgeHitWidth = isTravelVertical ? -(SCREEN_HEIGHT - edgeHitWidth) : -(SCREEN_WIDTH - edgeHitWidth);
					}
					if (startedLoc === 0) {
						startedLoc = currentLoc;
					}
					var moveStartedInRegion = gesture.edgeHitWidth == null || startedLoc < edgeHitWidth;
					if (!moveStartedInRegion) {
						return false;
					}
					var moveTravelledFarEnough = travelDist >= gesture.gestureDetectMovement;
					if (!moveTravelledFarEnough) {
						return false;
					}
					var directionIsCorrect = Math.abs(travelDist) > Math.abs(oppositeAxisTravelDist) * gesture.directionRatio;
					if (directionIsCorrect) {
						matchedGesture = gestureName;
						return true;
					} else {
						_this5._eligibleGestures = _this5._eligibleGestures.slice().splice(gestureIndex, 1);
					}
				});
				return matchedGesture || null;
			},

			_transitionSceneStyle: function _transitionSceneStyle(fromIndex, toIndex, progress, index) {
				var viewAtIndex = this.refs['scene_' + index];
				if (viewAtIndex === null || viewAtIndex === undefined) {
					return;
				}

				var sceneConfigIndex = fromIndex < toIndex ? toIndex : fromIndex;
				var sceneConfig = this.state.sceneConfigStack[sceneConfigIndex];

				if (!sceneConfig) {
					sceneConfig = this.state.sceneConfigStack[sceneConfigIndex - 1];
				}
				var styleToUse = {};
				var useFn = index < fromIndex || index < toIndex ? sceneConfig.animationInterpolators.out : sceneConfig.animationInterpolators.into;
				var directionAdjustedProgress = fromIndex < toIndex ? progress : 1 - progress;
				var didChange = useFn(styleToUse, directionAdjustedProgress);
				if (didChange) {
					viewAtIndex.setNativeProps({ style: styleToUse });
				}
			},

			_transitionBetween: function _transitionBetween(fromIndex, toIndex, progress) {
				this._transitionSceneStyle(fromIndex, toIndex, progress, fromIndex);
				this._transitionSceneStyle(fromIndex, toIndex, progress, toIndex);
				var navBar = this._navBar;
				if (navBar && navBar.updateProgress && toIndex >= 0 && fromIndex >= 0) {
					navBar.updateProgress(progress, fromIndex, toIndex);
				}
			},

			_handleResponderTerminationRequest: function _handleResponderTerminationRequest() {
				return false;
			},

			_getDestIndexWithinBounds: function _getDestIndexWithinBounds(n) {
				var currentIndex = this.state.presentedIndex;
				var destIndex = currentIndex + n;
				invariant(destIndex >= 0, 'Cannot jump before the first route.');

				var maxIndex = this.state.routeStack.length - 1;
				invariant(maxIndex >= destIndex, 'Cannot jump past the last route.');

				return destIndex;
			},

			_jumpN: function _jumpN(n) {
				var destIndex = this._getDestIndexWithinBounds(n);
				this._enableScene(destIndex);
				this._emitWillFocus(this.state.routeStack[destIndex]);
				this._transitionTo(destIndex);
			},

			jumpTo: function jumpTo(route) {
				var destIndex = this.state.routeStack.indexOf(route);
				invariant(destIndex !== -1, 'Cannot jump to route that is not in the route stack');

				this._jumpN(destIndex - this.state.presentedIndex);
			},

			jumpForward: function jumpForward() {
				this._jumpN(1);
			},

			jumpBack: function jumpBack() {
				this._jumpN(-1);
			},

			push: function push(route) {
				var _this6 = this;
				invariant(!!route, 'Must supply route to push');
				var activeLength = this.state.presentedIndex + 1;
				var activeStack = this.state.routeStack.slice(0, activeLength);
				var activeAnimationConfigStack = this.state.sceneConfigStack.slice(0, activeLength);
				var nextStack = activeStack.concat([route]);
				var destIndex = nextStack.length - 1;
				var nextSceneConfig = this.props.configureScene(route, nextStack);
				var nextAnimationConfigStack = activeAnimationConfigStack.concat([nextSceneConfig]);
				this._emitWillFocus(nextStack[destIndex]);
				this.setState({
					routeStack: nextStack,
					sceneConfigStack: nextAnimationConfigStack }, function () {
					_this6._enableScene(destIndex);
					_this6._transitionTo(destIndex, nextSceneConfig.defaultTransitionVelocity);
				});
			},

			popN: function popN(n) {
				var _this7 = this;
				invariant(typeof n === 'number', 'Must supply a number to popN');
				n = parseInt(n, 10);
				if (n <= 0 || this.state.presentedIndex - n < 0) {
					return;
				}
				var popIndex = this.state.presentedIndex - n;
				var presentedRoute = this.state.routeStack[this.state.presentedIndex];
				var popSceneConfig = this.props.configureScene(presentedRoute);
				this._enableScene(popIndex);
				this._emitWillFocus(this.state.routeStack[popIndex]);
				this._transitionTo(popIndex, popSceneConfig.defaultTransitionVelocity, null, function () {
					_this7._cleanScenesPastIndex(popIndex);
				});
			},

			pop: function pop() {
				if (this.state.transitionQueue.length) {

					return;
				}

				this.popN(1);
			},

			replaceAtIndex: function replaceAtIndex(route, index, cb) {
				var _this8 = this;
				invariant(!!route, 'Must supply route to replace');
				if (index < 0) {
					index += this.state.routeStack.length;
				}

				if (this.state.routeStack.length <= index) {
					return;
				}

				var nextRouteStack = this.state.routeStack.slice();
				var nextAnimationModeStack = this.state.sceneConfigStack.slice();
				nextRouteStack[index] = route;
				nextAnimationModeStack[index] = this.props.configureScene(route, nextRouteStack);

				if (index === this.state.presentedIndex) {
					this._emitWillFocus(route);
				}
				this.setState({
					routeStack: nextRouteStack,
					sceneConfigStack: nextAnimationModeStack }, function () {
					if (index === _this8.state.presentedIndex) {
						_this8._emitDidFocus(route);
					}
					cb && cb();
				});
			},

			replace: function replace(route) {
				this.replaceAtIndex(route, this.state.presentedIndex);
			},

			replacePrevious: function replacePrevious(route) {
				this.replaceAtIndex(route, this.state.presentedIndex - 1);
			},

			popToTop: function popToTop() {
				this.popToRoute(this.state.routeStack[0]);
			},

			popToRoute: function popToRoute(route) {
				var indexOfRoute = this.state.routeStack.indexOf(route);
				invariant(indexOfRoute !== -1, 'Calling popToRoute for a route that doesn\'t exist!');

				var numToPop = this.state.presentedIndex - indexOfRoute;
				this.popN(numToPop);
			},

			replacePreviousAndPop: function replacePreviousAndPop(route) {
				if (this.state.routeStack.length < 2) {
					return;
				}
				this.replacePrevious(route);
				this.pop();
			},

			resetTo: function resetTo(route) {
				var _this9 = this;
				invariant(!!route, 'Must supply route to push');
				this.replaceAtIndex(route, 0, function () {

					_this9.popN(_this9.state.presentedIndex);
				});
			},

			getCurrentRoutes: function getCurrentRoutes() {

				return this.state.routeStack.slice();
			},

			_cleanScenesPastIndex: function _cleanScenesPastIndex(index) {
				var newStackLength = index + 1;

				if (newStackLength < this.state.routeStack.length) {
					this.setState({
						sceneConfigStack: this.state.sceneConfigStack.slice(0, newStackLength),
						routeStack: this.state.routeStack.slice(0, newStackLength) });
				}
			},

			_renderScene: function _renderScene(route, i) {
				var _this10 = this;
				var disabledSceneStyle = null;
				var disabledScenePointerEvents = 'auto';
				if (i !== this.state.presentedIndex) {
					disabledSceneStyle = styles.disabledScene;
					disabledScenePointerEvents = 'none';
				}
				return React.createElement(View, {
					key: 'scene_' + getRouteID(route),
					ref: 'scene_' + i,
					onStartShouldSetResponderCapture: function onStartShouldSetResponderCapture() {
						return _this10.state.transitionFromIndex != null;
					},
					pointerEvents: disabledScenePointerEvents,
					style: [styles.baseScene, this.props.sceneStyle, disabledSceneStyle] }, this.props.renderScene(route, this));
			},

			_renderNavigationBar: function _renderNavigationBar() {
				var _this11 = this;var navigationBar = this.props.navigationBar;
				if (!navigationBar) {
					return null;
				}
				return React.cloneElement(navigationBar, {
					ref: function ref(navBar) {
						_this11._navBar = navBar;
						if (navigationBar && typeof navigationBar.ref === 'function') {
							navigationBar.ref(navBar);
						}
					},
					navigator: this._navigationBarNavigator,
					navState: this.state });
			},

			render: function render() {
				var _this12 = this;
				var newRenderedSceneMap = new Map();
				var scenes = this.state.routeStack.map(function (route, index) {
					var renderedScene;
					if (_this12._renderedSceneMap.has(route) && index !== _this12.state.presentedIndex) {
						renderedScene = _this12._renderedSceneMap.get(route);
					} else {
						renderedScene = _this12._renderScene(route, index);
					}
					newRenderedSceneMap.set(route, renderedScene);
					return renderedScene;
				});
				this._renderedSceneMap = newRenderedSceneMap;
				return React.createElement(View, { style: [styles.container, this.props.style] }, React.createElement(View, babelHelpers.extends({
					style: styles.transitioner }, this.panGesture.panHandlers, {
					onTouchStart: this._handleTouchStart,
					onResponderTerminationRequest: this._handleResponderTerminationRequest }), scenes), this._renderNavigationBar());
			},

			_getNavigationContext: function _getNavigationContext() {
				if (!this._navigationContext) {
					this._navigationContext = new NavigationContext();
				}
				return this._navigationContext;
			} });

		module.exports = Navigator;
	}, // Libraries/Interaction/InteractionMixin.js
	function (__inner_require__, exports, module) {
		var InteractionManager = __inner_require__(14 /*Libraries/Interaction/InteractionManager.js*/);

		var InteractionMixin = {
			componentWillUnmount: function componentWillUnmount() {
				while (this._interactionMixinHandles.length) {
					InteractionManager.clearInteractionHandle(this._interactionMixinHandles.pop());
				}
			},

			_interactionMixinHandles: [],

			createInteractionHandle: function createInteractionHandle() {
				var handle = InteractionManager.createInteractionHandle();
				this._interactionMixinHandles.push(handle);
				return handle;
			},

			clearInteractionHandle: function clearInteractionHandle(clearHandle) {
				InteractionManager.clearInteractionHandle(clearHandle);
				this._interactionMixinHandles = this._interactionMixinHandles.filter(function (handle) {
					return handle !== clearHandle;
				});
			},

			runAfterInteractions: function runAfterInteractions(callback) {
				InteractionManager.runAfterInteractions(callback);
			} };

		module.exports = InteractionMixin;
	}, // Libraries/CustomComponents/Navigator/Navigation/NavigationContext.js
	function (__inner_require__, exports, module) {
		var NavigationEvent = __inner_require__(49 /*Libraries/CustomComponents/Navigator/Navigation/NavigationEvent.js*/);
		var NavigationEventEmitter = __inner_require__(50 /*Libraries/CustomComponents/Navigator/Navigation/NavigationEventEmitter.js*/);
		var NavigationTreeNode = __inner_require__(51 /*Libraries/CustomComponents/Navigator/Navigation/NavigationTreeNode.js*/);

		var Set = require('react-native@0.37/Libraries/vendor/core/Set.js');

		var emptyFunction = require('fbjs@0.8/lib/emptyFunction.js');
		var invariant = require('fbjs@0.8/lib/invariant.js');var AT_TARGET = NavigationEvent.AT_TARGET,
		    BUBBLING_PHASE = NavigationEvent.BUBBLING_PHASE,
		    CAPTURING_PHASE = NavigationEvent.CAPTURING_PHASE;

		var LegacyEventTypes = new Set(['willfocus', 'didfocus']);var NavigationContext = function () {

			function NavigationContext() {
				babelHelpers.classCallCheck(this, NavigationContext);
				this._bubbleEventEmitter = new NavigationEventEmitter(this);
				this._captureEventEmitter = new NavigationEventEmitter(this);
				this._currentRoute = null;

				this.__node = new NavigationTreeNode(this);

				this._emitCounter = 0;
				this._emitQueue = [];

				this.addListener('willfocus', this._onFocus);
				this.addListener('didfocus', this._onFocus);
			}babelHelpers.createClass(NavigationContext, [{ key: 'appendChild', value: function appendChild(childContext) {
					this.__node.appendChild(childContext.__node);
				} }, { key: 'addListener', value: function addListener(eventType, listener, useCapture) {
					if (LegacyEventTypes.has(eventType)) {
						useCapture = false;
					}

					var emitter = useCapture ? this._captureEventEmitter : this._bubbleEventEmitter;

					if (emitter) {
						return emitter.addListener(eventType, listener, this);
					} else {
						return { remove: emptyFunction };
					}
				} }, { key: 'emit', value: function emit(eventType, data, didEmitCallback) {
					var _this = this;
					if (this._emitCounter > 0) {

						var args = Array.prototype.slice.call(arguments);
						this._emitQueue.push(args);
						return;
					}

					this._emitCounter++;

					if (LegacyEventTypes.has(eventType)) {

						this.__emit(eventType, data, null, {
							defaultPrevented: false,
							eventPhase: AT_TARGET,
							propagationStopped: true,
							target: this });
					} else {
						var targets = [this];
						var parentTarget = this.parent;
						while (parentTarget) {
							targets.unshift(parentTarget);
							parentTarget = parentTarget.parent;
						}

						var propagationStopped = false;
						var defaultPrevented = false;
						var callback = function callback(event) {
							propagationStopped = propagationStopped || event.isPropagationStopped();
							defaultPrevented = defaultPrevented || event.defaultPrevented;
						};

						targets.some(function (currentTarget) {
							if (propagationStopped) {
								return true;
							}

							var extraInfo = {
								defaultPrevented: defaultPrevented,
								eventPhase: CAPTURING_PHASE,
								propagationStopped: propagationStopped,
								target: _this };

							currentTarget.__emit(eventType, data, callback, extraInfo);
						}, this);

						targets.reverse().some(function (currentTarget) {
							if (propagationStopped) {
								return true;
							}
							var extraInfo = {
								defaultPrevented: defaultPrevented,
								eventPhase: BUBBLING_PHASE,
								propagationStopped: propagationStopped,
								target: _this };

							currentTarget.__emit(eventType, data, callback, extraInfo);
						}, this);
					}

					if (didEmitCallback) {
						var event = NavigationEvent.pool(eventType, this, data);
						propagationStopped && event.stopPropagation();
						defaultPrevented && event.preventDefault();
						didEmitCallback.call(this, event);
						event.dispose();
					}

					this._emitCounter--;
					while (this._emitQueue.length) {
						var args = this._emitQueue.shift();
						this.emit.apply(this, args);
					}
				} }, { key: 'dispose', value: function dispose() {

					this._bubbleEventEmitter && this._bubbleEventEmitter.removeAllListeners();
					this._captureEventEmitter && this._captureEventEmitter.removeAllListeners();
					this._bubbleEventEmitter = null;
					this._captureEventEmitter = null;
					this._currentRoute = null;
				} }, { key: '__emit', value: function __emit(eventType, data, didEmitCallback, extraInfo) {
					var emitter;
					switch (extraInfo.eventPhase) {
						case CAPTURING_PHASE:
							emitter = this._captureEventEmitter;
							break;

						case AT_TARGET:
							emitter = this._bubbleEventEmitter;
							break;

						case BUBBLING_PHASE:
							emitter = this._bubbleEventEmitter;
							break;

						default:
							invariant(false, 'invalid event phase %s', extraInfo.eventPhase);}

					if (extraInfo.target === this) {

						extraInfo.eventPhase = AT_TARGET;
					}

					if (emitter) {
						emitter.emit(eventType, data, didEmitCallback, extraInfo);
					}
				} }, { key: '_onFocus', value: function _onFocus(event) {
					invariant(event.data && event.data.hasOwnProperty('route'), 'event type "%s" should provide route', event.type);

					this._currentRoute = event.data.route;
				} }, { key: 'parent', get: function get() {
					var parent = this.__node.getParent();return parent ? parent.getValue() : null;
				} }, { key: 'top', get: function get() {
					var result = null;var parentNode = this.__node.getParent();while (parentNode) {
						result = parentNode.getValue();parentNode = parentNode.getParent();
					}return result;
				} }, { key: 'currentRoute', get: function get() {
					return this._currentRoute;
				} }]);return NavigationContext;
		}();

		module.exports = NavigationContext;
	}, // Libraries/CustomComponents/Navigator/Navigation/NavigationEvent.js
	function (__inner_require__, exports, module) {
		var invariant = require('fbjs@0.8/lib/invariant.js');var NavigationEventPool = function () {

			function NavigationEventPool() {
				babelHelpers.classCallCheck(this, NavigationEventPool);
				this._list = [];
			}babelHelpers.createClass(NavigationEventPool, [{ key: 'get', value: function get(type, currentTarget, data) {
					var event = void 0;
					if (this._list.length > 0) {
						event = this._list.pop();
						event.constructor.call(event, type, currentTarget, data);
					} else {
						event = new NavigationEvent(type, currentTarget, data);
					}
					return event;
				} }, { key: 'put', value: function put(event) {
					this._list.push(event);
				} }]);return NavigationEventPool;
		}();

		var _navigationEventPool = new NavigationEventPool();var NavigationEvent = function () {
			babelHelpers.createClass(NavigationEvent, null, [{ key: 'pool', value: function pool(type, currentTarget, data) {
					return _navigationEventPool.get(type, currentTarget, data);
				} }]);

			function NavigationEvent(type, currentTarget, data) {
				babelHelpers.classCallCheck(this, NavigationEvent);
				this.target = currentTarget;
				this.eventPhase = NavigationEvent.NONE;

				this._type = type;
				this._currentTarget = currentTarget;
				this._data = data;
				this._defaultPrevented = false;
				this._disposed = false;
				this._propagationStopped = false;
			}babelHelpers.createClass(NavigationEvent, [{ key: 'preventDefault', value: function preventDefault() {
					this._defaultPrevented = true;
				} }, { key: 'stopPropagation', value: function stopPropagation() {
					this._propagationStopped = true;
				} }, { key: 'stop', value: function stop() {
					this.preventDefault();
					this.stopPropagation();
				} }, { key: 'isPropagationStopped', value: function isPropagationStopped() {
					return this._propagationStopped;
				} }, { key: 'dispose', value: function dispose() {
					invariant(!this._disposed, 'NavigationEvent is already disposed');
					this._disposed = true;

					this.target = null;
					this.eventPhase = NavigationEvent.NONE;
					this._type = '';
					this._currentTarget = null;
					this._data = null;
					this._defaultPrevented = false;

					_navigationEventPool.put(this);
				} }, { key: 'type', get: function get() {
					return this._type;
				} }, { key: 'currentTarget', get: function get() {
					return this._currentTarget;
				} }, { key: 'data', get: function get() {
					return this._data;
				} }, { key: 'defaultPrevented', get: function get() {
					return this._defaultPrevented;
				} }]);return NavigationEvent;
		}();

		NavigationEvent.NONE = 0;

		NavigationEvent.CAPTURING_PHASE = 1;

		NavigationEvent.AT_TARGET = 2;

		NavigationEvent.BUBBLING_PHASE = 3;

		module.exports = NavigationEvent;
	}, // Libraries/CustomComponents/Navigator/Navigation/NavigationEventEmitter.js
	function (__inner_require__, exports, module) {
		var EventEmitter = require('react-native@0.37/Libraries/EventEmitter/EventEmitter.js');
		var NavigationEvent = __inner_require__(49 /*Libraries/CustomComponents/Navigator/Navigation/NavigationEvent.js*/);var NavigationEventEmitter = function (_EventEmitter) {
			babelHelpers.inherits(NavigationEventEmitter, _EventEmitter);

			function NavigationEventEmitter(target) {
				babelHelpers.classCallCheck(this, NavigationEventEmitter);var _this = babelHelpers.possibleConstructorReturn(this, (NavigationEventEmitter.__proto__ || Object.getPrototypeOf(NavigationEventEmitter)).call(this));

				_this._emitting = false;
				_this._emitQueue = [];
				_this._target = target;return _this;
			}babelHelpers.createClass(NavigationEventEmitter, [{ key: 'emit', value: function emit(eventType, data, didEmitCallback, extraInfo) {
					if (this._emitting) {

						var args = Array.prototype.slice.call(arguments);
						this._emitQueue.push(args);
						return;
					}

					this._emitting = true;

					var event = NavigationEvent.pool(eventType, this._target, data);

					if (extraInfo) {
						if (extraInfo.target) {
							event.target = extraInfo.target;
						}

						if (extraInfo.eventPhase) {
							event.eventPhase = extraInfo.eventPhase;
						}

						if (extraInfo.defaultPrevented) {
							event.preventDefault();
						}

						if (extraInfo.propagationStopped) {
							event.stopPropagation();
						}
					}

					babelHelpers.get(NavigationEventEmitter.prototype.__proto__ || Object.getPrototypeOf(NavigationEventEmitter.prototype), 'emit', this).call(this, String(eventType), event);

					if (typeof didEmitCallback === 'function') {
						didEmitCallback.call(this._target, event);
					}
					event.dispose();

					this._emitting = false;

					while (this._emitQueue.length) {
						var args = this._emitQueue.shift();
						this.emit.apply(this, args);
					}
				} }]);return NavigationEventEmitter;
		}(EventEmitter);

		module.exports = NavigationEventEmitter;
	}, // Libraries/CustomComponents/Navigator/Navigation/NavigationTreeNode.js
	function (__inner_require__, exports, module) {
		var invariant = require('fbjs@0.8/lib/invariant.js');
		var immutable = require('immutable@3.7/dist/immutable.js');var List = immutable.List;var NavigationTreeNode = function () {

			function NavigationTreeNode(value) {
				babelHelpers.classCallCheck(this, NavigationTreeNode);
				this.__parent = null;
				this._children = new List();
				this._value = value;
			}babelHelpers.createClass(NavigationTreeNode, [{ key: 'getValue', value: function getValue() {
					return this._value;
				} }, { key: 'getParent', value: function getParent() {
					return this.__parent;
				} }, { key: 'getChildrenCount', value: function getChildrenCount() {
					return this._children.size;
				} }, { key: 'getChildAt', value: function getChildAt(index) {
					return index > -1 && index < this._children.size ? this._children.get(index) : null;
				} }, { key: 'appendChild', value: function appendChild(child) {
					if (child.__parent) {
						child.__parent.removeChild(child);
					}
					child.__parent = this;
					this._children = this._children.push(child);
				} }, { key: 'removeChild', value: function removeChild(child) {
					var index = this._children.indexOf(child);

					invariant(index > -1, 'The node to be removed is not a child of this node.');

					child.__parent = null;

					this._children = this._children.splice(index, 1);
				} }, { key: 'indexOf', value: function indexOf(child) {
					return this._children.indexOf(child);
				} }, { key: 'forEach', value: function forEach(callback, context) {
					this._children.forEach(callback, context);
				} }, { key: 'map', value: function map(callback, context) {
					return this._children.map(callback, context).toJS();
				} }, { key: 'some', value: function some(callback, context) {
					return this._children.some(callback, context);
				} }]);return NavigationTreeNode;
		}();

		module.exports = NavigationTreeNode;
	}, // Libraries/CustomComponents/Navigator/NavigatorBreadcrumbNavigationBar.js
	function (__inner_require__, exports, module) {
		var NavigatorBreadcrumbNavigationBarStyles = __inner_require__(53 /*Libraries/CustomComponents/Navigator/NavigatorBreadcrumbNavigationBarStyles.ios.js*/);
		var NavigatorNavigationBarStylesAndroid = __inner_require__(56 /*Libraries/CustomComponents/Navigator/NavigatorNavigationBarStylesAndroid.js*/);
		var NavigatorNavigationBarStylesIOS = __inner_require__(54 /*Libraries/CustomComponents/Navigator/NavigatorNavigationBarStylesIOS.js*/);
		var Platform = require('react-native@0.37/Libraries/Utilities/Platform.ios.js');
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var StyleSheet = require('react-native@0.37/Libraries/StyleSheet/StyleSheet.js');
		var View = require('react-native@0.37/Libraries/Components/View/View.js');

		var guid = require('react-native@0.37/Libraries/vendor/core/guid.js');
		var invariant = require('fbjs@0.8/lib/invariant.js');var _require = require('immutable@3.7/dist/immutable.js'),
		    Map = _require.Map;

		var Interpolators = NavigatorBreadcrumbNavigationBarStyles.Interpolators;
		var NavigatorNavigationBarStyles = Platform.OS === 'android' ? NavigatorNavigationBarStylesAndroid : NavigatorNavigationBarStylesIOS;
		var PropTypes = React.PropTypes;

		var CRUMB_PROPS = Interpolators.map(function () {
			return { style: {} };
		});
		var ICON_PROPS = Interpolators.map(function () {
			return { style: {} };
		});
		var SEPARATOR_PROPS = Interpolators.map(function () {
			return { style: {} };
		});
		var TITLE_PROPS = Interpolators.map(function () {
			return { style: {} };
		});
		var RIGHT_BUTTON_PROPS = Interpolators.map(function () {
			return { style: {} };
		});

		function navStatePresentedIndex(navState) {
			if (navState.presentedIndex !== undefined) {
				return navState.presentedIndex;
			}

			return navState.observedTopOfStack;
		}

		function initStyle(index, presentedIndex) {
			return index === presentedIndex ? NavigatorBreadcrumbNavigationBarStyles.Center[index] : index < presentedIndex ? NavigatorBreadcrumbNavigationBarStyles.Left[index] : NavigatorBreadcrumbNavigationBarStyles.Right[index];
		}var NavigatorBreadcrumbNavigationBar = function (_React$Component) {
			babelHelpers.inherits(NavigatorBreadcrumbNavigationBar, _React$Component);function NavigatorBreadcrumbNavigationBar() {
				var _ref;var _temp, _this, _ret;babelHelpers.classCallCheck(this, NavigatorBreadcrumbNavigationBar);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = NavigatorBreadcrumbNavigationBar.__proto__ || Object.getPrototypeOf(NavigatorBreadcrumbNavigationBar)).call.apply(_ref, [this].concat(args))), _this), _this._getBreadcrumb = function (route, index) {

					var pointerEvents = _this.props.navState.routeStack.length <= 1 && index === 0 ? 'none' : 'auto';

					var navBarRouteMapper = _this.props.routeMapper;
					var firstStyles = initStyle(index, navStatePresentedIndex(_this.props.navState));

					var breadcrumbDescriptor = React.createElement(View, {
						key: 'crumb_' + index,
						pointerEvents: pointerEvents,
						ref: 'crumb_' + index,
						style: firstStyles.Crumb }, React.createElement(View, { ref: 'icon_' + index, style: firstStyles.Icon }, navBarRouteMapper.iconForRoute(route, _this.props.navigator)), React.createElement(View, { ref: 'separator_' + index, style: firstStyles.Separator }, navBarRouteMapper.separatorForRoute(route, _this.props.navigator)));

					return breadcrumbDescriptor;
				}, _this._getTitle = function (route, index) {
					if (_this._descriptors.title.has(route)) {
						return _this._descriptors.title.get(route);
					}

					var titleContent = _this.props.routeMapper.titleContentForRoute(_this.props.navState.routeStack[index], _this.props.navigator);

					var firstStyles = initStyle(index, navStatePresentedIndex(_this.props.navState));

					var titleDescriptor = React.createElement(View, {
						key: 'title_' + index,
						ref: 'title_' + index,
						style: firstStyles.Title }, titleContent);

					_this._descriptors.title = _this._descriptors.title.set(route, titleDescriptor);
					return titleDescriptor;
				}, _this._getRightButton = function (route, index) {
					if (_this._descriptors.right.has(route)) {
						return _this._descriptors.right.get(route);
					}
					var rightContent = _this.props.routeMapper.rightContentForRoute(_this.props.navState.routeStack[index], _this.props.navigator);

					if (!rightContent) {
						_this._descriptors.right = _this._descriptors.right.set(route, null);
						return null;
					}
					var firstStyles = initStyle(index, navStatePresentedIndex(_this.props.navState));
					var rightButtonDescriptor = React.createElement(View, {
						key: 'right_' + index,
						ref: 'right_' + index,
						style: firstStyles.RightItem }, rightContent);

					_this._descriptors.right = _this._descriptors.right.set(route, rightButtonDescriptor);
					return rightButtonDescriptor;
				}, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
			}babelHelpers.createClass(NavigatorBreadcrumbNavigationBar, [{ key: '_updateIndexProgress', value: function _updateIndexProgress(progress, index, fromIndex, toIndex) {
					var amount = toIndex > fromIndex ? progress : 1 - progress;var oldDistToCenter = index - fromIndex;var newDistToCenter = index - toIndex;var interpolate;invariant(Interpolators[index], 'Cannot find breadcrumb interpolators for ' + index);if (oldDistToCenter > 0 && newDistToCenter === 0 || newDistToCenter > 0 && oldDistToCenter === 0) {
						interpolate = Interpolators[index].RightToCenter;
					} else if (oldDistToCenter < 0 && newDistToCenter === 0 || newDistToCenter < 0 && oldDistToCenter === 0) {
						interpolate = Interpolators[index].CenterToLeft;
					} else if (oldDistToCenter === newDistToCenter) {
						interpolate = Interpolators[index].RightToCenter;
					} else {
						interpolate = Interpolators[index].RightToLeft;
					}if (interpolate.Crumb(CRUMB_PROPS[index].style, amount)) {
						this._setPropsIfExists('crumb_' + index, CRUMB_PROPS[index]);
					}if (interpolate.Icon(ICON_PROPS[index].style, amount)) {
						this._setPropsIfExists('icon_' + index, ICON_PROPS[index]);
					}if (interpolate.Separator(SEPARATOR_PROPS[index].style, amount)) {
						this._setPropsIfExists('separator_' + index, SEPARATOR_PROPS[index]);
					}if (interpolate.Title(TITLE_PROPS[index].style, amount)) {
						this._setPropsIfExists('title_' + index, TITLE_PROPS[index]);
					}var right = this.refs['right_' + index];var rightButtonStyle = RIGHT_BUTTON_PROPS[index].style;if (right && interpolate.RightItem(rightButtonStyle, amount)) {
						right.setNativeProps({ style: rightButtonStyle, pointerEvents: rightButtonStyle.opacity === 0 ? 'none' : 'auto' });
					}
				} }, { key: 'updateProgress', value: function updateProgress(progress, fromIndex, toIndex) {
					var max = Math.max(fromIndex, toIndex);var min = Math.min(fromIndex, toIndex);for (var index = min; index <= max; index++) {
						this._updateIndexProgress(progress, index, fromIndex, toIndex);
					}
				} }, { key: 'onAnimationStart', value: function onAnimationStart(fromIndex, toIndex) {
					var max = Math.max(fromIndex, toIndex);var min = Math.min(fromIndex, toIndex);for (var index = min; index <= max; index++) {
						this._setRenderViewsToHardwareTextureAndroid(index, true);
					}
				} }, { key: 'onAnimationEnd', value: function onAnimationEnd() {
					var max = this.props.navState.routeStack.length - 1;for (var index = 0; index <= max; index++) {
						this._setRenderViewsToHardwareTextureAndroid(index, false);
					}
				} }, { key: '_setRenderViewsToHardwareTextureAndroid', value: function _setRenderViewsToHardwareTextureAndroid(index, renderToHardwareTexture) {
					var props = { renderToHardwareTextureAndroid: renderToHardwareTexture };this._setPropsIfExists('icon_' + index, props);this._setPropsIfExists('separator_' + index, props);this._setPropsIfExists('title_' + index, props);this._setPropsIfExists('right_' + index, props);
				} }, { key: 'componentWillMount', value: function componentWillMount() {
					this._reset();
				} }, { key: 'render', value: function render() {
					var navState = this.props.navState;var icons = navState && navState.routeStack.map(this._getBreadcrumb);var titles = navState.routeStack.map(this._getTitle);var buttons = navState.routeStack.map(this._getRightButton);return React.createElement(View, { key: this._key, style: [styles.breadCrumbContainer, this.props.style] }, titles, icons, buttons);
				} }, { key: 'immediatelyRefresh', value: function immediatelyRefresh() {
					this._reset();this.forceUpdate();
				} }, { key: '_reset', value: function _reset() {
					this._key = guid();this._descriptors = { title: new Map(), right: new Map() };
				} }, { key: '_setPropsIfExists', value: function _setPropsIfExists(ref, props) {
					var ref = this.refs[ref];
					ref && ref.setNativeProps(props);
				} }]);return NavigatorBreadcrumbNavigationBar;
		}(React.Component);NavigatorBreadcrumbNavigationBar.propTypes = { navigator: PropTypes.shape({ push: PropTypes.func, pop: PropTypes.func, replace: PropTypes.func, popToRoute: PropTypes.func, popToTop: PropTypes.func }), routeMapper: PropTypes.shape({ rightContentForRoute: PropTypes.func, titleContentForRoute: PropTypes.func, iconForRoute: PropTypes.func }), navState: React.PropTypes.shape({ routeStack: React.PropTypes.arrayOf(React.PropTypes.object), presentedIndex: React.PropTypes.number }), style: View.propTypes.style };NavigatorBreadcrumbNavigationBar.Styles = NavigatorBreadcrumbNavigationBarStyles;

		var styles = StyleSheet.create({
			breadCrumbContainer: {
				overflow: 'hidden',
				position: 'absolute',
				height: NavigatorNavigationBarStyles.General.TotalNavHeight,
				top: 0,
				left: 0,
				right: 0 } });

		module.exports = NavigatorBreadcrumbNavigationBar;
	}, // Libraries/CustomComponents/Navigator/NavigatorBreadcrumbNavigationBarStyles.ios.js
	function (__inner_require__, exports, module) {
		var Dimensions = require('react-native@0.37/Libraries/Utilities/Dimensions.js');
		var NavigatorNavigationBarStylesIOS = __inner_require__(54 /*Libraries/CustomComponents/Navigator/NavigatorNavigationBarStylesIOS.js*/);

		var buildStyleInterpolator = __inner_require__(55 /*Libraries/Utilities/buildStyleInterpolator.js*/);
		var merge = require('react-native@0.37/Libraries/vendor/core/merge.js');

		var SCREEN_WIDTH = Dimensions.get('window').width;
		var STATUS_BAR_HEIGHT = NavigatorNavigationBarStylesIOS.General.StatusBarHeight;
		var NAV_BAR_HEIGHT = NavigatorNavigationBarStylesIOS.General.NavBarHeight;

		var SPACING = 4;
		var ICON_WIDTH = 40;
		var SEPARATOR_WIDTH = 9;
		var CRUMB_WIDTH = ICON_WIDTH + SEPARATOR_WIDTH;

		var OPACITY_RATIO = 100;
		var ICON_INACTIVE_OPACITY = 0.6;
		var MAX_BREADCRUMBS = 10;

		var CRUMB_BASE = {
			position: 'absolute',
			flexDirection: 'row',
			top: STATUS_BAR_HEIGHT,
			width: CRUMB_WIDTH,
			height: NAV_BAR_HEIGHT,
			backgroundColor: 'transparent' };

		var ICON_BASE = {
			width: ICON_WIDTH,
			height: NAV_BAR_HEIGHT };

		var SEPARATOR_BASE = {
			width: SEPARATOR_WIDTH,
			height: NAV_BAR_HEIGHT };

		var TITLE_BASE = {
			position: 'absolute',
			top: STATUS_BAR_HEIGHT,
			height: NAV_BAR_HEIGHT,
			backgroundColor: 'transparent' };

		var FIRST_TITLE_BASE = merge(TITLE_BASE, {
			left: 0,
			right: 0,
			alignItems: 'center',
			height: NAV_BAR_HEIGHT });

		var RIGHT_BUTTON_BASE = {
			position: 'absolute',
			top: STATUS_BAR_HEIGHT,
			right: SPACING,
			overflow: 'hidden',
			opacity: 1,
			height: NAV_BAR_HEIGHT,
			backgroundColor: 'transparent' };

		var LEFT = [];
		var CENTER = [];
		var RIGHT = [];
		for (var i = 0; i < MAX_BREADCRUMBS; i++) {
			var crumbLeft = CRUMB_WIDTH * i + SPACING;
			LEFT[i] = {
				Crumb: merge(CRUMB_BASE, { left: crumbLeft }),
				Icon: merge(ICON_BASE, { opacity: ICON_INACTIVE_OPACITY }),
				Separator: merge(SEPARATOR_BASE, { opacity: 1 }),
				Title: merge(TITLE_BASE, { left: crumbLeft, opacity: 0 }),
				RightItem: merge(RIGHT_BUTTON_BASE, { opacity: 0 }) };

			CENTER[i] = {
				Crumb: merge(CRUMB_BASE, { left: crumbLeft }),
				Icon: merge(ICON_BASE, { opacity: 1 }),
				Separator: merge(SEPARATOR_BASE, { opacity: 0 }),
				Title: merge(TITLE_BASE, {
					left: crumbLeft + ICON_WIDTH,
					opacity: 1 }),

				RightItem: merge(RIGHT_BUTTON_BASE, { opacity: 1 }) };

			var crumbRight = SCREEN_WIDTH - 100;
			RIGHT[i] = {
				Crumb: merge(CRUMB_BASE, { left: crumbRight }),
				Icon: merge(ICON_BASE, { opacity: 0 }),
				Separator: merge(SEPARATOR_BASE, { opacity: 0 }),
				Title: merge(TITLE_BASE, {
					left: crumbRight + ICON_WIDTH,
					opacity: 0 }),

				RightItem: merge(RIGHT_BUTTON_BASE, { opacity: 0 }) };
		}

		CENTER[0] = {
			Crumb: merge(CRUMB_BASE, { left: SCREEN_WIDTH / 4 }),
			Icon: merge(ICON_BASE, { opacity: 0 }),
			Separator: merge(SEPARATOR_BASE, { opacity: 0 }),
			Title: merge(FIRST_TITLE_BASE, { opacity: 1 }),
			RightItem: CENTER[0].RightItem };

		LEFT[0].Title = merge(FIRST_TITLE_BASE, { left: -SCREEN_WIDTH / 4, opacity: 0 });
		RIGHT[0].Title = merge(FIRST_TITLE_BASE, { opacity: 0 });

		var buildIndexSceneInterpolator = function buildIndexSceneInterpolator(startStyles, endStyles) {
			return {
				Crumb: buildStyleInterpolator({
					left: {
						type: 'linear',
						from: startStyles.Crumb.left,
						to: endStyles.Crumb.left,
						min: 0,
						max: 1,
						extrapolate: true } }),

				Icon: buildStyleInterpolator({
					opacity: {
						type: 'linear',
						from: startStyles.Icon.opacity,
						to: endStyles.Icon.opacity,
						min: 0,
						max: 1 } }),

				Separator: buildStyleInterpolator({
					opacity: {
						type: 'linear',
						from: startStyles.Separator.opacity,
						to: endStyles.Separator.opacity,
						min: 0,
						max: 1 } }),

				Title: buildStyleInterpolator({
					opacity: {
						type: 'linear',
						from: startStyles.Title.opacity,
						to: endStyles.Title.opacity,
						min: 0,
						max: 1 },

					left: {
						type: 'linear',
						from: startStyles.Title.left,
						to: endStyles.Title.left,
						min: 0,
						max: 1,
						extrapolate: true } }),

				RightItem: buildStyleInterpolator({
					opacity: {
						type: 'linear',
						from: startStyles.RightItem.opacity,
						to: endStyles.RightItem.opacity,
						min: 0,
						max: 1,
						round: OPACITY_RATIO } }) };
		};

		var Interpolators = CENTER.map(function (_, ii) {
			return {

				RightToCenter: buildIndexSceneInterpolator(RIGHT[ii], CENTER[ii]),

				CenterToLeft: buildIndexSceneInterpolator(CENTER[ii], LEFT[ii]),

				RightToLeft: buildIndexSceneInterpolator(RIGHT[ii], LEFT[ii]) };
		});

		module.exports = {
			Interpolators: Interpolators,
			Left: LEFT,
			Center: CENTER,
			Right: RIGHT,
			IconWidth: ICON_WIDTH,
			IconHeight: NAV_BAR_HEIGHT,
			SeparatorWidth: SEPARATOR_WIDTH,
			SeparatorHeight: NAV_BAR_HEIGHT };
	}, // Libraries/CustomComponents/Navigator/NavigatorNavigationBarStylesIOS.js
	function (__inner_require__, exports, module) {
		var Dimensions = require('react-native@0.37/Libraries/Utilities/Dimensions.js');

		var buildStyleInterpolator = __inner_require__(55 /*Libraries/Utilities/buildStyleInterpolator.js*/);
		var merge = require('react-native@0.37/Libraries/vendor/core/merge.js');

		var SCREEN_WIDTH = Dimensions.get('window').width;
		var NAV_BAR_HEIGHT = 44;
		var STATUS_BAR_HEIGHT = 20;
		var NAV_HEIGHT = NAV_BAR_HEIGHT + STATUS_BAR_HEIGHT;

		var BASE_STYLES = {
			Title: {
				position: 'absolute',
				top: STATUS_BAR_HEIGHT,
				left: 0,
				right: 0,
				alignItems: 'center',
				height: NAV_BAR_HEIGHT,
				backgroundColor: 'transparent' },

			LeftButton: {
				position: 'absolute',
				top: STATUS_BAR_HEIGHT,
				left: 0,
				overflow: 'hidden',
				opacity: 1,
				height: NAV_BAR_HEIGHT,
				backgroundColor: 'transparent' },

			RightButton: {
				position: 'absolute',
				top: STATUS_BAR_HEIGHT,
				right: 0,
				overflow: 'hidden',
				opacity: 1,
				alignItems: 'flex-end',
				height: NAV_BAR_HEIGHT,
				backgroundColor: 'transparent' } };

		var Stages = {
			Left: {
				Title: merge(BASE_STYLES.Title, { left: -SCREEN_WIDTH / 2, opacity: 0 }),
				LeftButton: merge(BASE_STYLES.LeftButton, { left: 0, opacity: 0 }),
				RightButton: merge(BASE_STYLES.RightButton, { opacity: 0 }) },

			Center: {
				Title: merge(BASE_STYLES.Title, { left: 0, opacity: 1 }),
				LeftButton: merge(BASE_STYLES.LeftButton, { left: 0, opacity: 1 }),
				RightButton: merge(BASE_STYLES.RightButton, { opacity: 1 }) },

			Right: {
				Title: merge(BASE_STYLES.Title, { left: SCREEN_WIDTH / 2, opacity: 0 }),
				LeftButton: merge(BASE_STYLES.LeftButton, { left: 0, opacity: 0 }),
				RightButton: merge(BASE_STYLES.RightButton, { opacity: 0 }) } };

		var opacityRatio = 100;

		function buildSceneInterpolators(startStyles, endStyles) {
			return {
				Title: buildStyleInterpolator({
					opacity: {
						type: 'linear',
						from: startStyles.Title.opacity,
						to: endStyles.Title.opacity,
						min: 0,
						max: 1 },

					left: {
						type: 'linear',
						from: startStyles.Title.left,
						to: endStyles.Title.left,
						min: 0,
						max: 1,
						extrapolate: true } }),

				LeftButton: buildStyleInterpolator({
					opacity: {
						type: 'linear',
						from: startStyles.LeftButton.opacity,
						to: endStyles.LeftButton.opacity,
						min: 0,
						max: 1,
						round: opacityRatio },

					left: {
						type: 'linear',
						from: startStyles.LeftButton.left,
						to: endStyles.LeftButton.left,
						min: 0,
						max: 1 } }),

				RightButton: buildStyleInterpolator({
					opacity: {
						type: 'linear',
						from: startStyles.RightButton.opacity,
						to: endStyles.RightButton.opacity,
						min: 0,
						max: 1,
						round: opacityRatio },

					left: {
						type: 'linear',
						from: startStyles.RightButton.left,
						to: endStyles.RightButton.left,
						min: 0,
						max: 1,
						extrapolate: true } }) };
		}

		var Interpolators = {

			RightToCenter: buildSceneInterpolators(Stages.Right, Stages.Center),

			CenterToLeft: buildSceneInterpolators(Stages.Center, Stages.Left),

			RightToLeft: buildSceneInterpolators(Stages.Right, Stages.Left) };

		module.exports = {
			General: {
				NavBarHeight: NAV_BAR_HEIGHT,
				StatusBarHeight: STATUS_BAR_HEIGHT,
				TotalNavHeight: NAV_HEIGHT },

			Interpolators: Interpolators,
			Stages: Stages };
	}, // Libraries/Utilities/buildStyleInterpolator.js
	function (__inner_require__, exports, module) {
		var keyOf = require('fbjs@0.8/lib/keyOf.js');

		var X_DIM = keyOf({ x: null });
		var Y_DIM = keyOf({ y: null });
		var Z_DIM = keyOf({ z: null });
		var W_DIM = keyOf({ w: null });

		var TRANSFORM_ROTATE_NAME = keyOf({ transformRotateRadians: null });

		var ShouldAllocateReusableOperationVars = {
			transformRotateRadians: true,
			transformScale: true,
			transformTranslate: true };

		var InitialOperationField = {
			transformRotateRadians: [0, 0, 0, 1],
			transformTranslate: [0, 0, 0],
			transformScale: [1, 1, 1] };

		var ARGUMENT_NAMES_RE = /([^\s,]+)/g;

		var inline = function inline(func, replaceWithArgs) {
			var fnStr = func.toString();
			var parameterNames = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES_RE) || [];
			var replaceRegexStr = parameterNames.map(function (paramName) {
				return '\\b' + paramName + '\\b';
			}).join('|');
			var replaceRegex = new RegExp(replaceRegexStr, 'g');
			var fnBody = fnStr.substring(fnStr.indexOf('{') + 1, fnStr.lastIndexOf('}'));
			var newFnBody = fnBody.replace(replaceRegex, function (parameterName) {
				var indexInParameterNames = parameterNames.indexOf(parameterName);
				var replacementName = replaceWithArgs[indexInParameterNames];
				return replacementName;
			});
			return newFnBody.split('\n');
		};

		var MatrixOps = {
			unroll: function unroll(matVar, m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15) {
				m0 = matVar[0];
				m1 = matVar[1];
				m2 = matVar[2];
				m3 = matVar[3];
				m4 = matVar[4];
				m5 = matVar[5];
				m6 = matVar[6];
				m7 = matVar[7];
				m8 = matVar[8];
				m9 = matVar[9];
				m10 = matVar[10];
				m11 = matVar[11];
				m12 = matVar[12];
				m13 = matVar[13];
				m14 = matVar[14];
				m15 = matVar[15];
			},

			matrixDiffers: function matrixDiffers(retVar, matVar, m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15) {
				retVar = retVar || m0 !== matVar[0] || m1 !== matVar[1] || m2 !== matVar[2] || m3 !== matVar[3] || m4 !== matVar[4] || m5 !== matVar[5] || m6 !== matVar[6] || m7 !== matVar[7] || m8 !== matVar[8] || m9 !== matVar[9] || m10 !== matVar[10] || m11 !== matVar[11] || m12 !== matVar[12] || m13 !== matVar[13] || m14 !== matVar[14] || m15 !== matVar[15];
			},

			transformScale: function transformScale(matVar, opVar) {

				var x = opVar[0];
				var y = opVar[1];
				var z = opVar[2];
				matVar[0] = matVar[0] * x;
				matVar[1] = matVar[1] * x;
				matVar[2] = matVar[2] * x;
				matVar[3] = matVar[3] * x;
				matVar[4] = matVar[4] * y;
				matVar[5] = matVar[5] * y;
				matVar[6] = matVar[6] * y;
				matVar[7] = matVar[7] * y;
				matVar[8] = matVar[8] * z;
				matVar[9] = matVar[9] * z;
				matVar[10] = matVar[10] * z;
				matVar[11] = matVar[11] * z;
				matVar[12] = matVar[12];
				matVar[13] = matVar[13];
				matVar[14] = matVar[14];
				matVar[15] = matVar[15];
			},

			transformTranslate: function transformTranslate(matVar, opVar) {

				var x = opVar[0];
				var y = opVar[1];
				var z = opVar[2];
				matVar[12] = matVar[0] * x + matVar[4] * y + matVar[8] * z + matVar[12];
				matVar[13] = matVar[1] * x + matVar[5] * y + matVar[9] * z + matVar[13];
				matVar[14] = matVar[2] * x + matVar[6] * y + matVar[10] * z + matVar[14];
				matVar[15] = matVar[3] * x + matVar[7] * y + matVar[11] * z + matVar[15];
			},

			transformRotateRadians: function transformRotateRadians(matVar, q) {

				var xQuat = q[0],
				    yQuat = q[1],
				    zQuat = q[2],
				    wQuat = q[3];
				var x2Quat = xQuat + xQuat;
				var y2Quat = yQuat + yQuat;
				var z2Quat = zQuat + zQuat;
				var xxQuat = xQuat * x2Quat;
				var xyQuat = xQuat * y2Quat;
				var xzQuat = xQuat * z2Quat;
				var yyQuat = yQuat * y2Quat;
				var yzQuat = yQuat * z2Quat;
				var zzQuat = zQuat * z2Quat;
				var wxQuat = wQuat * x2Quat;
				var wyQuat = wQuat * y2Quat;
				var wzQuat = wQuat * z2Quat;

				var quatMat0 = 1 - (yyQuat + zzQuat);
				var quatMat1 = xyQuat + wzQuat;
				var quatMat2 = xzQuat - wyQuat;
				var quatMat4 = xyQuat - wzQuat;
				var quatMat5 = 1 - (xxQuat + zzQuat);
				var quatMat6 = yzQuat + wxQuat;
				var quatMat8 = xzQuat + wyQuat;
				var quatMat9 = yzQuat - wxQuat;
				var quatMat10 = 1 - (xxQuat + yyQuat);

				var a00 = matVar[0];
				var a01 = matVar[1];
				var a02 = matVar[2];
				var a03 = matVar[3];
				var a10 = matVar[4];
				var a11 = matVar[5];
				var a12 = matVar[6];
				var a13 = matVar[7];
				var a20 = matVar[8];
				var a21 = matVar[9];
				var a22 = matVar[10];
				var a23 = matVar[11];

				var b0 = quatMat0,
				    b1 = quatMat1,
				    b2 = quatMat2;
				matVar[0] = b0 * a00 + b1 * a10 + b2 * a20;
				matVar[1] = b0 * a01 + b1 * a11 + b2 * a21;
				matVar[2] = b0 * a02 + b1 * a12 + b2 * a22;
				matVar[3] = b0 * a03 + b1 * a13 + b2 * a23;
				b0 = quatMat4;b1 = quatMat5;b2 = quatMat6;
				matVar[4] = b0 * a00 + b1 * a10 + b2 * a20;
				matVar[5] = b0 * a01 + b1 * a11 + b2 * a21;
				matVar[6] = b0 * a02 + b1 * a12 + b2 * a22;
				matVar[7] = b0 * a03 + b1 * a13 + b2 * a23;
				b0 = quatMat8;b1 = quatMat9;b2 = quatMat10;
				matVar[8] = b0 * a00 + b1 * a10 + b2 * a20;
				matVar[9] = b0 * a01 + b1 * a11 + b2 * a21;
				matVar[10] = b0 * a02 + b1 * a12 + b2 * a22;
				matVar[11] = b0 * a03 + b1 * a13 + b2 * a23;
			} };

		var MatrixOpsInitial = {
			transformScale: function transformScale(matVar, opVar) {

				matVar[0] = opVar[0];
				matVar[1] = 0;
				matVar[2] = 0;
				matVar[3] = 0;
				matVar[4] = 0;
				matVar[5] = opVar[1];
				matVar[6] = 0;
				matVar[7] = 0;
				matVar[8] = 0;
				matVar[9] = 0;
				matVar[10] = opVar[2];
				matVar[11] = 0;
				matVar[12] = 0;
				matVar[13] = 0;
				matVar[14] = 0;
				matVar[15] = 1;
			},

			transformTranslate: function transformTranslate(matVar, opVar) {

				matVar[0] = 1;
				matVar[1] = 0;
				matVar[2] = 0;
				matVar[3] = 0;
				matVar[4] = 0;
				matVar[5] = 1;
				matVar[6] = 0;
				matVar[7] = 0;
				matVar[8] = 0;
				matVar[9] = 0;
				matVar[10] = 1;
				matVar[11] = 0;
				matVar[12] = opVar[0];
				matVar[13] = opVar[1];
				matVar[14] = opVar[2];
				matVar[15] = 1;
			},

			transformRotateRadians: function transformRotateRadians(matVar, q) {

				var xQuat = q[0],
				    yQuat = q[1],
				    zQuat = q[2],
				    wQuat = q[3];
				var x2Quat = xQuat + xQuat;
				var y2Quat = yQuat + yQuat;
				var z2Quat = zQuat + zQuat;
				var xxQuat = xQuat * x2Quat;
				var xyQuat = xQuat * y2Quat;
				var xzQuat = xQuat * z2Quat;
				var yyQuat = yQuat * y2Quat;
				var yzQuat = yQuat * z2Quat;
				var zzQuat = zQuat * z2Quat;
				var wxQuat = wQuat * x2Quat;
				var wyQuat = wQuat * y2Quat;
				var wzQuat = wQuat * z2Quat;

				var quatMat0 = 1 - (yyQuat + zzQuat);
				var quatMat1 = xyQuat + wzQuat;
				var quatMat2 = xzQuat - wyQuat;
				var quatMat4 = xyQuat - wzQuat;
				var quatMat5 = 1 - (xxQuat + zzQuat);
				var quatMat6 = yzQuat + wxQuat;
				var quatMat8 = xzQuat + wyQuat;
				var quatMat9 = yzQuat - wxQuat;
				var quatMat10 = 1 - (xxQuat + yyQuat);

				var b0 = quatMat0,
				    b1 = quatMat1,
				    b2 = quatMat2;
				matVar[0] = b0;
				matVar[1] = b1;
				matVar[2] = b2;
				matVar[3] = 0;
				b0 = quatMat4;b1 = quatMat5;b2 = quatMat6;
				matVar[4] = b0;
				matVar[5] = b1;
				matVar[6] = b2;
				matVar[7] = 0;
				b0 = quatMat8;b1 = quatMat9;b2 = quatMat10;
				matVar[8] = b0;
				matVar[9] = b1;
				matVar[10] = b2;
				matVar[11] = 0;
				matVar[12] = 0;
				matVar[13] = 0;
				matVar[14] = 0;
				matVar[15] = 1;
			} };

		var setNextValAndDetectChange = function setNextValAndDetectChange(name, tmpVarName) {
			return '  if (!didChange) {\n' + '    var prevVal = result.' + name + ';\n' + '    result.' + name + ' = ' + tmpVarName + ';\n' + '    didChange = didChange  || (' + tmpVarName + ' !== prevVal);\n' + '  } else {\n' + '    result.' + name + ' = ' + tmpVarName + ';\n' + '  }\n';
		};

		var computeNextValLinear = function computeNextValLinear(anim, from, to, tmpVarName) {
			var hasRoundRatio = 'round' in anim;
			var roundRatio = anim.round;
			var fn = '  ratio = (value - ' + anim.min + ') / ' + (anim.max - anim.min) + ';\n';
			if (!anim.extrapolate) {
				fn += '  ratio = ratio > 1 ? 1 : (ratio < 0 ? 0 : ratio);\n';
			}

			var roundOpen = hasRoundRatio ? 'Math.round(' + roundRatio + ' * ' : '';
			var roundClose = hasRoundRatio ? ') / ' + roundRatio : '';
			fn += '  ' + tmpVarName + ' = ' + roundOpen + '(' + from + ' * (1 - ratio) + ' + to + ' * ratio)' + roundClose + ';\n';
			return fn;
		};

		var computeNextValLinearScalar = function computeNextValLinearScalar(anim) {
			return computeNextValLinear(anim, anim.from, anim.to, 'nextScalarVal');
		};

		var computeNextValConstant = function computeNextValConstant(anim) {
			var constantExpression = JSON.stringify(anim.value);
			return '  nextScalarVal = ' + constantExpression + ';\n';
		};

		var computeNextValStep = function computeNextValStep(anim) {
			return '  nextScalarVal = value >= ' + (anim.threshold + ' ? ' + anim.to + ' : ' + anim.from) + ';\n';
		};

		var computeNextValIdentity = function computeNextValIdentity(anim) {
			return '  nextScalarVal = value;\n';
		};

		var operationVar = function operationVar(name) {
			return name + 'ReuseOp';
		};

		var createReusableOperationVars = function createReusableOperationVars(anims) {
			var ret = '';
			for (var name in anims) {
				if (ShouldAllocateReusableOperationVars[name]) {
					ret += 'var ' + operationVar(name) + ' = [];\n';
				}
			}
			return ret;
		};

		var newlines = function newlines(statements) {
			return '\n' + statements.join('\n') + '\n';
		};

		var computeNextMatrixOperationField = function computeNextMatrixOperationField(anim, name, dimension, index) {
			var fieldAccess = operationVar(name) + '[' + index + ']';
			if (anim.from[dimension] !== undefined && anim.to[dimension] !== undefined) {
				return '  ' + anim.from[dimension] !== anim.to[dimension] ? computeNextValLinear(anim, anim.from[dimension], anim.to[dimension], fieldAccess) : fieldAccess + ' = ' + anim.from[dimension] + ';';
			} else {
				return '  ' + fieldAccess + ' = ' + InitialOperationField[name][index] + ';';
			}
		};

		var unrolledVars = [];
		for (var varIndex = 0; varIndex < 16; varIndex++) {
			unrolledVars.push('m' + varIndex);
		}
		var setNextMatrixAndDetectChange = function setNextMatrixAndDetectChange(orderedMatrixOperations) {
			var fn = ['  var transform = result.transform !== undefined ? ' + 'result.transform : (result.transform = [{ matrix: [] }]);' + '  var transformMatrix = transform[0].matrix;'];

			fn.push.apply(fn, inline(MatrixOps.unroll, ['transformMatrix'].concat(unrolledVars)));

			for (var i = 0; i < orderedMatrixOperations.length; i++) {
				var opName = orderedMatrixOperations[i];
				if (i === 0) {
					fn.push.apply(fn, inline(MatrixOpsInitial[opName], ['transformMatrix', operationVar(opName)]));
				} else {
					fn.push.apply(fn, inline(MatrixOps[opName], ['transformMatrix', operationVar(opName)]));
				}
			}
			fn.push.apply(fn, inline(MatrixOps.matrixDiffers, ['didChange', 'transformMatrix'].concat(unrolledVars)));

			return fn;
		};

		var InterpolateMatrix = {
			transformTranslate: true,
			transformRotateRadians: true,
			transformScale: true };

		var createFunctionString = function createFunctionString(anims) {

			var orderedMatrixOperations = [];

			var fn = 'return (function() {\n';
			fn += createReusableOperationVars(anims);
			fn += 'return function(result, value) {\n';
			fn += '  var didChange = false;\n';
			fn += '  var nextScalarVal;\n';
			fn += '  var ratio;\n';

			for (var name in anims) {
				var anim = anims[name];
				if (anim.type === 'linear') {
					if (InterpolateMatrix[name]) {
						orderedMatrixOperations.push(name);
						var setOperations = [computeNextMatrixOperationField(anim, name, X_DIM, 0), computeNextMatrixOperationField(anim, name, Y_DIM, 1), computeNextMatrixOperationField(anim, name, Z_DIM, 2)];

						if (name === TRANSFORM_ROTATE_NAME) {
							setOperations.push(computeNextMatrixOperationField(anim, name, W_DIM, 3));
						}
						fn += newlines(setOperations);
					} else {
						fn += computeNextValLinearScalar(anim, 'nextScalarVal');
						fn += setNextValAndDetectChange(name, 'nextScalarVal');
					}
				} else if (anim.type === 'constant') {
					fn += computeNextValConstant(anim);
					fn += setNextValAndDetectChange(name, 'nextScalarVal');
				} else if (anim.type === 'step') {
					fn += computeNextValStep(anim);
					fn += setNextValAndDetectChange(name, 'nextScalarVal');
				} else if (anim.type === 'identity') {
					fn += computeNextValIdentity(anim);
					fn += setNextValAndDetectChange(name, 'nextScalarVal');
				}
			}
			if (orderedMatrixOperations.length) {
				fn += newlines(setNextMatrixAndDetectChange(orderedMatrixOperations));
			}
			fn += '  return didChange;\n';
			fn += '};\n';
			fn += '})()';
			return fn;
		};

		var buildStyleInterpolator = function buildStyleInterpolator(anims) {

			var interpolator = null;
			function lazyStyleInterpolator(result, value) {
				if (interpolator === null) {
					interpolator = Function(createFunctionString(anims))();
				}
				return interpolator(result, value);
			}
			return lazyStyleInterpolator;
		};

		module.exports = buildStyleInterpolator;
	}, // Libraries/CustomComponents/Navigator/NavigatorNavigationBarStylesAndroid.js
	function (__inner_require__, exports, module) {
		var buildStyleInterpolator = __inner_require__(55 /*Libraries/Utilities/buildStyleInterpolator.js*/);
		var merge = require('react-native@0.37/Libraries/vendor/core/merge.js');

		var NAV_BAR_HEIGHT = 56;
		var TITLE_LEFT = 72;
		var BUTTON_SIZE = 24;
		var TOUCH_TARGT_SIZE = 48;
		var BUTTON_HORIZONTAL_MARGIN = 16;

		var BUTTON_EFFECTIVE_MARGIN = BUTTON_HORIZONTAL_MARGIN - (TOUCH_TARGT_SIZE - BUTTON_SIZE) / 2;
		var NAV_ELEMENT_HEIGHT = NAV_BAR_HEIGHT;

		var BASE_STYLES = {
			Title: {
				position: 'absolute',
				bottom: 0,
				left: 0,
				right: 0,
				alignItems: 'flex-start',
				height: NAV_ELEMENT_HEIGHT,
				backgroundColor: 'transparent',
				marginLeft: TITLE_LEFT },

			LeftButton: {
				position: 'absolute',
				top: 0,
				left: BUTTON_EFFECTIVE_MARGIN,
				overflow: 'hidden',
				height: NAV_ELEMENT_HEIGHT,
				backgroundColor: 'transparent' },

			RightButton: {
				position: 'absolute',
				top: 0,
				right: BUTTON_EFFECTIVE_MARGIN,
				overflow: 'hidden',
				alignItems: 'flex-end',
				height: NAV_ELEMENT_HEIGHT,
				backgroundColor: 'transparent' } };

		var Stages = {
			Left: {
				Title: merge(BASE_STYLES.Title, { opacity: 0 }),
				LeftButton: merge(BASE_STYLES.LeftButton, { opacity: 0 }),
				RightButton: merge(BASE_STYLES.RightButton, { opacity: 0 }) },

			Center: {
				Title: merge(BASE_STYLES.Title, { opacity: 1 }),
				LeftButton: merge(BASE_STYLES.LeftButton, { opacity: 1 }),
				RightButton: merge(BASE_STYLES.RightButton, { opacity: 1 }) },

			Right: {
				Title: merge(BASE_STYLES.Title, { opacity: 0 }),
				LeftButton: merge(BASE_STYLES.LeftButton, { opacity: 0 }),
				RightButton: merge(BASE_STYLES.RightButton, { opacity: 0 }) } };

		var opacityRatio = 100;

		function buildSceneInterpolators(startStyles, endStyles) {
			return {
				Title: buildStyleInterpolator({
					opacity: {
						type: 'linear',
						from: startStyles.Title.opacity,
						to: endStyles.Title.opacity,
						min: 0,
						max: 1 },

					left: {
						type: 'linear',
						from: startStyles.Title.left,
						to: endStyles.Title.left,
						min: 0,
						max: 1,
						extrapolate: true } }),

				LeftButton: buildStyleInterpolator({
					opacity: {
						type: 'linear',
						from: startStyles.LeftButton.opacity,
						to: endStyles.LeftButton.opacity,
						min: 0,
						max: 1,
						round: opacityRatio },

					left: {
						type: 'linear',
						from: startStyles.LeftButton.left,
						to: endStyles.LeftButton.left,
						min: 0,
						max: 1 } }),

				RightButton: buildStyleInterpolator({
					opacity: {
						type: 'linear',
						from: startStyles.RightButton.opacity,
						to: endStyles.RightButton.opacity,
						min: 0,
						max: 1,
						round: opacityRatio },

					left: {
						type: 'linear',
						from: startStyles.RightButton.left,
						to: endStyles.RightButton.left,
						min: 0,
						max: 1,
						extrapolate: true } }) };
		}

		var Interpolators = {

			RightToCenter: buildSceneInterpolators(Stages.Right, Stages.Center),

			CenterToLeft: buildSceneInterpolators(Stages.Center, Stages.Left),

			RightToLeft: buildSceneInterpolators(Stages.Right, Stages.Left) };

		module.exports = {
			General: {
				NavBarHeight: NAV_BAR_HEIGHT,
				StatusBarHeight: 0,
				TotalNavHeight: NAV_BAR_HEIGHT },

			Interpolators: Interpolators,
			Stages: Stages };
	}, // Libraries/CustomComponents/Navigator/NavigatorNavigationBar.js
	function (__inner_require__, exports, module) {
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var NavigatorNavigationBarStylesAndroid = __inner_require__(56 /*Libraries/CustomComponents/Navigator/NavigatorNavigationBarStylesAndroid.js*/);
		var NavigatorNavigationBarStylesIOS = __inner_require__(54 /*Libraries/CustomComponents/Navigator/NavigatorNavigationBarStylesIOS.js*/);
		var Platform = require('react-native@0.37/Libraries/Utilities/Platform.ios.js');
		var StyleSheet = require('react-native@0.37/Libraries/StyleSheet/StyleSheet.js');
		var View = require('react-native@0.37/Libraries/Components/View/View.js');

		var guid = require('react-native@0.37/Libraries/vendor/core/guid.js');var _require = require('immutable@3.7/dist/immutable.js'),
		    Map = _require.Map;

		var COMPONENT_NAMES = ['Title', 'LeftButton', 'RightButton'];

		var NavigatorNavigationBarStyles = Platform.OS === 'android' ? NavigatorNavigationBarStylesAndroid : NavigatorNavigationBarStylesIOS;

		var navStatePresentedIndex = function navStatePresentedIndex(navState) {
			if (navState.presentedIndex !== undefined) {
				return navState.presentedIndex;
			}

			return navState.observedTopOfStack;
		};var NavigatorNavigationBar = function (_React$Component) {
			babelHelpers.inherits(NavigatorNavigationBar, _React$Component);function NavigatorNavigationBar() {
				var _ref;var _temp, _this, _ret;babelHelpers.classCallCheck(this, NavigatorNavigationBar);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = NavigatorNavigationBar.__proto__ || Object.getPrototypeOf(NavigatorNavigationBar)).call.apply(_ref, [this].concat(args))), _this), _this.immediatelyRefresh = function () {
					_this._reset();
					_this.forceUpdate();
				}, _this._reset = function () {
					_this._key = guid();
					_this._reusableProps = {};
					_this._components = {};
					_this._descriptors = {};

					COMPONENT_NAMES.forEach(function (componentName) {
						_this._components[componentName] = new Map();
						_this._descriptors[componentName] = new Map();
					});
				}, _this._getReusableProps = function (componentName, index) {
					var propStack = _this._reusableProps[componentName];
					if (!propStack) {
						propStack = _this._reusableProps[componentName] = [];
					}
					var props = propStack[index];
					if (!props) {
						props = propStack[index] = { style: {} };
					}
					return props;
				}, _this._updateIndexProgress = function (progress, index, fromIndex, toIndex) {
					var amount = toIndex > fromIndex ? progress : 1 - progress;
					var oldDistToCenter = index - fromIndex;
					var newDistToCenter = index - toIndex;
					var interpolate;
					if (oldDistToCenter > 0 && newDistToCenter === 0 || newDistToCenter > 0 && oldDistToCenter === 0) {
						interpolate = _this.props.navigationStyles.Interpolators.RightToCenter;
					} else if (oldDistToCenter < 0 && newDistToCenter === 0 || newDistToCenter < 0 && oldDistToCenter === 0) {
						interpolate = _this.props.navigationStyles.Interpolators.CenterToLeft;
					} else if (oldDistToCenter === newDistToCenter) {
						interpolate = _this.props.navigationStyles.Interpolators.RightToCenter;
					} else {
						interpolate = _this.props.navigationStyles.Interpolators.RightToLeft;
					}

					COMPONENT_NAMES.forEach(function (componentName) {
						var component = this._components[componentName].get(this.props.navState.routeStack[index]);
						var props = this._getReusableProps(componentName, index);
						if (component && interpolate[componentName](props.style, amount)) {
							props.pointerEvents = props.style.opacity === 0 ? 'none' : 'box-none';
							component.setNativeProps(props);
						}
					}, _this);
				}, _this.updateProgress = function (progress, fromIndex, toIndex) {
					var max = Math.max(fromIndex, toIndex);
					var min = Math.min(fromIndex, toIndex);
					for (var index = min; index <= max; index++) {
						_this._updateIndexProgress(progress, index, fromIndex, toIndex);
					}
				}, _this._getComponent = function (componentName, route, index) {
					if (_this._descriptors[componentName].includes(route)) {
						return _this._descriptors[componentName].get(route);
					}

					var rendered = null;

					var content = _this.props.routeMapper[componentName](_this.props.navState.routeStack[index], _this.props.navigator, index, _this.props.navState);

					if (!content) {
						return null;
					}

					var componentIsActive = index === navStatePresentedIndex(_this.props.navState);
					var initialStage = componentIsActive ? _this.props.navigationStyles.Stages.Center : _this.props.navigationStyles.Stages.Left;
					rendered = React.createElement(View, {
						ref: function ref(_ref2) {
							_this._components[componentName] = _this._components[componentName].set(route, _ref2);
						},
						pointerEvents: componentIsActive ? 'box-none' : 'none',
						style: initialStage[componentName] }, content);

					_this._descriptors[componentName] = _this._descriptors[componentName].set(route, rendered);
					return rendered;
				}, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
			}babelHelpers.createClass(NavigatorNavigationBar, [{ key: 'componentWillMount', value: function componentWillMount() {
					this._reset();
				} }, { key: 'render', value: function render() {
					var _this2 = this;var navBarStyle = { height: this.props.navigationStyles.General.TotalNavHeight };var navState = this.props.navState;var components = navState.routeStack.map(function (route, index) {
						return COMPONENT_NAMES.map(function (componentName) {
							return _this2._getComponent(componentName, route, index);
						});
					});return React.createElement(View, { key: this._key, style: [styles.navBarContainer, navBarStyle, this.props.style] }, components);
				} }]);return NavigatorNavigationBar;
		}(React.Component);NavigatorNavigationBar.propTypes = { navigator: React.PropTypes.object, routeMapper: React.PropTypes.shape({ Title: React.PropTypes.func.isRequired, LeftButton: React.PropTypes.func.isRequired, RightButton: React.PropTypes.func.isRequired }).isRequired, navState: React.PropTypes.shape({ routeStack: React.PropTypes.arrayOf(React.PropTypes.object), presentedIndex: React.PropTypes.number }), navigationStyles: React.PropTypes.object, style: View.propTypes.style };NavigatorNavigationBar.Styles = NavigatorNavigationBarStyles;NavigatorNavigationBar.StylesAndroid = NavigatorNavigationBarStylesAndroid;NavigatorNavigationBar.StylesIOS = NavigatorNavigationBarStylesIOS;NavigatorNavigationBar.defaultProps = { navigationStyles: NavigatorNavigationBarStyles };

		var styles = StyleSheet.create({
			navBarContainer: {
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				backgroundColor: 'transparent' } });

		module.exports = NavigatorNavigationBar;
	}, // Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js
	function (__inner_require__, exports, module) {
		var Dimensions = require('react-native@0.37/Libraries/Utilities/Dimensions.js');
		var PixelRatio = require('react-native@0.37/Libraries/Utilities/PixelRatio.js');
		var I18nManager = __inner_require__(45 /*Libraries/ReactNative/I18nManager.js*/);

		var buildStyleInterpolator = __inner_require__(55 /*Libraries/Utilities/buildStyleInterpolator.js*/);

		var IS_RTL = I18nManager.isRTL;

		var SCREEN_WIDTH = Dimensions.get('window').width;
		var SCREEN_HEIGHT = Dimensions.get('window').height;
		var PIXEL_RATIO = PixelRatio.get();

		var ToTheLeftIOS = {
			transformTranslate: {
				from: { x: 0, y: 0, z: 0 },
				to: { x: -SCREEN_WIDTH * 0.3, y: 0, z: 0 },
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PIXEL_RATIO },

			opacity: {
				value: 1.0,
				type: 'constant' } };

		var ToTheRightIOS = babelHelpers.extends({}, ToTheLeftIOS, {
			transformTranslate: {
				from: { x: 0, y: 0, z: 0 },
				to: { x: SCREEN_WIDTH * 0.3, y: 0, z: 0 } } });

		var FadeToTheLeft = {

			transformTranslate: {
				from: { x: 0, y: 0, z: 0 },
				to: { x: -Math.round(SCREEN_WIDTH * 0.3), y: 0, z: 0 },
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PIXEL_RATIO },

			transformScale: {
				from: { x: 1, y: 1, z: 1 },
				to: { x: 0.95, y: 0.95, z: 1 },
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true },

			opacity: {
				from: 1,
				to: 0.3,
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: false,
				round: 100 },

			translateX: {
				from: 0,
				to: -Math.round(SCREEN_WIDTH * 0.3),
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PIXEL_RATIO },

			scaleX: {
				from: 1,
				to: 0.95,
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true },

			scaleY: {
				from: 1,
				to: 0.95,
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true } };

		var FadeToTheRight = babelHelpers.extends({}, FadeToTheLeft, {
			transformTranslate: {
				from: { x: 0, y: 0, z: 0 },
				to: { x: Math.round(SCREEN_WIDTH * 0.3), y: 0, z: 0 } },

			translateX: {
				from: 0,
				to: Math.round(SCREEN_WIDTH * 0.3) } });

		var FadeIn = {
			opacity: {
				from: 0,
				to: 1,
				min: 0.5,
				max: 1,
				type: 'linear',
				extrapolate: false,
				round: 100 } };

		var FadeOut = {
			opacity: {
				from: 1,
				to: 0,
				min: 0,
				max: 0.5,
				type: 'linear',
				extrapolate: false,
				round: 100 } };

		var ToTheLeft = {
			transformTranslate: {
				from: { x: 0, y: 0, z: 0 },
				to: { x: -SCREEN_WIDTH, y: 0, z: 0 },
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PIXEL_RATIO },

			opacity: {
				value: 1.0,
				type: 'constant' },

			translateX: {
				from: 0,
				to: -SCREEN_WIDTH,
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PIXEL_RATIO } };

		var ToTheRight = {
			transformTranslate: {
				from: { x: 0, y: 0, z: 0 },
				to: { x: SCREEN_WIDTH, y: 0, z: 0 },
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PIXEL_RATIO },

			opacity: {
				value: 1.0,
				type: 'constant' },

			translateX: {
				from: 0,
				to: SCREEN_WIDTH,
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PIXEL_RATIO } };

		var ToTheUp = {
			transformTranslate: {
				from: { x: 0, y: 0, z: 0 },
				to: { x: 0, y: -SCREEN_HEIGHT, z: 0 },
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PIXEL_RATIO },

			opacity: {
				value: 1.0,
				type: 'constant' },

			translateY: {
				from: 0,
				to: -SCREEN_HEIGHT,
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PIXEL_RATIO } };

		var ToTheDown = {
			transformTranslate: {
				from: { x: 0, y: 0, z: 0 },
				to: { x: 0, y: SCREEN_HEIGHT, z: 0 },
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PIXEL_RATIO },

			opacity: {
				value: 1.0,
				type: 'constant' },

			translateY: {
				from: 0,
				to: SCREEN_HEIGHT,
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PIXEL_RATIO } };

		var FromTheRight = {
			opacity: {
				value: 1.0,
				type: 'constant' },

			transformTranslate: {
				from: { x: SCREEN_WIDTH, y: 0, z: 0 },
				to: { x: 0, y: 0, z: 0 },
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PIXEL_RATIO },

			translateX: {
				from: SCREEN_WIDTH,
				to: 0,
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PIXEL_RATIO },

			scaleX: {
				value: 1,
				type: 'constant' },

			scaleY: {
				value: 1,
				type: 'constant' } };

		var FromTheLeft = babelHelpers.extends({}, FromTheRight, {
			transformTranslate: {
				from: { x: -SCREEN_WIDTH, y: 0, z: 0 },
				to: { x: 0, y: 0, z: 0 },
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PIXEL_RATIO },

			translateX: {
				from: -SCREEN_WIDTH,
				to: 0,
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PIXEL_RATIO } });

		var FromTheDown = babelHelpers.extends({}, FromTheRight, {
			transformTranslate: {
				from: { y: SCREEN_HEIGHT, x: 0, z: 0 },
				to: { x: 0, y: 0, z: 0 },
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PIXEL_RATIO },

			translateY: {
				from: SCREEN_HEIGHT,
				to: 0,
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PIXEL_RATIO } });

		var FromTheTop = babelHelpers.extends({}, FromTheRight, {
			transformTranslate: {
				from: { y: -SCREEN_HEIGHT, x: 0, z: 0 },
				to: { x: 0, y: 0, z: 0 },
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PIXEL_RATIO },

			translateY: {
				from: -SCREEN_HEIGHT,
				to: 0,
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PIXEL_RATIO } });

		var ToTheBack = {

			transformTranslate: {
				from: { x: 0, y: 0, z: 0 },
				to: { x: 0, y: 0, z: 0 },
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PIXEL_RATIO },

			transformScale: {
				from: { x: 1, y: 1, z: 1 },
				to: { x: 0.95, y: 0.95, z: 1 },
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true },

			opacity: {
				from: 1,
				to: 0.3,
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: false,
				round: 100 },

			scaleX: {
				from: 1,
				to: 0.95,
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true },

			scaleY: {
				from: 1,
				to: 0.95,
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true } };

		var FromTheFront = {
			opacity: {
				value: 1.0,
				type: 'constant' },

			transformTranslate: {
				from: { x: 0, y: SCREEN_HEIGHT, z: 0 },
				to: { x: 0, y: 0, z: 0 },
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PIXEL_RATIO },

			translateY: {
				from: SCREEN_HEIGHT,
				to: 0,
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PIXEL_RATIO },

			scaleX: {
				value: 1,
				type: 'constant' },

			scaleY: {
				value: 1,
				type: 'constant' } };

		var ToTheBackAndroid = {
			opacity: {
				value: 1,
				type: 'constant' } };

		var FromTheFrontAndroid = {
			opacity: {
				from: 0,
				to: 1,
				min: 0.5,
				max: 1,
				type: 'linear',
				extrapolate: false,
				round: 100 },

			transformTranslate: {
				from: { x: 0, y: 100, z: 0 },
				to: { x: 0, y: 0, z: 0 },
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PIXEL_RATIO },

			translateY: {
				from: 100,
				to: 0,
				min: 0,
				max: 1,
				type: 'linear',
				extrapolate: true,
				round: PIXEL_RATIO } };

		var BaseOverswipeConfig = {
			frictionConstant: 1,
			frictionByDistance: 1.5 };

		var BaseLeftToRightGesture = {

			isDetachable: false,

			gestureDetectMovement: 2,

			notMoving: 0.3,

			directionRatio: 0.66,

			snapVelocity: 2,

			edgeHitWidth: 30,

			stillCompletionRatio: 3 / 5,

			fullDistance: SCREEN_WIDTH,

			direction: 'left-to-right' };

		var BaseRightToLeftGesture = babelHelpers.extends({}, BaseLeftToRightGesture, {
			direction: 'right-to-left' });

		var BaseDownUpGesture = babelHelpers.extends({}, BaseLeftToRightGesture, {
			fullDistance: SCREEN_HEIGHT,
			direction: 'down-to-up' });

		var BaseUpDownGesture = babelHelpers.extends({}, BaseLeftToRightGesture, {
			fullDistance: SCREEN_HEIGHT,
			direction: 'up-to-down' });

		var directionMapping = {
			ToTheStartIOS: ToTheLeftIOS,
			ToTheEndIOS: ToTheRightIOS,
			FadeToTheStart: FadeToTheLeft,
			FadeToTheEnd: FadeToTheRight,
			ToTheStart: ToTheLeft,
			ToTheEnd: ToTheRight,
			FromTheStart: FromTheLeft,
			FromTheEnd: FromTheRight,
			BaseStartToEndGesture: BaseLeftToRightGesture,
			BaseEndToStartGesture: BaseRightToLeftGesture };

		if (IS_RTL) {
			directionMapping = {
				ToTheStartIOS: ToTheRightIOS,
				ToTheEndIOS: ToTheLeftIOS,
				FadeToTheStart: FadeToTheRight,
				FadeToTheEnd: FadeToTheLeft,
				ToTheStart: ToTheRight,
				ToTheEnd: ToTheLeft,
				FromTheStart: FromTheRight,
				FromTheEnd: FromTheLeft,
				BaseStartToEndGesture: BaseRightToLeftGesture,
				BaseEndToStartGesture: BaseLeftToRightGesture };
		}

		var BaseConfig = {

			gestures: {
				pop: directionMapping.BaseStartToEndGesture },

			springFriction: 26,
			springTension: 200,

			defaultTransitionVelocity: 1.5,

			animationInterpolators: {
				into: buildStyleInterpolator(directionMapping.FromTheEnd),
				out: buildStyleInterpolator(directionMapping.FadeToTheStart) } };

		var NavigatorSceneConfigs = {
			PushFromRight: babelHelpers.extends({}, BaseConfig, {
				animationInterpolators: {
					into: buildStyleInterpolator(directionMapping.FromTheEnd),
					out: buildStyleInterpolator(directionMapping.ToTheStartIOS) } }),

			PushFromLeft: babelHelpers.extends({}, BaseConfig, {
				animationInterpolators: {
					into: buildStyleInterpolator(directionMapping.FromTheStart),
					out: buildStyleInterpolator(directionMapping.ToTheEndIOS) } }),

			FloatFromRight: babelHelpers.extends({}, BaseConfig),

			FloatFromLeft: babelHelpers.extends({}, BaseConfig, {
				gestures: {
					pop: directionMapping.BaseEndToStartGesture },

				animationInterpolators: {
					into: buildStyleInterpolator(directionMapping.FromTheStart),
					out: buildStyleInterpolator(directionMapping.FadeToTheEnd) } }),

			FloatFromBottom: babelHelpers.extends({}, BaseConfig, {
				gestures: {
					pop: babelHelpers.extends({}, directionMapping.BaseStartToEndGesture, {
						edgeHitWidth: 150,
						direction: 'top-to-bottom',
						fullDistance: SCREEN_HEIGHT }) },

				animationInterpolators: {
					into: buildStyleInterpolator(FromTheFront),
					out: buildStyleInterpolator(ToTheBack) } }),

			FloatFromBottomAndroid: babelHelpers.extends({}, BaseConfig, {
				gestures: null,
				defaultTransitionVelocity: 3,
				springFriction: 20,
				animationInterpolators: {
					into: buildStyleInterpolator(FromTheFrontAndroid),
					out: buildStyleInterpolator(ToTheBackAndroid) } }),

			FadeAndroid: babelHelpers.extends({}, BaseConfig, {
				gestures: null,
				animationInterpolators: {
					into: buildStyleInterpolator(FadeIn),
					out: buildStyleInterpolator(FadeOut) } }),

			HorizontalSwipeJump: babelHelpers.extends({}, BaseConfig, {
				gestures: {
					jumpBack: babelHelpers.extends({}, directionMapping.BaseStartToEndGesture, {
						overswipe: BaseOverswipeConfig,
						edgeHitWidth: null,
						isDetachable: true }),

					jumpForward: babelHelpers.extends({}, directionMapping.BaseEndToStartGesture, {
						overswipe: BaseOverswipeConfig,
						edgeHitWidth: null,
						isDetachable: true }) },

				animationInterpolators: {
					into: buildStyleInterpolator(directionMapping.FromTheEnd),
					out: buildStyleInterpolator(directionMapping.ToTheStart) } }),

			HorizontalSwipeJumpFromRight: babelHelpers.extends({}, BaseConfig, {
				gestures: {
					jumpBack: babelHelpers.extends({}, directionMapping.BaseEndToStartGesture, {
						overswipe: BaseOverswipeConfig,
						edgeHitWidth: null,
						isDetachable: true }),

					jumpForward: babelHelpers.extends({}, directionMapping.BaseStartToEndGesture, {
						overswipe: BaseOverswipeConfig,
						edgeHitWidth: null,
						isDetachable: true }),

					pop: directionMapping.BaseEndToStartGesture },

				animationInterpolators: {
					into: buildStyleInterpolator(directionMapping.FromTheStart),
					out: buildStyleInterpolator(directionMapping.FadeToTheEnd) } }),

			HorizontalSwipeJumpFromLeft: babelHelpers.extends({}, BaseConfig, {
				gestures: {
					jumpBack: babelHelpers.extends({}, directionMapping.BaseEndToStartGesture, {
						overswipe: BaseOverswipeConfig,
						edgeHitWidth: null,
						isDetachable: true }),

					jumpForward: babelHelpers.extends({}, directionMapping.BaseStartToEndGesture, {
						overswipe: BaseOverswipeConfig,
						edgeHitWidth: null,
						isDetachable: true }),

					pop: directionMapping.BaseEndToStartGesture },

				animationInterpolators: {
					into: buildStyleInterpolator(directionMapping.FromTheStart),
					out: buildStyleInterpolator(directionMapping.ToTheEnd) } }),

			VerticalUpSwipeJump: babelHelpers.extends({}, BaseConfig, {
				gestures: {
					jumpBack: babelHelpers.extends({}, BaseDownUpGesture, {
						overswipe: BaseOverswipeConfig,
						edgeHitWidth: null,
						isDetachable: true }),

					jumpForward: babelHelpers.extends({}, BaseDownUpGesture, {
						overswipe: BaseOverswipeConfig,
						edgeHitWidth: null,
						isDetachable: true }) },

				animationInterpolators: {
					into: buildStyleInterpolator(FromTheDown),
					out: buildStyleInterpolator(ToTheUp) } }),

			VerticalDownSwipeJump: babelHelpers.extends({}, BaseConfig, {
				gestures: {
					jumpBack: babelHelpers.extends({}, BaseUpDownGesture, {
						overswipe: BaseOverswipeConfig,
						edgeHitWidth: null,
						isDetachable: true }),

					jumpForward: babelHelpers.extends({}, BaseUpDownGesture, {
						overswipe: BaseOverswipeConfig,
						edgeHitWidth: null,
						isDetachable: true }) },

				animationInterpolators: {
					into: buildStyleInterpolator(FromTheTop),
					out: buildStyleInterpolator(ToTheDown) } }) };

		module.exports = NavigatorSceneConfigs;
	}, // Libraries/Interaction/PanResponder.js
	function (__inner_require__, exports, module) {
		var InteractionManager = __inner_require__(14 /*Libraries/Interaction/InteractionManager.js*/);
		var TouchHistoryMath = require('react@15.3/lib/TouchHistoryMath.js');

		var currentCentroidXOfTouchesChangedAfter = TouchHistoryMath.currentCentroidXOfTouchesChangedAfter;
		var currentCentroidYOfTouchesChangedAfter = TouchHistoryMath.currentCentroidYOfTouchesChangedAfter;
		var previousCentroidXOfTouchesChangedAfter = TouchHistoryMath.previousCentroidXOfTouchesChangedAfter;
		var previousCentroidYOfTouchesChangedAfter = TouchHistoryMath.previousCentroidYOfTouchesChangedAfter;
		var currentCentroidX = TouchHistoryMath.currentCentroidX;
		var currentCentroidY = TouchHistoryMath.currentCentroidY;

		var PanResponder = {

			_initializeGestureState: function _initializeGestureState(gestureState) {
				gestureState.moveX = 0;
				gestureState.moveY = 0;
				gestureState.x0 = 0;
				gestureState.y0 = 0;
				gestureState.dx = 0;
				gestureState.dy = 0;
				gestureState.vx = 0;
				gestureState.vy = 0;
				gestureState.numberActiveTouches = 0;

				gestureState._accountsForMovesUpTo = 0;
			},

			_updateGestureStateOnMove: function _updateGestureStateOnMove(gestureState, touchHistory) {
				gestureState.numberActiveTouches = touchHistory.numberActiveTouches;
				gestureState.moveX = currentCentroidXOfTouchesChangedAfter(touchHistory, gestureState._accountsForMovesUpTo);
				gestureState.moveY = currentCentroidYOfTouchesChangedAfter(touchHistory, gestureState._accountsForMovesUpTo);
				var movedAfter = gestureState._accountsForMovesUpTo;
				var prevX = previousCentroidXOfTouchesChangedAfter(touchHistory, movedAfter);
				var x = currentCentroidXOfTouchesChangedAfter(touchHistory, movedAfter);
				var prevY = previousCentroidYOfTouchesChangedAfter(touchHistory, movedAfter);
				var y = currentCentroidYOfTouchesChangedAfter(touchHistory, movedAfter);
				var nextDX = gestureState.dx + (x - prevX);
				var nextDY = gestureState.dy + (y - prevY);

				var dt = touchHistory.mostRecentTimeStamp - gestureState._accountsForMovesUpTo;
				gestureState.vx = (nextDX - gestureState.dx) / dt;
				gestureState.vy = (nextDY - gestureState.dy) / dt;

				gestureState.dx = nextDX;
				gestureState.dy = nextDY;
				gestureState._accountsForMovesUpTo = touchHistory.mostRecentTimeStamp;
			},

			create: function create(config) {
				var interactionState = {
					handle: null };

				var gestureState = {

					stateID: Math.random() };

				PanResponder._initializeGestureState(gestureState);
				var panHandlers = {
					onStartShouldSetResponder: function onStartShouldSetResponder(e) {
						return config.onStartShouldSetPanResponder === undefined ? false : config.onStartShouldSetPanResponder(e, gestureState);
					},
					onMoveShouldSetResponder: function onMoveShouldSetResponder(e) {
						return config.onMoveShouldSetPanResponder === undefined ? false : config.onMoveShouldSetPanResponder(e, gestureState);
					},
					onStartShouldSetResponderCapture: function onStartShouldSetResponderCapture(e) {

						if (e.nativeEvent.touches.length === 1) {
							PanResponder._initializeGestureState(gestureState);
						}
						gestureState.numberActiveTouches = e.touchHistory.numberActiveTouches;
						return config.onStartShouldSetPanResponderCapture !== undefined ? config.onStartShouldSetPanResponderCapture(e, gestureState) : false;
					},

					onMoveShouldSetResponderCapture: function onMoveShouldSetResponderCapture(e) {
						var touchHistory = e.touchHistory;

						if (gestureState._accountsForMovesUpTo === touchHistory.mostRecentTimeStamp) {
							return false;
						}
						PanResponder._updateGestureStateOnMove(gestureState, touchHistory);
						return config.onMoveShouldSetPanResponderCapture ? config.onMoveShouldSetPanResponderCapture(e, gestureState) : false;
					},

					onResponderGrant: function onResponderGrant(e) {
						if (!interactionState.handle) {
							interactionState.handle = InteractionManager.createInteractionHandle();
						}
						gestureState.x0 = currentCentroidX(e.touchHistory);
						gestureState.y0 = currentCentroidY(e.touchHistory);
						gestureState.dx = 0;
						gestureState.dy = 0;
						if (config.onPanResponderGrant) {
							config.onPanResponderGrant(e, gestureState);
						}

						return config.onShouldBlockNativeResponder === undefined ? true : config.onShouldBlockNativeResponder();
					},

					onResponderReject: function onResponderReject(e) {
						clearInteractionHandle(interactionState, config.onPanResponderReject, e, gestureState);
					},

					onResponderRelease: function onResponderRelease(e) {
						clearInteractionHandle(interactionState, config.onPanResponderRelease, e, gestureState);
						PanResponder._initializeGestureState(gestureState);
					},

					onResponderStart: function onResponderStart(e) {
						var touchHistory = e.touchHistory;
						gestureState.numberActiveTouches = touchHistory.numberActiveTouches;
						if (config.onPanResponderStart) {
							config.onPanResponderStart(e, gestureState);
						}
					},

					onResponderMove: function onResponderMove(e) {
						var touchHistory = e.touchHistory;

						if (gestureState._accountsForMovesUpTo === touchHistory.mostRecentTimeStamp) {
							return;
						}

						PanResponder._updateGestureStateOnMove(gestureState, touchHistory);
						if (config.onPanResponderMove) {
							config.onPanResponderMove(e, gestureState);
						}
					},

					onResponderEnd: function onResponderEnd(e) {
						var touchHistory = e.touchHistory;
						gestureState.numberActiveTouches = touchHistory.numberActiveTouches;
						clearInteractionHandle(interactionState, config.onPanResponderEnd, e, gestureState);
					},

					onResponderTerminate: function onResponderTerminate(e) {
						clearInteractionHandle(interactionState, config.onPanResponderTerminate, e, gestureState);
						PanResponder._initializeGestureState(gestureState);
					},

					onResponderTerminationRequest: function onResponderTerminationRequest(e) {
						return config.onPanResponderTerminationRequest === undefined ? true : config.onPanResponderTerminationRequest(e, gestureState);
					} };

				return {
					panHandlers: panHandlers,
					getInteractionHandle: function getInteractionHandle() {
						return interactionState.handle;
					} };
			} };

		function clearInteractionHandle(interactionState, callback, event, gestureState) {
			if (interactionState.handle) {
				InteractionManager.clearInteractionHandle(interactionState.handle);
				interactionState.handle = null;
			}
			if (callback) {
				callback(event, gestureState);
			}
		}

		module.exports = PanResponder;
	}, // Libraries/Utilities/clamp.js
	function (__inner_require__, exports, module) {
		function clamp(min, value, max) {
			if (value < min) {
				return min;
			}
			if (value > max) {
				return max;
			}
			return value;
		}

		module.exports = clamp;
	}, // Libraries/Components/Navigation/NavigatorIOS.ios.js
	function (__inner_require__, exports, module) {
		var EventEmitter = require('react-native@0.37/Libraries/EventEmitter/EventEmitter.js');
		var Image = __inner_require__(22 /*Libraries/Image/Image.ios.js*/);
		var NavigationContext = __inner_require__(48 /*Libraries/CustomComponents/Navigator/Navigation/NavigationContext.js*/);
		var RCTNavigatorManager = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js').NavigatorManager;
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var ReactNative = __inner_require__(26 /*Libraries/react-native/ReactNative.js*/);
		var StaticContainer = __inner_require__(62 /*Libraries/Components/StaticContainer.js*/);
		var StyleSheet = require('react-native@0.37/Libraries/StyleSheet/StyleSheet.js');
		var View = require('react-native@0.37/Libraries/Components/View/View.js');

		var invariant = require('fbjs@0.8/lib/invariant.js');
		var logError = require('react-native@0.37/Libraries/Utilities/logError.js');
		var requireNativeComponent = require('react-native@0.37/Libraries/ReactNative/requireNativeComponent.js');

		var keyMirror = require('fbjs@0.8/lib/keyMirror.js');

		var TRANSITIONER_REF = 'transitionerRef';

		var PropTypes = React.PropTypes;

		var __uid = 0;
		function getuid() {
			return __uid++;
		}var NavigatorTransitionerIOS = function (_React$Component) {
			babelHelpers.inherits(NavigatorTransitionerIOS, _React$Component);function NavigatorTransitionerIOS() {
				var _ref;var _temp, _this, _ret;babelHelpers.classCallCheck(this, NavigatorTransitionerIOS);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = NavigatorTransitionerIOS.__proto__ || Object.getPrototypeOf(NavigatorTransitionerIOS)).call.apply(_ref, [this].concat(args))), _this), _this.requestSchedulingNavigation = function (cb) {
					RCTNavigatorManager.requestSchedulingJavaScriptNavigation(ReactNative.findNodeHandle(_this), logError, cb);
				}, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
			}babelHelpers.createClass(NavigatorTransitionerIOS, [{ key: 'render', value: function render() {
					return React.createElement(RCTNavigator, this.props);
				} }]);return NavigatorTransitionerIOS;
		}(React.Component);

		var SystemIconLabels = {
			done: true,
			cancel: true,
			edit: true,
			save: true,
			add: true,
			compose: true,
			reply: true,
			action: true,
			organize: true,
			bookmarks: true,
			search: true,
			refresh: true,
			stop: true,
			camera: true,
			trash: true,
			play: true,
			pause: true,
			rewind: true,
			'fast-forward': true,
			undo: true,
			redo: true,
			'page-curl': true };

		var SystemIcons = keyMirror(SystemIconLabels);

		var NavigatorIOS = React.createClass({ displayName: 'NavigatorIOS',

			propTypes: {

				initialRoute: PropTypes.shape({

					component: PropTypes.func.isRequired,

					title: PropTypes.string.isRequired,

					titleImage: Image.propTypes.source,

					passProps: PropTypes.object,

					backButtonIcon: Image.propTypes.source,

					backButtonTitle: PropTypes.string,

					leftButtonIcon: Image.propTypes.source,

					leftButtonTitle: PropTypes.string,

					leftButtonSystemIcon: PropTypes.oneOf(Object.keys(SystemIcons)),

					onLeftButtonPress: PropTypes.func,

					rightButtonIcon: Image.propTypes.source,

					rightButtonTitle: PropTypes.string,

					rightButtonSystemIcon: PropTypes.oneOf(Object.keys(SystemIcons)),

					onRightButtonPress: PropTypes.func,

					wrapperStyle: View.propTypes.style,

					navigationBarHidden: PropTypes.bool,

					shadowHidden: PropTypes.bool,

					tintColor: PropTypes.string,

					barTintColor: PropTypes.string,

					titleTextColor: PropTypes.string,

					translucent: PropTypes.bool }).isRequired,

				navigationBarHidden: PropTypes.bool,

				shadowHidden: PropTypes.bool,

				itemWrapperStyle: View.propTypes.style,

				tintColor: PropTypes.string,

				barTintColor: PropTypes.string,

				titleTextColor: PropTypes.string,

				translucent: PropTypes.bool,

				interactivePopGestureEnabled: PropTypes.bool },

			navigator: undefined,
			navigationContext: new NavigationContext(),

			componentWillMount: function componentWillMount() {

				this.navigator = {
					push: this.push,
					pop: this.pop,
					popN: this.popN,
					replace: this.replace,
					replacePrevious: this.replacePrevious,
					replacePreviousAndPop: this.replacePreviousAndPop,
					resetTo: this.resetTo,
					popToRoute: this.popToRoute,
					popToTop: this.popToTop,
					navigationContext: this.navigationContext };

				this._emitWillFocus(this.state.routeStack[this.state.observedTopOfStack]);
			},

			componentDidMount: function componentDidMount() {
				this._emitDidFocus(this.state.routeStack[this.state.observedTopOfStack]);
			},

			componentWillUnmount: function componentWillUnmount() {
				this.navigationContext.dispose();
				this.navigationContext = new NavigationContext();
			},

			getDefaultProps: function getDefaultProps() {
				return {
					translucent: true };
			},

			getInitialState: function getInitialState() {
				return {
					idStack: [getuid()],
					routeStack: [this.props.initialRoute],

					requestedTopOfStack: 0,

					observedTopOfStack: 0,
					progress: 1,
					fromIndex: 0,
					toIndex: 0,

					makingNavigatorRequest: false,

					updatingAllIndicesAtOrBeyond: 0 };
			},

			_toFocusOnNavigationComplete: undefined,

			_handleFocusRequest: function _handleFocusRequest(item) {
				if (this.state.makingNavigatorRequest) {
					this._toFocusOnNavigationComplete = item;
				} else {
					this._getFocusEmitter().emit('focus', item);
				}
			},

			_focusEmitter: undefined,

			_getFocusEmitter: function _getFocusEmitter() {

				var focusEmitter = this._focusEmitter;
				if (!focusEmitter) {
					focusEmitter = new EventEmitter();
					this._focusEmitter = focusEmitter;
				}
				return focusEmitter;
			},

			getChildContext: function getChildContext() {
				return {
					onFocusRequested: this._handleFocusRequest,
					focusEmitter: this._getFocusEmitter() };
			},

			childContextTypes: {
				onFocusRequested: React.PropTypes.func,
				focusEmitter: React.PropTypes.instanceOf(EventEmitter) },

			_tryLockNavigator: function _tryLockNavigator(cb) {
				this.refs[TRANSITIONER_REF].requestSchedulingNavigation(function (acquiredLock) {
					return acquiredLock && cb();
				});
			},

			_handleNavigatorStackChanged: function _handleNavigatorStackChanged(e) {
				var newObservedTopOfStack = e.nativeEvent.stackLength - 1;
				this._emitDidFocus(this.state.routeStack[newObservedTopOfStack]);

				invariant(newObservedTopOfStack <= this.state.requestedTopOfStack, 'No navigator item should be pushed without JS knowing about it %s %s', newObservedTopOfStack, this.state.requestedTopOfStack);

				var wasWaitingForConfirmation = this.state.requestedTopOfStack !== this.state.observedTopOfStack;
				if (wasWaitingForConfirmation) {
					invariant(newObservedTopOfStack === this.state.requestedTopOfStack, 'If waiting for observedTopOfStack to reach requestedTopOfStack, ' + 'the only valid observedTopOfStack should be requestedTopOfStack.');
				}

				var nextState = {
					observedTopOfStack: newObservedTopOfStack,
					makingNavigatorRequest: false,
					updatingAllIndicesAtOrBeyond: null,
					progress: 1,
					toIndex: newObservedTopOfStack,
					fromIndex: newObservedTopOfStack };

				this.setState(nextState, this._eliminateUnneededChildren);
			},

			_eliminateUnneededChildren: function _eliminateUnneededChildren() {

				var updatingAllIndicesAtOrBeyond = this.state.routeStack.length > this.state.observedTopOfStack + 1 ? this.state.observedTopOfStack + 1 : null;
				this.setState({
					idStack: this.state.idStack.slice(0, this.state.observedTopOfStack + 1),
					routeStack: this.state.routeStack.slice(0, this.state.observedTopOfStack + 1),

					requestedTopOfStack: this.state.observedTopOfStack,
					makingNavigatorRequest: true,
					updatingAllIndicesAtOrBeyond: updatingAllIndicesAtOrBeyond });
			},

			_emitDidFocus: function _emitDidFocus(route) {
				this.navigationContext.emit('didfocus', { route: route });
			},

			_emitWillFocus: function _emitWillFocus(route) {
				this.navigationContext.emit('willfocus', { route: route });
			},

			push: function push(route) {
				var _this2 = this;
				invariant(!!route, 'Must supply route to push');

				if (this.state.requestedTopOfStack === this.state.observedTopOfStack) {
					this._tryLockNavigator(function () {
						_this2._emitWillFocus(route);

						var nextStack = _this2.state.routeStack.concat([route]);
						var nextIDStack = _this2.state.idStack.concat([getuid()]);
						_this2.setState({

							idStack: nextIDStack,
							routeStack: nextStack,
							requestedTopOfStack: nextStack.length - 1,
							makingNavigatorRequest: true,
							updatingAllIndicesAtOrBeyond: nextStack.length - 1 });
					});
				}
			},

			popN: function popN(n) {
				var _this3 = this;
				if (n === 0) {
					return;
				}

				if (this.state.requestedTopOfStack === this.state.observedTopOfStack) {
					if (this.state.requestedTopOfStack > 0) {
						this._tryLockNavigator(function () {
							var newRequestedTopOfStack = _this3.state.requestedTopOfStack - n;
							invariant(newRequestedTopOfStack >= 0, 'Cannot pop below 0');
							_this3._emitWillFocus(_this3.state.routeStack[newRequestedTopOfStack]);
							_this3.setState({
								requestedTopOfStack: newRequestedTopOfStack,
								makingNavigatorRequest: true,
								updatingAllIndicesAtOrBeyond: _this3.state.requestedTopOfStack - n });
						});
					}
				}
			},

			pop: function pop() {
				this.popN(1);
			},

			replaceAtIndex: function replaceAtIndex(route, index) {
				invariant(!!route, 'Must supply route to replace');
				if (index < 0) {
					index += this.state.routeStack.length;
				}

				if (this.state.routeStack.length <= index) {
					return;
				}

				var nextIDStack = this.state.idStack.slice();
				var nextRouteStack = this.state.routeStack.slice();
				nextIDStack[index] = getuid();
				nextRouteStack[index] = route;

				this.setState({
					idStack: nextIDStack,
					routeStack: nextRouteStack,
					makingNavigatorRequest: false,
					updatingAllIndicesAtOrBeyond: index });

				this._emitWillFocus(route);
				this._emitDidFocus(route);
			},

			replace: function replace(route) {
				this.replaceAtIndex(route, -1);
			},

			replacePrevious: function replacePrevious(route) {
				this.replaceAtIndex(route, -2);
			},

			popToTop: function popToTop() {
				this.popToRoute(this.state.routeStack[0]);
			},

			popToRoute: function popToRoute(route) {
				var indexOfRoute = this.state.routeStack.indexOf(route);
				invariant(indexOfRoute !== -1, 'Calling pop to route for a route that doesn\'t exist!');

				var numToPop = this.state.routeStack.length - indexOfRoute - 1;
				this.popN(numToPop);
			},

			replacePreviousAndPop: function replacePreviousAndPop(route) {
				var _this4 = this;

				if (this.state.requestedTopOfStack !== this.state.observedTopOfStack) {
					return;
				}
				if (this.state.routeStack.length < 2) {
					return;
				}
				this._tryLockNavigator(function () {
					_this4.replacePrevious(route);
					_this4.setState({
						requestedTopOfStack: _this4.state.requestedTopOfStack - 1,
						makingNavigatorRequest: true });
				});
			},

			resetTo: function resetTo(route) {
				invariant(!!route, 'Must supply route to push');

				if (this.state.requestedTopOfStack !== this.state.observedTopOfStack) {
					return;
				}
				this.replaceAtIndex(route, 0);
				this.popToRoute(route);
			},

			_handleNavigationComplete: function _handleNavigationComplete(e) {

				e.stopPropagation();

				if (this._toFocusOnNavigationComplete) {
					this._getFocusEmitter().emit('focus', this._toFocusOnNavigationComplete);
					this._toFocusOnNavigationComplete = null;
				}
				this._handleNavigatorStackChanged(e);
			},

			_routeToStackItem: function _routeToStackItem(routeArg, i) {
				var component = routeArg.component,
				    wrapperStyle = routeArg.wrapperStyle,
				    passProps = routeArg.passProps,
				    route = babelHelpers.objectWithoutProperties(routeArg, ['component', 'wrapperStyle', 'passProps']);var _props = this.props,
				    itemWrapperStyle = _props.itemWrapperStyle,
				    props = babelHelpers.objectWithoutProperties(_props, ['itemWrapperStyle']);
				var shouldUpdateChild = this.state.updatingAllIndicesAtOrBeyond != null && this.state.updatingAllIndicesAtOrBeyond >= i;
				var Component = component;
				return React.createElement(StaticContainer, { key: 'nav' + i, shouldUpdate: shouldUpdateChild }, React.createElement(RCTNavigatorItem, babelHelpers.extends({}, props, route, {
					style: [styles.stackItem, itemWrapperStyle, wrapperStyle] }), React.createElement(Component, babelHelpers.extends({
					navigator: this.navigator,
					route: route }, passProps))));
			},

			_renderNavigationStackItems: function _renderNavigationStackItems() {
				var shouldRecurseToNavigator = this.state.makingNavigatorRequest || this.state.updatingAllIndicesAtOrBeyond !== null;

				var items = shouldRecurseToNavigator ? this.state.routeStack.map(this._routeToStackItem) : null;
				return React.createElement(StaticContainer, { shouldUpdate: shouldRecurseToNavigator }, React.createElement(NavigatorTransitionerIOS, {
					ref: TRANSITIONER_REF,
					style: styles.transitioner,
					vertical: this.props.vertical,
					requestedTopOfStack: this.state.requestedTopOfStack,
					onNavigationComplete: this._handleNavigationComplete,
					interactivePopGestureEnabled: this.props.interactivePopGestureEnabled }, items));
			},

			render: function render() {
				return React.createElement(View, { style: this.props.style }, this._renderNavigationStackItems());
			} });

		var styles = StyleSheet.create({
			stackItem: {
				backgroundColor: 'white',
				overflow: 'hidden',
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0 },

			transitioner: {
				flex: 1 } });

		var RCTNavigator = requireNativeComponent('RCTNavigator');
		var RCTNavigatorItem = requireNativeComponent('RCTNavItem');

		module.exports = NavigatorIOS;
	}, // Libraries/Components/StaticContainer.js
	function (__inner_require__, exports, module) {
		var React = require('react-native@0.37/Libraries/react-native/React.js');var StaticContainer = function (_React$Component) {
			babelHelpers.inherits(StaticContainer, _React$Component);function StaticContainer() {
				babelHelpers.classCallCheck(this, StaticContainer);return babelHelpers.possibleConstructorReturn(this, (StaticContainer.__proto__ || Object.getPrototypeOf(StaticContainer)).apply(this, arguments));
			}babelHelpers.createClass(StaticContainer, [{ key: 'shouldComponentUpdate', value: function shouldComponentUpdate(nextProps) {
					return !!nextProps.shouldUpdate;
				} }, { key: 'render', value: function render() {
					var child = this.props.children;
					return child === null || child === false ? null : React.Children.only(child);
				} }]);return StaticContainer;
		}(React.Component);

		module.exports = StaticContainer;
	}, // Libraries/Components/Picker/Picker.js
	function (__inner_require__, exports, module) {
		var _class, _temp;

		var ColorPropType = require('react-native@0.37/Libraries/StyleSheet/ColorPropType.js');
		var PickerIOS = __inner_require__(64 /*Libraries/Components/Picker/PickerIOS.ios.js*/);
		var PickerAndroid = __inner_require__(65 /*Libraries/Components/Picker/PickerAndroid.ios.js*/);
		var Platform = require('react-native@0.37/Libraries/Utilities/Platform.ios.js');
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var StyleSheetPropType = require('react-native@0.37/Libraries/StyleSheet/StyleSheetPropType.js');
		var TextStylePropTypes = require('react-native@0.37/Libraries/Text/TextStylePropTypes.js');
		var UnimplementedView = require('react-native@0.37/Libraries/Components/UnimplementedViews/UnimplementedView.js');
		var View = require('react-native@0.37/Libraries/Components/View/View.js');
		var ViewStylePropTypes = require('react-native@0.37/Libraries/Components/View/ViewStylePropTypes.js');

		var itemStylePropType = StyleSheetPropType(TextStylePropTypes);

		var pickerStyleType = StyleSheetPropType(babelHelpers.extends({}, ViewStylePropTypes, {
			color: ColorPropType }));

		var MODE_DIALOG = 'dialog';
		var MODE_DROPDOWN = 'dropdown';var Picker = function (_React$Component) {
			babelHelpers.inherits(Picker, _React$Component);function Picker() {
				babelHelpers.classCallCheck(this, Picker);return babelHelpers.possibleConstructorReturn(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).apply(this, arguments));
			}babelHelpers.createClass(Picker, [{ key: 'render', value: function render() {
					if (Platform.OS === 'ios') {

						return React.createElement(PickerIOS, this.props, this.props.children);
					} else if (Platform.OS === 'android') {

						return React.createElement(PickerAndroid, this.props, this.props.children);
					} else {
						return React.createElement(UnimplementedView, null);
					}
				} }]);return Picker;
		}(React.Component);Picker.MODE_DIALOG = MODE_DIALOG;Picker.MODE_DROPDOWN = MODE_DROPDOWN;Picker.defaultProps = { mode: MODE_DIALOG };Picker.propTypes = babelHelpers.extends({}, View.propTypes, { style: pickerStyleType, selectedValue: React.PropTypes.any, onValueChange: React.PropTypes.func, enabled: React.PropTypes.bool, mode: React.PropTypes.oneOf(['dialog', 'dropdown']), itemStyle: itemStylePropType, prompt: React.PropTypes.string, testID: React.PropTypes.string });

		Picker.Item = (_temp = _class = function (_React$Component2) {
			babelHelpers.inherits(_class, _React$Component2);function _class() {
				babelHelpers.classCallCheck(this, _class);return babelHelpers.possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
			}babelHelpers.createClass(_class, [{ key: 'render', value: function render() {

					throw null;
				} }]);return _class;
		}(React.Component), _class.propTypes = { label: React.PropTypes.string.isRequired, value: React.PropTypes.any, color: ColorPropType, testID: React.PropTypes.string }, _temp);

		module.exports = Picker;
	}, // Libraries/Components/Picker/PickerIOS.ios.js
	function (__inner_require__, exports, module) {
		var _class, _temp;

		var NativeMethodsMixin = require('react@15.3/lib/NativeMethodsMixin.js');
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var StyleSheet = require('react-native@0.37/Libraries/StyleSheet/StyleSheet.js');
		var StyleSheetPropType = require('react-native@0.37/Libraries/StyleSheet/StyleSheetPropType.js');
		var TextStylePropTypes = require('react-native@0.37/Libraries/Text/TextStylePropTypes.js');
		var View = require('react-native@0.37/Libraries/Components/View/View.js');

		var itemStylePropType = StyleSheetPropType(TextStylePropTypes);
		var requireNativeComponent = require('react-native@0.37/Libraries/ReactNative/requireNativeComponent.js');

		var PickerIOS = React.createClass({ displayName: 'PickerIOS',
			mixins: [NativeMethodsMixin],

			propTypes: babelHelpers.extends({}, View.propTypes, {
				itemStyle: itemStylePropType,
				onValueChange: React.PropTypes.func,
				selectedValue: React.PropTypes.any }),

			getInitialState: function getInitialState() {
				return this._stateFromProps(this.props);
			},

			componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
				this.setState(this._stateFromProps(nextProps));
			},

			_stateFromProps: function _stateFromProps(props) {
				var selectedIndex = 0;
				var items = [];
				React.Children.toArray(props.children).forEach(function (child, index) {
					if (child.props.value === props.selectedValue) {
						selectedIndex = index;
					}
					items.push({ value: child.props.value, label: child.props.label });
				});
				return { selectedIndex: selectedIndex, items: items };
			},

			render: function render() {
				var _this = this;
				return React.createElement(View, { style: this.props.style }, React.createElement(RCTPickerIOS, {
					ref: function ref(picker) {
						return _this._picker = picker;
					},
					style: [styles.pickerIOS, this.props.itemStyle],
					items: this.state.items,
					selectedIndex: this.state.selectedIndex,
					onChange: this._onChange }));
			},

			_onChange: function _onChange(event) {
				if (this.props.onChange) {
					this.props.onChange(event);
				}
				if (this.props.onValueChange) {
					this.props.onValueChange(event.nativeEvent.newValue, event.nativeEvent.newIndex);
				}

				if (this._picker && this.state.selectedIndex !== event.nativeEvent.newIndex) {
					this._picker.setNativeProps({
						selectedIndex: this.state.selectedIndex });
				}
			} });

		PickerIOS.Item = (_temp = _class = function (_React$Component) {
			babelHelpers.inherits(_class, _React$Component);function _class() {
				babelHelpers.classCallCheck(this, _class);return babelHelpers.possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
			}babelHelpers.createClass(_class, [{ key: 'render', value: function render() {

					return null;
				} }]);return _class;
		}(React.Component), _class.propTypes = { value: React.PropTypes.any, label: React.PropTypes.string }, _temp);

		var styles = StyleSheet.create({
			pickerIOS: {

				height: 216 } });

		var RCTPickerIOS = requireNativeComponent('RCTPicker', {
			propTypes: {
				style: itemStylePropType } }, {
			nativeOnly: {
				items: true,
				onChange: true,
				selectedIndex: true } });

		module.exports = PickerIOS;
	}, // Libraries/Components/Picker/PickerAndroid.ios.js
	function (__inner_require__, exports, module) {
		module.exports = require('react-native@0.37/Libraries/Components/UnimplementedViews/UnimplementedView.js');
	}, // Libraries/Components/ProgressBarAndroid/ProgressBarAndroid.ios.js
	function (__inner_require__, exports, module) {
		module.exports = require('react-native@0.37/Libraries/Components/UnimplementedViews/UnimplementedView.js');
	}, // Libraries/Components/ProgressViewIOS/ProgressViewIOS.ios.js
	function (__inner_require__, exports, module) {
		var Image = __inner_require__(22 /*Libraries/Image/Image.ios.js*/);
		var NativeMethodsMixin = require('react@15.3/lib/NativeMethodsMixin.js');
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var StyleSheet = require('react-native@0.37/Libraries/StyleSheet/StyleSheet.js');
		var View = require('react-native@0.37/Libraries/Components/View/View.js');

		var requireNativeComponent = require('react-native@0.37/Libraries/ReactNative/requireNativeComponent.js');

		var PropTypes = React.PropTypes;

		var ProgressViewIOS = React.createClass({ displayName: 'ProgressViewIOS',
			mixins: [NativeMethodsMixin],

			propTypes: babelHelpers.extends({}, View.propTypes, {

				progressViewStyle: PropTypes.oneOf(['default', 'bar']),

				progress: PropTypes.number,

				progressTintColor: PropTypes.string,

				trackTintColor: PropTypes.string,

				progressImage: Image.propTypes.source,

				trackImage: Image.propTypes.source }),

			render: function render() {
				return React.createElement(RCTProgressView, babelHelpers.extends({}, this.props, {
					style: [styles.progressView, this.props.style] }));
			} });

		var styles = StyleSheet.create({
			progressView: {
				height: 2 } });

		var RCTProgressView = requireNativeComponent('RCTProgressView', ProgressViewIOS);

		module.exports = ProgressViewIOS;
	}, // Libraries/Components/SegmentedControlIOS/SegmentedControlIOS.ios.js
	function (__inner_require__, exports, module) {
		var NativeMethodsMixin = require('react@15.3/lib/NativeMethodsMixin.js');
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var StyleSheet = require('react-native@0.37/Libraries/StyleSheet/StyleSheet.js');
		var View = require('react-native@0.37/Libraries/Components/View/View.js');

		var requireNativeComponent = require('react-native@0.37/Libraries/ReactNative/requireNativeComponent.js');

		var PropTypes = React.PropTypes;

		var SEGMENTED_CONTROL_REFERENCE = 'segmentedcontrol';

		var SegmentedControlIOS = React.createClass({ displayName: 'SegmentedControlIOS',
			mixins: [NativeMethodsMixin],

			propTypes: babelHelpers.extends({}, View.propTypes, {

				values: PropTypes.arrayOf(PropTypes.string),

				selectedIndex: PropTypes.number,

				onValueChange: PropTypes.func,

				onChange: PropTypes.func,

				enabled: PropTypes.bool,

				tintColor: PropTypes.string,

				momentary: PropTypes.bool }),

			getDefaultProps: function getDefaultProps() {
				return {
					values: [],
					enabled: true };
			},

			_onChange: function _onChange(event) {
				this.props.onChange && this.props.onChange(event);
				this.props.onValueChange && this.props.onValueChange(event.nativeEvent.value);
			},

			render: function render() {
				return React.createElement(RCTSegmentedControl, babelHelpers.extends({}, this.props, {
					ref: SEGMENTED_CONTROL_REFERENCE,
					style: [styles.segmentedControl, this.props.style],
					onChange: this._onChange }));
			} });

		var styles = StyleSheet.create({
			segmentedControl: {
				height: 28 } });

		var RCTSegmentedControl = requireNativeComponent('RCTSegmentedControl', SegmentedControlIOS);

		module.exports = SegmentedControlIOS;
	}, // Libraries/Components/Slider/Slider.js
	function (__inner_require__, exports, module) {
		var Image = __inner_require__(22 /*Libraries/Image/Image.ios.js*/);
		var NativeMethodsMixin = require('react@15.3/lib/NativeMethodsMixin.js');
		var ReactNativeViewAttributes = require('react-native@0.37/Libraries/Components/View/ReactNativeViewAttributes.js');
		var Platform = require('react-native@0.37/Libraries/Utilities/Platform.ios.js');
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var StyleSheet = require('react-native@0.37/Libraries/StyleSheet/StyleSheet.js');
		var View = require('react-native@0.37/Libraries/Components/View/View.js');

		var requireNativeComponent = require('react-native@0.37/Libraries/ReactNative/requireNativeComponent.js');

		var PropTypes = React.PropTypes;

		var Slider = React.createClass({ displayName: 'Slider',
			mixins: [NativeMethodsMixin],

			propTypes: babelHelpers.extends({}, View.propTypes, {

				style: View.propTypes.style,

				value: PropTypes.number,

				step: PropTypes.number,

				minimumValue: PropTypes.number,

				maximumValue: PropTypes.number,

				minimumTrackTintColor: PropTypes.string,

				maximumTrackTintColor: PropTypes.string,

				disabled: PropTypes.bool,

				trackImage: Image.propTypes.source,

				minimumTrackImage: Image.propTypes.source,

				maximumTrackImage: Image.propTypes.source,

				thumbImage: Image.propTypes.source,

				onValueChange: PropTypes.func,

				onSlidingComplete: PropTypes.func,

				testID: PropTypes.string }),

			getDefaultProps: function getDefaultProps() {
				return {
					disabled: false,
					value: 0,
					minimumValue: 0,
					maximumValue: 1,
					step: 0 };
			},

			viewConfig: {
				uiViewClassName: 'RCTSlider',
				validAttributes: babelHelpers.extends({}, ReactNativeViewAttributes.RCTView, {
					value: true }) },

			render: function render() {
				var _props = this.props,
				    style = _props.style,
				    onValueChange = _props.onValueChange,
				    onSlidingComplete = _props.onSlidingComplete,
				    props = babelHelpers.objectWithoutProperties(_props, ['style', 'onValueChange', 'onSlidingComplete']);
				props.style = [styles.slider, style];

				props.onValueChange = onValueChange && function (event) {
					var userEvent = true;
					if (Platform.OS === 'android') {

						userEvent = event.nativeEvent.fromUser;
					}
					onValueChange && userEvent && onValueChange(event.nativeEvent.value);
				};

				props.onChange = props.onValueChange;

				props.onSlidingComplete = onSlidingComplete && function (event) {
					onSlidingComplete && onSlidingComplete(event.nativeEvent.value);
				};

				return React.createElement(RCTSlider, babelHelpers.extends({}, props, {
					enabled: !this.props.disabled,
					onStartShouldSetResponder: function onStartShouldSetResponder() {
						return true;
					},
					onResponderTerminationRequest: function onResponderTerminationRequest() {
						return false;
					} }));
			} });

		var styles = void 0;
		if (Platform.OS === 'ios') {
			styles = StyleSheet.create({
				slider: {
					height: 40 } });
		} else {
			styles = StyleSheet.create({
				slider: {} });
		}

		var options = {};
		if (Platform.OS === 'android') {
			options = {
				nativeOnly: {
					enabled: true } };
		}
		var RCTSlider = requireNativeComponent('RCTSlider', Slider, options);

		module.exports = Slider;
	}, // Libraries/RCTTest/SnapshotViewIOS.ios.js
	function (__inner_require__, exports, module) {
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var StyleSheet = require('react-native@0.37/Libraries/StyleSheet/StyleSheet.js');var _require = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js'),
		    TestModule = _require.TestModule;
		var UIManager = require('react-native@0.37/Libraries/ReactNative/UIManager.js');
		var View = require('react-native@0.37/Libraries/Components/View/View.js');

		var requireNativeComponent = require('react-native@0.37/Libraries/ReactNative/requireNativeComponent.js');var SnapshotViewIOS = function (_React$Component) {
			babelHelpers.inherits(SnapshotViewIOS, _React$Component);function SnapshotViewIOS() {
				var _ref;var _temp, _this, _ret;babelHelpers.classCallCheck(this, SnapshotViewIOS);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = SnapshotViewIOS.__proto__ || Object.getPrototypeOf(SnapshotViewIOS)).call.apply(_ref, [this].concat(args))), _this), _this.onDefaultAction = function (event) {
					TestModule.verifySnapshot(TestModule.markTestPassed);
				}, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
			}babelHelpers.createClass(SnapshotViewIOS, [{ key: 'render', value: function render() {
					var testIdentifier = this.props.testIdentifier || 'test';
					var onSnapshotReady = this.props.onSnapshotReady || this.onDefaultAction;
					return React.createElement(RCTSnapshot, babelHelpers.extends({
						style: style.snapshot }, this.props, {
						onSnapshotReady: onSnapshotReady,
						testIdentifier: testIdentifier }));
				} }]);return SnapshotViewIOS;
		}(React.Component);SnapshotViewIOS.propTypes = babelHelpers.extends({}, View.propTypes, { onSnapshotReady: React.PropTypes.func, testIdentifier: React.PropTypes.string });

		var style = StyleSheet.create({
			snapshot: {
				flex: 1 } });

		var RCTSnapshot = UIManager.RCTSnapshot ? requireNativeComponent('RCTSnapshot', SnapshotViewIOS) : View;

		module.exports = SnapshotViewIOS;
	}, // Libraries/Components/Switch/Switch.js
	function (__inner_require__, exports, module) {
		var ColorPropType = require('react-native@0.37/Libraries/StyleSheet/ColorPropType.js');
		var NativeMethodsMixin = require('react@15.3/lib/NativeMethodsMixin.js');
		var Platform = require('react-native@0.37/Libraries/Utilities/Platform.ios.js');
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var StyleSheet = require('react-native@0.37/Libraries/StyleSheet/StyleSheet.js');
		var View = require('react-native@0.37/Libraries/Components/View/View.js');

		var requireNativeComponent = require('react-native@0.37/Libraries/ReactNative/requireNativeComponent.js');

		var Switch = React.createClass({ displayName: 'Switch',
			propTypes: babelHelpers.extends({}, View.propTypes, {

				value: React.PropTypes.bool,

				disabled: React.PropTypes.bool,

				onValueChange: React.PropTypes.func,

				testID: React.PropTypes.string,

				tintColor: ColorPropType,

				onTintColor: ColorPropType,

				thumbTintColor: ColorPropType }),

			getDefaultProps: function getDefaultProps() {
				return {
					value: false,
					disabled: false };
			},

			mixins: [NativeMethodsMixin],

			_rctSwitch: {},
			_onChange: function _onChange(event) {
				if (Platform.OS === 'android') {
					this._rctSwitch.setNativeProps({ on: this.props.value });
				} else {
					this._rctSwitch.setNativeProps({ value: this.props.value });
				}

				this.props.onChange && this.props.onChange(event);
				this.props.onValueChange && this.props.onValueChange(event.nativeEvent.value);
			},

			render: function render() {
				var _this = this;
				var props = babelHelpers.extends({}, this.props);
				props.onStartShouldSetResponder = function () {
					return true;
				};
				props.onResponderTerminationRequest = function () {
					return false;
				};
				if (Platform.OS === 'android') {
					props.enabled = !this.props.disabled;
					props.on = this.props.value;
					props.style = this.props.style;
				} else if (Platform.OS === 'ios') {
					props.style = [styles.rctSwitchIOS, this.props.style];
				}
				return React.createElement(RCTSwitch, babelHelpers.extends({}, props, {
					ref: function ref(_ref) {
						_this._rctSwitch = _ref;
					},
					onChange: this._onChange }));
			} });

		var styles = StyleSheet.create({
			rctSwitchIOS: {
				height: 31,
				width: 51 } });

		if (Platform.OS === 'android') {
			var RCTSwitch = requireNativeComponent('AndroidSwitch', Switch, {
				nativeOnly: { onChange: true, on: true, enabled: true } });
		} else {
			var RCTSwitch = requireNativeComponent('RCTSwitch', Switch, {
				nativeOnly: { onChange: true } });
		}

		module.exports = Switch;
	}, // Libraries/Components/ScrollView/RecyclerViewBackedScrollView.ios.js
	function (__inner_require__, exports, module) {
		module.exports = __inner_require__(24 /*Libraries/Components/ScrollView/ScrollView.js*/);
	}, // Libraries/Components/RefreshControl/RefreshControl.js
	function (__inner_require__, exports, module) {
		var ColorPropType = require('react-native@0.37/Libraries/StyleSheet/ColorPropType.js');
		var NativeMethodsMixin = require('react@15.3/lib/NativeMethodsMixin.js');
		var Platform = require('react-native@0.37/Libraries/Utilities/Platform.ios.js');
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var View = require('react-native@0.37/Libraries/Components/View/View.js');

		var requireNativeComponent = require('react-native@0.37/Libraries/ReactNative/requireNativeComponent.js');

		if (Platform.OS === 'android') {
			var RefreshLayoutConsts = require('react-native@0.37/Libraries/ReactNative/UIManager.js').AndroidSwipeRefreshLayout.Constants;
		} else {
			var RefreshLayoutConsts = { SIZE: {} };
		}

		var RefreshControl = React.createClass({ displayName: 'RefreshControl',
			statics: {
				SIZE: RefreshLayoutConsts.SIZE },

			mixins: [NativeMethodsMixin],

			propTypes: babelHelpers.extends({}, View.propTypes, {

				onRefresh: React.PropTypes.func,

				refreshing: React.PropTypes.bool.isRequired,

				tintColor: ColorPropType,

				titleColor: ColorPropType,

				title: React.PropTypes.string,

				enabled: React.PropTypes.bool,

				colors: React.PropTypes.arrayOf(ColorPropType),

				progressBackgroundColor: ColorPropType,

				size: React.PropTypes.oneOf([RefreshLayoutConsts.SIZE.DEFAULT, RefreshLayoutConsts.SIZE.LARGE]),

				progressViewOffset: React.PropTypes.number }),

			_nativeRef: null,
			_lastNativeRefreshing: false,

			componentDidMount: function componentDidMount() {
				this._lastNativeRefreshing = this.props.refreshing;
			},

			componentDidUpdate: function componentDidUpdate(prevProps) {

				if (this.props.refreshing !== prevProps.refreshing) {
					this._lastNativeRefreshing = this.props.refreshing;
				} else if (this.props.refreshing !== this._lastNativeRefreshing) {
					this._nativeRef.setNativeProps({ refreshing: this.props.refreshing });
					this._lastNativeRefreshing = this.props.refreshing;
				}
			},

			render: function render() {
				var _this = this;
				return React.createElement(NativeRefreshControl, babelHelpers.extends({}, this.props, {
					ref: function ref(_ref) {
						return _this._nativeRef = _ref;
					},
					onRefresh: this._onRefresh }));
			},

			_onRefresh: function _onRefresh() {
				this._lastNativeRefreshing = true;

				this.props.onRefresh && this.props.onRefresh();

				this.forceUpdate();
			} });

		if (Platform.OS === 'ios') {
			var NativeRefreshControl = requireNativeComponent('RCTRefreshControl', RefreshControl);
		} else if (Platform.OS === 'android') {
			var NativeRefreshControl = requireNativeComponent('AndroidSwipeRefreshLayout', RefreshControl);
		}

		module.exports = RefreshControl;
	}, // Libraries/Components/StatusBar/StatusBar.js
	function (__inner_require__, exports, module) {
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var ColorPropType = require('react-native@0.37/Libraries/StyleSheet/ColorPropType.js');
		var Platform = require('react-native@0.37/Libraries/Utilities/Platform.ios.js');

		var processColor = require('react-native@0.37/Libraries/StyleSheet/processColor.js');

		var StatusBarManager = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js').StatusBarManager;

		function mergePropsStack(propsStack, defaultValues) {
			return propsStack.reduce(function (prev, cur) {
				for (var prop in cur) {
					if (cur[prop] != null) {
						prev[prop] = cur[prop];
					}
				}
				return prev;
			}, babelHelpers.extends({}, defaultValues));
		}

		function createStackEntry(props) {
			return {
				backgroundColor: props.backgroundColor != null ? {
					value: props.backgroundColor,
					animated: props.animated } : null,
				barStyle: props.barStyle != null ? {
					value: props.barStyle,
					animated: props.animated } : null,
				translucent: props.translucent,
				hidden: props.hidden != null ? {
					value: props.hidden,
					animated: props.animated,
					transition: props.showHideTransition } : null,
				networkActivityIndicatorVisible: props.networkActivityIndicatorVisible };
		}var StatusBar = function (_React$Component) {
			babelHelpers.inherits(StatusBar, _React$Component);function StatusBar() {
				var _ref;var _temp, _this, _ret;babelHelpers.classCallCheck(this, StatusBar);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = StatusBar.__proto__ || Object.getPrototypeOf(StatusBar)).call.apply(_ref, [this].concat(args))), _this), _this._stackEntry = null, _this._updatePropsStack = function () {

					clearImmediate(StatusBar._updateImmediate);
					StatusBar._updateImmediate = setImmediate(function () {
						var oldProps = StatusBar._currentValues;
						var mergedProps = mergePropsStack(StatusBar._propsStack, StatusBar._defaultProps);

						if (Platform.OS === 'ios') {
							if (!oldProps || oldProps.barStyle.value !== mergedProps.barStyle.value) {
								StatusBarManager.setStyle(mergedProps.barStyle.value, mergedProps.barStyle.animated);
							}
							if (!oldProps || oldProps.hidden.value !== mergedProps.hidden.value) {
								StatusBarManager.setHidden(mergedProps.hidden.value, mergedProps.hidden.animated ? mergedProps.hidden.transition : 'none');
							}

							if (!oldProps || oldProps.networkActivityIndicatorVisible !== mergedProps.networkActivityIndicatorVisible) {
								StatusBarManager.setNetworkActivityIndicatorVisible(mergedProps.networkActivityIndicatorVisible);
							}
						} else if (Platform.OS === 'android') {
							if (!oldProps || oldProps.barStyle.value !== mergedProps.barStyle.value) {
								StatusBarManager.setStyle(mergedProps.barStyle.value);
							}
							if (!oldProps || oldProps.backgroundColor.value !== mergedProps.backgroundColor.value) {
								StatusBarManager.setColor(processColor(mergedProps.backgroundColor.value), mergedProps.backgroundColor.animated);
							}
							if (!oldProps || oldProps.hidden.value !== mergedProps.hidden.value) {
								StatusBarManager.setHidden(mergedProps.hidden.value);
							}
							if (!oldProps || oldProps.translucent !== mergedProps.translucent) {
								StatusBarManager.setTranslucent(mergedProps.translucent);
							}
						}

						StatusBar._currentValues = mergedProps;
					});
				}, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
			}babelHelpers.createClass(StatusBar, [{ key: 'componentDidMount', value: function componentDidMount() {
					this._stackEntry = createStackEntry(this.props);StatusBar._propsStack.push(this._stackEntry);this._updatePropsStack();
				} }, { key: 'componentWillUnmount', value: function componentWillUnmount() {
					var index = StatusBar._propsStack.indexOf(this._stackEntry);StatusBar._propsStack.splice(index, 1);this._updatePropsStack();
				} }, { key: 'componentDidUpdate', value: function componentDidUpdate() {
					var index = StatusBar._propsStack.indexOf(this._stackEntry);this._stackEntry = createStackEntry(this.props);StatusBar._propsStack[index] = this._stackEntry;this._updatePropsStack();
				} }, { key: 'render', value: function render() {
					return null;
				} }], [{ key: 'setHidden', value: function setHidden(hidden, animation) {
					animation = animation || 'none';StatusBar._defaultProps.hidden.value = hidden;if (Platform.OS === 'ios') {
						StatusBarManager.setHidden(hidden, animation);
					} else if (Platform.OS === 'android') {
						StatusBarManager.setHidden(hidden);
					}
				} }, { key: 'setBarStyle', value: function setBarStyle(style, animated) {
					animated = animated || false;StatusBar._defaultProps.barStyle.value = style;if (Platform.OS === 'ios') {
						StatusBarManager.setStyle(style, animated);
					} else if (Platform.OS === 'android') {
						StatusBarManager.setStyle(style);
					}
				} }, { key: 'setNetworkActivityIndicatorVisible', value: function setNetworkActivityIndicatorVisible(visible) {
					if (Platform.OS !== 'ios') {
						console.warn('`setNetworkActivityIndicatorVisible` is only available on iOS');return;
					}StatusBar._defaultProps.networkActivityIndicatorVisible = visible;StatusBarManager.setNetworkActivityIndicatorVisible(visible);
				} }, { key: 'setBackgroundColor', value: function setBackgroundColor(color, animated) {
					if (Platform.OS !== 'android') {
						console.warn('`setBackgroundColor` is only available on Android');return;
					}animated = animated || false;StatusBar._defaultProps.backgroundColor.value = color;StatusBarManager.setColor(processColor(color), animated);
				} }, { key: 'setTranslucent', value: function setTranslucent(translucent) {
					if (Platform.OS !== 'android') {
						console.warn('`setTranslucent` is only available on Android');return;
					}StatusBar._defaultProps.translucent = translucent;StatusBarManager.setTranslucent(translucent);
				} }]);return StatusBar;
		}(React.Component);StatusBar._propsStack = [];StatusBar._defaultProps = createStackEntry({ animated: false, showHideTransition: 'fade', backgroundColor: 'black', barStyle: 'default', translucent: false, hidden: false, networkActivityIndicatorVisible: false });StatusBar._updateImmediate = null;StatusBar._currentValues = null;StatusBar.currentHeight = StatusBarManager.HEIGHT;StatusBar.propTypes = { hidden: React.PropTypes.bool, animated: React.PropTypes.bool, backgroundColor: ColorPropType, translucent: React.PropTypes.bool, barStyle: React.PropTypes.oneOf(['default', 'light-content', 'dark-content']), networkActivityIndicatorVisible: React.PropTypes.bool, showHideTransition: React.PropTypes.oneOf(['fade', 'slide']) };StatusBar.defaultProps = { animated: false, showHideTransition: 'fade' };

		module.exports = StatusBar;
	}, // Libraries/Experimental/SwipeableRow/SwipeableListView.js
	function (__inner_require__, exports, module) {
		var ListView = __inner_require__(38 /*Libraries/CustomComponents/ListView/ListView.js*/);
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var SwipeableListViewDataSource = __inner_require__(76 /*Libraries/Experimental/SwipeableRow/SwipeableListViewDataSource.js*/);
		var SwipeableRow = __inner_require__(77 /*Libraries/Experimental/SwipeableRow/SwipeableRow.js*/);var PropTypes = React.PropTypes;var SwipeableListView = function (_React$Component) {
			babelHelpers.inherits(SwipeableListView, _React$Component);babelHelpers.createClass(SwipeableListView, null, [{ key: 'getNewDataSource', value: function getNewDataSource() {
					return new SwipeableListViewDataSource({
						getRowData: function getRowData(data, sectionID, rowID) {
							return data[sectionID][rowID];
						},
						getSectionHeaderData: function getSectionHeaderData(data, sectionID) {
							return data[sectionID];
						},
						rowHasChanged: function rowHasChanged(row1, row2) {
							return row1 !== row2;
						},
						sectionHeaderHasChanged: function sectionHeaderHasChanged(s1, s2) {
							return s1 !== s2;
						} });
				} }]);

			function SwipeableListView(props, context) {
				babelHelpers.classCallCheck(this, SwipeableListView);var _this = babelHelpers.possibleConstructorReturn(this, (SwipeableListView.__proto__ || Object.getPrototypeOf(SwipeableListView)).call(this, props, context));_this._listViewRef = null;_this._shouldBounceFirstRowOnMount = false;_this._onScroll = function (e) {

					if (_this.props.dataSource.getOpenRowID()) {
						_this.setState({
							dataSource: _this.state.dataSource.setOpenRowID(null) });
					}
					_this.props.onScroll && _this.props.onScroll(e);
				};_this._renderRow = function (rowData, sectionID, rowID) {
					var slideoutView = _this.props.renderQuickActions(rowData, sectionID, rowID);

					if (!slideoutView) {
						return _this.props.renderRow(rowData, sectionID, rowID);
					}

					var shouldBounceOnMount = false;
					if (_this._shouldBounceFirstRowOnMount) {
						_this._shouldBounceFirstRowOnMount = false;
						shouldBounceOnMount = rowID === _this.props.dataSource.getFirstRowID();
					}

					return React.createElement(SwipeableRow, {
						slideoutView: slideoutView,
						isOpen: rowData.id === _this.props.dataSource.getOpenRowID(),
						maxSwipeDistance: _this.props.maxSwipeDistance,
						key: rowID,
						onOpen: function onOpen() {
							return _this._onOpen(rowData.id);
						},
						onSwipeEnd: function onSwipeEnd() {
							return _this._setListViewScrollable(true);
						},
						onSwipeStart: function onSwipeStart() {
							return _this._setListViewScrollable(false);
						},
						shouldBounceOnMount: shouldBounceOnMount }, _this.props.renderRow(rowData, sectionID, rowID));
				};_this._shouldBounceFirstRowOnMount = _this.props.bounceFirstRowOnMount;_this.state = { dataSource: _this.props.dataSource };return _this;
			}babelHelpers.createClass(SwipeableListView, [{ key: 'componentWillReceiveProps', value: function componentWillReceiveProps(nextProps) {
					if (this.state.dataSource.getDataSource() !== nextProps.dataSource.getDataSource()) {
						this.setState({ dataSource: nextProps.dataSource });
					}
				} }, { key: 'render', value: function render() {
					var _this2 = this;return React.createElement(ListView, babelHelpers.extends({}, this.props, { ref: function ref(_ref) {
							_this2._listViewRef = _ref;
						}, dataSource: this.state.dataSource.getDataSource(), onScroll: this._onScroll, renderRow: this._renderRow }));
				} }, { key: '_setListViewScrollable', value: function _setListViewScrollable(value) {
					if (this._listViewRef && typeof this._listViewRef.setNativeProps === 'function') {
						this._listViewRef.setNativeProps({ scrollEnabled: value });
					}
				} }, { key: 'getScrollResponder', value: function getScrollResponder() {
					if (this._listViewRef && typeof this._listViewRef.getScrollResponder === 'function') {
						return this._listViewRef.getScrollResponder();
					}
				} }, { key: '_onOpen', value: function _onOpen(rowID) {
					this.setState({
						dataSource: this.state.dataSource.setOpenRowID(rowID) });
				} }]);return SwipeableListView;
		}(React.Component);SwipeableListView.propTypes = { bounceFirstRowOnMount: PropTypes.bool.isRequired, dataSource: PropTypes.instanceOf(SwipeableListViewDataSource).isRequired, maxSwipeDistance: PropTypes.number.isRequired, renderRow: PropTypes.func.isRequired, renderQuickActions: PropTypes.func.isRequired };SwipeableListView.defaultProps = { bounceFirstRowOnMount: false, renderQuickActions: function renderQuickActions() {
				return null;
			} };

		module.exports = SwipeableListView;
	}, // Libraries/Experimental/SwipeableRow/SwipeableListViewDataSource.js
	function (__inner_require__, exports, module) {
		var ListViewDataSource = __inner_require__(39 /*Libraries/CustomComponents/ListView/ListViewDataSource.js*/);var SwipeableListViewDataSource = function () {

			function SwipeableListViewDataSource(params) {
				var _this = this;babelHelpers.classCallCheck(this, SwipeableListViewDataSource);
				this._dataSource = new ListViewDataSource({
					getRowData: params.getRowData,
					getSectionHeaderData: params.getSectionHeaderData,
					rowHasChanged: function rowHasChanged(row1, row2) {

						return row1.id !== _this._previousOpenRowID && row2.id === _this._openRowID || row1.id === _this._previousOpenRowID && row2.id !== _this._openRowID || params.rowHasChanged(row1, row2);
					},
					sectionHeaderHasChanged: params.sectionHeaderHasChanged });
			}babelHelpers.createClass(SwipeableListViewDataSource, [{ key: 'cloneWithRowsAndSections', value: function cloneWithRowsAndSections(dataBlob, sectionIdentities, rowIdentities) {
					this._dataSource = this._dataSource.cloneWithRowsAndSections(dataBlob, sectionIdentities, rowIdentities);

					this._dataBlob = dataBlob;
					this.rowIdentities = this._dataSource.rowIdentities;
					this.sectionIdentities = this._dataSource.sectionIdentities;

					return this;
				} }, { key: 'getDataSource', value: function getDataSource() {
					return this._dataSource;
				} }, { key: 'getOpenRowID', value: function getOpenRowID() {
					return this._openRowID;
				} }, { key: 'getFirstRowID', value: function getFirstRowID() {

					if (this.rowIdentities) {
						return this.rowIdentities[0] && this.rowIdentities[0][0];
					}
					return Object.keys(this._dataBlob)[0];
				} }, { key: 'setOpenRowID', value: function setOpenRowID(rowID) {
					this._previousOpenRowID = this._openRowID;
					this._openRowID = rowID;

					this._dataSource = this._dataSource.cloneWithRowsAndSections(this._dataBlob, this.sectionIdentities, this.rowIdentities);

					return this;
				} }]);return SwipeableListViewDataSource;
		}();

		module.exports = SwipeableListViewDataSource;
	}, // Libraries/Experimental/SwipeableRow/SwipeableRow.js
	function (__inner_require__, exports, module) {
		var Animated = __inner_require__(12 /*Libraries/Animated/src/Animated.js*/);
		var PanResponder = __inner_require__(59 /*Libraries/Interaction/PanResponder.js*/);
		var I18nManager = __inner_require__(45 /*Libraries/ReactNative/I18nManager.js*/);
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var StyleSheet = require('react-native@0.37/Libraries/StyleSheet/StyleSheet.js');
		var TimerMixin = require('react-timer-mixin@0.13/TimerMixin.js');
		var View = require('react-native@0.37/Libraries/Components/View/View.js');var PropTypes = React.PropTypes;

		var emptyFunction = require('fbjs@0.8/lib/emptyFunction.js');

		var IS_RTL = I18nManager.isRTL;

		var CLOSED_LEFT_POSITION = 0;

		var HORIZONTAL_SWIPE_DISTANCE_THRESHOLD = 10;

		var HORIZONTAL_FULL_SWIPE_SPEED_THRESHOLD = 0.3;

		var SLOW_SPEED_SWIPE_FACTOR = 4;

		var SWIPE_DURATION = 300;

		var ON_MOUNT_BOUNCE_DELAY = 700;
		var ON_MOUNT_BOUNCE_DURATION = 400;

		var RIGHT_SWIPE_BOUNCE_BACK_DISTANCE = 30;
		var RIGHT_SWIPE_BOUNCE_BACK_DURATION = 300;

		var RIGHT_SWIPE_THRESHOLD = 30 * SLOW_SPEED_SWIPE_FACTOR;

		var SwipeableRow = React.createClass({ displayName: 'SwipeableRow',
			_panResponder: {},
			_previousLeft: CLOSED_LEFT_POSITION,

			mixins: [TimerMixin],

			propTypes: {
				children: PropTypes.any,
				isOpen: PropTypes.bool,
				maxSwipeDistance: PropTypes.number.isRequired,
				onOpen: PropTypes.func.isRequired,
				onSwipeEnd: PropTypes.func.isRequired,
				onSwipeStart: PropTypes.func.isRequired,

				shouldBounceOnMount: PropTypes.bool,

				slideoutView: PropTypes.node.isRequired,

				swipeThreshold: PropTypes.number.isRequired },

			getInitialState: function getInitialState() {
				return {
					currentLeft: new Animated.Value(this._previousLeft),

					isSwipeableViewRendered: false,
					rowHeight: null };
			},

			getDefaultProps: function getDefaultProps() {
				return {
					isOpen: false,
					maxSwipeDistance: 0,
					onOpen: emptyFunction,
					onSwipeEnd: emptyFunction,
					onSwipeStart: emptyFunction,
					swipeThreshold: 30 };
			},

			componentWillMount: function componentWillMount() {
				this._panResponder = PanResponder.create({
					onMoveShouldSetPanResponderCapture: this._handleMoveShouldSetPanResponderCapture,
					onPanResponderGrant: this._handlePanResponderGrant,
					onPanResponderMove: this._handlePanResponderMove,
					onPanResponderRelease: this._handlePanResponderEnd,
					onPanResponderTerminationRequest: this._onPanResponderTerminationRequest,
					onPanResponderTerminate: this._handlePanResponderEnd });
			},

			componentDidMount: function componentDidMount() {
				var _this = this;
				if (this.props.shouldBounceOnMount) {

					this.setTimeout(function () {
						_this._animateBounceBack(ON_MOUNT_BOUNCE_DURATION);
					}, ON_MOUNT_BOUNCE_DELAY);
				}
			},

			componentWillReceiveProps: function componentWillReceiveProps(nextProps) {

				if (this.props.isOpen && !nextProps.isOpen) {
					this._animateToClosedPosition();
				}
			},

			shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
				if (this.props.shouldBounceOnMount && !nextProps.shouldBounceOnMount) {

					return false;
				}

				return true;
			},

			render: function render() {

				var slideOutView = void 0;
				if (this.state.isSwipeableViewRendered) {
					slideOutView = React.createElement(View, { style: [styles.slideOutContainer, { height: this.state.rowHeight }] }, this.props.slideoutView);
				}

				var swipeableView = React.createElement(Animated.View, {
					onLayout: this._onSwipeableViewLayout,
					style: [styles.swipeableContainer, {
						transform: [{ translateX: this.state.currentLeft }] }] }, this.props.children);

				return React.createElement(View, this._panResponder.panHandlers, slideOutView, swipeableView);
			},

			_onSwipeableViewLayout: function _onSwipeableViewLayout(event) {
				this.setState({
					isSwipeableViewRendered: true,
					rowHeight: event.nativeEvent.layout.height });
			},

			_handleMoveShouldSetPanResponderCapture: function _handleMoveShouldSetPanResponderCapture(event, gestureState) {

				return gestureState.dy < 10 && this._isValidSwipe(gestureState);
			},

			_handlePanResponderGrant: function _handlePanResponderGrant(event, gestureState) {},

			_handlePanResponderMove: function _handlePanResponderMove(event, gestureState) {
				if (this._isSwipingExcessivelyRightFromClosedPosition(gestureState)) {
					return;
				}

				this.props.onSwipeStart();

				if (this._isSwipingRightFromClosed(gestureState)) {
					this._swipeSlowSpeed(gestureState);
				} else {
					this._swipeFullSpeed(gestureState);
				}
			},

			_isSwipingRightFromClosed: function _isSwipingRightFromClosed(gestureState) {
				var gestureStateDx = IS_RTL ? -gestureState.dx : gestureState.dx;
				return this._previousLeft === CLOSED_LEFT_POSITION && gestureStateDx > 0;
			},

			_swipeFullSpeed: function _swipeFullSpeed(gestureState) {
				this.state.currentLeft.setValue(this._previousLeft + gestureState.dx);
			},

			_swipeSlowSpeed: function _swipeSlowSpeed(gestureState) {
				this.state.currentLeft.setValue(this._previousLeft + gestureState.dx / SLOW_SPEED_SWIPE_FACTOR);
			},

			_isSwipingExcessivelyRightFromClosedPosition: function _isSwipingExcessivelyRightFromClosedPosition(gestureState) {

				var gestureStateDx = IS_RTL ? -gestureState.dx : gestureState.dx;
				return this._isSwipingRightFromClosed(gestureState) && gestureStateDx > RIGHT_SWIPE_THRESHOLD;
			},

			_onPanResponderTerminationRequest: function _onPanResponderTerminationRequest(event, gestureState) {
				return false;
			},

			_animateTo: function _animateTo(toValue) {
				var _this2 = this;var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SWIPE_DURATION;var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : emptyFunction;
				Animated.timing(this.state.currentLeft, {
					duration: duration,
					toValue: toValue }).start(function () {
					_this2._previousLeft = toValue;
					callback();
				});
			},

			_animateToOpenPosition: function _animateToOpenPosition() {
				var maxSwipeDistance = IS_RTL ? -this.props.maxSwipeDistance : this.props.maxSwipeDistance;
				this._animateTo(-maxSwipeDistance);
			},

			_animateToOpenPositionWith: function _animateToOpenPositionWith(speed, distMoved) {

				speed = speed > HORIZONTAL_FULL_SWIPE_SPEED_THRESHOLD ? speed : HORIZONTAL_FULL_SWIPE_SPEED_THRESHOLD;

				var duration = Math.abs((this.props.maxSwipeDistance - Math.abs(distMoved)) / speed);
				var maxSwipeDistance = IS_RTL ? -this.props.maxSwipeDistance : this.props.maxSwipeDistance;
				this._animateTo(-maxSwipeDistance, duration);
			},

			_animateToClosedPosition: function _animateToClosedPosition() {
				var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SWIPE_DURATION;
				this._animateTo(CLOSED_LEFT_POSITION, duration);
			},

			_animateToClosedPositionDuringBounce: function _animateToClosedPositionDuringBounce() {
				this._animateToClosedPosition(RIGHT_SWIPE_BOUNCE_BACK_DURATION);
			},

			_animateBounceBack: function _animateBounceBack(duration) {

				var swipeBounceBackDistance = IS_RTL ? -RIGHT_SWIPE_BOUNCE_BACK_DISTANCE : RIGHT_SWIPE_BOUNCE_BACK_DISTANCE;
				this._animateTo(-swipeBounceBackDistance, duration, this._animateToClosedPositionDuringBounce);
			},

			_isValidSwipe: function _isValidSwipe(gestureState) {
				return Math.abs(gestureState.dx) > HORIZONTAL_SWIPE_DISTANCE_THRESHOLD;
			},

			_shouldAnimateRemainder: function _shouldAnimateRemainder(gestureState) {

				return Math.abs(gestureState.dx) > this.props.swipeThreshold || gestureState.vx > HORIZONTAL_FULL_SWIPE_SPEED_THRESHOLD;
			},

			_handlePanResponderEnd: function _handlePanResponderEnd(event, gestureState) {
				var horizontalDistance = IS_RTL ? -gestureState.dx : gestureState.dx;
				if (this._isSwipingRightFromClosed(gestureState)) {
					this.props.onOpen();
					this._animateBounceBack(RIGHT_SWIPE_BOUNCE_BACK_DURATION);
				} else if (this._shouldAnimateRemainder(gestureState)) {
					if (horizontalDistance < 0) {

						this.props.onOpen();
						this._animateToOpenPositionWith(gestureState.vx, horizontalDistance);
					} else {

						this._animateToClosedPosition();
					}
				} else {
					if (this._previousLeft === CLOSED_LEFT_POSITION) {
						this._animateToClosedPosition();
					} else {
						this._animateToOpenPosition();
					}
				}

				this.props.onSwipeEnd();
			} });

		var styles = StyleSheet.create({
			slideOutContainer: {
				bottom: 0,
				left: 0,
				position: 'absolute',
				right: 0,
				top: 0 },

			swipeableContainer: {
				flex: 1 } });

		module.exports = SwipeableRow;
	}, // Libraries/Components/TabBarIOS/TabBarIOS.ios.js
	function (__inner_require__, exports, module) {
		var ColorPropType = require('react-native@0.37/Libraries/StyleSheet/ColorPropType.js');
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var StyleSheet = require('react-native@0.37/Libraries/StyleSheet/StyleSheet.js');
		var TabBarItemIOS = __inner_require__(79 /*Libraries/Components/TabBarIOS/TabBarItemIOS.ios.js*/);
		var View = require('react-native@0.37/Libraries/Components/View/View.js');

		var requireNativeComponent = require('react-native@0.37/Libraries/ReactNative/requireNativeComponent.js');var TabBarIOS = function (_React$Component) {
			babelHelpers.inherits(TabBarIOS, _React$Component);function TabBarIOS() {
				babelHelpers.classCallCheck(this, TabBarIOS);return babelHelpers.possibleConstructorReturn(this, (TabBarIOS.__proto__ || Object.getPrototypeOf(TabBarIOS)).apply(this, arguments));
			}babelHelpers.createClass(TabBarIOS, [{ key: 'render', value: function render() {
					return React.createElement(RCTTabBar, {
						style: [styles.tabGroup, this.props.style],
						unselectedTintColor: this.props.unselectedTintColor,
						tintColor: this.props.tintColor,
						barTintColor: this.props.barTintColor,
						itemPositioning: this.props.itemPositioning,
						translucent: this.props.translucent !== false }, this.props.children);
				} }]);return TabBarIOS;
		}(React.Component);TabBarIOS.Item = TabBarItemIOS;TabBarIOS.propTypes = babelHelpers.extends({}, View.propTypes, { style: View.propTypes.style, unselectedTintColor: ColorPropType, tintColor: ColorPropType, barTintColor: ColorPropType, translucent: React.PropTypes.bool, itemPositioning: React.PropTypes.oneOf(['fill', 'center', 'auto']) });

		var styles = StyleSheet.create({
			tabGroup: {
				flex: 1 } });

		var RCTTabBar = requireNativeComponent('RCTTabBar', TabBarIOS);

		module.exports = TabBarIOS;
	}, // Libraries/Components/TabBarIOS/TabBarItemIOS.ios.js
	function (__inner_require__, exports, module) {
		var Image = __inner_require__(22 /*Libraries/Image/Image.ios.js*/);
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var StaticContainer = __inner_require__(62 /*Libraries/Components/StaticContainer.js*/);
		var StyleSheet = require('react-native@0.37/Libraries/StyleSheet/StyleSheet.js');
		var View = require('react-native@0.37/Libraries/Components/View/View.js');

		var requireNativeComponent = require('react-native@0.37/Libraries/ReactNative/requireNativeComponent.js');var TabBarItemIOS = function (_React$Component) {
			babelHelpers.inherits(TabBarItemIOS, _React$Component);function TabBarItemIOS() {
				var _ref;var _temp, _this, _ret;babelHelpers.classCallCheck(this, TabBarItemIOS);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = TabBarItemIOS.__proto__ || Object.getPrototypeOf(TabBarItemIOS)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
					hasBeenSelected: false }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
			}babelHelpers.createClass(TabBarItemIOS, [{ key: 'componentWillMount', value: function componentWillMount() {
					if (this.props.selected) {
						this.setState({ hasBeenSelected: true });
					}
				} }, { key: 'componentWillReceiveProps', value: function componentWillReceiveProps(nextProps) {
					if (this.state.hasBeenSelected || nextProps.selected) {
						this.setState({ hasBeenSelected: true });
					}
				} }, { key: 'render', value: function render() {
					var _props = this.props,
					    style = _props.style,
					    children = _props.children,
					    props = babelHelpers.objectWithoutProperties(_props, ['style', 'children']);

					if (this.state.hasBeenSelected) {
						var tabContents = React.createElement(StaticContainer, { shouldUpdate: this.props.selected }, children);
					} else {
						var tabContents = React.createElement(View, null);
					}

					return React.createElement(RCTTabBarItem, babelHelpers.extends({}, props, {
						style: [styles.tab, style] }), tabContents);
				} }]);return TabBarItemIOS;
		}(React.Component);TabBarItemIOS.propTypes = babelHelpers.extends({}, View.propTypes, { badge: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]), systemIcon: React.PropTypes.oneOf(['bookmarks', 'contacts', 'downloads', 'favorites', 'featured', 'history', 'more', 'most-recent', 'most-viewed', 'recents', 'search', 'top-rated']), icon: Image.propTypes.source, selectedIcon: Image.propTypes.source, onPress: React.PropTypes.func, renderAsOriginal: React.PropTypes.bool, selected: React.PropTypes.bool, style: View.propTypes.style, title: React.PropTypes.string });

		var styles = StyleSheet.create({
			tab: {
				position: 'absolute',
				top: 0,
				right: 0,
				bottom: 0,
				left: 0 } });

		var RCTTabBarItem = requireNativeComponent('RCTTabBarItem', TabBarItemIOS);

		module.exports = TabBarItemIOS;
	}, // Libraries/Components/TextInput/TextInput.js
	function (__inner_require__, exports, module) {
		var ColorPropType = require('react-native@0.37/Libraries/StyleSheet/ColorPropType.js');
		var DocumentSelectionState = __inner_require__(81 /*Libraries/vendor/document/selection/DocumentSelectionState.js*/);
		var EventEmitter = require('react-native@0.37/Libraries/EventEmitter/EventEmitter.js');
		var NativeMethodsMixin = require('react@15.3/lib/NativeMethodsMixin.js');
		var Platform = require('react-native@0.37/Libraries/Utilities/Platform.ios.js');
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var ReactNative = __inner_require__(26 /*Libraries/react-native/ReactNative.js*/);
		var StyleSheet = require('react-native@0.37/Libraries/StyleSheet/StyleSheet.js');
		var Text = __inner_require__(5 /*Libraries/Text/Text.js*/);
		var TextInputState = require('react-native@0.37/Libraries/Components/TextInput/TextInputState.js');
		var TimerMixin = require('react-timer-mixin@0.13/TimerMixin.js');
		var TouchableWithoutFeedback = __inner_require__(30 /*Libraries/Components/Touchable/TouchableWithoutFeedback.js*/);
		var UIManager = require('react-native@0.37/Libraries/ReactNative/UIManager.js');
		var View = require('react-native@0.37/Libraries/Components/View/View.js');
		var warning = require('fbjs@0.8/lib/warning.js');

		var emptyFunction = require('fbjs@0.8/lib/emptyFunction.js');
		var invariant = require('fbjs@0.8/lib/invariant.js');
		var requireNativeComponent = require('react-native@0.37/Libraries/ReactNative/requireNativeComponent.js');

		var PropTypes = React.PropTypes;

		var onlyMultiline = {
			onTextInput: true,
			children: true };

		if (Platform.OS === 'android') {
			var AndroidTextInput = requireNativeComponent('AndroidTextInput', null);
		} else if (Platform.OS === 'ios') {
			var RCTTextView = requireNativeComponent('RCTTextView', null);
			var RCTTextField = requireNativeComponent('RCTTextField', null);
		}

		var DataDetectorTypes = ['phoneNumber', 'link', 'address', 'calendarEvent', 'none', 'all'];

		var TextInput = React.createClass({ displayName: 'TextInput',
			statics: {

				State: TextInputState },

			propTypes: babelHelpers.extends({}, View.propTypes, {

				autoCapitalize: PropTypes.oneOf(['none', 'sentences', 'words', 'characters']),

				autoCorrect: PropTypes.bool,

				autoFocus: PropTypes.bool,

				editable: PropTypes.bool,

				keyboardType: PropTypes.oneOf(['default', 'email-address', 'numeric', 'phone-pad', 'ascii-capable', 'numbers-and-punctuation', 'url', 'number-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search']),

				keyboardAppearance: PropTypes.oneOf(['default', 'light', 'dark']),

				returnKeyType: PropTypes.oneOf(['done', 'go', 'next', 'search', 'send', 'none', 'previous', 'default', 'emergency-call', 'google', 'join', 'route', 'yahoo']),

				returnKeyLabel: PropTypes.string,

				maxLength: PropTypes.number,

				numberOfLines: PropTypes.number,

				enablesReturnKeyAutomatically: PropTypes.bool,

				multiline: PropTypes.bool,

				onBlur: PropTypes.func,

				onFocus: PropTypes.func,

				onChange: PropTypes.func,

				onChangeText: PropTypes.func,

				onContentSizeChange: PropTypes.func,

				onEndEditing: PropTypes.func,

				onSelectionChange: PropTypes.func,

				onSubmitEditing: PropTypes.func,

				onKeyPress: PropTypes.func,

				onLayout: PropTypes.func,

				placeholder: PropTypes.node,

				placeholderTextColor: ColorPropType,

				secureTextEntry: PropTypes.bool,

				selectionColor: ColorPropType,

				selectionState: PropTypes.instanceOf(DocumentSelectionState),

				selection: PropTypes.shape({
					start: PropTypes.number.isRequired,
					end: PropTypes.number }),

				value: PropTypes.string,

				defaultValue: PropTypes.node,

				clearButtonMode: PropTypes.oneOf(['never', 'while-editing', 'unless-editing', 'always']),

				clearTextOnFocus: PropTypes.bool,

				selectTextOnFocus: PropTypes.bool,

				blurOnSubmit: PropTypes.bool,

				style: Text.propTypes.style,

				underlineColorAndroid: ColorPropType,

				inlineImageLeft: PropTypes.string,

				inlineImagePadding: PropTypes.number,

				dataDetectorTypes: PropTypes.oneOfType([PropTypes.oneOf(DataDetectorTypes), PropTypes.arrayOf(PropTypes.oneOf(DataDetectorTypes))]) }),

			mixins: [NativeMethodsMixin, TimerMixin],

			viewConfig: Platform.OS === 'ios' && RCTTextField ? RCTTextField.viewConfig : Platform.OS === 'android' && AndroidTextInput ? AndroidTextInput.viewConfig : {},

			isFocused: function isFocused() {
				return TextInputState.currentlyFocusedField() === ReactNative.findNodeHandle(this._inputRef);
			},

			contextTypes: {
				onFocusRequested: React.PropTypes.func,
				focusEmitter: React.PropTypes.instanceOf(EventEmitter) },

			_inputRef: undefined,
			_focusSubscription: undefined,
			_lastNativeText: undefined,
			_lastNativeSelection: undefined,

			componentDidMount: function componentDidMount() {
				var _this = this;
				this._lastNativeText = this.props.value;
				if (!this.context.focusEmitter) {
					if (this.props.autoFocus) {
						this.requestAnimationFrame(this.focus);
					}
					return;
				}
				this._focusSubscription = this.context.focusEmitter.addListener('focus', function (el) {
					if (_this === el) {
						_this.requestAnimationFrame(_this.focus);
					} else if (_this.isFocused()) {
						_this.blur();
					}
				});

				if (this.props.autoFocus) {
					this.context.onFocusRequested(this);
				}
			},

			componentWillUnmount: function componentWillUnmount() {
				this._focusSubscription && this._focusSubscription.remove();
				if (this.isFocused()) {
					this.blur();
				}
			},

			getChildContext: function getChildContext() {
				return { isInAParentText: true };
			},

			childContextTypes: {
				isInAParentText: React.PropTypes.bool },

			clear: function clear() {
				this.setNativeProps({ text: '' });
			},

			render: function render() {
				if (Platform.OS === 'ios') {
					return this._renderIOS();
				} else if (Platform.OS === 'android') {
					return this._renderAndroid();
				}
			},

			_getText: function _getText() {
				return typeof this.props.value === 'string' ? this.props.value : typeof this.props.defaultValue === 'string' ? this.props.defaultValue : '';
			},

			_setNativeRef: function _setNativeRef(ref) {
				this._inputRef = ref;
			},

			_renderIOS: function _renderIOS() {
				var textContainer;

				var props = babelHelpers.extends({}, this.props);
				props.style = [styles.input, this.props.style];

				if (props.selection && props.selection.end == null) {
					props.selection = { start: props.selection.start, end: props.selection.start };
				}

				if (!props.multiline) {
					textContainer = React.createElement(RCTTextField, babelHelpers.extends({
						ref: this._setNativeRef }, props, {
						onFocus: this._onFocus,
						onBlur: this._onBlur,
						onChange: this._onChange,
						onSelectionChange: this._onSelectionChange,
						onSelectionChangeShouldSetResponder: emptyFunction.thatReturnsTrue,
						text: this._getText() }));
				} else {
					var children = props.children;
					var childCount = 0;
					React.Children.forEach(children, function () {
						return ++childCount;
					});
					invariant(!(props.value && childCount), 'Cannot specify both value and children.');

					if (childCount >= 1) {
						children = React.createElement(Text, { style: props.style }, children);
					}
					if (props.inputView) {
						children = [children, props.inputView];
					}
					textContainer = React.createElement(RCTTextView, babelHelpers.extends({
						ref: this._setNativeRef }, props, {
						children: children,
						onFocus: this._onFocus,
						onBlur: this._onBlur,
						onChange: this._onChange,
						onContentSizeChange: this.props.onContentSizeChange,
						onSelectionChange: this._onSelectionChange,
						onTextInput: this._onTextInput,
						onSelectionChangeShouldSetResponder: emptyFunction.thatReturnsTrue,
						text: this._getText(),
						dataDetectorTypes: this.props.dataDetectorTypes }));
				}

				return React.createElement(TouchableWithoutFeedback, {
					onLayout: props.onLayout,
					onPress: this._onPress,
					rejectResponderTermination: true,
					accessible: props.accessible,
					accessibilityLabel: props.accessibilityLabel,
					accessibilityTraits: props.accessibilityTraits,
					testID: props.testID }, textContainer);
			},

			_renderAndroid: function _renderAndroid() {
				var props = babelHelpers.extends({}, this.props);
				props.style = [this.props.style];
				props.autoCapitalize = UIManager.AndroidTextInput.Constants.AutoCapitalizationType[this.props.autoCapitalize];
				var children = this.props.children;
				var childCount = 0;
				React.Children.forEach(children, function () {
					return ++childCount;
				});
				invariant(!(this.props.value && childCount), 'Cannot specify both value and children.');

				if (childCount > 1) {
					children = React.createElement(Text, null, children);
				}

				if (props.selection && props.selection.end == null) {
					props.selection = { start: props.selection.start, end: props.selection.start };
				}

				var textContainer = React.createElement(AndroidTextInput, babelHelpers.extends({
					ref: this._setNativeRef }, props, {
					mostRecentEventCount: 0,
					onFocus: this._onFocus,
					onBlur: this._onBlur,
					onChange: this._onChange,
					onSelectionChange: this._onSelectionChange,
					onTextInput: this._onTextInput,
					text: this._getText(),
					children: children }));

				return React.createElement(TouchableWithoutFeedback, {
					onLayout: this.props.onLayout,
					onPress: this._onPress,
					accessible: this.props.accessible,
					accessibilityLabel: this.props.accessibilityLabel,
					accessibilityComponentType: this.props.accessibilityComponentType,
					testID: this.props.testID }, textContainer);
			},

			_onFocus: function _onFocus(event) {
				if (this.props.onFocus) {
					this.props.onFocus(event);
				}

				if (this.props.selectionState) {
					this.props.selectionState.focus();
				}
			},

			_onPress: function _onPress(event) {
				if (this.props.editable || this.props.editable === undefined) {
					this.focus();
				}
			},

			_onChange: function _onChange(event) {

				this._inputRef.setNativeProps({
					mostRecentEventCount: event.nativeEvent.eventCount });

				var text = event.nativeEvent.text;
				this.props.onChange && this.props.onChange(event);
				this.props.onChangeText && this.props.onChangeText(text);

				if (!this._inputRef) {

					return;
				}

				this._lastNativeText = text;
				this.forceUpdate();
			},

			_onSelectionChange: function _onSelectionChange(event) {
				this.props.onSelectionChange && this.props.onSelectionChange(event);

				if (!this._inputRef) {

					return;
				}

				this._lastNativeSelection = event.nativeEvent.selection;

				if (this.props.selection || this.props.selectionState) {
					this.forceUpdate();
				}
			},

			componentDidUpdate: function componentDidUpdate() {

				var nativeProps = {};

				if (this._lastNativeText !== this.props.value && typeof this.props.value === 'string') {
					nativeProps.text = this.props.value;
				}var selection = this.props.selection;
				if (this._lastNativeSelection && selection && (this._lastNativeSelection.start !== selection.start || this._lastNativeSelection.end !== selection.end)) {
					nativeProps.selection = this.props.selection;
				}

				if (Object.keys(nativeProps).length > 0) {
					this._inputRef.setNativeProps(nativeProps);
				}

				if (this.props.selectionState && selection) {
					this.props.selectionState.update(selection.start, selection.end);
				}
			},

			_onBlur: function _onBlur(event) {
				this.blur();
				if (this.props.onBlur) {
					this.props.onBlur(event);
				}

				if (this.props.selectionState) {
					this.props.selectionState.blur();
				}
			},

			_onTextInput: function _onTextInput(event) {
				this.props.onTextInput && this.props.onTextInput(event);
			} });

		var styles = StyleSheet.create({
			input: {
				alignSelf: 'stretch' } });

		module.exports = TextInput;
	}, // Libraries/vendor/document/selection/DocumentSelectionState.js
	function (__inner_require__, exports, module) {
		var mixInEventEmitter = __inner_require__(82 /*Libraries/EventEmitter/mixInEventEmitter.js*/);var DocumentSelectionState = function () {

			function DocumentSelectionState(anchor, focus) {
				babelHelpers.classCallCheck(this, DocumentSelectionState);
				this._anchorOffset = anchor;
				this._focusOffset = focus;
				this._hasFocus = false;
			}babelHelpers.createClass(DocumentSelectionState, [{ key: 'update', value: function update(anchor, focus) {
					if (this._anchorOffset !== anchor || this._focusOffset !== focus) {
						this._anchorOffset = anchor;
						this._focusOffset = focus;
						this.emit('update');
					}
				} }, { key: 'constrainLength', value: function constrainLength(maxLength) {
					this.update(Math.min(this._anchorOffset, maxLength), Math.min(this._focusOffset, maxLength));
				} }, { key: 'focus', value: function focus() {
					if (!this._hasFocus) {
						this._hasFocus = true;
						this.emit('focus');
					}
				} }, { key: 'blur', value: function blur() {
					if (this._hasFocus) {
						this._hasFocus = false;
						this.emit('blur');
					}
				} }, { key: 'hasFocus', value: function hasFocus() {
					return this._hasFocus;
				} }, { key: 'isCollapsed', value: function isCollapsed() {
					return this._anchorOffset === this._focusOffset;
				} }, { key: 'isBackward', value: function isBackward() {
					return this._anchorOffset > this._focusOffset;
				} }, { key: 'getAnchorOffset', value: function getAnchorOffset() {
					return this._hasFocus ? this._anchorOffset : null;
				} }, { key: 'getFocusOffset', value: function getFocusOffset() {
					return this._hasFocus ? this._focusOffset : null;
				} }, { key: 'getStartOffset', value: function getStartOffset() {
					return this._hasFocus ? Math.min(this._anchorOffset, this._focusOffset) : null;
				} }, { key: 'getEndOffset', value: function getEndOffset() {
					return this._hasFocus ? Math.max(this._anchorOffset, this._focusOffset) : null;
				} }, { key: 'overlaps', value: function overlaps(start, end) {
					return this.hasFocus() && this.getStartOffset() <= end && start <= this.getEndOffset();
				} }]);return DocumentSelectionState;
		}();

		mixInEventEmitter(DocumentSelectionState, {
			'blur': true,
			'focus': true,
			'update': true });

		module.exports = DocumentSelectionState;
	}, // Libraries/EventEmitter/mixInEventEmitter.js
	function (__inner_require__, exports, module) {
		var EventEmitter = require('react-native@0.37/Libraries/EventEmitter/EventEmitter.js');
		var EventEmitterWithHolding = __inner_require__(83 /*Libraries/EventEmitter/EventEmitterWithHolding.js*/);
		var EventHolder = __inner_require__(84 /*Libraries/EventEmitter/EventHolder.js*/);
		var EventValidator = __inner_require__(85 /*Libraries/EventEmitter/EventValidator.js*/);

		var copyProperties = __inner_require__(86 /*Libraries/vendor/core/copyProperties.js*/);
		var invariant = require('fbjs@0.8/lib/invariant.js');
		var keyOf = require('fbjs@0.8/lib/keyOf.js');

		var TYPES_KEY = keyOf({ __types: true });

		function mixInEventEmitter(cls, types) {
			invariant(types, 'Must supply set of valid event types');

			var target = cls.prototype || cls;

			invariant(!target.__eventEmitter, 'An active emitter is already mixed in');

			var ctor = cls.constructor;
			if (ctor) {
				invariant(ctor === Object || ctor === Function, 'Mix EventEmitter into a class, not an instance');
			}

			if (target.hasOwnProperty(TYPES_KEY)) {
				copyProperties(target.__types, types);
			} else if (target.__types) {
				target.__types = copyProperties({}, target.__types, types);
			} else {
				target.__types = types;
			}
			copyProperties(target, EventEmitterMixin);
		}

		var EventEmitterMixin = {
			emit: function emit(eventType, a, b, c, d, e, _) {
				return this.__getEventEmitter().emit(eventType, a, b, c, d, e, _);
			},

			emitAndHold: function emitAndHold(eventType, a, b, c, d, e, _) {
				return this.__getEventEmitter().emitAndHold(eventType, a, b, c, d, e, _);
			},

			addListener: function addListener(eventType, listener, context) {
				return this.__getEventEmitter().addListener(eventType, listener, context);
			},

			once: function once(eventType, listener, context) {
				return this.__getEventEmitter().once(eventType, listener, context);
			},

			addRetroactiveListener: function addRetroactiveListener(eventType, listener, context) {
				return this.__getEventEmitter().addRetroactiveListener(eventType, listener, context);
			},

			addListenerMap: function addListenerMap(listenerMap, context) {
				return this.__getEventEmitter().addListenerMap(listenerMap, context);
			},

			addRetroactiveListenerMap: function addRetroactiveListenerMap(listenerMap, context) {
				return this.__getEventEmitter().addListenerMap(listenerMap, context);
			},

			removeAllListeners: function removeAllListeners() {
				this.__getEventEmitter().removeAllListeners();
			},

			removeCurrentListener: function removeCurrentListener() {
				this.__getEventEmitter().removeCurrentListener();
			},

			releaseHeldEventType: function releaseHeldEventType(eventType) {
				this.__getEventEmitter().releaseHeldEventType(eventType);
			},

			__getEventEmitter: function __getEventEmitter() {
				if (!this.__eventEmitter) {
					var emitter = new EventEmitter();
					emitter = EventValidator.addValidation(emitter, this.__types);

					var holder = new EventHolder();
					this.__eventEmitter = new EventEmitterWithHolding(emitter, holder);
				}
				return this.__eventEmitter;
			} };

		module.exports = mixInEventEmitter;
	}, // Libraries/EventEmitter/EventEmitterWithHolding.js
	function (__inner_require__, exports, module) {
		var EventEmitterWithHolding = function () {

			function EventEmitterWithHolding(emitter, holder) {
				babelHelpers.classCallCheck(this, EventEmitterWithHolding);
				this._emitter = emitter;
				this._eventHolder = holder;
				this._currentEventToken = null;
				this._emittingHeldEvents = false;
			}babelHelpers.createClass(EventEmitterWithHolding, [{ key: 'addListener', value: function addListener(eventType, listener, context) {
					return this._emitter.addListener(eventType, listener, context);
				} }, { key: 'once', value: function once(eventType, listener, context) {
					return this._emitter.once(eventType, listener, context);
				} }, { key: 'addRetroactiveListener', value: function addRetroactiveListener(eventType, listener, context) {
					var subscription = this._emitter.addListener(eventType, listener, context);

					this._emittingHeldEvents = true;
					this._eventHolder.emitToListener(eventType, listener, context);
					this._emittingHeldEvents = false;

					return subscription;
				} }, { key: 'removeAllListeners', value: function removeAllListeners(eventType) {
					this._emitter.removeAllListeners(eventType);
				} }, { key: 'removeCurrentListener', value: function removeCurrentListener() {
					this._emitter.removeCurrentListener();
				} }, { key: 'listeners', value: function listeners(eventType) {
					return this._emitter.listeners(eventType);
				} }, { key: 'emit', value: function emit(eventType) {
					var _emitter;for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
						args[_key - 1] = arguments[_key];
					}
					(_emitter = this._emitter).emit.apply(_emitter, [eventType].concat(babelHelpers.toConsumableArray(args)));
				} }, { key: 'emitAndHold', value: function emitAndHold(eventType) {
					var _eventHolder, _emitter2;for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
						args[_key2 - 1] = arguments[_key2];
					}
					this._currentEventToken = (_eventHolder = this._eventHolder).holdEvent.apply(_eventHolder, [eventType].concat(babelHelpers.toConsumableArray(args)));
					(_emitter2 = this._emitter).emit.apply(_emitter2, [eventType].concat(babelHelpers.toConsumableArray(args)));
					this._currentEventToken = null;
				} }, { key: 'releaseCurrentEvent', value: function releaseCurrentEvent() {
					if (this._currentEventToken) {
						this._eventHolder.releaseEvent(this._currentEventToken);
					} else if (this._emittingHeldEvents) {
						this._eventHolder.releaseCurrentEvent();
					}
				} }, { key: 'releaseHeldEventType', value: function releaseHeldEventType(eventType) {
					this._eventHolder.releaseEventType(eventType);
				} }]);return EventEmitterWithHolding;
		}();

		module.exports = EventEmitterWithHolding;
	}, // Libraries/EventEmitter/EventHolder.js
	function (__inner_require__, exports, module) {
		var invariant = require('fbjs@0.8/lib/invariant.js');var EventHolder = function () {

			function EventHolder() {
				babelHelpers.classCallCheck(this, EventHolder);
				this._heldEvents = {};
				this._currentEventKey = null;
			}babelHelpers.createClass(EventHolder, [{ key: 'holdEvent', value: function holdEvent(eventType) {
					this._heldEvents[eventType] = this._heldEvents[eventType] || [];
					var eventsOfType = this._heldEvents[eventType];
					var key = {
						eventType: eventType,
						index: eventsOfType.length };for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
						args[_key - 1] = arguments[_key];
					}

					eventsOfType.push(args);
					return key;
				} }, { key: 'emitToListener', value: function emitToListener(eventType, listener, context) {
					var _this = this;
					var eventsOfType = this._heldEvents[eventType];
					if (!eventsOfType) {
						return;
					}
					var origEventKey = this._currentEventKey;
					eventsOfType.forEach(function (eventHeld, index) {
						if (!eventHeld) {
							return;
						}
						_this._currentEventKey = {
							eventType: eventType,
							index: index };

						listener.apply(context, eventHeld);
					});
					this._currentEventKey = origEventKey;
				} }, { key: 'releaseCurrentEvent', value: function releaseCurrentEvent() {
					invariant(this._currentEventKey !== null, 'Not in an emitting cycle; there is no current event');

					this._currentEventKey && this.releaseEvent(this._currentEventKey);
				} }, { key: 'releaseEvent', value: function releaseEvent(token) {
					delete this._heldEvents[token.eventType][token.index];
				} }, { key: 'releaseEventType', value: function releaseEventType(type) {
					this._heldEvents[type] = [];
				} }]);return EventHolder;
		}();

		module.exports = EventHolder;
	}, // Libraries/EventEmitter/EventValidator.js
	function (__inner_require__, exports, module) {
		var copyProperties = __inner_require__(86 /*Libraries/vendor/core/copyProperties.js*/);

		var EventValidator = {

			addValidation: function addValidation(emitter, types) {
				var eventTypes = Object.keys(types);
				var emitterWithValidation = Object.create(emitter);

				copyProperties(emitterWithValidation, {
					emit: function emit(type, a, b, c, d, e, _) {
						assertAllowsEventType(type, eventTypes);
						return emitter.emit.call(this, type, a, b, c, d, e, _);
					} });

				return emitterWithValidation;
			} };

		function assertAllowsEventType(type, allowedTypes) {
			if (allowedTypes.indexOf(type) === -1) {
				throw new TypeError(errorMessageFor(type, allowedTypes));
			}
		}

		function errorMessageFor(type, allowedTypes) {
			var message = 'Unknown event type "' + type + '". ';

			message += 'Known event types: ' + allowedTypes.join(', ') + '.';
			return message;
		}

		module.exports = EventValidator;
	}, // Libraries/vendor/core/copyProperties.js
	function (__inner_require__, exports, module) {
		function copyProperties(obj, a, b, c, d, e, f) {
			obj = obj || {};

			var args = [a, b, c, d, e];
			var ii = 0,
			    v;
			while (args[ii]) {
				v = args[ii++];
				for (var k in v) {
					obj[k] = v[k];
				}

				if (v.hasOwnProperty && v.hasOwnProperty('toString') && typeof v.toString != 'undefined' && obj.toString !== v.toString) {
					obj.toString = v.toString;
				}
			}

			return obj;
		}

		module.exports = copyProperties;
	}, // Libraries/Components/ToastAndroid/ToastAndroid.ios.js
	function (__inner_require__, exports, module) {
		var warning = require('fbjs@0.8/lib/warning.js');

		var ToastAndroid = {

			show: function show(message, duration) {
				warning(false, 'ToastAndroid is not supported on this platform.');
			} };

		module.exports = ToastAndroid;
	}, // Libraries/Components/ToolbarAndroid/ToolbarAndroid.ios.js
	function (__inner_require__, exports, module) {
		module.exports = require('react-native@0.37/Libraries/Components/UnimplementedViews/UnimplementedView.js');
	}, // Libraries/Components/Touchable/TouchableHighlight.js
	function (__inner_require__, exports, module) {
		var ColorPropType = require('react-native@0.37/Libraries/StyleSheet/ColorPropType.js');
		var NativeMethodsMixin = require('react@15.3/lib/NativeMethodsMixin.js');
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var ReactNativeViewAttributes = require('react-native@0.37/Libraries/Components/View/ReactNativeViewAttributes.js');
		var StyleSheet = require('react-native@0.37/Libraries/StyleSheet/StyleSheet.js');
		var TimerMixin = require('react-timer-mixin@0.13/TimerMixin.js');
		var Touchable = __inner_require__(6 /*Libraries/Components/Touchable/Touchable.js*/);
		var TouchableWithoutFeedback = __inner_require__(30 /*Libraries/Components/Touchable/TouchableWithoutFeedback.js*/);
		var View = require('react-native@0.37/Libraries/Components/View/View.js');

		var ensureComponentIsNative = __inner_require__(90 /*Libraries/Components/Touchable/ensureComponentIsNative.js*/);
		var ensurePositiveDelayProps = __inner_require__(31 /*Libraries/Components/Touchable/ensurePositiveDelayProps.js*/);
		var keyOf = require('fbjs@0.8/lib/keyOf.js');
		var merge = require('react-native@0.37/Libraries/vendor/core/merge.js');

		var DEFAULT_PROPS = {
			activeOpacity: 0.85,
			underlayColor: 'black' };

		var PRESS_RETENTION_OFFSET = { top: 20, left: 20, right: 20, bottom: 30 };

		var TouchableHighlight = React.createClass({ displayName: 'TouchableHighlight',
			propTypes: babelHelpers.extends({}, TouchableWithoutFeedback.propTypes, {

				activeOpacity: React.PropTypes.number,

				underlayColor: ColorPropType,
				style: View.propTypes.style,

				onShowUnderlay: React.PropTypes.func,

				onHideUnderlay: React.PropTypes.func }),

			mixins: [NativeMethodsMixin, TimerMixin, Touchable.Mixin],

			getDefaultProps: function getDefaultProps() {
				return DEFAULT_PROPS;
			},

			_computeSyntheticState: function _computeSyntheticState(props) {
				return {
					activeProps: {
						style: {
							opacity: props.activeOpacity } },

					activeUnderlayProps: {
						style: {
							backgroundColor: props.underlayColor } },

					underlayStyle: [INACTIVE_UNDERLAY_PROPS.style, props.style] };
			},

			getInitialState: function getInitialState() {
				return merge(this.touchableGetInitialState(), this._computeSyntheticState(this.props));
			},

			componentDidMount: function componentDidMount() {
				ensurePositiveDelayProps(this.props);
				ensureComponentIsNative(this.refs[CHILD_REF]);
			},

			componentDidUpdate: function componentDidUpdate() {
				ensureComponentIsNative(this.refs[CHILD_REF]);
			},

			componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
				ensurePositiveDelayProps(nextProps);
				if (nextProps.activeOpacity !== this.props.activeOpacity || nextProps.underlayColor !== this.props.underlayColor || nextProps.style !== this.props.style) {
					this.setState(this._computeSyntheticState(nextProps));
				}
			},

			viewConfig: {
				uiViewClassName: 'RCTView',
				validAttributes: ReactNativeViewAttributes.RCTView },

			touchableHandleActivePressIn: function touchableHandleActivePressIn(e) {
				this.clearTimeout(this._hideTimeout);
				this._hideTimeout = null;
				this._showUnderlay();
				this.props.onPressIn && this.props.onPressIn(e);
			},

			touchableHandleActivePressOut: function touchableHandleActivePressOut(e) {
				if (!this._hideTimeout) {
					this._hideUnderlay();
				}
				this.props.onPressOut && this.props.onPressOut(e);
			},

			touchableHandlePress: function touchableHandlePress(e) {
				this.clearTimeout(this._hideTimeout);
				this._showUnderlay();
				this._hideTimeout = this.setTimeout(this._hideUnderlay, this.props.delayPressOut || 100);
				this.props.onPress && this.props.onPress(e);
			},

			touchableHandleLongPress: function touchableHandleLongPress(e) {
				this.props.onLongPress && this.props.onLongPress(e);
			},

			touchableGetPressRectOffset: function touchableGetPressRectOffset() {
				return this.props.pressRetentionOffset || PRESS_RETENTION_OFFSET;
			},

			touchableGetHitSlop: function touchableGetHitSlop() {
				return this.props.hitSlop;
			},

			touchableGetHighlightDelayMS: function touchableGetHighlightDelayMS() {
				return this.props.delayPressIn;
			},

			touchableGetLongPressDelayMS: function touchableGetLongPressDelayMS() {
				return this.props.delayLongPress;
			},

			touchableGetPressOutDelayMS: function touchableGetPressOutDelayMS() {
				return this.props.delayPressOut;
			},

			_showUnderlay: function _showUnderlay() {
				if (!this.isMounted() || !this._hasPressHandler()) {
					return;
				}

				this.refs[UNDERLAY_REF].setNativeProps(this.state.activeUnderlayProps);
				this.refs[CHILD_REF].setNativeProps(this.state.activeProps);
				this.props.onShowUnderlay && this.props.onShowUnderlay();
			},

			_hideUnderlay: function _hideUnderlay() {
				this.clearTimeout(this._hideTimeout);
				this._hideTimeout = null;
				if (this._hasPressHandler() && this.refs[UNDERLAY_REF]) {
					this.refs[CHILD_REF].setNativeProps(INACTIVE_CHILD_PROPS);
					this.refs[UNDERLAY_REF].setNativeProps(babelHelpers.extends({}, INACTIVE_UNDERLAY_PROPS, {
						style: this.state.underlayStyle }));

					this.props.onHideUnderlay && this.props.onHideUnderlay();
				}
			},

			_hasPressHandler: function _hasPressHandler() {
				return !!(this.props.onPress || this.props.onPressIn || this.props.onPressOut || this.props.onLongPress);
			},

			render: function render() {
				return React.createElement(View, {
					accessible: this.props.accessible !== false,
					accessibilityLabel: this.props.accessibilityLabel,
					accessibilityComponentType: this.props.accessibilityComponentType,
					accessibilityTraits: this.props.accessibilityTraits,
					ref: UNDERLAY_REF,
					style: this.state.underlayStyle,
					onLayout: this.props.onLayout,
					hitSlop: this.props.hitSlop,
					onStartShouldSetResponder: this.touchableHandleStartShouldSetResponder,
					onResponderTerminationRequest: this.touchableHandleResponderTerminationRequest,
					onResponderGrant: this.touchableHandleResponderGrant,
					onResponderMove: this.touchableHandleResponderMove,
					onResponderRelease: this.touchableHandleResponderRelease,
					onResponderTerminate: this.touchableHandleResponderTerminate,
					testID: this.props.testID }, React.cloneElement(React.Children.only(this.props.children), {
					ref: CHILD_REF }), Touchable.renderDebugView({ color: 'green', hitSlop: this.props.hitSlop }));
			} });

		var CHILD_REF = keyOf({ childRef: null });
		var UNDERLAY_REF = keyOf({ underlayRef: null });
		var INACTIVE_CHILD_PROPS = {
			style: StyleSheet.create({ x: { opacity: 1.0 } }).x };

		var INACTIVE_UNDERLAY_PROPS = {
			style: StyleSheet.create({ x: { backgroundColor: 'transparent' } }).x };

		module.exports = TouchableHighlight;
	}, // Libraries/Components/Touchable/ensureComponentIsNative.js
	function (__inner_require__, exports, module) {
		var invariant = require('fbjs@0.8/lib/invariant.js');

		var ensureComponentIsNative = function ensureComponentIsNative(component) {
			invariant(component && typeof component.setNativeProps === 'function', 'Touchable child must either be native or forward setNativeProps to a ' + 'native component');
		};

		module.exports = ensureComponentIsNative;
	}, // Libraries/Components/ViewPager/ViewPagerAndroid.ios.js
	function (__inner_require__, exports, module) {
		module.exports = require('react-native@0.37/Libraries/Components/UnimplementedViews/UnimplementedView.js');
	}, // Libraries/Components/WebView/WebView.ios.js
	function (__inner_require__, exports, module) {
		var ActivityIndicator = __inner_require__(1 /*Libraries/Components/ActivityIndicator/ActivityIndicator.js*/);
		var EdgeInsetsPropType = require('react-native@0.37/Libraries/StyleSheet/EdgeInsetsPropType.js');
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var ReactNative = __inner_require__(26 /*Libraries/react-native/ReactNative.js*/);
		var StyleSheet = require('react-native@0.37/Libraries/StyleSheet/StyleSheet.js');
		var Text = __inner_require__(5 /*Libraries/Text/Text.js*/);
		var UIManager = require('react-native@0.37/Libraries/ReactNative/UIManager.js');
		var View = require('react-native@0.37/Libraries/Components/View/View.js');
		var ScrollView = __inner_require__(24 /*Libraries/Components/ScrollView/ScrollView.js*/);

		var deprecatedPropType = require('react-native@0.37/Libraries/Utilities/deprecatedPropType.js');
		var invariant = require('fbjs@0.8/lib/invariant.js');
		var keyMirror = require('fbjs@0.8/lib/keyMirror.js');
		var processDecelerationRate = __inner_require__(29 /*Libraries/Components/ScrollView/processDecelerationRate.js*/);
		var requireNativeComponent = require('react-native@0.37/Libraries/ReactNative/requireNativeComponent.js');
		var resolveAssetSource = require('react-native@0.37/Libraries/Image/resolveAssetSource.js');

		var PropTypes = React.PropTypes;
		var RCTWebViewManager = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js').WebViewManager;

		var BGWASH = 'rgba(255,255,255,0.8)';
		var RCT_WEBVIEW_REF = 'webview';

		var WebViewState = keyMirror({
			IDLE: null,
			LOADING: null,
			ERROR: null });

		var NavigationType = keyMirror({
			click: true,
			formsubmit: true,
			backforward: true,
			reload: true,
			formresubmit: true,
			other: true });

		var JSNavigationScheme = 'react-js-navigation';

		var DataDetectorTypes = ['phoneNumber', 'link', 'address', 'calendarEvent', 'none', 'all'];

		var defaultRenderLoading = function defaultRenderLoading() {
			return React.createElement(View, { style: styles.loadingView }, React.createElement(ActivityIndicator, null));
		};

		var defaultRenderError = function defaultRenderError(errorDomain, errorCode, errorDesc) {
			return React.createElement(View, { style: styles.errorContainer }, React.createElement(Text, { style: styles.errorTextTitle }, 'Error loading page'), React.createElement(Text, { style: styles.errorText }, 'Domain: ' + errorDomain), React.createElement(Text, { style: styles.errorText }, 'Error Code: ' + errorCode), React.createElement(Text, { style: styles.errorText }, 'Description: ' + errorDesc));
		};var WebView = function (_React$Component) {
			babelHelpers.inherits(WebView, _React$Component);function WebView() {
				var _ref;var _temp, _this, _ret;babelHelpers.classCallCheck(this, WebView);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = WebView.__proto__ || Object.getPrototypeOf(WebView)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
					viewState: WebViewState.IDLE,
					lastErrorEvent: null,
					startInLoadingState: true }, _this.goForward = function () {
					UIManager.dispatchViewManagerCommand(_this.getWebViewHandle(), UIManager.RCTWebView.Commands.goForward, null);
				}, _this.goBack = function () {
					UIManager.dispatchViewManagerCommand(_this.getWebViewHandle(), UIManager.RCTWebView.Commands.goBack, null);
				}, _this.reload = function () {
					_this.setState({ viewState: WebViewState.LOADING });
					UIManager.dispatchViewManagerCommand(_this.getWebViewHandle(), UIManager.RCTWebView.Commands.reload, null);
				}, _this.stopLoading = function () {
					UIManager.dispatchViewManagerCommand(_this.getWebViewHandle(), UIManager.RCTWebView.Commands.stopLoading, null);
				}, _this.postMessage = function (data) {
					UIManager.dispatchViewManagerCommand(_this.getWebViewHandle(), UIManager.RCTWebView.Commands.postMessage, [String(data)]);
				}, _this._updateNavigationState = function (event) {
					if (_this.props.onNavigationStateChange) {
						_this.props.onNavigationStateChange(event.nativeEvent);
					}
				}, _this.getWebViewHandle = function () {
					return ReactNative.findNodeHandle(_this.refs[RCT_WEBVIEW_REF]);
				}, _this._onLoadingStart = function (event) {
					var onLoadStart = _this.props.onLoadStart;
					onLoadStart && onLoadStart(event);
					_this._updateNavigationState(event);
				}, _this._onLoadingError = function (event) {
					event.persist();var _this$props = _this.props,
					    onError = _this$props.onError,
					    onLoadEnd = _this$props.onLoadEnd;
					onError && onError(event);
					onLoadEnd && onLoadEnd(event);
					console.warn('Encountered an error loading page', event.nativeEvent);

					_this.setState({
						lastErrorEvent: event.nativeEvent,
						viewState: WebViewState.ERROR });
				}, _this._onLoadingFinish = function (event) {
					var _this$props2 = _this.props,
					    onLoad = _this$props2.onLoad,
					    onLoadEnd = _this$props2.onLoadEnd;
					onLoad && onLoad(event);
					onLoadEnd && onLoadEnd(event);
					_this.setState({
						viewState: WebViewState.IDLE });

					_this._updateNavigationState(event);
				}, _this._onMessage = function (event) {
					var onMessage = _this.props.onMessage;
					onMessage && onMessage(event);
				}, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
			}babelHelpers.createClass(WebView, [{ key: 'componentWillMount', value: function componentWillMount() {
					if (this.props.startInLoadingState) {
						this.setState({ viewState: WebViewState.LOADING });
					}
				} }, { key: 'render', value: function render() {
					var _this2 = this;var otherView = null;if (this.state.viewState === WebViewState.LOADING) {
						otherView = (this.props.renderLoading || defaultRenderLoading)();
					} else if (this.state.viewState === WebViewState.ERROR) {
						var errorEvent = this.state.lastErrorEvent;invariant(errorEvent != null, 'lastErrorEvent expected to be non-null');otherView = (this.props.renderError || defaultRenderError)(errorEvent.domain, errorEvent.code, errorEvent.description);
					} else if (this.state.viewState !== WebViewState.IDLE) {
						console.error('RCTWebView invalid state encountered: ' + this.state.loading);
					}var webViewStyles = [styles.container, styles.webView, this.props.style];if (this.state.viewState === WebViewState.LOADING || this.state.viewState === WebViewState.ERROR) {
						webViewStyles.push(styles.hidden);
					}var onShouldStartLoadWithRequest = this.props.onShouldStartLoadWithRequest && function (event) {
						var shouldStart = _this2.props.onShouldStartLoadWithRequest && _this2.props.onShouldStartLoadWithRequest(event.nativeEvent);RCTWebViewManager.startLoadWithResult(!!shouldStart, event.nativeEvent.lockIdentifier);
					};var decelerationRate = processDecelerationRate(this.props.decelerationRate);var source = this.props.source || {};if (this.props.html) {
						source.html = this.props.html;
					} else if (this.props.url) {
						source.uri = this.props.url;
					}var messagingEnabled = typeof this.props.onMessage === 'function';var webView = React.createElement(RCTWebView, { ref: RCT_WEBVIEW_REF, key: 'webViewKey', style: webViewStyles, source: resolveAssetSource(source), injectedJavaScript: this.props.injectedJavaScript, bounces: this.props.bounces, scrollEnabled: this.props.scrollEnabled, decelerationRate: decelerationRate, contentInset: this.props.contentInset, automaticallyAdjustContentInsets: this.props.automaticallyAdjustContentInsets, onLoadingStart: this._onLoadingStart, onLoadingFinish: this._onLoadingFinish, onLoadingError: this._onLoadingError, messagingEnabled: messagingEnabled, onMessage: this._onMessage, onShouldStartLoadWithRequest: onShouldStartLoadWithRequest, scalesPageToFit: this.props.scalesPageToFit, allowsInlineMediaPlayback: this.props.allowsInlineMediaPlayback, mediaPlaybackRequiresUserAction: this.props.mediaPlaybackRequiresUserAction, dataDetectorTypes: this.props.dataDetectorTypes });return React.createElement(View, { style: styles.container }, webView, otherView);
				} }]);return WebView;
		}(React.Component);WebView.JSNavigationScheme = JSNavigationScheme;WebView.NavigationType = NavigationType;WebView.propTypes = babelHelpers.extends({}, View.propTypes, { html: deprecatedPropType(PropTypes.string, 'Use the `source` prop instead.'), url: deprecatedPropType(PropTypes.string, 'Use the `source` prop instead.'), source: PropTypes.oneOfType([PropTypes.shape({ uri: PropTypes.string, method: PropTypes.string, headers: PropTypes.object, body: PropTypes.string }), PropTypes.shape({ html: PropTypes.string, baseUrl: PropTypes.string }), PropTypes.number]), renderError: PropTypes.func, renderLoading: PropTypes.func, onLoad: PropTypes.func, onLoadEnd: PropTypes.func, onLoadStart: PropTypes.func, onError: PropTypes.func, bounces: PropTypes.bool, decelerationRate: ScrollView.propTypes.decelerationRate, scrollEnabled: PropTypes.bool, automaticallyAdjustContentInsets: PropTypes.bool, contentInset: EdgeInsetsPropType, onNavigationStateChange: PropTypes.func, onMessage: PropTypes.func, startInLoadingState: PropTypes.bool, style: View.propTypes.style, dataDetectorTypes: PropTypes.oneOfType([PropTypes.oneOf(DataDetectorTypes), PropTypes.arrayOf(PropTypes.oneOf(DataDetectorTypes))]), javaScriptEnabled: PropTypes.bool, domStorageEnabled: PropTypes.bool, injectedJavaScript: PropTypes.string, userAgent: PropTypes.string, scalesPageToFit: PropTypes.bool, onShouldStartLoadWithRequest: PropTypes.func, allowsInlineMediaPlayback: PropTypes.bool, mediaPlaybackRequiresUserAction: PropTypes.bool });

		var RCTWebView = requireNativeComponent('RCTWebView', WebView, {
			nativeOnly: {
				onLoadingStart: true,
				onLoadingError: true,
				onLoadingFinish: true,
				onMessage: true,
				messagingEnabled: PropTypes.bool } });

		var styles = StyleSheet.create({
			container: {
				flex: 1 },

			errorContainer: {
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: BGWASH },

			errorText: {
				fontSize: 14,
				textAlign: 'center',
				marginBottom: 2 },

			errorTextTitle: {
				fontSize: 15,
				fontWeight: '500',
				marginBottom: 10 },

			hidden: {
				height: 0,
				flex: 0 },

			loadingView: {
				backgroundColor: BGWASH,
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				height: 100 },

			webView: {
				backgroundColor: '#ffffff' } });

		module.exports = WebView;
	}, // Libraries/ActionSheetIOS/ActionSheetIOS.js
	function (__inner_require__, exports, module) {
		var RCTActionSheetManager = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js').ActionSheetManager;

		var invariant = require('fbjs@0.8/lib/invariant.js');
		var processColor = require('react-native@0.37/Libraries/StyleSheet/processColor.js');

		var ActionSheetIOS = {

			showActionSheetWithOptions: function showActionSheetWithOptions(options, callback) {
				invariant(typeof options === 'object' && options !== null, 'Options must be a valid object');

				invariant(typeof callback === 'function', 'Must provide a valid callback');

				RCTActionSheetManager.showActionSheetWithOptions(babelHelpers.extends({}, options, { tintColor: processColor(options.tintColor) }), callback);
			},

			showShareActionSheetWithOptions: function showShareActionSheetWithOptions(options, failureCallback, successCallback) {
				invariant(typeof options === 'object' && options !== null, 'Options must be a valid object');

				invariant(typeof failureCallback === 'function', 'Must provide a valid failureCallback');

				invariant(typeof successCallback === 'function', 'Must provide a valid successCallback');

				RCTActionSheetManager.showShareActionSheetWithOptions(babelHelpers.extends({}, options, { tintColor: processColor(options.tintColor) }), failureCallback, successCallback);
			} };

		module.exports = ActionSheetIOS;
	}, // Libraries/AdSupport/AdSupportIOS.js
	function (__inner_require__, exports, module) {
		var AdSupport = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js').AdSupport;

		module.exports = {
			getAdvertisingId: function getAdvertisingId(onSuccess, onFailure) {
				AdSupport.getAdvertisingId(onSuccess, onFailure);
			},

			getAdvertisingTrackingEnabled: function getAdvertisingTrackingEnabled(onSuccess, onFailure) {
				AdSupport.getAdvertisingTrackingEnabled(onSuccess, onFailure);
			} };
	}, // Libraries/ReactNative/AppRegistry.js
	function (__inner_require__, exports, module) {
		var BatchedBridge = require('react-native@0.37/Libraries/BatchedBridge/BatchedBridge.js');
		var BugReporting = __inner_require__(96 /*Libraries/BugReporting/BugReporting.js*/);
		var ReactNative = __inner_require__(26 /*Libraries/react-native/ReactNative.js*/);

		var infoLog = __inner_require__(16 /*Libraries/Utilities/infoLog.js*/);
		var invariant = require('fbjs@0.8/lib/invariant.js');
		var renderApplication = __inner_require__(99 /*Libraries/ReactNative/renderApplication.js*/);var _require = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js'),
		    HeadlessJsTaskSupport = _require.HeadlessJsTaskSupport;

		var runnables = {};
		var runCount = 1;
		var tasks = new Map();

		var AppRegistry = {
			registerConfig: function registerConfig(config) {
				for (var i = 0; i < config.length; ++i) {
					var appConfig = config[i];
					if (appConfig.run) {
						AppRegistry.registerRunnable(appConfig.appKey, appConfig.run);
					} else {
						invariant(appConfig.component, 'No component provider passed in');
						AppRegistry.registerComponent(appConfig.appKey, appConfig.component);
					}
				}
			},

			registerComponent: function registerComponent(appKey, getComponentFunc) {
				runnables[appKey] = {
					run: function run(appParameters) {
						return renderApplication(getComponentFunc(), appParameters.initialProps, appParameters.rootTag);
					} };

				return appKey;
			},

			registerRunnable: function registerRunnable(appKey, func) {
				runnables[appKey] = { run: func };
				return appKey;
			},

			getAppKeys: function getAppKeys() {
				return Object.keys(runnables);
			},

			runApplication: function runApplication(appKey, appParameters) {
				var msg = 'Running application "' + appKey + '" with appParams: ' + JSON.stringify(appParameters) + '. ' + '__DEV__ === ' + String(__DEV__) + ', development-level warning are ' + 'OFF' + ', performance optimizations are ' + 'ON';
				infoLog(msg);
				BugReporting.addSource('AppRegistry.runApplication' + runCount++, function () {
					return msg;
				});
				invariant(runnables[appKey] && runnables[appKey].run, 'Application ' + appKey + ' has not been registered. This ' + 'is either due to a require() error during initialization ' + 'or failure to call AppRegistry.registerComponent.');

				runnables[appKey].run(appParameters);
			},

			unmountApplicationComponentAtRootTag: function unmountApplicationComponentAtRootTag(rootTag) {
				ReactNative.unmountComponentAtNodeAndRemoveContainer(rootTag);
			},

			registerHeadlessTask: function registerHeadlessTask(taskKey, task) {
				if (tasks.has(taskKey)) {
					console.warn('registerHeadlessTask called multiple times for same key \'' + taskKey + '\'');
				}
				tasks.set(taskKey, task);
			},

			startHeadlessTask: function startHeadlessTask(taskId, taskKey, data) {
				var taskProvider = tasks.get(taskKey);
				if (!taskProvider) {
					throw new Error('No task registered for key ' + taskKey);
				}
				taskProvider()(data).then(function () {
					return HeadlessJsTaskSupport.notifyTaskFinished(taskId);
				}).catch(function (reason) {
					console.error(reason);
					HeadlessJsTaskSupport.notifyTaskFinished(taskId);
				});
			} };

		BatchedBridge.registerCallableModule('AppRegistry', AppRegistry);

		module.exports = AppRegistry;
	}, // Libraries/BugReporting/BugReporting.js
	function (__inner_require__, exports, module) {
		var RCTDeviceEventEmitter = require('react-native@0.37/Libraries/EventEmitter/RCTDeviceEventEmitter.js');
		var Map = require('react-native@0.37/Libraries/vendor/core/Map.js');
		var infoLog = __inner_require__(16 /*Libraries/Utilities/infoLog.js*/);

		function defaultExtras() {
			BugReporting.addFileSource('react_hierarchy.txt', function () {
				return __inner_require__(97 /*Libraries/BugReporting/dumpReactTree.js*/)();
			});
		}var BugReporting = function () {
			function BugReporting() {
				babelHelpers.classCallCheck(this, BugReporting);
			}babelHelpers.createClass(BugReporting, null, [{ key: '_maybeInit', value: function _maybeInit() {
					if (!BugReporting._subscription) {
						BugReporting._subscription = RCTDeviceEventEmitter.addListener('collectBugExtraData', BugReporting.collectExtraData, null);
						defaultExtras();
					}
				} }, { key: 'addSource', value: function addSource(key, callback) {
					return this._addSource(key, callback, BugReporting._extraSources);
				} }, { key: 'addFileSource', value: function addFileSource(key, callback) {
					return this._addSource(key, callback, BugReporting._fileSources);
				} }, { key: '_addSource', value: function _addSource(key, callback, source) {
					BugReporting._maybeInit();
					if (source.has(key)) {
						console.warn('BugReporting.add* called multiple times for same key \'' + key + '\'');
					}
					source.set(key, callback);
					return { remove: function remove() {
							source.delete(key);
						} };
				} }, { key: 'collectExtraData', value: function collectExtraData() {
					var extraData = {};
					for (var _iterator = BugReporting._extraSources, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();;) {
						var _ref3;if (_isArray) {
							if (_i >= _iterator.length) break;_ref3 = _iterator[_i++];
						} else {
							_i = _iterator.next();if (_i.done) break;_ref3 = _i.value;
						}var _ref = _ref3;var _ref2 = babelHelpers.slicedToArray(_ref, 2);var _key = _ref2[0];var callback = _ref2[1];
						extraData[_key] = callback();
					}
					var fileData = {};
					for (var _iterator2 = BugReporting._fileSources, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();;) {
						var _ref6;if (_isArray2) {
							if (_i2 >= _iterator2.length) break;_ref6 = _iterator2[_i2++];
						} else {
							_i2 = _iterator2.next();if (_i2.done) break;_ref6 = _i2.value;
						}var _ref4 = _ref6;var _ref5 = babelHelpers.slicedToArray(_ref4, 2);var _key2 = _ref5[0];var _callback = _ref5[1];
						fileData[_key2] = _callback();
					}
					infoLog('BugReporting extraData:', extraData);
					var BugReportingNativeModule = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js').BugReporting;
					BugReportingNativeModule && BugReportingNativeModule.setExtraData && BugReportingNativeModule.setExtraData(extraData, fileData);

					return { extras: extraData, files: fileData };
				} }]);return BugReporting;
		}();BugReporting._extraSources = new Map();BugReporting._fileSources = new Map();BugReporting._subscription = null;

		module.exports = BugReporting;
	}, // Libraries/BugReporting/dumpReactTree.js
	function (__inner_require__, exports, module) {
		var ReactNativeMount = require('react@15.3/lib/ReactNativeMount.js');
		var getReactData = __inner_require__(98 /*Libraries/BugReporting/getReactData.js*/);

		var INDENTATION_SIZE = 2;
		var MAX_DEPTH = 2;
		var MAX_STRING_LENGTH = 50;

		function dumpReactTree() {
			try {
				return getReactTree();
			} catch (e) {
				return 'Failed to dump react tree: ' + e;
			}
		}

		function getReactTree() {
			var output = '';
			var rootIds = Object.getOwnPropertyNames(ReactNativeMount._instancesByContainerID);
			for (var _iterator = rootIds, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();;) {
				var _ref;if (_isArray) {
					if (_i >= _iterator.length) break;_ref = _iterator[_i++];
				} else {
					_i = _iterator.next();if (_i.done) break;_ref = _i.value;
				}var rootId = _ref;
				var instance = ReactNativeMount._instancesByContainerID[rootId];
				output += '============ Root ID: ' + rootId + ' ============\n';
				output += dumpNode(instance, 0);
				output += '============ End root ID: ' + rootId + ' ============\n';
			}
			return output;
		}

		function dumpNode(node, identation) {
			var data = getReactData(node);
			if (data.nodeType === 'Text') {
				return indent(identation) + data.text + '\n';
			} else if (data.nodeType === 'Empty') {
				return '';
			}
			var output = indent(identation) + ('<' + data.name);
			if (data.nodeType === 'Composite') {
				for (var _iterator2 = Object.getOwnPropertyNames(data.props || {}), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();;) {
					var _ref2;if (_isArray2) {
						if (_i2 >= _iterator2.length) break;_ref2 = _iterator2[_i2++];
					} else {
						_i2 = _iterator2.next();if (_i2.done) break;_ref2 = _i2.value;
					}var propName = _ref2;
					if (isNormalProp(propName)) {
						try {
							var value = convertValue(data.props[propName]);
							if (value) {
								output += ' ' + propName + '=' + value;
							}
						} catch (e) {
							var message = '[Failed to get property: ' + e + ']';
							output += ' ' + propName + '=' + message;
						}
					}
				}
			}
			var childOutput = '';
			for (var _iterator3 = data.children || [], _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();;) {
				var _ref3;if (_isArray3) {
					if (_i3 >= _iterator3.length) break;_ref3 = _iterator3[_i3++];
				} else {
					_i3 = _iterator3.next();if (_i3.done) break;_ref3 = _i3.value;
				}var child = _ref3;
				childOutput += dumpNode(child, identation + 1);
			}

			if (childOutput) {
				output += '>\n' + childOutput + indent(identation) + ('</' + data.name + '>\n');
			} else {
				output += ' />\n';
			}

			return output;
		}

		function isNormalProp(name) {
			switch (name) {
				case 'children':
				case 'key':
				case 'ref':
					return false;
				default:
					return true;}
		}

		function convertObject(object, depth) {
			if (depth >= MAX_DEPTH) {
				return '[...omitted]';
			}
			var output = '{';
			var first = true;
			for (var _iterator4 = Object.getOwnPropertyNames(object), _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();;) {
				var _ref4;if (_isArray4) {
					if (_i4 >= _iterator4.length) break;_ref4 = _iterator4[_i4++];
				} else {
					_i4 = _iterator4.next();if (_i4.done) break;_ref4 = _i4.value;
				}var key = _ref4;
				if (!first) {
					output += ', ';
				}

				output += key + ': ' + convertValue(object[key], depth + 1);
				first = false;
			}
			return output + '}';
		}

		function convertValue(value) {
			var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
			if (!value) {
				return null;
			}

			switch (typeof value) {
				case 'string':
					return JSON.stringify(possiblyEllipsis(value).replace('\n', '\\n'));
				case 'boolean':
				case 'number':
					return JSON.stringify(value);
				case 'function':
					return '[function]';
				case 'object':
					return convertObject(value, depth);
				default:
					return null;}
		}

		function possiblyEllipsis(value) {
			if (value.length > MAX_STRING_LENGTH) {
				return value.slice(0, MAX_STRING_LENGTH) + '...';
			} else {
				return value;
			}
		}

		function indent(size) {
			return ' '.repeat(size * INDENTATION_SIZE);
		}

		module.exports = dumpReactTree;
	}, // Libraries/BugReporting/getReactData.js
	function (__inner_require__, exports, module) {
		function getData(element) {
			var children = null;
			var props = null;
			var state = null;
			var context = null;
			var updater = null;
			var name = null;
			var type = null;
			var text = null;
			var publicInstance = null;
			var nodeType = 'Native';

			if (typeof element !== 'object') {
				nodeType = 'Text';
				text = element + '';
			} else if (element._currentElement === null || element._currentElement === false) {
				nodeType = 'Empty';
			} else if (element._renderedComponent) {
				nodeType = 'NativeWrapper';
				children = [element._renderedComponent];
				props = element._instance.props;
				state = element._instance.state;
				context = element._instance.context;
				if (context && Object.keys(context).length === 0) {
					context = null;
				}
			} else if (element._renderedChildren) {
				children = childrenList(element._renderedChildren);
			} else if (element._currentElement && element._currentElement.props) {

				children = element._currentElement.props.children;
			}

			if (!props && element._currentElement && element._currentElement.props) {
				props = element._currentElement.props;
			}

			if (element._currentElement != null) {
				type = element._currentElement.type;
				if (typeof type === 'string') {
					name = type;
				} else if (element.getName) {
					nodeType = 'Composite';
					name = element.getName();

					if (element._renderedComponent && element._currentElement.props === element._renderedComponent._currentElement) {
						nodeType = 'Wrapper';
					}
					if (name === null) {
						name = 'No display name';
					}
				} else if (element._stringText) {
					nodeType = 'Text';
					text = element._stringText;
				} else {
					name = type.displayName || type.name || 'Unknown';
				}
			}

			if (element._instance) {
				var inst = element._instance;
				updater = {
					setState: inst.setState && inst.setState.bind(inst),
					forceUpdate: inst.forceUpdate && inst.forceUpdate.bind(inst),
					setInProps: inst.forceUpdate && setInProps.bind(null, element),
					setInState: inst.forceUpdate && setInState.bind(null, inst),
					setInContext: inst.forceUpdate && setInContext.bind(null, inst) };

				publicInstance = inst;

				if (inst._renderedChildren) {
					children = childrenList(inst._renderedChildren);
				}
			}

			return {
				nodeType: nodeType,
				type: type,
				name: name,
				props: props,
				state: state,
				context: context,
				children: children,
				text: text,
				updater: updater,
				publicInstance: publicInstance };
		}

		function setInProps(internalInst, path, value) {
			var element = internalInst._currentElement;
			internalInst._currentElement = babelHelpers.extends({}, element, {
				props: copyWithSet(element.props, path, value) });

			internalInst._instance.forceUpdate();
		}

		function setInState(inst, path, value) {
			setIn(inst.state, path, value);
			inst.forceUpdate();
		}

		function setInContext(inst, path, value) {
			setIn(inst.context, path, value);
			inst.forceUpdate();
		}

		function setIn(obj, path, value) {
			var last = path.pop();
			var parent = path.reduce(function (obj_, attr) {
				return obj_ ? obj_[attr] : null;
			}, obj);
			if (parent) {
				parent[last] = value;
			}
		}

		function childrenList(children) {
			var res = [];
			for (var name in children) {
				res.push(children[name]);
			}
			return res;
		}

		function copyWithSetImpl(obj, path, idx, value) {
			if (idx >= path.length) {
				return value;
			}
			var key = path[idx];
			var updated = Array.isArray(obj) ? obj.slice() : babelHelpers.extends({}, obj);

			updated[key] = copyWithSetImpl(obj[key], path, idx + 1, value);
			return updated;
		}

		function copyWithSet(obj, path, value) {
			return copyWithSetImpl(obj, path, 0, value);
		}

		module.exports = getData;
	}, // Libraries/ReactNative/renderApplication.js
	function (__inner_require__, exports, module) {
		var AppContainer = __inner_require__(44 /*Libraries/ReactNative/AppContainer.js*/);
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var ReactNative = __inner_require__(26 /*Libraries/react-native/ReactNative.js*/);

		var invariant = require('fbjs@0.8/lib/invariant.js');

		__inner_require__(100 /*Libraries/Utilities/BackAndroid.ios.js*/);

		function renderApplication(RootComponent, initialProps, rootTag) {
			invariant(rootTag, 'Expect to have a valid rootTag, instead got ', rootTag);

			ReactNative.render(React.createElement(AppContainer, null, React.createElement(RootComponent, babelHelpers.extends({}, initialProps, {
				rootTag: rootTag }))), rootTag);
		}

		module.exports = renderApplication;
	}, // Libraries/Utilities/BackAndroid.ios.js
	function (__inner_require__, exports, module) {
		function emptyFunction() {}

		var BackAndroid = {
			exitApp: emptyFunction,
			addEventListener: function addEventListener() {
				return {
					remove: emptyFunction };
			},
			removeEventListener: emptyFunction };

		module.exports = BackAndroid;
	}, // Libraries/Storage/AsyncStorage.js
	function (__inner_require__, exports, module) {
		var NativeModules = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js');
		var RCTAsyncSQLiteStorage = NativeModules.AsyncSQLiteDBStorage;
		var RCTAsyncRocksDBStorage = NativeModules.AsyncRocksDBStorage;
		var RCTAsyncFileStorage = NativeModules.AsyncLocalStorage;

		var RCTAsyncStorage = RCTAsyncRocksDBStorage || RCTAsyncSQLiteStorage || RCTAsyncFileStorage;

		var AsyncStorage = {
			_getRequests: [],
			_getKeys: [],
			_immediate: null,

			getItem: function getItem(key, callback) {
				return new Promise(function (resolve, reject) {
					RCTAsyncStorage.multiGet([key], function (errors, result) {

						var value = result && result[0] && result[0][1] ? result[0][1] : null;
						var errs = convertErrors(errors);
						callback && callback(errs && errs[0], value);
						if (errs) {
							reject(errs[0]);
						} else {
							resolve(value);
						}
					});
				});
			},

			setItem: function setItem(key, value, callback) {
				return new Promise(function (resolve, reject) {
					RCTAsyncStorage.multiSet([[key, value]], function (errors) {
						var errs = convertErrors(errors);
						callback && callback(errs && errs[0]);
						if (errs) {
							reject(errs[0]);
						} else {
							resolve(null);
						}
					});
				});
			},

			removeItem: function removeItem(key, callback) {
				return new Promise(function (resolve, reject) {
					RCTAsyncStorage.multiRemove([key], function (errors) {
						var errs = convertErrors(errors);
						callback && callback(errs && errs[0]);
						if (errs) {
							reject(errs[0]);
						} else {
							resolve(null);
						}
					});
				});
			},

			mergeItem: function mergeItem(key, value, callback) {
				return new Promise(function (resolve, reject) {
					RCTAsyncStorage.multiMerge([[key, value]], function (errors) {
						var errs = convertErrors(errors);
						callback && callback(errs && errs[0]);
						if (errs) {
							reject(errs[0]);
						} else {
							resolve(null);
						}
					});
				});
			},

			clear: function clear(callback) {
				return new Promise(function (resolve, reject) {
					RCTAsyncStorage.clear(function (error) {
						callback && callback(convertError(error));
						if (error && convertError(error)) {
							reject(convertError(error));
						} else {
							resolve(null);
						}
					});
				});
			},

			getAllKeys: function getAllKeys(callback) {
				return new Promise(function (resolve, reject) {
					RCTAsyncStorage.getAllKeys(function (error, keys) {
						callback && callback(convertError(error), keys);
						if (error) {
							reject(convertError(error));
						} else {
							resolve(keys);
						}
					});
				});
			},

			flushGetRequests: function flushGetRequests() {
				var getRequests = this._getRequests;
				var getKeys = this._getKeys;

				this._getRequests = [];
				this._getKeys = [];

				RCTAsyncStorage.multiGet(getKeys, function (errors, result) {

					var map = {};
					result.forEach(function (_ref) {
						var _ref2 = babelHelpers.slicedToArray(_ref, 2),
						    key = _ref2[0],
						    value = _ref2[1];return map[key] = value;
					});
					var reqLength = getRequests.length;
					for (var i = 0; i < reqLength; i++) {
						var request = getRequests[i];
						var requestKeys = request.keys;
						var requestResult = requestKeys.map(function (key) {
							return [key, map[key]];
						});
						request.callback && request.callback(null, requestResult);
						request.resolve && request.resolve(requestResult);
					}
				});
			},

			multiGet: function multiGet(keys, callback) {
				var _this = this;
				if (!this._immediate) {
					this._immediate = setImmediate(function () {
						_this._immediate = null;
						_this.flushGetRequests();
					});
				}

				var getRequest = {
					keys: keys,
					callback: callback,

					keyIndex: this._getKeys.length,
					resolve: null,
					reject: null };

				var promiseResult = new Promise(function (resolve, reject) {
					getRequest.resolve = resolve;
					getRequest.reject = reject;
				});

				this._getRequests.push(getRequest);

				keys.forEach(function (key) {
					if (_this._getKeys.indexOf(key) === -1) {
						_this._getKeys.push(key);
					}
				});

				return promiseResult;
			},

			multiSet: function multiSet(keyValuePairs, callback) {
				return new Promise(function (resolve, reject) {
					RCTAsyncStorage.multiSet(keyValuePairs, function (errors) {
						var error = convertErrors(errors);
						callback && callback(error);
						if (error) {
							reject(error);
						} else {
							resolve(null);
						}
					});
				});
			},

			multiRemove: function multiRemove(keys, callback) {
				return new Promise(function (resolve, reject) {
					RCTAsyncStorage.multiRemove(keys, function (errors) {
						var error = convertErrors(errors);
						callback && callback(error);
						if (error) {
							reject(error);
						} else {
							resolve(null);
						}
					});
				});
			},

			multiMerge: function multiMerge(keyValuePairs, callback) {
				return new Promise(function (resolve, reject) {
					RCTAsyncStorage.multiMerge(keyValuePairs, function (errors) {
						var error = convertErrors(errors);
						callback && callback(error);
						if (error) {
							reject(error);
						} else {
							resolve(null);
						}
					});
				});
			} };

		if (!RCTAsyncStorage.multiMerge) {
			delete AsyncStorage.mergeItem;
			delete AsyncStorage.multiMerge;
		}

		function convertErrors(errs) {
			if (!errs) {
				return null;
			}
			return (Array.isArray(errs) ? errs : [errs]).map(function (e) {
				return convertError(e);
			});
		}

		function convertError(error) {
			if (!error) {
				return null;
			}
			var out = new Error(error.message);
			out.key = error.key;
			return out;
		}

		module.exports = AsyncStorage;
	}, // Libraries/CameraRoll/CameraRoll.js
	function (__inner_require__, exports, module) {
		var ReactPropTypes = require('react-native@0.37/Libraries/react-native/React.js').PropTypes;
		var RCTCameraRollManager = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js').CameraRollManager;

		var createStrictShapeTypeChecker = require('react-native@0.37/Libraries/Utilities/createStrictShapeTypeChecker.js');
		var deepFreezeAndThrowOnMutationInDev = require('react-native@0.37/Libraries/Utilities/deepFreezeAndThrowOnMutationInDev.js');
		var invariant = require('fbjs@0.8/lib/invariant.js');

		var GROUP_TYPES_OPTIONS = ['Album', 'All', 'Event', 'Faces', 'Library', 'PhotoStream', 'SavedPhotos'];

		var ASSET_TYPE_OPTIONS = ['All', 'Videos', 'Photos'];

		deepFreezeAndThrowOnMutationInDev(GROUP_TYPES_OPTIONS);
		deepFreezeAndThrowOnMutationInDev(ASSET_TYPE_OPTIONS);

		var getPhotosParamChecker = createStrictShapeTypeChecker({

			first: ReactPropTypes.number.isRequired,

			after: ReactPropTypes.string,

			groupTypes: ReactPropTypes.oneOf(GROUP_TYPES_OPTIONS),

			groupName: ReactPropTypes.string,

			assetType: ReactPropTypes.oneOf(ASSET_TYPE_OPTIONS),

			mimeTypes: ReactPropTypes.arrayOf(ReactPropTypes.string) });

		var getPhotosReturnChecker = createStrictShapeTypeChecker({
			edges: ReactPropTypes.arrayOf(createStrictShapeTypeChecker({
				node: createStrictShapeTypeChecker({
					type: ReactPropTypes.string.isRequired,
					group_name: ReactPropTypes.string.isRequired,
					image: createStrictShapeTypeChecker({
						uri: ReactPropTypes.string.isRequired,
						height: ReactPropTypes.number.isRequired,
						width: ReactPropTypes.number.isRequired,
						isStored: ReactPropTypes.bool }).isRequired,
					timestamp: ReactPropTypes.number.isRequired,
					location: createStrictShapeTypeChecker({
						latitude: ReactPropTypes.number,
						longitude: ReactPropTypes.number,
						altitude: ReactPropTypes.number,
						heading: ReactPropTypes.number,
						speed: ReactPropTypes.number }) }).isRequired })).isRequired,
			page_info: createStrictShapeTypeChecker({
				has_next_page: ReactPropTypes.bool.isRequired,
				start_cursor: ReactPropTypes.string,
				end_cursor: ReactPropTypes.string }).isRequired });var CameraRoll = function () {
			function CameraRoll() {
				babelHelpers.classCallCheck(this, CameraRoll);
			}babelHelpers.createClass(CameraRoll, null, [{ key: 'saveImageWithTag', value: function saveImageWithTag(tag) {
					console.warn('CameraRoll.saveImageWithTag is deprecated. Use CameraRoll.saveToCameraRoll instead');
					return this.saveToCameraRoll(tag, 'photo');
				} }, { key: 'saveToCameraRoll', value: function saveToCameraRoll(tag, type) {
					invariant(typeof tag === 'string', 'CameraRoll.saveToCameraRoll must be a valid string.');

					invariant(type === 'photo' || type === 'video' || type === undefined, 'The second argument to saveToCameraRoll must be \'photo\' or \'video\'. You passed ' + type);

					var mediaType = 'photo';
					if (type) {
						mediaType = type;
					} else if (['mov', 'mp4'].indexOf(tag.split('.').slice(-1)[0]) >= 0) {
						mediaType = 'video';
					}

					return RCTCameraRollManager.saveToCameraRoll(tag, mediaType);
				} }, { key: 'getPhotos', value: function getPhotos(params) {
					var _arguments = arguments;

					if (arguments.length > 1) {
						console.warn('CameraRoll.getPhotos(tag, success, error) is deprecated.  Use the returned Promise instead');
						var successCallback = arguments[1];

						var errorCallback = arguments[2] || function () {};
						RCTCameraRollManager.getPhotos(params).then(successCallback, errorCallback);
					}

					return RCTCameraRollManager.getPhotos(params);
				} }]);return CameraRoll;
		}();

		CameraRoll.GroupTypesOptions = GROUP_TYPES_OPTIONS;
		CameraRoll.AssetTypeOptions = ASSET_TYPE_OPTIONS;

		module.exports = CameraRoll;
	}, // Libraries/Components/Clipboard/Clipboard.js
	function (__inner_require__, exports, module) {
		var Clipboard = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js').Clipboard;

		module.exports = {

			getString: function getString() {
				return Clipboard.getString();
			},

			setString: function setString(content) {
				Clipboard.setString(content);
			} };
	}, // Libraries/Components/DatePickerAndroid/DatePickerAndroid.ios.js
	function (__inner_require__, exports, module) {
		var DatePickerAndroid = {
			open: function open(options) {
				return regeneratorRuntime.async(function open$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {case 0:
								return _context.abrupt('return', Promise.reject({
									message: 'DatePickerAndroid is not supported on this platform.' }));case 1:case 'end':
								return _context.stop();}
					}
				}, null, this);
			} };

		module.exports = DatePickerAndroid;
	}, // Libraries/CameraRoll/ImagePickerIOS.js
	function (__inner_require__, exports, module) {
		var RCTImagePicker = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js').ImagePickerIOS;

		var ImagePickerIOS = {
			canRecordVideos: function canRecordVideos(callback) {
				return RCTImagePicker.canRecordVideos(callback);
			},
			canUseCamera: function canUseCamera(callback) {
				return RCTImagePicker.canUseCamera(callback);
			},
			openCameraDialog: function openCameraDialog(config, successCallback, cancelCallback) {
				config = babelHelpers.extends({
					videoMode: false }, config);

				return RCTImagePicker.openCameraDialog(config, successCallback, cancelCallback);
			},
			openSelectDialog: function openSelectDialog(config, successCallback, cancelCallback) {
				config = babelHelpers.extends({
					showImages: true,
					showVideos: false }, config);

				return RCTImagePicker.openSelectDialog(config, successCallback, cancelCallback);
			} };

		module.exports = ImagePickerIOS;
	}, // Libraries/Linking/Linking.js
	function (__inner_require__, exports, module) {
		var NativeEventEmitter = require('react-native@0.37/Libraries/EventEmitter/NativeEventEmitter.js');
		var NativeModules = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js');
		var Platform = require('react-native@0.37/Libraries/Utilities/Platform.ios.js');

		var invariant = require('fbjs@0.8/lib/invariant.js');

		var LinkingManager = Platform.OS === 'android' ? NativeModules.IntentAndroid : NativeModules.LinkingManager;var Linking = function (_NativeEventEmitter) {
			babelHelpers.inherits(Linking, _NativeEventEmitter);

			function Linking() {
				babelHelpers.classCallCheck(this, Linking);return babelHelpers.possibleConstructorReturn(this, (Linking.__proto__ || Object.getPrototypeOf(Linking)).call(this, LinkingManager));
			}babelHelpers.createClass(Linking, [{ key: 'addEventListener', value: function addEventListener(type, handler) {
					this.addListener(type, handler);
				} }, { key: 'removeEventListener', value: function removeEventListener(type, handler) {
					this.removeListener(type, handler);
				} }, { key: 'openURL', value: function openURL(url) {
					this._validateURL(url);
					return LinkingManager.openURL(url);
				} }, { key: 'canOpenURL', value: function canOpenURL(url) {
					this._validateURL(url);
					return LinkingManager.canOpenURL(url);
				} }, { key: 'getInitialURL', value: function getInitialURL() {
					return LinkingManager.getInitialURL();
				} }, { key: '_validateURL', value: function _validateURL(url) {
					invariant(typeof url === 'string', 'Invalid URL: should be a string. Was: ' + url);

					invariant(url, 'Invalid URL: cannot be empty');
				} }]);return Linking;
		}(NativeEventEmitter);

		module.exports = new Linking();
	}, // Libraries/NavigationExperimental/NavigationExperimental.js
	function (__inner_require__, exports, module) {
		var NavigationCard = __inner_require__(108 /*Libraries/CustomComponents/NavigationExperimental/NavigationCard.js*/);
		var NavigationCardStack = __inner_require__(117 /*Libraries/CustomComponents/NavigationExperimental/NavigationCardStack.js*/);
		var NavigationHeader = __inner_require__(120 /*Libraries/CustomComponents/NavigationExperimental/NavigationHeader.js*/);
		var NavigationPropTypes = __inner_require__(116 /*Libraries/NavigationExperimental/NavigationPropTypes.js*/);
		var NavigationStateUtils = __inner_require__(124 /*Libraries/NavigationExperimental/NavigationStateUtils.js*/);
		var NavigationTransitioner = __inner_require__(118 /*Libraries/NavigationExperimental/NavigationTransitioner.js*/);

		var NavigationExperimental = {

			StateUtils: NavigationStateUtils,

			Transitioner: NavigationTransitioner,

			Card: NavigationCard,
			CardStack: NavigationCardStack,
			Header: NavigationHeader,

			PropTypes: NavigationPropTypes };

		module.exports = NavigationExperimental;
	}, // Libraries/CustomComponents/NavigationExperimental/NavigationCard.js
	function (__inner_require__, exports, module) {
		var Animated = __inner_require__(12 /*Libraries/Animated/src/Animated.js*/);
		var NavigationCardStackPanResponder = __inner_require__(109 /*Libraries/CustomComponents/NavigationExperimental/NavigationCardStackPanResponder.js*/);
		var NavigationCardStackStyleInterpolator = __inner_require__(111 /*Libraries/CustomComponents/NavigationExperimental/NavigationCardStackStyleInterpolator.js*/);
		var NavigationPagerPanResponder = __inner_require__(112 /*Libraries/CustomComponents/NavigationExperimental/NavigationPagerPanResponder.js*/);
		var NavigationPagerStyleInterpolator = __inner_require__(113 /*Libraries/CustomComponents/NavigationExperimental/NavigationPagerStyleInterpolator.js*/);
		var NavigationPointerEventsContainer = __inner_require__(114 /*Libraries/CustomComponents/NavigationExperimental/NavigationPointerEventsContainer.js*/);
		var NavigationPropTypes = __inner_require__(116 /*Libraries/NavigationExperimental/NavigationPropTypes.js*/);
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var StyleSheet = require('react-native@0.37/Libraries/StyleSheet/StyleSheet.js');var PropTypes = React.PropTypes;var NavigationCard = function (_React$Component) {
			babelHelpers.inherits(NavigationCard, _React$Component);function NavigationCard() {
				babelHelpers.classCallCheck(this, NavigationCard);return babelHelpers.possibleConstructorReturn(this, (NavigationCard.__proto__ || Object.getPrototypeOf(NavigationCard)).apply(this, arguments));
			}babelHelpers.createClass(NavigationCard, [{ key: 'render', value: function render() {
					var _props = this.props,
					    panHandlers = _props.panHandlers,
					    pointerEvents = _props.pointerEvents,
					    renderScene = _props.renderScene,
					    style = _props.style,
					    props = babelHelpers.objectWithoutProperties(_props, ['panHandlers', 'pointerEvents', 'renderScene', 'style']);

					var viewStyle = style === undefined ? NavigationCardStackStyleInterpolator.forHorizontal(props) : style;

					var viewPanHandlers = panHandlers === undefined ? NavigationCardStackPanResponder.forHorizontal(babelHelpers.extends({}, props, {
						onNavigateBack: this.props.onNavigateBack })) : panHandlers;

					return React.createElement(Animated.View, babelHelpers.extends({}, viewPanHandlers, {
						pointerEvents: pointerEvents,
						ref: this.props.onComponentRef,
						style: [styles.main, viewStyle] }), renderScene(props));
				} }]);return NavigationCard;
		}(React.Component);NavigationCard.propTypes = babelHelpers.extends({}, NavigationPropTypes.SceneRendererProps, { onComponentRef: PropTypes.func.isRequired, onNavigateBack: PropTypes.func, panHandlers: NavigationPropTypes.panHandlers, pointerEvents: PropTypes.string.isRequired, renderScene: PropTypes.func.isRequired, style: PropTypes.any });

		var styles = StyleSheet.create({
			main: {
				backgroundColor: '#E9E9EF',
				bottom: 0,
				left: 0,
				position: 'absolute',
				right: 0,
				shadowColor: 'black',
				shadowOffset: { width: 0, height: 0 },
				shadowOpacity: 0.4,
				shadowRadius: 10,
				top: 0 } });

		NavigationCard = NavigationPointerEventsContainer.create(NavigationCard);

		NavigationCard.CardStackPanResponder = NavigationCardStackPanResponder;
		NavigationCard.CardStackStyleInterpolator = NavigationCardStackStyleInterpolator;
		NavigationCard.PagerPanResponder = NavigationPagerPanResponder;
		NavigationCard.PagerStyleInterpolator = NavigationPagerStyleInterpolator;

		module.exports = NavigationCard;
	}, // Libraries/CustomComponents/NavigationExperimental/NavigationCardStackPanResponder.js
	function (__inner_require__, exports, module) {
		var Animated = __inner_require__(12 /*Libraries/Animated/src/Animated.js*/);
		var I18nManager = __inner_require__(45 /*Libraries/ReactNative/I18nManager.js*/);
		var NavigationAbstractPanResponder = __inner_require__(110 /*Libraries/NavigationExperimental/NavigationAbstractPanResponder.js*/);

		var clamp = __inner_require__(60 /*Libraries/Utilities/clamp.js*/);

		var ANIMATION_DURATION = 250;

		var POSITION_THRESHOLD = 1 / 3;

		var RESPOND_THRESHOLD = 15;

		var DISTANCE_THRESHOLD = 100;

		var Directions = {
			'HORIZONTAL': 'horizontal',
			'VERTICAL': 'vertical' };var NavigationCardStackPanResponder = function (_NavigationAbstractPa) {
			babelHelpers.inherits(NavigationCardStackPanResponder, _NavigationAbstractPa);

			function NavigationCardStackPanResponder(direction, props) {
				babelHelpers.classCallCheck(this, NavigationCardStackPanResponder);var _this = babelHelpers.possibleConstructorReturn(this, (NavigationCardStackPanResponder.__proto__ || Object.getPrototypeOf(NavigationCardStackPanResponder)).call(this));

				_this._isResponding = false;
				_this._isVertical = direction === Directions.VERTICAL;
				_this._props = props;
				_this._startValue = 0;return _this;
			}babelHelpers.createClass(NavigationCardStackPanResponder, [{ key: 'onMoveShouldSetPanResponder', value: function onMoveShouldSetPanResponder(event, gesture) {
					var props = this._props;

					if (props.navigationState.index !== props.scene.index) {
						return false;
					}

					var layout = props.layout;
					var isVertical = this._isVertical;
					var index = props.navigationState.index;
					var currentDragDistance = gesture[isVertical ? 'dy' : 'dx'];
					var currentDragPosition = gesture[isVertical ? 'moveY' : 'moveX'];
					var maxDragDistance = isVertical ? layout.height.__getValue() : layout.width.__getValue();

					var positionMax = isVertical ? props.gestureResponseDistance : props.gestureResponseDistance || 30;

					if (positionMax != null && currentDragPosition > positionMax) {
						return false;
					}

					return Math.abs(currentDragDistance) > RESPOND_THRESHOLD && maxDragDistance > 0 && index > 0;
				} }, { key: 'onPanResponderGrant', value: function onPanResponderGrant() {
					var _this2 = this;
					this._isResponding = false;
					this._props.position.stopAnimation(function (value) {
						_this2._isResponding = true;
						_this2._startValue = value;
					});
				} }, { key: 'onPanResponderMove', value: function onPanResponderMove(event, gesture) {
					if (!this._isResponding) {
						return;
					}

					var props = this._props;
					var layout = props.layout;
					var isVertical = this._isVertical;
					var axis = isVertical ? 'dy' : 'dx';
					var index = props.navigationState.index;
					var distance = isVertical ? layout.height.__getValue() : layout.width.__getValue();
					var currentValue = I18nManager.isRTL && axis === 'dx' ? this._startValue + gesture[axis] / distance : this._startValue - gesture[axis] / distance;

					var value = clamp(index - 1, currentValue, index);

					props.position.setValue(value);
				} }, { key: 'onPanResponderRelease', value: function onPanResponderRelease(event, gesture) {
					var _this3 = this;
					if (!this._isResponding) {
						return;
					}

					this._isResponding = false;

					var props = this._props;
					var isVertical = this._isVertical;
					var axis = isVertical ? 'dy' : 'dx';
					var index = props.navigationState.index;
					var distance = I18nManager.isRTL && axis === 'dx' ? -gesture[axis] : gesture[axis];

					props.position.stopAnimation(function (value) {
						_this3._reset();

						if (!props.onNavigateBack) {
							return;
						}

						if (distance > DISTANCE_THRESHOLD || value <= index - POSITION_THRESHOLD) {
							props.onNavigateBack();
						}
					});
				} }, { key: 'onPanResponderTerminate', value: function onPanResponderTerminate() {
					this._isResponding = false;
					this._reset();
				} }, { key: '_reset', value: function _reset() {
					var props = this._props;
					Animated.timing(props.position, {
						toValue: props.navigationState.index,
						duration: ANIMATION_DURATION }).start();
				} }]);return NavigationCardStackPanResponder;
		}(NavigationAbstractPanResponder);

		function createPanHandlers(direction, props) {
			var responder = new NavigationCardStackPanResponder(direction, props);
			return responder.panHandlers;
		}

		function forHorizontal(props) {
			return createPanHandlers(Directions.HORIZONTAL, props);
		}

		function forVertical(props) {
			return createPanHandlers(Directions.VERTICAL, props);
		}

		module.exports = {

			ANIMATION_DURATION: ANIMATION_DURATION,
			DISTANCE_THRESHOLD: DISTANCE_THRESHOLD,
			POSITION_THRESHOLD: POSITION_THRESHOLD,
			RESPOND_THRESHOLD: RESPOND_THRESHOLD,

			Directions: Directions,

			forHorizontal: forHorizontal,
			forVertical: forVertical };
	}, // Libraries/NavigationExperimental/NavigationAbstractPanResponder.js
	function (__inner_require__, exports, module) {
		var PanResponder = __inner_require__(59 /*Libraries/Interaction/PanResponder.js*/);

		var invariant = require('fbjs@0.8/lib/invariant.js');

		var EmptyPanHandlers = {
			onMoveShouldSetPanResponder: null,
			onPanResponderGrant: null,
			onPanResponderMove: null,
			onPanResponderRelease: null,
			onPanResponderTerminate: null };var NavigationAbstractPanResponder = function NavigationAbstractPanResponder() {
			var _this = this;babelHelpers.classCallCheck(this, NavigationAbstractPanResponder);
			var config = {};
			Object.keys(EmptyPanHandlers).forEach(function (name) {
				var fn = _this[name];

				invariant(typeof fn === 'function', 'subclass of `NavigationAbstractPanResponder` must implement method %s', name);

				config[name] = fn.bind(_this);
			}, this);

			this.panHandlers = PanResponder.create(config).panHandlers;
		};

		module.exports = NavigationAbstractPanResponder;
	}, // Libraries/CustomComponents/NavigationExperimental/NavigationCardStackStyleInterpolator.js
	function (__inner_require__, exports, module) {
		var I18nManager = __inner_require__(45 /*Libraries/ReactNative/I18nManager.js*/);

		function forInitial(props) {
			var navigationState = props.navigationState,
			    scene = props.scene;

			var focused = navigationState.index === scene.index;
			var opacity = focused ? 1 : 0;

			var translate = focused ? 0 : 1000000;
			return {
				opacity: opacity,
				transform: [{ translateX: translate }, { translateY: translate }] };
		}

		function forHorizontal(props) {
			var layout = props.layout,
			    position = props.position,
			    scene = props.scene;

			if (!layout.isMeasured) {
				return forInitial(props);
			}

			var index = scene.index;
			var inputRange = [index - 1, index, index + 1];
			var width = layout.initWidth;
			var outputRange = I18nManager.isRTL ? [-width, 0, 10] : [width, 0, -10];

			var opacity = position.interpolate({
				inputRange: inputRange,
				outputRange: [1, 1, 0.3] });

			var scale = position.interpolate({
				inputRange: inputRange,
				outputRange: [1, 1, 0.95] });

			var translateY = 0;
			var translateX = position.interpolate({
				inputRange: inputRange,
				outputRange: outputRange });

			return {
				opacity: opacity,
				transform: [{ scale: scale }, { translateX: translateX }, { translateY: translateY }] };
		}

		function forVertical(props) {
			var layout = props.layout,
			    position = props.position,
			    scene = props.scene;

			if (!layout.isMeasured) {
				return forInitial(props);
			}

			var index = scene.index;
			var inputRange = [index - 1, index, index + 1];
			var height = layout.initHeight;

			var opacity = position.interpolate({
				inputRange: inputRange,
				outputRange: [1, 1, 0.3] });

			var scale = position.interpolate({
				inputRange: inputRange,
				outputRange: [1, 1, 0.95] });

			var translateX = 0;
			var translateY = position.interpolate({
				inputRange: inputRange,
				outputRange: [height, 0, -10] });

			return {
				opacity: opacity,
				transform: [{ scale: scale }, { translateX: translateX }, { translateY: translateY }] };
		}

		function canUseNativeDriver(isVertical) {

			return true;
		}

		module.exports = {
			forHorizontal: forHorizontal,
			forVertical: forVertical,
			canUseNativeDriver: canUseNativeDriver };
	}, // Libraries/CustomComponents/NavigationExperimental/NavigationPagerPanResponder.js
	function (__inner_require__, exports, module) {
		var Animated = __inner_require__(12 /*Libraries/Animated/src/Animated.js*/);
		var NavigationAbstractPanResponder = __inner_require__(110 /*Libraries/NavigationExperimental/NavigationAbstractPanResponder.js*/);
		var NavigationCardStackPanResponder = __inner_require__(109 /*Libraries/CustomComponents/NavigationExperimental/NavigationCardStackPanResponder.js*/);
		var I18nManager = __inner_require__(45 /*Libraries/ReactNative/I18nManager.js*/);

		var clamp = __inner_require__(60 /*Libraries/Utilities/clamp.js*/);var ANIMATION_DURATION = NavigationCardStackPanResponder.ANIMATION_DURATION,
		    POSITION_THRESHOLD = NavigationCardStackPanResponder.POSITION_THRESHOLD,
		    RESPOND_THRESHOLD = NavigationCardStackPanResponder.RESPOND_THRESHOLD,
		    Directions = NavigationCardStackPanResponder.Directions;

		var DISTANCE_THRESHOLD = 50;

		var VELOCITY_THRESHOLD = 1.5;var NavigationPagerPanResponder = function (_NavigationAbstractPa) {
			babelHelpers.inherits(NavigationPagerPanResponder, _NavigationAbstractPa);

			function NavigationPagerPanResponder(direction, props) {
				babelHelpers.classCallCheck(this, NavigationPagerPanResponder);var _this = babelHelpers.possibleConstructorReturn(this, (NavigationPagerPanResponder.__proto__ || Object.getPrototypeOf(NavigationPagerPanResponder)).call(this));

				_this._isResponding = false;
				_this._isVertical = direction === Directions.VERTICAL;
				_this._props = props;
				_this._startValue = 0;return _this;
			}babelHelpers.createClass(NavigationPagerPanResponder, [{ key: 'onMoveShouldSetPanResponder', value: function onMoveShouldSetPanResponder(event, gesture) {
					var props = this._props;

					if (props.navigationState.index !== props.scene.index) {
						return false;
					}

					var layout = props.layout;
					var isVertical = this._isVertical;
					var axis = isVertical ? 'dy' : 'dx';
					var index = props.navigationState.index;
					var distance = isVertical ? layout.height.__getValue() : layout.width.__getValue();

					return Math.abs(gesture[axis]) > RESPOND_THRESHOLD && distance > 0 && index >= 0;
				} }, { key: 'onPanResponderGrant', value: function onPanResponderGrant() {
					var _this2 = this;
					this._isResponding = false;
					this._props.position.stopAnimation(function (value) {
						_this2._isResponding = true;
						_this2._startValue = value;
					});
				} }, { key: 'onPanResponderMove', value: function onPanResponderMove(event, gesture) {
					if (!this._isResponding) {
						return;
					}var _props = this._props,
					    layout = _props.layout,
					    navigationState = _props.navigationState,
					    position = _props.position,
					    scenes = _props.scenes;

					var isVertical = this._isVertical;
					var axis = isVertical ? 'dy' : 'dx';
					var index = navigationState.index;
					var distance = isVertical ? layout.height.__getValue() : layout.width.__getValue();
					var currentValue = I18nManager.isRTL && axis === 'dx' ? this._startValue + gesture[axis] / distance : this._startValue - gesture[axis] / distance;

					var prevIndex = Math.max(0, index - 1);

					var nextIndex = Math.min(index + 1, scenes.length - 1);

					var value = clamp(prevIndex, currentValue, nextIndex);

					position.setValue(value);
				} }, { key: 'onPanResponderRelease', value: function onPanResponderRelease(event, gesture) {
					var _this3 = this;
					if (!this._isResponding) {
						return;
					}

					this._isResponding = false;var _props2 = this._props,
					    navigationState = _props2.navigationState,
					    onNavigateBack = _props2.onNavigateBack,
					    onNavigateForward = _props2.onNavigateForward,
					    position = _props2.position;

					var isVertical = this._isVertical;
					var axis = isVertical ? 'dy' : 'dx';
					var velocityAxis = isVertical ? 'vy' : 'vx';
					var index = navigationState.index;
					var distance = I18nManager.isRTL && axis === 'dx' ? -gesture[axis] : gesture[axis];
					var moveSpeed = I18nManager.isRTL && velocityAxis === 'vx' ? -gesture[velocityAxis] : gesture[velocityAxis];

					position.stopAnimation(function (value) {
						_this3._reset();
						if (distance > DISTANCE_THRESHOLD || value <= index - POSITION_THRESHOLD || moveSpeed > VELOCITY_THRESHOLD) {
							onNavigateBack && onNavigateBack();
							return;
						}

						if (distance < -DISTANCE_THRESHOLD || value >= index + POSITION_THRESHOLD || moveSpeed < -VELOCITY_THRESHOLD) {
							onNavigateForward && onNavigateForward();
						}
					});
				} }, { key: 'onPanResponderTerminate', value: function onPanResponderTerminate() {
					this._isResponding = false;
					this._reset();
				} }, { key: '_reset', value: function _reset() {
					var props = this._props;
					Animated.timing(props.position, {
						toValue: props.navigationState.index,
						duration: ANIMATION_DURATION }).start();
				} }]);return NavigationPagerPanResponder;
		}(NavigationAbstractPanResponder);

		function createPanHandlers(direction, props) {
			var responder = new NavigationPagerPanResponder(direction, props);
			return responder.panHandlers;
		}

		function forHorizontal(props) {
			return createPanHandlers(Directions.HORIZONTAL, props);
		}

		module.exports = {
			forHorizontal: forHorizontal };
	}, // Libraries/CustomComponents/NavigationExperimental/NavigationPagerStyleInterpolator.js
	function (__inner_require__, exports, module) {
		var I18nManager = __inner_require__(45 /*Libraries/ReactNative/I18nManager.js*/);

		function forInitial(props) {
			var navigationState = props.navigationState,
			    scene = props.scene;

			var focused = navigationState.index === scene.index;
			var opacity = focused ? 1 : 0;

			var dir = scene.index > navigationState.index ? 1 : -1;
			var translate = focused ? 0 : 1000000 * dir;
			return {
				opacity: opacity,
				transform: [{ translateX: translate }, { translateY: translate }] };
		}

		function forHorizontal(props) {
			var layout = props.layout,
			    position = props.position,
			    scene = props.scene;

			if (!layout.isMeasured) {
				return forInitial(props);
			}

			var index = scene.index;
			var inputRange = [index - 1, index, index + 1];
			var width = layout.initWidth;
			var outputRange = I18nManager.isRTL ? [-width, 0, width] : [width, 0, -width];

			var translateX = position.interpolate({
				inputRange: inputRange,
				outputRange: outputRange });

			return {
				opacity: 1,
				shadowColor: 'transparent',
				shadowRadius: 0,
				transform: [{ scale: 1 }, { translateX: translateX }, { translateY: 0 }] };
		}

		module.exports = {
			forHorizontal: forHorizontal };
	}, // Libraries/CustomComponents/NavigationExperimental/NavigationPointerEventsContainer.js
	function (__inner_require__, exports, module) {
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var NavigationAnimatedValueSubscription = __inner_require__(115 /*Libraries/CustomComponents/NavigationExperimental/NavigationAnimatedValueSubscription.js*/);

		var invariant = require('fbjs@0.8/lib/invariant.js');

		var MIN_POSITION_OFFSET = 0.01;

		function create(Component) {
			var Container = function (_React$Component) {
				babelHelpers.inherits(Container, _React$Component);

				function Container(props, context) {
					babelHelpers.classCallCheck(this, Container);var _this = babelHelpers.possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this, props, context));
					_this._pointerEvents = _this._computePointerEvents();return _this;
				}babelHelpers.createClass(Container, [{ key: 'componentWillMount', value: function componentWillMount() {
						this._onPositionChange = this._onPositionChange.bind(this);
						this._onComponentRef = this._onComponentRef.bind(this);
					} }, { key: 'componentDidMount', value: function componentDidMount() {
						this._bindPosition(this.props);
					} }, { key: 'componentWillUnmount', value: function componentWillUnmount() {
						this._positionListener && this._positionListener.remove();
					} }, { key: 'componentWillReceiveProps', value: function componentWillReceiveProps(nextProps) {
						this._bindPosition(nextProps);
					} }, { key: 'render', value: function render() {
						this._pointerEvents = this._computePointerEvents();
						return React.createElement(Component, babelHelpers.extends({}, this.props, {
							pointerEvents: this._pointerEvents,
							onComponentRef: this._onComponentRef }));
					} }, { key: '_onComponentRef', value: function _onComponentRef(component) {
						this._component = component;
						if (component) {
							invariant(typeof component.setNativeProps === 'function', 'component must implement method `setNativeProps`');
						}
					} }, { key: '_bindPosition', value: function _bindPosition(props) {
						this._positionListener && this._positionListener.remove();
						this._positionListener = new NavigationAnimatedValueSubscription(props.position, this._onPositionChange);
					} }, { key: '_onPositionChange', value: function _onPositionChange() {
						if (this._component) {
							var pointerEvents = this._computePointerEvents();
							if (this._pointerEvents !== pointerEvents) {
								this._pointerEvents = pointerEvents;
								this._component.setNativeProps({ pointerEvents: pointerEvents });
							}
						}
					} }, { key: '_computePointerEvents', value: function _computePointerEvents() {
						var _props = this.props,
						    navigationState = _props.navigationState,
						    position = _props.position,
						    scene = _props.scene;

						if (scene.isStale || navigationState.index !== scene.index) {

							return scene.index > navigationState.index ? 'box-only' : 'none';
						}

						var offset = position.__getAnimatedValue() - navigationState.index;
						if (Math.abs(offset) > MIN_POSITION_OFFSET) {

							return 'box-only';
						}

						return 'auto';
					} }]);return Container;
			}(React.Component);

			return Container;
		}

		module.exports = {
			create: create };
	}, // Libraries/CustomComponents/NavigationExperimental/NavigationAnimatedValueSubscription.js
	function (__inner_require__, exports, module) {
		var NavigationAnimatedValueSubscription = function () {

			function NavigationAnimatedValueSubscription(value, callback) {
				babelHelpers.classCallCheck(this, NavigationAnimatedValueSubscription);
				this._value = value;
				this._token = value.addListener(callback);
			}babelHelpers.createClass(NavigationAnimatedValueSubscription, [{ key: 'remove', value: function remove() {
					this._value.removeListener(this._token);
				} }]);return NavigationAnimatedValueSubscription;
		}();

		module.exports = NavigationAnimatedValueSubscription;
	}, // Libraries/NavigationExperimental/NavigationPropTypes.js
	function (__inner_require__, exports, module) {
		var Animated = __inner_require__(12 /*Libraries/Animated/src/Animated.js*/);
		var React = require('react-native@0.37/Libraries/react-native/React.js');var PropTypes = React.PropTypes;

		var action = PropTypes.shape({
			type: PropTypes.string.isRequired });

		var animatedValue = PropTypes.instanceOf(Animated.Value);

		var navigationRoute = PropTypes.shape({
			key: PropTypes.string.isRequired });

		var navigationState = PropTypes.shape({
			index: PropTypes.number.isRequired,
			routes: PropTypes.arrayOf(navigationRoute) });

		var layout = PropTypes.shape({
			height: animatedValue,
			initHeight: PropTypes.number.isRequired,
			initWidth: PropTypes.number.isRequired,
			isMeasured: PropTypes.bool.isRequired,
			width: animatedValue });

		var scene = PropTypes.shape({
			index: PropTypes.number.isRequired,
			isActive: PropTypes.bool.isRequired,
			isStale: PropTypes.bool.isRequired,
			key: PropTypes.string.isRequired,
			route: navigationRoute.isRequired });

		var SceneRendererProps = {
			layout: layout.isRequired,
			navigationState: navigationState.isRequired,
			position: animatedValue.isRequired,
			progress: animatedValue.isRequired,
			scene: scene.isRequired,
			scenes: PropTypes.arrayOf(scene).isRequired };

		var SceneRenderer = PropTypes.shape(SceneRendererProps);

		var panHandlers = PropTypes.shape({
			onMoveShouldSetResponder: PropTypes.func.isRequired,
			onMoveShouldSetResponderCapture: PropTypes.func.isRequired,
			onResponderEnd: PropTypes.func.isRequired,
			onResponderGrant: PropTypes.func.isRequired,
			onResponderMove: PropTypes.func.isRequired,
			onResponderReject: PropTypes.func.isRequired,
			onResponderRelease: PropTypes.func.isRequired,
			onResponderStart: PropTypes.func.isRequired,
			onResponderTerminate: PropTypes.func.isRequired,
			onResponderTerminationRequest: PropTypes.func.isRequired,
			onStartShouldSetResponder: PropTypes.func.isRequired,
			onStartShouldSetResponderCapture: PropTypes.func.isRequired });

		function extractSceneRendererProps(props) {
			return {
				layout: props.layout,
				navigationState: props.navigationState,
				position: props.position,
				progress: props.progress,
				scene: props.scene,
				scenes: props.scenes };
		}

		module.exports = {

			extractSceneRendererProps: extractSceneRendererProps,

			SceneRendererProps: SceneRendererProps,

			SceneRenderer: SceneRenderer,
			action: action,
			navigationState: navigationState,
			navigationRoute: navigationRoute,
			panHandlers: panHandlers };
	}, // Libraries/CustomComponents/NavigationExperimental/NavigationCardStack.js
	function (__inner_require__, exports, module) {
		var NativeAnimatedModule = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js').NativeAnimatedModule;
		var NavigationCard = __inner_require__(108 /*Libraries/CustomComponents/NavigationExperimental/NavigationCard.js*/);
		var NavigationCardStackPanResponder = __inner_require__(109 /*Libraries/CustomComponents/NavigationExperimental/NavigationCardStackPanResponder.js*/);
		var NavigationCardStackStyleInterpolator = __inner_require__(111 /*Libraries/CustomComponents/NavigationExperimental/NavigationCardStackStyleInterpolator.js*/);
		var NavigationPropTypes = __inner_require__(116 /*Libraries/NavigationExperimental/NavigationPropTypes.js*/);
		var NavigationTransitioner = __inner_require__(118 /*Libraries/NavigationExperimental/NavigationTransitioner.js*/);
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var StyleSheet = require('react-native@0.37/Libraries/StyleSheet/StyleSheet.js');
		var View = require('react-native@0.37/Libraries/Components/View/View.js');var PropTypes = React.PropTypes;var Directions = NavigationCardStackPanResponder.Directions;var NavigationCardStack = function (_React$Component) {
			babelHelpers.inherits(NavigationCardStack, _React$Component);

			function NavigationCardStack(props, context) {
				babelHelpers.classCallCheck(this, NavigationCardStack);var _this = babelHelpers.possibleConstructorReturn(this, (NavigationCardStack.__proto__ || Object.getPrototypeOf(NavigationCardStack)).call(this, props, context));_this._configureTransition = function () {
					var isVertical = _this.props.direction === 'vertical';
					var animationConfig = {};
					if (!!NativeAnimatedModule && !_this.props.enableGestures && NavigationCardStackStyleInterpolator.canUseNativeDriver(isVertical)) {
						animationConfig.useNativeDriver = true;
					}
					return animationConfig;
				};return _this;
			}babelHelpers.createClass(NavigationCardStack, [{ key: 'componentWillMount', value: function componentWillMount() {
					this._render = this._render.bind(this);this._renderScene = this._renderScene.bind(this);
				} }, { key: 'render', value: function render() {
					return React.createElement(NavigationTransitioner, { configureTransition: this._configureTransition, navigationState: this.props.navigationState, render: this._render, style: this.props.style });
				} }, { key: '_render', value: function _render(props) {
					var _this2 = this;var renderHeader = this.props.renderHeader;

					var header = renderHeader ? React.createElement(View, null, renderHeader(props)) : null;

					var scenes = props.scenes.map(function (scene) {
						return _this2._renderScene(babelHelpers.extends({}, props, {
							scene: scene }));
					});

					return React.createElement(View, { style: styles.container }, React.createElement(View, {
						style: styles.scenes }, scenes), header);
				} }, { key: '_renderScene', value: function _renderScene(props) {
					var isVertical = this.props.direction === 'vertical';

					var style = isVertical ? NavigationCardStackStyleInterpolator.forVertical(props) : NavigationCardStackStyleInterpolator.forHorizontal(props);

					var panHandlers = null;

					if (this.props.enableGestures) {
						var panHandlersProps = babelHelpers.extends({}, props, {
							onNavigateBack: this.props.onNavigateBack,
							gestureResponseDistance: this.props.gestureResponseDistance });

						panHandlers = isVertical ? NavigationCardStackPanResponder.forVertical(panHandlersProps) : NavigationCardStackPanResponder.forHorizontal(panHandlersProps);
					}

					return React.createElement(NavigationCard, babelHelpers.extends({}, props, {
						key: 'card_' + props.scene.key,
						panHandlers: panHandlers,
						renderScene: this.props.renderScene,
						style: [style, this.props.cardStyle] }));
				} }]);return NavigationCardStack;
		}(React.Component);NavigationCardStack.propTypes = { cardStyle: View.propTypes.style, direction: PropTypes.oneOf([Directions.HORIZONTAL, Directions.VERTICAL]), gestureResponseDistance: PropTypes.number, enableGestures: PropTypes.bool, navigationState: NavigationPropTypes.navigationState.isRequired, onNavigateBack: PropTypes.func, renderHeader: PropTypes.func, renderScene: PropTypes.func.isRequired, style: View.propTypes.style };NavigationCardStack.defaultProps = { direction: Directions.HORIZONTAL, enableGestures: true };

		var styles = StyleSheet.create({
			container: {
				flex: 1,

				flexDirection: 'column-reverse' },

			scenes: {
				flex: 1 } });

		module.exports = NavigationCardStack;
	}, // Libraries/NavigationExperimental/NavigationTransitioner.js
	function (__inner_require__, exports, module) {
		var Animated = __inner_require__(12 /*Libraries/Animated/src/Animated.js*/);
		var Easing = __inner_require__(20 /*Libraries/Animated/src/Easing.js*/);
		var NavigationPropTypes = __inner_require__(116 /*Libraries/NavigationExperimental/NavigationPropTypes.js*/);
		var NavigationScenesReducer = __inner_require__(119 /*Libraries/NavigationExperimental/Reducer/NavigationScenesReducer.js*/);
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var StyleSheet = require('react-native@0.37/Libraries/StyleSheet/StyleSheet.js');
		var View = require('react-native@0.37/Libraries/Components/View/View.js');var PropTypes = React.PropTypes;

		var DefaultTransitionSpec = {
			duration: 250,
			easing: Easing.inOut(Easing.ease),
			timing: Animated.timing };var NavigationTransitioner = function (_React$Component) {
			babelHelpers.inherits(NavigationTransitioner, _React$Component);

			function NavigationTransitioner(props, context) {
				babelHelpers.classCallCheck(this, NavigationTransitioner);var _this = babelHelpers.possibleConstructorReturn(this, (NavigationTransitioner.__proto__ || Object.getPrototypeOf(NavigationTransitioner)).call(this, props, context));

				var layout = {
					height: new Animated.Value(0),
					initHeight: 0,
					initWidth: 0,
					isMeasured: false,
					width: new Animated.Value(0) };

				_this.state = {
					layout: layout,
					position: new Animated.Value(_this.props.navigationState.index),
					progress: new Animated.Value(1),
					scenes: NavigationScenesReducer([], _this.props.navigationState) };

				_this._prevTransitionProps = null;
				_this._transitionProps = buildTransitionProps(props, _this.state);return _this;
			}babelHelpers.createClass(NavigationTransitioner, [{ key: 'componentWillMount', value: function componentWillMount() {
					this._onLayout = this._onLayout.bind(this);
					this._onTransitionEnd = this._onTransitionEnd.bind(this);
				} }, { key: 'componentWillReceiveProps', value: function componentWillReceiveProps(nextProps) {
					var _this2 = this;
					var nextScenes = NavigationScenesReducer(this.state.scenes, nextProps.navigationState, this.props.navigationState);

					if (nextScenes === this.state.scenes) {
						return;
					}

					var nextState = babelHelpers.extends({}, this.state, {
						scenes: nextScenes });

					this._prevTransitionProps = this._transitionProps;
					this._transitionProps = buildTransitionProps(nextProps, nextState);var position = nextState.position,
					    progress = nextState.progress;

					var transitionUserSpec = nextProps.configureTransition ? nextProps.configureTransition(this._transitionProps, this._prevTransitionProps) : null;

					var transitionSpec = babelHelpers.extends({}, DefaultTransitionSpec, transitionUserSpec);var timing = transitionSpec.timing;
					delete transitionSpec.timing;

					progress.setValue(0);

					var animations = [timing(progress, babelHelpers.extends({}, transitionSpec, {
						toValue: 1 }))];

					if (nextProps.navigationState.index !== this.props.navigationState.index) {
						animations.push(timing(position, babelHelpers.extends({}, transitionSpec, {
							toValue: nextProps.navigationState.index })));
					}

					this.setState(nextState, function () {
						nextProps.onTransitionStart && nextProps.onTransitionStart(_this2._transitionProps, _this2._prevTransitionProps);

						Animated.parallel(animations).start(_this2._onTransitionEnd);
					});
				} }, { key: 'render', value: function render() {
					return React.createElement(View, {
						onLayout: this._onLayout,
						style: [styles.main, this.props.style] }, this.props.render(this._transitionProps, this._prevTransitionProps));
				} }, { key: '_onLayout', value: function _onLayout(event) {
					var _event$nativeEvent$la = event.nativeEvent.layout,
					    height = _event$nativeEvent$la.height,
					    width = _event$nativeEvent$la.width;
					if (this.state.layout.initWidth === width && this.state.layout.initHeight === height) {
						return;
					}
					var layout = babelHelpers.extends({}, this.state.layout, {
						initHeight: height,
						initWidth: width,
						isMeasured: true });

					layout.height.setValue(height);
					layout.width.setValue(width);

					var nextState = babelHelpers.extends({}, this.state, {
						layout: layout });

					this._transitionProps = buildTransitionProps(this.props, nextState);
					this.setState(nextState);
				} }, { key: '_onTransitionEnd', value: function _onTransitionEnd() {
					var _this3 = this;
					var prevTransitionProps = this._prevTransitionProps;
					this._prevTransitionProps = null;

					var nextState = babelHelpers.extends({}, this.state, {
						scenes: this.state.scenes.filter(isSceneNotStale) });

					this._transitionProps = buildTransitionProps(this.props, nextState);

					this.setState(nextState, function () {
						_this3.props.onTransitionEnd && _this3.props.onTransitionEnd(_this3._transitionProps, prevTransitionProps);
					});
				} }]);return NavigationTransitioner;
		}(React.Component);NavigationTransitioner.propTypes = { configureTransition: PropTypes.func, navigationState: NavigationPropTypes.navigationState.isRequired, onTransitionEnd: PropTypes.func, onTransitionStart: PropTypes.func, render: PropTypes.func.isRequired };

		function buildTransitionProps(props, state) {
			var navigationState = props.navigationState;var layout = state.layout,
			    position = state.position,
			    progress = state.progress,
			    scenes = state.scenes;

			return {
				layout: layout,
				navigationState: navigationState,
				position: position,
				progress: progress,
				scenes: scenes,

				scene: scenes.find(isSceneActive) };
		}

		function isSceneNotStale(scene) {
			return !scene.isStale;
		}

		function isSceneActive(scene) {
			return scene.isActive;
		}

		var styles = StyleSheet.create({
			main: {
				flex: 1 } });

		module.exports = NavigationTransitioner;
	}, // Libraries/NavigationExperimental/Reducer/NavigationScenesReducer.js
	function (__inner_require__, exports, module) {
		var invariant = require('fbjs@0.8/lib/invariant.js');
		var shallowEqual = require('fbjs@0.8/lib/shallowEqual.js');

		var SCENE_KEY_PREFIX = 'scene_';

		function compareKey(one, two) {
			var delta = one.length - two.length;
			if (delta > 0) {
				return 1;
			}
			if (delta < 0) {
				return -1;
			}
			return one > two ? 1 : -1;
		}

		function compareScenes(one, two) {
			if (one.index > two.index) {
				return 1;
			}
			if (one.index < two.index) {
				return -1;
			}

			return compareKey(one.key, two.key);
		}

		function areScenesShallowEqual(one, two) {
			return one.key === two.key && one.index === two.index && one.isStale === two.isStale && one.isActive === two.isActive && areRoutesShallowEqual(one.route, two.route);
		}

		function areRoutesShallowEqual(one, two) {
			if (!one || !two) {
				return one === two;
			}

			if (one.key !== two.key) {
				return false;
			}

			return shallowEqual(one, two);
		}

		function NavigationScenesReducer(scenes, nextState, prevState) {
			if (prevState === nextState) {
				return scenes;
			}

			var prevScenes = new Map();
			var freshScenes = new Map();
			var staleScenes = new Map();

			scenes.forEach(function (scene) {
				var key = scene.key;
				if (scene.isStale) {
					staleScenes.set(key, scene);
				}
				prevScenes.set(key, scene);
			});

			var nextKeys = new Set();
			nextState.routes.forEach(function (route, index) {
				var key = SCENE_KEY_PREFIX + route.key;
				var scene = {
					index: index,
					isActive: false,
					isStale: false,
					key: key,
					route: route };

				invariant(!nextKeys.has(key), 'navigationState.routes[' + index + '].key "' + key + '" conflicts with ' + 'another route!');

				nextKeys.add(key);

				if (staleScenes.has(key)) {

					staleScenes.delete(key);
				}
				freshScenes.set(key, scene);
			});

			if (prevState) {

				prevState.routes.forEach(function (route, index) {
					var key = SCENE_KEY_PREFIX + route.key;
					if (freshScenes.has(key)) {
						return;
					}
					staleScenes.set(key, {
						index: index,
						isActive: false,
						isStale: true,
						key: key,
						route: route });
				});
			}

			var nextScenes = [];

			var mergeScene = function mergeScene(nextScene) {
				var key = nextScene.key;
				var prevScene = prevScenes.has(key) ? prevScenes.get(key) : null;
				if (prevScene && areScenesShallowEqual(prevScene, nextScene)) {

					nextScenes.push(prevScene);
				} else {
					nextScenes.push(nextScene);
				}
			};

			staleScenes.forEach(mergeScene);
			freshScenes.forEach(mergeScene);

			nextScenes.sort(compareScenes);

			var activeScenesCount = 0;
			nextScenes.forEach(function (scene, ii) {
				var isActive = !scene.isStale && scene.index === nextState.index;
				if (isActive !== scene.isActive) {
					nextScenes[ii] = babelHelpers.extends({}, scene, {
						isActive: isActive });
				}
				if (isActive) {
					activeScenesCount++;
				}
			});

			invariant(activeScenesCount === 1, 'there should always be only one scene active, not %s.', activeScenesCount);

			if (nextScenes.length !== scenes.length) {
				return nextScenes;
			}

			if (nextScenes.some(function (scene, index) {
				return !areScenesShallowEqual(scenes[index], scene);
			})) {
				return nextScenes;
			}

			return scenes;
		}

		module.exports = NavigationScenesReducer;
	}, // Libraries/CustomComponents/NavigationExperimental/NavigationHeader.js
	function (__inner_require__, exports, module) {
		var React = require('react-native@0.37/Libraries/react-native/React.js');
		var ReactNative = require('react-native@0.37/Libraries/react-native/react-native.js');
		var NavigationHeaderTitle = __inner_require__(121 /*Libraries/CustomComponents/NavigationExperimental/NavigationHeaderTitle.js*/);
		var NavigationHeaderBackButton = __inner_require__(122 /*Libraries/CustomComponents/NavigationExperimental/NavigationHeaderBackButton.js*/);
		var NavigationPropTypes = __inner_require__(116 /*Libraries/NavigationExperimental/NavigationPropTypes.js*/);
		var NavigationHeaderStyleInterpolator = __inner_require__(123 /*Libraries/CustomComponents/NavigationExperimental/NavigationHeaderStyleInterpolator.js*/);
		var ReactComponentWithPureRenderMixin = require('react@15.3/lib/ReactComponentWithPureRenderMixin.js');var Animated = ReactNative.Animated,
		    Platform = ReactNative.Platform,
		    StyleSheet = ReactNative.StyleSheet,
		    View = ReactNative.View;

		var APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
		var STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;var PropTypes = React.PropTypes;var NavigationHeader = function (_React$Component) {
			babelHelpers.inherits(NavigationHeader, _React$Component);function NavigationHeader() {
				babelHelpers.classCallCheck(this, NavigationHeader);return babelHelpers.possibleConstructorReturn(this, (NavigationHeader.__proto__ || Object.getPrototypeOf(NavigationHeader)).apply(this, arguments));
			}babelHelpers.createClass(NavigationHeader, [{ key: 'shouldComponentUpdate', value: function shouldComponentUpdate(nextProps, nextState) {
					return ReactComponentWithPureRenderMixin.shouldComponentUpdate.call(this, nextProps, nextState);
				} }, { key: 'render', value: function render() {
					var _this2 = this;var _props = this.props,
					    scenes = _props.scenes,
					    style = _props.style,
					    viewProps = _props.viewProps;

					var scenesProps = scenes.map(function (scene) {
						var props = NavigationPropTypes.extractSceneRendererProps(_this2.props);
						props.scene = scene;
						return props;
					});

					var barHeight = this.props.statusBarHeight instanceof Animated.Value ? Animated.add(this.props.statusBarHeight, new Animated.Value(APPBAR_HEIGHT)) : APPBAR_HEIGHT + this.props.statusBarHeight;

					return React.createElement(Animated.View, babelHelpers.extends({ style: [styles.appbar, { height: barHeight }, style] }, viewProps), scenesProps.map(this._renderLeft, this), scenesProps.map(this._renderTitle, this), scenesProps.map(this._renderRight, this));
				} }, { key: '_renderLeft', value: function _renderLeft(props) {
					return this._renderSubView(props, 'left', this.props.renderLeftComponent, NavigationHeaderStyleInterpolator.forLeft);
				} }, { key: '_renderTitle', value: function _renderTitle(props) {
					return this._renderSubView(props, 'title', this.props.renderTitleComponent, NavigationHeaderStyleInterpolator.forCenter);
				} }, { key: '_renderRight', value: function _renderRight(props) {
					return this._renderSubView(props, 'right', this.props.renderRightComponent, NavigationHeaderStyleInterpolator.forRight);
				} }, { key: '_renderSubView', value: function _renderSubView(props, name, renderer, styleInterpolator) {
					var scene = props.scene,
					    navigationState = props.navigationState;var index = scene.index,
					    isStale = scene.isStale,
					    key = scene.key;

					var offset = navigationState.index - index;

					if (Math.abs(offset) > 2) {

						return null;
					}

					var subViewProps = babelHelpers.extends({}, props, { onNavigateBack: this.props.onNavigateBack });
					var subView = renderer(subViewProps);
					if (subView === null) {
						return null;
					}

					var pointerEvents = offset !== 0 || isStale ? 'none' : 'box-none';
					return React.createElement(Animated.View, {
						pointerEvents: pointerEvents,
						key: name + '_' + key,
						style: [styles[name], { marginTop: this.props.statusBarHeight }, styleInterpolator(props)] }, subView);
				} }]);return NavigationHeader;
		}(React.Component);NavigationHeader.defaultProps = { renderTitleComponent: function renderTitleComponent(props) {
				var title = String(props.scene.route.title || '');return React.createElement(NavigationHeaderTitle, null, title);
			}, renderLeftComponent: function renderLeftComponent(props) {
				if (props.scene.index === 0 || !props.onNavigateBack) {
					return null;
				}return React.createElement(NavigationHeaderBackButton, { onPress: props.onNavigateBack });
			}, renderRightComponent: function renderRightComponent(props) {
				return null;
			}, statusBarHeight: STATUSBAR_HEIGHT };NavigationHeader.propTypes = babelHelpers.extends({}, NavigationPropTypes.SceneRendererProps, { onNavigateBack: PropTypes.func, renderLeftComponent: PropTypes.func, renderRightComponent: PropTypes.func, renderTitleComponent: PropTypes.func, style: View.propTypes.style, statusBarHeight: PropTypes.number, viewProps: PropTypes.shape(View.propTypes) });NavigationHeader.HEIGHT = APPBAR_HEIGHT + STATUSBAR_HEIGHT;NavigationHeader.Title = NavigationHeaderTitle;NavigationHeader.BackButton = NavigationHeaderBackButton;

		var styles = StyleSheet.create({
			appbar: {
				alignItems: 'center',
				backgroundColor: Platform.OS === 'ios' ? '#EFEFF2' : '#FFF',
				borderBottomColor: 'rgba(0, 0, 0, .15)',
				borderBottomWidth: Platform.OS === 'ios' ? StyleSheet.hairlineWidth : 0,
				elevation: 4,
				flexDirection: 'row',
				justifyContent: 'flex-start' },

			title: {
				bottom: 0,
				left: APPBAR_HEIGHT,
				position: 'absolute',
				right: APPBAR_HEIGHT,
				top: 0 },

			left: {
				bottom: 0,
				left: 0,
				position: 'absolute',
				top: 0 },

			right: {
				bottom: 0,
				position: 'absolute',
				right: 0,
				top: 0 } });

		module.exports = NavigationHeader;
	}, // Libraries/CustomComponents/NavigationExperimental/NavigationHeaderTitle.js
	function (__inner_require__, exports, module) {
		var React = require('react@15.3/react.js');
		var ReactNative = require('react-native@0.37/Libraries/react-native/react-native.js');var Platform = ReactNative.Platform,
		    StyleSheet = ReactNative.StyleSheet,
		    View = ReactNative.View,
		    Text = ReactNative.Text;

		var NavigationHeaderTitle = function NavigationHeaderTitle(_ref) {
			var children = _ref.children,
			    style = _ref.style,
			    textStyle = _ref.textStyle,
			    viewProps = _ref.viewProps;return React.createElement(View, babelHelpers.extends({ style: [styles.title, style] }, viewProps), React.createElement(Text, { style: [styles.titleText, textStyle] }, children));
		};

		var styles = StyleSheet.create({
			title: {
				flex: 1,
				flexDirection: 'row',
				alignItems: 'center',
				marginHorizontal: 16 },

			titleText: {
				flex: 1,
				fontSize: 18,
				fontWeight: '500',
				color: 'rgba(0, 0, 0, .9)',
				textAlign: Platform.OS === 'ios' ? 'center' : 'left' } });

		NavigationHeaderTitle.propTypes = {
			children: React.PropTypes.node.isRequired,
			style: View.propTypes.style,
			textStyle: Text.propTypes.style };

		module.exports = NavigationHeaderTitle;
	}, // Libraries/CustomComponents/NavigationExperimental/NavigationHeaderBackButton.js
	function (__inner_require__, exports, module) {
		var React = require('react@15.3/react.js');
		var ReactNative = require('react-native@0.37/Libraries/react-native/react-native.js');var I18nManager = ReactNative.I18nManager,
		    Image = ReactNative.Image,
		    Platform = ReactNative.Platform,
		    StyleSheet = ReactNative.StyleSheet,
		    TouchableOpacity = ReactNative.TouchableOpacity;

		var NavigationHeaderBackButton = function NavigationHeaderBackButton(props) {
			return React.createElement(TouchableOpacity, { style: styles.buttonContainer, onPress: props.onPress }, React.createElement(Image, { style: styles.button, source: __inner_require__(-1 /*Libraries/CustomComponents/NavigationExperimental/assets/back-icon.png*/) }));
		};

		NavigationHeaderBackButton.propTypes = {
			onPress: React.PropTypes.func.isRequired };

		var styles = StyleSheet.create({
			buttonContainer: {
				flex: 1,
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'center' },

			button: {
				height: 24,
				width: 24,
				margin: Platform.OS === 'ios' ? 10 : 16,
				resizeMode: 'contain',
				transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }] } });

		module.exports = NavigationHeaderBackButton;
	}, // Libraries/CustomComponents/NavigationExperimental/NavigationHeaderStyleInterpolator.js
	function (__inner_require__, exports, module) {
		var I18nManager = __inner_require__(45 /*Libraries/ReactNative/I18nManager.js*/);

		function forLeft(props) {
			var position = props.position,
			    scene = props.scene;var index = scene.index;
			return {
				opacity: position.interpolate({
					inputRange: [index - 1, index, index + 1],
					outputRange: [0, 1, 0] }) };
		}

		function forCenter(props) {
			var position = props.position,
			    scene = props.scene;var index = scene.index;
			return {
				opacity: position.interpolate({
					inputRange: [index - 1, index, index + 1],
					outputRange: [0, 1, 0] }),

				transform: [{
					translateX: position.interpolate({
						inputRange: [index - 1, index + 1],
						outputRange: I18nManager.isRTL ? [-200, 200] : [200, -200] }) }] };
		}

		function forRight(props) {
			var position = props.position,
			    scene = props.scene;var index = scene.index;
			return {
				opacity: position.interpolate({
					inputRange: [index - 1, index, index + 1],
					outputRange: [0, 1, 0] }) };
		}

		module.exports = {
			forCenter: forCenter,
			forLeft: forLeft,
			forRight: forRight };
	}, // Libraries/NavigationExperimental/NavigationStateUtils.js
	function (__inner_require__, exports, module) {
		var invariant = require('fbjs@0.8/lib/invariant.js');

		var NavigationStateUtils = {

			get: function get(state, key) {
				return state.routes.find(function (route) {
					return route.key === key;
				}) || null;
			},

			indexOf: function indexOf(state, key) {
				return state.routes.map(function (route) {
					return route.key;
				}).indexOf(key);
			},

			has: function has(state, key) {
				return !!state.routes.some(function (route) {
					return route.key === key;
				});
			},

			push: function push(state, route) {
				invariant(NavigationStateUtils.indexOf(state, route.key) === -1, 'should not push route with duplicated key %s', route.key);

				var routes = state.routes.slice();
				routes.push(route);

				return babelHelpers.extends({}, state, {
					index: routes.length - 1,
					routes: routes });
			},

			pop: function pop(state) {
				if (state.index <= 0) {

					return state;
				}
				var routes = state.routes.slice(0, -1);
				return babelHelpers.extends({}, state, {
					index: routes.length - 1,
					routes: routes });
			},

			jumpToIndex: function jumpToIndex(state, index) {
				if (index === state.index) {
					return state;
				}

				invariant(!!state.routes[index], 'invalid index %s to jump to', index);

				return babelHelpers.extends({}, state, {
					index: index });
			},

			jumpTo: function jumpTo(state, key) {
				var index = NavigationStateUtils.indexOf(state, key);
				return NavigationStateUtils.jumpToIndex(state, index);
			},

			back: function back(state) {
				var index = state.index - 1;
				var route = state.routes[index];
				return route ? NavigationStateUtils.jumpToIndex(state, index) : state;
			},

			forward: function forward(state) {
				var index = state.index + 1;
				var route = state.routes[index];
				return route ? NavigationStateUtils.jumpToIndex(state, index) : state;
			},

			replaceAt: function replaceAt(state, key, route) {
				var index = NavigationStateUtils.indexOf(state, key);
				return NavigationStateUtils.replaceAtIndex(state, index, route);
			},

			replaceAtIndex: function replaceAtIndex(state, index, route) {
				invariant(!!state.routes[index], 'invalid index %s for replacing route %s', index, route.key);

				if (state.routes[index] === route) {
					return state;
				}

				var routes = state.routes.slice();
				routes[index] = route;

				return babelHelpers.extends({}, state, {
					index: index,
					routes: routes });
			},

			reset: function reset(state, routes, index) {
				invariant(routes.length && Array.isArray(routes), 'invalid routes to replace');

				var nextIndex = index === undefined ? routes.length - 1 : index;

				if (state.routes.length === routes.length && state.index === nextIndex) {
					var compare = function compare(route, ii) {
						return routes[ii] === route;
					};
					if (state.routes.every(compare)) {
						return state;
					}
				}

				invariant(!!routes[nextIndex], 'invalid index %s to reset', nextIndex);

				return babelHelpers.extends({}, state, {
					index: nextIndex,
					routes: routes });
			} };

		module.exports = NavigationStateUtils;
	}, // Libraries/Network/NetInfo.js
	function (__inner_require__, exports, module) {
		var Map = require('react-native@0.37/Libraries/vendor/core/Map.js');
		var NativeEventEmitter = require('react-native@0.37/Libraries/EventEmitter/NativeEventEmitter.js');
		var NativeModules = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js');
		var Platform = require('react-native@0.37/Libraries/Utilities/Platform.ios.js');
		var RCTNetInfo = NativeModules.NetInfo;

		var NetInfoEventEmitter = new NativeEventEmitter(RCTNetInfo);

		var DEVICE_CONNECTIVITY_EVENT = 'networkStatusDidChange';

		var _subscriptions = new Map();

		var _isConnected = void 0;
		if (Platform.OS === 'ios') {
			_isConnected = function _isConnected(reachability) {
				return reachability !== 'none' && reachability !== 'unknown';
			};
		} else if (Platform.OS === 'android') {
			_isConnected = function _isConnected(connectionType) {
				return connectionType !== 'NONE' && connectionType !== 'UNKNOWN';
			};
		}

		var _isConnectedSubscriptions = new Map();

		var NetInfo = {

			addEventListener: function addEventListener(eventName, handler) {
				var listener = NetInfoEventEmitter.addListener(DEVICE_CONNECTIVITY_EVENT, function (appStateData) {
					handler(appStateData.network_info);
				});

				_subscriptions.set(handler, listener);
				return {
					remove: function remove() {
						return NetInfo.removeEventListener(eventName, handler);
					} };
			},

			removeEventListener: function removeEventListener(eventName, handler) {
				var listener = _subscriptions.get(handler);
				if (!listener) {
					return;
				}
				listener.remove();
				_subscriptions.delete(handler);
			},

			fetch: function fetch() {
				return RCTNetInfo.getCurrentConnectivity().then(function (resp) {
					return resp.network_info;
				});
			},

			isConnected: {
				addEventListener: function addEventListener(eventName, handler) {
					var listener = function listener(connection) {
						handler(_isConnected(connection));
					};
					_isConnectedSubscriptions.set(handler, listener);
					NetInfo.addEventListener(eventName, listener);

					return {
						remove: function remove() {
							return NetInfo.isConnected.removeEventListener(eventName, handler);
						} };
				},

				removeEventListener: function removeEventListener(eventName, handler) {

					var listener = _isConnectedSubscriptions.get(handler);
					NetInfo.removeEventListener(eventName, listener);

					_isConnectedSubscriptions.delete(handler);
				},

				fetch: function fetch() {
					return NetInfo.fetch().then(function (connection) {
						return _isConnected(connection);
					});
				} },

			isConnectionExpensive: function isConnectionExpensive() {
				return Platform.OS === 'android' ? RCTNetInfo.isConnectionMetered() : Promise.reject(new Error('Currently not supported on iOS'));
			} };

		module.exports = NetInfo;
	}, // Libraries/PermissionsAndroid/PermissionsAndroid.js
	function (__inner_require__, exports, module) {
		var DialogManagerAndroid = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js').DialogManagerAndroid;
		var Permissions = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js').PermissionsAndroid;var PermissionsAndroid = function () {

			function PermissionsAndroid() {
				babelHelpers.classCallCheck(this, PermissionsAndroid);

				this.PERMISSIONS = {
					READ_CALENDAR: 'android.permission.READ_CALENDAR',
					WRITE_CALENDAR: 'android.permission.WRITE_CALENDAR',
					CAMERA: 'android.permission.CAMERA',
					READ_CONTACTS: 'android.permission.READ_CONTACTS',
					WRITE_CONTACTS: 'android.permission.WRITE_CONTACTS',
					GET_ACCOUNTS: 'android.permission.GET_ACCOUNTS',
					ACCESS_FINE_LOCATION: 'android.permission.ACCESS_FINE_LOCATION',
					ACCESS_COARSE_LOCATION: 'android.permission.ACCESS_COARSE_LOCATION',
					RECORD_AUDIO: 'android.permission.RECORD_AUDIO',
					READ_PHONE_STATE: 'android.permission.READ_PHONE_STATE',
					CALL_PHONE: 'android.permission.CALL_PHONE',
					READ_CALL_LOG: 'android.permission.READ_CALL_LOG',
					WRITE_CALL_LOG: 'android.permission.WRITE_CALL_LOG',
					ADD_VOICEMAIL: 'com.android.voicemail.permission.ADD_VOICEMAIL',
					USE_SIP: 'android.permission.USE_SIP',
					PROCESS_OUTGOING_CALLS: 'android.permission.PROCESS_OUTGOING_CALLS',
					BODY_SENSORS: 'android.permission.BODY_SENSORS',
					SEND_SMS: 'android.permission.SEND_SMS',
					RECEIVE_SMS: 'android.permission.RECEIVE_SMS',
					READ_SMS: 'android.permission.READ_SMS',
					RECEIVE_WAP_PUSH: 'android.permission.RECEIVE_WAP_PUSH',
					RECEIVE_MMS: 'android.permission.RECEIVE_MMS',
					READ_EXTERNAL_STORAGE: 'android.permission.READ_EXTERNAL_STORAGE',
					WRITE_EXTERNAL_STORAGE: 'android.permission.WRITE_EXTERNAL_STORAGE' };
			}babelHelpers.createClass(PermissionsAndroid, [{ key: 'checkPermission', value: function checkPermission(permission) {
					return Permissions.checkPermission(permission);
				} }, { key: 'requestPermission', value: function requestPermission(permission, rationale) {
					var shouldShowRationale;return regeneratorRuntime.async(function requestPermission$(_context) {
						while (1) {
							switch (_context.prev = _context.next) {case 0:
									if (!rationale) {
										_context.next = 6;break;
									}_context.next = 3;return regeneratorRuntime.awrap(Permissions.shouldShowRequestPermissionRationale(permission));case 3:
									shouldShowRationale = _context.sent;if (!shouldShowRationale) {
										_context.next = 6;break;
									}return _context.abrupt('return', new Promise(function (resolve, reject) {
										DialogManagerAndroid.showAlert(rationale, function () {
											return reject(new Error('Error showing rationale'));
										}, function () {
											return resolve(Permissions.requestPermission(permission));
										});
									}));case 6:
									return _context.abrupt('return', Permissions.requestPermission(permission));case 7:case 'end':
									return _context.stop();}
						}
					}, null, this);
				} }]);return PermissionsAndroid;
		}();

		PermissionsAndroid = new PermissionsAndroid();

		module.exports = PermissionsAndroid;
	}, // Libraries/PushNotificationIOS/PushNotificationIOS.js
	function (__inner_require__, exports, module) {
		var NativeEventEmitter = require('react-native@0.37/Libraries/EventEmitter/NativeEventEmitter.js');
		var RCTPushNotificationManager = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js').PushNotificationManager;
		var invariant = require('fbjs@0.8/lib/invariant.js');

		var PushNotificationEmitter = new NativeEventEmitter(RCTPushNotificationManager);

		var _notifHandlers = new Map();

		var DEVICE_NOTIF_EVENT = 'remoteNotificationReceived';
		var NOTIF_REGISTER_EVENT = 'remoteNotificationsRegistered';
		var NOTIF_REGISTRATION_ERROR_EVENT = 'remoteNotificationRegistrationError';
		var DEVICE_LOCAL_NOTIF_EVENT = 'localNotificationReceived';var PushNotificationIOS = function () {
			babelHelpers.createClass(PushNotificationIOS, null, [{ key: 'presentLocalNotification', value: function presentLocalNotification(details) {
					RCTPushNotificationManager.presentLocalNotification(details);
				} }, { key: 'scheduleLocalNotification', value: function scheduleLocalNotification(details) {
					RCTPushNotificationManager.scheduleLocalNotification(details);
				} }, { key: 'cancelAllLocalNotifications', value: function cancelAllLocalNotifications() {
					RCTPushNotificationManager.cancelAllLocalNotifications();
				} }, { key: 'setApplicationIconBadgeNumber', value: function setApplicationIconBadgeNumber(number) {
					RCTPushNotificationManager.setApplicationIconBadgeNumber(number);
				} }, { key: 'getApplicationIconBadgeNumber', value: function getApplicationIconBadgeNumber(callback) {
					RCTPushNotificationManager.getApplicationIconBadgeNumber(callback);
				} }, { key: 'cancelLocalNotifications', value: function cancelLocalNotifications(userInfo) {
					RCTPushNotificationManager.cancelLocalNotifications(userInfo);
				} }, { key: 'getScheduledLocalNotifications', value: function getScheduledLocalNotifications(callback) {
					RCTPushNotificationManager.getScheduledLocalNotifications(callback);
				} }, { key: 'addEventListener', value: function addEventListener(type, handler) {
					invariant(type === 'notification' || type === 'register' || type === 'registrationError' || type === 'localNotification', 'PushNotificationIOS only supports `notification`, `register`, `registrationError`, and `localNotification` events');

					var listener;
					if (type === 'notification') {
						listener = PushNotificationEmitter.addListener(DEVICE_NOTIF_EVENT, function (notifData) {
							handler(new PushNotificationIOS(notifData));
						});
					} else if (type === 'localNotification') {
						listener = PushNotificationEmitter.addListener(DEVICE_LOCAL_NOTIF_EVENT, function (notifData) {
							handler(new PushNotificationIOS(notifData));
						});
					} else if (type === 'register') {
						listener = PushNotificationEmitter.addListener(NOTIF_REGISTER_EVENT, function (registrationInfo) {
							handler(registrationInfo.deviceToken);
						});
					} else if (type === 'registrationError') {
						listener = PushNotificationEmitter.addListener(NOTIF_REGISTRATION_ERROR_EVENT, function (errorInfo) {
							handler(errorInfo);
						});
					}
					_notifHandlers.set(handler, listener);
				} }, { key: 'removeEventListener', value: function removeEventListener(type, handler) {
					invariant(type === 'notification' || type === 'register' || type === 'registrationError' || type === 'localNotification', 'PushNotificationIOS only supports `notification`, `register`, `registrationError`, and `localNotification` events');

					var listener = _notifHandlers.get(handler);
					if (!listener) {
						return;
					}
					listener.remove();
					_notifHandlers.delete(handler);
				} }, { key: 'requestPermissions', value: function requestPermissions(permissions) {
					var requestedPermissions = {};
					if (permissions) {
						requestedPermissions = {
							alert: !!permissions.alert,
							badge: !!permissions.badge,
							sound: !!permissions.sound };
					} else {
						requestedPermissions = {
							alert: true,
							badge: true,
							sound: true };
					}
					return RCTPushNotificationManager.requestPermissions(requestedPermissions);
				} }, { key: 'abandonPermissions', value: function abandonPermissions() {
					RCTPushNotificationManager.abandonPermissions();
				} }, { key: 'checkPermissions', value: function checkPermissions(callback) {
					invariant(typeof callback === 'function', 'Must provide a valid callback');

					RCTPushNotificationManager.checkPermissions(callback);
				} }, { key: 'getInitialNotification', value: function getInitialNotification() {
					return RCTPushNotificationManager.getInitialNotification().then(function (notification) {
						return notification && new PushNotificationIOS(notification);
					});
				} }]);

			function PushNotificationIOS(nativeNotif) {
				var _this = this;babelHelpers.classCallCheck(this, PushNotificationIOS);
				this._data = {};

				if (nativeNotif.remote) {

					Object.keys(nativeNotif).forEach(function (notifKey) {
						var notifVal = nativeNotif[notifKey];
						if (notifKey === 'aps') {
							_this._alert = notifVal.alert;
							_this._sound = notifVal.sound;
							_this._badgeCount = notifVal.badge;
						} else {
							_this._data[notifKey] = notifVal;
						}
					});
				} else {

					this._badgeCount = nativeNotif.applicationIconBadgeNumber;
					this._sound = nativeNotif.soundName;
					this._alert = nativeNotif.alertBody;
					this._data = nativeNotif.userInfo;
				}
			}babelHelpers.createClass(PushNotificationIOS, [{ key: 'getMessage', value: function getMessage() {

					return this._alert;
				} }, { key: 'getSound', value: function getSound() {
					return this._sound;
				} }, { key: 'getAlert', value: function getAlert() {
					return this._alert;
				} }, { key: 'getBadgeCount', value: function getBadgeCount() {
					return this._badgeCount;
				} }, { key: 'getData', value: function getData() {
					return this._data;
				} }]);return PushNotificationIOS;
		}();

		module.exports = PushNotificationIOS;
	}, // Libraries/Settings/Settings.ios.js
	function (__inner_require__, exports, module) {
		var RCTDeviceEventEmitter = require('react-native@0.37/Libraries/EventEmitter/RCTDeviceEventEmitter.js');
		var RCTSettingsManager = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js').SettingsManager;

		var invariant = require('fbjs@0.8/lib/invariant.js');

		var subscriptions = [];

		var Settings = {
			_settings: RCTSettingsManager && RCTSettingsManager.settings,

			get: function get(key) {
				return this._settings[key];
			},

			set: function set(settings) {
				this._settings = babelHelpers.extends(this._settings, settings);
				RCTSettingsManager.setValues(settings);
			},

			watchKeys: function watchKeys(keys, callback) {
				if (typeof keys === 'string') {
					keys = [keys];
				}

				invariant(Array.isArray(keys), 'keys should be a string or array of strings');

				var sid = subscriptions.length;
				subscriptions.push({ keys: keys, callback: callback });
				return sid;
			},

			clearWatch: function clearWatch(watchId) {
				if (watchId < subscriptions.length) {
					subscriptions[watchId] = { keys: [], callback: null };
				}
			},

			_sendObservations: function _sendObservations(body) {
				var _this = this;
				Object.keys(body).forEach(function (key) {
					var newValue = body[key];
					var didChange = _this._settings[key] !== newValue;
					_this._settings[key] = newValue;

					if (didChange) {
						subscriptions.forEach(function (sub) {
							if (sub.keys.indexOf(key) !== -1 && sub.callback) {
								sub.callback();
							}
						});
					}
				});
			} };

		RCTDeviceEventEmitter.addListener('settingsUpdated', Settings._sendObservations.bind(Settings));

		module.exports = Settings;
	}, // Libraries/Share/Share.js
	function (__inner_require__, exports, module) {
		var Platform = require('react-native@0.37/Libraries/Utilities/Platform.ios.js');var _require = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js'),
		    ActionSheetManager = _require.ActionSheetManager,
		    ShareModule = _require.ShareModule;
		var invariant = require('fbjs@0.8/lib/invariant.js');
		var processColor = require('react-native@0.37/Libraries/StyleSheet/processColor.js');var Share = function () {
			function Share() {
				babelHelpers.classCallCheck(this, Share);
			}babelHelpers.createClass(Share, null, [{ key: 'share', value: function share(content) {
					var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
					invariant(typeof content === 'object' && content !== null, 'Content must a valid object');

					invariant(typeof content.url === 'string' || typeof content.message === 'string', 'At least one of URL and message is required');

					invariant(typeof options === 'object' && options !== null, 'Options must be a valid object');

					if (Platform.OS === 'android') {
						invariant(!content.title || typeof content.title === 'string', 'Invalid title: title should be a string.');

						return ShareModule.share(content, options.dialogTitle);
					} else if (Platform.OS === 'ios') {
						return new Promise(function (resolve, reject) {
							ActionSheetManager.showShareActionSheetWithOptions(babelHelpers.extends({}, content, options, { tintColor: processColor(options.tintColor) }), function (error) {
								return reject(error);
							}, function (success, activityType) {
								if (success) {
									resolve({
										'action': 'sharedAction',
										'activityType': activityType });
								} else {
									resolve({
										'action': 'dismissedAction' });
								}
							});
						});
					} else {
						return Promise.reject(new Error('Unsupported platform'));
					}
				} }, { key: 'sharedAction', get: function get() {
					return 'sharedAction';
				} }, { key: 'dismissedAction', get: function get() {
					return 'dismissedAction';
				} }]);return Share;
		}();

		module.exports = Share;
	}, // Libraries/Components/TimePickerAndroid/TimePickerAndroid.ios.js
	function (__inner_require__, exports, module) {
		var TimePickerAndroid = {
			open: function open(options) {
				return regeneratorRuntime.async(function open$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {case 0:
								return _context.abrupt('return', Promise.reject({
									message: 'TimePickerAndroid is not supported on this platform.' }));case 1:case 'end':
								return _context.stop();}
					}
				}, null, this);
			} };

		module.exports = TimePickerAndroid;
	}, // Libraries/Vibration/Vibration.js
	function (__inner_require__, exports, module) {
		var RCTVibration = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js').Vibration;
		var Platform = require('react-native@0.37/Libraries/Utilities/Platform.ios.js');

		var _vibrating = false;
		var _id = 0;

		function vibrateByPattern(pattern) {
			var repeat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
			if (_vibrating) {
				return;
			}
			_vibrating = true;
			if (pattern[0] === 0) {
				RCTVibration.vibrate();
				pattern = pattern.slice(1);
			}
			if (pattern.length === 0) {
				_vibrating = false;
				return;
			}
			setTimeout(function () {
				return vibrateScheduler(++_id, pattern, repeat, 1);
			}, pattern[0]);
		}

		function vibrateScheduler(id, pattern, repeat, nextIndex) {
			if (!_vibrating || id !== _id) {
				return;
			}
			RCTVibration.vibrate();
			if (nextIndex >= pattern.length) {
				if (repeat) {
					nextIndex = 0;
				} else {
					_vibrating = false;
					return;
				}
			}
			setTimeout(function () {
				return vibrateScheduler(id, pattern, repeat, nextIndex + 1);
			}, pattern[nextIndex]);
		}

		var Vibration = {
			vibrate: function vibrate() {
				var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 400;var repeat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
				if (Platform.OS === 'android') {
					if (typeof pattern === 'number') {
						RCTVibration.vibrate(pattern);
					} else if (Array.isArray(pattern)) {
						RCTVibration.vibrateByPattern(pattern, repeat ? 0 : -1);
					} else {
						throw new Error('Vibration pattern should be a number or array');
					}
				} else {
					if (_vibrating) {
						return;
					}
					if (typeof pattern === 'number') {
						RCTVibration.vibrate();
					} else if (Array.isArray(pattern)) {
						vibrateByPattern(pattern, repeat);
					} else {
						throw new Error('Vibration pattern should be a number or array');
					}
				}
			},

			cancel: function cancel() {
				if (Platform.OS === 'ios') {
					_vibrating = false;
				} else {
					RCTVibration.cancel();
				}
			} };

		module.exports = Vibration;
	}, // Libraries/Vibration/VibrationIOS.ios.js
	function (__inner_require__, exports, module) {
		var RCTVibration = require('react-native@0.37/Libraries/BatchedBridge/NativeModules.js').Vibration;

		var invariant = require('fbjs@0.8/lib/invariant.js');

		var VibrationIOS = {

			vibrate: function vibrate() {
				invariant(arguments[0] === undefined, 'Vibration patterns not supported.');

				RCTVibration.vibrate();
			} };

		module.exports = VibrationIOS;
	}];
});