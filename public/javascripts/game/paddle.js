define([], function() {

  function Paddle(xPos, yPos, width, height) {
    this._xPos = xPos;
    this._yPos = yPos;
    this._width = width;
    this._height = height;
  }

  Paddle.prototype.setPos = function(x, y) {
    this._xPos = x;
    this._yPos = y;
  };

  return Paddle;

});