const {
  UpdateCampeonatoController,
} = require("../../../../presentation/controllers/campeonato/update-campeonato");
const {
  updateCampeonatoFactory,
} = require("../../useCases/campeonato/update-campeonato");

const updateCampeonatoControllerFactory = function () {
  return new UpdateCampeonatoController(updateCampeonatoFactory());
};

exports.updateCampeonatoControllerFactory = updateCampeonatoControllerFactory;
