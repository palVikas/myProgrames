var http = require('http');
var createServer = function(req, res) {
	console.log(req);
  res.writeHead(200);
 	if(req.url =='/even')
   res.end(isEven(data));
	if(req.url =='/odd')
  	res.end(isOdd(data));
  	else
  	res.end('1,2,3,4,5,6,7,8,9');
};
var server = http.createServer(createServer)
server.listen(8080);

 var data =[0,1,2,3,4,5,6,7,8,9] 
var isEven = function(data){
	var evenNumber = data.filter(function(number){
		if(number%2 == 0)
		return number;
	})
	return evenNumber.join(',')
}
var isOdd = function(data){
	var oddNumber = data.filter(function(number){
		if(number%2 != 0)
		return number;
	})
	return oddNumber.join(',')
}


// function getData(){
//     var string;
// console.log(string)
//     request('someurl')
//         .on('data', function(data){
//              string += data;
//         })
//         .on('end', function(){
//             return string;
//         });
// }



