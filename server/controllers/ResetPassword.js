const User = require("../models/User");
const crypto = require("crypto");

// resetPasswordToken
exports.resetPasswordToken = async (req, res) => {
    try {
        const { email } = req.body; 

        const user = await User.findOne({ email: email });
        if (!user) {
            return res.json({
                success: false,
                message: "User is not registered",
            });
        }

        // Generate token
        const token = crypto.randomUUID();

        // Adding token to the user
        const updatedDetails = await User.findOneAndUpdate(
            {email:email}
            {
                token:token,
                resetPasswordExpires:5*60*1000,
            }
        )
    } catch (error) {
        console.error("Error generating reset token:", error);
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};
