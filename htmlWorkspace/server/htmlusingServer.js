var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
	var vv = url.parse(req.url,true)
	console.log(vv);
var path = url.parse(req.url).pathname;
console.log(path);
var index = fs.readFileSync("."+path);
  res.writeHead(201, {'Content-Type': 'text/html'});
  res.end(index);
}).listen(8080);