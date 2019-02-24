var Favorite = require('../models/favorite');
var request = require('request');
const rootURL = 'https://launchlibrary.net/1.4/launch/';

module.exports = {
    create,
    show,
};

function show(req, res) {
    Favorite.find({}, function (err, favorites) {
        // res.send(favorites)
        let allFavoritesId = favorites.map(function (f) {
            return f.launchId
        });
        var url = rootURL + "?";
        allFavoritesId.forEach(function (i) {
            url += "id=" + i + "&";
        });
        
        request(url, function (err, response, body) {
            var launchData = JSON.parse(body);
            res.render('launches/favorites', {launchData});
        }
        );
    });


}

// request(
//     //get all Ids from favorites collection in database into an array and then
//     //have a string URL builder for all those array items/IDs 
//     //display the IDs pulling the API information 
//     rootURL + req.params.id, function (err, response, body) {
//     var launchData = JSON.parse(body);
//     //launchData.launches[0] because need first item in array of launch
//     res.render('launches/details', { l: launchData.launches[0] });
// }
// );

function create(req, res) {
    var favorite = new Favorite(req.body);
    favorite.save(function (err) {
        if (err) return res.render('/');
        res.redirect('/launches');
    });
}