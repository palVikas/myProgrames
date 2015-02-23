var fs = require('fs');

var check = function(){
	var remote = fs.readFileSync('helpers/remote','UTF-8');
	var local = fs.readFileSync('helpers/localHead','UTF-8');
	return remote==local;
};

console.log(check());