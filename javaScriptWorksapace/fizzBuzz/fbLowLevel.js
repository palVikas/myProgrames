var lm={};
exports.lm=lm;
lm.createCount = function(){
	var count = {value:0,
		getCount:function(){ return this.value;},
		next:function(){this.value++}
	}
	return count;
}
lm.isFizz = function(number,count){
	return number == count;
}