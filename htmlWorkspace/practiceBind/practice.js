// function Tree(name) {
//   this.name = name;
// }

// var theTree = new Tree('vikas');
// console.log('theTree.constructor is ' + theTree.name);


// var car = function(make, model, year) {
//    this.make = make;
//    this.model = model;
//    this.year = year;
// }

// car.prototype={
// 	color:"red",
// 	owner:"vikas"
// }

// var mycar = new car("Eagle", "Talon TSi", 1993);
// console.log('modelNo:'+mycar.model,'color:'+mycar.color,'ownerName:'+mycar.owner);


// //*******************example of call*************************** 

// var x = 10;
// var obj = { x: 15 ,y:56};
 
// var myNumber =function(message,number)
// {
//   console.log(this.x);
//   console.log(this.y);
//   console.log(message);
//   console.log(number);
// }
 
// myNumber.call(obj,"this is call message",78);
// myNumber.apply(obj,["this is apply method",78])

// var o = { x: 15 };
 
// function f1(message1)
// {
//     console.log(message1 + this.x);
// }
 
// function f2(message1, message2)
// {
//     console.log(message1 + (this.x * this.x) + message2);
// }
 
// function apply(object, func, args)
// {
//     func.apply(object, args);
// }
 
//  function call(object, func, args)
// {
//     func.call(object, args);
// }
// apply(o, f1, ["the value of x = "]);
// apply(o, f2, ["the value of x squared = ", ". Wow! Magic!!!!!!!!!!!!"]);

// console.log("++++++++++++++++++++++++++++++++++++")
// call(o, f1, "the value of x = ");
// call(o, f2, "the value of x squared = " , "Wow! Magic!!!!!!!!!!!!");

// var module = {
//    x: 81,
//   getX: function() { return this.x; }
// };

// console.log('--------------------------->',module.getX());
// var getX =module.getX;
// var bindX = getX.bind(module);
// console.log('--------------------------->',bindX());


function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype =  {
  toString:function(){ 
  return this.x + ',' + this.y; }
};

var p = new Point(9,10);

console.log(p.toString());

var emptyObj ={}
var YAxisPoint = Point.bind(null, 0/*x*/);
var axisPoint = new YAxisPoint(5);
console.log(axisPoint);
// axisPoint.toString(); // '0,5'

console.log(YAxisPoint()); 
