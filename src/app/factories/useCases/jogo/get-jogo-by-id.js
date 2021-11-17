const {
  JogoRepository,
} = require("../../../../data/repositories/JogoRepository");
const {
  GetJogoByIdUseCase,
} = require("../../../../data/useCases/jogo/get-jogo-by-id");

const getJogoByIdFactory = function () {
  const jogoRepository = new JogoRepository();

  return new GetJogoByIdUseCase(jogoRepository);
};

exports.getJogoByIdFactory = getJogoByIdFactory;
