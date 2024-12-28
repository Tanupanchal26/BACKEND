const mongoose = require("mongoose");
const FoodSchema = mongoose.Schema({
  Food: {
    Starter: [
      
  {
        name:PaneerTikaa ,
        price: Number,
        rating: String,
        PrepareBy: String,
      },
      Veg, { 
        name: String, 
        price: Number,
        rating: String, 
        PrepareBy: String 
    },
      Nonveg , {
        name: String,
        price: Number,
        rating: String,
        PrepareBy: String
    },
      ],
   
    Mainfood: [
    {
        name:RajasthaniThali,
        price: Number,
        rating: String,
        PrepareBy: String,
},
{
        name:GujratiThali ,
        price: Number,
        rating: String,
        PrepareBy: String,
},
{
        name:  Biryani ,
        price: Number,
        rating: String,
        PrepareBy: String,
},
{
        name:Muttoncurry,
        price: Number,
        rating: String,
        PrepareBy: String,
},
],
    Desert: [
    {
        name:  Browniewithicecream ,
        price: Number,
        rating: String,
        PrepareBy: String,
    },
   {
        name:Waffles,
        price: Number,
        rating: String,
        PrepareBy: String,
      },
    ],
  },
});
const UserModel = mongoose.model("User", FoodDelivery);
module.exports = UserModel;
