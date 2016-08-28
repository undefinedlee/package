import asyncList from "../util/async-list";
import console from "../util/console";
import logPlugin from "./log-plugin/index";
import minifyPlugin from "./minify-plugin/index";

const defaultPluginsHash = {
	"log": logPlugin,
	"min": minifyPlugin
};

const defaultPlugins = [
	"log"
	,"min"
];

export default function(configPlugins){
	var tasks = {};

	(configPlugins || defaultPlugins).map(plugin => {
		if(typeof plugin === "string"){
			return defaultPluginsHash[plugin] || function(){};
		}
	}).forEach(plugin => {
		plugin.call({
			plugin(pointName, task){
				if(!tasks[pointName]){
					tasks[pointName] = [];
				}

				tasks[pointName].push(task);
			}
		});
	});

	return {
		task: function(pointName, info){
			// console.log(pointName);
			if(!tasks[pointName]){
				return Promise.resolve();
			}

			return new Promise(function(resolve, reject){
				asyncList(tasks[pointName].map(task => {
					return function(callback){
						var isSync = true;

						var result = task.call({
							async: function(){
								isSync = false;

								return function(result){
									callback(result);
								};
							}
						}, info);

						if(isSync){
							callback(result);
						}
					};
				})).complete(function(...results){
					// 暂时这么写，对于多插件，会有问题
					resolve(results.find(result => result));
				});
			});
		}
	};
};