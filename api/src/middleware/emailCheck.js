const dbPool = require("../config/config");

const emailCheckMiddleware = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      next();
    }

    const result = await dbPool.query(
      `SELECT 1
       FROM t_user
       WHERE email = ?
       LIMIT 1`,
      [email]
    );

    if (result[0].length > 0) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    next();
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = emailCheckMiddleware;
