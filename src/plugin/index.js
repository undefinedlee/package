import console from "cli-console";
import utils from "node-pearls";

export default function(configPlugins){
	var tasks = {};
	
	(configPlugins || []).forEach(plugin => {
		var params;
		if(typeof plugin === "object"){
			params = plugin.params || {};
			plugin = plugin.plugin;
		}else{
			params = {};
		}

		plugin.call({
			plugin(pointName, task){
				if(!tasks[pointName]){
					tasks[pointName] = [];
				}

				task.pluginName = plugin.$name;

				tasks[pointName].push(task);
			},
			params
		});
	});

	return {
		task: function(pointName, info){
			if(!tasks[pointName]){
				return Promise.resolve();
			}

			return new Promise(function(resolve, reject){
				utils.pipe(tasks[pointName].map(task => {
					return function(){
						try{
							return task.call(this, info, info.customerInfo);
						}catch(e){
							console.error("插件[" + (task.pluginName || "anonymous") + "]在'" + pointName + "'时运行报错");
							console.log(e);
						}
					};
				})).start().end(resolve);
			});
		}
	};
};