const cors = require('cors');
require('dotenv').config();

const express = require("express");
const app = express();
const PORT = process.env.PORT;

// Routes
const login = require('./routes/login');
const register = require('./routes/register');
const sendOTP = require('./routes/sendOTP');
const changePassword = require('./routes/changePassword');

// Middlewares
app.use(cors());
app.use(express.json());
const emailCheckMiddleware = require("./middleware/emailCheck");
const emailOTPCheckMiddleware = require("./middleware/emailOTPCheck");
const OTPCheckMiddleware = require("./middleware/OTPCheck");

app.get("/", (req, res) => {
  res.send("Running...");
});

app.use('/login', login);
app.use('/register', emailCheckMiddleware, register);
app.use('/get-otp', emailOTPCheckMiddleware, sendOTP);
app.use("/change-password", OTPCheckMiddleware, changePassword);

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
