var http = require('http');
var url = require("url");
var createServer = function(req, res) {
  res.writeHead(200);
	// console.log(req.url);
  var parameter = url.parse(req.url,true);
  console.log(parameter);
  var number1 = parameter.query.a;
  var number2 = parameter.query.b;
  var sum = (+number1 + +number2)
   res.end(''+sum);
  
};
var server = http.createServer(createServer)
server.listen(8080);
