var person=function(firstname,lastname){
	this.firstname=firstname;
	this.lastname=lastname;
};
person.prototype={
	toString:function(){
		return [this.lastname,this.firstname].join(",");
	},
	truncatedname:function(){
		return this.toString().substr(0,10);
	},
	uppercasename:function(){
		return toString().toUpperCase();
	}
};
// var p=new person("Aamir","Khan");
// this.firstname="salman";
// console.log(p.toString());
// // console.log(p.truncatedname());
// // console.log(p.uppercasename());
// // console.log(p.__proto__)
// // console.log(p.__proto__.toString());
// // console.log(p.prototype);
// // // console.log(p.truncatedname());
// var p=Object.create(person.prototype);
// console.log(p.__proto__);
// console.log(p.prototype);
// var p={name:"Tendulkar"};
// var x={};
// Object.defineProperty(x,"name",{value:{first:"sachin",last:"Tendulkar"},
// enumerable:false,configurable:false,writable:false});
// // x.name={first:"Rahul",last:"Dravid"};
// // delete x.name;
// x.name.first="Arjun"
// x.name.last="pandit"
// // console.log(x.name.first);
// var a=[1,2,3,4,"tom"]
// console.log(a.reduce(function(x,y){console.log(x);return x;}))

var plusFive=function(i){
	return function(){
		return i+5;
	}
};
var numbers=[10,-1,2,5];
var plusFiveFunction=numbers.map(function(x){return plusFive(x)});
console.log(plusFiveFunction);
var aa=plusFiveFunction.map(function(x){return x()});
console.log(aa);