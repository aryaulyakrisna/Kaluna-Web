const dbPool = require("../config/config");

const loginModel = (email) => {
  return dbPool.query(
    `SELECT *
    FROM t_user
    WHERE email = ?`, email
  );
};

module.exports = loginModel;
