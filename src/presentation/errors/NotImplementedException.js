const { AppError } = require("./AppError");

class NotImplementedException extends AppError {
  constructor(message = "Not found") {
    super(501, message, "Nout Found Error");
  }
}

exports.NotImplementedException = NotImplementedException;
