const {
  AtleticaRepository,
} = require("../../../data/repositories/AtleticaRepository");
const {
  GetAtleticaByIdUseCase,
} = require("../../../data/useCases/atletica/get-atletica-by-id");

const getAtleticaByIdFactory = function () {
  const atleticaRepository = new AtleticaRepository();

  const getAtleticaByIdUseCase = new GetAtleticaByIdUseCase(atleticaRepository);

  return getAtleticaByIdUseCase;
};

exports.getAtleticaByIdFactory = getAtleticaByIdFactory;
