var request = require('request');
const rootURL = 'https://launchlibrary.net/1.4/launch/';
var User = require('../models/user');


module.exports = {
    details,
};


function details(req, res) {
    request(rootURL + req.params.id, function (err, response, body) {
        var launchData = JSON.parse(body);
        //launchData.launches[0] because need first item in array of launch
        User.find({favorites: req.params.id}, function(err, users) {
            res.render('launches/details', {
                l: launchData.launches[0],
                user: req.user, //set up for partials to include user must be signed in
                users
            });
        });
    });
}

