const {
  CursoRepository,
} = require("../../../../data/repositories/CursoRepository");
const { GetCursosUseCase } = require("../../../../data/useCases/curso/get-cursos");

const getCursosFactory = function () {
  const cursoRepository = new CursoRepository();

  return new GetCursosUseCase(cursoRepository);
};

exports.getCursosFactory = getCursosFactory;
