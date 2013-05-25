requirejs.config({
  baseUrl: 'javascripts/game',
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
  }
  // set up the canvas
  , canvas = document.getElementById('canvas');

  var Renderer = (function() {
    var draw = function() {
      //  draw background
      //  draw left paddle
      //  draw right paddle
      //  draw ball
    };

    return {
      draw: draw
    };
  })();
  requestAnimFrame(Renderer.draw);
});
