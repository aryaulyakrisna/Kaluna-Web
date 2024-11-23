const dbPool = require("../config/config");

const emailCheckMiddleware = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({message: "Email is required"});
    }

    const result = await dbPool.query(
      `SELECT id
       FROM t_user
       WHERE email = ?`,
      [email]
    );

    if (result[0].length === 0) {
      return res.status(400).json({ message: "Email is not registered" });
    } else {
      req.body = {...req.body, id: result[0][0].id}
      next();
    }

  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = emailCheckMiddleware;
