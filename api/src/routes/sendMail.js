const express = require("express");
const sendMailController = require("../controllers/sendMail");
const router = express.Router();

router.post("/", sendMailController);

module.exports = router;