var m={};
exports.m=m;

m.randomCode=function(){
	var ansCode=[];
	var rec=function(){
		if(ansCode.length>=5)
			return ansCode.join("");
		var result=Math.floor(8*Math.random()+1)
		ansCode.push(result)
	    return rec();;
	}
	return rec();
};

m.confirmNumber=function(setCode,userCode){
	var result = [];
	userCode.toString().split('').forEach(function(x,index){
		if(setCode.toString()[index] == userCode.toString()[index])
			result.push(x);

	})
return result.length;
};
                        
m.presentNumber=function(setCode,userCode){
	var count=0;
	var digitsOfSetCode=setCode.toString().split('');
	var digitsOfUserCode=userCode.toString().split("");

	var notMatchFromSetCode = digitsOfSetCode.filter(function(digit,index){
		return digit!=digitsOfUserCode[index]
		});

	var notMatchFromUserCode = digitsOfUserCode.filter(function(digit,index){
		return digit != digitsOfSetCode[index]
		});

	notMatchFromUserCode.forEach(function(notMatchDigit){
		if(notMatchFromSetCode.indexOf(notMatchDigit)>=0){
			 notMatchFromSetCode[notMatchFromSetCode.indexOf(notMatchDigit)] = undefined;
				count++
			}
	});
	return count;
};	