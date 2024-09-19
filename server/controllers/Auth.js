const User = require('../models/User')
const otpGenerator = require('otp-generator');
const OTP = require('../models/OTP')
const bcrypt = require("bcrypt")


//sendotp
exports.sendOTP = async (req,res) => {
    try {
        const {email} = req.body; //fetching email

        //checking user exist or not

        const checkUser = await User.findOne({email});

        if(checkUser){
        return res.status(401).json({
            success:false,
            message:"User already exists",
            })
        }

        var otp = otpGenerator.generate(6 , {
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false,
        });

        console.log(otp);

        var result = await otp.findOne({otp:otp});

        while(result){
            var otp = otpGenerator.generate(6 , {
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false,
            });

            var result = await otp.findOne({otp:otp});
        }

        const otpPayload = {email ,otp};

        const otpbody = await OTP.create(otpPayload);
        console.log(otpbody);

        res.status(201).json({
            success:true,
            message:"Otp sent successfully",
            otp,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}


//signup
exports.signUp = async (req,res) => {
    try {
        //fetch data

        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            accountType,
            contactNumber,
            otp
        } = req.body;

        //validate data

        if(!firstName || !lastName || !email || !password 
            || !confirmPassword || !otp){
                return res.status(403).json({
                    success:false,
                    message:"Please fill all details", 
                })
            }
        //pass and confirm pass match

        if(password !== confirmPassword){
            return res.status(400).json({
                success:false,
                message:"Password and Confirm Password do not match",
            })
        }
        //check user exist or not 

        const existingUser = await OTP.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User already exists",
            })
        }

        //find most recent otp for user

        const recentOtp = await OTP.find({email}).sort({createdAt:-1}).limit(1);
        console.log(recentOtp)

        //validate otp

        if(recentOtp.length == 0){
            //OTP not found
            return res.status(400).json({
                success:false,
                message:"OTP not found",
            })
        }else if(recentOtp != otp){
            //OTP does not match
            return res.status(400).json({
                success:false,
                message:"Invalid OTP",
            })
        }
        

        //hash the pass

        const hashedPassword = await bcrypt.hash(password , 10);

        //create entry in db

        const 
        //return res
    } catch (error) {
        console.log(error)
    }
}













//login

//changepassword