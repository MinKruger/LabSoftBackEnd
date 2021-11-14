const {
  GetAllEventosController,
} = require("../../../../presentation/controllers/evento/get-all-eventos");

const {
  getAllEventosFactory,
} = require("../../useCases/evento/get-all-eventos");

const getAllEventosControllerFactory = function () {
  return new GetAllEventosController(getAllEventosFactory());
};

exports.getAllEventosControllerFactory = getAllEventosControllerFactory;
