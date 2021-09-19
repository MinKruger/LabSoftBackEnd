const {
  CreateAtleticaController,
} = require("../../../../presentation/controllers/atletica/create-atletica");
const {
  createAtleticaFactory,
} = require("../../useCases/atletica/create-atletica");

const createAtleticaControllerFactory = function () {
  return new CreateAtleticaController(createAtleticaFactory());
};

exports.createAtleticaControllerFactory = createAtleticaControllerFactory;
