const express = require("express");
const changePasswordController = require("../controllers/changePassword");
const { body } = require("express-validator"); // Middleware
const router = express.Router();

router.post(
  "/",
  [
    body("email")
      .notEmpty()
      .isEmail()
      .withMessage("Please provide a valid email."),
    body("password").notEmpty().trim().withMessage("Missing Password code"),
    body("otp").notEmpty().trim().withMessage("Missing OTP code"),
  ],
  changePasswordController
);

module.exports = router;
