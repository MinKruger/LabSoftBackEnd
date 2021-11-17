const {
  JogoRepository,
} = require("../../../../data/repositories/JogoRepository");
const {
  UpdateJogoUseCase,
} = require("../../../../data/useCases/jogo/update-jogo");

const updateJogoFactory = function () {
  const jogoRepository = new JogoRepository();

  return new UpdateJogoUseCase(jogoRepository);
};

exports.updateJogoFactory = updateJogoFactory;
