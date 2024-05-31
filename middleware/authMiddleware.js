const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  // try {
  console.log(token, "8");

  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  console.log(decodedToken);
  console.log(token, "5");
  console.log(process.env.JWT_SECRET);

  req.userId = decodedToken.userId;

  //   next();
  // } catch (error) {
  //   res.status(401).json({ message: "Invalid token" });
  // }
};

module.exports = authMiddleware;
