var colorChange = function(){
	var colors = ["skyblue","lightgreen","red","blue","yeloow","syan","gray"];
	var colors1 = ["lightpink","lightyellow","orange","lightlemon"]
	var changer = document.getElementById('changeTheColor');
	var randomColor1 = Math.floor(Math.random()*colors1.length+1);
	var randomColor = Math.floor(Math.random()*colors.length+1);
	document.body.setAttribute("bgcolor",colors1[randomColor1])
	changer.style.color = colors[randomColor];
}