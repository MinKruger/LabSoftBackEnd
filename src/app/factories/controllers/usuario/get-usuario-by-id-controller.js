const {
  GetUsuarioByIdController,
} = require("../../../../presentation/controllers/usuario/get-usuario-by-id");
const {
  getUsuarioByIdFactory,
} = require("../../useCases/usuario/get-usuario-by-id");

const getUsuarioByIdControllerFactory = function () {
  return new GetUsuarioByIdController(getUsuarioByIdFactory());
};

exports.getUsuarioByIdControllerFactory = getUsuarioByIdControllerFactory;
