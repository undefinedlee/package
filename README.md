# package
模块化打包

```javascript
import bundle from "enjoy-bundle";

bundle({
    // 项目根目录
    root: "",
    // 打包入口（支持glob语法）
    entries: [],
    // 源代码目录相对于根目录
    relativePath: "",
    // 打包输出地址
    output: "",
    // 要打包项目的版本规则
    versionRule: "",
    // 是否对文件做内聚
    isCohesion: true,
    // 各种文件对应的加载器
    loaders: [],
    // 打包时替换对应文件
    loaderHooks: {
        file: []
    },
    // 查找文件时后缀的补全顺序
    extensions: [],
    // 打包时忽略的项目
    ignoreProjects: [],
    // 插件
    plugins: [],
    // 预设条件
    presets: [],
    // 是否打包依赖
    isBundleDeps: true,
    // 依赖分析器，需要实现find,replace两个方法
    depsAnalyzer: null
}).then(function(){
    // 打包完成
});
```