const {
  GetAllCampeonatosController,
} = require("../../../../presentation/controllers/campeonato/get-all-campeonatos");
const {
  getAllCampeonatosFactory,
} = require("../../useCases/campeonato/get-all-campeonatos");

const getAllCampeonatosControllerFactory = function () {
  return new GetAllCampeonatosController(getAllCampeonatosFactory());
};

exports.getAllCampeonatosControllerFactory = getAllCampeonatosControllerFactory;
