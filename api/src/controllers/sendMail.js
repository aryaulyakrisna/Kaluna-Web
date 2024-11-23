const nodemailer = require("nodemailer");
const sendMailModel = require("../models/sendMail");

const sendMailController = async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "aryaulyakrisna2004@gmail.com", // Your Gmail address
      pass: "vhcz xlhx eiim fvfu", // Your Gmail app password (not your regular password)
    },
  });

  request = req.body;
  const otp = `${Math.floor(Math.random() * 10)}${Math.floor(
    Math.random() * 10
  )}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`;

  const mailOptions = {
    from: "aryaulyakrisna2004@gmail.com", // Sender address
    to: req.body.email, // Recipient address
    subject: "Pesan Kode OTP", // Subject of the email
    html: `
    <div
      style="width: 100%; height: 300px; background-color: #004225; line-height: 300px"
      id="otp">
      <div style="vertical-align: middle; color: #F5F5DC; font-weight: 700; font-size: 4rem; width: 100%; text-align: center">
        ${otp}
      </div>
      </div>
    `, // HTML body of the email (optional)
  };

  try {
    await sendMailModel(request.id, request.email, otp);
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully", info });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email", error });
  }
};

module.exports = sendMailController;
