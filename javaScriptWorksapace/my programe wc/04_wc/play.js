var fs = require('fs');
var fd = fs.readFileSync('two.txt','utf8')
//console.log(fd) 
// var count = 0;
// var b=fd.split('\r\n')
// console.log(b);
//  var c= b.forEach(function(x){
//  	// console.log(x.split(''));
//  	    x.split(" ").forEach(function(y){
//  	   	         if(y!="")
//  	   	         	count++
// })
 	   	
// })
//  console.log(count);
var a=['text1','text2']
var b = ['-l','-w']


var d = a.map(function(x){
	var c = '';
	b.map(function(y){
		c = c + y + x
		return c	
	})
	return c;
})


var f = a.map(function(x){
	var c = '';
	b.forEach(function(y){
		c = c + y + x	
	})
	return c;
})

console.log(d == f)

console.log(d)