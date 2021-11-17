const {
  CreateJogoController,
} = require("../../../../presentation/controllers/jogo/create-jogo");
const {
  createJogoFactory,
} = require("../../useCases/jogo/create-jogo");

const createJogoControllerFactory = function () {
  return new CreateJogoController(createJogoFactory());
};

exports.createJogoControllerFactory = createJogoControllerFactory;
