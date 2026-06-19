const express = require("express");
const app = express();
const part = process.env.PORT || 6700;
//to tell app where static files - html/css/js are stored
app.use(express.static("frontend1"));
app.listen(3000, function(){
    console.log("App running on http://localhost:3000");

});