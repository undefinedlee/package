import console from "../../util/console";
import uglify from "uglify-js";

export default function(){
	this.plugin("before-write-bundle", function(info){
		return uglify.minify(info.content, {
	    	fromString: true
	    }).code;
	});
}