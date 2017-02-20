// UTILS
var express = require("express");
var sessions = require("express-session");
var app = express();


// MUTUAL STUFF
app.use(sessions({
    secret:"superdupersecret"
}));


// PUBLIC
var publicReqHandler = express.Router();
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
privateReqHandler.use(express.static("private"));


// FIRE IT UP!
app.use(publicReqHandler);
app.use(privateReqHandler);
var port = process.env.PORT;
app.listen(port);