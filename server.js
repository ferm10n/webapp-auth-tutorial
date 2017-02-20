var express = require("express");
var app = express();

var staticHandler = express.static("public");

app.use(staticHandler);

var port = process.env.PORT;
app.listen(port);