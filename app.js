var http = require('http');
function serverCreation(req, res){
  res.writeHead(200);
  res.end("hello world");
}
var server = http.createServer(serverCreation);

server.listen(8080);