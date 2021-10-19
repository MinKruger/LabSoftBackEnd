const {
  RegisterController,
} = require("../../../../presentation/controllers/auth/register");
const {
  registerFactory,
} = require("../../useCases/auth/register");

const registerControllerFactory = function () {
  return new RegisterController(registerFactory());
};

exports.registerControllerFactory = registerControllerFactory;
