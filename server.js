var express = require("express");
var app = express();

app.get("/login.html", function(req, res){
    res.write("login page");
    res.end();
});

app.get("/home.html", function(req, res){
    res.write("home page");
    res.end();
});

var port = process.env.PORT;
app.listen(port);