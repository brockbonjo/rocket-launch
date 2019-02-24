var Favorite = require('../models/favorite');

module.exports = {
    create,
};

function create(req, res) {
    var favorite = new Favorite(req.body);
    favorite.save(function (err) {
        if (err) return res.render('/');
        res.redirect('/launches');
    });
}