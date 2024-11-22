const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginModel = require("../models/login");
const { validationResult } = require("express-validator");

const loginController = async (req, res) => {
  try {
    const user = await loginModel(req.body.email);
    const invalid = validationResult(req); // Check if req is invalid

    if (!invalid.isEmpty()) {
      return res.status(400).json({ errors: invalid.array() });
    }

    if (!user[0].length) {
      return res.json({
        error: "Not found user!",
      });
    }
    const password = req.body.password;

    bcrypt.compare(password, user[0][0].password, function (err, result) {
      if (err || !result) {
        return res.status(400).json({
          message: "Wrong password/email",
        });
      } else if (result) {
        const token = jwt.sign(
          {
            id: user[0][0].id,
            email: user[0][0].email,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "30m",
          }
        );

        return res.status(200).json({
          email: user[0][0].email,
          token,
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = loginController;
