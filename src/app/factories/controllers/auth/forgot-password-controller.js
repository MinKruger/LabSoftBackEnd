const {
  ForgotPasswordController,
} = require("../../../../presentation/controllers/auth/forgot-password");
const { forgotPasswordFactory } = require("../../useCases/auth/forgot-password");

const forgotPasswordControllerFactory = function () {
  return new ForgotPasswordController(forgotPasswordFactory());
};

exports.forgotPasswordControllerFactory = forgotPasswordControllerFactory;
