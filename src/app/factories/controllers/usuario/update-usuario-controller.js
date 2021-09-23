const {
  UpdateUsuarioController,
} = require("../../../../presentation/controllers/usuario/update-usuario");
const {
  updateUsuarioFactory,
} = require("../../useCases/usuario/update-usuario");

const updateUsuarioControllerFactory = function () {
  return new UpdateUsuarioController(updateUsuarioFactory());
};

exports.updateUsuarioControllerFactory = updateUsuarioControllerFactory;
