var express = require('express');
var router = express.Router();
var request = require('request');
const rootURL = 'https://launchlibrary.net/1.4/launch/next/100';
var launchesCtrl = require('../controllers/launches');

router.get('/:id', launchesCtrl.details);


router.get('/', function (req, res, next) {
    request(rootURL, function (err, response, body) {
        var launchData = JSON.parse(body);
        res.render('launches/index', { launchData: launchData });
    }
    );
});

module.exports = router;

