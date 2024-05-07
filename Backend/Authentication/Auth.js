const jwt = require("jsonwebtoken");
const user = require("../model/user");

const authFunction = async (res, req, next) => {
  const auth = await req.heaser("Authorization");
  if (!auth) {
    return res
      .status(401)
      .json({ message: "Unauthorized - No Bearer Token provided" });
  }
  const token = await authHeader.replace("Bearer ", "").trim();
  // Verify the token using the provided secret key
  try {
    const verified = jwt.verify(token, process.env.SECRET_KEY);
    //  decode here
    if (!findUser) {
      return res.status(401).json({ message: "Unauthorized - User not found" });
    } else {
      const findUser = await user.findOne({
        _id: verified._id,
      });
      req.user = findUser;
      req.userId = findUser._id;
      req.token = auth;
      next(); // Continue to the next middleware or route handler
    }
  } catch (error) {
    return res.status(401).json({ message: "Unauthorization failed" });
  }
};
module.exports = authFunction;
