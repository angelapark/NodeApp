// add http module
var http = require('http');

// create a server
var myServer = http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type" : "text/html"});
  response.write("Hi Low");
  response.end();
});

myServer.listen(3000);
