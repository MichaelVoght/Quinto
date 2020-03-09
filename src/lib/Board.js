var board = null

class Board {

  constructor() {
    this.board = [
      ['x','x','x','x','x','x','x','x','x','x','x','x','x','x','x'],
      ['x','x','x','x','x','x','x','x','x','x','x','x','x','x','x'],
      ['x','x','x','x','x','x','x','x','x','x','x','x','x','x','x'],
      ['x','x','x','x','x','x','x','x','x','x','x','x','x','x','x'],
      ['x','x','x','x','x','x','x','x','x','x','x','x','x','x','x'],
      ['x','x','x','x','x','x','x','x','x','x','x','x','x','x','x'],
      ['x','x','x','x','x','x','x','x','x','x','x','x','x','x','x'],
      ['x','x','x','x','x','x','x','x','x','x','x','x','x','x','x'],
      ['x','x','x','x','x','x','x','x','x','x','x','x','x','x','x'],
      ['x','x','x','x','x','x','x','x','x','x','x','x','x','x','x'],
      ['x','x','x','x','x','x','x','x','x','x','x','x','x','x','x'],
      ['x','x','x','x','x','x','x','x','x','x','x','x','x','x','x'],
      ['x','x','x','x','x','x','x','x','x','x','x','x','x','x','x'],
      ['x','x','x','x','x','x','x','x','x','x','x','x','x','x','x'],
      ['x','x','x','x','x','x','x','x','x','x','x','x','x','x','x']
    ];
  }

  displayBoard() {
    console.log("   A B C D E F G H I J K L M N O");
    for(let i = 0; i < 10; i++) {
      console.log(i + "  " + this.board[i] + " " + i);
    }
    for(let i = 10; i < this.board.length; i++) {
      console.log(i + " " + this.board[i] + " " + i);
    }
    console.log("   A B C D E F G H I J K L M N O");
  }
}

module.exports = Board;
