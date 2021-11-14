const { AppError } = require("./AppError");

class NotAcceptableException extends AppError {
  constructor(message = "Not Acceptable") {
    super(406, message, "Not Acceptable Error");
  }
}

exports.NotAcceptableException = NotAcceptableException;
