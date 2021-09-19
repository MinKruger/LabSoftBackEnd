const {
  AtleticaRepository,
} = require("../../../../data/repositories/AtleticaRepository");
const {
  GetAtleticaByIdUseCase,
} = require("../../../../data/useCases/atletica/get-atletica-by-id");

const getAtleticaByIdFactory = function () {
  const atleticaRepository = new AtleticaRepository();

  return new GetAtleticaByIdUseCase(atleticaRepository);
};

exports.getAtleticaByIdFactory = getAtleticaByIdFactory;
