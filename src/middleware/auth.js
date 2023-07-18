const auth = (req, res, next) => {
  if (
    !req.header("x-api-key") ||
    req.header("x-api-key") != process.env.API_KEY
  ) {
    res.status(401);
    return res.json({
      message: "Invalid API Key!",
    });
  }

  next();
};

module.exports = auth;
