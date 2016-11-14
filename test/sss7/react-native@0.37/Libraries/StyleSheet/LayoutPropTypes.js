loader.define("react-native@0.37/Libraries/StyleSheet/LayoutPropTypes.js", ["react-native@0.37/Libraries/react-native/React.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/StyleSheet/LayoutPropTypes.js
	function (__inner_require__, exports, module) {
		var ReactPropTypes = require('react-native@0.37/Libraries/react-native/React.js').PropTypes;

		var LayoutPropTypes = {

			width: ReactPropTypes.number,

			height: ReactPropTypes.number,

			top: ReactPropTypes.number,

			left: ReactPropTypes.number,

			right: ReactPropTypes.number,

			bottom: ReactPropTypes.number,

			minWidth: ReactPropTypes.number,

			maxWidth: ReactPropTypes.number,

			minHeight: ReactPropTypes.number,

			maxHeight: ReactPropTypes.number,

			margin: ReactPropTypes.number,

			marginVertical: ReactPropTypes.number,

			marginHorizontal: ReactPropTypes.number,

			marginTop: ReactPropTypes.number,

			marginBottom: ReactPropTypes.number,

			marginLeft: ReactPropTypes.number,

			marginRight: ReactPropTypes.number,

			padding: ReactPropTypes.number,

			paddingVertical: ReactPropTypes.number,

			paddingHorizontal: ReactPropTypes.number,

			paddingTop: ReactPropTypes.number,

			paddingBottom: ReactPropTypes.number,

			paddingLeft: ReactPropTypes.number,

			paddingRight: ReactPropTypes.number,

			borderWidth: ReactPropTypes.number,

			borderTopWidth: ReactPropTypes.number,

			borderRightWidth: ReactPropTypes.number,

			borderBottomWidth: ReactPropTypes.number,

			borderLeftWidth: ReactPropTypes.number,

			position: ReactPropTypes.oneOf(['absolute', 'relative']),

			flexDirection: ReactPropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),

			flexWrap: ReactPropTypes.oneOf(['wrap', 'nowrap']),

			justifyContent: ReactPropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around']),

			alignItems: ReactPropTypes.oneOf(['flex-start', 'flex-end', 'center', 'stretch']),

			alignSelf: ReactPropTypes.oneOf(['auto', 'flex-start', 'flex-end', 'center', 'stretch']),

			overflow: ReactPropTypes.oneOf(['visible', 'hidden', 'scroll']),

			flex: ReactPropTypes.number,
			flexGrow: ReactPropTypes.number,
			flexShrink: ReactPropTypes.number,
			flexBasis: ReactPropTypes.number,

			zIndex: ReactPropTypes.number };

		module.exports = LayoutPropTypes;
	}];
});