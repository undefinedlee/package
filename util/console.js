require("colors");

export default {
	log: function(info){
		console.log(info);
	},
	error: function(info){
		console.log(info.red);
	},
	success: function(info){
		console.log(info.green);
	},
	warn: function(info){
		console.log(info.yellow);
	},
	info: function(info){
		console.log(info.blue);
	},
	title: function(info){
		info = "==========" + info + "==========";
		console.log(info.bold);
	}
}