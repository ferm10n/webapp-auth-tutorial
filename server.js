var express = require("express");
var app = express();

function requestHandler(requestDetails, response){
    response.write("Hello");
    response.end();
}

app.get("*", requestHandler);

var port = process.env.PORT;
app.listen(port);