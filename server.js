var http = require("http");

function requestHandler(requestDetails, response){
    response.write("Hello");
    response.end();
}

var server = http.createServer(requestHandler);

var port = process.env.PORT;
server.listen(port);