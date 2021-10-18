const {
  LoginController,
} = require("../../../../presentation/controllers/auth/login");
const { loginFactory } = require("../../useCases/auth/login");

const loginControllerFactory = function () {
  return new LoginController(loginFactory());
};

exports.loginControllerFactory = loginControllerFactory;
