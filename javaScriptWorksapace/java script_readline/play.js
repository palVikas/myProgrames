var arr=[];
 var rec=function(){
 	var ques=Math.round(5*Math.random());
 	if(arr.indexOf(ques)>=0){ 
 		return rec();
 	}
 	arr.push(ques)
 	return ques;
 }
 console.log(rec());