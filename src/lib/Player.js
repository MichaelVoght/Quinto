var hand;
var score;
var playerName;
var MAXHAND = 5;

class Player {

  constructor(name) {
    this.playerName = name;
    this.hand = [];
    this.score = 0;
  }

  fillHand(tilesBag) {
    while(this.hand.length < MAXHAND) {
      let tile = tilesBag.drawTile();
      if(tile < 0) {
        return false;
      } else {
        this.hand.push(tile);
      }
    }
    return true;
  }

  displayHand() {
    console.log(this.playerName + "'s hand: " + this.hand);
  }

}

module.exports = Player;
