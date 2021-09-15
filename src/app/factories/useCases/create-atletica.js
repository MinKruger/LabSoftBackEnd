const {
  AtleticaCursoRepository,
} = require("../../../data/repositories/AtleticaCursoRepository");
const {
  AtleticaRepository,
} = require("../../../data/repositories/AtleticaRepository");
const {
  CreateAtleticaUseCase,
} = require("../../../data/useCases/create-atletica");

const createAtleticaFactory = function () {
  const atleticaRepository = new AtleticaRepository();
  const atleticaCursoRepository = new AtleticaCursoRepository();
  const createAtleticaUseCase = new CreateAtleticaUseCase(
    atleticaRepository,
    atleticaCursoRepository
  );

  return createAtleticaUseCase;
};

exports.createAtleticaFactory = createAtleticaFactory;
