var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var favoriteSchema = new mongoose.Schema({
    name: String,
    rocket: {
        name: String,
    },
    missions: [{
        name: String,
    }],
    lsp: {
        name: String,
    },
    windowstart: String,
    vidURLs: [String],
    location: { 
        name: String,
        countryCode: String,
        pads: 
            [{mapURL: String
            }]
        }
    }
)

module.exports = mongoose.model('Favorite', favoriteSchema);