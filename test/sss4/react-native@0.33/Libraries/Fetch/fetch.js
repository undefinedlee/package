loader.define("react-native@0.33/Libraries/Fetch/fetch.js", ["whatwg-fetch@1/fetch.js"], function (require, global, __project, __filename, __dirname, __base, __pixel_ratio) {

	return [
	// Libraries/Fetch/fetch.js
	function (__inner_require__, exports, module) {
		require('whatwg-fetch@1/fetch.js');

		module.exports = { fetch: fetch, Headers: Headers, Request: Request, Response: Response };
	}];
});