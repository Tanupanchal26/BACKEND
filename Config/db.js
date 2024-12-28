const mongoose = require('mongoose');

const uri = "mongodb://localhost:27017//MERN";
function connectDb() {
    mongoose
        .connect(uri)
        .then(() => console.log('MongoDB connected successfully'))
        .catch(err => console.error('MongoDB connection error:', err));
}
module.exports = connectDb