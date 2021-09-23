const {
  DeleteUsuarioController,
} = require("../../../../presentation/controllers/usuario/delete-usuario");
const {
  deleteUsuarioFactory,
} = require("../../useCases/usuario/delete-usuario");

const deleteUsuarioControllerFactory = function () {
  return new DeleteUsuarioController(deleteUsuarioFactory());
};

exports.deleteUsuarioControllerFactory = deleteUsuarioControllerFactory;
