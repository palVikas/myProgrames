// /using getter and setter
// var fruit="****";
// var objc={
// 	get name(){
// 		return fruit;
// 	},
// 	set name(y){
//      fruit=x;
// 	},
// 	fun:function(){
// 		return "my fev fruit is "+fruit;
// 	}
// };
// console.log(objc.name);
// fruit="mango";
// console.log(objc.name);
// console.log(objc.fun());
var r=0;
var circle={
	get radius(){
		return r;
	},
	set radius(newradius){
		r=newradius;
	},
	calArea: function(){
		return 3.14*r*r;
	},
	calparem:function(){
		return 2*3.14*r;
	}
};
console.log(circle.radius);
r=15;
console.log(circle.calArea());
console.log(circle.calparem());

//using this and apply

var func=function(){
	if(this == pare)
		return this.a*2*3.14;
	if(this == area)
		return this.a*this.a*3.14;
	if(this.b==undefined)
		return this.a*this.a;

		
	return this.a*this.b
}
var squre={
	a:34
}
var rect={
a:34,b:45
}
var pare={
	a:78
}
var area={
	a:3456
}


console.log(func.apply(squre));
console.log(func.apply(rect));
console.log(func.apply(pare));
console.log(func.apply(area));

//EVEL()
eval('x=56');
console.log(x);