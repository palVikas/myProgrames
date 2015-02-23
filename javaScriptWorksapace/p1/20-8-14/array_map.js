var array=[7,8,9,10,11];
var squre=function(x){
	return x*x;
}
 var newmap=array.map(squre);
 console.log(newmap);

 // var increment=function(){
 // 	var count=0;
 // 	for(i=0;i<5;i++){
 // 		console.log(count++);
 // 	}
 // }();
 
var fact=function(x){
	    if(x==1)
		return 1;
	return (x*fact(x-1));
};
var newfact=array.map(fact);
console.log(newfact);