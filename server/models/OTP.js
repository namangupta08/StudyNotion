const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const otpTemplate = require("../mail/templates/emailVerificationTemplate");

const OTPSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    otp:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expiresIn:5*60,
    }
});

async function sendVerificationEmail(email ,otp){
    try {
        const otpBody = otpTemplate(otp);
        const mailResponse = await mailSender(email , "Otp verification " , otpBody);

        console.log("email sent successfully!!" , mailResponse);
    } catch (error) {
        console.log("error occured while sending otp mail" , error);
        throw(error);
    }
} 





OTPSchema.pre("save" , async function(next){
    await sendVerificationEmail(this.email , this.otp);
    next();
})


module.exports = mongoose.model("OTP" , OTPSchema)