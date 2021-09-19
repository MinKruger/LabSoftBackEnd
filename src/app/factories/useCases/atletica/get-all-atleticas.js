const {
  AtleticaRepository,
} = require("../../../../data/repositories/AtleticaRepository");
const {
  GetAllAtleticasUseCase,
} = require("../../../../data/useCases/atletica/get-all-atleticas");

const getAllAtleticasFactory = function () {
  const atleticaRepository = new AtleticaRepository();

  return new GetAllAtleticasUseCase(atleticaRepository);
};

exports.getAllAtleticasFactory = getAllAtleticasFactory;
