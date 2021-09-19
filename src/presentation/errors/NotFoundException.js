const { AppError } = require("./AppError");

class NotFoundException extends AppError {
  constructor(message = "Not found") {
    super(404, message, "Nout Found Error");
  }
}

exports.NotFoundException = NotFoundException;
