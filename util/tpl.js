export default process.env.SM ? require('./source-map-generator').overWriteTlp : function(tpl, data) {
    return tpl.replace(/#([a-zA-Z0-9\-\_]+)#/g, function(all, key) {
        return data[key] || "";
    });
};
