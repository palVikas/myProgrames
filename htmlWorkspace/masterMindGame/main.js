var readline=require("readline");
var mm = require('./mainModule.js').game;
var color=require("colors");
var rl = readline.createInterface({input: process.stdin,output: process.stdout});
console.log(color.cyan('* crack 5 digit code in 12 Attempt '));
console.log(color.cyan('* Number should be between 0 to 9. '));
console.log(color.cyan('* C position show your number is in correct position. '));
console.log(color.cyan('* P position show your number is in the guess code. '));
console.log(color.cyan('* Press enter to start the game. '));
rl.setPrompt('Guess> '.green,6);
rl.prompt();
rl.on('line',function(ans){
	
		if(mm.checkUserInput(ans)){
			var attempt =mm.attempt();
			var result = mm.guessNumber(ans);
			if(result[0]==5){
				console.log(color.green("\t\t you win!congratulation!!!!!!!!"));
				process.exit(0)
				rl.close();
			}
			if(attempt<12){
			mm.userGuess.forEach(function(x,i){
				console.log('\t\t\t'+x+'\t\t['+mm.previus_position[i]+"]\t\t"+(i||color.yellow('Attempt')));
			})
			rl.prompt();
		}
		else{
		console.log(color.rainbow('you loos! Try again. code is ')+mm.getNumber.green);
		rl.close();
		}

		}
		else{
			console.log('\t\t\t!invalid code\t\t\t'.red);
			rl.prompt();
		}
	
});
