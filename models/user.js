var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    launches: [{type: Schema.Types.ObjectId, ref: 'Launch'}],
    googleId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);