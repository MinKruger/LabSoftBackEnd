const {
  UpdateJogoController,
} = require("../../../../presentation/controllers/jogo/update-jogo");
const {
  updateJogoFactory,
} = require("../../useCases/jogo/update-jogo");

const updateJogoControllerFactory = function () {
  return new UpdateJogoController(updateJogoFactory());
};

exports.updateJogoControllerFactory = updateJogoControllerFactory;
