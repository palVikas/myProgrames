var questions = require("./question.js").Question;
var readline=require("readline");
var rl = readline.createInterface({input: process.stdin,output: process.stdout});
var total_Question = questions.length;
var right_Answer=0;

var start_time=new Date();

var counter=0;
var ask_Question=function(question_no){
	rl.question(questions[question_no].q+"\n Ans:", function(answer){
		if(questions[question_no].a.toUpperCase()==answer.toUpperCase())
		     ++right_Answer;
		counter++;
		if(counter<total_Question){
			return ask_Question(rec());
			
		}
		var  end_time=new Date();
		var total_time=end_time.getTime()-start_time.getTime();
		var seconds=Math.floor(total_time/1000);
		var minutes=Math.floor(seconds/60);
		var hour = Math.floor(minutes/60);
		 console.log("\nyour correct answer is "+right_Answer+"/"+total_Question);
		 console.log("you take "+hour+' hour,'+minutes%60+' Minutes,'+seconds%60+" Seconds");
		 rl.close();
	})

}


var not_Repeated=[];
var rec=function(){
 	var randome_ques=Math.round((total_Question-1)*Math.random());
 	 	if(not_Repeated.indexOf(randome_ques)>=0){ 
 	 		return rec();
 	}
 		not_Repeated.push(randome_ques);
 		return randome_ques;
 	
 };
 var  number=rec();
ask_Question(number);



 