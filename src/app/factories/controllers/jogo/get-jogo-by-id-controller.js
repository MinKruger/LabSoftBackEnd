const {
  GetJogoByIdController,
} = require("../../../../presentation/controllers/jogo/get-jogo-by-id");
const {
  getJogoByIdFactory,
} = require("../../useCases/jogo/get-jogo-by-id");

const getJogoByIdControllerFactory = function () {
  return new GetJogoByIdController(getJogoByIdFactory());
};

exports.getJogoByIdControllerFactory = getJogoByIdControllerFactory;
