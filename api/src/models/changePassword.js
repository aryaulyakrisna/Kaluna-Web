const dbPool = require("../config/config");

const changePasswordModel = (email, password) => {
  return dbPool.query(
    `UPDATE t_user
     SET password = ?
     WHERE email = ?`,
    [password, email]
  );
};

module.exports = changePasswordModel;