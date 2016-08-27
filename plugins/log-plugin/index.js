import console from "../../util/console";

export default function(){
	this.plugin("init-loader", function(info){

	});
	this.plugin("start", function(info){
		console.info("start");
	});
	this.plugin("parse-entries", function(info){
		console.info("parse entries");
	});
	this.plugin("before-loader", function(info){
		console.info(`load file: ${info.file}`);
	});
	this.plugin("after-loader", function(info){
		console.info("load complete");
	});
	this.plugin("loader-complete", function(info){
		console.info("all load complete");
	});
	this.plugin("parse-single", function(info){
		console.info("parse single");
	});
	this.plugin("before-bundle", function(info){
		console.info(`bundle file: info.bundleFile`);
	});
	this.plugin("bundle-mods", function(info){
		
	});
	this.plugin("after-bundle", function(info){
		console.info("bundle complete");
	});
	this.plugin("bundle-complete", function(info){
		console.info("all bundle complete");
	});
	this.plugin("complete", function(info){
		
	});
}