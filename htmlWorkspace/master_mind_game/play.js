randomCode=function(){
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
}();
console.log(randomCode);
