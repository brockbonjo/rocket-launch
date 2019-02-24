var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var favoriteSchema = new mongoose.Schema({
    launchId: Number
})

module.exports = mongoose.model('Favorite', favoriteSchema);