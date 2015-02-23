function array(time){
	var ar=[];
	for(i=0+this;i<time;i++)
		ar.push(i);
	return ar;
}
var x=16;
(x).__proto__.to=array;
result=(x).to(30);
console.log(result);


function squre_root(){
	return Math.sqrt(this)
}
(0).__proto__.squre=squre_root;
result=(196).squre();
console.log(result);


function print(x){
	result='';
	for(i=0;i<this;i++)
		result+=x
	return result;
}
(0).__proto__.times=print;
var vikas=(13).times('walk');
console.log(vikas);



function left(){
	var arr=[];
	for(i=0+this;i>=0;i--)
		arr.push(i);
	return arr;
}
(0).__proto__.times=left;
result=(10).times();
console.log(result);


function last_string(){
	return this[this.length-1]
	
}
' '.__proto__.lastword=last_string;
result='vikasloveparu'.lastword();
console.log(result)

