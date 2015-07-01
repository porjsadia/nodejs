//This simple web server written in Node responds with "Hello World" for every request.

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(30025, '127.0.0.1');

console.log('Server running at http://127.0.0.1:30025/');