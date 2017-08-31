import * as babel from "babel-core";
import console from "cli-console";

// require(string)
function isRequire(path){
    var node = path.node;

    return node.callee.type === "Identifier"
            && node.callee.name === "require"
            && node.arguments[0]
            && node.arguments[0].type === "StringLiteral"
            && !path.scope.hasBinding("require");
}

// require.async(string) or require.ensure(string)
function isAsyncRequire(path){
    var node = path.node;

    return node.callee.type === "MemberExpression"
            && node.callee.property.type === "Identifier"
            && (node.callee.property.name === "async" || node.callee.property.name === "ensure")
            && node.callee.object.type === "Identifier"
            && node.callee.object.name === "require"
            && node.arguments[0]
            && (
                node.arguments[0].type === "StringLiteral"
                || node.arguments[0].type === "ArrayExpression"
                && node.arguments[0].elements.every(element => element.type === "StringLiteral")
            )
            && node.arguments[1]
            && !path.scope.hasBinding("require");
}

// 根据modId的类型，生成相应的节点
function createModId (modId) {
    switch(typeof modId){
        case "string":
            return babel.types.StringLiteral(modId);
        case "number":
            return babel.types.NumericLiteral(modId);
    }
    throw new Error("modId'" + modId + "'不是有效的类型");
}
// 向节点添加注释
function addComments (node, comments) {
    if(!comments.trim()){
        return;
    }

    if(!node.trailingComments){
        node.trailingComments = [];
    }

    comments.split("\n").forEach(function(comment){
        node.trailingComments.push(babel.types.StringLiteral(comment));
    });
}

export default {
    // 获取code依赖的模块
    find(code){
        var deps = [];
        
        function push(item){
            var findItem = deps.find(dep => dep.value === item.value);
            if(!findItem){
                deps.push(item);
            }else if(findItem.isAsync && !item.isAsync){
                findItem.isAsync = false;
            }
        }

        try{
            // 提取依赖
            babel.transform(code, {
                compact: false,
                plugins: [
                    function ({ types: t }) {
                        return {
                            visitor: {
                                CallExpression(path){
                                    let node = path.node;
                                    if(isRequire(path)){
                                        if(
                                            // 这里只判断嵌套在异步require内的同步require也为异步
                                            // 其实严谨一点的话，应该判断所有父级的异步require是否包含当前同步require的模块
                                            !path.findParent(
                                                path => path.isCallExpression() && isAsyncRequire(path)
                                            )
                                        ){
                                            // 同步依赖
                                            push({
                                                isAsync: false,
                                                value: node.arguments[0].value
                                            });
                                        }
                                    }else if(isAsyncRequire(path)){
                                        // 异步依赖
                                        if(node.arguments[0].type === "StringLiteral"){
                                            push({
                                                isAsync: true,
                                                value: node.arguments[0].value
                                            });
                                        }else{
                                            node.arguments[0].elements.forEach(element => push({
                                                isAsync: true,
                                                value: element.value
                                            }));
                                        }
                                    }
                                }
                            }
                        };
                    }
                ]
            });
        }catch(e){
            console.error("find deps error");
            console.log(e);
        }

        return deps;
    },
    // 改写code依赖的模块
    replace(code, fn){
        if(typeof fn === "object"){
            let obj = fn;
            fn = function({
                value: key
            }){
                var value = obj[key];
                if(typeof value === "object"){
                    return value;
                }else if(typeof value !== "undefined"){
                    return {
                        value
                    };
                }
            };
        }

        try{
            // 提取依赖
            code = babel.transform(code, {
                compact: false,
                sourceMaps: process.env.SM ? "inline" : false,
                plugins: [
                    function ({ types: t }) {

                        return {
                            visitor: {
                                CallExpression: {
                                    enter(path){
                                        let node = path.node;
                                        
                                        if(isRequire(path)){
                                            // 
                                            let modInfo = fn({
                                                isAsync: path.findParent(
                                                    path => path.isCallExpression() && isAsyncRequire(path)
                                                ),
                                                value: node.arguments[0].value
                                            });

                                            if(!modInfo){
                                                return;
                                            }

                                            if(modInfo instanceof Array){
                                                if(modInfo.some(item => item.isInner)){
                                                    path.replaceWith(t.ArrayExpression(modInfo.map(function(modInfo){
                                                        var modId = createModId(modInfo.value);
                                                        if(modInfo.comments){
                                                            addComments(modId, modInfo.comments);
                                                        }

                                                        return t.CallExpression(
                                                                t.Identifier(modInfo.isInner ? "__inner_require__" : "require"),
                                                                [
                                                                    modId
                                                                ]
                                                            );
                                                    })));
                                                }else{
                                                    node.arguments[0] = t.ArrayExpression(modInfo.map(function(modInfo){
                                                        var modId = createModId(modInfo.value);
                                                        if(modInfo.comments){
                                                            addComments(modId, modInfo.comments);
                                                        }
                                                        return modId;
                                                    }));
                                                }
                                                return;
                                            }

                                            if(typeof modInfo.value === "undefined" || modInfo.value === null){
                                                path.replaceWith(t.NullLiteral());
                                                return;
                                            }
                                            
                                            // 修改require的模块ID
                                            node.arguments[0] = createModId(modInfo.value);
                                            // 修改require的方法名
                                            if(modInfo.isInner){
                                                node.callee.name = "__inner_require__";
                                            }
                                            // 添加注释
                                            if(modInfo.comments){
                                                addComments(node.arguments[0], modInfo.comments);
                                            }
                                        }else if(isAsyncRequire(path)){
                                            let transModId = function(info){
                                                var modId = createModId(info.value);

                                                if(info.comments){
                                                    addComments(modId, info.comments);
                                                }

                                                if(info.isInner){
                                                    return t.CallExpression(
                                                        t.Identifier("__inner_require__"),
                                                        [
                                                            modId
                                                        ]
                                                    );
                                                }

                                                return modId;
                                            }

                                            if(node.arguments[0].type === "StringLiteral"){
                                                let modInfo = fn({
                                                    isAsync: true,
                                                    value: node.arguments[0].value
                                                });
                                                
                                                if(!modInfo){
                                                    return;
                                                }

                                                if(modInfo instanceof Array){
                                                    node.arguments[0] = t.ArrayExpression(modInfo.map(item => transModId(item)));
                                                }else{
                                                    node.arguments[0] = transModId(modInfo);
                                                }
                                            }else{
                                                let elements = [];
                                                node.arguments[0].elements.forEach(element => {
                                                    let modInfo = fn({
                                                        isAsync: true,
                                                        value: element.value
                                                    });
                                                
                                                    if(!modInfo){
                                                        return;
                                                    }

                                                    if(modInfo instanceof Array){
                                                        elements = elements.concat(modInfo.map(item => transModId(item)));
                                                    }else{
                                                        elements.push(transModId(modInfo));
                                                    }
                                                });
                                                node.arguments[0].elements = elements;
                                            }
                                        }
                                    }
                                }
                            }
                        };
                    }
                ]
            }).code;
        }catch(e){
            console.error("replace deps error");
            console.log(e);
            return "";
        }

        return code;
    }
}