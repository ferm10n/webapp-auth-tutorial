// UTILITIES
var express = require("express");
var sessions = require("express-session");
var bodyParsers = require("body-parser");
var app = express();



// MUTUAL STUFF
app.use(bodyParsers.urlencoded());
app.use(sessions({
    secret:"legit_password"
}));



// PUBLIC STUFF
var publicReqHandler = express.Router();
publicReqHandler.use(express.static("public"));

publicReqHandler.post("/login", function tryLogin(req, res){
    var username = req.body.username;
    var password = req.body.password;
    
    if(username == "john" && password == "B@dP@ssw0rd") {
        req.session.username = username;
        res.redirect("/home.html");
    } else {
        res.redirect("/login.html#invald, try again");
    }
});




// PRIVATE STUFF
var privateReqHandler = express.Router();

privateReqHandler.all("*", function enforcer(req, res, next){
    if(req.session.username) {
        next();
    } else {
        res.redirect("/login.html#you must login first");
    }
});

privateReqHandler.get("/logout", function logoutHandler(req, res){
    req.session.destroy();
    res.redirect("/login.html");
});

privateReqHandler.use(express.static("private"));




// FIRE IT UP!
var port = process.env.PORT;
app.use(publicReqHandler);
app.use(privateReqHandler);
app.listen(port);

console.log("IT'S... ALIIIIIIVEEEE!!!!!");