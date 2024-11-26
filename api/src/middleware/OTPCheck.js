const { totp } = require("otplib");

const OTPCheck = async (req, res, next) => {
  const { otp, email } = req.body;
  const secret = email + process.env.OTP_SECRET;

  try {
    // Verify OTP code
    const isValid = totp.check(otp, secret);

    if (isValid) {
      next();
    } else {
      res.status(400).json({ message: "Invalid or expired OTP", data: [email, otp] });
    }
  } catch (error) {
    res.status(500).json({
      error: "Server Error",
    });
  }
};

module.exports = OTPCheck;
