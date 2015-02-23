var num=process.argv.slice(2,process.argv.length);
var toint=function  (x) {
	return +x;
}
var num1=num.map(toint);
console.log(num1);
var cubeofnumber=function(y) {
	return (y*y*y);
}
var cube=num1.map(cubeofnumber);
console.log("cube of the number is:-");
console.log(cube);


