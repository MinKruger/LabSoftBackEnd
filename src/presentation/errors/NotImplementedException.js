const { AppError } = require("./AppError");

class NotImplementedException extends AppError {
  constructor(message = "Not implemented") {
    super(501, message, "Method not implemented");
  }
}

exports.NotImplementedException = NotImplementedException;
