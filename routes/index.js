var express = require('express');
var router = express.Router();
var passport = require('passport');



router.get('/', function (req, res, next) {
  res.redirect('/launches');
});


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
