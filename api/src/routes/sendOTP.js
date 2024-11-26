const express = require("express");
const sendOTPController = require("../controllers/sendOTP");
const { body } = require("express-validator"); // Middleware
const router = express.Router();

router.post(
  "/",
  [
    body("email")
      .notEmpty()
      .isEmail()
      .withMessage("Please provide a valid email."),
  ],
  sendOTPController
);

module.exports = router;
