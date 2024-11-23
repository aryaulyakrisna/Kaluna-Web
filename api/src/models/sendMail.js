const dbPool = require("../config/config");

const sendMailModel = (id, email, otp) => {
  return dbPool.query(
    "INSERT INTO t_otp (id, `email`, `otp`) VALUES (?, ?, ?)",
    [id, email, otp]
  );
};

module.exports = sendMailModel;
