const {
  GetAtleticaByIdController,
} = require("../../../../presentation/controllers/atletica/get-atletica-by-id");
const {
  getAtleticaByIdFactory,
} = require("../../useCases/atletica/get-atletica-by-id");

const getAtleticaByIdControllerFactory = function () {
  return new GetAtleticaByIdController(getAtleticaByIdFactory());
};

exports.getAtleticaByIdControllerFactory = getAtleticaByIdControllerFactory;
