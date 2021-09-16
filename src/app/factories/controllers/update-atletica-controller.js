const {
  UpdateAtleticasController,
} = require("../../../presentation/controllers/update-atletica");
const { updateAtleticaFactory } = require("../useCases/update-atletica");

const updateAtleticaControllerFactory = function () {
  return new UpdateAtleticasController(updateAtleticaFactory());
};

exports.updateAtleticaControllerFactory = updateAtleticaControllerFactory;
