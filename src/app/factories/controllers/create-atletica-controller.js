const {
  CreateAtleticaController,
} = require("../../../presentation/controllers/create-atletica");
const { createAtleticaFactory } = require("../useCases/create-atletica");

const createAtleticaControllerFactory = function () {
  return new CreateAtleticaController(createAtleticaFactory());
};

exports.createAtleticaControllerFactory = createAtleticaControllerFactory;
