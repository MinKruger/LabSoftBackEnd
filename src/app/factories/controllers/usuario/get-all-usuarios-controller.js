const {
  GetAllUsuariosController,
} = require("../../../../presentation/controllers/usuario/get-all-usuarios");
const {
  getAllUsuariosFactory,
} = require("../../useCases/usuario/get-all-usuarios");

const getAllUsuariosControllerFactory = function () {
  return new GetAllUsuariosController(getAllUsuariosFactory());
};

exports.getAllUsuariosControllerFactory = getAllUsuariosControllerFactory;
