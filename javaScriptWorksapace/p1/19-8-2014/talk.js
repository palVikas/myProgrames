function talks(str){
	var result ='';
	for(var i=0;i<this;i++)
		result+=str;
	return result;
};
 (5).__proto__.times=talks;
 var result=(5).times('walk');
console.log(result)

'hello'.__proto__.last=function(){
	return this[this.length-1]
	};
console.log('vikas'.last());