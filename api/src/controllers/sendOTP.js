const nodemailer = require("nodemailer");
const {totp} = require("otplib");
const { validationResult } = require("express-validator")

const sendMailController = async (req, res) => {
  try {
    const invalid = validationResult(req); // Check if req is valid
    if (!invalid.isEmpty()) {
      return res.status(400).json({error: invalid.array()});
    }

    const { email } = req.body;
    const secret = email + process.env.OTP_SECRET;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // Your Gmail address
        pass: process.env.APP_PASSWORD, // Your Gmail app password (not your regular password)
      },
    });

    totp.options = {
      digits: 6,
      step: 330,
    };

    const otp = totp.generate(secret);

    const mailOptions = {
      from: "aryaulyakrisna2004@gmail.com", // Sender address
      to: email, // Recipient address
      subject: "Pesan Kode OTP", // Subject of the email
      html: `
    <div
      style="width: 100%; height: 300px; background-color: #004225; line-height: 300px; margin-bottom: 24px"
      id="otp">
      <div style="vertical-align: middle; color: #F5F5DC; font-weight: 700; font-size: 3rem; width: 100%; text-align: center">
        ${otp}
      </div>
    </div>

    Hihi kode OTP kamu sudah sampai nih 😊
    `, // HTML body of the email (optional)
    };

    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully", info });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email", error });
  }
};

module.exports = sendMailController;
