const express = require('express');
const app = express();
const userModel = require('./Model/UserSchema')
const connectDb = require('./Config/db')
var bodyParser = require('body-parser')

connectDb()

app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())
app.use(express.json());

app.get('/', (req, res) => {
    res.send("HELOO")
})
app.post("/register", async (req, res) => {

    const { email, password, name } = req.body;
    const userExist = await userModel.findOne({ email });
    console.log(userExist)
    if (userExist) {
        res.send({ message: "User Exist" });
    }
    const newUser = new userModel.create({ name, email, password });
    await newUser.save();
    res.send({ message: "User Created Successfully" });
});

app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    const userDelete = await userModel.findOneAndDelete(id)
    if (userDelete) {
        res.send({ message: "User Deleted Successfully" })
    } else {
        res.send({ message: "User not exist" })
    }
})

app.put('/update/:id', async (req, res) => {
    const itemId = req.params.id
    const updateId = req.body
    console.log(updateId)
    const userUpdate = await userModel.findByIdAndUpdate({ _id: itemId }, updateId, { name: true })
    try {
        if (userUpdate) {
            res.send({ message: "User Updated Successfully" })
        }
        else {
            res.send({ message: "User not updated Successfully" })
        }
    }
    catch {
        res.send("error");

    }
})

app.listen(3000, () => {
    console.log("Server is running... ");
});
