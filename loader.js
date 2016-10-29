/**
 * 模块加载器
 * loader.define
 * loader.use
 * loader.config
 * loader.version
 * require.async
 */
;(function(global, util){
	if(global.loader){
		return;
	}
	
	// 设置全局命名空间
	var loader = global.loader = {};
	
	// 配置
	var config = {
		// 加载根路径
		base: "",
		/**
		 * 合并分割符号
		 * 如：["!!", ","]
		 * 则：["a/b/c/d", "a/b/c/e", "a/b/m/n"] => "a/b!!c/d,c/e,m/n"
		 */
		comboSyntax: null,
		/**
		 * 文件依赖信息请求地址
		 */
		modParseUrl: ""
	};
	
	// var path2version = {};
	// var version2path = {};
	
	/**
	 * 模块列表
	 */
	var mods = {};
	var loadeds = {};
	var loadings = {};
	var waitings = [];
	
	// 返回模块
	function require(id){
		var factory = mods[id];

		if(!factory){
			return;
		}

		if(!factory.isInitialized){
			factory.exports = factory();
			factory.isInitialized = true;
		}

		return factory.exports;
	}

	function parseFactory(mods){
		return (function __inner_require__(id){
			var factory = mods[id];
			var module;
			
			if(!factory.isInitialized){
				mods[id] = module = {
					exports: {},
					isInitialized: true
				};
				factory(__inner_require__, module.exports, module);
			}

			return (module || factory).exports;
		})(0);
	}

	var devicePixelRatio = Math.min(3, window.devicePixelRatio || 1);
	/**
	 * 
	 */
	loader.define = function(project, path, version, factory, isStoreMod){
		var modPathId = [project, path].join("/");
		var modVersionId = [project, version].join("/");
		// 将模块存入本地
		if(util.store && !isStoreMod){
			util.store.set(modVersionId, {
				path: path,
				factory: factory
			});
		}
		// 
		mods[modPathId] = function(){
			var innerMods = factory(require, global, project, [config.base, modVersionId + ".js"].join("/"), [config.base, project].join("/"), config.base, devicePixelRatio);
			if(innerMods instanceof Array){
				return parseFactory(innerMods);
			}else{
				return innerMods;
			}
		};

		loadeds[modVersionId] = true;

		if(!isStoreMod){
			delete loadings[modVersionId];
			waitings = waitings.filter(function(waiting){
				waiting.ids = waiting.ids.filter(function(id){
					return !loadeds[id];
				});

				if(waiting.ids.length){
					return true;
				}else{
					waiting.callback(require);
					return false;
				}
			});
		}
	};

	function request(requestList){
		requestList.forEach(function(id){
			loadings[id] = true;
		});

		var url;
		if(requestList.length === 1){
			url = [config.base, requestList[0]].join("/");
		}else{
			// 多个文件按规则合并路径
			url = config.base + config.comboSyntax[0] + requestList.join(config.comboSyntax[1]);
		}

		util.request(url);
	}
	/**
	 * 
	 */
	loader.use = function(ids, callback){
		var loadingMods = [];

		var requestList = ids.map(function(id){
			return id.replace("__pixel_ratio__", devicePixelRatio);
		}).filter(function(id){
			if(loadeds[id]){
				return false;
			}else if(loadings[id]){
				loadingMods.push(id);
				return false;
			}

			var mod, modInfo;
			if(util.store){
				mod = util.store.get(id);
				if(mod){
					modInfo = util.parseModId(id);
					if(modInfo){
						loader.define(modInfo.project, mod.path, modInfo.version, mod.factory, true);
						return false;
					}
				}
			}

			return true;
		});

		if(requestList.length){
			waitings.push({
				ids: loadingMods.concat(requestList),
				callback: callback
			});

			request(requestList);
		}else{
			callback(require);
		}
	};

	function parseUrl(urls, callback){
		var count = urls.length;
		var list = [];
		if(count === 0){
			callback(list);
		}else{
			urls.forEach(function(url){
				util.jsonp(config.modParseUrl + "?url=" + url, url, function(_list){
					_list.forEach(function(item){
						if(list.indexOf(item) === -1){
							list.push(item);
						}
					});

					if(--count === 0){
						callback(list);
					}
				});
			});
		}
	}

	require.async = function(ids, callback){
		ids = ids.filter(function(id){
			return !mods[id];
		});
		
		parseUrl(ids, function(ids){
			loader.use(ids, callback);
		});
	};

	loader.require = require;
	
	/**
	 * 配置加载参数
	 */
	loader.config = function(_config){
		for(var key in _config){
			if(_config.hasOwnProperty(key)){
				config[key] = _config[key];
			}
		}
	};
	
	/**
	 * 配置版本号
	 * loader.version("modName", {
	 * 		"path": "1",
	 * 		"path": "2"
	 * })
	 */
	// loader.version = function(modName, versionHash){
	// 	var pathModId,
	// 		versionModId;
	// 	for(var path in versionHash){
	// 		pathModId = [modName, path].join("/");
	// 		versionModId = [modName, versionHash[path]].join("/");
	// 		path2version[pathModId] = versionModId + ".js";
	// 		version2path[versionModId] = pathModId;
	// 	}
	// };

	/**
	 * 本地存储
	 */
	loader.store = util.nativeStore;

	loader.jsonp = {};
	
	// 兼容seajs
	// global.seajs = global.loader;
	// global.mods = mods;
})(this, (function(){
	// 本地存储模块
	var store,
		win = window,
		localStorageName = 'localStorage',
		storage;
	
	if (localStorageName in win && win[localStorageName]) {
		storage = win[localStorageName];
		store = {
			get: function (key) {
				return storage.getItem(key);
			},
			set: function (key, val) {
				storage.setItem(key, val);
			},
			remove: function (key) {
				storage.removeItem(key);
			},
			size: function(){
				var size = 0;
				for(var i = 0, l = localStorage.length, key; i < l; i ++){
					key = localStorage.key(i);
					size += key.length;
					size += localStorage.getItem(key).length;
				}
			}
		};
	}
	
	function parseJson(data){
		try{
		    return ( new Function( "return " + data.replace(/^\s+|\s+$/g, "") ) )();
		}catch(e){
			return null;
		}
	}

	var ModVisitManage = (function(){
		var modManageKey = "mod-visit-manager";

		function getModManage(){
			var config = store.get(modManageKey);
			if(config && (config = JSON.parse(config))){
				return config;
			}else{
				return {};
			}
		}
		
		function setModManage(config){
			store.set(modManageKey, JSON.stringify(config));
		}

		// 获取当前相对于2015年1月1日所过去的天数
		function getNow(){
			return ((new Date() - new Date(2015, 0, 1)) / (24 * 3600 * 1000)) | 0;
		}

		return {
			// 更新模块访问时间
			update: function(id){
				var config = getModManage();
				config[id] = getNow();
				setModManage(config);
			},
			// 删除模块访问时间
			"delete": function(id){
				var config = getModManage();
				delete config[id];
				setModManage(config);
			},
			// 清除最后访问时间超过expires天的模块
			clear: function(expires){
				var config = getModManage();
				var now = getNow();
				for(var id in config){
					if(now - config[id] > expires){
						delete config[id];
						store.remove(id);
					}
				}
				setModManage(config);
			}
		};
	})();
	
	// 清除30天未访问的模块
	setTimeout(function(){
		ModVisitManage.clear(30);
	}, 5000);

	var ModVersionManage = (function(){
		var modManageKey = "mod-version-manager";

		function getModManage(){
			var config = store.get(modManageKey);
			if(config && (config = JSON.parse(config))){
				return config;
			}else{
				return {};
			}
		}
		
		function setModManage(config){
			store.set(modManageKey, JSON.stringify(config));
		}

		return {
			update: function(path, id){
				var config = getModManage();
				var lastId = config[path];
				if(lastId){
					if(lastId !== id){
						store.remove(lastId);
						ModVisitManage["delete"](lastId);
						config[path] = id;
						setModManage(config);
					}
				}else{
					config[path] = id;
					setModManage(config);
				}
			}
		};
	})();

	function noop(){}

	function parseModId(id){
		sepIndex = id.indexOf("/");
		if(sepIndex !== -1){
			return {
				project: id.substring(0, sepIndex),
				version: id.slice(sepIndex + 1)
			};
		}

		return null;
	}

	var doc = window.document;
	var head = doc.head || doc.getElementsByTagName("head")[0] || doc.documentElement;
	
	return {
		nativeStore: store || {
			get: noop,
			set: noop,
			remove: noop
		},
		parseModId: parseModId,
		store: store && false ? {
			get: function(id){
				var mod = store.get(id);
				if(mod){
					try{
						mod = JSON.parse(mod);
					}catch(e){
						mod = null;
					}

					if(mod){
						mod.factory = parseJson(mod.factory);

						if(mod.factory){
							ModVisitManage.update(id);
							return mod;
						}else{
							store.remove(id);
							ModVisitManage["delete"](id);
						}
					}
				}
			},
			set: function(id, mod){
				mod.factory = mod.factory.toString();
				store.set(id, JSON.stringify(mod));
				ModVisitManage.update(id);
				var modInfo = parseModId(id);
				if(modInfo){
					ModVersionManage.update([modInfo.project, mod.path].join("/"), modInfo.version);
				}
			}
		} : null,
		request: function(url){
			var script = doc.createElement("script");
			
			function onload(){
				script.onload = script.onerror = script.onreadystatechange = null;
				head.removeChild(script);
				script = null;
			}
			
			if("onload" in script){
				script.onload = onload;
				script.onerror = function(){
					//console.error(id + " load fail");
					onload();
				};
			}else{
				script.onreadystatechange = function(){
					if(/loaded|complete/.test(script.readyState)){
						onload();
					}
				};
			}
			
			script.async = true;

			script.src = url;

			head.appendChild(script);
		},
		jsonp: function(url, id, callback){
			loader.jsonp[id] = function(list){
				delete loader.jsonp[id];
				callback(list);
			};

			this.request(url);
		}
	};
})());

window.process = {
	env: {
		NODE_ENV: 'production'
		// NODE_ENV: "dev"
	}
};