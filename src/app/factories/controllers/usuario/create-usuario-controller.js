const {
  CreateUsuarioController,
} = require("../../../../presentation/controllers/usuario/create-usuario");
const {
  createUsuarioFactory,
} = require("../../useCases/usuario/create-usuario");

const createUsuarioControllerFactory = function () {
  return new CreateUsuarioController(createUsuarioFactory());
};

exports.createUsuarioControllerFactory = createUsuarioControllerFactory;
