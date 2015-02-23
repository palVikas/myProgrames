function generate_table() {
  var body = document.getElementsByTagName("body")[0];
  var tbl     = document.createElement("table");
  tbl.setAttribute("align","center");
  tbl.id = 'mine'

  var tblBody = document.createElement("tbody");
  for (var i = 0; i < 6; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < 6; j++) {
      var cell = document.createElement("td");
      cell.id = [i,j];
      cell.addEventListener("mousedown",analyze);
      cell.setAttribute("oncontextmenu","return false");
      cell.setAttribute("class","cell");
      var cellText = document.createTextNode("X");
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  body.appendChild(tbl);
  tbl.setAttribute("border", "2");
}

var Grid = function(rows, col){
  var grid = new Array(rows);
  for(var count = 0; count<col; count++){
    grid[count] = new Array(col);
  }
  return grid;
}
var mine = Grid(6,6);

mine[0][0] = 'bomb';
mine[2][2] = 'bomb';
mine[2][4] = 'bomb';
mine[3][4] = 'bomb';
mine[5][1] = 'bomb';
mine[5][5] = 'bomb';

var bombPositions = [[0,0],[2,2],[2,4],[3,4],[5,1],[5,5]];

var analyze = function(event){
  var col = this.cellIndex;
  var row = this.parentNode.rowIndex;
  var table = document.getElementById("mine");
  if(event.button == 0){
    if(mine[row][col] == 'bomb'){
      for(var i = 0; i<bombPositions.length; i++){
        document.getElementById(bombPositions[i]).innerHTML = 'bomb';
      document.getElementById(bombPositions[i]).style.background='red';

      }
      alert("GET LOST 'you lose the game '");
      document.location.reload();
    }
    else{
      var bombs = countSurroundingBombs(row,col); 
      this.innerHTML = bombs;
      this.style.background='gray';

    };
  }
  if(event.button == 2){
    this.innerHTML = "Mark";
  }
};

var getSurroundingIndex = function(row,col){
  var SurroundingIndex = [];
  for(var r = row-1; r <=row+1; r++){
    for(var c = col-1; c <= col+1; c++){
      if((r!=row || c !=col) && (r != -1 && c != -1) && (r<6 && c<6) )
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
