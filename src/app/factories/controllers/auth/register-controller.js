const {
  RegisterController,
} = require("../../../../presentation/controllers/auth/register");
const {
  createUsuarioFactory,
} = require("../../useCases/usuario/create-usuario");

const registerControllerFactory = function () {
  return new RegisterController(createUsuarioFactory());
};

exports.registerControllerFactory = registerControllerFactory;
