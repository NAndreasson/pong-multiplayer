define([], function() {

  // TODO Could implement this with new EcmaScript 6
  // for getters and setters and such

  function Ball(xPos, yPos, radius) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
    this.angle = 0;
    this.velocity = {
      x: 25
    , y: 25
    };
  }

  Ball.prototype.setVelocity = function(x, y) {
    this.velocity.x = x;
    this.velocity.y = y;
  };

  Ball.prototype.setAngle = function(angle) {
    this.angle = angle;
  };

  Ball.prototype.update = function(dt) {
    // update the ball pos with timew
  };

  return Ball;
});