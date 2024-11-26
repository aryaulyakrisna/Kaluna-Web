const express = require('express');
const loginController = require('../controllers/login');
const router = express.Router();
const { body } = require("express-validator"); // Middleware

router.post("/", [
  body('email').isEmail().notEmpty().withMessage("Wrong password/email"), // Check if email exists and is email
  body('password').notEmpty().trim().withMessage("Wrong password/email"),
], loginController);

module.exports = router;
