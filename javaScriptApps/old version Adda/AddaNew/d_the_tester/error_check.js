var fs = require('fs');

var error_check = function(){
	var error = fs.readFileSync('helpers/error','UTF-8');
	return error.length!=0;
};

console.log(error_check());