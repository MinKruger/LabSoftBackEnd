const {
  DeleteJogosController,
} = require("../../../../presentation/controllers/jogo/delete-jogo");
const {
  deleteJogoFactory,
} = require("../../useCases/jogo/delete-jogo");

const deleteJogoControllerFactory = function () {
  return new DeleteJogosController(deleteJogoFactory());
};

exports.deleteJogoControllerFactory = deleteJogoControllerFactory;
