const cors = require('cors');
require('dotenv').config();

const express = require("express");
const app = express();
const PORT = process.env.PORT;

// Routes
const login = require('./routes/login');
const register = require('./routes/register');
const sendMail = require('./routes/sendMail');

// Middlewares
app.use(cors());
app.use(express.json());
const emailCheckMiddleware = require("./middleware/emailCheck")
const sendMailCheckMiddleware = require("./middleware/sendMailCheck")
// const template = require('./middlewares/sanitation');

app.get("/", (req, res) => {
  res.send("Running...");
});

app.use('/login', login);
app.use('/register', emailCheckMiddleware, register);
app.use('/send-mail', sendMailCheckMiddleware, sendMail);

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
