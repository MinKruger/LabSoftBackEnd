const {
  GetAllModalidadesController,
} = require("../../../../presentation/controllers/modalidade/get-all-modalidades");
const {
  getAllModalidadesFactory,
} = require("../../useCases/modalidade/get-all-modalidades");

const getAllModalidadesControllerFactory = function () {
  return new GetAllModalidadesController(getAllModalidadesFactory());
};

exports.getAllModalidadesControllerFactory = getAllModalidadesControllerFactory;
