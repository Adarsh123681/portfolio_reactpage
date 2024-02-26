const jwt = require("jsonwebtoken");

async function auth(req, res, next) {
  const token = await req.cookies.token;
  console.log(token);
  if (!token) {
    res.status(401).send("token not found");
  } else {
    const token_verification = jwt.verify(
      token,
      "adarshportfoliowebsiteisawesome450"
    );
    res.status(200).json({ message: "token verification success..." });
    req.userId = await token_verification.userId;
    next();
  }
}

module.exports = auth;
