const GameManager = require('./lib/GameManager');

var game;

newGame();

function newGame() {
  this.game = new GameManager();
  this.game.setup();
  this.game.gameLoop();
}
