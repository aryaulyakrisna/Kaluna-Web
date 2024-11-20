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
// const template = require('./middlewares/sanitation');

app.get("/", (req, res) => {
  res.send("Running...");
});

app.use('/login', login);
app.use('/register', register);
app.use('/send-mail', sendMail);

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
