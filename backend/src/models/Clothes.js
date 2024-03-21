const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ClothesSchema = new Schema({

  ClothID: {
    type: String,
    unique: true,
  },
  Username: {
    type: String,
    require: true,
  },
  ClothName:{
    type: String,
    require: true,
  },
  ClothImage :{
    type: String,
    require: true,
},
   WearType :{
    type: String,
    require: true,
   },
   Casualty : {
    type: String,
    require: true,
},
})

const Clothes = mongoose.model("Clothes", ClothesSchema);
module.exports = Clothes;