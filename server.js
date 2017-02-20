// UTILS
var express = require("express");
var sessions = require("express-session");
var bodyParsers = require("body-parser");
var app = express();



// MUTUAL STUFF
app.use(bodyParsers.urlencoded());
app.use(sessions({
    secret:"superdupersecret"
}));



// PUBLIC
var publicReqHandler = express.Router();

publicReqHandler.post("/login.html", function(req, res){
    if(req.body.username == "john" && req.body.password == "B@dP@ssw0rd"){
        req.session.isLoggedIn = true;
        res.redirect("/home.html");
    } else {
        res.redirect("/login.html#invalid, try again");
    }
});

publicReqHandler.use(express.static("public"));



// PRIVATE
var privateReqHandler = express.Router();

privateReqHandler.all("*", function(req, res, next){
    if(req.session.isLoggedIn){
        next();
    } else {
        res.redirect("/login.html#login first!");
    }
});

publicReqHandler.get("/logout", function(req, res){
    req.session.destroy();
    res.redirect("/login.html#you are logged out");
});

privateReqHandler.use(express.static("private"));



// FIRE IT UP!
app.use(publicReqHandler);
app.use(privateReqHandler);
var port = process.env.PORT;
app.listen(port);