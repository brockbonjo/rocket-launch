var express = require('express');
var router = express.Router();
var favoritesCtrl = require('../controllers/favorites');

router.get('/', function(req, res, next) {
  res.send('This is working');
})

router.post('/', favoritesCtrl.create);

// function isLoggedIn(req, res, next) {
//   if ( req.isAuthenticated() ) return next();
//   res.redirect('/auth/google');
// }

module.exports = router;
