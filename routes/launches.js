var express = require('express');
var router = express.Router();
var request = require('request');
const rootURL = 'https://launchlibrary.net/1.4/launch/next/100';
var launchesCtrl = require('../controllers/launches');
var favoritesCtrl = require('../controllers/favorites')

router.get('/:id', launchesCtrl.details);
router.post('/delete/:id', isLoggedIn, favoritesCtrl.deleteFavorite)
router.get('/', function (req, res, next) {
    request(rootURL, function (err, response, body) {
        var launchData = JSON.parse(body);
        res.render('launches/index', { 
            launchData: launchData, 
            user: req.user
        });
    }
    );
});

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  };

module.exports = router;

