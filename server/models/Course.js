const mongoose = require('mongoose');

const Course = mongoose.Schema({
   name:{
    type:String,
    required:true,
   },
   courseDescription:{
    type:String,
    required:true,
   },
   instructor:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true,
   },
   whatYouWillLearn:{
    type:String,
    required:true,
   },
   courseContent:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Section",
    }
   ],
   ratingAndReviews:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"RatingAndReview",
    }
   ],
   price:{
    type:Number,
    required:true,
   },
   image:{
    type:String,
   },
   tag:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Tag",
   },
   studentEnrolled:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    }
   ]
});

module.exports = mongoose.model("Course" , Course);
