var bombRandomGenerate = function(){
	var mine =[],row,col;
	while(mine.length!=6){
		row = Math.floor(Math.random()*6); 
		col = Math.floor(Math.random()*6); 
		mine.push([row,col]);
	}
	return mine;
}
// console.log(bombRandomGenerate());
var bob =[]
bombs = bombRandomGenerate().map(function(x){
	return bob[x[0]][x[1]]="bomb"
});

console.log(bombs);


counter={};
  
  
  
if(Object.keys(counter).length==30){
    alert("congoo you win")
  }