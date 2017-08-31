require("./index.css");
var html = require("./index.html");
var item = require("./Item");
// var calendar = require("../../components/calendar");

document.body.innerHTML = html + item;

require.async(["../../components/calendar"], function(){
    console.log("calendar ready");
});