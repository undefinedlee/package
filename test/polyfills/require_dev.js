/**
 * 模块加载器
 * loader.define
 * loader.use
 * loader.config
 * loader.version
 * require.async
 */
if(!global.loader){
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

var loadings = {};

function request(id, callback){}

require.async = function(ids, callback){
  if(typeof ids === "string"){
    ids = [ids];
  }

  function ready(){
    callback && callback.apply(global, ids.map(function(id){
      return require(id);
    }));
  }

  var _ids = ids.filter(function(id){
    if(!mods[id]){
      if(!loadings[id]){
        loadings[id] = [];
        request(id, function(){
          loadings[id].forEach(function(fn){
            fn(id);
          });
          delete loadings[id];
        });
      }
      loadings[id].push(function(id){
        if(!(_ids = _ids.filter(function(_id){
          return _id !== id;
        })).length){
          ready();
        }
      });
      return true;
    }
  });

  if(!_ids.length){
    ready();
  }
};

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

var devicePixelRatio = 2;
/**
 * 
 */
// loader.define = function(project, path, version, factory, isStoreMod){
//   var modPathId = path ? [project, path].join("/") : project;
//   var modVersionId = [project, version].join("/");
//   // 
//   mods[modPathId] = function(){
//     var innerMods = factory(require, global, project, [config.base, modVersionId + ".js"].join("/"), [config.base, project].join("/"), config.base, devicePixelRatio);
//     if(innerMods instanceof Array){
//       return parseFactory(innerMods);
//     }else{
//       return innerMods;
//     }
//   };
// };
global.__d = loader.define = function(id, deps, factory){
  var project = "";

  if(arguments.length === 2){
    factory = deps;
    deps = [];
  }else{
    project = id.split("/")[0];
  }
  // 
  mods[id] = function(){
    var innerMods = factory(require, global, project, null, [config.base, project].join("/"), config.base, devicePixelRatio);
    if(innerMods instanceof Array){
      return parseFactory(innerMods);
    }else{
      return innerMods;
    }
  };
};


loader.require = require;

var nativeMessages = {};
global.NativeMessage = {
  emit: function(messageName, e){
    if(nativeMessages[messageName]){
      nativeMessages[messageName].forEach(function(fn){
        fn(null, e);
      });
    }
  }
};
global.onNativeMessage = function(messageName, callback){
  if(!nativeMessages[messageName]){
    nativeMessages[messageName] = [];
  }

  nativeMessages[messageName].push(callback);
};

global.__loadNativeModules = function(nativeModules){
  // global.onNativeMessage("load-business", function(err, msg){
  //   nativeModules.ElongReactPackage.readFile([msg.value], function(err, code){
  //     (new Function(code))();
  //   });
  // });
};

global.caches = {};
global.readFile = function(file, callback){
  callback(null, global.caches[file]);
};
global.onNativeMessage("load-business", function(err, msg){
  global.readFile(msg.value, function(err, code){
    (new Function(code))();
  });
});
}
