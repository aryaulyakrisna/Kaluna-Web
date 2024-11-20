const dbPool = require('../config/config');

const registerModel = (first_name, last_name, email, phone_number, password) => {
  return dbPool.query(
    "INSERT INTO `t_user` (`first_name`, `last_name`, `email`, `phone_number`, `password`) VALUES (?, ?, ?, ?, ?)", [first_name, last_name, email, phone_number, password]
  );
}

module.exports = registerModel;

