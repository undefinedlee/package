import path from "path";
import pack from "../index";
import packageReactNative from "../../package-react-native/index";

pack("/Users/lifan/work-test/sss3/rn", null, null, function(){
}, {
	config: {
		entry: [
			"index.ios.js",
			"build/views/**/!(*-css|*-html).js"
		],
		output: path.join(__dirname, "sss3"),
		plugins: [packageReactNative("ios")]
	}
});