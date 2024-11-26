const changePasswordModel = require("../models/changePassword");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

const changePassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    const invalid = validationResult(req); // Check if req is valid

    if (!invalid.isEmpty()) {
      return res.status(400).json({ error: invalid.array() });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    await changePasswordModel(email, hash);

    res.status(200).json({
      message: "Password changed successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Server Error",
    });
  }
};

module.exports = changePassword;
