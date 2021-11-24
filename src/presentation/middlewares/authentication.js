const { AuthToken } = require("../../app/providers/AuthToken");
const { UnauthorizedException } = require("../errors/UnauthorizedException");

exports.middlewareAuthentication = (req, res, next) => {
  const [, token] = req.headers.authorization?.split(" ") || "";

  if (!token) {
    throw new UnauthorizedException("Token is required");
  }

  const data = AuthToken.authenticate(token);
  req.userID = data.id;
  console.log(data)

  next();
};
