var animal=Object.create(Object.prototype,{lion:{value:"roar",enumerable:true}});
console.log(animal);
var bird=Object.create(animal,{swan:{value:"swim",enumerable:true}});
console.log(bird);
console.log('lion' in bird);
console.log('swan' in bird);
console.log(animal.hasOwnProperty('lion'));
console.log(animal.hasOwnProperty('swan'));
fruit 
//var vikas=Object.create({x:2,y:5});
//console.log(vikas.y);
var vikas=function(initialvalue){
	return{
		value:initialvalue,enumerable:true
	}
}
var fruit=Object.create(animal,{
	mango:vikas('sweet'),grapes:vikas('khatta'),guava:vikas('khatmittha')
})
console.log(fruit)
console.log(fruit.hasOwnProperty('guava'));
console.log('::::::::::propertyisenumerable::::::::::::::::::::');
console.log(fruit.propertyIsEnumerable('mango'))
console.log(fruit.__proto__.propertyIsEnumerable('lion'))
for(key in fruit);
console.log('______>>',fruit);
console.log(key,'---->>',fruit[key]);
var vik=JSON.stringify(fruit)
console.log(vik.length)
a=JSON.parse(vik)
console.log(a)
var newtext='[1,2,3,4,5,{"a":56}]';
var obj=JSON.parse(newtext);
console.log(obj[5].a);
console.log(JSON.stringify("heloo"));

