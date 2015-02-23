var bombRandomGenerate = function(){
	var mine =[],row,col;
	while(mine.length!=6){
		row = Math.floor(Math.random()*6); 
		col = Math.floor(Math.random()*6); 
		mine.push([row,col]);
	}
	return mine;
}
console.log(bombRandomGenerate());