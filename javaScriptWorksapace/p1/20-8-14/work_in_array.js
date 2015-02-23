var fun = function(){
	 console.log(this.f)
	return this.e;

};
// var boundFun = = function(){
// 	console.log(myObj);
// };
 // var equalent_of_fun = function(obj){
 // 	console.log(obj);
 // };

 myObj = {e:78, f:36};

var boundFun = fun.bind(myObj);
// //console.log(boundFun.toString());
// fun();
// boundFun();
// equalent_of_fun(myObj.e);

console.log(fun.apply(myObj));
console.log(boundFun());


boundFun();
boundFun();
fun.apply(myObj);
fun.apply(myObj);	//fun.bind(myObj);



