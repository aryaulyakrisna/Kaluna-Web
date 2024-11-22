const nodemailer = require("nodemailer");

const sendMailController = async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "aryaulyakrisna2004@gmail.com", // Your Gmail address
      pass: "vhcz xlhx eiim fvfu", // Your Gmail app password (not your regular password)
    },
  });

  const mailOptions = {
    from: "aryaulyakrisna2004@gmail.com", // Sender address
    to: req.body.email, // Recipient address
    subject: "Pesan Diriku", // Subject of the email
    text: "halo, diriku", // Plain text body of the email
    html: "<h1>Hello World<h1/>", // HTML body of the email (optional)
  };

  try {
    // Send email
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully", info });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email", error });
  }
};

module.exports = sendMailController;
