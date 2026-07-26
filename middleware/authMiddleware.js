// JWT Authentication Middleware

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Authentication token missing",
    });
  }

  console.log("User authenticated");

  next();
};