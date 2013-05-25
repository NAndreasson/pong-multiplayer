define([], function() {

  function GameModel(nrOfRounds) {
    this.currentRoundNr = 1;
    this.nrOfRounds = nrOfRounds;
    this.running = false;
  }

  GameModel.prototype.start = function() {
    this.running = true;
  };

  GameModel.prototype.pause = function() {
    this.running = false;
  };

  GameModel.prototype.update = function(dt) {
    // handle player input

    // update ball
  };

  return GameModel;

});