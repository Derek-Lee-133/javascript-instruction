const http = require("http");

let server = http.createServer(function(request, response) {
console.log("Got request", request.url);
response.write("what up FOOL!");
response.end();
});

server.listen(3000);