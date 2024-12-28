const mongoose=require ('mongoose');
const userSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email:{
        type: String,
        require: true
    },
    Passsword:{
        type: String,   
        require: true
    },
})
 const UserModel=mongoose.model('User',userSchema);
module.exports=UserModel