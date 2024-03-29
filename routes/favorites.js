var express = require('express');
var router = express.Router();
var favoritesCtrl = require('../controllers/favorites');

router.get('/', isLoggedIn, favoritesCtrl.show);
router.post('/:id', isLoggedIn, favoritesCtrl.addToUser);
router.post('/delete/:id', isLoggedIn, favoritesCtrl.deleteFavorite)

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  };


module.exports = router;
