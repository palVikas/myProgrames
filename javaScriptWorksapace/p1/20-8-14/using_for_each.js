//var array=[8,67,7,787,3,34,8];
// var sum=0;
// array.forEach(function(x){return sum+=x});
// console.log(sum);
// array.forEach(function(v,i,a){return a[i]=v+1});
// console.log(array);



// var myforeach=function(y){
// 	for(i=0;i<this.length;i++)
// 		 y(this[i])
// };
// var y=function(x){
// 	console.log(x)
// };
// Array.prototype.hamaraforeach=myforeach;
// newElement.hamaraforeach(y)
//var sum=0;
// array.hamaraforeach(function(x){return sum+=x});
// console.log(sum);
//console.log(result);



// var country=['india','pakistan','afganistan','nepal','srilanka'];
// var capital=['new delhi','islamabad','kabul','kathmandu','colambo'];
// var callcountry=function(x){
// 	place=undefined;
// 	country.forEach(function(data,index){
// 		if(x==data)
// 			place=capital[index].toUpperCase();
// 	});
// 	return place;
// };
// console.log(callcountry('india'));




var newElement=[5,8,9,7];

var myElement=function(v,i,a){

   console.log('a['+i+']='+v)

};
newElement.forEach(myElement);
