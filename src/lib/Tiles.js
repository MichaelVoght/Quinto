var tiles;

class Tiles {

  constructor() {
    this.tiles = [0,0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9];
  }

  shakeBag() {
    for(let i = this.tiles.length - 1; i > 0; i--){
      let j = Math.floor(Math.random() * (i + 1));
      let swap = this.tiles[i];
      this.tiles[i] = this.tiles[j];
      this.tiles[j] = swap;
    }
  }

  drawTile() {
    if(this.tiles.length > 0) {
      return this.tiles.pop();
    } else {
      return -1;
    }
  }

}

module.exports = Tiles;
