function myfun(last){
	var ar=[];
	for(var i=0+this;i<last;i++)
		 ar.push(i)
		return ar;
};

//console.log(myfun.call(5,10));
(2).__proto__.to=myfun;
var result=(54).to(65);
console.log(result);

var sqrt={
	val:0,
	get value(){return Math.sqrt(this.val);}
}
sqrt.val=81;
console.log(sqrt.value)

