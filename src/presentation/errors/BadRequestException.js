const { AppError } = require("./AppError");

class BadRequestException extends AppError {
  constructor(message = "Bad Request") {
    super(400, message, "Bad Request Error");
  }
}

exports.BadRequestException = BadRequestException;
