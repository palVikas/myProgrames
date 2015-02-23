var sum= process.argv[2];
//console.log(sum);
var number=sum.split(',');
//console.log(number);
var toint=function(x){
	return +x;
}
var result=number.map(toint);
//console.log(result);
var iseven=function(y){
	return y%2==0;
}
var isodd=function(y){
	return y%2!=0;
}
even=result.filter(iseven);
odd=result.filter(isodd);
//console.log(even,odd);
var accumulater=function(f,s){
	return f+s;
}
var evensum=even.reduce(accumulater);
var oddsum=odd.reduce(accumulater);
console.log('sum of even number=', evensum,'sum of odd number=',oddsum	);
