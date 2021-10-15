const { AppError } = require("./AppError");

class UnauthorizedException extends AppError {
  constructor(message = "Unauthorized") {
    super(401, message, "Unauthorized Error");
  }
}

exports.UnauthorizedException = UnauthorizedException;
