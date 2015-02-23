var m=require("./simModule.js").m;
var mm={};
var color=require("colors");
exports.game = mm;
mm.userGuess=[color.yellow('guess')];
mm.previus_position=[color.yellow(['c','p'])];
mm.getNumber = m.randomCode();
mm.checkUserInput=function(usercode){
	var result=false;
	if(usercode.length==5){
		result=usercode.split('').every(function(x){
			if( (!isNaN(x)) && (x<=8 && x>=1) )
			return true; 
		});
	}
	return result;
};
var count=0;
mm.attempt=function(){
	return ++count;
}
mm.guessNumber=function(usercode,my_code){
	if(my_code){mm.getNumber=my_code}
	var confirm = m.confirmNumber(mm.getNumber,usercode);
	var present =m.presentNumber(mm.getNumber,usercode);
	mm.userGuess.push(usercode)
	mm.previus_position.push([confirm , present]);
	return [confirm , present];
}

