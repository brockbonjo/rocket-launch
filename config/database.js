var mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://felicity_nie:${process.env.DATABASE_PASSWORD}@rocket-launch-p0xzw.mongodb.net/test?retryWrites=true`, { useNewUrlParser: true } );

const db = mongoose.connection;

// database connection event
db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}: ${db.port};`)
});

module.exports = mongoose;