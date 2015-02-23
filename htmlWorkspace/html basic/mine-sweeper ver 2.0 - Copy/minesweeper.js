var userArguments = function(){
  var queryText = window.location.search;
  var parameter = queryText.split("&");
  var height = parameter[0].split('=')[1];
  var width = parameter[1].split('=')[1];
  var bombs = parameter[2].split('=')[1];
  return [height,width,bombs];
}
var counter = {};
var input = userArguments();
var height=input[0];
var width=input[1];
var bombs=input[2];

function generate_table(){ 
  var body = document.getElementsByTagName("body")[0];
  var tbl = document.createElement("table");
  tbl.setAttribute("align","center");
  var tblBody = document.createElement("tbody");
  for (var i = 0; i < height; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < width; j++) {
      var cell = document.createElement("td");
      cell.id = [i,j];
      cell.addEventListener("mousedown",analyze);
      cell.setAttribute("oncontextmenu","return false");
      cell.setAttribute("class","cell");
      var cellText = document.createTextNode("?");
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  body.appendChild(tbl);
  tbl.setAttribute("border", "2");
}


var mine = function(rows, col){
  var grid = new Array(rows);
  for(var count = 0; count<col; count++){
    grid[count] = new Array(col);
  }
  return grid;
}(height,width);

var generateBombs = function(length){
  var bombs =[],row,col;
    while(bombs.length!=length){
    row = Math.floor(Math.random()*length); 
    col = Math.floor(Math.random()*length); 
    bombs.push([row,col]);
  };
  return bombs;
};

var bombPositions = generateBombs(bombs);
bombPositions.forEach(function(b){
  mine[b[0]][b[1]] = 'bomb';
});

var analyze = function(event){
  var col = this.cellIndex;
  var row = this.parentNode.rowIndex;
  var key = this.id;
  Object.defineProperty(counter,key,{value:"*",enumerable:true});
  if(event.button == 0){
      gameResult(row,col,key)
  }
  if(event.button == 2){
    document.getElementById(key).innerHTML = 'M';
    document.getElementById(key).style.background='yellow';
  }
};

var gameResult= function(row,col,key){
  if(mine[row][col] == 'bomb'){
    for(var i = 0; i<bombPositions.length; i++){
      document.getElementById(bombPositions[i]).innerHTML = 'bomb';
      document.getElementById(bombPositions[i]).style.background='red';
    }
      alert("AYE PATA HAI KYA  'GAME OVER' HO GAYA ");
      document.location.reload();
    }
    else{
      var bombs = countSurroundingBombs(row,col); 
      document.getElementById(key).innerHTML = bombs;
      document.getElementById(key).style.background='lightGreen';
      };
};

var getSurroundingIndex = function(row,col){
  var SurroundingIndex = [];
  for(var r = row-1; r<=row+1; r++){
    for(var c = col-1; c<= col+1; c++){
      if((r!=row || c !=col) && (r != -1 && c != -1))
      SurroundingIndex.push([r,c]);
      }
    }  
  return SurroundingIndex;
};

var countSurroundingBombs = function(row,col){
  var bombCount = 0;
  var surInd = getSurroundingIndex(row,col)
  surInd.forEach(function(index){
  bombPositions.some(function(position){
    if(index.toString() == position.toString())
      bombCount++;
    })
  })
  
  return bombCount;
};
