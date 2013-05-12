requirejs.config({
  baseUrl: 'javascripts/lib',
  paths: {
    app: '../game'
  }
});
requirejs(['ball', 'paddle'], function(Ball, Paddle) {
  // animation frame code
  window.requestAnimFrame = (function() {
    return  window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
        function( callback ) { window.setTimeout(callback, 1000 / 60 ); }
  })();

  var settings = {
    bounds: {
      width: 800
    , height: 400
    }
  };

  // init code
  var leftPaddle = new Paddle()
    , rightPaddle = new Paddle()
    , ball = new Ball();

  // draw
  //  draw background
  //  draw left paddle
  //  draw right paddle
  //  draw ball
});
