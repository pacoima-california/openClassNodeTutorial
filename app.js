

var url = require("url");

var http = require('http');
function serverCreation(req, res){
  var page = url.parse(req.url).pathname;
  console.log(page); 

  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("hello world");
  res.end();
}
var server = http.createServer(serverCreation);


server.listen(8080);