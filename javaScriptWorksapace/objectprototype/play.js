var person=function(name){
	console.log("magic "+this.name+" jump");
	this.name=name;
}
var p = new person("vikas");
// var vperson=person.bind(p);
// console.log(vperson());
console.log(p.name)