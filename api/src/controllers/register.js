const registerModel = require("../models/register");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator"); 

const registerController = async (req, res) => {
  try {
    const invalid = validationResult(req); // Check if req is valid

    if (!invalid.isEmpty()) {
      return res.status(400).json({ errors: invalid.array() });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const request = {...req.body, hash: hash};

    await registerModel(request.first_name, request.last_name, request.email, request.phone_number, request.hash);
    res.json({
      message: "Registered successfully!",
    });
  } catch (error) {
    res.json({
      message: "Error registering",
    });
  }
};

module.exports = registerController;
