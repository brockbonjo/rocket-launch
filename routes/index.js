var express = require('express');
var router = express.Router();
var request = require('request');
const rootURL = 'https://launchlibrary.net/1.4/launchevent';
var passport = require('passport');


router.get('/', function(req, res) {
  res.render('index', {userData: null});
});


router.post('/', function(req, res) {
  request(
    rootURL,
    function(err, response, body) {
      res.render('index', {userData: body});
    }
  );
});

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'My New App' });
// });

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
