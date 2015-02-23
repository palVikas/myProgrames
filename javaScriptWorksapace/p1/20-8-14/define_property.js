var object={name:'vikas',address:'kanpur'}
//console.log(object)
Object.defineProperty(object,'nam',{set:function(x){
	this.name=x;
},
enumerable:true

});

//console.log(object);

object.nam='param'
//console.log(object);
if("address" in object){
	console.log(object.name)}