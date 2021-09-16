const {
  AtleticaRepository,
} = require("../../../data/repositories/AtleticaRepository");
const {
  GetAllAtleticasUseCase,
} = require("../../../data/useCases/get-all-atleticas");

const getAllAtleticasFactory = function () {
  const atleticaRepository = new AtleticaRepository();

  const getAtleticaByIdUseCase = new GetAllAtleticasUseCase(atleticaRepository);

  return getAtleticaByIdUseCase;
};

exports.getAllAtleticasFactory = getAllAtleticasFactory;
