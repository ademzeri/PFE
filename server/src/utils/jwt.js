const jwt = require("jsonwebtoken");
const config = require("../../config");

function generateToken(username) {
  const secretKey = config.JWT_SECRET;
  console.log(secretKey);
  const payload = {
    username: username,
  };

  const token = jwt.sign(payload, secretKey, { expiresIn: "1h" }); // Token expires in 1 hour

  return token;
}

module.exports = generateToken;
