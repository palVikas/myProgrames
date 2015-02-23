var m = {};
exports.m = m;
m.randomCode=function(){
	var anscode=[];
	var rec=function(){
	var random=Math.floor(8*Math.random()+1);
	if(anscode.length<5){ 
	anscode.push(random)
	rec();
	}
    return anscode;
}
 rec();
 return anscode.join("");
};

m.checkMatch=function(randomCode,userCode){
	result=[];
	 userCode.forEach(function(x,index){
		if(randomCode[index] == userCode[index] )
			result.push(x);
	
      });

return result.length;
};
m.checkpresent=function(randomCode,userCode){
	result=[];
	var q
	 userCode.forEach(function(x,index){
		if(randomCode[index] >= 0)
			result.push(x);
		q=result.length;
      });

return q>=0?q:0;
};
