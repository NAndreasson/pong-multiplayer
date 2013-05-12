var uuid = require('node-uuid');

/*
 * GET home page.
 */

exports.index = function(req, res){
  var randomId = uuid.v1();
  res.redirect('/' + randomId);
};

exports.game = function(req, res) {
  res.render('index', { title: 'Pong' });
};