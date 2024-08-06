const mongoose = require('mongoose');

const tagScheme = mongoose.Schema({
   name:{
    type:String,
    required:true,
   },
   description:{
    type:String,
   },
   course:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Course",
   },
});

module.exports = mongoose.model("Tag" , tagScheme);
