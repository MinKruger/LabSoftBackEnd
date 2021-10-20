const { AppError } = require("./AppError");

class ForbiddenException extends AppError {
  constructor(message = "Forbidden") {
    super(403, message, "Forbidden Error");
  }
}

exports.ForbiddenException = ForbiddenException;
