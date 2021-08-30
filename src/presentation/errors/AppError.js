class AppError extends Error {
  constructor(status, message, name) {
    super(message);
    this.name = name || "AppError";
    this.status = status || 500;
  }
}

exports.AppError = AppError;
