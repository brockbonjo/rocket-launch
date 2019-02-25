var express = require('express');
var router = express.Router();
var passport = require('passport');



router.get('/', isLoggedIn, function (req, res, next) {
  res.render('index');
});

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
};


 // Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/launches',
    failureRedirect : '/launches'
  }
));

 // OAuth logout route
 router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/launches');
});

module.exports = router;
