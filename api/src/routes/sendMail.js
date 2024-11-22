const express = require("express");
const sendMailController = require("../controllers/sendMail");
const { body } = require('express-validator'); // Middleware
const router = express.Router();

router.post(
  "/",
  [
    body("email")
      .notEmpty()
      .isEmail()
      .withMessage("Please provide a valid email."),
  ],
  sendMailController
);

module.exports = router;