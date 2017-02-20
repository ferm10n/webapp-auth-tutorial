var express = require("express");
var app = express();

var staticHandler = express.static("public");
var publicReqHandler = express.Router();
publicReqHandler.use(staticHandler);

app.use(publicReqHandler);

var port = process.env.PORT;
app.listen(port);