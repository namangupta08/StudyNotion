const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST || "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    console.log("Sending email to:", email);

    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"StudyNotion" <${process.env.MAIL_USER}>`,
      to: email,
      subject: title,
      html: body,
    });

    console.log("Email sent:", info);
    return info;
  } catch (error) {
    console.log("Error occurred while sending email:", error.message);
    throw error;
  }
};

module.exports = mailSender;
