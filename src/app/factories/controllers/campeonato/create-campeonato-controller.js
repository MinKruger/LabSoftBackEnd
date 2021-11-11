const {
  CreateCampeonatoController,
} = require("../../../../presentation/controllers/campeonato/create-campeonato");
const {
  createCampeonatoFactory,
} = require("../../useCases/campeonato/create-campeonato");

const createCampeonatoControllerFactory = function () {
  return new CreateCampeonatoController(createCampeonatoFactory());
};

exports.createCampeonatoControllerFactory = createCampeonatoControllerFactory;
