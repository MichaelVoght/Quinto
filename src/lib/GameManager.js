const Board = require('./Board');
const Tiles = require('./Tiles');
const Player = require('./Player');

var gameBoard;
var tilesBag;
var players;

class GameManager {

  constructor() {
    this.gameBoard = null;
    this.tilesBag = null;
    this.players = [];
  }

  setup() {
    if(this.gameBoard === null){
      this.gameBoard = new Board();
    }
    if(this.tilesBag === null) {
      this.tilesBag = new Tiles();
      this.tilesBag.shakeBag();
    }
    this.players.push(new Player("one"));
    this.players.push(new Player("two"));

    this.players.forEach((player) => {
      player.fillHand(this.tilesBag);
    });

    this.gameBoard.displayBoard();
  }

  gameLoop() {
  //does user have pieces?
      //yes: show hand to player, does user want to play a piece?
          //yes: get user input, piece value followed by coordinates
          //no: did user play a piece?
              //yes: is board state valid?
                    //yes: place pieces, draw new pieces, score points for user
                    //no: return pieces to user, state reasoning, return to input request
              //no: move onto next player
      //no: game ends
  }
}

module.exports = GameManager;
