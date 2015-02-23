
var calculator={
	val:0,
	get value(){
		return calculator.val;
	},
	set value(x){
		calculator.val=x;
	},
	square:function(){
		return calculator.val*calculator.val;
	}
	,
	cube:function(){
		return calculator.val*calculator.val*calculator.val;
	},
	fac:function(){
		if(calculator.val==0)
			return 1;
		return calculator.val*calculator.fac(calculator.val-1);
	}
}

console.log(calculator.value);
calculator.value=5;
console.log(calculator.value);
console.log(calculator.square());
console.log(calculator.cube());
console.log(calculator.fac());
