const express = require('express');
const registerController = require('../controllers/register');
const router = express.Router();
const { body } = require('express-validator'); // Middleware

router.post(
  "/",
  [
    body("first_name").notEmpty().trim().withMessage("Please provide a valid first name."),
    body("last_name").notEmpty().trim().withMessage("Please provide a valid last name."),
    body("email").notEmpty().isEmail().withMessage("Please provide a valid email."),
    body("phone_number").notEmpty().isMobilePhone().withMessage("Please provide a valid phone number"),
    body("password")
      .notEmpty()
      .trim()
      .isLength({ min: 6 })
      .withMessage("Password isn't long enough!")
      .matches(/[A-Z]/)
      .withMessage("Must include capital letter!")
      .matches(/[a-z]/)
      .withMessage("Must include lowercase letter!")
      .matches(/[0-9]/)
      .withMessage("Must include number!")      
  ],
  registerController
);

module.exports = router;