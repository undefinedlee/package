/**
 * 模块加载器
 * loader.define
 * loader.use
 * loader.config
 * loader.version
 * require.async
 */
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

var devicePixelRatio = 2;
/**
 * 
 */
loader.define = function(project, path, version, factory, isStoreMod){
  var modPathId = [project, path].join("/");
  var modVersionId = [project, version].join("/");
  // 
  mods[modPathId] = function(){
    var innerMods = factory(require, global, project, [config.base, modVersionId + ".js"].join("/"), [config.base, project].join("/"), config.base, devicePixelRatio);
    if(innerMods instanceof Array){
      return parseFactory(innerMods);
    }else{
      return innerMods;
    }
  };
};

loader.require = require;