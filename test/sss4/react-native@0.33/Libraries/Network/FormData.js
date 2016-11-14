loader.define("react-native@0.33/Libraries/Network/FormData.js", [], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Network/FormData.js
	function (__inner_require__, exports, module) {
		var FormData = function () {

			function FormData() {
				babelHelpers.classCallCheck(this, FormData);
				this._parts = [];
			}babelHelpers.createClass(FormData, [{ key: 'append', value: function append(key, value) {

					this._parts.push([key, value]);
				} }, { key: 'getParts', value: function getParts() {
					return this._parts.map(function (_ref) {
						var _ref2 = babelHelpers.slicedToArray(_ref, 2),
						    name = _ref2[0],
						    value = _ref2[1];
						var contentDisposition = 'form-data; name="' + name + '"';

						var headers = { 'content-disposition': contentDisposition };

						if (typeof value === 'object') {
							if (typeof value.name === 'string') {
								headers['content-disposition'] += '; filename="' + value.name + '"';
							}
							if (typeof value.type === 'string') {
								headers['content-type'] = value.type;
							}
							return babelHelpers.extends({}, value, { headers: headers, fieldName: name });
						}

						return { string: String(value), headers: headers, fieldName: name };
					});
				} }]);return FormData;
		}();

		module.exports = FormData;
	}];
});