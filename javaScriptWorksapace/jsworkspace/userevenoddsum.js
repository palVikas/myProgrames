var array=process.argv.slice(2,process.argv.length);
console.log(array);
var toint= function(x){
	return +x;
}
var number=array.map(toint);
console.log(number);
var iseven= function(y){
	return y%2==0
}
var isodd= function(y){
	return y%2!=0
}
var even=number.filter(iseven);
var odd= number.filter(isodd);
console.log(even,odd);
var add=function(f,s){
	return f+s;
}
var evensum=even.reduce(add);
var oddsum=odd.reduce(add);
console.log(evensum,oddsum);