const express = require('express');
const app = express();
const Model = require('./Model/UserSchema')
const connectDb = require('./Config/db')
connectDb()
app.listen(3000, () => {
    console.log("Heloooo")
});
