const mongoose = require('mongoose');

const uri = "mongodb+srv://tanyapanchal65:adil123@mern.ee7fk.mongodb.net/MERN?retryWrites=true&w=majority&appName=mern";
function connectDb () {
    mongoose
        .connect(uri)
        .then(() => console.log('MongoDB connected successfully'))
        .catch(err => console.error('MongoDB connection error:', err));
}
module.exports  = connectDb