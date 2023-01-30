const mongoose = require('mongoose');

const keys = require('./config/keys')

mongoose.set('strictQuery', true);

mongoose.connect(keys.mongoURI)
    .then(()=>console.log('MongoDB connected'))
    .catch(error=> console.log(error))
// mongoose.connect(keys.mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
//
// const db = mongoose.connection;
//
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => console.log('MongoDB connected')
// );

module.exports = mongoose;
