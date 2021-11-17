const {
  JogoRepository,
} = require("../../../../data/repositories/JogoRepository");
const {
  CreateJogoUseCase,
} = require("../../../../data/useCases/jogo/create-jogo");

const createJogoFactory = function () {
  const jogoRepository = new JogoRepository();
  return new CreateJogoUseCase(jogoRepository);
};

exports.createJogoFactory = createJogoFactory;
