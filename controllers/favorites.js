var User = require('../models/user');
var request = require('request');
const rootURL = 'https://launchlibrary.net/1.4/launch/';

module.exports = {
    addToUser,
    show,
};

function show(req, res) {
    //populate the favorites property so you can use each item in its array to build a url to call from the API
    User.findById(req.user._id)
        .populate('favorites').exec(function (err, user) {
            var url = rootURL + "?";
            req.user.favorites.forEach(function (launchId) {
                url += "id=" + launchId + "&";
            });
            //call url from API, parse the JSON and render the favorites view page
            request(url, function (err, response, body) {
                var launchData = JSON.parse(body);
                res.render('launches/favorites', { launchData });
            });
        });

}

function addToUser(req, res) {
    //make sure launch isn't already in database
    if (req.user.favorites.indexOf(req.params.id) !== -1) {
        return res.redirect('/launches');
    }
    //add launch to the user's favorites array
    req.user.favorites.push(req.params.id);
    req.user.save(function (err) {
        if (err) return res.redirect('/launches');
        res.redirect('/launches');
    });
}


