const {
  ResetPasswordController,
} = require("../../../../presentation/controllers/auth/reset-password");
const { resetPasswordFactory } = require("../../useCases/auth/reset-password");

const resetPasswordControllerFactory = function () {
  return new ResetPasswordController(resetPasswordFactory());
};

exports.resetPasswordControllerFactory = resetPasswordControllerFactory;
