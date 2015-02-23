var r=0;
var circle={
   get radius(){
		return r;
	},
	set radius(newradius){
		r=newradius;

	},
	areaofcir:function(){
		return 3.14*r*r;
	},
	paraofcir:function(){
		return 3.14*r*2;
	}

};
console.log(circle.radius);
circle.radius=6;
console.log(circle.radius);
console.log(circle.areaofcir());
console.log(circle.paraofcir());
var squa=function(){
	return r*r;
}
var aroun={
	a:0
}
console.log(squa.apply(circle));