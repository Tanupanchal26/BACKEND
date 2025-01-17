const mongoose = require('mongoose');

const uri = "mongodb+srv://mern:rai@swiggy.5q2vo.mongodb.net/swiggy?retryWrites=true&w=majority&appName=swiggy";
function connectDb () {
    mongoose
        .connect(uri)
        .then(() => console.log('MongoDB connected successfully'))
        .catch(err => console.error('MongoDB connection error:', err));
}
module.exports  = connectDb