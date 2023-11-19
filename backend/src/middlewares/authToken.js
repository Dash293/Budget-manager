const jwt = require("jsonwebtoken");

// checks if the token exists
const authenticateToken = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.sendStatus(401);
  }

  try {
    // retrieves user id from token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    return next();
  } catch (err) {
    return res.sendStatus(403);
  }
};

module.exports = authenticateToken;
