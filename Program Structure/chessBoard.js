var chessBoard = "";
var size = 8;

for (var count = 0; count < size; count++) {
  for (var countTwo = 0; countTwo <= size; countTwo++) {
    if ((count + countTwo) % 2 == 0) {
      chessBoard += "#";
    } else {
      chessBoard += " ";
    }
  }
 chessBoard += "\n";
}

console.log(chessBoard);
