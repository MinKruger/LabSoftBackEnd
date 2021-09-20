const {
  AtleticaRepository,
} = require("../../../../data/repositories/AtleticaRepository");
const {
  CreateAtleticaUseCase,
} = require("../../../../data/useCases/atletica/create-atletica");

const createAtleticaFactory = function () {
  const atleticaRepository = new AtleticaRepository();

  return new CreateAtleticaUseCase(atleticaRepository);
};

exports.createAtleticaFactory = createAtleticaFactory;
