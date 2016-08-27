import asyncList from "../util/async-list";
import console from "../util/console";
import logPlugin from "./log-plugin/index";

const defaultPlugins = [
	logPlugin
];

export default function(configPlugins){
	var tasks = {};

	(configPlugins || defaultPlugins).forEach(plugin => {
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

						task.call({
							async: function(){
								isSync = false;

								return function(){
									callback();
								};
							}
						}, info);

						if(isSync){
							callback();
						}
					};
				})).complete(resolve);
			});
		}
	};
};