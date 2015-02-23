var num=+process.argv[2];
var reverse=function(x){
	if(x<10)
		return x;
	var digit = x%10;
	var rest=(x-digit)/10;
    var tser=reverse(rest);
    console.log(tser);
    var digits=Math.floor(Math.log(x)/Math.log(10))
    return digit*(Math.pow(10,digits))+tser;
}
console.log(reverse(num));
