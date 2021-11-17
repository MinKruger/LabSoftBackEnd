const {
  JogoRepository,
} = require("../../../../data/repositories/JogoRepository");
const {
  GetAllJogosUseCase,
} = require("../../../../data/useCases/jogo/get-all-jogos");

const getAllJogosFactory = function () {
  const jogoRepository = new JogoRepository();

  return new GetAllJogosUseCase(jogoRepository);
};

exports.getAllJogosFactory = getAllJogosFactory;
