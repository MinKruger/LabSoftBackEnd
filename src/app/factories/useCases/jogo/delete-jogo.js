const {
  JogoRepository,
} = require("../../../../data/repositories/JogoRepository");
const {
  DeleteJogoUseCase,
} = require("../../../../data/useCases/jogo/delete-jogo");

const deleteJogoFactory = function () {
  const jogoRepository = new JogoRepository();

  return new DeleteJogoUseCase(jogoRepository);
};

exports.deleteJogoFactory = deleteJogoFactory;
