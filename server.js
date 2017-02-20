var express = require("express");
var app = express();

var publicReqHandler = express.Router();
publicReqHandler.use(express.static("public"));

var privateReqHandler = express.Router();
privateReqHandler.use(express.static("private"));

app.use(publicReqHandler);
app.use(privateReqHandler);

var port = process.env.PORT;
app.listen(port);