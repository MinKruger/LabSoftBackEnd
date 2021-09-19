const {
  AtleticaCursoRepository,
} = require("../../../../data/repositories/AtleticaCursoRepository");
const {
  AtleticaRepository,
} = require("../../../../data/repositories/AtleticaRepository");
const {
  CursoRepository,
} = require("../../../../data/repositories/CursoRepository");
const {
  CreateAtleticaUseCase,
} = require("../../../../data/useCases/atletica/create-atletica");

const createAtleticaFactory = function () {
  const atleticaRepository = new AtleticaRepository();
  const atleticaCursoRepository = new AtleticaCursoRepository();
  const cursoRepository = new CursoRepository();

  return new CreateAtleticaUseCase(
    atleticaRepository,
    atleticaCursoRepository,
    cursoRepository
  );
};

exports.createAtleticaFactory = createAtleticaFactory;
